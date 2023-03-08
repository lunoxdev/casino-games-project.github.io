import React from "react";

const SuccessRegisterModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "block" : "hidden";
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${showHideClassName}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <p className="text-gray-700 mb-5">
            The user has been registered successfully.
          </p>
          <button
            className="bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessRegisterModal;
