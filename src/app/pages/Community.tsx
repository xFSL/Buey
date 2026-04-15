import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchBar } from '../components/SearchBar';
import { CommunityCard } from '../components/CommunityCard';
import { mockCommunities } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function CommunityPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const myCommunities = mockCommunities.filter(c => c.isMember);
  const otherCommunities = mockCommunities.filter(c => !c.isMember);

  const filterCommunities = (communities: typeof mockCommunities) =>
    communities.filter(community =>
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredMyCommunities = filterCommunities(myCommunities);
  const filteredOtherCommunities = filterCommunities(otherCommunities);

  return (
    <div className="p-4 space-y-4">
      <SearchBar
        placeholder="Search communities..."
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <Tabs defaultValue="my-communities" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-communities">My Communities</TabsTrigger>
          <TabsTrigger value="f">Find</TabsTrigger>
        </TabsList>
        
        <Button className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Create Community
      </Button>

        
        {/* <TabsContent value="my-communities" className="space-y-3 mt-4">
          {filteredMyCommunities.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              {searchQuery ? 'No communities match your search' : 'Not a member of any communities yet'}
            </p>
          ) : (
            filteredMyCommunities.map(community => (
              <CommunityCard
                key={community.id}
                community={community}
                onClick={() => navigate(`/community/${community.id}`)}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="discover" className="space-y-3 mt-4">
          {filteredOtherCommunities.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              No new communities to discover
            </p>
          ) : (
            filteredOtherCommunities.map(community => (
              <CommunityCard
                key={community.id}
                community={community}
                onClick={() => navigate(`/community/${community.id}`)}
              />
            ))
          )}
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
