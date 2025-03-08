import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDtv-pSQKnWLV-445t05coEQsuNTR_Vmwc",
  authDomain: "insomeblue-ed6f0.firebaseapp.com",
  projectId: "insomeblue-ed6f0",
  storageBucket: "insomeblue-ed6f0.firebasestorage.app",
  messagingSenderId: "609293909814",
  appId: "1:609293909814:web:1e19f6b5b272ae6ff33d97",
  measurementId: "G-XHTJTQEV47",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
