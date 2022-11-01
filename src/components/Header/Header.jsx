import { NavLink } from 'react-router-dom';
import css from "./Header.module.css"

export const Header = () => {

  const activeClassNameNav = ({ isActive }) => (isActive ? css.active : css.link);

  return(
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/" end className={activeClassNameNav}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" end className={activeClassNameNav}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  </header>);
};
