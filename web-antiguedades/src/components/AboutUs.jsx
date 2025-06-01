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
        </div>
    )
}
