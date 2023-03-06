import React, { useState } from "react";
import Library from "./Library";
import Modal from "./Modal";
import SignUp from "./SignUp";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn")); // localStorage to save the user session
  const [showModal, setShowModal] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      // Save session
      localStorage.setItem("loggedIn", "true");
      // successful login
      setLoggedIn(true);
    } else {
      // If fail, display modal
      setShowModal(true);
    }
  };

  const getRegister = () => {
    setMostrarRegistro(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      {loggedIn ? (
        <div>
          {/* Library of games */}
          <Library />;
        </div>
      ) : (
        <div>
          {mostrarRegistro ? (
            <div>
              {/* Display register screen if register button is clicked */}
              {mostrarRegistro && <SignUp />}
            </div>
          ) : (
            <div>
              {" "}
              <div className="flex justify-center items-center h-screen">
                <form
                  onSubmit={handleLogin}
                  className="btnSignOut p-10 rounded shadow-md sm:px-6 max-w-sm rounded-lg p-3 "
                >
                  <label
                    htmlFor="username"
                    className="text-2xl text-white font-medium mb-5"
                  >
                    Email:
                    <div className="mb-5 mt-5 border">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-black border"
                      />
                    </div>
                  </label>
                  <label
                    htmlFor="password"
                    className="text-2xl text-white rounded font-medium mb-5"
                  >
                    Password:
                    <div className="mb-5 mt-5 text-black border">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-black border"
                      />
                    </div>
                  </label>
                  <div className="flex justify-center mt-5">
                    <button
                      type="submit"
                      onClick={handleLogin}
                      className="btnConfirm text-black hover:btnConfirm font-medium rounded-lg text-sm px-7 py-2.5 mb-2"
                    >
                      Login
                    </button>
                    <button
                      onClick={getRegister}
                      className="bgcolor text-white hover:bg-gray-900 font-medium hover:bgcolor rounded-lg text-sm px-7 py-2.5 mb-2 ml-5"
                    >
                      SignUp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Show modal if wrong credentials */}
      {showModal && (
        <div>
          <Modal show={showModal} handleClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
}

export default Signup;
