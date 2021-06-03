import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './App.css';


function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


  const classes = useStyles();




  return (
    <div className="App">

      <form className={classes.root} noValidate autoComplete="off">

        <TextField id="outlined-basic" 
        label="Páginas" 
        variant="outlined" 
        type="number"
        />
      </form>
    </div>
  );
}

export default App;
