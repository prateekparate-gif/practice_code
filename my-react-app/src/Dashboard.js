import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div style={{ maxWidth: 500, margin: '100px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Dashboard</h2>
      <p>Welcome, <b>{user}</b>!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
