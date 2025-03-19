import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="LMS Logo" />
        <h1>LMS - Learning Management System</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
      </nav>
    </>
  );
};

export default Header;
