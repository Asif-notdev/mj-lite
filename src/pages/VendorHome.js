import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Accordion from './Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = () => {
  const [userName, setUserName] = useState('');
  const userNameApiEndpoint = 'http://localhost:3050/userName';

  useEffect(() => {
    fetch(userNameApiEndpoint)
    .then(response => response.json())
    .then(data => {
      console.log('Fetched user name:', data);
      // Check if the necessary properties exist before accessing them
      const userNameValue = data && data[0] && data[0].name;

      console.log('userNameValue:', userNameValue); // Log the userNameValue
      setUserName(userNameValue || '');
    })
    .catch(error => {
      console.error('Error fetching user name:', error);
      // Log the specific error message
      console.error('Error message:', error.message);
    });
  },[]);

  return (
    <div className='translucent-form'>
      <Navbar />
      <div className="user-info">
          {userName !== '' ? (
            <span>Welcome, {userName}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
      <div className="container mt-5">
        <Accordion />
      </div>
    </div>
  );
};

export default ItemList;