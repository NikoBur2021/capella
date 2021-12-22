import {useEffect, useRef, useState} from "react";

function YouTube({videoId}) {
    const [iframeHeight,setIframeHeight] = useState(100)
    const iframeRef = useRef(null)
    useEffect(()=>{
        let height = iframeRef.current ? iframeRef.current.offsetWidth*9/16 :0
        height = height > 0 && height <= 150 ? (height * 1.5): height
        height = height > 0 && height <= 150 ? (height * 1.5): height
        setIframeHeight(height)
    })

  return (
      <div >
        <iframe ref={iframeRef} width="100%" height={iframeHeight} src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-w rite; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </div>
  )
}
export default YouTube