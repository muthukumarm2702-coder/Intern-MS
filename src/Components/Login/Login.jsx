import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import graduationCap from '../../assets/Login Assets/gradCap.png';
import loginBg from '../../assets/Login Assets/loginArt.png';
import shieldBlue from '../../assets/Login Assets/blueShield.png';
import quoteTextShield from '../../assets/Login Assets/whiteShield.png';
import uptrendArrow from '../../assets/Login Assets/trendArrow.png';
import mailIcon from '../../assets/Login Assets/mail.png';
import lockIcon from '../../assets/Login Assets/lock.png';
import eyeOpen from '../../assets/Login Assets/eyeOpen.png';
import rightArrow from '../../assets/Login Assets/rightArrow.png';
import googleIcon from '../../assets/Login Assets/google.png';

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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail) {
      setError('Please enter your email address.');
      return;
    }

    if (/[A-Z]/.test(trimmedEmail)) {
      setError('Please use only lowercase letters in your email address.');
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError('Please enter a valid email address, like name@example.com.');
      return;
    }

    const passwordError = getPasswordError(password);

    if (passwordError) {
      setError(passwordError);
      return;
    }

    setError('');
  };

  return (
    <div className="imsPageLogin">
      <div className="imsLeftLogin">
        <div className="imsBrandLogin">
          <div className="imsLogoLogin">
            <img
              src={graduationCap}
              alt=""
            />
          </div>
          <div className="imsBrandTextLogin">
            <div className="imsBrandNameLogin">Internship Management System</div>
            <p>
              Learn <span className="imsDotTaglineLogin"></span> Grow{' '}
              <span className="imsDotTaglineLogin"></span> Build Your Future
            </p>
          </div>
        </div>

        <h1 className="imsTitleLogin">
          Connecting academic talent with
          <br />
          career-defining corporate internships
        </h1>
        <p className="imsDescLogin">
          The verified enterprise portal synchronizing university dean approvals,
          experiential learning hours,
          <br />
          and Fortune 500 mentorship agreements
        </p>

        <div className="imsActiveCardLogin imsActiveCard1Login">
          <strong>14,200+</strong>
          <span className="imsActiveLabelLogin">ACTIVE INTERNS</span>
          <span className="imsActiveTrendLogin imsGreenLogin">
            <img
              src={uptrendArrow}
              alt=""
            />{' '}
            +24% YoY
          </span>
        </div>

        <div className="imsActiveCardLogin imsActiveCard2Login">
          <strong>98.4%</strong>
          <span className="imsActiveLabelLogin">CREDIT VERIFIED</span>
          <span className="imsActiveTrendLogin imsBlueLogin">
            <img
              src={shieldBlue}
              alt=""
            />{' '}
            Deans Approved
          </span>
        </div>

        <div className="imsActiveCardLogin imsActiveCard3Login">
          <strong>14,200+</strong>
          <span className="imsActiveLabelLogin">ACTIVE INTERNS</span>
          <span className="imsActiveTrendLogin imsGreenLogin">
            <img
              src={uptrendArrow}
              alt=""
            />{' '}
            +24% YoY
          </span>
        </div>

        <img
          className="imsArtLogin"
          src={loginBg}
          alt="Internship portal"
        />

        <div className="imsQuoteLogin">
          <div className="imsQuoteIconLogin">
            <img
              src={quoteTextShield}
              alt=""
            />
          </div>
          <div className="imsQuoteTextLogin">
            <p>
              Automated audit trails cut academic credit clearance time from 14 days to
              under 48 hours.
            </p>
            <span>
              Dr. Elena Vance —{' '}
              <b>Dean of Experiential Education, Northeastern Consortium</b>
            </span>
          </div>
        </div>
      </div>

      <form
        className="imsFormLogin"
        noValidate
        onSubmit={handleSignIn}
      >
        <h2 className="imsHeadingLogin">Welcome Back</h2>
        <p className="imsSubheadLogin">Manage your career journey</p>

        <label
          className="imsLabelLogin imsLabelEmailLogin"
          htmlFor="loginEmail"
        >
          Email Address
        </label>
        <div className="imsInputLogin">
          <img
            className="imsIconInputLogin"
            src={mailIcon}
            alt=""
          />
          <input
            id="loginEmail"
            type="email"
            autoComplete="username"
            placeholder="Enter Email address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError('');
            }}
          />
        </div>

        <div className="imsPasswordRowLogin">
          <label
            className="imsPasswordLabelLogin"
            htmlFor="loginPassword"
          >
            Password
          </label>
          <button
            type="button"
            className="imsForgotLogin"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password?
          </button>
        </div>
        <div className="imsInputLogin">
          <img
            className="imsIconInputLogin"
            src={lockIcon}
            alt=""
          />
          <input
            id="loginPassword"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
          />
          <button
            type="button"
            className={`imsIconEyeLogin${showPassword ? ' imsClosedEyeLogin' : ''}`}
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
          >
            <img
              src={eyeOpen}
              alt=""
            />
          </button>
        </div>

        <label className="imsRememberLogin">
          <input
            type="checkbox"
            checked={keepSignedIn}
            onChange={(event) => setKeepSignedIn(event.target.checked)}
          />
          <span>Keep me signed in</span>
        </label>

        {error ? (
          <p
            className="imsErrorLogin"
            role="alert"
          >
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="imsSigninLogin"
        >
          Sign In{' '}
          <img
            src={rightArrow}
            alt=""
          />
        </button>

        <div className="imsLineDividerLogin">
          <span>OR CONTINUE WITH</span>
        </div>

        <button
          type="button"
          className="imsGoogleLogin"
        >
          <img
            src={googleIcon}
            alt="google icon"
          />
          Google
        </button>

        <p className="imsAccountLogin">
          Don't have an account? <Link to="/hr-registration">Create Account</Link>
        </p>

        <div className="imsFooterLogin">
          <a href="#">Help</a>
          <i></i>
          <a href="#">Privacy</a>
          <i></i>
          <a href="#">Terms</a>
        </div>
      </form>
    </div>
  );
};
