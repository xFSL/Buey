import { mockUser, mockEvents, mockCommunities } from '../data/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Calendar, Users, Settings } from 'lucide-react';
import { useNavigate } from 'react-router';
import { format } from 'date-fns';

export function Profile() {
  const navigate = useNavigate();
  const userEvents = mockEvents.filter(e => e.isSignedUp);
  const userCommunities = mockCommunities.filter(c => c.isMember);

  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
          <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div>
          <h1 className="text-2xl font-bold">{mockUser.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">{mockUser.email}</p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 max-w-md">
          {mockUser.bio}
        </p>

        <Button onClick={() => navigate('/settings')} variant="outline">
          <Settings className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      {/* Stats */}
      {/* <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">{userEvents.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Events</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">{userCommunities.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Communities</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">
            {Math.floor((new Date().getTime() - mockUser.joinDate.getTime()) / (1000 * 60 * 60 * 24))}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Days Active</div>
        </Card>
      </div> */}

      {/* Recent Activity */}
      {/* <div>
        <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
        <div className="space-y-3">
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Signed up for {userEvents[0]?.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2 days ago</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Joined {userCommunities[0]?.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">1 week ago</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Attended {userEvents[2]?.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2 weeks ago</p>
              </div>
            </div>
          </Card>
        </div>
      </div> */}

      {/* Member Since */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        Member since {format(mockUser.joinDate, 'MMMM yyyy')}
      </div>
    </div>
  );
}
