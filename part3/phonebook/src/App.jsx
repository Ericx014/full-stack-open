import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import contactServices from "../services/Person";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");
	const [message, setMessage] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		contactServices.getAllContact()
			.then(initialPersons => setPersons(initialPersons));
	} ,[]);
	const addNewContact = (event) => {
		event.preventDefault();
		const existingPerson = persons.find((person) =>
			person.name.toLowerCase() === newName.toLowerCase()
		);
		if (existingPerson) {
			window.confirm(
				`${newName}'s contact is already saved, would you like to replace the current information?`
			);
			
			const updatedPerson = {
				...existingPerson, number: newNumber
			};
			contactServices
				.updateContact(existingPerson.id, updatedPerson)
				.then((returnedData) => {
					setPersons(
						persons.map((person) => 
							person.id !== existingPerson.id ? person: returnedData)
					);
					console.log("Previous data", existingPerson);
					console.log("Updated data", returnedData);
					setNewName("");
					setNewNumber("");
					setMessage("Contact updated successfully.");
					setTimeout(() => {
						setMessage(null);
					}, 4000);
				})
				.catch(() => {
					console.log(`Error: ${existingPerson.name} not found in saved contacts.`);
					setErrorMessage(`${existingPerson.name} not found within contacts`);
					setTimeout(() => {
						setErrorMessage(null);
					}, 4000);
				});
		} else {
			const newPerson = {
				name: newName,
				number: newNumber,
				id: persons.length + 1
			};
			contactServices.createContact(newPerson)
				.then((returnedData) => {
					setPersons(persons.concat(returnedData));
					setNewName("");
					setNewNumber("");
					console.log("New person added:", returnedData);
					setMessage("Contact saved successfully");
					setTimeout(() => {
						setMessage(null);
					}, 4000);
				})
				.catch((error) => {
					console.log(error.response.data.error);
					setErrorMessage(error.response.data.error);
					setTimeout(() => {
						setErrorMessage(null);
					}, 4000);
				});
		}
	};
	const deleteOnClick = (id) => {
		const personToDelete = persons.find((person) => person.id === id);
		if (window.confirm(`Delete ${personToDelete.name}'s contact?`)){
			contactServices.deleteContact(id)
				.then(() => {
					const contactsAfterDelete = persons.filter((person) => person.id !== id);
					setPersons(contactsAfterDelete);
					console.log("Contact deleted", personToDelete);
					setMessage(`${personToDelete.name} deleted from server successfully.`);
				})
				.catch(() => {
					setErrorMessage(`${personToDelete.name} is already deleted from the server.`);
					setTimeout(() => {
						setErrorMessage(null);
					}, 4000);
				});
		}
	};
	const handleNameChange = (event) => {
		console.log("Name change:", event.target.value);
		setNewName(event.target.value);
	};
	const handleNumberChange = (event) => {
		console.log("Number change: ", event.target.value);
		setNewNumber(event.target.value);
	};
	const handleFilterChange = (event) => {
		console.log("Filter change: ", event.target.value);
		setFilter(event.target.value);
	};
	return (
		<div>
			<h2>Phonebook</h2>
			<Notification className="message" message={message}/>
			<Notification className="error-message" message={errorMessage}/>
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
				deleteOnClick = {deleteOnClick}
			/>
		</div>
	);
};

export default App;

