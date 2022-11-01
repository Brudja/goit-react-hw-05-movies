import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

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
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};


