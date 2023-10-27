import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="transaction-title">
          <button className="navbar-button">
            <Link className="home-link" to="/">
              {" "}
              <em>Spend Wisely </em>{" "}
            </Link>
          </button>
          <button className="navbar-button">
            <Link className="navbar-new-transaction" to="/add">
              {" "}
              ADD{" "}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
