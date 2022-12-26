import styles from "./Card.module.css";

const Card = ({ text, photo, index, onClickHandler, isActive }) => {
  return (
    <div className={styles.wrapper} onClick={() => onClickHandler(index)}>
      <div className={styles.photo}>
        <img src={photo} alt="" className={isActive ? styles.transform : ""} />
      </div>
      <div className={styles.text}>
        <p >{isActive ? text : text.slice(0, 101) + "..."}</p>
      </div>
    </div>
  );
};

export default Card;
