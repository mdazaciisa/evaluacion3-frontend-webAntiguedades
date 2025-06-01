import { AppBar, Toolbar, Typography, IconButton, Drawer, ListItem, ListItemText, Box, Link, List } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const opciones = [
        { id: 1, nombre: "nosotros", link: "#nosotros" },
        { id: 2, nombre: "productos", link: "#productos" },
        { id: 3, nombre: "faq", link: "#faq" },
        { id: 4, nombre: "contacto", link: "#contacto" }
    ];

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#A37774' }}>
                <Toolbar sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingY: 2,
                }}>
                    {/* Contenedor para Logo + Título */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 1,
                        }}
                    >
                        <img
                            src="./public/logo.png"
                            alt="Logo de antiguedades Sthandier, un conejo vintage en color blanco sobre fondo rosa"
                            style={{
                                height: 80, // Ajusta la altura del logo
                                marginRight: 16, // Espacio entre el logo y el texto
                            }}
                        />

                        <Typography variant="h4" component="div">
                            <Link href="/" color="#F5EFED" underline="none" sx={{ '&:hover': { color: '#C70039' } }}>
                                Antiguedades Sthandier
                            </Link>
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            justifyContent: 'center',
                        }}
                    >
                        {opciones.map((opcion, idx) => (
                            <Link
                                key={opcion.id}
                                href={opcion.link}
                                color="#484A47"
                                underline="none"
                                sx={{ marginRight: idx !== opciones.length - 1 ? 4 : 0, '&:hover': { color: '#C70039' }, fontSize: '1.1rem' }}
                            >
                                {opcion.nombre.toUpperCase()}
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ display: { xs: 'block', sm: 'none' }, position: 'absolute', right: 16 }}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon sx={{ color: '#484A47' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {opciones.map((opcion) => (
                        <ListItem button key={opcion.id} component="a" href={opcion.link} onClick={toggleDrawer(false)} >
                            <ListItemText primary={opcion.nombre.toUpperCase()} sx={{ color: '#484A47' }}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Header;