import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HRRegistration.css';

import hrIllustration from '../../assets/Registration Asset/hr-desk.png';
import dashboard from '../../assets/Registration Asset/dashboard.png';
import logo from '../../assets/Registration Asset/cap.png';
import companyIcon from '../../assets/Registration Asset/company.png';
import eyeIcon from '../../assets/Registration Asset/eye.png';
import dropdownIcon from '../../assets/Registration Asset/dropdown.png';
import departmentArrow from '../../assets/Registration Asset/dept-arrow.png';

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

export const HRRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [policy, setPolicy] = useState('');

  const validateForm = (form) => {
    const fields = form.elements;
    const newErrors = {};

    if (!fields.fullName.value.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!fields.email.value.trim()) {
      newErrors.email = 'Please enter your work email address.';
    } else if (fields.email.validity.typeMismatch) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!fields.phone.value.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[0-9]{10}$/.test(fields.phone.value)) {
      newErrors.phone = 'Please enter a 10-digit phone number.';
    }

    if (!fields.department.value) {
      newErrors.department = 'Please select your department.';
    }

    if (!fields.company.value.trim()) {
      newErrors.company = 'Please enter your company name.';
    }

    const passwordError = getPasswordError(fields.password.value);

    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (!fields.confirmPassword.value) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (fields.password.value !== fields.confirmPassword.value) {
      newErrors.confirmPassword = 'Your passwords do not match.';
    }

    if (!fields.terms.checked) {
      newErrors.terms = 'Please agree to the Terms of Service and Privacy Policy.';
    }

    return newErrors;
  };

  const handleChange = (event) => {
    setMessage('');

    if (hasSubmitted) {
      setErrors(validateForm(event.currentTarget));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const newErrors = validateForm(form);
    setHasSubmitted(true);
    setErrors(newErrors);
    setMessage('');

    if (Object.keys(newErrors).length > 0) {
      for (const field of form.elements) {
        if (newErrors[field.name]) {
          field.focus();
          break;
        }
      }

      return;
    }

    setMessage(
      'Your details are valid. Account creation will be available when the registration service is connected.'
    );
  };

  return (
    <main className="imsPageHRRegistration">
      <div className="imsRegistrationHRRegistration">
        <section className="imsIntroHRRegistration">
          <div className="imsBrandHRRegistration">
            <div className="imsLogoHRRegistration">
              <img
                className="imsLogoImageHRRegistration"
                src={logo}
                alt="Logo"
              />
            </div>
            <div>
              <div className="imsBrandTitleHRRegistration">
                Internship Management System
              </div>
              <span className="imsTaglineHRRegistration">
                <span>Learn</span> <span>Grow</span> <span>Build Your Future</span>
              </span>
            </div>
          </div>
          <h1 className="imsTitleHRRegistration">
            Empower your team with
            <br />
            top-tier talent.
          </h1>
          <p className="imsDescriptionHRRegistration">
            Streamline your recruitment process, manage internships with ease, and connect
            with the next generation of industry leaders.
          </p>
          <div className="imsIllustrationHRRegistration">
          <img
            className="imsIllustrationHRRegistrationimg"
            src={hrIllustration}
            alt="HR professional working at her desk"
          />
          </div>
          <img
            className="imsDashboardHRRegistration"
            src={dashboard}
            alt="Unified Talent Dashboard. Monitor all applications in real-time. 75% efficiency boost and 120+ placements."
          />
          <div className="imsStatsHRRegistration">
            <div>
              <strong className="imsStatValueHRRegistration">500+</strong>
              <span className="imsStatLabelHRRegistration">COMPANIES</span>
            </div>
            <div>
              <strong className="imsStatValueHRRegistration">10k+</strong>
              <span className="imsStatLabelHRRegistration">STUDENTS</span>
            </div>
          </div>
        </section>

        <section className="imsFormSectionHRRegistration">
          <h2 className="imsFormTitleHRRegistration">Create your account</h2>
          <p className="imsSubtitleHRRegistration">
            Join our ecosystem of professional employers.
          </p>
          <form
            className="imsFormHRRegistration"
            onSubmit={handleSubmit}
            onChange={handleChange}
            noValidate
          >
            <div className="imsFieldHRRegistration imsFullWidthHRRegistration imsRoleFieldHRRegistration">
              <label
                htmlFor="hr-role"
                className="imsRoleLabelHRRegistration imsLabelHRRegistration"
              >
                REGISTERING AS <span className="imsRequiredHRRegistration">*</span>
              </label>
              <div className="imsDropdownHRRegistration">
                <select
                  className="imsSelectHRRegistration"
                  id="hr-role"
                  name="role"
                  defaultValue="HR"
                >
                  <option value="HR">HR</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Company">Company</option>
                  <option value="Intern">Intern</option>
                </select>
                <img
                  className="imsDropdownIconHRRegistration"
                  src={dropdownIcon}
                  alt=""
                />
              </div>
            </div>
            <div className="imsFieldHRRegistration">
              <label
                className="imsLabelHRRegistration"
                htmlFor="hr-name"
              >
                Full Name <span className="imsRequiredHRRegistration">*</span>
              </label>
              <input
                className={`imsInputHRRegistration ${errors.fullName ? 'imsInvalidHRRegistration' : ''}`}
                id="hr-name"
                name="fullName"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                placeholder="John Doe"
                autoComplete="name"
                required
              />
              {errors.fullName && (
                <p
                  className="imsFieldErrorHRRegistration"
                  id="fullName-error"
                >
                  {errors.fullName}
                </p>
              )}
            </div>
            <div className="imsFieldHRRegistration">
              <label
                className="imsLabelHRRegistration"
                htmlFor="hr-email"
              >
                Work Email Address <span className="imsRequiredHRRegistration">*</span>
              </label>
              <input
                className={`imsInputHRRegistration ${errors.email ? 'imsInvalidHRRegistration' : ''}`}
                id="hr-email"
                name="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                type="email"
                placeholder="john.doe@company.com"
                autoComplete="email"
                required
              />
              {errors.email && (
                <p
                  className="imsFieldErrorHRRegistration"
                  id="email-error"
                >
                  {errors.email}
                </p>
              )}
            </div>
            <div className="imsFieldHRRegistration">
              <label
                className="imsLabelHRRegistration"
                htmlFor="hr-phone"
              >
                Phone Number <span className="imsRequiredHRRegistration">*</span>
              </label>
              <div className="imsPhoneHRRegistration">
                <span className="imsCountryCodeHRRegistration">+91</span>
                <input
                  className={`imsInputHRRegistration ${errors.phone ? 'imsInvalidHRRegistration' : ''}`}
                  id="hr-phone"
                  name="phone"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  type="tel"
                  placeholder="Enter your number"
                  autoComplete="tel-national"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  title="Enter a 10-digit phone number"
                  required
                />
              </div>
              {errors.phone && (
                <p
                  className="imsFieldErrorHRRegistration"
                  id="phone-error"
                >
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="imsFieldHRRegistration">
              <label
                className="imsLabelHRRegistration"
                htmlFor="hr-department"
              >
                Department <span className="imsRequiredHRRegistration">*</span>
              </label>
              <div className="imsDropdownHRRegistration">
                <select
                  className={`imsSelectHRRegistration ${errors.department ? 'imsInvalidHRRegistration' : ''}`}
                  id="hr-department"
                  name="department"
                  aria-invalid={Boolean(errors.department)}
                  aria-describedby={errors.department ? 'department-error' : undefined}
                  defaultValue=""
                  required
                >
                  <option
                    value=""
                    disabled
                  >
                    Select department
                  </option>
                  <option>Human Resources</option>
                  <option>Recruitment</option>
                  <option>Operations</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Other</option>
                </select>
                <img
                  className="imsDropdownIconHRRegistration"
                  src={departmentArrow}
                  alt=""
                />
              </div>
              {errors.department && (
                <p
                  className="imsFieldErrorHRRegistration"
                  id="department-error"
                >
                  {errors.department}
                </p>
              )}
            </div>
            <div className="imsFieldHRRegistration imsFullWidthHRRegistration">
              <label
                className="imsLabelHRRegistration"
                htmlFor="hr-company"
              >
                Company Name <span className="imsRequiredHRRegistration">*</span>
              </label>
              <div
                className={`imsInputIconHRRegistration ${errors.company ? 'imsInvalidHRRegistration' : ''}`}
              >
                <img
                  className="imsCompanyImageHRRegistration"
                  src={companyIcon}
                  alt=""
                />
                <input
                  className="imsInputHRRegistration imsCompanyInputHRRegistration"
                  id="hr-company"
                  name="company"
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? 'company-error' : undefined}
                  placeholder="InternHub Inc."
                  autoComplete="organization"
                  required
                />
              </div>
              {errors.company && (
                <p
                  className="imsFieldErrorHRRegistration"
                  id="company-error"
                >
                  {errors.company}
                </p>
              )}
            </div>
            <div className="imsFieldHRRegistration">
              <label
                className="imsLabelHRRegistration"
                htmlFor="hr-password"
              >
                Password <span className="imsRequiredHRRegistration">*</span>
              </label>
              <div
                className={`imsPasswordHRRegistration ${errors.password ? 'imsInvalidHRRegistration' : ''}`}
              >
                <input
                  className="imsInputHRRegistration imsPasswordInputHRRegistration"
                  id="hr-password"
                  name="password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
                <button
                  className="imsEyeButtonHRRegistration imsButtonHRRegistration"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                >
                  <img
                    className="imsEyeImageHRRegistration"
                    src={eyeIcon}
                    alt=""
                  />
                </button>
              </div>
              {errors.password && (
                <p
                  className="imsFieldErrorHRRegistration"
                  id="password-error"
                >
                  {errors.password}
                </p>
              )}
            </div>
            <div className="imsFieldHRRegistration">
              <label
                className="imsLabelHRRegistration"
                htmlFor="hr-confirm-password"
              >
                Confirm Password <span className="imsRequiredHRRegistration">*</span>
              </label>
              <div
                className={`imsPasswordHRRegistration ${errors.confirmPassword ? 'imsInvalidHRRegistration' : ''}`}
              >
                <input
                  className="imsInputHRRegistration imsPasswordInputHRRegistration"
                  id="hr-confirm-password"
                  name="confirmPassword"
                  aria-invalid={Boolean(errors.confirmPassword)}
                  aria-describedby={
                    errors.confirmPassword ? 'confirmPassword-error' : undefined
                  }
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
                <button
                  className="imsEyeButtonHRRegistration imsButtonHRRegistration"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword
                      ? 'Hide confirmed password'
                      : 'Show confirmed password'
                  }
                  aria-pressed={showConfirmPassword}
                >
                  <img
                    className="imsEyeImageHRRegistration"
                    src={eyeIcon}
                    alt=""
                  />
                </button>
              </div>
              {errors.confirmPassword && (
                <p
                  className="imsFieldErrorHRRegistration"
                  id="confirmPassword-error"
                >
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="imsAgreementHRRegistration imsFullWidthHRRegistration">
              <input
                className="imsCheckboxHRRegistration"
                id="hr-terms"
                name="terms"
                aria-invalid={Boolean(errors.terms)}
                aria-describedby={errors.terms ? 'terms-error' : undefined}
                type="checkbox"
                required
              />
              <div>
                <label htmlFor="hr-terms">I agree to the </label>
                <button
                  className="imsPolicyButtonHRRegistration imsButtonHRRegistration"
                  type="button"
                  onClick={() => setPolicy('Terms of Service')}
                >
                  Terms of Service
                </button>
                {' and '}
                <button
                  className="imsPolicyButtonHRRegistration imsButtonHRRegistration"
                  type="button"
                  onClick={() => setPolicy('Privacy Policy')}
                >
                  Privacy Policy
                </button>
              </div>
              {errors.terms && (
                <p
                  className="imsFieldErrorHRRegistration"
                  id="terms-error"
                >
                  {errors.terms}
                </p>
              )}
            </div>

            {message && (
              <p
                className="imsMessageHRRegistration imsFullWidthHRRegistration"
                role="status"
              >
                {message}
              </p>
            )}

            <button
              className="imsSubmitHRRegistration imsFullWidthHRRegistration imsButtonHRRegistration"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <div className="imsDividerHRRegistration">
            <span>OR</span>
          </div>
          <p className="imsSignInHRRegistration">
            Already have an account?{' '}
            <Link
              className="imsSignInLinkHRRegistration imsFocusLinkHRRegistration"
              to="/login"
            >
              Sign in
            </Link>
          </p>
        </section>
      </div>

      {policy && (
        <div className="imsModalOverlayHRRegistration">
          <section
            className="imsModalHRRegistration"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hr-policy-title"
            aria-describedby="hr-policy-description"
          >
            <h2
              className="imsModalTitleHRRegistration"
              id="hr-policy-title"
            >
              {policy}
            </h2>
            <p
              className="imsModalTextHRRegistration"
              id="hr-policy-description"
            >
              {policy === 'Terms of Service'
                ? 'The terms of service will be provided before account registration becomes available.'
                : 'The privacy policy will be provided before account registration becomes available.'}
            </p>
            <button
              className="imsButtonHRRegistration imsCloseButtonHRRegistration"
              type="button"
              autoFocus
              onClick={() => setPolicy('')}
            >
              Close
            </button>
          </section>
        </div>
      )}
    </main>
  );
};
