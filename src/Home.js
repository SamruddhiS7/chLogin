import React, {useState, location} from 'react'
import {useEffect}  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//import { location } from 'react'




function Home() {
    const [auth, setAuth] =useState(false)
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3000')    
        .then(res => {
            if (res.data.Status === "Success") {
                setAuth(true);
                setName(res.data.name);
            } else {
                setAuth(false);
                setMessage(res.data.Message);
            }
        })
    
    }, [])

    const handleLogout = () => {
        axios.get('http://localhost:3000/logout')
        .then(res => {
            if(res.data.Status === "Success") {
            location.reload(true);
            } else {
                alert('error');
            }
        }).catch(err => console.log(err))
    }
    return (
        <div className='container mt-4'>
            
            auth ?
            <div>
                <h3>You are Authorized {name}</h3>
                <button className = 'btn btn-danger' onClick={ handleLogout}>Logout</button>
            </div> 
            :
            <div>
            <h3>{message}</h3>
            <h3>Login Now</h3>
            <Link to= "/login" className='btn btn-primary'>Login</Link>           
            </div>        
        
        
        
        </div>
        

        

    )
}

export default Home
