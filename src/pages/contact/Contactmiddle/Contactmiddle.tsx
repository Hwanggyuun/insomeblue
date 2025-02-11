import React ,{useEffect}from 'react';
import styles from './Contactmiddle.module.css';
import Main from './Map';
// import Map from './Map';
declare global {
  interface Window {
    kakao: any;
  }
}
const Contactmiddle: React.FC = () => {
//   const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;

// if (!kakaoApiKey) {
//   throw new Error('Kakao API Key is not defined in environment variables');
// }

// console.log('Kakao API Key:', kakaoApiKey);

  useEffect(() => {
    const kakaoApiKey = import.meta.env.VITE_KAKAO_API_KEY;

    if (!kakaoApiKey) {
      console.error("Kakao API Key is not defined in the environment variables.");
    } else {
      console.log("Kakao API Key:", kakaoApiKey);
    }

  }, []);

  return (
    <div className={styles.Box}>
      <div className={styles.leftBox}>
        <div className={styles.title}>행사/이벤트 문의</div>
        <div className={styles.content}>
          전화를 주시면 보다 신속하고 정확한 안내를 받으실 수 있습니다.
          <br />
          *운영시간 : 오전 10시 ~ 오후 6시 (점심시간 12시 ~ 1시)
        </div>
        <div className={styles.bluebox}>
          <div className={styles.blueline}/>
            <div className={styles.contentbox}>
            <div className={styles.blueboxtitle}>주소</div>
              <div className={styles.address}>
                서울시 성동구 아차산로 17길 49
                <br /> 생각공장데시앙 플렉스 515호
              </div>
            </div>
        </div>
        <div className={styles.bluebox}>
        <div className={styles.blueline}/>
         <div className={styles.contentbox}>

          <div className={styles.blueboxtitle}>E-Mail</div>
            <div className={styles.email}>insomeblue@insomeblue.com</div>
          </div>
        </div>
        <div className={styles.phone}>02.462.9981</div>

      </div>
      <div className={styles.rightBox}>
      <Main/>
      </div>
    </div>
  );
};

export default Contactmiddle;
