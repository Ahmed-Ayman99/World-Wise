import { createContext, useContext, useEffect, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const currentCities = [
  {
    cityName: "Madrid",
    country: "Spain",
    emoji: "ES",
    date: "2027-07-15T08:22:53.976Z",
    notes: "",
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    id: 17806751,
  },
  {
    cityName: "Berlin",
    country: "Germany",
    emoji: "DE",
    date: "2027-02-12T09:24:11.863Z",
    notes: "Amazing 😃",
    position: {
      lat: 52.53586782505711,
      lng: 13.376933665713324,
    },
    id: 98443197,
  },
  {
    cityName: "Markaz al Qanţarah Sharq",
    country: "Egypt",
    emoji: "EG",
    date: "2023-11-14T19:14:52.715Z",
    notes: "nice",
    id: "028136aa-ca73-4dd8-8d7d-9b26812238b2",
    position: {
      lat: "30.23412359202384",
      lng: "32.87109375000001",
    },
  },
  {
    cityName: "South Slave Region",
    country: "Canada",
    emoji: "CA",
    date: "2023-11-14T19:15:11.865Z",
    notes: "nice city",
    id: "2d8e88b6-3d67-4126-97c3-799062c37653",
    position: {
      lat: "60.845398336292845",
      lng: "-107.92968750000001",
    },
  },
  {
    cityName: "Amerzgane",
    country: "Morocco",
    emoji: "MA",
    date: "2023-11-14T19:16:31.826Z",
    notes: "Amazing City",
    id: "bcf9c03c-cf3a-4d67-a835-c6bf63a8347f",
    position: {
      lat: "30.847083835164838",
      lng: "-7.138261298128635",
    },
  },
  {
    cityName: "Peixoto de Azevedo",
    country: "Brazil",
    emoji: "BR",
    date: "2023-11-14T19:17:07.401Z",
    notes: "Good City",
    id: "e652daf8-f91d-4c06-be4f-182101ba2374",
    position: {
      lat: "-10.324830356017559",
      lng: "-53.21240086366223",
    },
  },
];
const CitiesContext = createContext();

const initialState = {
  cities: [],
  currentCity: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "city/recieved":
      return {
        ...state,
        cities: action.payload,
      };

    case "city/created":
      return {
        ...state,
        // cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        // cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "city/currentCity":
      return {
        ...state,
        currentCity: action.payload,
      };

    default:
      return state;
  }
};

const CitiesProvider = ({ children }) => {
  const [{ cities, currentCity }, dispatch] = useReducer(reducer, initialState);
  const [localCities, setLocalCities] = useLocalStorage(
    currentCities,
    "cities"
  );

  const createCity = (city) => {
    setLocalCities((prev) => [...prev, city]);
    dispatch({ type: "city/created", payload: city });
  };

  const getCurrentCity = (city) => {
    dispatch({ type: "city/currentCity", payload: city });
  };

  const deleteCity = (id) => {
    setLocalCities((prev) => prev.filter((item) => item.id !== id));
    dispatch({ type: "city/deleted" });
  };

  useEffect(() => {
    dispatch({ type: "city/recieved", payload: localCities });

    //
  }, [localCities]);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        currentCity,
        createCity,
        deleteCity,
        getCurrentCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
};

export { CitiesProvider, useCities };
