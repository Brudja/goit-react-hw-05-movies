import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/Api';
import { Suspense, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const locState = location?.state?.from?.pathname + location?.state?.from?.search;

  useEffect(() => {
    if (!movieId) return;
    const getById = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };
    getById();
  }, [movieId]);

  return (
    <div>
      <NavLink to={locState??"/"}>Go beack</NavLink>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>
        {movie.original_title} {movie?.release_date?.slice(0,4)}
      </h2>
      <p>User Score: {movie.popularity}%</p>
      <p>
        <span>Overview</span>
        {movie.overview}
      </p>
      <span>Genres</span>
      <ul>
        {movie?.genres?.map(gen => (
          <li key={gen.id}>{gen.name}</li>
        ))}
      </ul>
      <p>Additional informathion</p>
      <ul>
        <li>
          <Link to="cast" state={{from:location?.state?.from??"/"}}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{from:location?.state?.from}}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={null}><Outlet /></Suspense>
    </div>
  );
};

export default MovieDetails
