import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import MoviePoster from './MoviePoster'; // Assume MoviePoster component is defined elsewhere
import VideoPlayer from './videoPlayer';


const HomePage = (props) => {




    const [playMovie, setPlayMovie] = useState(null);

    const [webSeries, setWebSeries] = useState([]);
    const [videoSong, setVideoSong] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [shortFilm, setShortFilm] = useState([]);
    const [documentary, setDocumentary] = useState([]);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)


    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
          const myHeaders = new Headers();
          myHeaders.append("accept", "application/json");
          myHeaders.append("projectID", "tsd77ltb68ta");
    
          const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          };
    
          try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=200", requestOptions);
            const result = await response.json(); // Parse JSON response

            const webSeries = result.data.filter(movie => movie.type === "web series");
            const videoSong = result.data.filter(movie => movie.type === "video song");
            const tvShows = result.data.filter(movie => movie.type === "tv show");
            const trailer = result.data.filter(movie => movie.type === "trailer");
            const shortFilm = result.data.filter(movie => movie.type === "short film");
            const documentary = result.data.filter(movie => movie.type === "documentary");
            const movies = result.data.filter(movie => movie.type === "movie");
            
            
            setWebSeries(webSeries);
            setVideoSong(videoSong) ;
            setTvShows(tvShows);
            setTrailer(trailer);
            setShortFilm(shortFilm);
            setDocumentary(documentary);
            setMovies(movies);
            setLoading(false)


            console.log(result);
          } catch (error) {
            console.error(error);
            setLoading(false)
          }
        };
    
        fetchData();
      }, []);

      const handleMovieClick = (url)=>{
        props.loginStatus ? setPlayMovie(url) : navigate("/home/signin")
      }
      if (loading) {
        return <div className="container mx-auto pt-[80px]">Loading...</div>; 
    }

    return (
        <div className="container mx-auto pt-[80px]">
          {playMovie? (<VideoPlayer videoUrl={playMovie} onClose={()=>setPlayMovie(null)}/>) : 
          
            <>

            <section className="my-8 mt-0">
                <h2 className="text-2xl font-bold mb-4">Web Series</h2>
                <div className="flex justify-around overflow-x-auto">
                    {webSeries.map(movie => (
                        <MoviePoster key={movie.id} title={movie.title} imageUrl={movie.thumbnail} videoUrl = {movie.video_url} keyWords = {movie.keywords.slice(0,2).join(" . ")}  loginStatus = {props.loginStatus} onClick = {handleMovieClick}/>
                    ))}
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Short film</h2>
                <div className="flex justify-around overflow-x-auto">
                    {shortFilm.map(movie => (
                        <MoviePoster key={movie.id} title={movie.title} imageUrl={movie.thumbnail} videoUrl = {movie.video_url} keyWords = {movie.keywords.slice(0,2).join(" . ")} loginStatus = {props.loginStatus} onClick = {handleMovieClick}/>
                    ))}
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">TV Shows</h2>
                <div className="flex justify-around overflow-x-auto">
                    {tvShows.map(movie => (
                        <MoviePoster key={movie.id} title={movie.title} imageUrl={movie.thumbnail} videoUrl = {movie.video_url} keyWords = {movie.keywords.slice(0,2).join(" . ")} loginStatus = {props.loginStatus} onClick = {handleMovieClick}/>
                    ))}
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Documentary</h2>
                <div className="flex justify-around overflow-x-auto">
                    {documentary.map(movie => (
                        <MoviePoster key={movie.id} title={movie.title} imageUrl={movie.thumbnail} videoUrl = {movie.video_url} keyWords = {movie.keywords.slice(0,2).join(" . ")} loginStatus = {props.loginStatus} onClick = {handleMovieClick}/>
                    ))}
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Movies</h2>
                <div className="flex justify-around overflow-x-auto">
                    {movies.map(movie => (
                        <MoviePoster key={movie.id} title={movie.title} imageUrl={movie.thumbnail} videoUrl = {movie.video_url} keyWords = {movie.keywords.slice(0,2).join(" . ")} loginStatus = {props.loginStatus} onClick = {handleMovieClick}/>
                    ))}
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Trailer</h2>
                <div className="flex justify-around overflow-x-auto">
                    {trailer.map(movie => (
                        <MoviePoster key={movie.id} title={movie.title} imageUrl={movie.thumbnail} videoUrl = {movie.video_url} keyWords = {movie.keywords.slice(0,2).join(" . ")} loginStatus = {props.loginStatus} onClick = {handleMovieClick}/>
                    ))}
                </div>
            </section>
            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Video Songs</h2>
                <div className="flex justify-around overflow-x-auto">
                    {videoSong.map(movie => (
                        <MoviePoster key={movie.id} title={movie.title} imageUrl={movie.thumbnail} videoUrl = {movie.video_url} keyWords = {movie.keywords.slice(0,2).join(" . ")} loginStatus = {props.loginStatus} onClick = {handleMovieClick}/>
                    ))}
                </div>
            </section>

            
            </>
}

        </div>
    );
};

export default HomePage;
