import React, { ReactNode } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div id='layout-wrapper'>
      <Header />
      <div>
        <div className='homepage'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
