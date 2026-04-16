# Buey - Event Coordination App

An event coordination application that allows users to discover, create, and coordinate events like volunteering opportunities, markets, and meetings.

## Features

- **Event Discovery**: Browse and search for events in your area
- **Community Management**: Join or create public/private communities
- **Event Coordination**: Sign up for events and manage your schedule
- **Map View**: See events on an interactive map
- **Dark Mode**: Toggle between light and dark themes
- **Notifications**: Stay updated on events and community activity

## Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open your browser and navigate to `http://localhost:5173`

## Build

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # React context providers
│   │   ├── data/            # Mock data
│   │   ├── pages/           # Page components
│   │   ├── App.tsx          # Root app component
│   │   └── routes.tsx       # Router configuration
│   ├── styles/              # Global styles
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json
└── vite.config.ts           # Vite configuration
```

## Technologies

- **React** - UI framework
- **TypeScript** - Type safety
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## License

MIT License - see LICENSE file for details
