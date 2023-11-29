const Total = ({ parts })  => {
    const sum = parts.reduce(
        (total, currentPart) => total + currentPart.exercises, 0
    )
    return (
        <p>Total exercises {sum}</p>
    )
}

export default Total