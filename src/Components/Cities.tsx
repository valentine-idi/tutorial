import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import DataItems from "./DataItems";

interface Props {
  data: string[];
  heading: string;
  //selected?: number;
  onSelectingItem: (item: string) => void;
}

function Cities({ data, heading, onSelectingItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      {data.length < 1 && <p>No Cities found</p>}

      <ListGroup>
        {data.map((d, index) => (
          <ListGroupItem
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectingItem(d);
            }}
            active={selectedIndex == index ? true : false}
          >
            {d}
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default Cities;
