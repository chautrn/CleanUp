import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components'

const Map = () => {
	const MapDisplay = styled.div`
		height: 100vh;
		width: 100vw;
	`

	useEffect(() => {
		L.map('map', {
			center: [49.8419, 24.0315],
			zoom: 16,
			layers: [
				L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
					attribution:
					'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				}),
			]
		});
	}, []);

	return(
		<div id='wrapper'>
			<MapDisplay id='map'/> 
		</div> 
	);
};

export default Map;
