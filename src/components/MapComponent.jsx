import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const MapComponent = ({ latitude = 20, longitude = 90 }) => {
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Latitude: {latitude},
          <br /> Longitude: {longitude}.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapComponent;
