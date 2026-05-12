import { useParams, useNavigate } from 'react-router';
import { SearchBar } from '../components/SearchBar';
import { mockCommunities, mockEvents } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { EventCard } from '../components/EventCard';
import { Users, Bell, MessageSquare, FileText, Info } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CommunityDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const community = mockCommunities.find(c => c.id === id);
  const communityEvents = mockEvents.filter(e => e.communityId === id);

  if (!community) {
    return (
      <div className="p-4">
        <p className="text-center text-gray-600 dark:text-gray-400">Community not found</p>
      </div>
    );
  }

  const mockMembers = [
    { id: '1', name: 'Martel Price', avatarUrl: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1706052768/ousdorg/d3wuhti4vgdwiskjolbi/Price-Martel-staff.jpg', role: 'Admin' },
    { id: '2', name: 'Michael Chen', avatarUrl: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1756171270/ousdorg/dyrjlduy0iwof6r6t9s3/staffphoto2024.jpg', role: 'Admin' },
    { id: '3', name: 'Dr. De’Shawn Woolridge', avatarUrl: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1706052774/ousdorg/kzbjoblkhk4xkxluke5z/Woolridge-DeShawn-staff.jpg', role: 'Moderator' },
    { id: '4', name: 'Susheela Moonsamy', avatarUrl: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1706052764/ousdorg/ccgkzfpvpj1ouazjmpr3/Moonsamy-Susheela-staff.jpg', role: 'Counselor' },
  ];

  const mockAnnouncements = [
    { id: '1', title: 'Changes', date: new Date('2026-09-15'), content: 'We\'re going to no longer allow sitting in class.' },
    { id: '2', title: 'Congratulations!', date: new Date('2029-03-09'), content: 'Seniors and teachers will swap roles for a week. We hope this will allow reflection.' },
  ];

  return (
    <div className="pb-4">
      {/* Community Header */}
      <div className="relative">
        <div className="h-48 bg-gray-200 dark:bg-gray-800">
          <ImageWithFallback
            src={community.imageUrl}
            alt={community.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          <h1 className="text-2xl font-bold">{community.name}</h1>
          <p className="text-sm">{community.memberCount} members</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Action Buttons */}
        <div className="flex gap-2">
          {community.isMember ? (
            <>
              <Button className="flex-1">
                <MessageSquare className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button variant="outline">
                <Bell className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Button className="flex-1">
              Join Community
            </Button>
          )}
        </div>

        {/* Description */}
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">About</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {community.description}
              </p>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="announcements">News</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-3 mt-4">
            <SearchBar
              placeholder="Search events..."
              value={searchQuery}
              onChange={setSearchQuery}
            />
            
            {communityEvents.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                No events yet
              </p>
            ) : (
              communityEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))
            )}
          </TabsContent>

          <TabsContent value="announcements" className="space-y-3 mt-4">
            {mockAnnouncements.map(announcement => (
              <Card key={announcement.id} className="p-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{announcement.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      {announcement.content}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {announcement.date.toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="members" className="space-y-3 mt-4">
            <SearchBar
              placeholder="Search members..."
              value={searchQuery}
              onChange={setSearchQuery}
            />
            
            <div className="space-y-2">
              {mockMembers.map(member => (
                <Card key={member.id} className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatarUrl} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rules" className="space-y-3 mt-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Community Guidelines</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Do not use your phone unless you are on Buey</li>
                <li>Do not use drugs or substances that can impair cognitive ability</li>
                <li>No using internet slang such as "6 7"</li>
                <li>Respect others</li>
                <li>Understand that you must push the rock</li>
              </ol>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
