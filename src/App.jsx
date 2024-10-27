/// src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import FriendList from './components/FriendList';
import GroupChat from './components/GroupChat';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="h-screen bg-background flex flex-col">
      <Header />
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="flex flex-1">
          <FriendList />
          <GroupChat />
        </div>
      )}
    </div>
  );
}

export default App;
