import { useContext, useState } from "react"
import CounterContainer from "./CounterContainer"

import {CounterContext} from "./context/counterContext"

const ContextosHome = () => {

  const {count, add, sub} = useContext(CounterContext)

  return (
    <>
      <div>ContextosHome</div>
      <h1>{count}</h1>
      <button onClick={()=>{add()}}>Aumenta contador</button>
      <button onClick={()=>{sub()}}>Decrementa contador</button>

      <CounterContainer></CounterContainer>
    </>
  )
}
export default ContextosHome