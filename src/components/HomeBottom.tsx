import Component_r from "@/component_r";
import { useSearchParams } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Map from "./Map";

export default function HomeBottom() {
  const [searchParams] = useSearchParams();
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-[1fr_400px] gap-7">
          <div className="flex flex-col gap-6">
            <h5 className="text-xl font-medium capitalize">
              {searchParams.get("range")} | Overview
            </h5>
            <div className="grid grid-cols-[1fr_400px] gap-10">
              <div className="grid grid-cols-2 gap-10">
                <div className="rounded-2xl bg-gray-alpha-100 px-4 py-5">
                  <h6 className=""></h6>
                </div>
                <div className="rounded-2xl bg-gray-alpha-100 px-4 py-5">
                  <h6 className=""></h6>
                </div>
                <div className="rounded-2xl bg-gray-alpha-100 px-4 py-5">
                  <h6 className=""></h6>
                </div>
                <div className="rounded-2xl bg-gray-alpha-100 px-4 py-5">
                  <h6 className=""></h6>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 p-4 border rounded-2xl">
                <p className="text-xl">Explore global map</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="h-10 text-gray-400 hover:text-background-100 rounded-lg border hover:bg-button-bg-hover px-3 bg-foreground">
                      Explore
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <Map />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h6 className="font-medium text-xl">Other Cities</h6>
              <button className="text-gray-900 hover:text-foreground">
                See all
              </button>
            </div>
            <Component_r />
          </div>
        </div>
      </div>
    </section>
  );
}
