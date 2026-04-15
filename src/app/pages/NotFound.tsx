import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <div className="mb-6">
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      
      <Button onClick={() => navigate('/')}>
        <Home className="h-4 w-4 mr-2" />
        Go Home
      </Button>
    </div>
  );
}
