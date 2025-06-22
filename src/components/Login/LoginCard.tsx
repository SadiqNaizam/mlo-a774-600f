import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginCardProps {
  className?: string;
}

/**
 * LoginCard component: A card containing the login form.
 * It includes fields for email and password, a forgot password link,
 * a login button, and a link to the sign-up page, mirroring the provided design.
 */
const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  // State for form inputs. In a real app, this would be handled by a form library like react-hook-form.
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  // A handler for form submission.
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // In a production app, you would add validation and an API call here.
    console.log('Attempting to log in with:', { email, password });
  };

  return (
    // Card styling is based on Layout Requirements: max-w-md, shadow-sm, rounded-md.
    <Card className={cn('w-full max-w-md shadow-sm', className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Welcome</CardTitle>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            {/* Email Input Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-normal text-muted-foreground">Email Address</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-b-primary shadow-none px-1"
              />
            </div>

            {/* Password Input Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="font-normal text-muted-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-b-primary shadow-none px-1"
              />
            </div>

             {/* Forgot Password Link */}
            <a href="#" className="block text-sm font-medium text-primary hover:underline">
              Forgot Password
            </a>
          </div>

          <Button type="submit" className="w-full h-11">
            Login
          </Button>
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-primary hover:underline">
              SignUp
            </a>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginCard;
