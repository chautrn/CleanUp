import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Map from './pages/Map';
import Home from './pages/Home';
import BottomNav from './components/BottomNav';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/map'>
						<Map />
					</Route>
					<Route exact path='/pet'>
					</Route>
					<Route exact path='/profile'>
					</Route>
				</Switch>
				<BottomNav currentPage='Map' />
			</BrowserRouter>
		</div>
	);
}

export default App;
