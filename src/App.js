import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './App.css';


function App() {

  const [pag, setPag] = useState("")

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(30),
        width: '25ch',
      },
    },
  }))
  const classes = useStyles()

  

  const produtos = {

  }


  return (
    <div className="App">

      <div className={classes.root} noValidate autoComplete="off">

        <TextField 
        id="outlined-basic" 
        label="Páginas" 
        variant="outlined" 
        type="number"
        inputRef={input => input && input.focus()}
        value={pag}
        onChange={i => {setPag(i.target.value)}
      }
        />
      </div>

      
    </div>
  )
}

export default App;
