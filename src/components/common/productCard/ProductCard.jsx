import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"


export const ProductCard = ({ item }) => {
    return (

        <section>
            <Card sx={{ maxWidth: 350, p: 1, m: 1 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={item.img}
                        alt={item.title}
                    />
                    <CardContent sx={{ minHeight: 128 }}>
                        <Typography gutterBottom variant="h5" component="div" color="secondary">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                        <br />
                        <Typography variant="body5" color="text.secondary">
                            ${item.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions >
                    <Button size="small" color="primary" variant="contained">
                        <Typography color="secondary">
                            Ver más
                        </Typography>
                    </Button>
                </CardActions>
            </Card>
        </section>

    )
}
