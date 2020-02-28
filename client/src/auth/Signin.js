import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link, withRouter} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StepLabel } from '@material-ui/core';
import {Redirect} from 'react-router-dom'
import { makeStyles, ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';

import { useForm } from "react-hook-form";
import * as yup from "yup";

import {signin} from './api-auth.js'
import auth from './auth-helper'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="https://www.sydneybackups.com.au/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const darkTheme = createMuiTheme({
  palette: {
    // Switching the dark mode on is a single property value change.
    type: 'light',
    // backgroundColor: '#ffffff'
  },
});

const useStyles = makeStyles(theme => ({
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

const SignupSchema = yup.object().shape({
  email: yup.string().email(),  
  // email: yup.string().required(),
  password: yup.string().required()
});

export default function SignIn(props) {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema
  });

  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [ dataerror, setDataerror] = useState('');

  const onSubmit = ( data,e ) => {
    e.preventDefault();
    console.log(data);
    //alert(JSON.stringify(data));
    console.log(data["email"]);
    setDataerror('')
    const user = {
      email: data["email"] || undefined,
      password: data["password"] || undefined
    }

    signin(user).then((data) => {
      if (data.error) {
        // this.setState({error: data.error})
        setDataerror(data.error)
        console.log(data.error);
      } else {
        auth.authenticate(data, () => {
          //this.setState({redirectToReferrer: true})
          setDataerror('');
          setRedirectToReferrer(true);
        })
      }
    })
  };


  const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
  }  

  if (redirectToReferrer) {
    console.log('1');
    return (<Redirect to={from}/>)
  }else{
    console.log('2');
    return (       
      <ThemeProvider theme={darkTheme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errors.email}
              inputRef={register}
            /> 
            {errors.email && <StepLabel error="false">{errors.email.message}</StepLabel>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"     
              error={!!errors.password}
              inputRef={register}         
            />
            {errors.password && <StepLabel error="false">{errors.password.message}</StepLabel>}
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {dataerror && <StepLabel error="false">{dataerror}</StepLabel>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  back Home
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form> 
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      </ThemeProvider>       
    );
  }  
}