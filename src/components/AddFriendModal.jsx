// src/components/AddFriendModal.jsx

import React, { useState } from 'react';

function AddFriendModal({ isOpen, onClose, onAddFriend }) {
  const [newFriend, setNewFriend] = useState('');

  if (!isOpen) return null;

  const handleAddFriend = (e) => {
    e.preventDefault();
    onAddFriend(newFriend);
    setNewFriend('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-800 bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-bold mb-4">Add Friend</h2>
        <form onSubmit={handleAddFriend}>
          <input
            type="text"
            placeholder="Friend's Name"
            value={newFriend}
            onChange={(e) => setNewFriend(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-300 text-black p-2 rounded-lg transition duration-200 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" className="bg-primary text-white p-2 rounded-lg transition duration-200 hover:bg-secondary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFriendModal;