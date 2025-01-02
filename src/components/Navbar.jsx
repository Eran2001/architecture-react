import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="z-1 sticky-navbar flex justify-around items-center px-8 py-4 text-white">
    <h1 className="text-2xl font-bold">
      <Link to="/">Architect</Link>
    </h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
