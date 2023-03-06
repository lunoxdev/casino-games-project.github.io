import React, { useState } from "react";
import LibGames from "./Library";
import Modal from "./Modal";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn")); // localStorage to save the user session
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Send request for back end team
    if (username === "admin" && password === "pass") {
      setLoggedIn(true);
      // localStorage to save the user session
      localStorage.setItem("loggedIn", "true");
    } else {
      // If wrong password, show modal
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      {loggedIn ? (
        <div>
          {/* Library of games */}
          <LibGames />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleLogin}
            className="btnSignOut p-10 rounded shadow-md sm:px-6 max-w-sm rounded-lg p-3 "
          >
            <label className="text-2xl text-white font-medium mb-5">
              Username:
              <div className="mb-5 mt-5 border">
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="text-black border"
                />
              </div>
            </label>
            <label className="text-2xl text-white rounded font-medium mb-5">
              Password:
              <div className="mb-5 mt-5 text-black border">
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="text-black border"
                />
              </div>
            </label>
            <button
              type="submit"
              class="btnConfirm text-black hover:btnConfirm focus:outline-none  font-medium rounded-lg text-sm px-7 py-2.5 mb-2"
            >
              Login
            </button>
          </form>

          {/* Modal is called if wrong password */}
          <div>
            <Modal show={showModal} handleClose={handleCloseModal}>
              <h2 className="text-lg text-white font-bold mb-2">
                Invalid Credentials
              </h2>
              <p className="text-gray-300">
                Please check your username and password and try again or use:
                <br />
                <br />
                <strong>admin</strong>
                <br />
                <strong>pass</strong>
                <br />
                <br />
                <u>Both in lowercase</u>
              </p>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
