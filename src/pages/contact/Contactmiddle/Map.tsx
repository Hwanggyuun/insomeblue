import { Map, MapMarker } from "react-kakao-maps-sdk";

const Main = () => {

    const s_lat = 37.55465000468857;
    const s_lng = 126.97059787494679;
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
