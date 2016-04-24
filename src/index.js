/**
 * Created by Michael on 08/04/16.
 */

// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Other Libs
import YTSearch from 'youtube-api-search';
import ip from 'ip';

// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
    // YTSearch({'key': YT_API_KEY, 'term': 'Marilyn Manson'}, function (data) {
    //     console.log(YT_API_KEY)
    //     console.log(data);
    // });
// -----

// Old, functional App component. Refactored as Class component.
    // const App = () => {
    //     return (
    //         <div>
    //             <SearchBar />
    //         </div>
    //     );
    // };

const public_ip = ip.address();

class App extends Component {
    constructor (props) {
        super(props);
        this.state = { 'videos': [] };

        YTSearch({'key': YT_API_KEY, 'term': public_ip}, (videos) => {
            this.setState({ videos });
        });
    }

    render ()  {
        return (
            <div>
                <p>This should be public IP: { public_ip }</p>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));