import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header.js';
import Nav from './Nav.js';
import KittyHome from './KittyHome.js';
import MBKF from './Mbkf.js';


function KittyFactsApp() {                                                                                  
    const [catInfo, setCatInfo] = useState({
        url: "",
        text: "",
    })

    const [allSavedFacts, setAllSavedFacts] = useState([])

    async function getCatData() {
        let catImgResult = await fetch('https://api.thecatapi.com/v1/images/search');
        let catImg = await catImgResult.json();
        catImg = catImg[0].url;

        let catTextResult = await fetch('https://cat-fact.herokuapp.com/facts/random');
        let catText = await catTextResult.json();
        catText = catText.text;

        saveData(catImg, catText);    
    }

    const saveData = (img, text) => {
        setCatInfo({
            url: img,
            text: text,
        })
    }

    const saveToLocalStorage = (data) => {
        let getFacts = JSON.parse(localStorage.getItem('mybestfacts'))

        if (getFacts !== null) {
            let facts = [...getFacts, data]
            localStorage.setItem('mybestfacts', JSON.stringify(facts))
            setAllSavedFacts(facts)
        } else {
            let facts = [data]
            localStorage.setItem('mybestfacts', JSON.stringify(facts))
            setAllSavedFacts(facts)
        }
    }

    const deleteFact = (index) => {
        let facts = localStorage.getItem('mybestfacts');
        let parsedFacts = JSON.parse(facts);
        parsedFacts.splice(index, 1)

        localStorage.setItem('mybestfacts', JSON.stringify(parsedFacts));
        setAllSavedFacts(parsedFacts);
    }

    useEffect(() => {
        getCatData();
        let allSavedFacts = JSON.parse(localStorage.getItem('mybestfacts'));
        setAllSavedFacts(allSavedFacts);
    }, [])

    return (
        <div id="container">
            <Router>
                <Header />
                    <Nav />
                    <Switch>
                        <Route path="/" exact >
                            <KittyHome kittyText={catInfo.text} kittyImg={catInfo.url} newData={getCatData} saveFact={saveToLocalStorage}/>
                        </Route>
                        <Route path="/my-best-kitty-facts">
                            <MBKF delFact={deleteFact} allFacts={allSavedFacts}/>
                        </Route>
                    </Switch>
            </Router>
        </div>
    )
}

export default KittyFactsApp;