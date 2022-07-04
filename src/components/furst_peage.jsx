import React, { useState, useEffect } from 'react';
import weee from './weee.jpg'
import './furst.css'
import { Alert } from 'bootstrap';


function Furst(props) {
    const [start, setStart] = useState(false)
    const [value, setValue] = useState('')
    const [url, setUrl] = useState('')
    function clicked() {
        setStart(true)
    }
    function getValue(event) {
        let val = event.target.value;
        setValue(val)
        setUrl('https://www.omdbapi.com/?apikey=30559cb0&t=' + val)
    }
    return (
        <div id="malumot">
            <div>
                <img src={weee} id="img_fon" />

            </div>
            <div className="info1">

                {start == false &&
                    <div>
                        <h1 id='hh1'>Unlimited movies,TV <br /> shows, and more.</h1>
                        <br />
                        <h1 id='get' onClick={clicked}>GET STARTED</h1>
                    </div>

                }
                {start == true &&
                    <div>
                        <h1 id='hh1'>Find Movie</h1>
                        <br />
                        <div class="input-group mb-3" id='inp'>
                        <input type="text" className="form-control" onChange={getValue} placeholder="Name of movie ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button id='but' class="btn btn-outline-secondary" type="button" onClick={() => { props.Search(value, true, url) }}>Search</button>
                        </div>
                    </div>
                    </div>

                }
            </div>
        </div>
    );
}

export default Furst;