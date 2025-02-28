import React, {useState} from 'react'

//hooks
  //const [state, setState] = useState(initialValue)
  // State: stores current value
  // setState: fuction to update the value
  // useState(initialValue): Sets the initial state value

function Counter() {
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount((prevCount) => prevCount + 1); //ensures react updates on the present state
        console.log(count); //Might show the old value
    }
  return <button onClick={handleClick}> Count: {count}</button>
    /*<div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    */
}

export default Counter
