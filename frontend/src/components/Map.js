import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import L from 'leaflet';
import { Map as MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapTiles from './mapTiles';

const Map = (props, ref) => {
	const [mapTheme, setMapTheme] = useState(mapTiles.lightTheme)
	useEffect(() => {
		if (props.isDark) {
			setMapTheme(mapTiles.darkTheme);
		}
		else {
			setMapTheme(mapTiles.lightTheme);
		}
	}, [props.isDark]);

	return(
		<div id='wrapper'>
			<MapContainer 
				style={{height: '100vh', width: '100vw'}} 
				center={[37, -95]} 
				zoomControl={false} 
				zoom={4}
				minZoom={4}
				maxBounds={[L.latLng(90, -Infinity), L.latLng(-80, Infinity)]}
				maxBoundsViscosity={1.0}>
				<TileLayer
					url={mapTheme.url}
					attribution={mapTheme.attribution}
				/>
				<ZoomControl position="bottomright" />
				{props.children}
			</MapContainer>
		</div> 
	);
};

export default Map;
