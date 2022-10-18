import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Layers_control } from "./Layers_control";
import { LocationMarker } from "./LocationMarker";
import { MiniMapControl } from "./MiniMapControl";

export const BasicMap = () => {
  const position = [-26.19588, -58.21915];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>Direccion actual &#x1F340;</Popup>
      </Marker>
      <Layers_control />
      <LocationMarker />
      <MiniMapControl position='bottomleft' />
    </MapContainer>
  );
};
