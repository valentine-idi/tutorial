import { useState } from "react";
import DisplayAlert from "./components/DisplayAlert";
import "./App.css";

function App() {
  const [ButtonType] = useState("link");
  return (
    <div className="App">
      <DisplayAlert />
    </div>
  );
}

export default App;
