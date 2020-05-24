import React, { Component } from 'react';

class KittyImgAPI extends Component {
    state = {
        data : [],
    }

    componentDidMount() {
        const url = 'https://api.thecatapi.com/v1/images/search'

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: {url: result[0].url, id: result[0].id},
                })
            })
    }

    render() {
        const {data} = this.state

        return (
            <div id="catimg">
                <img src={data.url} alt="kitty"/>
            </div>
        )
    }
}

export default KittyImgAPI;