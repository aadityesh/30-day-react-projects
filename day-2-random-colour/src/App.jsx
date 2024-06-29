import { useState } from "react";

// import "./App.css";

function handleColours() {
  const colors = [
    "red",
    "green",
    "blue",
    "purple",
    "lavender",
    "pink",
    "yellow",
    "peach",
  ];
  const min = 0;
  const max = colors.length;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);

  return colors[random];
}

function App() {
  const [count, setCount] = useState(0);
  const color = "red";
  return (
    <>
      <div
        className="flex flex-col justify-center items-center h-[100vh] w-[100vw]"
        style={{ background: handleColours() }}
      >
        <h1 className="text-8xl" style={{ background: handleColours() }}>
          Hello Colour
        </h1>
        <div className="flex justify-center gap-4 py-[150px]">
          <button
            className="w-[200px] border border-black rounded "
            style={{ background: handleColours() }}
            onClick={handleColours}
          >
            One
          </button>
          <button
            className=" h-[50px] w-[200px] border border-black rounded "
            style={{ background: handleColours() }}
            onClick={handleColours}
          >
            Two
          </button>
          <button
            className=" h-[50px] w-[200px] border border-black rounded "
            style={{ background: handleColours() }}
            onClick={handleColours}
          >
            Three
          </button>
          <button
            className=" h-[50px] w-[200px] border border-black rounded "
            style={{ background: handleColours() }}
            onClick={handleColours}
          >
            Four
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
