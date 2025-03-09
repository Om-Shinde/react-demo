import { useState, useEffect } from "react";

export default function App() {
  const [result, setResult] = useState(0);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [activeOperation, setActiveOperation] = useState(null);
  const [animation, setAnimation] = useState(false);

  function add() {
    setActiveOperation("add");
    setResult(Number(input1) + Number(input2));
    triggerAnimation();
  }

  function subtract() {
    setActiveOperation("subtract");
    setResult(Number(input1) - Number(input2));
    triggerAnimation();
  }

  function multiply() {
    setActiveOperation("multiply");
    setResult(Number(input1) * Number(input2));
    triggerAnimation();
  }

  function divide() {
    setActiveOperation("divide");
    if (Number(input2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(input1) / Number(input2));
    }
    triggerAnimation();
  }

  function clearAll() {
    setResult(0);
    setInput1("");
    setInput2("");
    setActiveOperation(null);
  }

  function triggerAnimation() {
    setAnimation(true);
    setTimeout(() => setAnimation(false), 500);
  }

  // Button effects on operations
  useEffect(() => {
    if (activeOperation) {
      const timer = setTimeout(() => {
        setActiveOperation(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeOperation]);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-teal-500 to-blue-600 flex justify-center items-center p-4 transition-all duration-300">
      <div
        className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl 
                  flex flex-col items-center px-6 py-8 gap-6 transition-all duration-300
                  hover:shadow-xl transform hover:-translate-y-1"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Calculator
        </h1>

        <div className="w-full space-y-4">
          <div className="relative">
            <input
              placeholder="Enter the First value"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="h-12 w-full bg-gray-100 rounded-lg pl-4 pr-8 border-2 border-transparent 
                        focus:border-teal-400 focus:outline-none transition-all duration-300
                        shadow-sm focus:shadow-md"
              type="number"
            />
            {input1 && (
              <button
                onClick={() => setInput1("")}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                ×
              </button>
            )}
          </div>

          <div className="relative">
            <input
              placeholder="Enter the Second value"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="h-12 w-full bg-gray-100 rounded-lg pl-4 pr-8 border-2 border-transparent 
                        focus:border-teal-400 focus:outline-none transition-all duration-300
                        shadow-sm focus:shadow-md"
              type="number"
            />
            {input2 && (
              <button
                onClick={() => setInput2("")}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-4 gap-3">
          <button
            onClick={add}
            className={`h-14 rounded-lg flex items-center justify-center text-white font-semibold
                      bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 
                      transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md
                      ${
                        activeOperation === "add" ? "scale-95 bg-teal-600" : ""
                      }`}
          >
            <span className="text-2xl">+</span>
          </button>
          <button
            onClick={subtract}
            className={`h-14 rounded-lg flex items-center justify-center text-white font-semibold
                      bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 
                      transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md
                      ${
                        activeOperation === "subtract"
                          ? "scale-95 bg-blue-600"
                          : ""
                      }`}
          >
            <span className="text-2xl">−</span>
          </button>
          <button
            onClick={multiply}
            className={`h-14 rounded-lg flex items-center justify-center text-white font-semibold
                      bg-gradient-to-r from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 
                      transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md
                      ${
                        activeOperation === "multiply"
                          ? "scale-95 bg-indigo-600"
                          : ""
                      }`}
          >
            <span className="text-2xl">×</span>
          </button>
          <button
            onClick={divide}
            className={`h-14 rounded-lg flex items-center justify-center text-white font-semibold
                      bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 
                      transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md
                      ${
                        activeOperation === "divide"
                          ? "scale-95 bg-purple-600"
                          : ""
                      }`}
          >
            <span className="text-2xl">÷</span>
          </button>
        </div>

        <button
          onClick={clearAll}
          className="w-full h-12 bg-gray-200 rounded-lg hover:bg-gray-300 
                    transition-all duration-300 font-medium text-gray-700
                    transform hover:scale-105 active:scale-95 shadow-sm"
        >
          Clear All
        </button>

        <div
          className={`w-full bg-gray-100 rounded-lg p-4 flex justify-center items-center min-h-16
                    shadow-inner transition-all duration-300
                    ${animation ? "scale-105 bg-teal-50" : ""}`}
        >
          <p
            className={`text-2xl font-bold transition-all duration-300 ${
              animation ? "text-teal-600 scale-110" : "text-gray-700"
            }`}
          >
            {typeof result === "number" ? result.toLocaleString() : result}
          </p>
        </div>
      </div>
    </div>
  );
}
