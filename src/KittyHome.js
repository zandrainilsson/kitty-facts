import React from 'react';

export default (props) => {
    const catText = props.kittyText;
    const catImg = props.kittyImg;

    return(
        <React.Fragment>
            <img src={catImg.url} alt="this is a cat"/>
            <p>{catText.text}</p>
            <GenerateNewFactButton newData={props.newData}/>
            <SaveFactButton />
        </React.Fragment>
    )
}

const GenerateNewFactButton = (props) => {
    return (
        <button onClick={() => props.newData()}>Generate new Fact</button>
    )
}

const SaveFactButton = () => {
    return (
        <button>Save Kitty Fact</button>
    )
}