import {
  Button,
  ImageGallery,
  ImageModal,
  SearchBar,
} from "./Components/index.js";
import { useEffect, useState } from "react";
import { fetchImages } from "./API/apiFncs.js";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalImage, setModalImage] = useState(null); // Corrected from modal to modalImage
  const [emptyQueryMessage, setEmptyQueryMessage] = useState("");

  const imageSearch = async () => {
    setIsError(false);
    setIsLoading(true);
    setEmptyQueryMessage("");

    if (query.trim() === "") {
      setIsLoading(false);
      setEmptyQueryMessage("Please provide a search query");
      return;
    }

    try {
      const imagesList = await fetchImages(query, page);
      if (page === 1) {
        setImages(imagesList); // Ensure to use results
      } else {
        setImages((prevImages) => [...prevImages, ...imagesList]); // Ensure to use results
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const submitSearch = () => {
    setPage(1);
    imageSearch();
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      imageSearch();
    }
  }, [page]);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={submitSearch} query={query} setQuery={setQuery} />
      {emptyQueryMessage && <p>{emptyQueryMessage}</p>}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong...</p>}
      <ImageModal isOpen={!!modalImage} onRequestClose={closeModal} />
      {/*  {modalImage && (*/}
      {/*    <div>*/}
      {/*      <img*/}
      {/*        src={modalImage.urls.regular}*/}
      {/*        alt={modalImage.alt_description}*/}
      {/*      />*/}
      {/*      <button onClick={closeModal}>Close</button>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</ImageModal>*/}
    </>
  );
}

export default App;
