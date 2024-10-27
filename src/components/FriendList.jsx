// src/components/FriendList.jsx

import React, { useState } from 'react';
import AddFriendModal from './AddFriendModal';

function FriendList() {
  const [friends, setFriends] = useState(['Alice', 'Bob', 'Charlie']);
  const [isModalOpen, setModalOpen] = useState(false);

  const addFriend = (friend) => {
    setFriends([...friends, friend]);
    setModalOpen(false);
  };

  return (
    <div className="w-1/4 p-4 border-r border-gray-300 overflow-y-auto bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Friends</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md mb-2 transition hover:shadow-lg">
            {friend}
          </li>
        ))}
      </ul>
      <AddFriendModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddFriend={addFriend} />
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-white rounded-full p-3 shadow-lg transition hover:bg-secondary"
      >
        +
      </button>
    </div>
  );
}

export default FriendList;