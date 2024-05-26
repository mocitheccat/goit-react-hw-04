import Masonry from "react-masonry-css";
import { ImageCard } from "./index.js";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ images, onImageClick }) => (
  <Masonry className="mansFlex" breakpointCols={breakpointColumnsObj}>
    {images?.map((image) => (
      <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
    ))}
  </Masonry>
);

export default MasonryLayout;
