import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import styles from "./Like.module.css";

interface Props {
  liked: boolean;
  onClick: () => void;
}
function Like({ liked, onClick }: Props) {
  return (
    <div className={styles.likeWrapper} onClick={onClick}>
      {liked ? <FcLike /> : <FaRegHeart />}
    </div>
  );
}

export default Like;
