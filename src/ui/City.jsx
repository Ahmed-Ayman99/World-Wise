import { NavLink } from "react-router-dom";

import { useCities } from "../contexts/CitiesContext";
import { formateDate } from "../utils/helpers";

const City = ({ city }) => {
  const { deleteCity, currentCity, getCurrentCity } = useCities();
  const isCurrent = currentCity.id === city.id;

  const handleCurrentCity = () => getCurrentCity(city);

  console.log(city.emoji);

  return (
    <li onClick={handleCurrentCity}>
      <NavLink
        to={`/app/cities/${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={`flex gap-4 items-center bg-dark2 rounded-[7px] py-[10px] px-5 border-l-brand2 border-l-[4px] border-solid cursor-pointer no-underline  text-light2 ${
          isCurrent ? "border-[1px] border-brand2" : ""
        }`}
      >
        <img
          className="w-6 h-4"
          src={`https://flagcdn.com/${city.emoji.toLowerCase()}.svg`}
          alt={`Flag of ${city.emoji}`}
        />
        <span className="text-[17px] font-semibold mr-auto">
          {city.cityName}
        </span>
        <time className="text-base">{formateDate(city.date)}</time>

        <button
          onClick={(e) => {
            e.preventDefault();
            deleteCity(city.id);
          }}
          className="bg-red-500 rounded-[50%] w-5 h-5 flex items-center justify-center text-white text-base font-semibold cursor-pointer"
        >
          &times;
        </button>
      </NavLink>
    </li>
  );
};

export default City;
