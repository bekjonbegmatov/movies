import React, { useState, useEffect } from 'react';
import './main.css'
import Bottom from './bottom';
import { Rating } from 'react-simple-star-rating'


function Fullpeage(props) {
    const [Plot, setPlot] = useState('')
    const [Awards, setAwards] = useState('')
    const [Writer, setWriter] = useState('')
    useEffect(() => {
        let name = props.moviname
        let url = 'http://www.omdbapi.com/?apikey=30559cb0&t=' + name + '&plot=full'
        fetch(url)
            .then(respons => respons.json())
            .then(data => {
                if (data.Response) {
                    console.log('fooooooo', data)
                    setPlot(data.Plot)
                    setAwards(data.Awards)
                    setWriter(data.Writer)
                } else if (data.error) {
                    console.log(data.error)
                }
            })
    })
    return (
        <div id="full">
            <h1 id='full_name'>{props.moviname}</h1>

            <div id="vbn">
                <div id="img">
                    <img src={props.poster} id='posrer' />
                </div>
                <div id="information">
                    <h1 >{props.moviname}</h1>
                    <p>{Plot}</p>
                    <br />
                    <h5>Genre : {props.genre}</h5>
                    <br />
                    <h5>language : {props.language}</h5>
                    <br />
                    <h5>Awards : {Awards}</h5>
                    <br />
                    <h5>Writer : {Writer}</h5>
                    <br />
                    <h5>Actors : {props.Actors}</h5>
                    <br />
                    <p>Rating : {props.rating} <Rating iconsCount={10} size={25} readonly={true} initialValue={props.rating} transition={true} /></p>
                    <h5>Runtime : {props.Runtime}</h5>
                </div>
            </div>
            < Bottom/>
        </div>
    );
}

export default Fullpeage;