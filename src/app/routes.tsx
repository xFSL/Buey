import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { MapView } from './pages/MapView';
import { Discover } from './pages/Discover';
import { SocialPage } from './pages/Social';
import { Profile } from './pages/Profile';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';
import { CommunityDetail } from './pages/CommunityDetail';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'map', Component: MapView },
      { path: 'discover', Component: Discover },
      { path: 'social', Component: SocialPage },
      { path: 'social/:id', Component: CommunityDetail },
      { path: 'profile', Component: Profile },
      { path: 'notifications', Component: Notifications },
      { path: 'settings', Component: Settings },
      { path: '*', Component: NotFound },
    ],
  },
]);