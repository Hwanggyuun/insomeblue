import React from "react";
import styles from "./ServiceContent.module.css";
const ServiceContent: React.FC = () => {
  return (
    <div className={styles.Box}>
      <div className={styles.itembox}>
        <img src="/service1.jpg" alt="service" className={styles.img} />
        <div className={styles.item}>
          <div className={styles.number}>01</div>
          <div className={styles.title}>기획 · 운영</div>
          <div className={styles.content}>
            행사 기획과 컨셉에 맞는 기획과 아티스트, 뮤지션,아나운서 등
            엔터테이너 섭외는 물론 현장 운영까지 가능합니다.
          </div>
        </div>
      </div>
      <div className={styles.itembox}>
        <div className={styles.item}>
          <div className={styles.number}>02</div>
          <div className={styles.title}>전시 행사</div>
          <div className={styles.content}>
            기본 부스부터 대형 목공 부스까지 컨셉에 맞춘 부스 디자인 및 운영을
            진행합니다.
          </div>
        </div>
        <img src="/service2.jpg" alt="service" className={styles.img} />
      </div>
      <div className={styles.itembox}>
        <img src="/service3.jpg" alt="service" className={styles.img} />
        <div className={styles.item}>
          <div className={styles.number}>03</div>
          <div className={styles.title}>디자인 · 제작</div>
          <div className={styles.content}>
            키비쥬얼시안 제작 후 포스터, 현수막, 발표집, 명찰, 명패, PPT, 기념품
            등 행사에 필요한 모든 디자인을 제작합니다.
          </div>
        </div>
      </div>
      <div className={styles.itembox}>
        <div className={styles.item}>
          <div className={styles.number}>04</div>
          <div className={styles.title}>케이터링</div>
          <div className={styles.content}>
            간단한 다과 세팅부터 핑거푸드와 음료, 도시락 등 행사에 최적화된
            케이터링을 세팅합니다.
          </div>
        </div>
        <img src="/service4.jpg" alt="service" className={styles.img} />
      </div>
    </div>
  );
};

export default ServiceContent;
