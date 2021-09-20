import React, { useState, useEffect } from "react";
import { authenticate } from "./helper/authenticateHelper";
import UploadForm from "./UploadForm";
import { Link } from "react-router-dom";
const App = () => {
  const [data, setData] = useState("");
  console.log(data.url);
  const getData = () => {
    authenticate().then((data) => {
      setData(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="App"
      style={{
        width: "500px",
        display: "flex",
        justifyContent: "center",
        marginLeft: "500px",
      }}
    >
      {data.url ? (
        <div>
          <a href={data.url}>Signin</a>
        </div>
      ) : (
        <div>
          <h1>Hey, {data.name}</h1>
          <Link to="/upload/video">
            <button type="button" class="btn btn-primary">
              Upload Video
            </button>
          </Link>
          <Link to="/broadcast/video">
            <button type="button" class="btn btn-secondary">
              Broadcast Video
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default App;
