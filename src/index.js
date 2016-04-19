/**
 * Created by Michael on 08/04/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

import API_KEYS from './other/other_info'; // Import entire dictionary
//import { YT_API } from './other/other_info.js'; // Deconstructed version

// Basic Component.
// Produces HTML.
// Insert created HTML into DOM.

const YT_KEY = API_KEYS.YT_API;

// <p>{ YT_KEY }</p>  // Used this to test corectness of API Key.
const App = () => {
    return (
        <div>

            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));