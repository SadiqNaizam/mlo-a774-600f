import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * IndexPage: The main entry point for the application, displaying the login screen.
 * 
 * As per the component hierarchy, this page utilizes the `MainAppLayout` 
 * (implementing the `CenteredLayout` template) to center the `LoginCard` 
 * component both vertically and horizontally on the screen.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
