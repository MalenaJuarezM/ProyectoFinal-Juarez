import * as React from 'react'
import { Button, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from 'react-router-dom'

export const ProductCard = ({ item }) => {
    return (

        <Box>
            <Card sx={{ width: 300, height: 410, p: 1, m: 1 }}>
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
                <CardActions>
                    <Link to={`/itemDetail/${item.id}`}>
                        <Button
                            size="small" color="primary" variant="contained">
                            <Typography color="secondary">
                                Ver más
                            </Typography>
                        </Button>
                    </Link>

                </CardActions>
            </Card>
        </Box >

    )
}
