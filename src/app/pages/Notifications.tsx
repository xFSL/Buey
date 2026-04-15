import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { mockNotifications } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Bell, MessageSquare, Users, Calendar, Info } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const notificationIcons = {
  event: Calendar,
  community: Users,
  message: MessageSquare,
  system: Info,
};

export function Notifications() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotifications = mockNotifications.filter(notif =>
    notif.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notif.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const unreadCount = filteredNotifications.filter(n => !n.isRead).length;

  return (
    <div className="p-4 space-y-4">
      <SearchBar
        placeholder="Search notifications..."
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Notifications
          {unreadCount > 0 && (
            <Badge variant="destructive" className="ml-2">
              {unreadCount} new
            </Badge>
          )}
        </h2>
      </div>

      <div className="space-y-2">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 mx-auto mb-3 text-gray-400" />
            <p className="text-gray-600 dark:text-gray-400">
              {searchQuery ? 'No notifications match your search' : 'No notifications'}
            </p>
          </div>
        ) : (
          filteredNotifications.map(notification => {
            const Icon = notificationIcons[notification.type];
            return (
              <Card
                key={notification.id}
                className={`p-4 ${
                  !notification.isRead
                    ? 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800'
                    : ''
                }`}
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-full ${
                      notification.type === 'event' ? 'bg-blue-100 dark:bg-blue-900' :
                      notification.type === 'community' ? 'bg-green-100 dark:bg-green-900' :
                      notification.type === 'message' ? 'bg-purple-100 dark:bg-purple-900' :
                      'bg-gray-100 dark:bg-gray-800'
                    }`}>
                      <Icon className={`h-5 w-5 ${
                        notification.type === 'event' ? 'text-blue-600 dark:text-blue-400' :
                        notification.type === 'community' ? 'text-green-600 dark:text-green-400' :
                        notification.type === 'message' ? 'text-purple-600 dark:text-purple-400' :
                        'text-gray-600 dark:text-gray-400'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {!notification.isRead && (
                        <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}
