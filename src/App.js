import React, { useState } from "react";
import LoginSignup from "./LogIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("loggedIn"))
  );

  const handleGetStarted = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <LoginSignup />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
            <h2 className="mt-6 text-white text-3xl font-extrabold">
              Welcome to my website!
            </h2>
            <h3 className="mt-6  text-1xl font-extrabold text-gray-400">
              I'm delighted to have you here and hope to offer you a unique and
              exciting experience. On my site, you will find a wide variety of
              high-quality casino games that we are sure you will love.
            </h3>
            <button
              type="submit"
              onClick={handleGetStarted}
              className="btnConfirm mx-auto flex mt-12 justify-center text-black sm:mx-auto sm:w-full sm:max-w-md hover:btnConfirm focus:outline-none  font-medium rounded-lg text-sm px-7 py-2.5 mb-2"
            >
              GET STARTED
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
