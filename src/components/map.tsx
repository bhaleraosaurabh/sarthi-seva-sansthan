"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Fix for default marker icons in Leaflet with Next.js
const markerIcon = L.icon({
	iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
	iconRetinaUrl:
		"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
	shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

// Ballia, Uttar Pradesh coordinates
const position: [number, number] = [25.7571, 84.1471];

export default function ContactMap() {
	const mapRef = useRef<L.Map>(null);

	useEffect(() => {
		// Fix for map container not rendering properly
		if (mapRef?.current) {
			mapRef?.current?.invalidateSize();
		}
	}, []);

	return (
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: "500px", width: "100%" }}
			ref={mapRef}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position} icon={markerIcon}>
				<Popup>
					<div className="text-center">
						<h3 className="font-semibold">Sarthi Seva Sansthan</h3>
						<p className="text-sm">Ballia, Uttar Pradesh</p>
					</div>
				</Popup>
			</Marker>
		</MapContainer>
	);
}
