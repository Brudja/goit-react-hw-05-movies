import { Routes, Route } from "react-router-dom";
import {Header} from "./Header/Header"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    ><Header/>
      <Routes>
      {/* <Route path="/" element ={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:moveId" element={<MovieDetails/>}/>
      <Route path="/movies/:moveId/cast" element={<Cast/>}/>
      <Route path="/movies/:moveId/reviews" element={<Reviews/>}/>
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </div>
  );
};
