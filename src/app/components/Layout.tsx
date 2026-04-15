import { Outlet, useNavigate, useLocation } from 'react-router';
import { Home, Map, Compass, Users, User, Bell, Settings, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/map', icon: Map, label: 'Map' },
  { path: '/discover', icon: Compass, label: 'Discover' },
  { path: '/community', icon: Users, label: 'Community' },
  { path: '/profile', icon: User, label: 'Profile' },
];

const pageNames: Record<string, string> = {
  '/': 'Home',
  '/map': 'Map',
  '/discover': 'Discover',
  '/community': 'Community',
  '/profile': 'Profile',
  '/notifications': 'Notifications',
  '/settings': 'Settings',
};

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const showBackButton = !navItems.some(item => item.path === currentPath);
  const pageName = pageNames[currentPath] || 'Buey';

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-950">
      {/* Top Bar */}
      <header className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          <h1 className="font-semibold">{pageName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/notifications')}
            className="h-8 w-8 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/settings')}
            className="h-8 w-8"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="border-t">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
