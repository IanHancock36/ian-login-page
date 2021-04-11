
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
        <div class='container'>
        {/* <h2>{input} </h2> */}
        <form>
        <div class='login-inputs'>
        <input name ='firstname' type ='text' placeholder='FirstName'value={firstname} onChange={(event)=> setFirstName(event.target.value)}/>
        <input name ='lastname' type ='text' placeholder='LastName' value ={lastname} onChange={(event)=> setLastName(event.target.value)}/>
        <input  name ='email' type='text' placeholder='Email Address' value ={email} onChange={(event)=> setEmail(event.target.value)} />
        </div>
        <div class ='button'>
        <button type='submit' onClick={handleSubmit} >Register</button>
        </div>
        </form>
        <h1> whoa </h1>
        </div>
        
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

