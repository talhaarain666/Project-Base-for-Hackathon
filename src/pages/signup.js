import { Box } from "@mui/system";
import { useState } from "react";
import TAButton from "../config/components/button";
import TAInput from "../config/components/input";
import { Link } from "react-router-dom"
import { SignUp } from "../config/firebase/firebasemethods";

function SignUpPg() {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)

    const signUpUser = () => {
        const obj = {
            userName,
            email,
            password,
        }
        if(!email){
            alert("Enter Email")
            return;
        }
        if(!password){
            alert("Enter Password")
            return;
        }
        setLoader(true)
        SignUp(obj).then((res)=>{
            setLoader(false)
            alert(res)
        }).catch((err)=>{
            setLoader(false)
            alert(err)
        })
        console.log(obj)

    }


    return <>
        <h1>signUp</h1>
        <Box>
            <TAInput label="Enter Name" onChange={(e) => setUserName(e.target.value)} />
        </Box>
        <Box>
            <TAInput label="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </Box>
        <Box>
            <TAInput label="Enter Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </Box>
        <Box>
            already have an account? <Link to="/login">Login</Link>
        </Box>
        <Box>
            <TAButton loading={loader} label="signUp" onClick={signUpUser} />
        </Box>

    </>
}
export default SignUpPg;