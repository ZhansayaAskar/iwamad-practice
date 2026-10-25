import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import { EventsPage } from './EventsPage';
import { events } from '../data/events';

describe('EventsPage', () => {
  it('shows one card for every event in the array', () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>
    );

    expect(screen.getAllByRole('article')).toHaveLength(events.length);
  });
});