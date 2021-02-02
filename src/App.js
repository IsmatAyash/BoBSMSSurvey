import React, { useMemo, useState } from "react";
import Survey from "./Survey";
import "./App.css";
import { DataContext } from "./DataContext";

function App() {
  const [data, setData] = useState({});

  const value = useMemo(() => ({ data, setData }), [data, setData]);

  return (
    <DataContext.Provider value={value}>
      <Survey />
    </DataContext.Provider>
  );
}

export default App;
