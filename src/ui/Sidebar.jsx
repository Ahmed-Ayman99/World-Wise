import { NavLink, Outlet } from "react-router-dom";

import Logo from "./Logo";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="bg-dark1 basis-[560px]  flex flex-col items-center pl-[30px] pt-[50px] pr-[35px] pb-[50px] h-[calc(100vh-48px)]">
      <Logo />

      <nav className="mt-[30px] mb-5">
        <ul className="flex list-none bg-dark2 rounded-[7px]">
          <li>
            <NavLink
              className="sidebarnav block text-light2 rounded-[5px] py-[5px] px-5 font-bold text-sm uppercase no-underline"
              to="cities"
            >
              cities
            </NavLink>
          </li>
          <li>
            <NavLink
              className="sidebarnav block text-light2 rounded-[5px] py-[5px] px-5 font-bold text-sm uppercase no-underline"
              to="countries"
            >
              countries
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer className="mt-auto" />
    </div>
  );
};

export default Sidebar;
