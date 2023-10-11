import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/layout/Layout"
import { ItemListContainer } from "../components/pages/itemListContainer/itemListContainer"
import CartCointainer from "../components/pages/CartContainer/CartCointainer"
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer"

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/cart" element={<CartCointainer />} />
                <Route path="/category/:categoryName" element={<ItemListContainer />} />
                <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            </Route>
            <Route path="*" element={<h1>Not found.</h1>} />

        </Routes>

    )
}

export default AppRouter