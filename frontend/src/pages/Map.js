import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { Map as MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import Control from 'react-leaflet-control';
import 'leaflet/dist/leaflet.css';
import { lightTheme, darkTheme } from '../data/mapTiles';
import { Button } from '@material-ui/core';

const Map = () => {
	const [isDark, setDark] = useState(false);
	const [geoPosition, setGeoPosition] = useState([0, 0])

	const geoSuccess = position => {
		setGeoPosition([position.coords.latitude, position.coords.longitude]);
	}

	const geoError = () => {
		console.log('internal geolocation error');
	}

	useEffect(() => {
		if(!navigator.geolocation) {
			console.log('Geolocator not enabled.');
		}
		else {
			navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
		}
	}, []);

	return(
		<div id='wrapper'>
			<MapContainer 
				style={{height: '100vh', width: '100vw'}} 
				center={geoPosition} 
				zoomControl={false} 
				zoom={10}
				minZoom={4}
				maxBounds={[L.latLng(90, -Infinity), L.latLng(-80, Infinity)]}
				maxBoundsViscosity={1.0}>
				<TileLayer
					url={isDark ? darkTheme.url : lightTheme.url}
				/>
				<ZoomControl position='topleft' />
				<Control position='topright'>
					<Button variant='contained' onClick={() => setDark(!isDark)}>
						Dark Mode
					</Button>
				</Control>
			</MapContainer>
		</div> 
	);
};

export default Map;
