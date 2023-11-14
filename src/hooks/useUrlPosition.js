import { useSearchParams } from "react-router-dom";

export const useUrlPosition = () => {
  const [searchParams] = useSearchParams();

  const lat = Object.fromEntries(searchParams).lat;
  const lng = Object.fromEntries(searchParams).lng;

  return [lat, lng];
};
