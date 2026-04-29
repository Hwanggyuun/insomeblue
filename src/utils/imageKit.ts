const IMAGEKIT_BASE_URL = (
  import.meta.env.VITE_IMAGEKIT_BASE_URL || "https://ik.imagekit.io/gyuun"
).replace(/\/$/, "");

const FIREBASE_STORAGE_BUCKET = "insomeblue-ed6f0.firebasestorage.app";

const FIREBASE_DOWNLOAD_URL_REGEX =
  /^https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/([^/]+)\/o\/([^?]+)(\?.*)?$/i;

const normalizeStoragePath = (path: string) => path.replace(/^\/+/, "");

export const toImageKitUrl = (pathOrUrl: string): string => {
  if (!pathOrUrl) {
    return pathOrUrl;
  }

  const firebaseMatch = pathOrUrl.match(FIREBASE_DOWNLOAD_URL_REGEX);
  if (firebaseMatch) {
    const [, bucket, objectPath, queryString = ""] = firebaseMatch;
    return `${IMAGEKIT_BASE_URL}/v0/b/${bucket}/o/${objectPath}${queryString}`;
  }

  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const encodedPath = encodeURIComponent(normalizeStoragePath(pathOrUrl));
  return `${IMAGEKIT_BASE_URL}/v0/b/${FIREBASE_STORAGE_BUCKET}/o/${encodedPath}`;
};
