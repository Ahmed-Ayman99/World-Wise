import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCities } from "../contexts/CitiesContext";
import { BASE_URL } from "../utils/constants";

import Message from "./Message";
import Spinner from "./Spinner";
import Button from "../ui/Button";

const Form = () => {
  const [lat, lng] = useUrlPosition();

  const { createCity } = useCities();
  const navigate = useNavigate();

  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState(new Date());
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!lat && !lng) return;

    (async () => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else 😉"
          );

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(data.countryCode);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    })();
  }, [lat, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cityName || !date) return toast.error("Please fill the form");

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      id: uuidv4(),
      position: { lat, lng },
    };

    createCity(newCity);
    navigate("/app/cities");
  };

  if (isLoading) return <Spinner />;

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />;

  if (error) return <Message message={error} />;

  return (
    <form className="bg-dark2  rounded-[7px] py-5 px-[30px] w-[100%] flex flex-col gap-5 text-light2">
      <div className="flex flex-col gap-[5px] relative">
        <label className="text-base font-semibold" htmlFor="cityName">
          City name
        </label>
        <input
          className=" text-dark0 bg-light3 w-[100%] py-2 px-3 text-base border-none rounded-[5px]  transition-all duration-200 focus:outline-none focus:bg-white"
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className="absolute right-[10px] top-9  text-xl text-dark0">
          {emoji}
        </span>
      </div>

      <div className="flex flex-col gap-[5px] relative">
        <label className="text-base font-semibold" htmlFor="date">
          When did you go to {cityName}?
        </label>

        <DatePicker
          className="text-dark0 bg-light3 w-[100%] py-2 px-3 text-base border-none rounded-[5px]  transition-all duration-200 focus:outline-none focus:bg-white"
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className="flex flex-col gap-[5px] relative">
        <label className="text-base font-semibold" htmlFor="notes">
          Notes about your trip to {cityName}
        </label>
        <textarea
          className="text-dark0 bg-light3 w-[100%] py-2 px-3 text-base border-none rounded-[5px]  transition-all duration-200 focus:outline-none focus:bg-white"
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="flex justify-between">
        <Button onClick={handleSubmit}>Add</Button>
        <Button to="-1"></Button>
      </div>
    </form>
  );
};

export default Form;
