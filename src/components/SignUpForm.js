import React, { useState } from 'react'
import axios from 'axios';
import {Animated} from "react-animated-css";
import crossLogo from '../cross.png'
const SERVER_URL = "http://localhost:3000/users.json"
// const SERVER_URL = "https://vrg-backend.herokuapp.com/users.json"


function SignUpForm() {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [response, setResponse] = useState('');
const [success, setSuccess] = useState(false);
const [serverError, setServerError] = useState(false);
const [firstNameValid, setFirstNameValid] = useState(true);
const [lastNameValid, setLastNameValid] = useState(true);
const [emailValid, setEmailValid] = useState(true);


const _handleFNChange = (e) => {
    setFirstName(e.target.value);
};

const _handleLNChange = (e) => {
    setLastName(e.target.value);
};

const _handleEMChange = (e) => {
    setEmail(e.target.value);
};

const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
};

const validateName = (name) => {
    // A name cannot contain a number
// A name cannot contain a special character
// A name must be at least two letters
    if (name.length < 2) {
        return false;
    }
    return (/^[a-zA-Z]*$/).test(name);

};


const validateEmail = (email) => {
//     An email address must contain exactly one @
// An email address must contain at least one full stop (.)
    const atSigns = email.split('').filter(char => char === '@').length;
    const periods = email.split('').filter(char => char === '.').length;
    return (atSigns === 1 && periods >= 1);
}


const _handleSubmit = (event) => {
    event.preventDefault();
  
    const user = {
        firstname: firstName,
        lastname: lastName,
        email: email
    }
    setFirstNameValid(validateName(user.firstname));
    setLastNameValid(validateName(user.lastname));
    setEmailValid(validateEmail(user.email));
    
    axios.post(SERVER_URL, { user })
    .then((response) => {
        if (response.data) {
            setSuccess(true);
            setResponse(response.data);
        }
     })

     .then(() => {
        if (emailValid && firstNameValid && lastNameValid)
        clearForm()
     })
     
     .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          setServerError(true);

          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
          setServerError(true);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          setServerError(true);
        }
    
      });
    } 

return (
    <div className="signupformContainer">
        <h2 className="form-header">Join the guild!</h2>
        <h3 className="form-subheader">Receive loot, the latest news & early access to the upcoming games.</h3>
        <div>
            <form onSubmit={ _handleSubmit }>
                <label className="form-group">
                    First name*
                    <div className="parent">
                  {/* {emailValid && }<Animated animationIn="shake" animationOut="shake">  */}
                    <input className="form-control" type="text" required placeholder="So we can personalise your loot!" onChange={ _handleFNChange } value={ firstName }  />
                    <img class={firstNameValid ? 'hide' : 'cross'} src={crossLogo}/>
                    {/* </Animated> */}
                    </div>
                
                </label>
                <label className="form-group">
               
                    Last name*
                    {/* <div className="icon-input"> */}
                    <div className="parent">
                        <input className="form-control" type="text" required placeholder="Last name" onChange={ _handleLNChange } value={ lastName}/>
                        <img class={lastNameValid ? 'hide' : 'cross'} id="lastNameCross" src={crossLogo}/>
                </div>
                      
                    {/* </div> */}
                </label>
                <label className="form-group">
                    Email address*
                    <div className="parent">
                    <input className="form-control" type="email" required placeholder="Don't worry we won't spam you" onChange={ _handleEMChange } value={ email }/>
                    <img class={emailValid ? 'hide' : 'cross'} id="emailCross" src={crossLogo}/>
                    </div>
                </label>
                <button className="btn btn-block">Let's go!</button>
            </form>
            <p className="errors">{(!firstNameValid || !lastNameValid || !emailValid) && `Oops, something doesn't look right!`}</p>
            <p className="errors">{serverError && `Sorry, we encountered a hiccup with our server!`}</p>
            
        </div>
        
    </div>
  )
}

export default SignUpForm