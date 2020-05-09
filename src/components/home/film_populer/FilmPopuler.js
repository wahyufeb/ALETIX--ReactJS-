import React,{useEffect, useState} from 'react';

import Slider from "react-slick";
import axios from "axios";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"

import {Link} from "react-router-dom"
// services
import "./film_populer.css"



const FilmPopuler = ({service, title}) => {
    const [loading, setLoading] = useState(true);
    const [films, setFilms] = useState([])
    useEffect(()=>{
        const allFilmPopuler = async ()=>{
            const reqAPI = await axios.get(service);
            const resAPI = await reqAPI.data;
            setFilms(resAPI.results);
            setLoading(false)
        }
        allFilmPopuler()
    },[service, title]);
    const settings = {
        classname:"center",
        infinite:false,
        swipeToSlide:true,
        arrows:false,
        // lazyLoad:true,
        variableWidth:true,
    }
    return (
        <div>
            {loading ? (
            <div>
                <SkeletonTheme  color="#47B5D5" highlightColor="#586AD8">
                    <Skeleton width={130} height={20}/>
                    <Slider {...settings}>
                        <Skeleton  width={165} height={180}/>
                        <Skeleton  width={165} height={180}/>
                        <Skeleton  width={165} height={180}/>
                    </Slider>
                </SkeletonTheme>
            </div>):(
            <div>
                <h4>{title}</h4> 
                <Slider {...settings}>
                    {films.filter(data => data.poster_path !== null).map((film)=>(
                        <div className="film" key={film.id}>
                            <Link to="/film-detail">
                                <img width="150" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title}/>
                                <p>
                                    {film.title.split(" ")[0]} {film.title.split(" ")[1]} {film.title.split(" ")[2]} {("("+film.release_date.split("-")[0]+")")}
                                </p>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>)}
        </div>
    )
}

export default FilmPopuler
