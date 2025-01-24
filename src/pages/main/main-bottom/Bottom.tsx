import React from 'react';
import styles from './Bottom.module.css'
const Bottom: React.FC = () => {
    return (
        <div className={styles.background}>
            <div className={styles.leftcontent}>
                <img src="/insomeCIgray.png" alt="insome" className=  {styles.img} />
                <div className={styles.address}>서울시 성동구 아차산로 17길 49 생각공장데시앙플렉스 1614호
                    <br/>상호:(주)인썸블루 | 대표자 : 이호성 | 사업자번호 : 434-87-01595
                </div>
                <div className={styles.info}>
                    <div className={styles.infor}><div className={styles.blue}>T</div> 02-462-9981</div>
                    <div className={styles.infor}><div className={styles.blue}>E-MAIL</div> blue@insomeblue.com</div>
                    <div className={styles.infor}><div className={styles.blue}>FAX</div> 02-6499-7533</div>
                
                </div>
                <div className={styles.water}>Copyrights ⓒ 2025 All Rights Reserved by insomeblue</div>

            </div>
            <div className={styles.rightcontent}>
                <div className={styles.rightcontentbox}>
                    <div className={styles.bluecontent}>회사소개서</div>
                    <div className={styles.content}>이용약관</div>  
                    <div className={styles.content}>개인정보처리방침</div>
                </div>
            </div>
        </div> 
    );
};

export default Bottom;