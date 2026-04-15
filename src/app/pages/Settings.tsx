import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { Moon, Sun, Bell, Lock, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Settings() {
  const { darkMode, setDarkMode } = useTheme();
  const [notifications, setNotifications] = useState({
    events: true,
    communities: true,
    messages: true,
    marketing: false,
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showEvents: true,
  });

  return (
    <div className="p-4 space-y-6">
      {/* Appearance */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          {darkMode ? (
            <Moon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-600" />
          )}
          <h2 className="text-lg font-semibold">Appearance</h2>
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode" className="flex-1 cursor-pointer">
            <div>
              <div className="font-medium">Dark Mode</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Use dark theme throughout the app
              </div>
            </div>
          </Label>
          <Switch
            id="dark-mode"
            checked={darkMode}
            onCheckedChange={setDarkMode}
          />
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-semibold">Notifications</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notif-events" className="flex-1 cursor-pointer">
              <div>
                <div className="font-medium">Event Updates</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Get notified about events you're attending
                </div>
              </div>
            </Label>
            <Switch
              id="notif-events"
              checked={notifications.events}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, events: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <Label htmlFor="notif-communities" className="flex-1 cursor-pointer">
              <div>
                <div className="font-medium">Community Activity</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Updates from your communities
                </div>
              </div>
            </Label>
            <Switch
              id="notif-communities"
              checked={notifications.communities}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, communities: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <Label htmlFor="notif-messages" className="flex-1 cursor-pointer">
              <div>
                <div className="font-medium">Messages</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Direct messages and mentions
                </div>
              </div>
            </Label>
            <Switch
              id="notif-messages"
              checked={notifications.messages}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, messages: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <Label htmlFor="notif-marketing" className="flex-1 cursor-pointer">
              <div>
                <div className="font-medium">Marketing & Promotions</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Featured events and updates
                </div>
              </div>
            </Label>
            <Switch
              id="notif-marketing"
              checked={notifications.marketing}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, marketing: checked })
              }
            />
          </div>
        </div>
      </Card>

      {/* Privacy */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-semibold">Privacy</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="privacy-profile" className="flex-1 cursor-pointer">
              <div>
                <div className="font-medium">Public Profile</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Allow others to view your profile
                </div>
              </div>
            </Label>
            <Switch
              id="privacy-profile"
              checked={privacy.profileVisible}
              onCheckedChange={(checked) =>
                setPrivacy({ ...privacy, profileVisible: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <Label htmlFor="privacy-email" className="flex-1 cursor-pointer">
              <div>
                <div className="font-medium">Show Email</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Display your email on your profile
                </div>
              </div>
            </Label>
            <Switch
              id="privacy-email"
              checked={privacy.showEmail}
              onCheckedChange={(checked) =>
                setPrivacy({ ...privacy, showEmail: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <Label htmlFor="privacy-events" className="flex-1 cursor-pointer">
              <div>
                <div className="font-medium">Show My Events</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Let others see events you're attending
                </div>
              </div>
            </Label>
            <Switch
              id="privacy-events"
              checked={privacy.showEvents}
              onCheckedChange={(checked) =>
                setPrivacy({ ...privacy, showEvents: checked })
              }
            />
          </div>
        </div>
      </Card>

      {/* About */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-semibold">About</h2>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex justify-between">
            <span>Version</span>
            <span className="font-medium">guh luh luh</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span>Terms of Service</span>
            <button className="text-blue-600 dark:text-blue-400">View (doesn't work)</button>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span>Privacy Policy</span>
            <button className="text-blue-600 dark:text-blue-400">View (doesn't work)</button>
          </div>
        </div>
      </Card>
    </div>
  );
}