import styles from "./styles.module.css";

const Form = ({ handleSubmit, search, setSearch }) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <input
      value={search}
      type="text"
      placeholder="Search character"
      className={styles.form__input}
      onChange={(evt) => setSearch(evt.target.value)}
    />
    <button className={styles.form__btn} type="submit">
      Search
    </button>
  </form>
);

export default Form;
