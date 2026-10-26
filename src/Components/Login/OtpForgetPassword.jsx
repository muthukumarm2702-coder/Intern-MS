import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpForgetPassword.css';
import graduationCap from '../../assets/Login Assets/otpCap.png';
import illustration from '../../assets/Login Assets/otpArt.png';
import shield from '../../assets/Login Assets/shield.png';
import lock from '../../assets/Login Assets/secureLock.png';
import handshake from '../../assets/Login Assets/handshake.png';
import rightArrow from '../../assets/Login Assets/sendArrow.png';

const codeLength = 6;
const codeLifetime = 55;

export const OtpForgetPassword = () => {
  const navigate = useNavigate();
  const inputs = useRef([]);
  const [digits, setDigits] = useState(() => Array(codeLength).fill(''));
  const [seconds, setSeconds] = useState(codeLifetime);
  const [error, setError] = useState('');
  const [expiresAt, setExpiresAt] = useState(() => Date.now() + codeLifetime * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      const millisecondsLeft = expiresAt - Date.now();
      const secondsLeft = Math.ceil(millisecondsLeft / 1000);

      if (secondsLeft <= 0) {
        setSeconds(0);
        clearInterval(timer);
      } else {
        setSeconds(secondsLeft);
      }
    }, 250);

    return () => clearInterval(timer);
  }, [expiresAt]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const remainingSeconds = String(seconds % 60).padStart(2, '0');
  const clock = `${minutes}:${remainingSeconds}`;
  const isExpired = seconds === 0;

  const handleResend = () => {
    if (Date.now() < expiresAt) {
      return;
    }

    setExpiresAt(Date.now() + codeLifetime * 1000);
    setSeconds(codeLifetime);
    setDigits(Array(codeLength).fill(''));
    setError('');
    inputs.current[0].focus();
  };

  const handleChange = (index, event) => {
    const value = event.target.value.replace(/\D/g, '').slice(-1);
    const nextDigits = digits.slice();
    nextDigits[index] = value;

    setDigits(nextDigits);
    setError('');

    if (value && index < codeLength - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (event) => {
    const text = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, codeLength);
    if (!text) {
      return;
    }

    event.preventDefault();
    const nextDigits = Array(codeLength).fill('');

    for (let index = 0; index < text.length; index++) {
      nextDigits[index] = text[index];
    }

    setDigits(nextDigits);
    setError('');
    inputs.current[text.length - 1].focus();
  };

  const handleVerify = (event) => {
    event.preventDefault();

    if (Date.now() >= expiresAt) {
      setError('Your code has expired. Select Resend to get a new code.');
      return;
    }

    const code = digits.join('');
    if (!/^[0-9]{6}$/.test(code)) {
      setError('Please enter all 6 digits.');
      return;
    }

    setError('');
    navigate('/reset-password');
  };

  return (
    <div className="imsPageOtp">
      <div className="imsPanelOtp">
        <div className="imsBrandOtp">
          <img
            className="imsLogoOtp"
            src={graduationCap}
            alt=""
          />
          <div className="imsBrandTextOtp">
            <div className="imsBrandNameOtp">Internship Management System</div>
            <p className="imsTaglineOtp">
              Learn <span className="imsDotTaglineOtp"></span> Grow{' '}
              <span className="imsDotTaglineOtp"></span> Build Your Future
            </p>
          </div>
        </div>

        <h1 className="imsTitleOtp">
          Verify Identity & Enter
          <br />
          Security Code
        </h1>
        <p className="imsDescOtp">
          A 6-digit one-time password has been transmitted to your registered
          <br />
          institutional credentials.
        </p>

        <img
          className="imsArtOtp"
          src={illustration}
          alt="Identity verification"
        />

        <div className="imsNoteOtp">
          <img
            className="imsNoteIconOtp"
            src={shield}
            alt=""
          />
          <div className="imsNoteTextOtp">
            <p className="imsNoteBodyOtp">
              “Credential change verified across university registrars, Dean approvals,
              and enterprise partner portals.”
            </p>
            <p className="imsNoteMetaOtp">
              <span className="imsProtocolOtp">Enterprise IAM & Security Operations</span>
              <span className="imsVerifiedOtp"> — Zero Trust Protocol Active</span>
            </p>
          </div>
        </div>
      </div>

      <form
        className="imsFormOtp"
        onSubmit={handleVerify}
      >
        <h2 className="imsHeadingOtp">Enter Verification Code</h2>
        <p className="imsSubheadOtp">
          {isExpired ? (
            'Your verification code has expired. Select Resend to get a new code.'
          ) : (
            <>
              Enter your 6-digit code. It expires in{' '}
              <span className="imsExpireOtp">{clock}</span>.
            </>
          )}
        </p>

        <div className="imsCodesOtp">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(node) => {
                inputs.current[index] = node;
              }}
              className="imsDigitOtp"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={digit}
              aria-label={`Digit ${index + 1}`}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              onPaste={handlePaste}
            />
          ))}
        </div>

        {error ? (
          <p
            className="imsErrorOtp"
            role="alert"
          >
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="imsVerifyOtp"
          disabled={isExpired}
        >
          Verify and Continue
          <img
            src={rightArrow}
            alt=""
          />
        </button>

        <p className="imsResendOtp">
          {isExpired ? (
            <button
              type="button"
              className="imsLinkOtp"
              onClick={handleResend}
            >
              Resend verification code
            </button>
          ) : (
            <span className="imsTimerOtp">You can resend a code in {clock}.</span>
          )}
        </p>

        <div className="imsDividerOtp" />

        <div className="imsBadgesOtp">
          <span className="imsBadgeOtp">
            <img
              className="imsBadgeIconOtp"
              src={lock}
              alt=""
            />
            End-to-end encrypted
          </span>
          <span className="imsBadgeOtp">
            <img
              className="imsBadgeIconOtp"
              src={handshake}
              alt=""
            />
            Secure handshake
          </span>
        </div>
      </form>
    </div>
  );
};
