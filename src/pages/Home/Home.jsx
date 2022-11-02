import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/Api';
import css from './Home.module.css';

const Home = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation()

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
            <NavLink to={`/movies/${item.id}`} state={{from:location}} className={css.homeLink}>
              {item.original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home