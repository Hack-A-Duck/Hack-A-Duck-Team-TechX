
    import React ,{useState}from 'react';
    import Avatar from '@material-ui/core/Avatar';
    import Button from '@material-ui/core/Button';
    import CssBaseline from '@material-ui/core/CssBaseline';
    import TextField from '@material-ui/core/TextField';
    import FormControlLabel from '@material-ui/core/FormControlLabel';
    import Checkbox from '@material-ui/core/Checkbox';
    import {Link,useHistory} from 'react-router-dom';
    import Grid from '@material-ui/core/Grid';
    import Box from '@material-ui/core/Box';
    import Favorite from '@material-ui/icons/Favorite';
    import Typography from '@material-ui/core/Typography';
    import { makeStyles } from '@material-ui/core/styles';
    import Container from '@material-ui/core/Container';
    import {Auth,db} from '../firebase/firebase'

    
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
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    
    export default function Add() {
      const classes = useStyles();
      const user = Auth.currentUser;
      const [details , setDetails] = useState({title:'',description:'',verified:false});
      const hist = useHistory();

      const addDonation = () =>{    
        const data  = {
            ...details,
            uid:user.uid
        }
        console.log(data)
        db.collection('donations').add(data).then((x)=>{
            console.log("done",x.id);
            hist.push('/')
        }).catch((err)=>{alert(err)})


      }
      const handleChange = (e) =>{
        let namev  = e.target.name;
        let val = e.target.value;
        e.preventDefault();
        setDetails({...details,[namev]:val});
    }
    const handleSubmit = (e) => {
  
        e.preventDefault();
        addDonation(details);
  
    }
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Favorite />
            </Avatar>
            <Typography component="h1" variant="h5">
              Request a Donation
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Add title for your donation"
                name="title"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="description"
                label="description"
                type="test"
                id="description"
                onChange={handleChange}

              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Request
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/">
                   <Button color="primary" variant="contained">
                   Go back
                   </Button>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
    }