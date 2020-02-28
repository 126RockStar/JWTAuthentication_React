import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PassPortTable from './PassPortTable'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingRight: 300,
    paddingLeft: 300,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    backgroundImage:'linear-gradient(to right, #00AEEF , #253F8E)',
    margin:0,
    color: 'white',
    height:40
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className="d-flex flex-row justify-content-center align-items-center">
            <h1>image</h1>
            <h1>UNITED STATES PASSPORT FEES</h1>
        </div> 
        <div className="d-flex flex-row justify-content-center align-items-center">
            <p>Payment Instructions: *The application fee is paid directly to the Department of State. **The Execution/Acceptance fee is
    paid directly to the acceptance facility. Two separate payments are required. (Effective 1/28/2019)</p>
        </div>
        
        <div className="table">
        <p className={classes.title}>ADULT APPLICANTS (16 Years and Older) Please see Apply in Person.</p>
            <PassPortTable />
        </div>
        <div className="table">
        <p className={classes.title}>ADULT APPLICANTS (16 Years and Older) Please see Apply in Person.</p>
            <PassPortTable />
        </div>
        <div className="table">
        <p className={classes.title}>ADULT APPLICANTS (16 Years and Older) Please see Apply in Person.</p>
            <PassPortTable />
        </div>
        <div className="table">
        <p className={classes.title}>ADULT APPLICANTS (16 Years and Older) Please see Apply in Person.</p>
            <PassPortTable />
        </div>
        <div className="table">
        <p style={{backgroundImage:'linear-gradient(to right, #EE1D23 , #6F1C25)',
    margin:0, color: 'white'}}>ADULT APPLICANTS (16 Years and Older) Please see Apply in Person.</p>
            <PassPortTable />
        </div>
    </div>
  );
}