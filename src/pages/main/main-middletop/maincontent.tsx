import React from "react";
import styles from "./mainContent.module.css";
import { useNavigate } from "react-router-dom";
const MainContent: React.FC = () => {
  const navigate = useNavigate();
  const handleMore = () => {
    navigate("/main/portfolio");
  };
  const handlePlus = () => {
    navigate("/main/client");
  };
  return (
    <>
      <div className={styles.Box}>
        <div className={styles.Title}>
          Deep <div className={styles.blue}>In</div>sight &<br />
          Awe<div className={styles.blue}>some</div> Management
        </div>
        <div className={styles.subTitle}>
          깊이있는 행사 기획과 실행, 오직 인썸블루에서만!
        </div>
        <div className={styles.imgbox}>
          <div className={styles.leftimgbox}></div>
          <div className={styles.rightimgbox}>
            <img className={styles.img} src="/imgbox2.jpg" alt="box2" />
            <img className={styles.img} src="/imgbox3.jpg" alt="box3" />
            <img className={styles.img} src="/imgbox4.jpg" alt="box4" />
            <div className={styles.more} onClick={handleMore}>
              MORE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrowIcon}
              >
                <path d="M8 3l10 9-10 9" />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.impact}>
          <div> </div>
          <div className={styles.impactcontent}>
            이미 수많은 기업에서 선택한{" "}
            <div className={styles.blue}>인썸블루</div>
          </div>
          <button className={styles.plus} onClick={handlePlus}>
            더보기<span>+</span>
          </button>
        </div>
      </div>
      <img src="/Mainpage2.jpg" alt="main" className={styles.brand} />
    </>
  );
};

export default MainContent;
