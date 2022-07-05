import React, { useState, useEffect } from 'react';
import './main.css'
import { Rating } from 'react-simple-star-rating'



function Movie(props) {
    const [acter, setAcfer] = useState('')
    const [ratongval , setRatingval] = useState(8)
    useEffect(() => {

    })
    function actor(Actors) {
        let act = ''
        for (let i = 0; i < Actors.length; i++) {
            if (Actors[i] != ',') {
                act += Actors[i]
            } else {
                break
            }
        }
        console.log(act);
        setAcfer(act)

    }
    return (
        <div id='movi' onClick={() => props.click_on(true , props.Name)}>
            <img src={props.poster} id='photo_pos'/>
            <div id="info">
                <h1>{props.moviname}</h1>
                <p>{props.genre}</p>
                {/* <p>Plot : {props.Plot}</p> */}
                <p>language : {props.language}</p>
                <p>Country : {props.country}</p>
                <p>Actors : {props.Actors}</p>
                <p>Released : {props.released}</p>
                <p>Rating : {props.rating} <Rating  iconsCount={10} size={25} readonly={true} initialValue={props.rating} transition={true}/></p>
                <br />
                <p>Runtime : {props.Runtime}</p>
                
                
            </div>
            
        </div>
    );
}

export default Movie;