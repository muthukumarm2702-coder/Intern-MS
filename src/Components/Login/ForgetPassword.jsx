import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css';
import graduationCap from '../../assets/Login Assets/whiteCap.png';
import illustration from '../../assets/Login Assets/recoveryArt.png';
import shield from '../../assets/Login Assets/shield.png';
import lockReset from '../../assets/Login Assets/resetLock.png';
import emailIcon from '../../assets/Login Assets/email.png';
import phone from '../../assets/Login Assets/phone.png';
import rightArrow from '../../assets/Login Assets/sendArrow.png';
import backArrow from '../../assets/Login Assets/backArrow.png';

export const ForgetPassword = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState('email');

  const handleSend = (event) => {
    event.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="imsPageForgot">
      <div className="imsPanelForgot">
        <div className="imsBrandForgot">
          <img
            className="imsLogoForgot"
            src={graduationCap}
            alt=""
          />
          <div className="imsBrandTextForgot">
            <div className="imsBrandNameForgot">Internship Management System</div>
            <p className="imsTaglineForgot">
              Learn <span className="imsDotTaglineForgot"></span> Grow{' '}
              <span className="imsDotTaglineForgot"></span> Build Your Future
            </p>
          </div>
        </div>

        <h1 className="imsTitleForgot">
          Secure Account Recovery &
          <br />
          Identity Protection
        </h1>
        <p className="imsDescForgot">
          Quickly regain access to your verified internship credentials, university
          approvals,
          <br />
          and active corporate placements.
        </p>

        <img
          className="imsArtForgot"
          src={illustration}
          alt="Account recovery"
        />

        <div className="imsNoteForgot">
          <img
            className="imsNoteIconForgot"
            src={shield}
            alt=""
          />
          <div className="imsNoteTextForgot">
            <p className="imsNoteBodyForgot">
              All password reset requests are cryptographically signed and logged
              according to institutional FERPA & SOC-2 compliance standards.
            </p>
            <p className="imsNoteMetaForgot">
              <span className="imsProtocolForgot">
                Campus Identity & Access Management (IAM) Protocol
              </span>
              <span className="imsVerifiedForgot">
                {' '}
                &bull;Verified Institutional Security
              </span>
            </p>
          </div>
        </div>
      </div>

      <form
        className="imsFormForgot"
        onSubmit={handleSend}
      >
        <div className="imsLockForgot">
          <img
            src={lockReset}
            alt="lockReset"
          />
        </div>

        <h2 className="imsHeadingForgot">Forgot Password?</h2>
        <p className="imsSubheadForgot">
          Choose your preferred method to receive a one-time
          <br />
          verification code.
        </p>

        <p
          className="imsLabelForgot"
          id="verification-method-label"
        >
          Verification Method
        </p>

        <button
          type="button"
          className={`imsMethodForgot${method === 'email' ? ' imsSelectedForgot' : ''}`}
          aria-pressed={method === 'email'}
          aria-describedby="verification-method-label"
          onClick={() => setMethod('email')}
        >
          <span className="imsMethodIconForgot">
            <img
              src={emailIcon}
              alt=""
            />
          </span>
          <span className="imsMethodTextForgot">
            <span className="imsMethodTitleForgot">Email Verification</span>
            <span className="imsMethodInfoForgot">m**u**r@g***.com</span>
          </span>
          <span
            className={`imsRadioForgot${method === 'email' ? ' imsCheckedForgot' : ''}`}
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          className={`imsMethodForgot${method === 'sms' ? ' imsSelectedForgot' : ''}`}
          aria-pressed={method === 'sms'}
          aria-describedby="verification-method-label"
          onClick={() => setMethod('sms')}
        >
          <span className="imsMethodIconForgot imsPhoneForgot">
            <img
              src={phone}
              alt=""
            />
          </span>
          <span className="imsMethodTextForgot">
            <span className="imsMethodTitleForgot">SMS / Text Message</span>
            <span className="imsMethodInfoForgot">Send code to +91 9****5678</span>
          </span>
          <span
            className={`imsRadioForgot${method === 'sms' ? ' imsCheckedForgot' : ''}`}
            aria-hidden="true"
          />
        </button>

        <button
          type="submit"
          className="imsSendForgot"
        >
          Send Verification Code
          <img
            src={rightArrow}
            alt=""
          />
        </button>

        <button
          type="button"
          className="imsBackForgot"
          onClick={() => navigate('/login')}
        >
          <img
            src={backArrow}
            alt=""
          />
          Back to Login
        </button>
      </form>
    </div>
  );
};
