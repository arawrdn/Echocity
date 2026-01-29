import { useEffect } from "react";
import L from "leaflet";

export default function MapView() {
  useEffect(() => {
    const map = L.map("map").setView([0, 0], 2);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);
  }, []);

  return <div id="map" className="w-[90%] h-[300px] rounded-lg border border-gray-700" />;
}
