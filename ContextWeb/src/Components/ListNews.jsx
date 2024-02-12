import React from 'react'

const ListNews = (props) => {
  return (
    <>
        <p>{props.results.title}</p>
        <img
            src={props.results.media.media-metadata.url}
            alt={props.results.media.caption}
        />
    </>
  )
}

export default ListNews