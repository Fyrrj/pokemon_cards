import React from "react";
import Navbar from "./components/Navbar";
import CardsList from "./components/CardsList";
import LoadBtn from "./components/LoadBtn";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <CardsList />
      <LoadBtn />
    </div>
  );
}

export default App;
