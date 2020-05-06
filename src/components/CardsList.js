import React from "react";

export default function CardsList() {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="top-info">
          <h2>Vespiquen</h2>
          <p>
            Pokedex number <span className="bolder">4</span>
          </p>
        </div>
        <img src="https://images.pokemontcg.io/xy7/10.png" alt="pokemon" />
        <div className="bottom-info">
          <p>
            <span>Supertype </span>Pokémon
          </p>
          <p>
            <span>Evolves Form </span>Combee
          </p>
          <p>
            <span>Rarity </span>Uncommon
          </p>
        </div>
      </div>
    </div>
  );
}
