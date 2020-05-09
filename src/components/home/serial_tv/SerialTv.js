import React, {useEffect, useState} from 'react';

import Slider from "react-slick";
import axios from "axios"
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

import {Link} from "react-router-dom"
// services
import { serviceSerialTv } from "../../../services/films/films";

const SerialTv = () => {
    const [loading, setLoading] = useState(true);
    const [serialTv, setSerialTv] = useState([])
    useEffect(()=>{
        const allSerialTV = async ()=>{
            const reqAPI = await axios.get(serviceSerialTv);
            const resAPI = await reqAPI.data;
            setSerialTv(resAPI.results);
            setLoading(false)
        }
        allSerialTV()
    }, [])
    const settings = {
        classname:"center",
        infinite:false,
        swipeToSlide:true,
        arrows:false,
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
                <h4>Serial TV Populer</h4> 
                <Slider {...settings}>
                    {serialTv.map((film)=>(
                        <div className="film" key={film.id}>
                            <Link to="/film-detail">
                                <img width="150" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.name}/>
                                <p>
                                    {film.name.split(" ")[0]} {film.name.split(" ")[1]} {film.name.split(" ")[2]}
                                </p>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>)}
        </div>
    )
}

export default SerialTv
