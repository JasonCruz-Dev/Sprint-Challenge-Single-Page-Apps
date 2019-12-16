import React from "react";

export default function CharacterCard({ url, names, gender, local, species, status }) {
  return (
    <div>
      <div>
        <div>
          <img src={url} alt='character' />
        </div>
        <div>
          <h1>
            Name: {names}
            {status}
          </h1>
          <p>Gender: {gender}</p>
          <p>Area: {local}</p>
          <p>Species: {species}</p>
        </div>
      </div>
      {/* {characterList.map(character => (
        <img src={character.image} alt={character.name} /> */}
      {/* ))} */}
    </div>
    // {/* <span>todo: character</span>; */ }
  );
}
