import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomePg() {

    const dataFromRedux = useSelector((a)=>a.user)
const navigate = useNavigate();

useEffect(()=>{
    if(dataFromRedux){

    }else{
        navigate("login")
    }
},[])

    return <>
        <h1>Home</h1>
    </>
}
export default HomePg;