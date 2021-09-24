import React, { useState } from "react";
import { uploadVideo } from "./helper/uploadVideoHelper";

const UploadForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    tags: "",
    media: "",
    privacyStatus: "",
  });

  const [video, setVideo] = useState(undefined);
  const [videoThumbnail, setVideoThumbnail] = useState(undefined);

  const { title, description, tags, privacyStatus } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("media", video);
    formData.append("media", videoThumbnail);
    formData.append("title", values.title);
    formData.append("description", values.title);
    formData.append("tags", values.tags);
    formData.append("privacyStatus", values.privacyStatus);

    uploadVideo(formData).then((data) => {
      setValues({
        ...values,
        title: "",
        description: "",
        tags: "",
        privacyStatus: "",
      });
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setValues({ ...values, [event.target.name]: value });
  };

  const handleChangeMedia = (event, name) => {
    if (name === "thumbnail") {
      setVideoThumbnail(event.target.files[0]);
    } else {
      setVideo(event.target.files[0]);
    }
  };

  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        justifyContent: "center",
        marginLeft: "500px",
      }}
    >
      <form>
        <h1>Upload Video</h1>
        <span>Post Video</span>
        <div className="form-group">
          <label className="btn btn-block btn-success">
            <input
              onChange={(event) => {
                handleChangeMedia(event, "video");
              }}
              type="file"
              accept="video"
              placeholder="choose a file"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="btn btn-block btn-success">
            <input
              onChange={(event) => {
                handleChangeMedia(event, "thumbnail");
              }}
              type="file"
              accept="image"
              placeholder="choose a file"
            />
          </label>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Title"
            onChange={handleChange}
            value={title}
            name="title"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Description"
            onChange={handleChange}
            value={description}
            name="description"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Tags"
            onChange={handleChange}
            value={tags}
            name="tags"
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            placeholder="Privacy Status"
            onChange={handleChange}
            value={privacyStatus}
            name="privacyStatus"
          >
            <option>Select</option>
            <option>private</option>
            <option>public</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-outline-success mb-3"
          onClick={onSubmit}
        >
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
