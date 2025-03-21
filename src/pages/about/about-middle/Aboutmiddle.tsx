import React from "react";
import styles from "./Aboutmiddle.module.css";
const AboutMiddle: React.FC = () => {
  return (
    <div className={styles.Box}>
      <div className={styles.Top}>
        <img src="/about1.jpg" alt="about1" className={styles.img} />
        <div className={styles.TopcontentBox}>
          <div className={styles.minititle}>행사/이벤트의 A-Z</div>
          <div className={styles.subtitle}>목적, 분야, 규모별</div>
          <div className={styles.title}>인썸블루의 맞춤 토탈 솔루션</div>
          <div className={styles.content}>
            상상을 넘어선 최상의 서비스를 위해,
            <br /> 준비해 나가는 모든 과정부터 마무리까지
            <br /> 고객사의 입장에서 생각하고 움직이겠습니다.
          </div>
        </div>
      </div>
      <div className={styles.Bottom}>
        <div className={styles.imgbox}>
          <div className={styles.imgcontent}>
            <div className={styles.fontbox}>
              <div className={styles.bold}>
                Deep&nbsp; <div className={styles.blue}>In</div>sight
              </div>
              <div className={styles.font}>
                행사 전체에 관한 이해도가 높은 전문가, 인썸블루
              </div>
            </div>
          </div>
          <div className={styles.imgcontent}>
            <div className={styles.fontbox}>
              <div className={styles.bold}>
                Awe<div className={styles.blue}>Some</div> &nbsp;Management
              </div>
              <div className={styles.font}>
                다시 찾아올 수밖에 없는 남다른 행사 관리 노하우
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMiddle;
