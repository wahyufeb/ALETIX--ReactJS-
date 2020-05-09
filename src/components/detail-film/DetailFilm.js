import React, {useEffect, useState} from 'react';
import axios from "axios";

import {serviceDetailFilm} from "../../services/films/films"


import "./detail-film.css"

import NavBottom from "../nav_bottom/NavBottom"


const DetailFilm = (props) => {
    const {id} = props.match.params;

    // STATE
    const [detailFilm, setDetailFilm] = useState([]);
    const [genre, setGenre] = useState([])

    useEffect(() => {
        const dataDetailFilm = async () => {
            const reqDetailFilm = await axios.get(serviceDetailFilm(id));
            const resDetailFilm = await reqDetailFilm.data.data;
            setDetailFilm(resDetailFilm)
            setGenre(resDetailFilm.genres)
        }
        dataDetailFilm();
    }, [id])

    // style
    const detailStyled = {
        "backgroundImage":`url("https://image.tmdb.org/t/p/w500/${detailFilm.poster_path}")`,
        "height":"100vh",
        "objectFit":"cover",
        "backgroundPosition": "center",
        "filter":"blur(3px)",
        "padding":"40px",
    }
    return (
        <div>
            {detailFilm && (
                <>
                <div className="detail-film" style={detailStyled}>
                </div>
                    <div className="detail-content-film">
                        <div className="poster-detail-film">
                            <img width="100%"  src={`https://image.tmdb.org/t/p/w500/${detailFilm.poster_path}`} alt={detailFilm.title}/>
                        </div>
                        <div className="detail-film-desc">
                            <h2>{detailFilm.title} </h2>
                            <p>
                                {genre.map((gen, idx)=> (
                                    <span key={idx}>{gen.name}/ </span>
                                ))}
                            </p>
                            <h5><span id="rilis">Tahun Rilis : </span> {detailFilm.release_date}</h5>
                            <div class="detail-film-schedule">
                                <div className="price">
                                    {new Intl.NumberFormat('in-ID', { style: 'currency', currency: 'IDR' }).format(detailFilm.harga_tiket).split(",")[0]}
                                </div>
                                <div className="schedule">
                                    <h4>CEK JADWAL</h4>
                                </div>
                            </div>
                            <div className="beli-tiket">beli tiket</div>
                        </div>
                    </div>
                </>
            )}<br/><br/>
            <NavBottom/>
        </div>
    )
}

export default DetailFilm
