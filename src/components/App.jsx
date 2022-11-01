import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import {Cast} from "./MovieDetails/Cast/Cast"


export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>

        {/* // <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
