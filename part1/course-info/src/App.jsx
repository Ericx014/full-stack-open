const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {
      name: 'Fundmentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />

      <Content parts={part} />
      
      <Total exercise1={part[0].exercises} exercise2={part[1].exercises} exercise3={part[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props);
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.parts.name} {props.parts.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3 }</p>
    </div>
  )

}

export default App