import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HRRegistration.css';
import hrIllustration from '../../assets/Registration Asset/hrDesk.png';
import dashboard from '../../assets/Registration Asset/dashboard.png';
import logo from '../../assets/Registration Asset/cap.png';
import companyIcon from '../../assets/Registration Asset/company.png';
import eyeIcon from '../../assets/Registration Asset/eye.png';
import dropdownIcon from '../../assets/Registration Asset/chevron.png';

export const HRRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [policy, setPolicy] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.fullName.value.trim() || !form.company.value.trim()) {
      setMessage('Please enter your full name and company name.');
      return;
    }
    if (form.password.value !== form.confirmPassword.value) {
      setMessage('Your passwords do not match.');
      return;
    }
    setMessage('Your details are valid. Account creation will be available when the registration service is connected.');
  };

  return (
    <main className="imsPageHRRegistration">
      <div className="imsRegistrationHRRegistration">
        <section className="imsIntroHRRegistration" aria-label="Internship Management System">
          <div className="imsBrandHRRegistration">
            <div className="imsLogoHRRegistration"><img className="imsLogoImageHRRegistration" src={logo} alt="" /></div>
            <div><h2 className="imsBrandTitleHRRegistration">Internship Management System</h2><p className="imsTaglineHRRegistration">Learn • Grow • Build Your Future</p></div>
          </div>
          <h1 className="imsTitleHRRegistration">Empower your team with<br />top-tier talent.</h1>
          <p className="imsDescriptionHRRegistration">Streamline your recruitment process, manage internships with ease, and connect with the next generation of industry leaders.</p>
          <img className="imsIllustrationHRRegistration" src={hrIllustration} alt="HR professional working at her desk" />
          <img className="imsDashboardHRRegistration" src={dashboard} alt="Unified Talent Dashboard. Monitor all applications in real-time. 75% efficiency boost and 120+ placements." />
          <div className="imsStatsHRRegistration"><div><strong className="imsStatValueHRRegistration">500+</strong><span className="imsStatLabelHRRegistration">COMPANIES</span></div><div><strong className="imsStatValueHRRegistration">10k+</strong><span className="imsStatLabelHRRegistration">STUDENTS</span></div></div>
        </section>

        <section className="imsFormSectionHRRegistration">
          <h2 className="imsFormTitleHRRegistration">Create your account</h2>
          <p className="imsSubtitleHRRegistration">Join our ecosystem of professional employers.</p>
          <form className="imsFormHRRegistration" onSubmit={handleSubmit} onChange={() => setMessage('')}>
            <div className="imsFieldHRRegistration imsFullWidthHRRegistration imsRoleFieldHRRegistration">
              <label htmlFor="hr-role" className="imsRoleLabelHRRegistration imsLabelHRRegistration">REGISTERING AS <span className="imsRequiredHRRegistration">*</span></label>
              <div className="imsDropdownHRRegistration">
                <select className="imsSelectHRRegistration imsFocusSelectHRRegistration" id="hr-role" name="role" defaultValue="HR"><option value="HR">HR</option></select>
                <img className="imsDropdownIconHRRegistration" src={dropdownIcon} alt="" />
              </div>
            </div>
            <div className="imsFieldHRRegistration"><label className="imsLabelHRRegistration" htmlFor="hr-name">Full Name <span className="imsRequiredHRRegistration">*</span></label><input className="imsInputHRRegistration imsFocusInputHRRegistration" id="hr-name" name="fullName" placeholder="John Doe" autoComplete="name" required /></div>
            <div className="imsFieldHRRegistration"><label className="imsLabelHRRegistration" htmlFor="hr-email">Work Email Address <span className="imsRequiredHRRegistration">*</span></label><input className="imsInputHRRegistration imsFocusInputHRRegistration" id="hr-email" name="email" type="email" placeholder="john.doe@company.com" autoComplete="email" required /></div>
            <div className="imsFieldHRRegistration">
              <label className="imsLabelHRRegistration" htmlFor="hr-phone">Phone Number <span className="imsRequiredHRRegistration">*</span></label>
              <div className="imsPhoneHRRegistration"><span className="imsCountryCodeHRRegistration">+91</span><input className="imsInputHRRegistration imsFocusInputHRRegistration" id="hr-phone" name="phone" type="tel" placeholder="Enter your number" autoComplete="tel-national" pattern="[0-9]{10}" maxLength={10} title="Enter a 10-digit phone number" required /></div>
            </div>
            <div className="imsFieldHRRegistration">
              <label className="imsLabelHRRegistration" htmlFor="hr-department">Department <span className="imsRequiredHRRegistration">*</span></label>
              <div className="imsDropdownHRRegistration">
                <select className="imsSelectHRRegistration imsFocusSelectHRRegistration" id="hr-department" name="department" defaultValue="" required><option value="" disabled>Select department</option><option>Human Resources</option><option>Recruitment</option><option>Operations</option><option>Engineering</option><option>Marketing</option><option>Finance</option><option>Other</option></select>
                <img className="imsDropdownIconHRRegistration" src={dropdownIcon} alt="" />
              </div>
            </div>
            <div className="imsFieldHRRegistration imsFullWidthHRRegistration"><label className="imsLabelHRRegistration" htmlFor="hr-company">Company Name <span className="imsRequiredHRRegistration">*</span></label><div className="imsInputIconHRRegistration"><img className="imsCompanyImageHRRegistration" src={companyIcon} alt="" /><input className="imsInputHRRegistration imsCompanyInputHRRegistration imsFocusInputHRRegistration" id="hr-company" name="company" placeholder="InternHub Inc." autoComplete="organization" required /></div></div>
            <div className="imsFieldHRRegistration">
              <label className="imsLabelHRRegistration" htmlFor="hr-password">Password <span className="imsRequiredHRRegistration">*</span></label>
              <div className="imsPasswordHRRegistration"><input className="imsInputHRRegistration imsPasswordInputHRRegistration imsFocusInputHRRegistration" id="hr-password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Create a strong password" autoComplete="new-password" minLength={8} required /><button className="imsEyeButtonHRRegistration imsButtonHRRegistration" type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword}><img className="imsEyeImageHRRegistration" src={eyeIcon} alt="" /></button></div>
            </div>
            <div className="imsFieldHRRegistration">
              <label className="imsLabelHRRegistration" htmlFor="hr-confirm-password">Confirm Password <span className="imsRequiredHRRegistration">*</span></label>
              <div className="imsPasswordHRRegistration"><input className="imsInputHRRegistration imsPasswordInputHRRegistration imsFocusInputHRRegistration" id="hr-confirm-password" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm your password" autoComplete="new-password" minLength={8} required /><button className="imsEyeButtonHRRegistration imsButtonHRRegistration" type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label={showConfirmPassword ? 'Hide confirmed password' : 'Show confirmed password'} aria-pressed={showConfirmPassword}><img className="imsEyeImageHRRegistration" src={eyeIcon} alt="" /></button></div>
            </div>
            <div className="imsAgreementHRRegistration imsFullWidthHRRegistration"><input className="imsCheckboxHRRegistration imsFocusInputHRRegistration" id="hr-terms" name="terms" type="checkbox" required /><div><label htmlFor="hr-terms">I agree to the </label><button className="imsPolicyButtonHRRegistration imsButtonHRRegistration" type="button" onClick={() => setPolicy('Terms of Service')}>Terms of Service</button> and <button className="imsPolicyButtonHRRegistration imsButtonHRRegistration" type="button" onClick={() => setPolicy('Privacy Policy')}>Privacy Policy</button></div></div>
            {message && <p className="imsMessageHRRegistration imsFullWidthHRRegistration" role="status">{message}</p>}
            <button className="imsSubmitHRRegistration imsFullWidthHRRegistration imsButtonHRRegistration" type="submit">Create Account</button>
          </form>
          <div className="imsDividerHRRegistration"><span>OR</span></div>
          <p className="imsSignInHRRegistration">Already have an account? <Link className="imsSignInLinkHRRegistration imsFocusLinkHRRegistration" to="/login">Sign in</Link></p>
        </section>
      </div>
      {policy && <div className="imsModalOverlayHRRegistration"><section className="imsModalHRRegistration" role="dialog" aria-modal="true" aria-labelledby="hr-policy-title"><h2 className="imsModalTitleHRRegistration" id="hr-policy-title">{policy}</h2><p className="imsModalTextHRRegistration">{policy === 'Terms of Service' ? 'The terms of service will be provided before account registration becomes available.' : 'The privacy policy will be provided before account registration becomes available.'}</p><button className="imsButtonHRRegistration imsCloseButtonHRRegistration" type="button" autoFocus onClick={() => setPolicy('')}>Close</button></section></div>}
    </main>
  );
};
