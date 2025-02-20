import { useState } from "react";
import { useRouter } from "next/router";

export default function AddNewGame() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: "",
    ancientOne: "",
    victory: false,
    score: "",
    playerCount: "",
    investigatorCount: "",
    players: "",
    investigators: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/add-game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/"); // Redirect back to homepage after adding the game
    } else {
      alert("Failed to add game.");
    }
  };

  return (
    <div className="form-container">

      <div className="header">
        <h1>Add New Game</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Date: <input type="date" name="date" value={formData.date} onChange={handleChange} required /></label> <br/>
        <label>Ancient One: <input type="text" name="ancientOne" value={formData.ancientOne} onChange={handleChange} required /></label><br />
        <label>Victory? <input type="checkbox" name="victory" checked={formData.victory} onChange={handleChange} /></label><br />
        <label>Score: <input type="number" name="score" value={formData.score} onChange={handleChange} /></label><br />
        <label>#P: <input type="number" name="playerCount" value={formData.playerCount} onChange={handleChange} required /></label><br />
        <label>#I: <input type="number" name="investigatorCount" value={formData.investigatorCount} onChange={handleChange} required /></label><br />
        <label>Players: <textarea name="players" value={formData.players} onChange={handleChange}></textarea></label><br />
        <label>Investigators: <textarea name="investigators" value={formData.investigators} onChange={handleChange}></textarea></label><br />
        <label>Notes: <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea></label><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}