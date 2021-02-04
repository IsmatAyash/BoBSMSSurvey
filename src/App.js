import React, { useMemo, useState } from "react";
import Survey from "./Survey";
import { DataContext } from "./DataContext";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState({
    isSubmitted: false,
    busName: "",
  });

  const value = useMemo(() => ({ data, setData }), [data, setData]);

  return (
    <DataContext.Provider value={value}>
      <Survey />
    </DataContext.Provider>
  );
}

export default App;
