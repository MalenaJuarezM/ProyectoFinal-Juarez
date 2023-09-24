
import { Typography } from "@mui/material";
import { CartWidget } from "../../common/CartWidget/CartWidget"
import "./Navbar.css"
// import Button from '@mui/material/Button';

export const Navbar = () => {
    return (
        <div className="navbar">
            {/* <Button variant="outlined" color="primary">Contained</Button> */}
            <img src="https://res.cloudinary.com/dqy0anqjn/image/upload/v1695570628/Logo1_uhakbd.png" alt="Logo" className="logo" />
            <Typography align="center" variant="h5" color={"primary.main"}>
                <ul className="menu">
                    <li>Todos</li>
                    <li>Sofás</li>
                    <li>Mesas</li>
                    <li>Aparadores</li>
                    <li>Sillas</li>
                </ul>
            </Typography>
            <CartWidget />
        </div>

    )
}