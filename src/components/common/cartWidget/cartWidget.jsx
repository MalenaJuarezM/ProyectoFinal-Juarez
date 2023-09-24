import "./cartWidget.css"
import { BsCart2 } from "react-icons/bs"

export const CartWidget = () => {
    return (
        <div>
            <p className="items">0</p>
            <BsCart2 className="cart" />
        </div>

    )
}