import React, { useState } from "react";
import styles from "./InsomeNavigate.module.css";
import NaviTop from "../../../Component/NaviTop/NaviTop";
const slides = [
  {
    image: "/mainpagea.jpg",
    subTitle: "상상이 현실이 되는 ",
    title: "기업 이벤트/행사 토탈 솔루션",
    content:
      "차별화된 기획, 제작, 운영, 관리\n분야별 전문가가 함께하는 인썸블루와 시작하세요",
  },
  {
    image: "/mainpageb.jpg",
    subTitle: "브랜드의 가치를 높이는",
    title: "행사 기획 및 매니지먼트",
    content:
      "소중한 브랜드 가치를 위해\n단순히 기획에서 끝나는 것이 아닌 운영관리까지 함께합니다.",
  },
  {
    image: "/mainpagec.jpg",
    subTitle: "무엇을 원하는",
    title: "클라이언트 1:1 맞춤 진행",
    content: "규모/기간/지역/타겟별 다양한 행사 기획과 진행이 가능합니다.",
  },
];
const InsomeNavigate: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <div
      className={styles.NaviBox}
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      <NaviTop />
      <div className={styles.NaviBottom}>
        <div className={styles.Bottomleft}>
          <div className={styles.subTitle}>{slides[currentIndex].subTitle}</div>
          <div className={styles.Title}>{slides[currentIndex].title}</div>
          <div className={styles.content}>{slides[currentIndex].content}</div>
        </div>
        <div className={styles.Bottomright}>
          <button className={styles.leftbutton} onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1"
            >
              <path d="M16 3l-10 9 10 9" />
            </svg>
          </button>
          <button className={styles.rightbutton} onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1"
            >
              <path d="M8 3l10 9-10 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsomeNavigate;
