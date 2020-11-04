import React, { useState, useEffect } from 'react';
import Map from '../components/Map';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Home = () => {
	const [isDark, setDark] = useState(false);

	useEffect(() => {
		console.log(isDark);
	}, [isDark]);

	return(
		<div>
			<Map isDark={isDark}>
				<Button variant='contained' onClick={() => { setDark(!isDark) }} style={{zIndex: 1001}}>
					Dark Mode
				</Button>
			</Map>
		</div>
	)
}

export default Home;
