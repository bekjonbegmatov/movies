import React, { useState, useEffect } from 'react';
import Movie from './movie';
import Fullpeage from './fullpeage';
import Furst from './furst_peage';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import './main.css'
import Smile_movie from './smile_movie';
import Bottom from './bottom';
import { Routes } from 'react-router';
import { Alert } from 'bootstrap/dist/js/bootstrap';

function Main() {
    const [sear, setSear] = useState(false)
    const [furs, setFurs] = useState(true)
    const [msearch, setMsearch] = useState('')
    const [name, setName] = useState('')
    const [poster, setPoster] = useState('')
    const [country, setCountry] = useState('')
    const [language, setLanguage] = useState('')
    const [released, setReleased] = useState('')
    const [rating, setRating] = useState('')
    const [genre, setGenre] = useState('')
    const [Actors, setActors] = useState('')
    const [Plot, setPlot] = useState('')
    const [Runtime, setRuntime] = useState('')
    const [clicked, setClicked] = useState(false)
    const [error, setError] = useState(false)
    const [error_text, setError_Text] = useState('')
    const [loaderbool, setLoaderBool] = useState(false)

    const [list, setList] = useState(['The Shawshank Redemption', 'Forrest Gump', "Schindler's List",
        'The Godfather', 'The Green Mile',
        'Hotel Rwanda', 'Goodfellas',
        'The Matrix',
        'King Kong',
        'Slumdog Millionaire',
        "The World's Fastest Indian",
        'In Bruges',
        'The Sixth Sense',
        'Love Actually',
        'The Namesake',
        'There Will Be Blood',
        'Troy',
        'The Exorcist'
    ])
    // apikey = 30559cb0
    useEffect(() => {
    })
    function getValue(event) {
        let val = event.target.value;
        setMsearch(val)
    }
    function search(val, b, urli) {

        setLoaderBool(true)
        loader()
        setFurs(false)
        setMsearch(val)
        let url
        if (b == false) {
            url = 'https://www.omdbapi.com/?apikey=30559cb0&t=' + msearch
        } else {
            url = urli
        }

        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.Response == 'False') {
                    setError(true)
                    setError_Text(data.Error)
                    // document.write(data.Error)
                }
                else if (data.Response == 'True') {
                    console.log(data)
                    setName(data.Title)
                    setPoster(data.Poster)
                    setCountry(data.Country)
                    setLanguage(data.Language)
                    setReleased(data.Released)
                    setRating(data.imdbRating)
                    setGenre(data.Genre)
                    setActors(data.Actors)
                    setPlot(data.Plot)
                    setRuntime(data.Runtime)

                    setSear(true)
                    setClicked(false)
                    setError(false)
                    console.log("yy");
                } else if (data.Error) {
                    setError(true)
                    console.log(data.error)
                    console.log("yy");
                }
            })
        if (sear == false) {
            setError(true)
            setError_Text("No Internet Conection !")
        }

        console.log("foo", msearch);
    }
    function click(bol , name) {
        setClicked(true)
        setSear(false)
        // setName(name)
        // let url = 'https://www.omdbapi.com/?apikey=30559cb0&t=' + name;
        // search(name , true , url)
    }
    function click1(bol , name) {
        setClicked(true)
        setSear(false)
        setName(name)
        let url = 'https://www.omdbapi.com/?apikey=30559cb0&t=' + name;
        search(name , true , url)
    }
    function loader() {
        let timer;
        let count = 0
        let val = Math.floor(Math.random() * 4)
        timer = setInterval(() => {
            if (count == val) {
                setLoaderBool(false)
                clearInterval(timer)
            }
            count++
        }, 900)
    }
    function b2s(val) {
        setMsearch(val)
        search()

    }
    function home() {
        // setSear(false)
        // setFurs(true)
        // setClicked(false)
        // setError(false)
        // setLoaderBool(false)
        setSear(false)
        setFurs(true)
        setMsearch('')
        setName('')
        setPoster('')
        setCountry('')
        setLanguage('')
        setReleased('')
        setRating('')
        setGenre('')
        setActors('')
        setPlot('')
        setRuntime('')
        setClicked(false)
        setError(false)
        setError_Text('')
        setLoaderBool(false)

    }

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={home} >Find Movie</a>
                    <div className="d-flex" >
                        <input type="search" className='form-control me-2' placeholder="Search" aria-label="Search" id='inpu-val' onChange={getValue} />
                        <button className="btn btn-outline-success" onClick={() => { search('fv', false, 'rfr') }}>Search</button>
                    </div>
                </div>
            </nav>
            {(sear == true && error == false && loaderbool == false) &&
                <Movie moviname={name} poster={poster} country={country} language={language} rating={rating} released={released} genre={genre} Actors={Actors} Plot={Plot} click_on={click} Runtime={Runtime} />
            }
            {(clicked == true && error == false && loaderbool == false) &&
                <Fullpeage moviname={name} poster={poster} country={country} language={language} rating={rating} released={released} genre={genre} Actors={Actors} Plot={Plot} name_of_movi={msearch} Runtime={Runtime} />
            }
            {(error == true && loaderbool == false) &&
                <div id="not_fund">
                    <i className="fa fa-frown-o" id='fafa'></i>
                    <h1>{error_text}</h1>
                </div>
            }
            {loaderbool == true &&
                <div class="lds-roller" id='lodaer'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            }
            {(furs == true) &&
                <div>
                    <Furst Search={search} />
                    <div id='leable'>
                        <hr />
                        <span >Intiresting movies</span>
                        <hr />
                    </div>
                    {/*id='map' */}
                    <div className="container" >
                        <div className="row">
                            {list.map((val, i) => {
                                return (
                                    <div class="col-sm">
                                        <Smile_movie Name={val} index={i} click_on={click1} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <Bottom />
                </div>
            }
        </div>
    );
}

export default Main;
