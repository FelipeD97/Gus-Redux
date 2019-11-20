import React, { useReducer } from "react";
import Activity from "./components/activity";
import reducer from "./context/reducer"

import "./App.css";
import "bulma/css/bulma.css";

import { StateProvider } from "./context";
// StateProvider takes in object and passes it down to children as a prop 

function App() {
  const initialState = {
    name: "Gus",
    activity: "purring"
  }

  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <Activity />
      </StateProvider>
      
    </div>

  )
  
}

export default App;