import React from 'react'
import userContext from '../Context/App.js'
const ContextB = ()=> {
  return (
    <div><center>
    <userContext.Consumer>
    {value => <div>{value}</div>}
    Context B
    </userContext.Consumer>
    </center></div>
  )
}

export default ContextB


