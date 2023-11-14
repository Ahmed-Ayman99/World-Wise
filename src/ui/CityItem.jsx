import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const City = () => {
  const { id } = useParams();
  const { cities } = useCities();

  const currentCity = cities.filter((city) => city.id.toString() === id)[0];
  const { cityName, emoji, date, notes } = currentCity;
  if (!currentCity.id) return <p>There is no city with this #{id} Id</p>;

  return (
    <div className="text-light2 py-5 px-[30px] max-h-[70%] bg-dark2 rounded=[7px] overflow-auto w-[100%] flex flex-col gap-5">
      <div className="flex flex-col gap-[5px]">
        <h6 className="uppercase text-[11px] font-black text-light1">
          City name
        </h6>

        <h3 className="flex items-center gap-[10px] text-[22px]">
          <span className="text-[32px] leading-[1]">{emoji}</span> {cityName}
        </h3>
      </div>

      <div className="flex flex-col gap-[5px]">
        <h6 className="uppercase text-[11px] font-black text-light1">
          You went to {cityName} on
        </h6>

        <p className="text-lg font-semibold">{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className="flex flex-col gap-[5px]">
          <h6 className="uppercase text-[11px] font-black text-light1">
            Your notes
          </h6>

          <p className="text-lg font-semibold">{notes}</p>
        </div>
      )}

      <div className="flex flex-col gap-[5px]">
        <h6 className="uppercase text-[11px] font-black text-light1">
          Learn more
        </h6>

        <a
          className="text-base text-brand1 underline underline-offset-4"
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button to="-1">Back</Button>
      </div>
    </div>
  );
};

export default City;
