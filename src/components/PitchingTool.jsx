import React, { useState } from 'react';

import InfoHeading from './InfoHeading';
import SearchBar from './SearchBar';
import ChartResults from './ChartResults';

export default function PitchingTool(props) {
  const [playerName, setPlayerName] = useState("Clayton Kershaw");
  const [playerId, setPlayerId] = useState("ckershaw");
  const [metrics, setMetrics] = useState(['ACES', 'Whiffs']);
  const playerObject = { value: playerId, label: playerName };
  const metricsObject = metrics.map(cv => ({ value: cv, label: cv }));

  return (
    <div className="card">
      <div className="">
        <InfoHeading />
        <SearchBar
          setPlayerId={setPlayerId}
          setPlayerName={setPlayerName}
          player={playerObject}
          setMetrics={setMetrics}
          metricsObject={metricsObject}
        />
      </div>
      <ChartResults
        playerId={playerObject.value}
        metrics={metrics}
      />
    </div>
  );
}