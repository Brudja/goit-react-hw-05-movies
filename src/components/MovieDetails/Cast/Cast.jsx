import { useEffect, useState } from 'react';
import { getCastById } from '../../../services/Api';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [casts, setCasts] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      const data = await getCastById(movieId);
      setCasts(data.cast);
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {casts && (
        <ul className={css.list}>
          {casts.map(item => (
            <li key={item.id} className={css.item}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
                }
                alt={item.name}
                width="60"
              />
              <p className={css.text}>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};


export default Cast