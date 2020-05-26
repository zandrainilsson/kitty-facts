import React from 'react';

/**
 * Returnerar sidan 'My Best Kitty Facts', där all 
 * den fakta användaren sparat visas upp.
 */
export default(props) => {
    return (
        <React.Fragment>
            <h1>My Best Kitty Facts</h1>
            <FactCards allMyFacts={props.allFacts} deleteFact={props.delFact}/>
        </React.Fragment>
    )
}

/** 
 * Skapar cards för varje fakta som finns sparad i 'allSavedFacts' som
 * skickats med som props allFacts/allMyFacts. Om ingen fakta sparats ännu
 * så informeras användaren istället om detta.
 */
const FactCards = (props) => {
    if (props.allMyFacts === null || !props.allMyFacts.length ) {
        return <p>Åh nej! Du verkar inte ha sparat någon fakta ännu...</p>
    } else {
        const items = props.allMyFacts.map((item, index) => {
            return (
                <figure className="catcards" key={index}>
                    <img src={item.image} alt="this is a cat"/>
                    <figcaption>{item.text}</figcaption>
                    <button onClick={() => props.deleteFact(index)}>Delete Fact</button>
                </figure>
            )
        })
    
        return (
            <div id="best-cat-fact">{items}</div>
        )
    }
}
