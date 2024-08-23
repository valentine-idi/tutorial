import React from "react";
import { IconContext } from "react-icons";
import { AiFillLike } from "react-icons/ai";

function Like() {
  return (
    <IconContext.Provider value={{ color: "red", className: "like" }}>
      <AiFillLike />
    </IconContext.Provider>
  );
}

export default Like;
