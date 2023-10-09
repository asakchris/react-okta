import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link id="home-nav-link" to="/">
        Home
      </Link>
      <Link id="protected-nav-link" to="/protected">
        Protected
      </Link>
    </nav>
  );
};

export default Nav;
