import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { ArtTrack, Map, Assignment, Pets, AccountBox } from '@material-ui/icons';

const style = {
	position: 'fixed',
	zIndex: '9999',
	bottom: 0,
	width: '100vw'
}

const BottomNav = props => {
	return(
		<BottomNavigation style={style} onChange={props.navHandler}>
			<BottomNavigationAction label='Feed' value='feed' icon={<ArtTrack />} />
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
