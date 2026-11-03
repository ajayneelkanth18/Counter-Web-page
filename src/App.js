import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium">Increment && Decerement</div>

      <div>
        <button>-</button>
        <div>

        </div>
         <button>+</button>

      </div>
      <button>reset</button>

    </div>
  );
}

export default App;