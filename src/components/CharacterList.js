import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        setCharacterList(res.data.results);
      })
      .catch(err => {
        console.log(`Looks like we have an ${err}`);
      });
  }, []);

  console.log(characterList);

  return (
    <section className='character-list grid-view'>
      {characterList.map(char => (
        <CharacterCard
          url={char.image}
          names={char.name}
          gender={char.gender}
          local={char.location.name}
          species={char.species}
          status={char.status}
        />
      ))}
    </section>
  );
}
