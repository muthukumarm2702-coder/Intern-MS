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

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const hasLength = password.length >= 8;
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!password || !confirmPassword || password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setError('');
    navigate('/reset-success');
  };

  return (
    <div className="imsPageReset">
      <div className="imsPanelReset">
        <div className="imsBrandReset">
          <img className="imsLogoReset" src={graduationCap} alt="Internship Management System" />
          <div className="imsBrandTextReset">
            <h3 className="imsBrandNameReset">Internship Management System</h3>
            <p className="imsTaglineReset">Learn <span className="imsDotTaglineReset"></span> Grow <span className="imsDotTaglineReset"></span> Build Your Future</p>
          </div>
        </div>

        <h1 className="imsTitleReset">Set a Strong Master Password</h1>
        <p className="imsDescReset">
          Protect your internship credentials, academic clearance records, and enterprise
          <br />
          communication channels.
        </p>

        <img className="imsArtReset" src={illustration} alt="Set a strong master password" />

        <div className="imsNoteReset">
          <img className="imsNoteIconReset" src={shield} alt="shield" />
          <div className="imsNoteTextReset">
            <p className="imsNoteBodyReset">
              “Automated credential audit enforces strict NIST 800 63B password guidelines and institutional
              SSO policies.”
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

      <form className="imsFormReset" onSubmit={handleUpdate}>
        <div className="imsLockReset">
          <img src={lockReset} alt="lockReset" />
        </div>

        <h2 className="imsHeadingReset">Set New Password</h2>
        <p className="imsSubheadReset">
          Your new password must be different from previous
          <br />
          passwords.
        </p>

        <label className="imsLabelReset" htmlFor="ims-password-new">
          New Password
        </label>
        <div className="imsFieldReset">
          <img className="imsFieldIconReset" src={lockIcon} alt="lockIcon" />
          <input
            id="ims-password-new"
            type="password"
            placeholder="Min. 8 characters"
            autoComplete="new-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
          />
        </div>

        <label className="imsLabelReset" htmlFor="ims-password-confirm">
          Confirm New Password
        </label>
        <div className="imsFieldReset">
          <img className="imsFieldIconReset" src={shieldCheck} alt="shieldCheck" />
          <input
            id="ims-password-confirm"
            type="password"
            placeholder="Repeat your password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              setError('');
            }}
          />
        </div>

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

        {error ? <p className="imsErrorReset" role="alert">{error}</p> : null}

        <button type="submit" className="imsUpdateReset">
          Update Password
          <img src={rightArrow} alt="rightArrow" />
        </button>

        <button type="button" className="imsBackReset" onClick={() => navigate('/login')}>
          Back to Login
        </button>
      </form>
    </div>
  );
};

