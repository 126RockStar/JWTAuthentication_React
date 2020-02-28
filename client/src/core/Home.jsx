import React, {useState} from 'react';
import auth from './../auth/auth-helper'
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom'
import { makeStyles, ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';


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

export default function Home({history}){
    
    const classes = useStyles();

    if(auth.isAuthenticated()){
        return(
            <div className={classes.paper}>
                <h1>JWT Authentication</h1>
                <h3>React JS | Express JS | MongoDB</h3>
                <br/>
                <br/>
                <h1>Hello!</h1>
                <br/>
                <br/>

                <Button color="secondary" variant="contained" onClick={() => {
                    auth.signout(() => history.push('/signin'))
                }}>Sign out</Button>
                
            </div>

            )
    }else{
        return(
            <div className={classes.paper}>
                <h1>JWT Authentication</h1>
                <h3>React JS | Express JS | MongoDB</h3>
                <br/>
                <br/>
                <Link to="/signin">
                    <Button color="primary" variant="contained">Sign In
                    </Button>
                </Link>                       
                <br/>
                <br/>
                <Link to="/signup">
                    <Button color="secondary" variant="contained">Sign up
                    </Button>
                </Link> 
                <br/>
                <br/>
                
            </div>
            )
    }
    
}