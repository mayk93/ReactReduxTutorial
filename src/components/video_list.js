/**
 * Created by Michael on 10/04/16.
 */

import React from 'react';

const VideoList = (props) => {
    return (
      <ul className="col-md-4 list group">
          {props.videos.length}
      </ul>
    );
};

export default VideoList;