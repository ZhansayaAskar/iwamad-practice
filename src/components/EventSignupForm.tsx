import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';
import type { CampusEvent } from '../data/events';
import { validateSignup, type SignupValues } from '../lib/validateSignup';
import { TextField } from './ui/TextField';
import { Button } from './ui/Button';

type EventSignupFormProps = {
  event: CampusEvent;
};

export function EventSignupForm({ event }: EventSignupFormProps) {
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const errors = validateSignup(values, seatsLeft);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      const ticketsBooked = Number(values.tickets);
      setSeatsLeft((prev) => prev - ticketsBooked);
      setSuccessMessage(`Booked: ${ticketsBooked} for ${values.fullName}.`);
      setValues({ fullName: '', email: '', tickets: '1' });
      setSubmitAttempted(false);
      setTouched({});
    }
  };

  const showError = (field: keyof SignupValues) =>
    submitAttempted || touched[field] ? errors[field] : undefined;

  return (
    <div style={{ marginTop: '30px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
      <h2>Sign up for this event</h2>
      <p>Seats left: {seatsLeft}</p>

      {successMessage && <p role="status" style={{ color: 'green' }}>{successMessage}</p>}

      <form onSubmit={handleSubmit} noValidate style={{ maxWidth: '300px' }}>
        <TextField
          label="Full name"
          name="fullName"
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
          label="Tickets"
          name="tickets"
          type="number"
          min="1"
          max="4"
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('tickets')}
        />
        <div style={{ marginTop: '15px' }}>
          <Button type="submit">Book</Button>
        </div>
      </form>
    </div>
  );
}