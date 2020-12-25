import React, {useState, useEffect} from 'react'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [good, setGood] = useState(JSON.parse(localStorage.getItem("good")))
    const [ok, setOk] = useState(JSON.parse(localStorage.getItem("ok")))
    const [bad, setBad] = useState(JSON.parse(localStorage.getItem("bad")))
    const resetAll = () => {
        setOk(0)
        setBad(0)
        setGood(0)
    }
    const increaseGood = () => {
        setGood(good+1)
    }
    const increaseBad = () => {
        setBad(bad+1)
    }
    const increaseOk = () => {
        setOk(ok+1)
    }
    useEffect(() => {
        localStorage.setItem("good",JSON.stringify(good))
        localStorage.setItem("bad",JSON.stringify(bad))
        localStorage.setItem("ok",JSON.stringify(ok))
    },[good,bad,ok])

    const exposedValue = {
        good,
        bad,
        ok,
        resetAll,
        increaseGood,
        increaseBad,
        increaseOk,
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>

}


export {
    Context,
    ProviderWrapper,
}

export default Context