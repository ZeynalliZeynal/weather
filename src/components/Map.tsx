import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useSearchParams } from "react-router-dom";
import { LatLngExpression } from "leaflet";
import { usePlace } from "@/features/usePlace";
import { useEffect } from "react";

const Map = () => {
  return (
    <MapContainer
      center={[40.1431, 47.5769]}
      zoom={8}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafletMarker />
    </MapContainer>
  );
};

export const LeafletMarker = () => {
  const { place, isLoading } = usePlace();
  const [searchParams, setSearchParams] = useSearchParams();
  useMapEvents({
    click({ latlng }) {
      searchParams.set("latlng", [latlng.lat, latlng.lng].join(","));
      setSearchParams(searchParams);
    },
  });
  useEffect(() => {
    if (place) {
      console.log(place);
      searchParams.set("place", place.address.city || place.address.country);
      setSearchParams(searchParams);
    }
  }, [isLoading, place, searchParams, setSearchParams]);

  const latlng = searchParams.get("latlng")
    ? searchParams.get("latlng")?.split(",").map(Number)
    : [47.5769, 40.1431];

  return searchParams.get("latlng") ? null : (
    <Marker position={latlng as LatLngExpression}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default Map;
