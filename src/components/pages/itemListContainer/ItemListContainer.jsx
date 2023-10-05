import { products } from "../../../productsMock"
import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        //Petición a un servidor//
        const tarea = new Promise((resolve, reject) => {
            resolve(products);
            //reject("Algo salió mal")
        })

        tarea
            .then((res) => setItems(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        < ItemList items={items} />
    )

}
