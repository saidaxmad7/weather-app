import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

export type Units = {
  temp: "c" | "f";
  wind: "kmh" | "mph";
  precip: "mm" | "in";
};

function Layout() {
  const [city, setCity] = useState("Berlin");
  const [units, setUnits] = useState<Units>({
    temp: "c",
    wind: "kmh",
    precip: "mm",
  });

  return (
    <>
      <Header units={units} onChangeUnits={setUnits} />
      <Main city={city} onSearch={setCity} units={units} />
    </>
  );
}

export default Layout;
