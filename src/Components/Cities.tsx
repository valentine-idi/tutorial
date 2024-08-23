import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import DataItems from "./DataItems";

function Cities() {
  const [data] = useState(["New York", "California", "Texas"]);
  const [selectedIndex] = useState(0);

  return (
    <>
      <DataItems data={data} heading="Cities" selectedIndex={selectedIndex} />
    </>
  );
}

export default Cities;
