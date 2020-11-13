import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Map from './pages/Map';
import Home from './pages/Home';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<TopNav />
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
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
