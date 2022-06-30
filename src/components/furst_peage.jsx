import React, { useState, useEffect } from 'react';
import weee from './weee.jpg'
import './furst.css'


function Furst() {
    return (
        <div id="malumot">
            <div>
                <img src={weee} id="img_fon" />

            </div>
            <div className="info1">
                <h1 id='hh1'>Unlimited movies,TV <br /> shows, and more.</h1>
                <br />
                <h1 id='get'>GET STARTED</h1>
            </div>
        </div>
    );
}

export default Furst;