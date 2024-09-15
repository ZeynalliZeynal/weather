import { getPlace } from "@/services/apiNominant";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

export const usePlace = () => {
  const [searchParams] = useSearchParams();

  const latlng = searchParams.get("latlng");
  const [lat, lng] = latlng ? latlng.split(",") : [];

  const { data: place, isLoading } = useQuery({
    queryKey: ["place", [lat, lng]],
    queryFn: () => getPlace({ lat, lng }),
    enabled: !!lat && !!lng,
  });

  return { place, isLoading };
};
