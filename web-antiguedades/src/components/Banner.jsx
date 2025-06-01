import { Box, Typography, Button } from "@mui/material";

const Banner = () => {
    return (
        <Box
            role="img"
            aria-label="Tazas de porcelana antigua dispuestas sobre una repisa, fondo del banner principal de la tienda de antigüedades Sthandier"
            sx={{
                backgroundImage: 'url(./public/banner.png)',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f2f2f2",
                textAlign: "center",
            }}
        >
            <Typography
                variant="h1"
                component="h2"
                gutterBottom
                color="#F5EFED"
                sx={{
                    mx: { xs: 2, sm: 4, md: 6, lg: 8 },
                    fontSize: { xs: "4rem", sm: "4rem", md: "4rem", lg: "5rem" },
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
                }}>
                Bienvenido a la tienda de Antiguedades Sthandier
            </Typography>
            <Button variant="contained" href="#productos" sx={{ backgroundColor: '#A37774', '&:hover': { backgroundColor: '#C70039' }}}>
                Comprar Ahora
            </Button>
        </Box>
    );
};

export default Banner;