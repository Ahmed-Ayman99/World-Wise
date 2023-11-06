import { createContext, useContext, useReducer } from "react";

const localCities = [
  {
    cityName: "Lisbon",
    country: "Portugal",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
    position: {
      lat: 38.727881642324164,
      lng: -9.140900099907554,
    },
    id: 73930385,
  },
  {
    cityName: "Madrid",
    country: "Spain",
    emoji: "🇪🇸",
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
    emoji: "🇩🇪",
    date: "2027-02-12T09:24:11.863Z",
    notes: "Amazing 😃",
    position: {
      lat: 52.53586782505711,
      lng: 13.376933665713324,
    },
    id: 98443197,
  },
  {
    cityName: "Nijar",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2023-04-03T07:47:59.202Z",
    notes: "",
    position: {
      lat: "36.967508314568164",
      lng: "-2.13128394200588",
    },
    id: 98443198,
  },
];

const CitiesContext = createContext();

const initialState = {
  cities: localCities,
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "city/created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
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
}

function CitiesProvider({ children }) {
  const [{ cities, currentCity }, dispatch] = useReducer(reducer, initialState);

  const createCity = (city) =>
    dispatch({ type: "city/created", payload: city });

  const getCurrentCity = (city) =>
    dispatch({ type: "city/currentCity", payload: city });
  const deleteCity = (id) => dispatch({ type: "city/deleted", payload: id });

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
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
