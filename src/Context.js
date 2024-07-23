import { createContext } from "react";
import "./App.css";
import Component1 from "./Component1";

export const UserContext = createContext();

function Context() {
  const userName = "Ram";
  return (
    <UserContext.Provider value={userName}>
      <h1>Hi... Good Evening...! {userName}</h1>

      <Component1 />
    </UserContext.Provider>
  );
}

export default Context;
