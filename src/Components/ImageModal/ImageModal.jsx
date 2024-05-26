import React from "react";
import ReactModal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onRequestClose}>Close</button>
    </ReactModal>
  );
};

export default ImageModal;
