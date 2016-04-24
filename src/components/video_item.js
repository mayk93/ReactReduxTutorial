/**
 * Created by Michael on 10/04/16.
 */

import React from 'react';


/*
Instead of (props) and video = props.video, we can do ({video})
This means we get the parameter props, and this props object has an attribute called video, and we use this in
our scope.
I won't use it, because I think it's confusing. It's clearer to use props.video. Explicit is better than implicit.
*/
const VideoListItem = (props) => {
    const video = props.video;
    const imageURL = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    var onVideoSelect = props.onVideoSelect;

    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageURL} />
            </div>

            <div className="media-body">
                <div className="media-heading">
                    {title}
                </div>
            </div>
        </div>
      </li>
    );
};

export default VideoListItem;