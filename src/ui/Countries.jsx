import { useCities } from "../contexts/CitiesContext";
import Country from "./Country";
import Message from "./Message";

const Countries = () => {
  const { cities } = useCities();
  const countries = cities.map((city) => {
    return {
      country: city.country,
      emoji: city.emoji,
    };
  });

  if (!countries.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className="list-none w-[100%] h-[65vh] overflow-auto grid grid-cols-2 content-start gap-4">
      {countries.map((country, ind) => (
        <Country country={country} key={ind} />
      ))}
    </ul>
  );
};

export default Countries;
