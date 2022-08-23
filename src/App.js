import './reset.css';
import './App.css';

import { useEffect } from 'react';
import { LiveContainer } from './components/Chart/LiveContainer';
import { CoverContainer } from './components/Cover/CoverContainer';
import { Navigation } from './components/layout/Navigation';
import { Sidebar } from './components/layout/SideBar';
import { OpacityCover } from './components/Cover/OpacityCover';

export const App = () => {
  return (
    <div className="App">
      <CoverContainer/>
      <OpacityCover/>
      <Navigation />
      <main>
        <LiveContainer/>
        <Sidebar/>
      </main>
    </div>
  );
}
