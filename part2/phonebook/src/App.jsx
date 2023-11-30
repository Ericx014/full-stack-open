import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('Eric Bong')
  const [newNumber, setNewNumber] = useState('011-33472177')
  const [filter, setNewFilter] = useState('')

  const hook = () => {
    console.log("effect")
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promised fullfiled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addNewContact = (event) => {
    event.preventDefault()

    const existingPerson = persons.some((person) =>
      person.name.toLowerCase() === newName.toLowerCase()
    )
    console.log("Existing person:", existingPerson)

    if (existingPerson) {
      window.alert(`${newName}'s contact is already saved`)
    } else {
        const newPerson = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
        }
        const updatedArray = persons.concat(newPerson) 
        setPersons(updatedArray)
        setNewName('')
        setNewNumber('')
        console.log("New person added:", updatedArray)
      }
  }

  const handleNameChange = (event) => {
    console.log("Name change:", event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log("Number change: ", event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log("Filter change: ", event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange}/>

      <h3>Add a new contact:</h3>
      <PersonForm 
        nameChange={handleNameChange} nameValue={newName}
        numberChange={handleNumberChange} numberValue={newNumber}
        onClick={addNewContact} text="Add"
      />

      <h3>Numbers</h3>

      <Persons 
        persons = {persons.filter((person) => 
        person.name.toLowerCase().includes((filter).toLowerCase())
        )}
      />
    </div>
  )
}

export default App

// stopped at 2.10