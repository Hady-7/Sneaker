import { NavLink } from "react-router-dom";
import { SiTaichilang } from "react-icons/si";
import { GrSearch } from "react-icons/gr";
import "./Header.css";

export const Header = () => {
  const getActiveStyle = ({ isActive }) => {
    return { color: isActive ? "white" : "" };
  };

  return (
    <nav>
      <div className="nav-logo-home-button">
        <NavLink style={getActiveStyle} to="/">
          <SiTaichilang />
          <span className="brand-name">DadSneakers</span>
        </NavLink>
      </div>

      <div className="nav-input-search">
        <input placeholder="Search" />
        <button>
          <GrSearch />
        </button>
      </div>

      <div className="nav-link-container">
        <NavLink style={getActiveStyle} to="/product-listing">
          Products
        </NavLink>
      </div>
    </nav>
  );
};
