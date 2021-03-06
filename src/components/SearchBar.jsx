import React, { useState, useEffect } from 'react';

import Select from 'react-select';

// import { players } from './tempData';

const metricOptions = [
  { value: 'ACES', label: 'ACES' },
  { value: 'Whiffs', label: 'Whiffs' },
  { value: 'CSW', label: 'CSW' },
  // { value: 'GB+PU%', label: 'GB+PU%' }
]

export default function SearchBar(props) {
  const [players, setPlayers] = useState([]);

  function handlePlayerChange(selectedOption) {
    props.setPlayerId(selectedOption.value);
    props.setPlayerName(selectedOption.label);
  }

  function handleMetricChange(selectedOption) {
    if (selectedOption) {
      const metrics = selectedOption.map(cv => cv.value);
      props.setMetrics([...metrics]);
    }
  }

  useEffect(() => {
    console.log('getting players');
    const endpoint = 'https://ks506u80el.execute-api.us-west-2.amazonaws.com/dev/pitchers';
    let lookupOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    fetch(endpoint, lookupOptions)
      // .then(result => console.log(result))
      .then(result => result.json())
      .then(data => setPlayers(prepareData(data))
      );
  }, []);

  function prepareData(data) {
    return data.map((cv) => {
      return { value: cv.pitcherId, label: cv.pitcherName }
    });
  }

  return (
    <div className="searchbar-container">
      <Select
        options={players}
        defaultOptions
        value={props.player}
        onChange={handlePlayerChange}
        className="player-search"
      />
      <Select
        closeMenuOnSelect={false}
        isMulti
        // defaultValue={[...metricOptions]}
        value={props.metricsObject}
        options={metricOptions}
        onChange={handleMetricChange}
      />
    </div>

  );
}