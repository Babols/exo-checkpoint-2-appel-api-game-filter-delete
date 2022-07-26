import "./App.css";
import React from "react";
import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDetails from "./components/GameDetails/GameDetails";


function App() {
  const name = "game site";
  
  return (
    <Router>
      <div className="App">
        <Header name={name} />
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
