const Modal = (props) => {
  const showHideClassName = props.show ? "block" : "hidden";
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${showHideClassName}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="btnSignOut border rounded-lg shadow-lg p-4">
          <div className="mb-4">{props.children}</div>
          <h2 className="text-lg text-white font-bold mb-2">
            Invalid Credentials
          </h2>
          <p className="text-gray-300 mb-5">
            Please check your username and password and try again.
          </p>
          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={props.handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
