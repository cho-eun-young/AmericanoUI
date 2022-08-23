import './reset.css';
import './App.css';

import { useEffect } from 'react';
import { LiveContainer } from './components/Chart/LiveContainer';
import { Navigation } from './components/layout/Navigation';
import { Sidebar } from './components/layout/SideBar';
import { Cover } from './components/Cover/Cover';

export const App = () => {
  return (
    <div className="App">
      <Cover />
      <Navigation />
      <main>
        <LiveContainer/>
        <Sidebar/>
      </main>
    </div>
  );
}
