import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function AddGame() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: "",
    ancientOne: "",
    victory: null,
    score: "",
    playerCount: "",
    investigatorCount: "",
    playerInvestigators: [{ player: "", investigators: [""] }],
    notes: "",
  });

  const [ancientOnes, setAncientOnes] = useState([]);
  const [players, setPlayers] = useState([]);
  const [investigators, setInvestigators] = useState([]);

  useEffect(() => {
    async function fetchAncientOnes() {
      const res = await fetch("/api/ancient-ones");
      const data = await res.json();
      if (res.ok) setAncientOnes(data);
    }
    fetchAncientOnes();
  }, []);

  useEffect(() => {
    async function fetchPlayers() {
      const res = await fetch("/api/players");
      const data = await res.json();
      if (res.ok) {
        const sorted = data.sort((a, b) =>
          a.Player_Name.localeCompare(b.Player_Name)
        );
        setPlayers(sorted);
      }
    }
    fetchPlayers();
  }, []);

  useEffect(() => {
    async function fetchInvestigators() {
      const res = await fetch("/api/investigators");
      const data = await res.json();
      if (res.ok) {
        const sorted = data.sort((a, b) =>
          a.Investigator_Name.localeCompare(b.Investigator_Name)
        );
        setInvestigators(sorted);
      }
    }
    fetchInvestigators();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePlayerChange = (index, value) => {
    const updated = [...formData.playerInvestigators];
    updated[index].player = value;
    setFormData({ ...formData, playerInvestigators: updated });
  };

  const handleInvestigatorChange = (pIndex, iIndex, value) => {
    const updated = [...formData.playerInvestigators];
    updated[pIndex].investigators[iIndex] = value;
    setFormData({ ...formData, playerInvestigators: updated });
  };

  const addInvestigator = (playerIndex) => {
    const updated = [...formData.playerInvestigators];
    updated[playerIndex].investigators.push("");
    setFormData({ ...formData, playerInvestigators: updated });
  };

  const handlePlayerCountChange = (e) => {
    const count = Number(e.target.value);
    const updated = Array.from({ length: count }, (_, i) =>
      formData.playerInvestigators[i] || { player: "", investigators: [""] }
    );
    setFormData({ ...formData, playerCount: count, playerInvestigators: updated });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("/api/add-game", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    router.push("/");
  } else {
    alert("Failed to add game.");
  }
};

  return (
    <div className="container-form">
    <nav className="navbar">
<button
  className="navbar-button"
  onClick={() => router.push("/")}
>
  Home
</button>

   <button
    className="navbar-button"
    onClick={() => router.push("/add-game-form")}
  >Add Game
  </button>
</nav>
      <div className="header-add-game">Add Game</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <br />

          <label>Ancient One</label>
          <select name="ancientOne" value={formData.ancientOne} onChange={handleChange} required>
            <option value="" >Select</option>
            {ancientOnes.map((ao) => (
              <option key={ao.Ancient_One_ID} value={ao.Ancient_One_Name}>
                {ao.Ancient_One_Name}
              </option>
            ))}
          </select>
          <br />

          <label>Victory?</label>
          <div className="victory-buttons">
            <button
              type="button"
              className={`victory-button ${formData.victory === true ? "victory-yes" : ""}`}
              onClick={() => setFormData({ ...formData, victory: true })}
            >
              Yes
            </button>
            <button
              type="button"
              className={`victory-button ${formData.victory === false ? "victory-no" : ""}`}
              onClick={() => setFormData({ ...formData, victory: false })}
            >
              No
            </button>
          </div>

          <br />
          <label>Score</label>
          <input type="number" name="score" value={formData.score} onChange={handleChange} />
          <br />

          <label>Number of Players</label>
          <select name="playerCount" value={formData.playerCount} onChange={handlePlayerCountChange} required>
            <option value="" >Select</option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <br />

          {formData.playerInvestigators.map((entry, pIndex) => (
            <div key={pIndex} >
{pIndex > 0 && <br />}
<label>Player {pIndex + 1}</label>
              <select
                value={entry.player}
                onChange={(e) => handlePlayerChange(pIndex, e.target.value)}
                required
              >
                <option value="">Select Player</option>
                {players.map((p) => (
                  <option key={p.Player_ID} value={p.Player_Name}>
                    {p.Player_Name}
                  </option>
                ))}
              </select>
<label>Investigator(s)</label>
{entry.investigators.map((inv, iIndex) => (
  <div key={iIndex} className="investigator-list">
    <select
      value={inv}
      onChange={(e) => {
        handleInvestigatorChange(pIndex, iIndex, e.target.value);
        if (
          iIndex === entry.investigators.length - 1 &&
          e.target.value !== ""
        ) {
          const updated = [...formData.playerInvestigators];
          updated[pIndex].investigators.push("");
          setFormData({ ...formData, playerInvestigators: updated });
        }
      }}
      
    >
      <option value="">Select Investigator</option>
      {investigators.map((invObj) => (
        <option key={invObj.Investigator_ID} value={invObj.Investigator_Name}>
          {invObj.Investigator_Name}
        </option>
      ))}
    </select>
  </div>
))}



            </div>
          ))}
<br/>
          <label>Notes</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
          <br/>

                <div className="submit-button-wrap">
            <button className = "submit-button" type="submit">Submit</button>
          </div>
          

        </form>
      </div>

    </div>
  );
}