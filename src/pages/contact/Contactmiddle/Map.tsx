import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

const Main = () => {
  const s_lat = 37.5467683738173;
  const s_lng = 127.065279307819;

  const [mapSize, setMapSize] = useState({ width: 500, height: 360 });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 480) {
        setMapSize({ width: 300, height: 220 });
      } else if (screenWidth <= 768) {
        setMapSize({ width: 350, height: 250 });
      } else if (screenWidth <= 1024) {
        setMapSize({ width: 400, height: 300 });
      } else {
        setMapSize({ width: 500, height: 360 });
      }
    };

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      handleResize();
    }, 100);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Map
        center={{ lat: s_lat, lng: s_lng }}
        style={{ width: `${mapSize.width}px`, height: `${mapSize.height}px` }}
        level={3}
      >
        <MapMarker position={{ lat: s_lat, lng: s_lng }} />
      </Map>
    </div>
  );
};

export default Main;
