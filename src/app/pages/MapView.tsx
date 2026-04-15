import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { mockEvents } from '../data/mockData';
import { MapPin, Layers } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function MapView() {
  const [searchQuery, setSearchQuery] = useState('');
  // const [viewMode, setViewMode] = useState<'map' | 'satellite'>('map');
  const [viewMode, setViewMode] = useState<'road' | 'satellite'>('road');

  const filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const upcomingEvents = filteredEvents.filter(e => e.date >= new Date());
  const pastEvents = filteredEvents.filter(e => e.date < new Date());

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 space-y-3">
        <SearchBar
          placeholder="Search locations..."
          value={searchQuery}
          onChange={setSearchQuery}
        />
        
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'road' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('road')}
          >
            Roadview
          </Button>
          <Button
            variant={viewMode === 'satellite' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('satellite')}
          >
            Satellite
          </Button>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="flex-1 relative bg-gray-100 dark:bg-gray-900 mx-4 mb-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Layers className="h-12 w-12 mx-auto mb-2 text-gray-400" />
            <p className="text-gray-600 dark:text-gray-400">Interactive Map View</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Showing {upcomingEvents.length} upcoming events
            </p>
          </div>
        </div>

        {/* Event Pins Overlay - Visual representation */}
        <div className="absolute inset-0 p-8">
          {upcomingEvents.slice(0, 5).map((event, index) => (
            <div
              key={event.id}
              className="absolute"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + index * 10}%`,
              }}
            >
              <div className="relative group">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400 fill-current drop-shadow-lg cursor-pointer" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded shadow-lg min-w-[200px]">
                    <p className="font-semibold text-sm">{event.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {event.location.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {pastEvents.slice(0, 3).map((event, index) => (
            <div
              key={event.id}
              className="absolute"
              style={{
                left: `${50 + index * 12}%`,
                top: `${60 + index * 8}%`,
              }}
            >
              <MapPin className="h-8 w-8 text-gray-400 dark:text-gray-600 fill-current drop-shadow-lg" />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded shadow-md">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 fill-current" />
              <span>Upcoming Events</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-400 dark:text-gray-600 fill-current" />
              <span>Past Events</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
