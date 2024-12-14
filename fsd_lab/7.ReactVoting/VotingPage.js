import React, { useState } from 'react';
import './VotingPage.css';

const VotingPage = () => {
  const [votes, setVotes] = useState({ Basketball: 0, Golf: 0 });
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (image, change) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [image]: prevVotes[image] + change,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    const highest = votes.Basketball >= votes.Golf ? 'Basketball' : 'Golf';
    const lowest = votes.Basketball < votes.Golf ? 'Basketball' : 'Golf';
    
    return (
      <div>
        <h1>Thank You for Voting!</h1>
        <h2>Results:</h2>
        <p>Highest Votes: {highest}</p>
        <p>Lowest Votes: {lowest}</p>
      </div>
    );
  }

  return (
    <div className="voting-page">
      <h1>A Simple Voting Application using ReactJS</h1>
      <div class="ques"><h2>Which one of the following is your favorite sport?</h2></div>
      <div className="image-voting">
        <div className="image-option">
          <img src="basketball.png" alt="Basketball" />
          <div className="vote-buttons">
            <button onClick={() => handleVote('Basketball', 1)}>👍</button>
            <button onClick={() => handleVote('Basketball', -1)}>👎</button>
          </div>
          <p>Votes: {votes.Basketball}</p>
        </div>
        <div className="image-option">
          <img src="golf.jpeg" alt="Golf" />
          <div className="vote-buttons">
            <button onClick={() => handleVote('Golf', 1)}>👍</button>
            <button onClick={() => handleVote('Golf', -1)}>👎</button>
          </div>
          <p>Votes: {votes.Golf}</p>
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default VotingPage;
