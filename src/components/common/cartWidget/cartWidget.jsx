import "./cartWidget.css"
import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
    return (
        <>
            <Badge showZero badgeContent={0} color="secondary">
                <ShoppingCartIcon fontSize="large" color="secondary" />
            </Badge>
        </>


    )
}