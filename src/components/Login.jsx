// src/components/Login.jsx

import React, { useState } from 'react';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Welcome Back!</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button type="submit" className="bg-primary text-white p-3 rounded-lg w-full transition duration-200 hover:bg-secondary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;