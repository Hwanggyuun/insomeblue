import { Map, MapMarker } from "react-kakao-maps-sdk";

const Main = () => {

    const s_lat = 37.5467683738173;
    const s_lng = 127.065279307819;
    console.log(window.kakao);

    return (
        <>
          <Map
            center={{ lat: s_lat, lng: s_lng }}
            style={{ width: "500px", height: "360px"}}
          >
            <MapMarker position={{ lat: s_lat, lng: s_lng }}>
            </MapMarker>
          </Map>
        </>
      );
};

export default Main;
