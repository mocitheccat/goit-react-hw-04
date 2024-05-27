import notFoundImage from '../../assets/images/not-found.png'
import codeErrorImage from '../../assets/images/code-error.png'

const ErrorMsg = ({ emptyQueryMessage, isErrorOccured, isZeroResults }) => {
  return (
    <div className="error-msg">
      {emptyQueryMessage !== "" && (
        <div className="error-content">
          <p>{emptyQueryMessage}</p>
        </div>
      )}
      {isErrorOccured && (
        <div className="error-content">
          <img src={codeErrorImage} alt="Code Error" className="error-image" />
          <p>Something went wrong...</p>
        </div>
      )}
      {isZeroResults && (
        <div className="error-content">
          <img src={notFoundImage} alt="Not Found" className="error-image" />
          <p>No results found</p>
        </div>
      )}
    </div>
  );
};

export default ErrorMsg;
