import React from 'react';

// component
import Header from "../home/template/Header";
import NavBottom from "../nav_bottom/NavBottom"
import FilmToday from "./film_today/FilmToday"

const Tickets = () => {
    return (
        <div>
            <Header/>
            <FilmToday/>
            <br/>
            <br/>
            <NavBottom/>
        </div>
    )
}

export default Tickets
