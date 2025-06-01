import { Typography, ListItem, ListItemText, Box, Link, List } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AboutUs() {
    const [data, setData] = useState([]);
    const url = "http://cors-anywhere.herokuapp.com/https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/about-us/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, { headers: { Authorization: "Bearer ipss.get" } });
                setData(response.data.data);
            } catch (error) {
                console.log('error al obtener los datos', error);
            }

        }
        fetchData();
    }, [])
    return (
        <div>
            <Typography variant="h2" fontWeight={"bold"} gutterBottom marginTop={10}>Acerca de nosotros</Typography>
            <Typography variant="body1" marginLeft={10} marginRight={10} align="justify">{data}</Typography>

            <Typography variant="h4" fontWeight={"bold"} gutterBottom marginTop={10}>Nuestro proceso de venta</Typography>
            <Typography variant="body1" marginLeft={10} marginRight={10} align="justify">En Antigüedades Sthandier, nuestro proceso de venta está pensado para ofrecer una experiencia sencilla y confiable. Los clientes pueden explorar nuestra cuidada selección de piezas únicas a través de nuestra página web o perfil de Instagram. Para reservar un producto, se dispone de un plazo de 24 horas para asegurar la pieza mediante una transferencia bancaria. Realizamos envíos a través de Starken con despacho semanal, con opción de envío por pagar, o bien pueden visitarnos personalmente en nuestra tienda ubicada en Avda. Eucaliptus #1809, Laguna de Zapallar, donde brindamos atención personalizada. Así combinamos lo mejor de la venta online con el contacto directo, asegurando que cada pieza encuentre un nuevo hogar que valore su historia y belleza.</Typography>
        </div>
    )
}
