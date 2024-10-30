import React from "react";
import fullimg from "../src/assets/gellary.jpg";
import shortimg from "../src/assets/short img.jpg";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen px-10">
        <div className="text-xl text-red-600 flex justify-center my-10 bg-teal-300">
          <h2 className=""> Imgae gallary</h2>
        </div>

        {/* left part */}
        <div className="flex gap-6">
          <div className="left w-1/2">
            <picture>
              <img className="w-full" src={fullimg} alt={fullimg} />
            </picture>

            {/* button  */}
            <div className="flex justify-center">
              <button className="bg-slate-600 mt-6 py-4 px-6 rounded-full text-white ">
                Upload image
              </button>
            </div>
          </div>

          <div className="right w-1/2 flex flex-wrap gap-x-5 ">
            <div>
              <picture>
                <img src={shortimg} alt={shortimg} />
              </picture>
              <div className="flex justify-between mt-2">
                <button className="bg-green-500 px-10 py-2 rounded">
                  Edit
                </button>
                <button className="bg-red-600 px-10 py-2 rounded">
                  delete
                </button>
              </div>
            </div>
            <div>
              <picture>
                <img src={shortimg} alt={shortimg} />
              </picture>
              <div className="flex justify-between mt-2">
                <button className="bg-green-500 px-10 py-2 rounded">
                  Edit
                </button>
                <button className="bg-red-600 px-10 py-2 rounded">
                  delete
                </button>
              </div>
            </div>
            <div>
              <picture>
                <img src={shortimg} alt={shortimg} />
              </picture>
              <div className="flex justify-between mt-2">
                <button className="bg-green-500 px-10 py-2 rounded">
                  Edit
                </button>
                <button className="bg-red-600 px-10 py-2 rounded">
                  delete
                </button>
              </div>
            </div>
            <div>
              <picture>
                <img src={shortimg} alt={shortimg} />
              </picture>
              <div className="flex justify-between mt-2">
                <button className="bg-green-500 px-10 py-2 rounded">
                  Edit
                </button>
                <button className="bg-red-600 px-10 py-2 rounded">
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
