import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import { Navbar } from "../navbar/navBar"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout