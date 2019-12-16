import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [value, setValue] = useState([]);
  const [foundValue, setFoundValue] = useState([]);

  const searchOnChange = e => {
    setValue(e.target.value);
  };

  const onSearch = e => {
    e.preventDefault();
    const name = value;

    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(res => {
        console.log(res.data.results);
        setFoundValue(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <input className='search-form' placeholder='Search by Name' onChange={searchOnChange} />
        <button type='submit'>Search</button>
      </form>
      {foundValue.map(res => (
        <div>{res.name}</div>
      ))}
    </>
    // {/* <section className="search-form">
    //  // Add a search form here
    // </section> */}
  );
}
