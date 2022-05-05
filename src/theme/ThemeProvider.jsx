import { createContext, useContext, useReducer } from "react";
import { useImmerReducer } from "use-immer";
import { theme as themes } from "./index";

export const ThemeModeToggle = createContext(null);

export default function ToggleModeProvider({ children }) {
  return <ThemeModeToggle.Provider>{children}</ThemeModeToggle.Provider>;
}
