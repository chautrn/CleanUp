import React from 'react';
import './App.css';
import Map from './pages/Map';
import BottomNav from './components/BottomNav';

function App() {
	return (
		<div className='App'>
			<Map />
			<BottomNav currentPage='Map' />
		</div>
	);
}

export default App;
