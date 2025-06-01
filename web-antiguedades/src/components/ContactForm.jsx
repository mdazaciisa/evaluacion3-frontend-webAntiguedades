import { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

//Generación de componente de formulario de contacto
const ContactForm = () => {
    // Estados locales para manejar el formulario
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    //Valida los campos del formulario
    const validate = () => {
        const newErrors = {};
        //Validamos campos requeridos
        if (!formData.name) newErrors.name = 'Por favor, ingrese su nombre';
        if (!formData.email) newErrors.email = 'Por favor, ingrese su correo electrónico';
        //Validar formato de correo
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Por favor, ingrese un correo electrónico válido';
        if (!formData.message) newErrors.message = 'Por favor, ingrese su mensaje';
        return newErrors;

    }

    //Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            console.log('Formulario enviado:', formData);
            setSuccess(false);
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSuccess(true);
        }
    }

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2, borderRadius: 1, boxShadow: 3 }}>
                <h1>Contacto</h1>
                <Typography variant="body1" fontWeight={'bold'}>¿Tienes dudas o buscas una pieza especial?</Typography>
                <Typography variant="body1" align="justify">Estamos aquí para ayudarte a encontrar ese tesoro único. Completa el formulario y nos pondremos en contacto contigo lo antes posible. ¡Gracias por confiar en nuestra colección de antigüedades con historia!</Typography>
                {/*Campo para el nombre*/}
                <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    error={!!errors.name}
                    helperText={errors.name}
                    sx={{ mb: 2 }} />

                <TextField
                    label="Correo electrónico"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{ mb: 2 }} />

                <TextField
                    label="Mensaje"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    error={!!errors.message}
                    helperText={errors.message}
                    sx={{ mb: 2 }} />

                {/*Botón para enviar el formulario*/}
                <Button type="submit" variant="contained" sx={{ backgroundColor: '#A37774', '&:hover': { backgroundColor: '#C70039' } }} fullWidth>
                    Enviar
                </Button>

                {/*Mensaje de exito*/}
                {success && <Typography variant="body1" align="center" color="success" sx={{ mt: 2 }}>Formulario enviado con exito!</Typography>}

                {/*Mensaje de error*/}
                {Object.keys(errors).length > 0 && (
                    <Typography variant="body1" align="center" color="error" sx={{ mt: 2 }}>
                        {Object.values(errors).map((error, index) => (
                            <div key={index}>{error}</div>
                        ))}
                    </Typography>
                )}
            </Box>
        </>
    )
}
export default ContactForm;