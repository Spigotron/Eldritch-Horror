import { useEffect, useState } from 'react';

export default function Home() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch('/api/games');
        if (!response.ok) {
          throw new Error('Failed to fetch games.');
        }
        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchGames();
  }, []);

  useEffect(() => {
    function alignButton() {
      const table = document.getElementById('gameTable');
      const button = document.getElementById('addGameButton');
      const headerContainer = document.querySelector('.button-and-header'); 

      if (table && button && headerContainer) {
        requestAnimationFrame(() => {
          const tableRect = table.getBoundingClientRect();
          const containerRect = headerContainer.getBoundingClientRect();

          button.style.left = `${tableRect.right - containerRect.left - button.offsetWidth}px`;
          
        });
      }
    }

    const observer = new MutationObserver(alignButton);
    observer.observe(document.body, { childList: true, subtree: true });

    alignButton(); // Run once after initial render
    window.addEventListener('resize', alignButton);

    return () => {
      window.removeEventListener('resize', alignButton);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <div className="button-and-header">
        <div className="header">
          <h1> Eldritch Horror Games </h1>
        </div>
        <div className="button1">
          <button
            id="addGameButton"
            className="button-add-new-game"
           
          >
            Add New Game
          </button>
        </div>
      </div>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!error && games.length === 0 && <p>Loading Games...</p>}

      <div className="table1">
        <table id="gameTable" className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Ancient One</th>
              <th>Victory?</th>
              <th>Score</th>
              <th>#P</th>
              <th>#I</th>
              <th>Players</th>
              <th>Investigators</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.Game_ID}>
                <td>{game.Game_ID}</td>
                <td>{new Date(game.Date).toISOString().slice(2, 10).replace(/-/g, '-')}</td>
                <td>{game.Ancient_One}</td>
                <td className={game.Victory ? 'victory-yes' : 'victory-no'}>
                  {game.Victory ? 'YES' : 'no'}
                </td>
                <td>{game.Score}</td>
                <td>{game.Player_Count}</td>
                <td>{game.Investigator_Count}</td>
                <td className="players-column">
                  {game.Players ? game.Players.split('\n').map((player, index) => (
                    <div key={index}>{player}</div>
                  )) : null}
                </td>
                <td className="investigators-column">
                  {game.Investigators.split('\n').map((entry, index) => (
                    <div key={index}>{entry}</div>
                  ))}
                </td>
                <td>{game.Notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
