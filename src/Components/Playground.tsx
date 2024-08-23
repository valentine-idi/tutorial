import { useState } from "react";

function Playground() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    const newPizza = { ...pizza };
    console.log(newPizza);
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default Playground;
