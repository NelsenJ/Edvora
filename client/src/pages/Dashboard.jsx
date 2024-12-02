import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    // Fetch data from backend
    fetch('http://localhost:5000/api')
      .then((response) => response.json())
      .then((data) => setApiMessage(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Message from Backend: {apiMessage}</p>
    </div>
  );
};

export default Dashboard;
