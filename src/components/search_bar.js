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
        return <input onChange={ (event) => console.log(event.target.value) } />;
    }

    // Old handler - Replaced with inline handler.
    /*
    onInputChange(event) {
        console.log(event.target.value);
    }
    */
}

export default SearchBar;