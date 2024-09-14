import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaCloudSun, FaCloudSunRain } from "react-icons/fa6";

export default function HomeTop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTabs = (value: string) => {
    searchParams.set("range", value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    searchParams.set("range", "today");
    setSearchParams(searchParams);
  }, []);

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-[1fr_400px] gap-7">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  "text-gray-900 hover:text-foreground h-10 px-3 border rounded-lg hover:bg-gray-200",
                  {
                    "text-foreground bg-gray-100":
                      searchParams.get("range") === "today",
                  }
                )}
                onClick={() => handleTabs("today")}
              >
                Today
              </button>
              <button
                className={cn(
                  "text-gray-900 hover:text-foreground h-10 px-3 border rounded-lg hover:bg-gray-200",
                  {
                    "text-foreground bg-gray-100":
                      searchParams.get("range") === "next-7-days",
                  }
                )}
                onClick={() => handleTabs("next-7-days")}
              >
                Next 7 days
              </button>
              <button
                className={cn(
                  "text-gray-900 hover:text-foreground h-10 px-3 border rounded-lg hover:bg-gray-200",
                  {
                    "text-foreground bg-gray-100":
                      searchParams.get("range") === "next-month",
                  }
                )}
                onClick={() => handleTabs("next-month")}
              >
                Next month
              </button>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col rounded-xl border overflow-hidden h-auto">
                <div className="flex items-center justify-between p-4 border-b bg-blue-100">
                  <span>Friday</span>
                  <span>
                    {new Intl.DateTimeFormat("en", {
                      timeStyle: "short",
                    }).format(new Date())}
                  </span>
                </div>
                <div className="flex flex-col p-4 bg-blue-200 grow gap-3">
                  <div className="grid grid-cols-2 items-center">
                    <div className="text-3xl font-medium">16&deg;</div>
                    <FaCloudSun className="size-16 text-amber-900 place-self-end" />
                  </div>
                  <div className="grid grid-cols-2 text-xs gap-6">
                    <ul className="flex flex-col gap-2">
                      <li>
                        Real Feel <b>18&deg;</b>
                      </li>
                      <li>
                        Wind N-E. <b>6-7km/h</b>
                      </li>
                      <li>
                        Pressure <b>100MB</b>
                      </li>
                      <li>
                        Humidity <b>51%</b>
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-2 justify-center text-end">
                      <li>
                        Sunrise <b>5:30AM</b>
                      </li>
                      <li>
                        Sunset <b>6:45</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="flex justify-between grow">
                <li className="flex flex-col border rounded-3xl bg-gray-alpha-100 w-24 text-center">
                  <span className="uppercase border-b p-4">sat</span>
                  <div className="flex flex-col p-4 items-center justify-evenly h-full">
                    <FaCloudSunRain className="size-10" />
                    <span className="text-3xl font-medium">10&deg;</span>
                  </div>
                </li>
                <li className="flex flex-col border rounded-3xl bg-gray-alpha-100 w-24 text-center">
                  <span className="uppercase border-b p-4">sat</span>
                  <div className="flex flex-col p-4 items-center justify-evenly h-full">
                    <FaCloudSunRain className="size-10" />
                    <span className="text-3xl font-medium">10&deg;</span>
                  </div>
                </li>
                <li className="flex flex-col border rounded-3xl bg-gray-alpha-100 w-24 text-center">
                  <span className="uppercase border-b p-4">sat</span>
                  <div className="flex flex-col p-4 items-center justify-evenly h-full">
                    <FaCloudSunRain className="size-10" />
                    <span className="text-3xl font-medium">10&deg;</span>
                  </div>
                </li>
                <li className="flex flex-col border rounded-3xl bg-gray-alpha-100 w-24 text-center">
                  <span className="uppercase border-b p-4">sat</span>
                  <div className="flex flex-col p-4 items-center justify-evenly h-full">
                    <FaCloudSunRain className="size-10" />
                    <span className="text-3xl font-medium">10&deg;</span>
                  </div>
                </li>
                <li className="flex flex-col border rounded-3xl bg-gray-alpha-100 w-24 text-center">
                  <span className="uppercase border-b p-4">sat</span>
                  <div className="flex flex-col p-4 items-center justify-evenly h-full">
                    <FaCloudSunRain className="size-10" />
                    <span className="text-3xl font-medium">10&deg;</span>
                  </div>
                </li>
                <li className="flex flex-col border rounded-3xl bg-gray-alpha-100 w-24 text-center">
                  <span className="uppercase border-b p-4">sat</span>
                  <div className="flex flex-col p-4 items-center justify-evenly h-full">
                    <FaCloudSunRain className="size-10" />
                    <span className="text-3xl font-medium">10&deg;</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-medium">Chance Of Rain</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
