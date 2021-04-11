
import React ,{useState} from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));




  const Login = () => {
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [email,setEmail] =useState('')
    const classes = useStyles();
    // const [register,setRegister] = useState(false)

    
    
      const handleSubmit = event => {
        event.preventDefault()
        alert('submitted')
        
        console.log('this was submitted')
    
    }

    return (
        <Container className={classes.comtainer} maxWidth='xs'>
        {/* <h2>{input} </h2> */}
        <form>
          <Grid container spacing = {3}>
        <Grid item xs ={12}>
          <Grid container spacing ={2}>
          <Grid item xs ={12}>
        <TextField 
                   variant = 'outlined'
                   fullWidth
                   name ='firstname'
                   label= 'First Name' 
                   type ='text' 
                   value={firstname} 
                   onChange={(event)=> setFirstName(event.target.value)}/>
        </Grid>
        <Grid item xs = {12}>
        <TextField 
                   variant ='outlined'
                   fullWidth
                   label ='Last Name'
                   name ='lastname'
                   type ='text'
                   value ={lastname} 
                   onChange={(event)=> setLastName(event.target.value)}/>
        </Grid> 
        <Grid item xs={12}>
        <TextField 
                   variant = 'outlined'
                   fullWidth
                   name ='email'
                   type='text' 
                   label ='Email'
                   value ={email} 
                   onChange={(event)=> setEmail(event.target.value)} />
        </Grid>
        </Grid>
        </Grid>
       <Grid item xs ={12}>
        <Button 
                color='primary' 
                fullWidth type='submit'
                variant='contained' 
                onClick={handleSubmit} > Register
        </Button>
        </Grid>
        </Grid>
        </form>
        </Container>
    )
}

export default Login


// need 3 inputs first last name and email. a form -DONE
// submit button with handlesubmit when button is clicked
// handleInput for the 3 inputs apply logic for condition IF text is placed in all 3 inputs 
// RETURN a div that says "YOU ARE REGISTERED."
// use only css styling 

// for the future
    // add firebase authentication 
        // browser router or route to another page. a dashboard. 

