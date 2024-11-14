import { useEffect, useState } from 'react';

function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/api/games')  // fetch from /api/games endpoint
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div>
      <h1>Games List</h1>
      <ul>
        {games.map((game) => (
          <li key={game.GameID}>{game.Name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;