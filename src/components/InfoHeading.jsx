import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



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
      <AppBar position="static">
        <Toolbar className="App-bar">
          <Typography variant="h6">
            Pitching Dashboard
          </Typography>
          <div className="last-update-text">
            Last Updated: {lastUpdate}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}