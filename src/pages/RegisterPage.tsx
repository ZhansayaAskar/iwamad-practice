import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';
import { Button } from '../components/ui/Button';
import { TextField } from '../components/ui/TextField';
import {
  validateRegistration,
  type RegistrationValues,
} from '../lib/validateRegistration';

export function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const errors = validateRegistration(values);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      // success — form replaced below
    }
  };

  const isValid = Object.keys(errors).length === 0;

  if (submitAttempted && isValid) {
    return (
      <p role="status">
        Thanks, {values.fullName}. You are registered.
      </p>
    );
  }

  const showError = (field: keyof RegistrationValues) =>
    submitAttempted || touched[field] ? errors[field] : undefined;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1>Register</h1>

      <TextField
        label="Full name"
        name="fullName"
        type="text"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError('fullName')}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError('email')}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError('password')}
      />

      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError('confirmPassword')}
      />

      <div className="field">
        <label className="check">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={values.acceptTerms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          I accept the terms
        </label>
        {showError('acceptTerms') && (
          <p className="field-error">{showError('acceptTerms')}</p>
        )}
      </div>

      <Button type="submit" variant="primary">
        Create account
      </Button>
    </form>
  );
}