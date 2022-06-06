import { useState } from 'react'
import axios from "axios"
import "./Register.css"

const Login = () => {

    const [data, setData] = useState({
        email: "", username: "", password: "", repassword: ""
    })

    const handleInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://bbu-login-register.herokuapp.com/register"
        if (data.email !== ""  && data.username !== "" && data.password !== "" && data.repassword !== "") {
            if (data.password === data.repassword) {
                axios.post(url, {
                    email: data.email,
                    username: data.username,
                    password: data.password
                }).then(result => {
                    alert(result.data.status)
                })
                setData({ email: "", username: "", password: "", repassword: "" })
            }else{
                alert("Password not match")
            }
        }else{
            alert("Fields cannot be blank")
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form">
                <h3>Register</h3>
                <input type="text" placeholder="Email" value={data.email} name="email" id="email" className="input" onChange={e => handleInput(e)} />
                <input type="text" placeholder="Username" value={data.username} name="username" id="username" className="input" onChange={e => handleInput(e)} />
                <input type="password" placeholder="Password" value={data.password} name="password" id="password" className="input" onChange={e => handleInput(e)} />
                <input type="password" placeholder="Repeat password" value={data.repassword} name="repassword" id="repassword" className="input" onChange={e => handleInput(e)} />
                <input type="submit" value="Register" className="register" />
            </div>
        </form>
    );
}

export default Login;