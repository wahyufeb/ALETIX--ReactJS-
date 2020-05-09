import React from "react";

import "./home.css"
import {
    Container
}
from "reactstrap"
// components
import Header from "./template/Header";
import NavBottom from "../nav_bottom/NavBottom";

// film components
import FilmPopuler from "./film_populer/FilmPopuler";
import SerialTv from "./serial_tv/SerialTv";
import { serviceFilmPopuler, serviceIndoFilm } from "../../services/films/films";

const Home =()=> {
    return(
        <div>
            <Header/>
            <Container>
                <FilmPopuler service={serviceFilmPopuler} title="Film Populer"/>
                <SerialTv/>
                <FilmPopuler service={serviceIndoFilm} title="Film Indonesia Populer"/>
                <br/>
                <NavBottom/>
            </Container>
        </div>
    )
}

export default Home;