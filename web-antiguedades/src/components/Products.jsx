import { Typography, Box, Card, CardContent, CardMedia, Grid, CircularProgress, Container, useTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductsSection() {
    const theme = useTheme();
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = "http://cors-anywhere.herokuapp.com/https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/products-services/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, { headers: { Authorization: "Bearer ipss.get" } });
                setProductos(response.data.data.productos);
            } catch (err) {
                console.error('Error al obtener los datos:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
                <Typography variant="h6" ml={2}>Cargando productos...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <Typography variant="h6" color="error">Error al cargar los productos: {error.message}</Typography>
            </Box>
        );
    }

    if (productos.length === 0) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <Typography variant="h6">No hay productos disponibles en este momento.</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                py: 6,
                px: 2,
            }}
        >
            <Container maxWidth="lg">
                <h1>
                    Nuestros productos
                </h1>

                <Grid
                    container
                    spacing={4}
                    justifyContent={{ xs: 'center', sm: 'center' }}
                >
                    {productos.map((producto) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={producto.id}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Card
                                sx={{
                                    maxWidth: 350,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: 3,
                                    '&:hover': {
                                        boxShadow: 6,
                                        transform: 'translateY(-5px)',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    }
                                }}
                            >
                                {producto.imgs && producto.imgs.length > 0 && (
                                    <CardMedia
                                        component="img"
                                        image={producto.imgs[0]}
                                        alt={producto.nombre}
                                        sx={{
                                            height: 400,
                                            objectFit: 'cover',
                                            borderBottom: '1px solid #eee',
                                        }}
                                    />
                                )}
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Box>
                                        <Typography variant="h6" component="div" gutterBottom sx={{ color: '#484A47' }}>
                                            {producto.nombre}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            {producto.descripcion}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        {producto.precios?.length > 0 ? (
                                            producto.precios.map((p, index) => (
                                                <Typography
                                                    key={index}
                                                    variant="subtitle2"
                                                    color="#A37774"
                                                    sx={{ fontWeight: 'bold' }}
                                                >
                                                    {p.Nombre}: ${p.precio.toLocaleString('es-CL')}
                                                </Typography>
                                            ))
                                        ) : (
                                            <Typography variant="subtitle1" color="#A37774" fontWeight="bold">
                                                Precio: ${producto.precio?.toLocaleString('es-CL')}
                                            </Typography>
                                        )}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box >
    );
}