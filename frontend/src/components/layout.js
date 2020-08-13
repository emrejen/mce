import React from 'react';
import { MenuBar } from './menu';
import { DashboardTitle } from './dashboard';
import { DevicesViewer } from './devices-viewer';

export const AppLayout = () => {
  return (
    <div className="App">
      <div className="app-container">
        <div className="left-panel">
          <DashboardTitle />
          <MenuBar />
        </div>
        <div className="right-panel">
          <DevicesViewer />
        </div>
      </div>
    </div>
  );
};
