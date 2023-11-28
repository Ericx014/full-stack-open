import { useState } from 'react'

const App = () => {
  
  const [Good, setGood] = useState(0)
  const [Neutral, setNeutral] = useState(0)
  const [Bad, setBad] = useState(0)
  const [All, setAll] = useState(0)

  const handleGoodClick = () => {
    console.log("Previous Good", Good)

    const updatedGood = (Good + 1)
    setGood(updatedGood)
    setAll(updatedGood + Neutral + Bad)

    console.log("Current Good", updatedGood)
  }

  const handleNeutralClick = () => {
    console.log("Previous Neutral", Neutral)

    const updatedNeutral = (Neutral + 1)
    setNeutral(updatedNeutral)
    setAll(Good + updatedNeutral + Bad)

    console.log("Current Neutral", updatedNeutral)
  }

  const handleBadClick = () => {
    console.log("Previous Bad", Bad)

    const updatedBad = (Bad + 1)
    setBad(updatedBad)
    setAll(Good + Neutral + updatedBad)

    console.log("Current Bad", updatedBad)
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
      <p>All: {All}</p>
      <Average Good={Good} Neutral={Neutral} Bad={Bad} All={All} />
      <Positive Good={Good} All={All} />
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

const Average = ({ Good, Neutral, Bad, All }) => {

  if ((Good == 0) && (Bad == 0) && (Neutral == 0)){
    return(
      <p>Average: 0</p>
    )
  } 
  else {
     return (
      <p>
        Average: { ((Good * 1) + (Neutral * 0) + (Bad * -1)) / All }
      </p>
    ) 
  }
}

const Positive = ({ Good, All }) => {
  if (Good == 0 && All == 0) {
    return (
      <p>Positive: 0%</p>
    )
  } 
  else if (Good !== 0 && ((All - Good) == 0)) {
    return (
      <p>Positive: 100%</p>
    )
  } 
  else if (Good !== 0){
    return (
      <p>Positive: {(Good / All)*100}%</p>
    )
  }
}

export default App
