import { Link } from "react-router-dom";
import propTypes from "prop-types";

const NavbarLink = ({ label, path, onClick }) => {
  const handleClick = (e) => {
    onClick?.();
    e.stopPropagation();
  };
  return (
    <li>
      <Link to={path} onClick={handleClick}>
        {label}
      </Link>
    </li>
  );
};

export default NavbarLink;

NavbarLink.propTypes = {
  label: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
