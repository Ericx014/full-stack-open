import { useState } from "react"

const App = () => {
  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='Left'/>
      <Button handleClick={handleRightClick} text='Right'/>
      {right}

      <p>Total left: {left}, Total right: {right}</p>
      <p>Total click: {total}</p>
      <History allClicks={allClicks}/>
    </div>
  )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button press history: {props.allClicks.join(', ')}
    </div>
  )
}

export default App

//  stopped at: Old React