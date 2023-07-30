import DisplayBlog from "../DisplayBlog"
import { Navbar } from "./Navbar"

export const Home=()=>{
    return(
        <>
            <div className="homepage">
                <Navbar/>
                <DisplayBlog/>
            </div>
        </>
    )
}