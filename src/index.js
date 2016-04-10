/**
 * Created by Michael on 08/04/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Basic Component.
// Produces HTML.
// Insert created HTML into DOM.

const App = function () {
    return <div>Hello!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));