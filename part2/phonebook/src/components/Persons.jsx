const Persons = ({ persons, deleteOnClick }) => {
    return (
        <div>
            {persons.map((person) =>
                <p key={person.id}>
                    {person.name}: {person.number}
                    <Button text="Delete" onClick={() => deleteOnClick(person.id)}/>
                </p>
            )}
        </div>
    )
}

const Button = ({ text, onClick }) => {
    return(
        <button onClick={onClick}>{text}</button>
    )
  }

export default Persons