import React from 'react';

const MoviePoster = (props) => {
    return (
        <>
        <div className="flex-shrink-0 mr-4" onClick={()=> props.handleMoviePlay(props.videoUrl)} style={{ maxWidth: '200px' }}>
            <img src={props.imageUrl} alt={props.title} style={{ maxWidth: '200px', height: '200px' }} className="w-full h-auto rounded-lg shadow-lg" />
            <p className="mt-2 text-lg font-medium">{props.title}</p>
        </div>
        </>
    );
};

export default MoviePoster;
