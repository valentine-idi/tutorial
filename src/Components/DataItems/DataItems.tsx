import styles from "./DataItems.module.css";
import Like from "../Icons/Like";

interface Props {
  data: string[];
  heading: string;
  selectedIndex: number;
}

function DataItems({ data, heading, selectedIndex }: Props) {
  return (
    <div className={styles.dataItemsWrapper}>
      <h1 className={styles.header}>{heading}</h1>
      {data.length < 1 && <p>No Cities found</p>}

      <div className={styles.list}>
        {data.map((d, index) => (
          <div className={styles.listItems} key={index}>
            {d}{" "}
            <span>
              <Like />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataItems;
