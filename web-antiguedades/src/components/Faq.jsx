import { Typography, ListItem, ListItemText, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Faq() {
    const [info, setInfo] = useState([]);
    const url = "http://cors-anywhere.herokuapp.com/https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/faq/";

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const response = await axios.get(url, { headers: { Authorization: "Bearer ipss.get" } });
                setInfo(response.data.data);
            } catch (error) {
                console.log('error al obtener los datos', error);
            }

        }
        fetchInfo();
    }, [])

    return (
        <Box p={4}>
            <h1>Preguntas frecuentes</h1>
            {info.map((item) =>
                <Box key={item.id} mb={4} >
                    <Typography variant="h5" gutterBottom>{item.titulo}</Typography>
                    <Typography variant="body1">{item.respuesta}</Typography>
                </Box>
            )}
        </Box>
    )
}
