import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapTiles from './mapTiles';

const MapDisplay = styled.div`
	height: 100vh;
	width: 100vw;
`;

const Map = (props, ref) => {

	// build map on page start up
	const mapRef = useRef();
	useEffect(() => {
		mapRef.current = L.map('map', {
			center: [39.8283, -98.5795], // center of the U.S.
			zoom: 5,
			layers: [
				mapTiles.lightTheme	
			]
		});
	}, []);

	useEffect(() => {
		if (props.isDark) {
			mapRef.current.removeLayer(mapTiles.lightTheme);
			mapRef.current.addLayer(mapTiles.darkTheme);
		}
		else {
			mapRef.current.removeLayer(mapTiles.darkTheme);
			mapRef.current.addLayer(mapTiles.lightTheme);
		}
	});

	return(
		<div id='wrapper'>
			<MapDisplay id='map'>
				{props.children}
			</MapDisplay>
		</div> 
	);
};

export default Map;
