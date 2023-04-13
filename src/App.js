import './App.css';
import React from 'react';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Address from './Profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
