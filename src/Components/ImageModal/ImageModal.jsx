import ReactModal from "react-modal";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <ReactModal
      portalClassName='modalPortal'
      className='modal'
      overlayClassName='overlay'
      isOpen={isOpen}
      ariaHideApp={false}
      shouldCloseOnEsc={true}
      onRequestClose={onClose}
    >
      <img src={image.urls.regular} alt={image.alt_description} className="modalImage"/>
    </ReactModal>
  );
};

export default ImageModal;
