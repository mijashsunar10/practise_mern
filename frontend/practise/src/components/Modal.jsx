import React from "react";

const Modal = ({ children, onClose }) => {
  // Function that only triggers when clicking the backdrop
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      onClose(); // close modal only if user clicks outside (on backdrop)
    }
  };

  return (
    <div className="backdrop" onClick={handleBackdropClick}>
      <dialog
        className="modal"
        open
        onClick={(e) => e.stopPropagation()} // prevent click inside from closing
      >
        {children}
      </dialog>
    </div>
  );
};

export default Modal;
