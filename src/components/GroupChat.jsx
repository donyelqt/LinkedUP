// src/components/GroupChat.jsx

import React from 'react';

function GroupChat() {
  return (
    <div className="flex-1 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Group Chat</h2>
      <div className="border border-gray-300 h-3/4 overflow-y-auto p-2 mb-4 rounded-lg bg-gray-50">
        {/* Sample messages */}
        <div className="mb-2">
          <strong className="text-primary">Alice:</strong> Hey everyone!
        </div>
        <div className="mb-2">
          <strong className="text-primary">Bob:</strong> Hi Alice!
        </div>
        <div className="mb-2">
          <strong className="text-primary">Charlie:</strong> What's up?
        </div>
        {/* Add more messages as needed */}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

export default GroupChat;