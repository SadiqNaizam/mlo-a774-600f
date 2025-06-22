import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/login/LoginCard';
import { Card } from '@/components/ui/card';

/**
 * IndexPage: The main entry point for the application, displaying the Instagram-style login screen.
 *
 * It uses the `MainAppLayout` to center a single column of content.
 * This column contains the `LoginCard`, a separate card for the "Sign up" prompt,
 * and a section for app download links.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout className="px-4">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-sm">
          <LoginCard />
          <Card className="mt-2.5 p-5 text-center">
            <p className="text-sm">
              Don't have an account?{' '}
              <a href="#" className="font-semibold text-primary hover:underline">
                Sign up
              </a>
            </p>
          </Card>
          <div className="mt-5 text-center text-sm">
            <p>Get the app.</p>
            <div className="flex justify-center gap-4 mt-4">
              {/* Placeholders for App Store buttons */}
              <a href="#" className="text-gray-500 hover:text-primary">App Store (placeholder)</a>
              <a href="#" className="text-gray-500 hover:text-primary">Google Play (placeholder)</a>
            </div>
          </div>
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;