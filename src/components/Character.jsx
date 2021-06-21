import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Character({name, description, imageURL}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={name}
        subheader="Tony Stark"
      />
      <CardMedia
        className={classes.media}
        image={imageURL}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid obcaecati, autem necessitatibus modi quasi quo mollitia quas suscipit labore possimus neque nesciunt omnis voluptatem nisi dignissimos, libero fuga odio."}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}