/**
 * Created by Michael on 08/04/16.
 */

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Other Libs
import YTSearch from 'youtube-api-search';

// Components
import SearchBar from './components/search_bar';

// Other Imports
import API_KEYS from './other/other_info';
const YT_API_KEY = API_KEYS.YT_KEY;

    // Well, this is stupid - no conditional imports in JS.

    // const fullImport = true;
    // if (fullImport == true) {
    //     import API_KEYS from './other/other_info'; // Import entire dictionary
    //     const YT_KEY = API_KEYS.YT_API;
    // } else {
    //     import { YT_API } from './other/other_info.js'; // Deconstructed version
    //     const YT_KEY = YT_API;
    // }

// Basic Component.
// Produces HTML.
// Insert created HTML into DOM.

// Test Search API
YTSearch({'key': YT_API_KEY, 'term': 'Marilyn Manson'}, function (data) {
    console.log(YT_API_KEY)
    console.log(data);
});
// -----

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));