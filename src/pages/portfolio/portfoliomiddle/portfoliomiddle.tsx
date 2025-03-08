import React, { useState, useEffect } from "react";
import styles from "./portfoliomiddle.module.css";
import Pagination from "./Pagination/Pagination";
import { storage } from "../../../firebase"; // ✅ Firebase 설정 가져오기
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";

type ImageCategories =
  | "conference"
  | "golf"
  | "online"
  | "offline"
  | "promotion";

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
  const [images, setImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<ImageCategories>("conference");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const imagesPerPage = 8;
  const [loading, setLoading] = useState<boolean>(false);

  // ✅ Firebase Storage에서 선택된 카테고리의 이미지 가져오기
  const fetchImagesFromStorage = async (category: ImageCategories) => {
    setLoading(true);
    try {
      const folderRef = ref(storage, `/${category}/`);
      const fileList = await listAll(folderRef);

      // ✅ `getMetadata()`로 빠르게 파일 경로 가져오기
      const urls = await Promise.all(
        fileList.items.map(async (file) => {
          const metadata = await getMetadata(file); // 🔥 getMetadata() 활용
          return metadata.fullPath; // ✅ 파일의 전체 경로 가져오기
        })
      );

      // ✅ `getDownloadURL()`을 비동기 처리하여 성능 최적화
      const downloadUrls = await Promise.all(
        urls.map(async (path) => {
          return await getDownloadURL(ref(storage, path));
        })
      );

      setImages(downloadUrls);
    } catch (error) {
      console.error("🔥 Error fetching images:", error);
      setImages([]);
    }
    setLoading(false);
  };

  // ✅ 첫 번째 로딩 시 기본 카테고리(`conference`)의 이미지 가져오기
  useEffect(() => {
    fetchImagesFromStorage(selectedCategory);
  }, []);

  // ✅ 카테고리를 변경하면 해당 폴더에서 새 이미지 가져오기
  const handleCategoryChange = (category: ImageCategories) => {
    if (category === selectedCategory) return;
    setSelectedCategory(category);
    setCurrentPage(1);
    fetchImagesFromStorage(category);
  };

  // ✅ 페이지네이션 적용
  const totalImages = images.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);
  const displayedImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

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
              onClick={() => handleCategoryChange(category)}
            >
              {categoryLabels[category]}
            </div>
          ))}
        </div>
        <div className={styles.imgbox}>
          {loading ? (
            <div className={styles.skeletonContainer}>
              <div className={styles.skeleton}></div>
              <div className={styles.skeleton}></div>
              <div className={styles.skeleton}></div>
            </div>
          ) : (
            displayedImages.map((url, index) => (
              <div key={index} className={styles.imgcontent}>
                <img
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
