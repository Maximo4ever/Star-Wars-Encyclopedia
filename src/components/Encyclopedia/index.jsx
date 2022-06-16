import Loader from "../Loader";
import styles from "./styles.module.css";

const Encyclopedia = ({ handleClick, isloading, characters }) => (
  <div className={styles.encyclopedia}>
    {isloading ? (
      <Loader />
    ) : (
      characters.map((character) => (
        <div className={styles.encyclopedia__character} key={character.name}>
          <h3
            className={styles.encyclopedia__character__name}
            onClick={handleClick}
          >
            {character.name}
          </h3>
          <h5>
            Gender: <span>{character.gender}</span>
          </h5>
          <h5>
            Height: <span>{character.height}</span>
          </h5>
        </div>
      ))
    )}
  </div>
);

export default Encyclopedia;
