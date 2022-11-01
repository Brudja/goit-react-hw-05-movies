import { NavLink } from 'react-router-dom';
export const Header = () => {
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  </header>;
};
