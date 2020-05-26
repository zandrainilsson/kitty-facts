import React from 'react';

export default (props) => {
    const catText = props.kittyText;
    const catImg = props.kittyImg;

    return(
        <React.Fragment>
            <img src={catImg} alt="this is a cat"/>
            <p>{catText}</p>
            <GenerateNewFactButton newData={props.newData} />
            <SaveFactButton saveFact={props.saveFact} img={catImg} text={catText}/>
        </React.Fragment>
    )
}

const GenerateNewFactButton = (props) => {
    return (
        <button onClick={() => props.newData()}>Generate new Fact</button>
    )
}

const SaveFactButton = (props) => {
    let wholeFact = {
        image: props.img,
        text: props.text,   
    }

    return (
        <button onClick={() => props.saveFact(wholeFact)}>Save Kitty Fact</button>
    )
}