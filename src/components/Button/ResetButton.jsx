import React,{useContext} from "react"
import Context from "../../contexts/countersContext";


const Button = () => {
    const {resetAll} = useContext(Context)
    return <button onClick={resetAll}> Reset scores </button>
}

export default Button