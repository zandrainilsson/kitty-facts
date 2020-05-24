import React, { Component } from 'react';

class KittyTextAPI extends Component {
    state = {
        data : [],
    }

    componentDidMount() {
        const url = 'https://cat-fact.herokuapp.com/facts/random'

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: {text: result.text},
                })
            })
    }

    render() {
        const {data} = this.state

        return (
            <div id="cattext">
                <p>{data.text}</p>
            </div>
        )
    }
}

export default KittyTextAPI;