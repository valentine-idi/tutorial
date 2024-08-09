import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function DataItems() {
  return (
    <>
      <h1>Cities</h1>
      {data.length < 1 && <p>No Cities found</p>}

      {data.map((d, index) => (
        <ListGroupItem
          key={index}
          onClick={() => setSelectedIndex(index)}
          active={SelectedIndex == index ? true : false}
        >
          {d}
        </ListGroupItem>
      ))}
    </>
  );
}

export default DataItems;
