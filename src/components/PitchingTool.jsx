import React, { useState } from 'react';

import InfoHeading from './InfoHeading';
import SearchBar from './SearchBar';
import ChartResults from './ChartResults';

export default function PitchingTool(props) {
  const [playerName, setPlayerName] = useState("");
  let player = { value: playerName, label: playerName };

  return (
    <div>
      {/* InfoHeading -- TODO */}
      <InfoHeading />
      {/* SearchBar -- TODO */}
      <SearchBar
        setPlayerName={setPlayerName}
        player={player}
      />
      <ChartResults />
      {/* ChartResults -- TODO */}
    </div>

  );
}