import React from 'react';

export default function InfoHeading(props) {
  const lastUpdate = "January 01, 2019";
  return (
    <div>
      <h1>Pitching Tool</h1>
      <h3>Last Updated: {lastUpdate}</h3>
    </div>
  );
}