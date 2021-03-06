/**
 * Created by Michael on 10/04/16.
 */

import React from 'react';
import VideoListItem from './video_item';

const VideoList = (props) => {
    var onVideoSelect = props.onVideoSelect;
    const videoItems = props.videos.map((video) => {
       return (
           <VideoListItem
               onVideoSelect={onVideoSelect}
               key={video.etag}
               video={video} />
       );
    });
    return (
      <ul className="col-md-4 list group">
          { videoItems }
      </ul>
    );
};

export default VideoList;