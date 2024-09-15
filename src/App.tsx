import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { Theme } from "./context/ThemeContext.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <RouterProvider router={router} />
        <ReactQueryDevtools position="bottom-left" />
      </Theme>
    </QueryClientProvider>
  );
}
