import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchBar } from '../components/SearchBar';
import { EventCard } from '../components/EventCard';
import { mockEvents } from '../data/mockData';

export function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const signedUpEvents = mockEvents.filter(event => event.isSignedUp);
  const filteredEvents = signedUpEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 space-y-4">
      <SearchBar
        placeholder="Search your events..."
        value={searchQuery}
        onChange={setSearchQuery}
      />

      {/* <div>
        <h2 className="text-lg font-semibold mb-3">Your Upcoming Events</h2>
        {filteredEvents.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center py-8">
            {searchQuery ? 'No events match your search' : 'No events signed up yet'}
          </p>
        ) : (
          <div className="space-y-3">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}
