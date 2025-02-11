import React from 'react';
import styles from './Pagination.module.css';

type PaginationProps = {
  total: number; // 총 페이지 수
  currentPage: number; // 현재 페이지
  setPage: React.Dispatch<React.SetStateAction<number>>; // 페이지 변경 함수
};

const Pagination: React.FC<PaginationProps> = ({ total, currentPage, setPage }) => {
  const handlePageClick = (page: number) => {
    setPage(page);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < total) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.numberbox}>
      <button
        className={styles.leftbutton}
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        &#8592;
      </button>
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index + 1}
          className={`${styles.pagebutton} ${
            currentPage === index + 1 ? styles.active : ''
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={styles.rightbutton}
        onClick={handleNextClick}
        disabled={currentPage === total}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Pagination;
