import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { ArtTrack, Map, Assignment, Pets, AccountBox } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const style = {
	position: 'fixed',
	zIndex: '9999',
	bottom: 0,
	width: '100vw',
	boxShadow: '0px 5px 11px 2px #a8a8a8'
}

const BottomNav = props => {
	const history = useHistory();

	const goToRoute = (event, newValue) => {
		history.push(`/${newValue}`);
	}

	return(
		<BottomNavigation style={style} onChange={goToRoute}>
			<BottomNavigationAction label='Feed' value='' icon={<ArtTrack />} />
			<BottomNavigationAction label='Map' value='map' icon={<Map />} />
			{props.currentPage == 'Map' &&
			<BottomNavigationAction label='Add Event' value='eventAdd' icon={<Assignment />} />
			}
			<BottomNavigationAction label='Pet' value='pet' icon={<Pets />} />
			<BottomNavigationAction label='Profile' value='profile' icon={<AccountBox />} />
		</BottomNavigation>
);
}

export default BottomNav;
