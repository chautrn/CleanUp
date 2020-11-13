import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FavoriteBorder, ChatBubbleOutline } from '@material-ui/icons';
import { red  } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '100%',
		marginBottom: '50px',
	},
	title: {
		color: theme.palette.main
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},
	avatar: {
		backgroundColor: red[500],
	}
}));

const Post = props => {
	const classes = useStyles();

	return(
		<div style={{display: 'flex', justifyContent: 'center', textAlign: 'left'}}>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar aria-label='recipe' className={classes.avatar}>R</Avatar>
					}
					title='sample post'
					subheader='By Chau Tran'
				/>
				<CardMedia
					className={classes.media}
					image='/'
					title={
						<h1 className={classes.title}>By Chau Tran</h1>
					}
				/>
				<CardContent>
					<Typography variant='body2' color='textSecondary' component='p'>
						Lorem ipsum bullshit idk 1 cup of frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton>
						<FavoriteBorder />
					</IconButton>
					<IconButton>
						<ChatBubbleOutline />
					</IconButton>
				</CardActions>
			</Card>
		</div>
	);
};

export default Post;
