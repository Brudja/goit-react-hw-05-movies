import React from 'react';
import { useState, useEffect } from 'react';
import { getMovie } from 'services/Api';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import css from './Movies.module.css';


function Movies() {
  const [movie, setMovie] = useState(null);
  const [params, setParams] = useSearchParams();
  let query = params.get("query") || ""
  const [searchValue, setSearchValue] = useState(query);
  const location = useLocation()

  
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
    setParams({query:searchValue});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={searchValue} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {movie && (
        <ul>
          {movie?.map(item => (
            <li key={item.id} >
              <Link to={`${item.id}`} state={{from:location}} className={css.movieLink} id={item.id}>
                {item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}



export default Movies

 // const search = searchParams.get("search")??""