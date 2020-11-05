import React, { useState, useEffect } from 'react';
import Map from '../components/Map';
import Control from 'react-leaflet-control';
import { Button } from '@material-ui/core';

const Home = () => {
	const [isDark, setDark] = useState(false);
	const [geoPosition, setGeoPosition] = useState([0, 0]); // [lat, long]

	const geoSuccess = position => {
		setGeoPosition([position.coords.latitude, position.coords.longitude]);
	}

	const geoError = () => {
		console.log("internal geolocation error");
	}

	useEffect(() => {
		if(!navigator.geolocation) {
			console.log("Geolocator not enabled.");
		}
		else {
			navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
		}
	}, []);

	useEffect(() => {
		console.log(isDark);
	}, [isDark]);

	return(
		<div>
			<Map isDark={isDark} geoPosition={geoPosition}>
				<Control position="topright">
					<Button variant='contained' onClick={() => { setDark(!isDark) }}>
						Dark Mode
					</Button>
				</Control>
			</Map>
		</div>
	)
}

export default Home;
