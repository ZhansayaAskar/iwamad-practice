import { useParams, Link } from 'react-router';
import { events } from '../data/events';
import { EventSignupForm } from '../components/EventSignupForm';

export function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <section>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">← Back to events</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{event.title}</h1>
      <p>{event.date} · {event.place}</p>
      <p>Seats: {event.seats}</p>
      
      <EventSignupForm event={event} />
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/events">← Back to events</Link>
      </div>
    </section>
  );
}