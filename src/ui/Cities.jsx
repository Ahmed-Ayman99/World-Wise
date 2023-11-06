import { useCities } from "../contexts/CitiesContext";

import Message from "./Message";
import City from "./City";

const Cities = () => {
  const { cities } = useCities();

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className="w-[100%] h-[65vh] list-none overflow-y-auto flex flex-col gap-[14px]">
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default Cities;
