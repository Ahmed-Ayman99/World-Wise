import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img className="h-[52px]" src="/logo.png" alt="WorldWise logo" />
    </Link>
  );
};

export default Logo;
