import { useState } from "react"

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // Original
  // const handleLeftClick = () => {
  //   const newClicks = {
  //     left: clicks.left + 1,
  //     right: clicks.right
  //   }
  //   setClicks(newClicks)
  // }

  // With object spread syntax
  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left + 1})
    console.log(clicks)
  }

  const handleRightClick = () => {
    setClicks({...clicks, right: clicks.right + 1})
    console.log(clicks)
  }

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      {clicks.left}
      {clicks.right}
      <button onClick={handleRightClick}>Right</button>
    </div>
  )
}

export default App
