import React from 'react';
import { useState, useEffect } from 'react';
import { getMovie } from 'services/Api';
import { Link, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';


export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState(null);
  const [query, setQuery] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await getMovie(query);
      setMovie(data.results);
    };
    getData();
  }, [query]);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getFormData(searchValue);
    setSearchParams({query:searchValue})
  };

  const getFormData = data => {
    setQuery(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {movie && (
        <ul>
          {movie?.map(item => (
            <li key={item.id} >
              <Link to={`${item.id}`} className={css.movieLink} id={item.id}>
                {item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
