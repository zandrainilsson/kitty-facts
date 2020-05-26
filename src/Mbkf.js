import React, { useState, useEffect } from 'react';

export default(props) => {

    return <FactCards allMyFacts={props.allFacts} deleteFact={props.delFact}/> // MÅSTE LÄGGA TILL SÅ ATT DET STÅR "INGEN SPARAD FAKTA ÄNNU"
}

const FactCards = (props) => {

    const items = props.allMyFacts.map((item, index) => {
        return (
            <figure className="catcards" key={index}>
                <img src={item.image} alt="this is a cat"/>
                <figcaption>{item.text}</figcaption>
                <button onClick={() => props.deleteFact(index)}>Delete Fact</button>
            </figure>
        )
    })

    return(
        <div id="best-cat-fact">{items}</div>
    )
}
