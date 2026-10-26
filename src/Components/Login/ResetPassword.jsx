import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import graduationCap from '../../assets/Login Assets/whiteCap.png';
import illustration from '../../assets/Login Assets/resetShield.png';
import shield from '../../assets/Login Assets/shield.png';
import lockReset from '../../assets/Login Assets/resetLock.png';
import lockIcon from '../../assets/Login Assets/lock.png';
import shieldCheck from '../../assets/Login Assets/shieldCheck.png';
import rightArrow from '../../assets/Login Assets/sendArrow.png';

const getPasswordError = (password) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[^A-Za-z0-9\s]/.test(password);
  const requirementsMessage =
    'Password must include uppercase letters, lowercase letters, special characters, and numbers.';

  if (!password.trim()) {
    return 'Please enter a password.';
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters.';
  }

  if (!hasUppercase) {
    return requirementsMessage;
  }

  if (!hasLowercase) {
    return requirementsMessage;
  }

  if (!hasNumber) {
    return requirementsMessage;
  }

  if (!hasSpecialCharacter) {
    return requirementsMessage;
  }

  return '';
};

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const hasLength = password.length >= 8;
  const passwordsMatch = password.length > 0 && password === confirmPassword;
  let passwordError = '';
  let confirmPasswordError = '';

  if (password || hasSubmitted) {
    passwordError = getPasswordError(password);
  }

  if (confirmPassword || hasSubmitted) {
    if (!confirmPassword) {
      confirmPasswordError = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      confirmPasswordError = 'Passwords do not match.';
    }
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    setHasSubmitted(true);

    const currentPasswordError = getPasswordError(password);

    if (currentPasswordError) {
      return;
    }

    if (!confirmPassword) {
      return;
    }

    if (!passwordsMatch) {
      return;
    }

    navigate('/reset-success');
  };

  return (
    <div className="imsPageReset">
      <div className="imsPanelReset">
        <div className="imsBrandReset">
          <img
            className="imsLogoReset"
            src={graduationCap}
            alt=""
          />
          <div className="imsBrandTextReset">
            <div className="imsBrandNameReset">Internship Management System</div>
            <p className="imsTaglineReset">
              Learn <span className="imsDotTaglineReset"></span> Grow{' '}
              <span className="imsDotTaglineReset"></span> Build Your Future
            </p>
          </div>
        </div>

        <h1 className="imsTitleReset">Set a Strong Master Password</h1>
        <p className="imsDescReset">
          Protect your internship credentials, academic clearance records, and enterprise
          <br />
          communication channels.
        </p>

        <img
          className="imsArtReset"
          src={illustration}
          alt="Set a strong master password"
        />

        <div className="imsNoteReset">
          <img
            className="imsNoteIconReset"
            src={shield}
            alt=""
          />
          <div className="imsNoteTextReset">
            <p className="imsNoteBodyReset">
              “Automated credential audit enforces strict NIST 800 63B password guidelines
              and institutional SSO policies.”
            </p>
            <p className="imsNoteMetaReset">
              <span className="imsProtocolReset">Dr. Elena Vance</span>
              <span className="imsVerifiedReset">
                {' '}
                — Dean of Experiential Education & IAM Security Lead
              </span>
            </p>
          </div>
        </div>
      </div>

      <form
        className="imsFormReset"
        onSubmit={handleUpdate}
      >
        <div className="imsLockReset">
          <img
            src={lockReset}
            alt=""
          />
        </div>

        <h2 className="imsHeadingReset">Set New Password</h2>
        <p className="imsSubheadReset">
          Your new password must be different from previous
          <br />
          passwords.
        </p>

        <label
          className="imsLabelReset"
          htmlFor="ims-password-new"
        >
          New Password
        </label>
        <div className="imsFieldReset">
          <img
            className="imsFieldIconReset"
            src={lockIcon}
            alt=""
          />
          <input
            id="ims-password-new"
            type="password"
            placeholder="Min. 8 characters"
            autoComplete="new-password"
            value={password}
            aria-invalid={Boolean(passwordError)}
            aria-describedby={passwordError ? 'reset-password-error' : undefined}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        {passwordError && (
          <p
            className="imsErrorReset"
            id="reset-password-error"
            role="status"
          >
            {passwordError}
          </p>
        )}

        <label
          className="imsLabelReset"
          htmlFor="ims-password-confirm"
        >
          Confirm New Password
        </label>
        <div className="imsFieldReset">
          <img
            className="imsFieldIconReset"
            src={shieldCheck}
            alt=""
          />
          <input
            id="ims-password-confirm"
            type="password"
            placeholder="Repeat your password"
            autoComplete="new-password"
            value={confirmPassword}
            aria-invalid={Boolean(confirmPasswordError)}
            aria-describedby={confirmPasswordError ? 'reset-confirm-error' : undefined}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </div>

        {confirmPasswordError && (
          <p
            className="imsErrorReset"
            id="reset-confirm-error"
            role="status"
          >
            {confirmPasswordError}
          </p>
        )}

        <div className="imsRulesReset">
          <p className={`imsRuleReset${hasLength ? ' imsMetReset' : ''}`}>
            <span className="imsCheckReset" />
            At least 8 characters
          </p>
          <p className={`imsRuleReset${passwordsMatch ? ' imsMetReset' : ''}`}>
            <span className="imsCheckReset" />
            Passwords match
          </p>
        </div>

        <button
          type="submit"
          className="imsUpdateReset"
        >
          Update Password
          <img
            src={rightArrow}
            alt=""
          />
        </button>

        <button
          type="button"
          className="imsBackReset"
          onClick={() => navigate('/login')}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};
