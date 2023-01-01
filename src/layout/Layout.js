import { NavLink } from "react-router-dom";
import "../App.css";

function CustomNavLink({ to, ...prop }) {
  let activeStyle = {
    backgroundColor: "green",
    textDecoration: "none",
    padding: "5px",
    borderRadius: "5px",
  };

  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : null)}
      to={to}
      end
      {...prop}
    />
  );
}

function Layout({ linkColor, style }) {

  let classes = `${linkColor} ${style}`
  
  return (
    <>
      <nav className={classes}>
        <CustomNavLink to="/">About</CustomNavLink>
        <CustomNavLink to="/repos">Repos</CustomNavLink>
      </nav>
    </>
  );
}

export default Layout;
