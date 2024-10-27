// src/components/Chat.jsx

import React from 'react';
import Header from './Header';
import FriendList from './FriendList';
import GroupChat from './GroupChat';

function Chat() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <FriendList />
        <GroupChat />
      </div>
    </div>
  );
}

export default Chat;