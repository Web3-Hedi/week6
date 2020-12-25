import React,{useContext} from "react"
import Context from "../../contexts/countersContext";


const Button = () => {
    const {bad, increaseBad} = useContext(Context)
    return <li> Bad : {bad} <button onClick={increaseBad}> increase bad </button></li>
}



export default Button