const PersonForm = ({ nameChange, nameValue, numberChange, numberValue, onClick, text }) => {
    return(
        <form>
            <div>Name: <input onChange={nameChange} value={nameValue} /></div>
            <div>Number: <input onChange={numberChange} value={numberValue} /></div>
            <button onClick={onClick} type="submit">{text}</button>
        </form>
    )
}

export default PersonForm