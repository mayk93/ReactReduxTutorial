/**
 * Created by Michael on 10/04/16.
 */

import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {term: ''};
    }

    render () {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={ (event) => this.setState({term: event.target.value}) } />
                <p>Searching for: { this.state.term }</p>
            </div>
        );
    }

    // Old handler - Replaced with inline handler.
    /*
    onInputChange(event) {
        console.log(event.target.value);
    }
    */
}

export default SearchBar;