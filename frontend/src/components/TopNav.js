import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	bar: {
		backgroundColor: 'white',
	}
}));

const HideOnScroll = (props) => {
	const trigger = useScrollTrigger();

	return(
		<Slide direction='down' in={!trigger}>
			{props.children}
		</Slide>
	);
};

const TopNav = () => {
	const classes = useStyles();

	return(
		<HideOnScroll>
			<AppBar>
				<Toolbar className={classes.bar}>
					<Typography>
					</Typography>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	)
}

export default TopNav;
