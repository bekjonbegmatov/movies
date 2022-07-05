import { data } from 'jquery';
import React, { useState , useEffect } from 'react';

function Smile_movie(props) {
    const [poster , setPoster] = useState('')
    useEffect (() => {
        let name = props.Name;
        let url = 'https://www.omdbapi.com/?apikey=30559cb0&t=' + name;
        fetch(url)
        .then(repons => repons.json())
        .then( data => {
            if(data.Response  == 'True'){
                setPoster(data.Poster)
            } else if (data.Error){

            }
        })

    })
    return ( 
        <div onClick={() => props.click_on(true , props.Name)} >
            <img src={poster} />
            <br />
            <h1>{props.Name}</h1>
        </div>
    );
}

export default Smile_movie;
