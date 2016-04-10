/**
 * Created by Michael on 08/04/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import { YT_API } from './other/other_info.js';

// Basic Component.
// Produces HTML.
// Insert created HTML into DOM.

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));