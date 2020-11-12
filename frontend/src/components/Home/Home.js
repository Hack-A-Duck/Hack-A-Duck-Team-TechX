import React,{Fragment,useEffect,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import  {Link} from  'react-router-dom';
import {Auth ,db} from '../firebase/firebase';





function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      we are together by Tech X  @ hack a Duck 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    position: 'fixed',
    bottom:'10%',
    right:'5%',
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home(props) {
  const [donations,setDoantions] = useState([]);
  const classes = useStyles();
  
  useEffect(()=>{
    const donRef  = db.collection('donations');
    donRef.get().then(
      (snap)=>{
        const data = snap.docs.map(doc => doc.data());
        setDoantions(data)
        console.log("change")
      }
    )
  },[])
  const user = Auth.currentUser;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" classname={classes.menuButton}  color="inherit" aria-label="menu">
      <MenuIcon   />
      
    </IconButton>
    <Typography variant="h6" className={classes.title} >
      We Stand Together
    </Typography>
    {
      user?<Link to="/login" style={{textDecoration:'none'}}>
      <Button variant="contained" disableElevation onClick={()=>{Auth.signOut()}}>Logout</Button>
      </Link>:<Link to="/login" style={{textDecoration:'none'}}>
    <Button variant="contained" disableElevation>Login</Button>
    </Link>
    }
  </Toolbar>
</AppBar>
      <main>
      
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              We Stand Together
            </Typography>
            {user?<Typography variant="h5" align="center" color="textSecondary" paragraph>
              Small actions from a lot of people make big changes
            </Typography>:
            <Fragment>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Get Donations for your NGO , organization or for anyone who is in need , Sign up - Add a donation add details upload documents get noticed by hundreds of people
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                 <Link to="/login" style={{textDecoration:'none'}}>
                 <Button variant="contained" color="primary">
                    Get Donation
                  </Button>
                 </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" style={{textDecoration:'none'}}>
                  <Button variant="outlined" color="primary">
                    Sign up
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
            </Fragment> }
            {
              user?
              <Link to="/add">
              <Fab color="secondary" variant="extended" className={classes.fab}>
              <AddIcon className={classes.extendedIcon} />
              Add new
            </Fab>
            </Link>:<React.Fragment></React.Fragment>
            }
          </Container>
          
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {donations.map((donation) => (
              <Grid item key={donation.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                    title="Make a Change"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {donation.title}
                    </Typography>
                    <Typography>
                      {donation.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Donate
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

