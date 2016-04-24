/**
 * Created by Michael on 10/04/16.
 */

import React from 'react';


const VideoDetail = (props) => {
    if (!props.video) {
        return <div>Loading ...</div>
    }
    
    const video = props.video;
    const title = video.snippet.title;
    const description = video.snippet.description;
    const videoID = video.id.videoId;
    // const embedURL = "https://www.youtube.com/embed/" + videoID;  // Regular version
    const embedURL = `https://www.youtube.com/embed/${videoID}`;  // ES6 version
    return (
      <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={embedURL}></iframe>
          </div>
          <div className="details">
              <div>{title}</div>
              <div>{description}</div>
          </div>
      </div>
    );
};

export default VideoDetail;