import { useState } from "react"


const useCounter = ( InitialState = 0 ) => {
  
  const [ state, setState ] = useState( InitialState ) ;
  
  const Add = ( factor = 1) => {
    setState( state + factor ) ;
  }

  const Sub = ( factor = 1) => {
    setState( state - factor ) ;
  }

  const Zero = () => {
    setState( 0 ) ;
  }

  const Reset = () => {
    setState( InitialState ) ;
  }

  return {
    state: state,
    Add: Add, 
    Sub: Sub, 
    Zero: Zero, 
    Reset: Reset,
  }

}

export default useCounter
