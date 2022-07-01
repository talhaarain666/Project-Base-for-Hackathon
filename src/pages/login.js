import { Box } from "@mui/system";
import { useState } from "react";
import TAButton from "../config/components/button";
import TAInput from "../config/components/input";
import { Link } from "react-router-dom"
import { logIn } from "../config/firebase/firebasemethods";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LogInPg() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUser = () => {

        const obj = {
            email,
            password,
        }
        if (!email) {
            alert("Enter Email")
            return;
        }
        if (!password) {
            alert("Enter Password")
            return;
        }
        setLoader(true)
        logIn(obj).then((res) => {
            alert(res)
            console.log(res)
            dispatch({
                type: "DATAFROMLOGIN",
                payload: res,
            })
            navigate("/")
            setLoader(false)
        }).catch((err) => {
            setLoader(false)
            alert(err)
        })

    }


    return <>
        <h1>LogIn</h1>
        <Box>
            <TAInput label="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </Box>
        <Box>
            <TAInput label="Enter Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </Box>
        <Box>
            New Here? <Link to="/signup">Create Account</Link>
        </Box>
        <Box>
            <TAButton label="Login" onClick={loginUser} />
        </Box>

    </>
}
export default LogInPg;