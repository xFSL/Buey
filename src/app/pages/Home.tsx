import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchBar } from '../components/SearchBar';
import { EventCard } from '../components/EventCard';
import { mockEvents } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ExternalLink, Phone, Mail } from 'lucide-react';

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

      {/* Contact Your Legislator */}
      <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">
              Contact Your Legislator
            </h3>
          </div>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Make your voice heard! Find and contact your local, state, and federal representatives to share your views on important issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              className="flex-1"
              variant="default"
              onClick={() => window.open('https://www.house.gov/representatives/find-your-representative', '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Find My Representative
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => window.open('https://www.senate.gov/senators/senators-contact.htm', '_blank')}
            >
              <Mail className="h-4 w-4 mr-2" />
              Find My Senator
            </Button>
          </div>
        </div>
      </Card>

      <div>
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
      </div>
    </div>
  );
}
