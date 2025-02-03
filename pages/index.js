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

  return (
    <div className="container">
      <h1>Eldritch Horror Games</h1>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!error && games.length === 0 && <p>Loading games...</p>}

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Ancient One</th>
            <th>Victory?</th>
            <th>Score</th>
            <th>#P</th>
            <th>#I</th>
            <th>Players</th> {/* Players column */}
            <th>Investigators</th> {/* Investigators column */}
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
              <td>
                {game.Players ? game.Players.split('\n').map((player, index) => (
                  <div key={index}>{player}</div>
                )) : null} {/* Check for game.Players */}
              </td>
              <td>
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
  );
}
