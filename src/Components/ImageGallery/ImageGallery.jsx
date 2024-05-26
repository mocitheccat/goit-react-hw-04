import React from "react";
import MasonryLayout from "../Mansory.jsx";

const ImageGallery = ({ images, onImageClick }) => {
  console.log("images -----> ", images);
  return (
    <div>
      {images && <MasonryLayout images={images} onImageClick={onImageClick} />}
    </div>
  );
};

export default ImageGallery;
