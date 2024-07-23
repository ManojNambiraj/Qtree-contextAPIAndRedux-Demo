import React, { useContext } from 'react'
import Component4 from './Component4'
import { UserContext } from './Context'

function Component3(props) {
  const value = useContext(UserContext);
  return (
    <div>
      <h2>It's my Component 3 {value}</h2>

      <Component4 />
    </div>
  )
}

export default Component3
