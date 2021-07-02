import { Link } from 'react-router-dom';
import '../Home.css';
const HomeScreen = ({ docId, setDocId }) => {
  const inputHandler = (e) => {
    setDocId(e.target.value);
  };
  return (
    <div className="home-container">
      <div className="home-card">
        <p>Welcome to Colaborate</p>
        <img src="google-docs.png" alt="Google_docs_photo" />
        <input
          value={docId}
          onChange={inputHandler}
          placeholder="Document ID of existing document"
          type="text"
        />
        <div className="home-btns">
          <Link to={docId && `/rooms/documents/${docId}`}>
            <button>Open Document</button>
          </Link>
          <Link to="/rooms">
            <button>New Document</button>
          </Link>
        </div>
        <div className="home-instruction">
          <p>Document Id can be found in the URL following </p>
          <p>/document/ (or)</p>
          <p>Click on new document</p>
        </div>
        <h4 className="home-footer">
          Google Docs Clone -{' '}
          <a href="https://www.linkedin.com/in/nirmalya-saha-625993201/">
            <u>Nirmalya Saha</u>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default HomeScreen;