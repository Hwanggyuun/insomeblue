import React from 'react';
import styles from './mainbluecontent.module.css';
import { useNavigate } from 'react-router-dom';
const MainBlueContent: React.FC = () => {
const navigate = useNavigate();
    const handleContact  = () => {
        navigate('/main/Contact');
    };
    return (
        <>
            <div className={styles.background}>
                <div className={styles.content}>
                    <div className={styles.Top}>행사/이벤트의 A-Z</div>
                    <div className={styles.Topwhite}>목적, 분야, 규모별<br/>인썸블루의 맞춤 토탈 솔루션</div>
                    <div className={styles.middle}>여러분의 상상을 현실로 만들어 드립니다.</div>
                    <button className={styles.know} onClick={handleContact}>견적 받아보기</button>
                </div>
            </div>
        </>
    );
};

export default MainBlueContent;