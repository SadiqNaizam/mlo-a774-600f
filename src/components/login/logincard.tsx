import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Instagram } from 'lucide-react';

interface LoginCardProps {
  className?: string;
}

/**
 * LoginCard component: A card containing the login form, styled to resemble Instagram's login.
 * It includes a logo, fields for email/username and password, a login button, an OR separator,
 * a "Log in with Facebook" link, and a "Forgot password" link.
 */
const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const isFormEmpty = !email || !password;

  return (
    <Card className={cn('w-full max-w-sm border', className)}>
      <CardContent className="flex flex-col gap-4 p-8">
        <div className="flex w-full justify-center mb-6">
          <Instagram className="h-16 w-16" />
        </div>
        <form className="space-y-3">
          <Input
            id="email"
            type="text"
            placeholder="Phone number, username, or email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-zinc-50"
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-zinc-50"
          />
          <Button type="submit" className="w-full h-9 mt-2" disabled={isFormEmpty}>
            Log In
          </Button>
        </form>

        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-xs font-semibold uppercase text-muted-foreground">
            OR
          </span>
          <Separator className="flex-1" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button variant="link" className="font-semibold text-sm text-[#385185]">
            {/* In a real app, you'd have an icon here */}
            Log in with Facebook
          </Button>
          <a
            href="#"
            className="text-xs text-primary/80 hover:underline"
          >
            Forgot password?
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginCard;