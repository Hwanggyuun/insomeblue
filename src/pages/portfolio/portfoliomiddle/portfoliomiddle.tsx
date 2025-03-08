import React, { useState, useEffect } from "react";
import styles from "./portfoliomiddle.module.css";
import Pagination from "./Pagination/Pagination";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
interface ImageData {
  urls: string[]; // 이미지 URL 배열
}

// 🔥 모든 카테고리를 하나의 타입으로 정의
type ImageCategories =
  | "conference"
  | "golf"
  | "online"
  | "offline"
  | "promotion";

// 🔥 Firestore에서 가져올 카테고리 목록
const categories: ImageCategories[] = [
  "conference",
  "promotion",
  "offline",
  "online",
  "golf",
];
const categoryLabels: Record<ImageCategories, string> = {
  conference: "컨퍼런스/세미나",
  promotion: "전시/기획/프로모션",
  offline: "오프라인 행사/사내 이벤트",
  online: "온라인 프로모션/웨비나",
  golf: "골프 행사",
};

const PortfolioMiddle: React.FC = () => {
  // ✅ Firestore 데이터를 상태로 관리
  const [imagesByCategory, setImagesByCategory] = useState<
    Record<ImageCategories, string[]>
  >({
    conference: [],
    promotion: [],
    offline: [],
    online: [],
    golf: [],
  });

  const [selectedCategory, setSelectedCategory] =
    useState<ImageCategories>("conference");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const imagesPerPage = 8;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "images")); // ✅ Firestore에서 모든 문서 한 번에 가져오기

        const newImages: Record<ImageCategories, string[]> = {
          conference: [],
          promotion: [],
          offline: [],
          online: [],
          golf: [],
        };

        querySnapshot.forEach((doc) => {
          const category = doc.id as ImageCategories;
          if (categories.includes(category)) {
            const data = doc.data() as ImageData;
            newImages[category] = data.urls || [];
          }
        });

        setImagesByCategory(newImages); // ✅ 상태 업데이트
        setLoading(false);
      } catch (error) {
        console.error("🔥 Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // ✅ 현재 선택된 카테고리의 이미지 리스트
  const totalImages = imagesByCategory[selectedCategory]?.length || 0;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  // ✅ 현재 페이지에서 보여줄 이미지
  const displayedImages =
    imagesByCategory[selectedCategory]?.slice(
      (currentPage - 1) * imagesPerPage,
      currentPage * imagesPerPage
    ) || [];

  return (
    <div className={styles.Box}>
      <div className={styles.Top}>총 {totalImages}개</div>
      <div className={styles.middlebox}>
        <div className={styles.middletop}>
          {categories.map((category) => (
            <div
              key={category}
              className={
                selectedCategory === category ? styles.blue : styles.middleitem
              }
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1); // ✅ 페이지 초기화
              }}
            >
              {categoryLabels[category]}
            </div>
          ))}
        </div>
        <div className={styles.imgbox}>
          {loading ? (
            <p>🔥 Loading images...</p>
          ) : (
            displayedImages.map((url, index) => (
              <div key={index} className={styles.imgcontent}>
                <img
                  key={index}
                  className={styles.img}
                  src={url}
                  alt={`img-${index}`}
                  loading="lazy"
                />
              </div>
            ))
          )}
        </div>
        <Pagination
          total={totalPages}
          currentPage={currentPage}
          setPage={setCurrentPage}
        />
        <div className={styles.last}>
          If you can imagine it, we can create it!
        </div>
      </div>
    </div>
  );
};

export default PortfolioMiddle;
