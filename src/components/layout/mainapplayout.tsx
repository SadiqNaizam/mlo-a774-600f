import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout component
 *
 * A simple layout component that centers its content both vertically and
 * horizontally on the page. It takes up the full screen height.
 * This corresponds to the `CenteredLayout` template in the project hierarchy,
 * providing the centering foundation for components like `LoginCard`.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        // As per Layout Requirements: Center-aligned flex layout
        'flex min-h-screen w-full items-center justify-center p-4',
        // The background color is set on the body, but added here for component self-containment.
        'bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
