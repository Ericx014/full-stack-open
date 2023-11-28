import { useState } from 'react'

const App = () => {
  
  const [Good, setGood] = useState(0)
  const [Neutral, setNeutral] = useState(0)
  const [Bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(Good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(Neutral + 1)
  }

  const handleBadClick = () => {
    setBad(Bad + 1)
  }

  return (
    <div>
      <Label text="Give feedback"/>

      <Button text="Good" handleClick={handleGoodClick}/>
      <Button text="Neutral" handleClick={handleNeutralClick}/>
      <Button text="Bad" handleClick={handleBadClick}/>

      <Label text="Statistics"/>

      <p>Good: {Good}</p>
      <p>Neutral: {Neutral}</p>
      <p>Bad: {Bad}</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Label = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

export default App
