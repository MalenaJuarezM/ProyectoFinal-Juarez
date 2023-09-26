import { useState } from 'react'
import { Counter } from './counter';

export const CounterContainer = ({ stock }) => {

    const [counter, setCounter] = useState(0);

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <Counter sumar={sumar} restar={restar} counter={counter} />
    )

}