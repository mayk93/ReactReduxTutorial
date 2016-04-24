/**
 * Created by Michael on 08/04/16.
 */


// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Other Libs
import YTSearch from 'youtube-api-search';
import $ from 'jquery';

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


// Location search using JQuery
var location = 'World';
$.getJSON('//ip-api.com/json?callback=?', function(data) {
    location = data.country;
    ReactDOM.render(<App />, document.querySelector('.container'));
});

// Fetch version 0 -- Not working. Reverting to JQuery.
    // fetch('http://ip-api.com/json')
    //   .then(function(response) {
    //     return response.json()
    //   }).then(function(json) {
    //     const location = json.country;
    //     console.log('Got location: ', location);
    //     return location;
    //     // ReactDOM.render(<App />, document.querySelector('.container'));
    //   }).catch(function(ex) {
    //     console.log('No location fetched. Defaulting to World. ', ex)
    //     const location = 'World';
    //     return location;
    //     // ReactDOM.render(<App />, document.querySelector('.container'));
    //   }).then(function (location) {
    //     ReactDOM.render(<App />, document.querySelector('.container'));
    // });

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch(location);
    }

    videoSearch (term) {
        YTSearch({'key': YT_API_KEY, 'term': term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // console.log("[VS] Searching.")
        });
    }

    render ()  {
        return (
            <div>
                <p>Location: { location }</p>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}