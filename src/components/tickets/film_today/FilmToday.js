import React, {useEffect, useState} from 'react';
import axios from "axios";
import Slider from "react-slick";
import {Container, Row, Col, } from "reactstrap";
import {Link} from "react-router-dom"

// services
import { serviceFilmToday } from "../../../services/films/films"

import "./film_today.css"
const FilmToday = () => {
    const [filmToday, setFilmToday] = useState([]);

    useEffect(()=>{
        const filmTodayAPI = async () => {
            // call film today API
            const reqFilmToday  = await axios.get(serviceFilmToday);
            const resFilmToday = await reqFilmToday.data.data;
            setFilmToday(resFilmToday)
        }
        filmTodayAPI();
    }, [])
                                                        
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: "linear"
    }
    return (
        <Container>
            <h4>JADWAL FILM HARI INI</h4>
            <Slider {...settings}>
                {filmToday.map((data)=> (
                    <Link to={`/detail-film/${data.film.id_movie}`}>
                        <div className="banner" key={data.film.id_movie}>
                            <img height="200px" src={`https://image.tmdb.org/t/p/w500/${data.film.backdrop_path}`} alt={data.film.title}/>
                        </div>
                    </Link>
                ))}
            </Slider>
            {filmToday.map((data)=>(
                <Link to={`/detail-film/${data.film.id_movie}`} key={data.film.id_movie}>
                    <FilmRow  
                        img={data.film.poster_path} 
                        genres={data.film.genres} 
                        title={data.film.title}
                        year={data.film.release_date}
                        jam_tayang={data.film.jam_tayang}
                        harga={data.film.harga_tiket}
                    />
                </Link>
            ))}
        </Container>
    )
}

const FilmRow = ({img, genres, title, year, jam_tayang, harga}) => {
    let d = new Date();
    let now = ((d.getDate() < 10) ? '0' : '')+ d.getDate();
    return (
        <div class="film-row">
            <Row>
                <Col sm="4" xs="4">
                    <img width="100%"  src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title}/>
                </Col>
                <Col sm="8" xs="8" className="title-film">
                    <div className="original-title">
                        [{year.split("-")[0]}]{title.substr(0, 15)}...
                    </div>
                    <div className="genres">
                        {genres.map((genre)=>(
                            <span>{genre.name}/ </span>
                        ))}
                    </div>  
                    <div className="action">
                        <p>{new Intl.NumberFormat('in-ID', { style: 'currency', currency: 'IDR' }).format(harga).split(",")[0]}</p>
                        <p>
                            {now === jam_tayang.split("-")[2] ? "Hari Ini" : (
                                now < jam_tayang.split("-")[2] ? "Besok" : "Tidak Tayang"
                            )}
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FilmToday
