import React from 'react';

/**
 * Returnerar startsidan för applikationen, 
 * där de senaste svaren från API'erna visas upp.
 */
export default (props) => {
    /** 'catText' är medskickat från 'KittyFactsApp' och är den nuvarande faktatexten */
    const catText = props.kittyText;

    /** catImg är medskickat från 'KittyFactsApp' och är den nuvarande url'en till bilden */
    const catImg = props.kittyImg;

    return(
        <React.Fragment>
            <img src={catImg} alt="this is a cat"/>
            <p>{catText}</p>
            <GenerateNewFactButton newData={props.newData} />
            <SaveFactButton saveFact={props.saveFact} img={catImg} text={catText} allMyFacts={props.allFacts} />
        </React.Fragment>
    )
}

/** Returnerar en knapp, som genererar nya API'anrop om användaren klickar på den */
const GenerateNewFactButton = (props) => {
    return (
        <button onClick={() => props.newData()}>Generate new Fact</button>
    )
}

/** 
 * Sparar nuvarande faktatext och bild i ett objekt,
 * som därefter skickas med för att spara som en favorit av användaren.
 */
const SaveFactButton = (props) => {
    let wholeFact = {
        image: props.img,
        text: props.text,   
    }

    /** Kontrollerar om exakt samma fakta redan finns sparad */
    const checkContentFacts = () => {
        for (let i = 0; i < props.allMyFacts.length; i++) {
            if (props.allMyFacts[i].image === props.img && props.allMyFacts[i].text === props.text){
                return true
            } 
        }
        return false
    }

    /** Returnerar olika om faktan redan blivit sparad eller inte */
    if (checkContentFacts()) {
        return <p>This fact have been saved!</p>

    } else {
        return <button onClick={() => props.saveFact(wholeFact)}>Save Kitty Fact</button>
    }
}