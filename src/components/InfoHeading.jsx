import React, { useState, useEffect } from 'react';

export default function InfoHeading(props) {
  const [lastUpdate, setLastUpdate] = useState("01/01/2019");

  useEffect(() => {
    const endpoint = "https://aces-backend-dev.s3-us-west-2.amazonaws.com/lastUpdate.json";
    const lookupOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    fetch(endpoint, lookupOptions)
    .then(response => response.json())
    .then(data => {
      setLastUpdate(data.lastUpdate);
    })
    .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>Pitching Dashboard</h1>
      <h3>Last Updated: {lastUpdate}</h3>
    </div>
  );
}