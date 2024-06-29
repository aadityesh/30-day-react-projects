import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("NAME");
  const [date, setDate] = useState("DD-MM-YYYY");

  return (
    <>
      <div className="flex flex-col justify-between h-[100vh]">
        <div className="flex flex-col items-center justify-around h-[60vh]">
          <h1 className="text-8xl">{name.length > 0 ? name : "NAME"}</h1>
          <h3 className="text-6xl">{date.length > 0 ? date : "DD-MM-YYYY"} </h3>
          <p className="w-[500px] mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatum praesentium error reprehenderit, tempora
            debitis laborum. Culpa facilis assumenda voluptatem molestiae
            reprehenderit nesciunt, est ab aliquam quod praesentium quibusdam
            cum.
          </p>
        </div>
        <div className="flex justify-around items-end h-[100%] mb-10">
          <input
            className="border-black border-[3px]"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-black border-[3px]"
            type="date"
            placeholder="DOB"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
