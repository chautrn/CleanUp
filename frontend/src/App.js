import React from 'react';
import './App.css';
import Map from './pages/Map';
import Home from './pages/Home';
import BottomNav from './components/BottomNav';

function App() {
	return (
		<div className='App'>
			<Home />
			<BottomNav currentPage='Map' />
		</div>
	);
}

export default App;
