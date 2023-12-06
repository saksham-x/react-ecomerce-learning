import React from 'react'
import CompA from './CompA'
import GlobalContextProvider from './Global'
const Show = () => {
    return (
        <>
            <GlobalContextProvider>

                
                <CompA />
            </GlobalContextProvider>


        </>
    )
}

export default Show
