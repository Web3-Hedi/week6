import React, {useState, useEffect} from 'react'
import App from 'components/App/App'
import  {ProviderWrapper as CounterProviderWrapper} from "../../contexts/countersContext";

const AppContainer = () => {

    return (
        <CounterProviderWrapper>
            <App/>
        </CounterProviderWrapper>
    )
}

export default AppContainer