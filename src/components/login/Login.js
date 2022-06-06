import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import "./Login.css"

const Login = () => {
    const navigate = useNavigate()
    const[data,setData] = useState({})

    const handleInput = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setData({...data,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const url = "https://bbu-login-register.herokuapp.com/login"
        axios.post(url,{
            username:data.username,
            password:data.password
        }).then(result=>{
            alert(result.data.status)
            if(result.data.status == "Logged in"){
                navigate("/register")
            }
        })
        setData({email:"",username:"",password:""})
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form">
                <h3>Login</h3>
                <input type="text" placeholder="Username"  value={data.username}  name="username" id="username" className="input" onChange={e => handleInput(e)} />
                <input type="text" placeholder="Password"  value={data.password}  name="password" id="password" className="input" onChange={e => handleInput(e)}/>
                <input type="submit" value="Login" className="login" />
            </div>
        </form>
    );
}

export default Login;