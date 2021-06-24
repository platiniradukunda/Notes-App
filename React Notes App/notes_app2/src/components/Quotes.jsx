import React, { Component } from 'react';

class Quotes extends Component {
    constructor() {
        super();
        this.state={
            fact: null,
        }
    }

    componentDidMount () {
        var getFact = async () => {
            // third party api to get a useless fact
            // api url to get data
            const url = `https://useless-facts.sameerkumar.website/api`
            try {
                const response = await fetch(url);
                // changing the response into json
                const data = await response.json()
                // setting state to the fact from api
                this.setState({
                    fact: data.data,
                })
            } catch (err) {
                console.log(err);
            }
        }
        // calling on the function that calls on the api
        getFact()
    }


    render() {
        return (
            <div className="quotes">
                <h3>{`Useless Fact: ${this.state.fact}`}</h3>
            </div>
        );
    }
}

export default Quotes;