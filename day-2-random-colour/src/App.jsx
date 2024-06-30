import { useState } from "react";

// import "./App.css";

function randomColour() {
  const letters = "0123456789ABCDEF";
  let colour = "#";

  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }

  return colour;
}

function handleClick(e) {
  const body = document.querySelector("body");
  body.style.background = randomColour();
  e.target.style.backgroundColor = randomColour();
}

function App() {
  const color = "red";
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
        <h1 className="text-8xl">Hello Colour</h1>
        <div className="flex justify-center gap-4 py-[150px]">
          <button
            className="w-[200px] border-[2px] border-black rounded "
            onClick={(e) => handleClick(e)}
          >
            One
          </button>
          <button
            className=" h-[50px] w-[200px] border-[2px] border-black rounded "
            onClick={(e) => handleClick(e)}
          >
            Two
          </button>
          <button
            className=" h-[50px] w-[200px] border-[2px] border-black rounded "
            onClick={(e) => handleClick(e)}
          >
            Three
          </button>
          <button
            className=" h-[50px] w-[200px] border-[2px] border-black rounded "
            onClick={(e) => handleClick(e)}
          >
            Four
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
