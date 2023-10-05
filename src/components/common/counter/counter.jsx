
export const Counter = ({ sumar, restar, counter, onAdd }) => {
    return (
        <>
            <button onClick={sumar}>sumar</button>
            <div>{counter}</div>
            <button onClick={restar}>restar</button>
            <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </>
    )
}