import React,{useContext} from "react"
import Context from "../../contexts/countersContext";

const Button = () => {
    const {good, increaseGood} = useContext(Context)
    return <li> Good : {good} <button onClick={increaseGood}> increase good </button></li>

}



export default Button