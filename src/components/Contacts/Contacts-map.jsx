import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./Contacts.css";

export default function ContactsMain() {
  return (
    <YMaps>
      <div className="map">
        <Map
          defaultState={{
            center: [59.925371, 30.34986],
            zoom: 16,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          width='80vw'
          height='500px'
        >
          <Placemark defaultGeometry={[59.925371, 30.34986]} />
        </Map>
      </div>
    </YMaps>
  );
}
