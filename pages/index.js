import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

export default function Home() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();


  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch('/api/games');
        if (!response.ok) {
          throw new Error('Failed to fetch games.');
        }
        const data = await response.json();
        setGames(data);
      }
      catch (err) {
        setError(err.message);
      }
    }
    fetchGames();
  }, []);

  return (
    <div className="page-container">

      <div className="header1">
        Eldritch Horror Games
      </div>

      <div className="button-and-table">

        <div className="button">
          <button className="button-add-game" onClick={() => router.push("/add-game-form")} > Add Game
          </button>
        </div>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!error && games.length === 0 && <p>Loading Games...</p>}

        <div className="table">
          <table id="gameTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Ancient One</th>
                <th>Victory?</th>
                <th>Score</th>
                <th>#P</th>
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
                  <td className={game.Victory ? 'victory-column-yes' : 'victory-column-no'}>
                    {game.Victory ? 'YES' : 'no'}
                  </td>
                  <td>{game.Score}</td>
                  <td>{game.Player_Count}</td>
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
    </div>
  );
}