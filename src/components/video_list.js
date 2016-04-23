/**
 * Created by Michael on 10/04/16.
 */

import React from 'react';
import VideoListItem from './video_list';

const VideoList = (props) => {
    // const videoItems = props.videos.map((video) => {
    //    return <VideoListItem video={video} />
    // });
    return (
      <ul className="col-md-4 list group">
          // {videoItems}
          {props.videos.length}
      </ul>
    );
};

export default VideoList;