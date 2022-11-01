import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/Api';
import css from './Home.module.css';

export const Home = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getTrending();
      setMovie(data.results);
    };
    getData();
  }, []);
  return (
    <>
      <ul className={css.homeList}>
        {movie?.map(item => (
          <li key={item.id}>
            <NavLink to={`/movies/${item.id}`} className={css.homeLink}>
              {item.original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};