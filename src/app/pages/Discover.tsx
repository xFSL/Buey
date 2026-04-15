import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { EventCard } from '../components/EventCard';
import { mockEvents } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export function Discover() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'attendees' | 'distance'>('date');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = ['all', ...new Set(mockEvents.map(e => e.category))];

  let filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (categoryFilter !== 'all') {
    filteredEvents = filteredEvents.filter(e => e.category === categoryFilter);
  }

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return a.date.getTime() - b.date.getTime();
      case 'attendees':
        return b.attendees - a.attendees;
      case 'distance':
        // Placeholder - would calculate actual distance
        return 0;
      default:
        return 0;
    }
  });

  return (
    <div className="p-4 space-y-4">
      <SearchBar
        placeholder="Search events..."
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <div className="flex items-center gap-2">
        <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="attendees">Popularity</SelectItem>
            <SelectItem value="distance">Distance</SelectItem>
          </SelectContent>
        </Select>

        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* <div>
        <h2 className="text-lg font-semibold mb-3">
          Recommended Events
          <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-2">
            ({sortedEvents.length})
          </span>
        </h2>
        {sortedEvents.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center py-8">
            No events found
          </p>
        ) : (
          <div className="space-y-3">
            {sortedEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}
