import React, {useContext} from 'react'
import { GlobalContext } from './Global' 
const CompD = () => {
    const data=useContext(GlobalContext)
  return (
<>
<h2>student names is {data.fName} {data.lName}, {data.address}</h2>
</>
  )
}

export default CompD
