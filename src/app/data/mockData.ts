// Mock data for the Buey app

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  communityId: string;
  communityName: string;
  category: string;
  attendees: number;
  maxAttendees?: number;
  isSignedUp: boolean;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  isPrivate: boolean;
  memberCount: number;
  isMember: boolean;
  imageUrl: string;
}

export interface Notification {
  id: string;
  type: 'event' | 'community' | 'message' | 'system';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio: string;
  joinDate: Date;
}

export const mockUser: User = {
  id: '1',
  name: 'Random Name',
  email: 'First.Last@example.com',
  avatarUrl: 'https://www.shutterstock.com/shutterstock/photos/2149432931/display_1500/stock-photo-photo-of-a-male-person-identified-as-a-fake-facial-recognition-and-deepfake-detection-software-2149432931.jpg',
  bio: 'Biggest Boi',
  joinDate: new Date('2032-01-1'),
};

export const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'Downtown Volunteers',
    description: 'Making our downtown area better, one event at a time',
    isPrivate: false,
    memberCount: 245,
    isMember: true,
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    name: 'Tech Meetup Group',
    description: 'Monthly meetups for tech professionals',
    isPrivate: false,
    memberCount: 128,
    isMember: true,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    name: 'Springfield High School',
    description: 'Events and activities for students and parents',
    isPrivate: true,
    memberCount: 342,
    isMember: true,
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    name: 'Local Farmers Market',
    description: 'Weekly farmers market coordinators',
    isPrivate: false,
    memberCount: 89,
    isMember: false,
    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Community Park Cleanup',
    description: 'Join us for our monthly park cleanup event. Bring gloves and enthusiasm!',
    date: new Date('2026-04-20T09:00:00'),
    location: {
      address: '123 Park Ave, Springfield',
      lat: 37.7749,
      lng: -122.4194,
    },
    communityId: '1',
    communityName: 'Downtown Volunteers',
    category: 'Volunteering',
    attendees: 24,
    maxAttendees: 50,
    isSignedUp: true,
  },
  {
    id: '2',
    title: 'Tech Talk: AI and Machine Learning',
    description: 'Monthly presentation on the latest in AI technology',
    date: new Date('2026-04-22T18:30:00'),
    location: {
      address: '456 Tech Plaza, Springfield',
      lat: 37.7849,
      lng: -122.4094,
    },
    communityId: '2',
    communityName: 'Tech Meetup Group',
    category: 'Meetup',
    attendees: 45,
    maxAttendees: 60,
    isSignedUp: true,
  },
  {
    id: '3',
    title: 'Spring Fundraiser Gala',
    description: 'Annual fundraiser to support student programs',
    date: new Date('2026-04-25T19:00:00'),
    location: {
      address: '789 School Drive, Springfield',
      lat: 37.7649,
      lng: -122.4294,
    },
    communityId: '3',
    communityName: 'Springfield High School',
    category: 'Fundraiser',
    attendees: 102,
    maxAttendees: 150,
    isSignedUp: true,
  },
  {
    id: '4',
    title: 'Weekend Farmers Market',
    description: 'Fresh produce and local goods from community vendors',
    date: new Date('2026-04-19T08:00:00'),
    location: {
      address: '321 Market Street, Springfield',
      lat: 37.7549,
      lng: -122.4394,
    },
    communityId: '4',
    communityName: 'Local Farmers Market',
    category: 'Market',
    attendees: 156,
    isSignedUp: false,
  },
  {
    id: '5',
    title: 'River Trail Restoration',
    description: 'Help restore the native plants along the river trail',
    date: new Date('2026-05-05T10:00:00'),
    location: {
      address: '555 River Road, Springfield',
      lat: 37.7949,
      lng: -122.3994,
    },
    communityId: '1',
    communityName: 'Downtown Volunteers',
    category: 'Volunteering',
    attendees: 18,
    maxAttendees: 40,
    isSignedUp: false,
  },
  {
    id: '6',
    title: 'Coding Workshop for Beginners',
    description: 'Introduction to Python programming',
    date: new Date('2026-04-28T14:00:00'),
    location: {
      address: '456 Tech Plaza, Springfield',
      lat: 37.7849,
      lng: -122.4094,
    },
    communityId: '2',
    communityName: 'Tech Meetup Group',
    category: 'Workshop',
    attendees: 32,
    maxAttendees: 40,
    isSignedUp: false,
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'event',
    title: 'Event Reminder',
    message: 'Community Park Cleanup starts in 6 days',
    timestamp: new Date('2026-04-14T10:00:00'),
    isRead: false,
  },
  {
    id: '2',
    type: 'community',
    title: 'New Community Post',
    message: 'Downtown Volunteers shared an announcement',
    timestamp: new Date('2026-04-13T15:30:00'),
    isRead: false,
  },
  {
    id: '3',
    type: 'event',
    title: 'Event Update',
    message: 'Tech Talk venue has been changed',
    timestamp: new Date('2026-04-12T09:15:00'),
    isRead: true,
  },
  {
    id: '4',
    type: 'message',
    title: 'New Message',
    message: 'Sarah sent you a message in Tech Meetup Group',
    timestamp: new Date('2026-04-11T18:45:00'),
    isRead: true,
  },
  {
    id: '5',
    type: 'system',
    title: 'Welcome to Buey!',
    message: 'Complete your profile to get personalized event recommendations',
    timestamp: new Date('2026-04-10T08:00:00'),
    isRead: true,
  },
];
