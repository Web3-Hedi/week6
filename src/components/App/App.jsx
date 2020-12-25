import React from 'react'
import GoodButton from 'components/Button/GoodButton'
import BadButton from 'components/Button/BadButton'
import OkButton from 'components/Button/OkButton'
import ResetButton from 'components/Button/ResetButton'

const App = () => {
    return (
        <div>
            <ul>
                   <GoodButton/>
                   <OkButton/>
                   <BadButton/>
            </ul>
            <ResetButton/>
        </div>
    )
}

export default App