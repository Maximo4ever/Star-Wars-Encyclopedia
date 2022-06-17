import styles from "./styles.module.css";

const DetailsCharacter = ({ showModal, setShowModal, detailsCharacter }) => {
  return (
    <div className={`${styles.details} ${showModal || styles.noDisplay}`}>
      <div className={styles.details__modal}>
        <h3>
          Name: <span>{detailsCharacter.name}</span>
        </h3>
        <h3>
          Gender: <span>{detailsCharacter.gender}</span>
        </h3>
        <h3>
          Birth year: <span>{detailsCharacter.birth_year}</span>
        </h3>
        <h3>
          Height: <span>{detailsCharacter.height}</span>
        </h3>
        <h3>
          Mass: <span>{detailsCharacter.mass}</span>
        </h3>
        <h3>
          Skin color: <span>{detailsCharacter.skin_color}</span>
        </h3>
        <h3>
          Eye color: <span>{detailsCharacter.eye_color}</span>
        </h3>
        <button
          onClick={() => setShowModal(false)}
          className={styles.details__btn}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default DetailsCharacter;
