import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
export const Navbar = () => {

    const navigate = useNavigate()
 
    const blogHandler = () => {
        navigate('/createblog')
    }
    const logoutUser = () => {
        navigate('/')
    }
    return (
        <>
            <nav className="navbar" id="navbar">
                <div className="nav">
                    <h1 >The Blog</h1>
                </div>
                <div className="btn">
                    <button className="btn btn-outline-primary" type="submit" 
                        onClick={blogHandler}
                    >Create Blog</button>
                    <button className="btn btn-outline-primary" type="submit" 
                        onClick={logoutUser}
                    >Logout</button>
                    {/* <button className="btn btn-outline-primary margin-right" type="submit" style={{ marginRight: '5px', color: 'white' }} onClick={signupHandler}>Register</button> */}
                    {/* <button className="btn btn-outline-primary" type="submit" style={{ color: 'white' }} onClick={signinHandler}>Login</button> */}
                </div>
            </nav>
        </>
    )
}