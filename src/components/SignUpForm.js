import React, { useState } from 'react'

function SignUpForm() {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');

const _handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit')
} 
return (
    <div className="form">
        <form onSubmit={ _handleSubmit }>
            <label className="form-group">
                Email:
                <input className="form-control" type="email" required placeholder="Email" />
            </label>
            <label className="form-group">
                First Name:
                <input className="form-control" type="text" required placeholder="First Name" />
            </label>
            <label className="form-group">
                Last Name:
                <input className="form-control" type="text" required placeholder="Last Name" />
            </label>
            <button className="btn btn-block">Sign Up!</button>
        </form>
    </div>
  )
}

export default SignUpForm