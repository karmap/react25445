import CounterContainer from "./CounterContainer"

import {useCounter} from "./context/counterContext"

const ContextosHome = () => {

  const {count, add, sub} = useCounter()

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