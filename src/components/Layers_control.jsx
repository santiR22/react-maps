import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Marker,
  Popup,
  Rectangle,
} from "react-leaflet";

export const Layers_control = () => {
  const center = [-26.1852, -58.1743];
  const rectangle = [
    [-26.1879, -58.1863],
    [-26.1948, -58.1772],
  ];

  /*  [arriba, izquierda], 
    [abajo, derecha], */

  return (
    <LayersControl position='topright'>
      <LayersControl.Overlay name='Marker with popup'>
        <Marker position={center}>
          <Popup>
            <h3>Centro de la ciudad &#x1F3D9;</h3>
          </Popup>
        </Marker>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name='Capas tipo <b>circle</b>'>
        <LayerGroup>
          <Circle
            center={center}
            pathOptions={{ fillColor: "blue" }}
            radius={400}
          />
          <Circle
            center={center}
            pathOptions={{ fillColor: "red" }}
            radius={100}
            stroke={false}
          />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              pathOptions={{ color: "green", fillColor: "green" }}
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name='Feature group'>
        <FeatureGroup pathOptions={{ color: "purple" }}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};
