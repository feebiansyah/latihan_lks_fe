import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import MainLayout from './MainLayout';

function MainLayout() {
  return (
    <div>
      
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2025 Your Website</p>
      </footer>
    </div>
  );
}

export default MainLayout;
