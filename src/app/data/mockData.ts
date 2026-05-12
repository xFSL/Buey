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
  bio: 'Most epic bio known to dino kind',
  joinDate: new Date('2032-01-1'),
};

export const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'Downtown Oakland Volunteers',
    description: 'Broadway Volunteering',
    isPrivate: false,
    memberCount: 650,
    isMember: true,
    imageUrl: 'https://cdn.carmel-apartments.com/system/uploads/fae/image/asset/3086/Atlas_Neighborhood_Collage_1.jpg',
  },
  {
    id: '2',
    name: 'Tech Meetup Group',
    description: 'Meetups for startup business founder like Alvin Wong',
    isPrivate: false,
    memberCount: 125,
    isMember: true,
    imageUrl: 'https://th.bing.com/th/id/OIP.j1grZOsDNghPmJkq5jMS-QHaEJ?w=333&h=187&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3',
  },
  {
    id: '3',
    name: 'Oakland Tech High School',
    description: 'Events and activities for students and parents',
    isPrivate: true,
    memberCount: 2000,
    isMember: true,
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.HqOX7wEgV7G3NNmY-gA6KQHaC9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: '4',
    name: 'Local Farmers Market',
    description: 'Weekly farmers market coordinators',
    isPrivate: false,
    memberCount: 239,
    isMember: false,
    imageUrl: 'https://th.bing.com/th/id/OIP.psyPoKo9mxcR3zEcMi2UHgHaEK?w=290&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Community Park Cleanup',
    description: 'Monthly park cleanup event. Gloves and tools provided!',
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
    title: 'Tech Talk: Alvin Wong and the flower business',
    description: 'Monthly presentation on the latest in victorian markup pricing',
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
    title: 'Prom Fundraiser',
    description: 'Please support, we are broke',
    date: new Date('2026-04-25T19:00:00'),
    location: {
      address: '789 School Drive, Oakland Tech',
      lat: 37.7649,
      lng: -122.4294,
    },
    communityId: '3',
    communityName: 'Oakland Tech High School',
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
    title: 'Road Restoration',
    description: 'Help restore potholes (not overseen, may be illegal)',
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
    description: 'Introduction to React programming',
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
  {
    id: '7',
    title: 'Community Garden Spring Planting',
    description: 'Help plant vegetables and flowers for the community garden. Tools and seeds provided!',
    date: new Date('2026-05-15T09:00:00'),
    location: {
      address: '890 Garden Lane, Springfield',
      lat: 37.7749,
      lng: -122.4294,
    },
    communityId: '1',
    communityName: 'Downtown Volunteers',
    category: 'Volunteering',
    attendees: 28,
    maxAttendees: 50,
    isSignedUp: false,
  },
  {
    id: '8',
    title: 'Local Art & Craft Fair',
    description: 'Showcase of local artists and craftspeople. Free admission, come support local creators!',
    date: new Date('2026-05-18T11:00:00'),
    location: {
      address: '234 Community Center Dr, Springfield',
      lat: 37.7649,
      lng: -122.4194,
    },
    communityId: '4',
    communityName: 'Local Farmers Market',
    category: 'Market',
    attendees: 87,
    isSignedUp: false,
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'event',
    title: 'Event Reminder',
    message: 'Capstone project due RIGHT NOW!!!',
    timestamp: new Date('2026-04-14T10:00:00'),
    isRead: false,
  },
  {
    id: '2',
    type: 'community',
    title: 'New Community Announcment',
    message: 'Computer Science Ceremony (for extra credit)',
    timestamp: new Date('2026-04-13T15:30:00'),
    isRead: false,
  },
  {
    id: '3',
    type: 'event',
    title: 'Event Update',
    message: 'Alvin Wong\'s presentation will by the owner of the Radium Plant: Elliot Andelman',
    timestamp: new Date('2026-04-12T09:15:00'),
    isRead: true,
  },
  {
    id: '4',
    type: 'message',
    title: 'New Message',
    message: 'Ms. Ketchum messaged you in Google Classroom',
    timestamp: new Date('2026-04-11T18:45:00'),
    isRead: true,
  },
  {
    id: '5',
    type: 'system',
    title: 'Welcome to Buey!',
    message: 'Complete your profile so we can sell your data',
    timestamp: new Date('2026-04-10T08:00:00'),
    isRead: true,
  },
];
