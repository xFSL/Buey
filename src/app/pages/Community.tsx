import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchBar } from '../components/SearchBar';
import { CommunityCard } from '../components/CommunityCard';
import { mockCommunities } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Plus, MessageCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const mockUser = {
  id: '1',
  name: 'Sarah Johnson',
  avatar: 'https://i.pravatar.cc/150?img=1',
  lastMessage: 'Hey! Are you coming to the cleanup event this weekend?',
  timestamp: '2h ago',
  unread: 2,
};

export function CommunityPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('communities');

  const myCommunities = mockCommunities.filter(c => c.isMember);
  const otherCommunities = mockCommunities.filter(c => !c.isMember);
  const allCommunities = [...myCommunities, ...otherCommunities];

  const filterCommunities = (communities: typeof mockCommunities) =>
    communities.filter(community =>
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredCommunities = filterCommunities(allCommunities);

  return (
    <div className="p-4 space-y-4">
      <SearchBar
        placeholder={activeTab === 'communities' ? 'Search communities...' : 'Search messages...'}
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <Tabs defaultValue="communities" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="communities">Communities</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        {activeTab === 'communities' && (
          <Button className="w-full mt-4">
            <Plus className="h-4 w-4 mr-2" />
            Create Community
          </Button>
        )}

        <TabsContent value="communities" className="space-y-3 mt-4">
          {filteredCommunities.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              {searchQuery ? 'No communities match your search' : 'No communities available'}
            </p>
          ) : (
            filteredCommunities.map(community => (
              <CommunityCard
                key={community.id}
                community={community}
                onClick={() => navigate(`/community/${community.id}`)}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="messages" className="space-y-3 mt-4">
          <div
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => {
              // Navigate to message thread
              alert(`Opening conversation with ${mockUser.name}`);
            }}
          >
            <div className="relative">
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              {mockUser.unread > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                  {mockUser.unread}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {mockUser.name}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {mockUser.timestamp}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {mockUser.lastMessage}
              </p>
            </div>
            <MessageCircle className="h-5 w-5 text-gray-400" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
