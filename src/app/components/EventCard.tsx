import { Calendar, MapPin, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Event } from '../data/mockData';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
  onClick?: () => void;
}

export function EventCard({ event, onClick }: EventCardProps) {
  const isPast = event.date < new Date();

  return (
    <Card
      className="p-4 cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold">{event.title}</h3>
        {event.isSignedUp && (
          <Badge variant="default" className="bg-green-600">
            Signed Up
          </Badge>
        )}
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
        {event.description}
      </p>
      
      <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{format(event.date, 'MMM d, yyyy • h:mm a')}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{event.location.address}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>
              {event.attendees}
              {event.maxAttendees && ` / ${event.maxAttendees}`} attendees
            </span>
          </div>
          <Badge variant="secondary">{event.category}</Badge>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {event.communityName}
        </span>
      </div>
    </Card>
  );
}
