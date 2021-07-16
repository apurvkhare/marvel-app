import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 300,
    transition: 'all .2s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.07)',
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Character({name, description, imageURL, characterId}) {
  const classes = useStyles();

  const history = useHistory();

  const handleClickCharacterCard = () => history.push(`/character/${characterId}`)

  return (
    <Card className={classes.root} onClick={handleClickCharacterCard}>
      <CardHeader
        title={name}
        style={{textAlign: 'center'}}
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
    </Card>
  );
}