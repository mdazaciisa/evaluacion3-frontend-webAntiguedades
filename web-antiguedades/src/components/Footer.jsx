import { Box, Typography } from '@mui/material'
//Componentes de footer
const Footer = () => {
    return (
        <Box component='footer' sx={{ bgcolor: '#efcfe3ff', py: 6 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Antiguedades Sthandier ® 2025
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Todos los derechos reservados
            </Typography>
        </Box>
    )
}

export default Footer;