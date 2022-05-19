import React, { useState } from 'react'
import axios from 'axios';
const SERVER_URL = "http://localhost:3000/users.json"

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
     .then(console.log(response))
    
    // console.log({'user': {
    //     firstName: firstName//     lastName: lastName,
    //     email: email
    // }})
} 
return (
    <div className="form">
        <form onSubmit={ _handleSubmit }>
            <label className="form-group">
                Email:
                <input className="form-control" type="email" required placeholder="Email" onChange={ _handleEMChange }/>
            </label>
            <label className="form-group">
                First Name:
                <input className="form-control" type="text" required placeholder="First Name" onChange={ _handleFNChange }  />
            </label>
            <label className="form-group">
                Last Name:
                <input className="form-control" type="text" required placeholder="Last Name" onChange={ _handleLNChange }/>
            </label>
            <button className="btn btn-block">Sign Up!</button>
        </form>
    </div>
  )
}

export default SignUpForm