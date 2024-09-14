import { useSearchParams } from "react-router-dom";

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
              <div className="grid grid-cols-2">
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
              <div className="border rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
