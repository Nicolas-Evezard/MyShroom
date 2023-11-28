import React, { useEffect } from "react";

import { fetchWeatherData } from "./tools/SearchWeatherData";
import Home from "./components/Home/Home";


const App = () => {

  return (
    <div className="h-screen w-screen bg-base-100">
      <Home />
    </div>
  );
};

export default App;
