import styles from "./styles.module.css";

const Pagination = ({ handlePagination }) => (
  <div className={styles.pagination}>
    <button
      className={styles.pagination__btn}
      onClick={() => handlePagination(-1)}
    >
      Previous page
    </button>
    <button
      className={styles.pagination__btn}
      onClick={() => handlePagination(1)}
    >
      Next page
    </button>
  </div>
);

export default Pagination;
