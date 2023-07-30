import "bootstrap/dist/css/bootstrap.min.css";
import './Register.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registervalidate from "./RegisterValidation";
// import registervalidate from "./RegisterValidation";
import axios from 'axios';


export const Register = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({ username: '', email: "", password: "" })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value)
        setData((prev) => ({ ...data, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data)
        // setData({ username: "", email: "", password: "" })
        setErrors(registervalidate(data))
        if (errors.username === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:4848/register', data)
                .then(res => {
                    console.log(res)
                    navigate('/')
                })
                .catch(err => console.log(err))
        }
    }
    const gotologin = () => {
        navigate('/')
    }
    return (
        <>
            <div className="form-container">
                <form action="" onSubmit={handleSubmit} id="form">
                    <div>
                        <h1>Register Form</h1>
                    </div>
                    <div className="user">
                        <label htmlFor="name">Username:</label>
                        <input type="text" id="username" name="username" value={data.username} onChange={handleChange} />
                        <div>{errors.username && <span>{errors.username}</span>}</div>

                    </div>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={data.email} onChange={handleChange} />
                        <div>{errors.email && <span>{errors.email}</span>}</div>

                    </div>
                    <div className="pass">
                        <label htmlFor="name">Password:</label>
                        <input type="password" id="password" name="password" value={data.password} onChange={handleChange} />
                        <div>{errors.password && <span>{errors.password}</span>}</div>

                    </div>
                    <div className="sub">
                    <button className="btnn1" type="submit">Register</button>
                    <button className="btnn2" type="submit" onClick={gotologin}>Login</button>
                    </div>
                </form>
            </div>
        </>)
}