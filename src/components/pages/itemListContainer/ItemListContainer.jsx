import { Typography } from "@mui/material"

export const ItemListContainer = ({ saludo }) => {
    return (
        <>
            <Typography align="center" variant="h5" color={"secondary.main"}>{saludo}</Typography>
        </>
    )
}
