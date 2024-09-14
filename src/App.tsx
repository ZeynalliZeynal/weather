import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { Theme } from "./context/ThemeContext.tsx";

export default function App() {
  return (
    <Theme>
      <RouterProvider router={router} />;
    </Theme>
  );
}
