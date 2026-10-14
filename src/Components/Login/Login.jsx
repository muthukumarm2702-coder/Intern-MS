import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

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

    if (!password) {
      setError('Please enter your password.');
      return;
    }
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumberOrSymbol = /[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password);
    if (!hasUpper || !hasLower || !hasNumberOrSymbol) {
      setError('Password must include uppercase, lowercase, and a number or symbol.');
      return;
    }
    setError('');
  };

  return (
    <div className="imsPageLogin">
      
      <div className="imsLeftLogin">
        <div className="imsBrandLogin">
          <div className="imsLogoLogin">
            <img src={graduationCap} alt="logo" />
          </div>
          <div className="imsBrandTextLogin">
            <h3>Internship Management System</h3>
            <p>Learn <span className="imsDotTaglineLogin"></span> Grow <span className="imsDotTaglineLogin"></span> Build Your Future</p>
          </div>
        </div>

        <h1 className="imsTitleLogin"> 
          Connecting academic talent with
          <br />
          career-defining corporate internships
        </h1>
        <p className="imsDescLogin">
          The verified enterprise portal synchronizing university dean approvals, experiential learning hours,
          <br />
          and Fortune 500 mentorship agreements
        </p>

        <div className="imsActiveCardLogin imsActiveCard1Login">
          <h2>14,200+</h2>
          <span className="imsActiveLabelLogin">ACTIVE INTERNS</span>
          <span className="imsActiveTrendLogin imsGreenLogin">
            <img src={uptrendArrow} alt="uptrendArrow" /> +24% YoY
          </span>
        </div>

        <div className="imsActiveCardLogin imsActiveCard2Login">
          <h2>98.4%</h2>
          <span className="imsActiveLabelLogin">CREDIT VERIFIED</span>
          <span className="imsActiveTrendLogin imsBlueLogin">
            <img src={shieldBlue} alt="shieldBlue" /> Deans Approved
          </span>
        </div>

        <div className="imsActiveCardLogin imsActiveCard3Login">
          <h2>14,200+</h2>
          <span className="imsActiveLabelLogin">ACTIVE INTERNS</span>
          <span className="imsActiveTrendLogin imsGreenLogin">
            <img src={uptrendArrow} alt="uptrendArrow" /> +24% YoY
          </span>
        </div>

        <img className="imsArtLogin" src={loginBg} alt="Internship portal" />

        <div className="imsQuoteLogin">
          <div className="imsQuoteIconLogin">
            <img src={quoteTextShield} alt="quoteTextShield" />
          </div>
          <div className="imsQuoteTextLogin">
            <p>
              Automated audit trails cut academic credit clearance time from 14
              days to under 48 hours.
            </p>
            <span>
              Dr. Elena Vance — <b>Dean of Experiential Education, Northeastern Consortium</b>
            </span>
          </div>
        </div>
      </div>

      
      <form className="imsFormLogin" noValidate onSubmit={handleSignIn}>
        <h2 className="imsHeadingLogin">Welcome Back</h2>
        <p className="imsSubheadLogin">Manage your career journey</p>

        <label className="imsLabelLogin imsLabelEmailLogin" htmlFor="loginEmail">Email Address</label>
        <div className="imsInputLogin">
          <img className="imsIconInputLogin" src={mailIcon} alt="mailIcon" />
          <input
            id="loginEmail"
            type="email"
            autoComplete="username"
            placeholder="Enter Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
          />
        </div>

        <div className="imsPasswordRowLogin">
          <label className="imsPasswordLabelLogin" htmlFor="loginPassword">Password</label>
          <button type="button" className="imsForgotLogin" onClick={() => navigate('/forgot-password')}>
            Forgot Password?
          </button>
        </div>
        <div className="imsInputLogin">
          <img className="imsIconInputLogin" src={lockIcon} alt="lockIcon" />
          <input
            id="loginPassword"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
          />
          <button
            type="button"
            className={`imsIconEyeLogin${showPassword ? ' imsClosedEyeLogin' : ''}`}
           
            onClick={() => setShowPassword((visible) => !visible)}
          >
            <img src={eyeOpen} alt="eyeOpen" />
            
          </button>
        </div>

        <label className="imsRememberLogin">
          <input
            type="checkbox"
            checked={keepSignedIn}
            onChange={(e) => setKeepSignedIn(e.target.checked)}
          />
          <span>Keep me signed in</span>
        </label>

        {error ? (
          <p className="imsErrorLogin" role="alert">
            {error}
          </p>
        ) : null}

        <button type="submit" className="imsSigninLogin">
          Sign In <img src={rightArrow} alt="rightArrow" />
        </button>

        <div className="imsLineDividerLogin">
          <span>OR CONTINUE WITH</span>
        </div>

        <button type="button" className="imsGoogleLogin">
          <img src={googleIcon} alt="googleIcon" />
          Google
        </button>

        <p className="imsAccountLogin">
          Don't have an account? <a href="/hr-registration">Create Account</a>
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


