import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header.js';
import Nav from './Nav.js';
import KittyHome from './KittyHome.js';
import MBKF from './Mbkf.js';


function KittyFactsApp() {
    const [catText, setCatText] = useState({
        text: "",
    })

    const [catImg, setCatImg] = useState({
        url: "",
    })

    const catTextAPI = () => {
        const url = 'https://cat-fact.herokuapp.com/facts/random';

        fetch(url)
        .then(result => result.json())
        .then(result => {

            setCatText({
                text: result.text
            })
        })
    }

    const catImgAPI = () => {
        const url = 'https://api.thecatapi.com/v1/images/search'

        fetch(url)
            .then(result => result.json())
            .then(result => {

                setCatImg({
                    url: result[0].url
                })
            })
    }

    function getData() {
        catTextAPI();
        catImgAPI();
    }

    useEffect(() => {
        getData();  
    }, [])


    return (
        <div id="container">
            <Router>
                <Header />
                    <Nav />
                    <Switch>
                        <Route path="/" exact >
                            <KittyHome kittyText={catText} kittyImg={catImg} newData={getData}/>
                        </Route>
                        <Route path="/my-best-kitty-facts">
                            <MBKF />
                        </Route>
                    </Switch>
            </Router>
        </div>
    )
}


export default KittyFactsApp;