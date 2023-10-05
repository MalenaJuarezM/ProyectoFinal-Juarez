import { CounterContainer } from "../../common/counter/counterContainer"


const ItemDetail = ({ selectedProduct, onAdd }) => {
    return (
        <div>
            <h2> {selectedProduct.title} </h2>
            <CounterContainer stock={selectedProduct.stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail