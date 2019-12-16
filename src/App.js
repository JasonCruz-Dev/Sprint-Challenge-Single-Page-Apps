import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
    </main>
  );
}
