import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('Eric Bong')
  const [newNumber, setNewNumber] = useState('011-33472177')
  const [filter, setNewFilter] = useState('')

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