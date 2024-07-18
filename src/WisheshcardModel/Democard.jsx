import React from "react";

function Democard() {
  return (
    <div>
      <div className="  rounded-2xl flex  m-5 shadow-lg shadow-slate-300">
        <div className="demoBday w-[500px] h-[500px] bg-no-repeat bg-center flex justify-center items-center">
          <img
            src="src/assets/photos/galgadot.png"
            alt="profile"
            className="w-[170px] h-[170px] rounded-full object-cover shadow-lg shadow-black mt-20 relative"
          />
          <h2 className="font-extrabold absolute mt-72 text-2xl text-green-500">
            Happy Birthday
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Democard;
