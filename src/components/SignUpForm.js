import React, { useState } from 'react'
import axios from 'axios';
// const SERVER_URL = "http://localhost:3000/users.json"
const SERVER_URL = "https://vrg-backend.herokuapp.com/users.json"

function SignUpForm() {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [response, setResponse] = useState('');

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
}

const _handleSubmit = (event) => {
    event.preventDefault();
    const user = {
        firstname: firstName,
        lastname: lastName,
        email: email
    }
    axios.post(SERVER_URL, { user })
    .then((response) => {
        setResponse(response.data);
     })
     .then(clearForm());
    
    // console.log({'user': {
    //     firstName: firstName//     lastName: lastName,
    //     email: email
    // }})
} 
return (
    <div className="signupformContainer">
        <h2 className="form-header">Join the guild!</h2>
        <h3 className="form-subheader">Receive loot, the latest news & early-access
        to the upcoming games.</h3>
        <div>
            <form onSubmit={ _handleSubmit }>
                <label className="form-group">
                    First name*
                    <input className="form-control" type="text" required placeholder="So we can personalise your loot!" onChange={ _handleFNChange } value={ firstName }  />
                </label>
                <label className="form-group">
                    Last name*
                    <input className="form-control" type="text" required placeholder="Last name" onChange={ _handleLNChange } value={ lastName}/>
                </label>
                <label className="form-group">
                    Email address*
                    <input className="form-control" type="email" required placeholder="Don't worry we won't spam you" onChange={ _handleEMChange } value={ email }/>
                </label>
                <button className="btn btn-block">Let's go!</button>
            </form>
            <p className="errors">Oops, something doesn't look right!</p>
        </div>
    </div>
  )
}

export default SignUpForm