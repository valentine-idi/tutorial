import { useState } from "react";
import Like from "./components/Like";
import "./App.css";

function App() {
  const [liked, setLiked] = useState(false);
  const onClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="App">
      <Like liked={liked} onClick={onClick} />
    </div>
  );
}

export default App;
