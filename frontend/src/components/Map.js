import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Map as MapContainer, TileLayer } from 'react-leaflet';
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
			<MapContainer style={{height: '100vh', width: '100vw'}}center={[51, -20]} zoom={6}>
				<TileLayer 
					url={mapTheme.url}
					attribution={mapTheme.attribution}
				/>
				{props.children}
			</MapContainer>
		</div> 
	);
};

export default Map;
