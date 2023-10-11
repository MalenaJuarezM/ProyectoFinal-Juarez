import { Button, Typography } from "@mui/material"

export const Counter = ({ sumar, restar, counter, onAdd }) => {
    return (
        <>
            <Button color="primary" variant="contained" onClick={sumar}><Typography color="secondary">
                Sumar
            </Typography></Button>
            <div>{counter}</div>
            <Button color="primary" variant="contained" onClick={restar}><Typography color="secondary">
                Restar
            </Typography></Button>
            <Button color="primary" variant="outlined" onClick={() => onAdd(counter)}><Typography color="secondary">
                Agregar
            </Typography></Button>
        </>
    )
}

<Button
    size="small" color="primary" variant="contained">
    <Typography color="secondary">

    </Typography>
</Button>