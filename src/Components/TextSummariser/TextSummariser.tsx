import { useState } from "react";
import styles from "./TextSummariser.module.css";

interface Props {
  maxChar?: number;
  children: string;
}
function TextSummariser({ maxChar = 100, children }: Props) {
  const [isLess, setIsLess] = useState(false);
  const [textCount, setTextCount] = useState(maxChar);

  const handleClick = () => {
    if (isLess) {
      setTextCount(maxChar);
      setIsLess(false);
      return;
    }

    setTextCount(children.length);
    setIsLess(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}> Topic</div>

      <div className={styles.text}>{children.substring(0, textCount)}...</div>

      <button className={styles.button} onClick={handleClick}>
        See {isLess ? "Less" : "More"}
      </button>
    </div>
  );
}

export default TextSummariser;
