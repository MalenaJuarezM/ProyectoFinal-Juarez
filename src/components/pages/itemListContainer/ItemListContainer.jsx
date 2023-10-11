import { products } from "../../../productsMock"
import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const { categoryName } = useParams()
    console.log(categoryName)

    useEffect(() => {
        const productosFiltrados = products.filter(product => product.category === categoryName)
        //Petición a un servidor//
        const tarea = new Promise((resolve, reject) => {
            resolve(categoryName ? productosFiltrados : products);
            //reject("Algo salió mal")
        })

        tarea
            .then((res) => setItems(res))
            .catch((error) => console.log(error))
    }, [categoryName])

    return (
        < ItemList items={items} />
    )

}
