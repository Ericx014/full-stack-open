import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>

      <Button 
        doThis = {increaseByOne}
        text = 'plus'
      />

      <Button 
        doThis = {decreaseByOne}
        text = 'minus'      
      />

      <Button 
        doThis = {setToZero}
        text = 'clear'
      />

    </div>
  )
}

// Originally
// const Display = (props) => {
//   const counter = props.counter

//   return (
//     <div>
//       {counter}
//     </div>
//   )
// }

// Destructured 
const Display = ({counter}) => <div>{counter}</div>
const Button = ({doThis, text}) => <button onClick={doThis}> {text} </button>

export default App