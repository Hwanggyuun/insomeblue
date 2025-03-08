import React from "react";
import styles from "./InsomeNavigate.module.css";
import NaviTop from "../../../Component/NaviTop/NaviTop";

const InsomeNavigate: React.FC = () => {
  return (
    <div className={styles.NaviBox}>
      <NaviTop />
      <div className={styles.NaviBottom}>
        <div className={styles.Bottomleft}>
          <div className={styles.subTitle}>상상이 현실이 되는 </div>
          <div className={styles.Title}>기업 이벤트/행사 토탈 솔루션</div>
          <div className={styles.content}>
            차별화된 기획, 제작, 운영, 관리
            <br />
            분야별 전문가가 함께하는 인썸블루와 시작하세요
          </div>
        </div>
        <div className={styles.Bottomright}>
          <button className={styles.leftbutton}>
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
          <button className={styles.rightbutton}>
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
