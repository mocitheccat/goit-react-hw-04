const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className="image-card" onClick={() => onImageClick(image)}>
      <img 
        src={image.urls.thumb} 
        srcSet={`${image.urls.thumb} 1x, ${image.urls.small} 2x, ${image.urls.regular} 3x`}
        alt={image.description} 
      />
      <div className="image-info">
        <div className="user-info">
          <img
            src={image.user.profile_image.medium}
            srcSet={`${image.user.profile_image.small} 1x, ${image.user.profile_image.medium} 2x, ${image.user.profile_image.large} 3x`}
            alt={image.user.name}
            className="user-avatar"
          />
          <div className="user-details">
            <p>{image.user.name}</p>
            <a
              href={image.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{image.user.username}
            </a>
          </div>
        </div>
        <div className="image-details">
          <p>Likes: {image.likes}</p>
          {image.description && <p>{image.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
