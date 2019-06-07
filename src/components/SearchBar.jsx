import React from 'react';

import Select from 'react-select';

import { players } from './tempData';

const metricOptions = [
  { value: 'ACES', label: 'ACES' },
  { value: 'Whiffs', label: 'Whiffs' },
  { value: 'CSW%', label: 'CSW%' },
  { value: 'GB+PU%', label: 'GB+PU%' }
]

export default function SearchBar(props) {
  function handleChange(selectedOption) {
    props.setPlayerName(selectedOption.value);
  }

  return (
    <div className="searchbar-container">
      <Select options={players} value={props.player} onChange={handleChange} />
      <Select
        closeMenuOnSelect={false}
        isMulti
        defaultValue={[...metricOptions]}
        options={metricOptions}
      />
    </div>

  );
}