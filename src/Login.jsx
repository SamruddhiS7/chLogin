import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const[values, setValues] = useState({
    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')
    email: '',
    password: ''
})
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/')
            } else {
                alert(res.data.Message)
            }
        })
        .catch(err => console.log(err));

    return(
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
            <div className='p-3 bg-white w-25'>
                <h2>Sign-In</h2>
                <form onSubmitmit= {handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" Placeholder="Enter Email" autocomplete='off' className="form-control"
                        onChange={e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" Placeholder="Enter Password" name = "password" className="form-control"
                        onChange={e => setValues({...values, password: e.target.value})} />
                    </div>
                    <button className="btn btn-success">Login</button>
                </form>

            </div>

        </div>
    )
    
};
/*
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost/phpmyadmin/login',{email, password})
        //.then(res => console.log(res))
        //.catch(err => console.log(err));
    }
*/    

}
