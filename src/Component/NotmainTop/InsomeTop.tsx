import React from 'react';
import styles from './InsomeTop.module.css'
import NaviTop from '../NaviTop/NaviTop';
import { useLocation } from 'react-router-dom';

const InsomeTop: React.FC = () => {

    const location = useLocation(); // 현재 URL 정보 가져오기
    const id = location.pathname.split('/').pop(); // URL 마지막 부분 추출
    return (
        <div className={styles.Box}>
            <NaviTop />
            <div className={styles.contentbox}>
                <div className={styles.minititle}>상상이 현실이 되는</div>
                <div className={styles.title}>인썸블루</div>
                <div className={styles.subtitle}>차별화된 기획, 제작, 운영, 관리<br/>분야별 전문가가 함께하는 인썸블루와 시작하세요</div>
            </div>
            <div className={styles.navitop}>
                <div className={styles.navifont}>Home / {id}</div>
            </div>
        </div>
    );
};

export default InsomeTop;