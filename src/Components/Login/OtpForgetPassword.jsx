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


export const OtpForgetPassword = () => {
  const navigate = useNavigate();
  const inputs = useRef([]);
  const [digits, setDigits] = useState(() => Array(codeLength).fill(''));
  const [seconds, setSeconds] = useState(55);
  const [error, setError] = useState('');

  useEffect(() => {
    if (seconds <= 0) return undefined;
    const timer = setTimeout(() => setSeconds((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const clock = `00:${String(seconds).padStart(2, '0')}`;

  const updateDigit = (index, value) => {
    const next = digits.slice();
    next[index] = value;
    setDigits(next);
    setError('');
  };

  const handleChange = (index, event) => {
    const value = event.target.value.replace(/\D/g, '').slice(-1);
    updateDigit(index, value);
    if (value && index < codeLength - 1) inputs.current[index + 1].focus();
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (event) => {
    const text = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, codeLength);
    if (!text) return;
    event.preventDefault();
    const next = Array(codeLength).fill('');
    text.split('').forEach((char, index) => {
      next[index] = char;
    });
    setDigits(next);
    setError('');
    inputs.current[Math.min(text.length, codeLength) - 1].focus();
  };

  const handleVerify = (event) => {
  event.preventDefault();
  const code = digits.join('');
  if (code.length !== codeLength || digits.some((d) => d === '')) {
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
          <img className="imsLogoOtp" src={graduationCap} alt="Internship Management System" />
          <div className="imsBrandTextOtp">
            <h3 className="imsBrandNameOtp">Internship Management System</h3>
            <p className="imsTaglineOtp">Learn <span className="imsDotTaglineOtp"></span> Grow <span className="imsDotTaglineOtp"></span> Build Your Future</p>
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

        <img className="imsArtOtp" src={illustration} alt="Identity verification" />

        <div className="imsNoteOtp">
          <img className="imsNoteIconOtp" src={shield} alt="shield" />
          <div className="imsNoteTextOtp">
            <p className="imsNoteBodyOtp">
              “Credential change verified across university registrars, Dean approvals, and enterprise partner portals.”
            </p>
            <p className="imsNoteMetaOtp">
              <span className="imsProtocolOtp">Enterprise IAM & Security Operations</span>
              <span className="imsVerifiedOtp"> — Zero Trust Protocol Active</span>
            </p>
          </div>
        </div>
      </div>

      <form className="imsFormOtp" onSubmit={handleVerify}>
        <h2 className="imsHeadingOtp">Enter Verification Code</h2>
        <p className="imsSubheadOtp">
          We’ve sent a 6-digit code to your registered Email and phone number. The code
          <br />
          will expire in <span className="imsExpireOtp">09:59</span> minutes.
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
          <p className="imsErrorOtp" role="alert">
            {error}
          </p>
        ) : null}

        <button type="submit" className="imsVerifyOtp">
          Verify and Continue
          <img src={rightArrow} alt="rightArrow" />
        </button>

        <p className="imsResendOtp">
          <span className="imsPromptOtp">Didn’t receive the code?</span>
          <button type="button" className="imsLinkOtp" onClick={() => setSeconds(55)}>
            Resend
          </button>
          <span className="imsTimerOtp">(in {clock})</span>
        </p>

        <div className="imsDividerOtp" />

        <div className="imsBadgesOtp">
          <span className="imsBadgeOtp">
            <img className="imsBadgeIconOtp" src={lock} alt="lock" />
            End-to-end encrypted
          </span>
          <span className="imsBadgeOtp">
            <img className="imsBadgeIconOtp" src={handshake} alt="handshake" />
            Secure handshake
          </span>
        </div>
      </form>
    </div>
  );
};


