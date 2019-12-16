import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <NavLink to='/'>
        <p>Home</p>
      </NavLink>
      <NavLink to='/characters'>
        <p>Characters</p>
      </NavLink>
      <NavLink to='/location'>
        <p>Location</p>
      </NavLink>
      <NavLink to='episode'>
        <p>Episode</p>
      </NavLink>

      <SearchForm />

      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}
