import { NavLink } from "react-router-dom";

import Button from "./Button";

const MainNav = () => {
  return (
    <nav>
      <ul className="list-none flex items-center gap-10">
        <li>
          <NavLink
            to="/PRICING"
            className="no-underline text-lg font-semibold uppercase text-light2 "
          >
            PRICING
          </NavLink>
        </li>

        <li>
          <NavLink
            to="product"
            className="no-underline text-lg font-semibold uppercase text-light2"
          >
            Product
          </NavLink>
        </li>

        <li>
          <Button to="login">Login</Button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
