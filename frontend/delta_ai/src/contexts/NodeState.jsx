import React, { useState } from 'react'
import NodeContext from './NodeContext'

export default function NodeState(props) {



  // Active class
  const [auth, setAuth] = useState(false)
  const [username, setusername] = useState("Jhon Doe")

    return (
        <NodeContext.Provider value={
            {
              auth,setAuth,username,setusername

            }
          }>
            {props.children}
        </NodeContext.Provider>
  )
}
