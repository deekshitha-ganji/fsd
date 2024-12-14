import React, { useState } from 'react';
import VotingPage from './VotingPage';
import './App.css';

function App() {
  const [startVoting, setStartVoting] = useState(false);

  const handleStart = () => {
    setStartVoting(true);
  };

  return (
    <div className="App">
      {!startVoting ? (
        <div className="start-container">
          <h1 className="title">Welcome to the Voting App!</h1>
          <p className="subtitle">Click below to get started</p>
          <button className="start-button" onClick={handleStart}>
            Start Voting
          </button>
        </div>
      ) : (
        <VotingPage />
      )}
    </div>
  );
}

export default App;
