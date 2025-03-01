import React from "react";
import styles from "./portfoliomiddle.module.css";
import photo from "../photo/Photo";
import Pagination from "./Pagination/Pagination"; // Pagination 컴포넌트 분리 (아래 참고)

const PortfolioMiddle: React.FC = () => {
  const [count, setCount] = React.useState<number>(0); // 현재 항목 선택 상태
  const [number, setNumber] = React.useState<number>(1); // 현재 페이지 번호

  const handleClick = (index: number) => {
    setCount(index);
    setNumber(1); // 탭 변경 시 페이지 초기화
  };

  const items = [
    "컨퍼런스/세미나",
    "전시/기획/프로모션",
    "오프라인 행사/사내 이벤트",
    "온라인 프로모션/웨비나",
    "골프 행사",
  ];

  const imagesPerPage = 8; // 페이지당 이미지 수
  const totalImages = photo[count].images.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  // 현재 페이지에 해당하는 이미지 계산
  const displayedImages = photo[count].images.slice(
    (number - 1) * imagesPerPage,
    number * imagesPerPage
  );

  return (
    <div className={styles.Box}>
      <div className={styles.Top}>총 228개</div>
      <div className={styles.middlebox}>
        <div className={styles.middletop}>
          {items.map((item, index) => (
            <div
              key={index}
              className={` ${
                count === index ? styles.blue : styles.middleitem
              }`}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={styles.imgbox}>
          {displayedImages.map((item, index) => (
            <div key={index} className={styles.imgcontent}>
              <img src={item} alt="img" className={styles.img} loading="lazy" />
            </div>
          ))}
        </div>
        <Pagination
          total={totalPages}
          currentPage={number}
          setPage={setNumber} // 상태 변경 함수 전달
        />
        <div className={styles.last}>
          If you can imagine it, we can create it!
        </div>
      </div>
    </div>
  );
};

export default PortfolioMiddle;
