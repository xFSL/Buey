import { useParams, useNavigate } from 'react-router';
import { SearchBar } from '../components/SearchBar';
import { mockCommunities, mockEvents } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { EventCard } from '../components/EventCard';
import { Users, Bell, BellOff, MessageSquare, FileText, Info, Send } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Input } from '../components/ui/input';

interface Message {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: Date;
}

export function CommunityDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      userId: '1',
      userName: 'Martel Price',
      userAvatar: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1706052768/ousdorg/d3wuhti4vgdwiskjolbi/Price-Martel-staff.jpg',
      content: 'WOOF WOOF! GO BULLLDOOOGS.',
      timestamp: new Date('2026-05-12T10:30:00'),
    },
    {
      id: '2',
      userId: '2',
      userName: 'Barny',
      userAvatar: 'https://th.bing.com/th/id/OIP.Pipns1BmTEtSEC_viYRGAQHaE8?w=275&h=184&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3',
      content: 'Do you remember me?',
      timestamp: new Date('2026-05-12T11:15:00'),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

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

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        userId: 'current-user',
        userName: 'You',
        userAvatar: 'https://www.shutterstock.com/shutterstock/photos/2149432931/display_1500/stock-photo-photo-of-a-male-person-identified-as-a-fake-facial-recognition-and-deepfake-detection-software-2149432931.jpg',
        content: newMessage,
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

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
              <Button
                variant={notificationsEnabled ? "default" : "outline"}
                onClick={handleNotificationToggle}
              >
                {notificationsEnabled ? (
                  <Bell className="h-4 w-4" />
                ) : (
                  <BellOff className="h-4 w-4" />
                )}
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="announcements">News</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
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

          <TabsContent value="messages" className="space-y-3 mt-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Message Board</h3>
              <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarImage src={message.userAvatar} alt={message.userName} />
                      <AvatarFallback>{message.userName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-semibold text-sm">{message.userName}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
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
