import React,{useContext} from "react"
import Context from "../../contexts/countersContext";


const Button = () => {
    const {ok, increaseOk} = useContext(Context)
    return <li> ok : {ok} <button onClick={increaseOk}> increase ok </button></li>
}



export default Button