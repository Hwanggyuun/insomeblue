import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWC2qe_YwM3IMuOwH4Y9CH65LjFNl0qjI",
  authDomain: "insomeblue-a9819.firebaseapp.com",
  projectId: "insomeblue-a9819",
  storageBucket: "insomeblue-a9819.firebasestorage.app",
  messagingSenderId: "482828452279",
  appId: "1:482828452279:web:56ac7cd37b2bbf1e9e6832",
  measurementId: "G-6XE95H3JH1",
};
// ✅ Firebase 초기화
// ✅ Firebase 초기화
const app = initializeApp(firebaseConfig);

// ✅ Firestore 캐싱 설정 (🚀 올바르게 수정됨)
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({}), // 캐시 활성화
});

export { db };
// interface ImageData {
//   urls: string[]; // 이미지 URL 배열
// }

// // 🔥 모든 카테고리를 하나의 타입으로 정의
// type ImageCategories =
//   | "conference"
//   | "golf"
//   | "online"
//   | "offline"
//   | "promotion";
