function YouTube({videoId}) {

  return (
      <div>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-w rite; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </div>
  )
}
export default YouTube