import {
  Button,
  ImageGallery,
  ImageModal,
  SearchBar,
  Loader,
  ErrorMsg
} from "./Components/index.js";
import { useEffect, useState } from "react";
import { fetchImages } from "./API/apiFncs.js";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [emptyQueryMessage, setEmptyQueryMessage] = useState("");
  const [isZeroResults, setIsZeroResults] = useState(false);

  const imageSearch = async () => {
    setIsError(false);
    setIsLoading(true);
    setEmptyQueryMessage("");
    setIsZeroResults(false);

    if (query.trim() === "") {
      setIsLoading(false);
      setImages([]);
      setEmptyQueryMessage("Please provide a search query");

      return;
    }

    try {
      const imagesList = await fetchImages(query, page);
      if (imagesList.length === 0) {
        setIsZeroResults(true);
      } else {
        if (page === 1) {
          setImages(imagesList);
        } else {
          setImages((prevImages) => [...prevImages, ...imagesList]);
        }
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
      {(emptyQueryMessage || isError || isZeroResults) && (
        <ErrorMsg
          emptyQueryMessage={emptyQueryMessage}
          isErrorOccured={isError}
          isZeroResults={isZeroResults}
        />
      )}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {isLoading && <Loader />}
      <ImageModal isOpen={!!modalImage} onClose={closeModal} image={modalImage} />
    </>
  );
}

export default App;
