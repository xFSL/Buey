import { Lock, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Community } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CommunityCardProps {
  community: Community;
  onClick?: () => void;
}

export function CommunityCard({ community, onClick }: CommunityCardProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="relative h-32 bg-gray-200 dark:bg-gray-800">
        <ImageWithFallback
          src={community.imageUrl}
          alt={community.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold">{community.name}</h3>
          {community.isPrivate && (
            <Lock className="h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
          )}
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {community.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <Users className="h-4 w-4" />
            <span>{community.memberCount} members</span>
          </div>
          
          {community.isMember && (
            <Badge variant="default">Member</Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
