import React, {createContext} from 'react'
export const GlobalContext= createContext()

const GlobalContextProvider= (props)=>{
    const student ={
        fName: 'Saksham',
        lName: 'Pokharel',
        address: 'Kathmandu'
    }
    return(
<GlobalContext.Provider value={student}>
    {props.children}
</GlobalContext.Provider>
    )
}

export default GlobalContextProvider
