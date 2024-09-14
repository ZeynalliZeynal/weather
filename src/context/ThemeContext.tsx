import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Themes = "dark" | "light";

interface ThemeContext {
  theme: Themes;
  changeTheme: (theme: Themes) => void;
}

const ThemeContext = createContext<ThemeContext | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Context is outside of the provider");
  return context;
};

export const Theme = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Themes>("dark");

  const changeTheme = (theme: Themes) => {
    setTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(JSON.parse(localStorage.getItem("theme") as string));
    }
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      if (!document.documentElement.className.includes("dark"))
        document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
