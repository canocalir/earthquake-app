import navbarStyle from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={navbarStyle.navbar}>
      <h1 className={navbarStyle.navbarHeading}>EarthQuake Monitor</h1>
    </div>
  );
};

export default Navbar;
