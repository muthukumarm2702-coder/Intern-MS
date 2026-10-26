import { useNavigate } from 'react-router-dom';
import './PasswordResetSuccess.css';
import graduationCap from '../../assets/Login Assets/whiteCap.png';
import illustration from '../../assets/Login Assets/successArt.png';
import shield from '../../assets/Login Assets/shield.png';
import recovery from '../../assets/Login Assets/recovery.png';
import successCheck from '../../assets/Login Assets/successCheck.png';

export const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="imsPageSuccess">
      <div className="imsPanelSuccess">
        <div className="imsBrandSuccess">
          <img
            className="imsLogoSuccess"
            src={graduationCap}
            alt=""
          />
          <div className="imsBrandTextSuccess">
            <div className="imsBrandNameSuccess">Internship Management System</div>
            <p className="imsTaglineSuccess">
              Learn <span className="imsDotTaglineSuccess"></span> Grow{' '}
              <span className="imsDotTaglineSuccess"></span> Build Your Future
            </p>
          </div>
        </div>

        <h1 className="imsTitleSuccess">
          Account Secured & Access
          <br />
          Restored
        </h1>
        <p className="imsDescSuccess">
          Quickly regain access to your verified internship credentials, university
          approvals,
          <br />
          and active corporate placements.
        </p>

        <img
          className="imsArtSuccess"
          src={illustration}
          alt="Account secured"
        />

        <div className="imsNoteSuccess">
          <img
            className="imsNoteIconSuccess"
            src={shield}
            alt=""
          />
          <div className="imsNoteTextSuccess">
            <p className="imsNoteBodySuccess">
              “Credential change verified across university registrars, Dean approvals,
              and enterprise partner portals.”
            </p>
            <p className="imsNoteMetaSuccess">
              <span className="imsProtocolSuccess">
                Enterprise IAM & Security Operations
              </span>
              <span className="imsVerifiedSuccess"> — Zero Trust Protocol Active</span>
            </p>
          </div>
        </div>
      </div>

      <div className="imsFormSuccess">
        <img
          className="imsMarkSuccess"
          src={successCheck}
          alt=""
          aria-hidden="true"
        />

        <p className="imsStatusSuccess">
          <img
            src={recovery}
            alt=""
          />
          Recovery Completed • 256-Bit Encrypted
        </p>

        <h2 className="imsHeadingSuccess">Password Reset Successful!</h2>
        <p className="imsCopySuccess">
          Your account credentials have been securely updated. All active enterprise and
          university sessions have been refreshed.
        </p>

        <button
          type="button"
          className="imsLoginSuccess"
          onClick={() => navigate('/login')}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};
