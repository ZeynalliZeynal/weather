import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import Component_r from "./component_r.tsx";
export default function App() {
  return <RouterProvider router={router} />;

}
