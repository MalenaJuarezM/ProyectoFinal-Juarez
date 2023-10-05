import { useEffect, useState } from "react"
import { products } from "../../../productsMock"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [selectedProduct, setSelectedProduct] = useState({})

    let id = 2

    useEffect(() => {
        let producto = products.find((product) => product.id === id)

        const getProduct = new Promise((resolve, reject) => {
            resolve(producto)
            //reject("Error")

        })

        getProduct.then((res) => setSelectedProduct(res)).catch((err) => console.log(err))

    }, [id])

    const onAdd = (cantidad) => {
        let obj = {
            ...selectedProduct,
            quantity: cantidad,
        }

        console.log(obj)
    }

    return (
        <ItemDetail selectedProduct={selectedProduct} onAdd={onAdd} />
    )
}

export default ItemDetailContainer