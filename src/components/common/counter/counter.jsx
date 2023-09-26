
export const Counter = ({ sumar, restar, counter }) => {
    return (
        <>
            <button onClick={sumar}>sumar</button>
            <div>{counter}</div>
            <button onClick={restar}>restar</button>
        </>
    )
}