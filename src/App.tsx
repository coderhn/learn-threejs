import { useEffect } from "react";
import "./App.css";
import { init } from "./init";

const App = () => {
  useEffect(() => {
    init();
  }, []);
  return <></>;
};

export default App;