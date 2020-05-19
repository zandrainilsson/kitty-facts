import React, {Component} from 'react';
import KittyImgAPI from './KittyImgAPI.js'
import KittyTextAPI from './KittyTextAPI.js'

class KittyFactsApp extends Component {
    render() {
        return (
            <div id="container">
                <KittyImgAPI />
                <KittyTextAPI />
            </div>
        )
    }
}

export default KittyFactsApp