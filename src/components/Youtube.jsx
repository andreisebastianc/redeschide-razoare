"use client";

import YouTube from "react-youtube";

export default function Youtube() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };
    return <YouTube videoId="KmWa3HQujVg" />
}
