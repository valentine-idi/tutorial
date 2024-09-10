import { useState } from "react";
import Playground from "./components/Playground";
import ExpenseTracker from "./components/ExpenseTracker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ExpenseTracker />
    </div>
  );
}

export default App;
