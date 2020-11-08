
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar , Toolbar,IconButton,Typography,Grid,Card,CardActions,CardContent,ButtonGroup,Drawer,List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import  MenuIcon  from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  }
  ,
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardtitle: {
    fontSize: 14,
  },
  cardpos: {
    marginBottom: 12,
  },
}));

function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" classname={classes.menuButton}  color="inherit" aria-label="menu">
      <MenuIcon   />
      
    </IconButton>
    <Typography variant="h6" className={classes.title} >
      We Stand Together
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>

  
<Grid container justify="center" spacing={4}>
          {[1, 2,3,4,5,6,7,8,9].map((value) => (
            <Grid key={value} item>
              <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.cardtitle} color="textSecondary" gutterBottom>
        We have requirement for 
        </Typography>
        <Typography variant="h5" component="h2">
         {bull}  requiredItem {value}
        </Typography>
        <Typography className={classes.cardpos} color="textSecondary">
          need donations
        </Typography>
        <Typography variant="body2" component="p">
         for  NGO {value}
        </Typography>
      </CardContent>
      <CardActions>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button>Details</Button>
  <Button>Donate</Button>
</ButtonGroup>
      </CardActions>
    </Card>
            </Grid>
          ))}
        </Grid>

    </div>
  );
}

export default App;
