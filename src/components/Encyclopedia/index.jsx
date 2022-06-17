import { useState } from "react";
import Loader from "../Loader";
import DetailsCharacter from "./Details";
import styles from "./styles.module.css";

const Encyclopedia = ({ isloading, characters }) => {
  const [showModal, setShowModal] = useState(false);
  const [detailsCharacter, setDetailsCharacter] = useState({});

  const handleClickCharacter = async (character) => {
    setShowModal(true);
    setDetailsCharacter(character);
  };
  return (
    <div className={styles.encyclopedia}>
      <DetailsCharacter
        showModal={showModal}
        setShowModal={setShowModal}
        detailsCharacter={detailsCharacter}
      />

      {isloading ? (
        <Loader />
      ) : characters.length ? (
        characters.map((character, id) => (
          <div className={styles.encyclopedia__character} key={character.name}>
            <h3
              className={styles.encyclopedia__character__name}
              onClick={() => handleClickCharacter(character)}
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
      ) : (
        <h1 className={styles.noResults}>No results found</h1>
      )}
    </div>
  );
};

export default Encyclopedia;
