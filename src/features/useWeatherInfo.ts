import { getWeather } from "@/services/apiWeather";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

export const useWeather = () => {
  const [searchParams] = useSearchParams();

  const { data: weather, isLoading } = useQuery({
    queryKey: ["weather", searchParams.get("place")],
    queryFn: () => getWeather(searchParams.get("place") || "Azerbaijan"),
  });
  return { weather, isLoading };
};
