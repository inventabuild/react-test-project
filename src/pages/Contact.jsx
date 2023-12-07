
import { useNavigate } from "react-router-dom";

function Contact(){
    let nav = useNavigate()
    return(
        <div>
            <h1>Contact Page</h1>
            <button onClick={()=> nav("/")}>Back to Home</button>
        </div>
    )
}

export default Contact;