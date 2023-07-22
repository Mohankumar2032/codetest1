import "./styles.css";
import Toolbar from "./Components/Toolbar";
import HomePage from "./Pages/HomePage";
import { createContext, useReducer } from "react";
import { AppReducer, initialState } from "./DataStoreContext/AppContext";
export const AppContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <body className="App">
        <Toolbar />
        <HomePage />
      </body>
    </AppContext.Provider>
  );
}
