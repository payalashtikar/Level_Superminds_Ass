import { useState } from "react"
import './Register.css'
import { useNavigate } from "react-router-dom"
import validation from './LoginValidation'
import axios from "axios"

export const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "", password: '',
    })
    const [errors, setErrors] = useState({})
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prevdata) => ({ ...prevdata, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data)
        // setData({email:"",password:""})

        setErrors(validation(data))
        if(errors.email==="" && errors.password===""){
            axios.post('http://localhost:4848/login',data)
                .then(res=>{
                    console.log(":",res)
                    console.log("res status:",res.status)
                    // if(res.data === "success"){
                        // if(res.status==="200"){
                        navigate('/home')
                    // }
                    // else{
                        // alert("Invalid Credentials")
                    // }
                })
                .catch(err=>console.log(err))
        }
    }

    const gotosignup = () => {
        navigate('/register')
    }
    return (
        <>
            <div className="form-container">
                <form action="" onSubmit={handleSubmit} id="form">
                    <div>
                        <h1>Login Form</h1>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={data.email} onChange={handleInputs} />
                        <div>{errors.email && <span>{errors.email}</span>}</div>
                    </div>
                    <div className="pass">
                        <label htmlFor="name">Password:</label>
                        <input type="password" id="password" name="password" value={data.password} onChange={handleInputs} />
                        <div>{errors.password && <span>{errors.password}</span>}</div>

                    </div>
                    <div className="sub">
                    <button className="btnn1" type="submit">Login</button>
                    {/* <p>agree terms and policy</p> */}
                    <button className="btnn2" type="submit" onClick={gotosignup}>Create Account</button>
                    </div>
                </form>
            </div>

        </>
    )
}