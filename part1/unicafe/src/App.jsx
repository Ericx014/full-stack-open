import { useState } from 'react'

const Label = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = ({text, value, unit}) => {
  return ( <p>{text}: {value}{unit}</p> )
} 

const Statistics = (props) => {
  const { Good, Neutral, Bad, All } = props
  const Average = ((Good * 1) + (Neutral * 0) + (Bad * -1)) / All
  const Positive = (Good / All) * 100 
  
  if (All === 0) {
    return (
      <p>No feedback given</p>
    )
  } 
  else {
    return(
      <div>
        <StatisticLine text="Good" value={Good} />
        <StatisticLine text="Neutral" value={Neutral} />
        <StatisticLine text="Bad" value={Bad} />
        <StatisticLine text="All" value={All} />
        <StatisticLine text="Average" value={Average} />
        <StatisticLine text="Positive" value={Positive} unit={"%"}/>
      </div>
    )
  }
}

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

      <Statistics Good={Good} Neutral={Neutral} Bad={Bad} All={All} />
    </div>
  )
}

export default App
