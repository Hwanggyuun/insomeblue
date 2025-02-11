import React, { useState } from 'react';
import styles from './Bottom.module.css';

const Bottom: React.FC = () => {
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    return (
        <div className={styles.background}>
            <div className={styles.leftcontent}>
                <img src="/insomeCIgray.png" alt="insome" className={styles.img} />
                <div className={styles.address}>
                    서울시 성동구 아차산로 17길 49 생각공장데시앙플렉스 515호
                    <br />상호:(주)인썸블루 | 대표자 : 이호성 | 사업자번호 : 434-87-01595
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
                    <a className={styles.bluecontent} href="/files/2025_인썸블루_회사소개서.pdf" download>회사소개서</a>
                    <div className={styles.content} onClick={() => setShowTerms(!showTerms)}>이용약관</div>
                    <div className={styles.content} onClick={() => setShowPrivacy(!showPrivacy)}>개인정보처리방침</div>
                </div>
            </div>

            {/* 이용약관 내용 */}
            {showTerms && (
                <div className={styles.contentBox}>
                    <button className={styles.closeButton} onClick={() => setShowTerms(!showTerms)}>✖</button>

                    <h2>이용약관</h2>
                    <div dangerouslySetInnerHTML={{ __html: `
        <h2><strong>제1조 (목적)</strong></h2>
        <p>본 약관은 <strong>인썸블루(insomeBLUE)</strong>(이하 "회사")가 운영하는 웹사이트(이하 "사이트")를 이용하는 이용자와 회사 간의 권리, 의무 및 책임 사항을 규정하는 것을 목적으로 합니다.</p>

        <h3><strong>제2조 (용어의 정의)</strong></h3>
        <ul>
            <li><strong>1.</strong> "사이트"란 회사가 행사 기획 및 운영 서비스 정보를 제공하는 웹사이트를 의미합니다.</li>
            <li><strong>2.</strong> "이용자"란 사이트에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 의미합니다.</li>
        </ul>

        <h3><strong>제3조 (약관의 효력 및 변경)</strong></h3>
        <ul>
            <li><strong>1.</strong> 본 약관은 사이트에 게시함으로써 효력이 발생하며, 이용자는 사이트 이용 시 본 약관에 동의한 것으로 간주됩니다.</li>
            <li><strong>2.</strong> 회사는 관련 법령을 위배하지 않는 범위에서 약관을 개정할 수 있으며, 변경된 약관은 사이트를 통해 공지합니다.</li>
            <li><strong>3.</strong> 이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.</li>
        </ul>

        <h3><strong>제4조 (서비스의 제공 및 변경)</strong></h3>
        <ul>
            <li><strong>1.</strong> 회사는 다음과 같은 서비스를 제공합니다.</li>
            <ul>
                <li>행사 기획 및 운영 서비스 정보 제공</li>
                <li>온라인 문의 및 상담 서비스</li>
                <li>기타 회사가 정하는 서비스</li>
            </ul>
            <li><strong>2.</strong> 회사는 필요 시 서비스 내용을 변경할 수 있으며, 변경 사항은 사전에 공지합니다.</li>
        </ul>

        <h3><strong>제5조 (이용자의 의무 및 금지행위)</strong></h3>
        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
        <ul>
            <li>타인의 개인정보 도용</li>
            <li>회사 및 제3자의 저작권 등 지적재산권 침해</li>
            <li>사이트 운영을 방해하는 행위</li>
            <li>법령 및 공공질서에 위반되는 행위</li>
        </ul>

        <h3><strong>제6조 (개인정보 보호)</strong></h3>
        <p>회사는 이용자의 개인정보를 보호하기 위해 「개인정보 보호법」에 따라 적절한 조치를 취하며, 자세한 사항은 개인정보처리방침을 따릅니다.</p>

        <h3><strong>제7조 (면책 조항)</strong></h3>
        <ul>
            <li><strong>1.</strong> 회사는 천재지변, 서버 장애, 해킹 등 불가항력적인 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
            <li><strong>2.</strong> 이용자가 사이트 내 정보를 활용하여 발생한 손해에 대해 회사는 책임을 지지 않습니다.</li>
        </ul>

        <h3><strong>제8조 (분쟁 해결 및 관할 법원)</strong></h3>
        <ul>
            <li><strong>1.</strong> 본 약관과 관련하여 발생한 분쟁은 원만한 해결을 위해 상호 협의합니다.</li>
            <li><strong>2.</strong> 협의가 이루어지지 않을 경우, 대한민국 법률을 따르며, 관할 법원은 회사의 본사 소재지 법원으로 합니다.</li>
        </ul>

        <h3><strong>부칙</strong></h3>
        <p>본 약관은 2025년 2월 6일부터 시행됩니다.</p>
    ` }} />

                </div>
            )}

            {/* 개인정보처리방침 내용 */}
            {showPrivacy && (
    <div className={styles.contentBox}>
        <button className={styles.closeButton} onClick={() => setShowPrivacy(!showPrivacy)}>✖</button>

        {/* dangerouslySetInnerHTML 사용하여 HTML 직접 렌더링 */}
        <div dangerouslySetInnerHTML={{ __html: `
            <h2><strong>개인정보처리방침</strong></h2>
            인썸블루(insomeBLUE)(이하 "회사")는 고객의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 및 관련 법령을 준수합니다. 
            본 개인정보처리방침은 회사가 수집하는 개인정보의 항목, 이용 목적, 보관 기간, 제3자 제공, 위탁처리 등에 대한 내용을 포함하고 있습니다.

            <h3><strong>1. 개인정보의 수집 및 이용 목적</strong></h3>
            회사는 다음과 같은 목적으로 개인정보를 수집하고 이용합니다.
            <ul>
                <li> 행사 문의 및 계약 진행 (견적 상담, 계약 체결, 행사 기획 및 운영)</li>
                <li> 서비스 제공 및 고객 지원 (행사 운영 관련 안내, 고객 상담)</li>
                <li> 마케팅 및 홍보 (이벤트 및 프로모션 안내, 고객 만족도 조사 등)</li>
                <li> 서비스 개선 및 분석 (이용 패턴 분석, 서비스 개선 연구 등)</li>
            </ul>

            <h3><strong>2. 수집하는 개인정보 항목</strong></h3>
            회사는 다음과 같은 개인정보를 수집할 수 있습니다.
            <h4><strong>1) 필수 수집 정보</strong></h4>
            <ul>
                <li>행사 문의 시: 이름, 이메일, 전화번호, 회사명</li>
                <li>계약 진행 시: 행사 관련 정보(장소, 일정, 예상 인원 등)</li>
            </ul>
            <h4><strong>2) 선택 수집 정보</strong></h4>
            <ul>
                <li>마케팅 활용 시: 관심 행사 유형, 서비스 이용 기록</li>
            </ul>

            <h3><strong>3. 개인정보의 보유 및 이용 기간</strong></h3>
            회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성되면 해당 정보를 지체 없이 파기합니다.
            <ul>
                <li><strong>1.</strong> 계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
                <li><strong>2.</strong> 소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
                <li><strong>3.</strong> 웹사이트 방문 기록: 3개월 (통신비밀보호법)</li>
            </ul>

            <h3><strong>4. 개인정보의 제3자 제공</strong></h3>
            회사는 원칙적으로 고객의 개인정보를 제3자에게 제공하지 않습니다. 
            다만, 법령에 따라 제공 의무가 있는 경우에는 예외로 합니다.

            <h3><strong>5. 개인정보 보호를 위한 기술적·관리적 조치</strong></h3>
            <ul>
                <li><strong>기술적 조치:</strong> 보안 서버 운영, 암호화 저장, 백신 프로그램 운영</li>
                <li><strong>관리적 조치:</strong> 개인정보 접근 제한, 정기 보안 교육, 내부 점검</li>
            </ul>

            <h3><strong>6. 개인정보의 파기 절차 및 방법</strong></h3>
            <ul>
                <li><strong>파기 절차:</strong> 목적이 달성된 개인정보는 일정 기간 보관 후 파기됩니다.</li>
                <li><strong>파기 방법:</strong> 전자적 파일은 복구 불가능한 방법으로 삭제하며, 종이 문서는 분쇄 또는 소각 처리합니다.</li>
            </ul>

            <h3><strong>7. 이용자의 권리 및 행사 방법</strong></h3>
            이용자는 개인정보 조회, 수정, 삭제, 처리 정지를 요청할 수 있으며, 
            회사는 법령에 따라 신속하게 조치합니다.

            <h3><strong>8. 개인정보 보호책임자 및 문의처</strong></h3>
            개인정보 관련 문의 및 요청은 아래의 담당자에게 연락해 주세요.
            <ul>
                <li><strong>이메일:</strong> blue@insomeblue.com</li>
            </ul>

            <h3><strong>9. 개인정보처리방침의 변경</strong></h3>
            본 방침은 법령 및 회사 정책 변경에 따라 수정될 수 있으며, 
            변경 사항은 홈페이지를 통해 공지합니다.

            <strong>최종 개정일:</strong> 2025년 2월 6일
        ` }} />
    </div>
)}

        </div>
    );
};

export default Bottom;
