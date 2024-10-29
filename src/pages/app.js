import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(0);
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  function add() {
    setResult(Number(input1) + Number(input2));
  }
  function subtract() {
    setResult(Number(input1) - Number(input2));
  }
  function multiply() {
    setResult(Number(input1) * Number(input2));
  }
  function divide() {
    setResult(Number(input1) / Number(input2));
  }
  function ClearAll() {
    setResult(0);
    setInput1("");
    setInput2("");
  }

  return (
    <div className="h-screen w-screen bg-teal-600 flex justify-center items-center  ">
      <div className="h-[70%] w-[80%]   bg-white flex flex-col  items-center  px-[20px] py-[26px] rounded-lg gap-6 lg:max-w-[50%]">
        <p className="text-2xl text-gray-600 font-bold ">Calculator</p>

        <div className="h-fit w-full flex flex-col gap-[16px]">
          <input
            placeholder="Enter the First value"
            value={input1}
            onChange={(e) => {
              setInput1(e.target.value);
            }}
            className="h-[44px] w-full bg-gray-200 rounded-md px-[20px]"
          ></input>
          <input
            placeholder="Enter the Second value"
            value={input2}
            onChange={(e) => {
              setInput2(e.target.value);
            }}
            className="h-[44px] w-full bg-gray-200 rounded-md px-[20px]"
          ></input>
        </div>
        <div className="h-fit w-full flex lg:flex-row justify-center gap-[20px] text-white pt-5 flex-col">
          <div className="h-full w-full flex gap-[1.5%]">
            <button
              onClick={add}
              className="h-[44px] w-full bg-teal-600 rounded-md flex items-center justify-center "
            >
              <svg
                className="aspect-square max-w-[24px]"
                fill="#ffffff"
                width="24px"
                height="24px"
                viewBox="-3 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
                class="cf-icon-svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M12.711 9.182a1.03 1.03 0 0 1-1.03 1.03H7.53v4.152a1.03 1.03 0 0 1-2.058 0v-4.152H1.318a1.03 1.03 0 1 1 0-2.059h4.153V4.001a1.03 1.03 0 0 1 2.058 0v4.152h4.153a1.03 1.03 0 0 1 1.029 1.03z"></path>
                </g>
              </svg>
            </button>
            <button
              onClick={subtract}
              className="h-[44px] w-full bg-teal-600 rounded-md flex items-center justify-center "
            >
              <svg
                className="aspect-square max-w-[36px]"
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 12L18 12"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
            <button
              onClick={multiply}
              className="h-[44px] w-full bg-teal-600 rounded-md flex items-center justify-center"
            >
              <svg
                height={20}
                width={20}
                className=" max-w-[20px]"
                fill="#ffffff"
                viewBox="-3.5 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
                class="cf-icon-svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
                </g>
              </svg>
            </button>
            <button
              onClick={divide}
              className="h-[44px] w-full bg-teal-600 rounded-md flex items-center justify-center"
            >
              <svg
                className="aspect-square max-w-[32px] "
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6.34277 12L17.6565 12"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <circle
                    cx="12"
                    cy="16.9498"
                    r="1.5"
                    transform="rotate(45 12 16.9498)"
                    fill="#ffffff"
                  ></circle>{" "}
                  <circle
                    cx="12"
                    cy="7.05024"
                    r="1.5"
                    transform="rotate(45 12 7.05024)"
                    fill="#ffffff"
                  ></circle>{" "}
                </g>
              </svg>
            </button>
          </div>
          <button
            onClick={ClearAll}
            className="min-h-[44px] lg:w-fit bg-teal-600 rounded-md flex items-center justify-center px-5 w-full whitespace-nowrap "
          >
            Clear All
          </button>
        </div>
        <p className="text-2xl text-gray-600 font-bold ">{result}</p>
      </div>
    </div>
  );
}
