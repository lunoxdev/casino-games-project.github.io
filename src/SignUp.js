import React, { useState } from "react";
import LogIn from "./LogIn";
import SuccessRegisterModal from "./SuccessRegisterModal";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setSuccess(true);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <div>
        {success ? (
          // Go to Login component
          <LogIn />
        ) : (
          <div className="flex justify-center items-center h-screen">
            <form
              onSubmit={handleSubmit}
              className="btnSignOut p-10 rounded shadow-md sm:px-6 max-w-sm rounded-lg p-3 "
            >
              <label className="text-2xl text-white font-medium mb-5">
                Username:
                <div className="mb-5 mt-5 border text-black">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </label>
              <label
                htmlFor="email"
                className="text-2xl text-white font-medium mb-5"
              >
                Email:
                <div className="mb-5 mt-5 border text-black">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  />
                </div>
              </label>
              <button
                type="submit"
                class="btnConfirm text-black hover:btnConfirm focus:outline-none  font-medium rounded-lg text-sm px-7 py-2.5 mb-2"
              >
                Register
              </button>
            </form>
          </div>
        )}
      </div>
      {/* Show modal if wrong credentials */}
      {showModal && (
        <div>
          <SuccessRegisterModal
            show={showModal}
            handleClose={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
};

export default SignUp;
