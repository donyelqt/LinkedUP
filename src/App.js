// src/App.jsx

import React, { useState } from 'react';
import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-300 to-blue-200">
      {isLoggedIn ? <Chat /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
