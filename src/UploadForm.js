import React, { useState } from "react";
import { uploadVideo } from "./helper/uploadVideoHelper";

const UploadForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    tags: "",
    media: "",
    privacyStatus: "",
    formData: new FormData(),
  });

  console.log(values);

  const { title, description, tags, privacyStatus, formData } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
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

  const handleChange = (name) => (event) => {
    const value = name === "media" ? event.target.files[0] : event.target.value;
    console.log(value);
    formData.append("media", event.target.files[0]);
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  // const successMessage = () => (
  //   <div
  //     className="alert alert-success mt-3"
  //     style={{ display: success ? "" : "none" }}
  //   >
  //     <h4>video uploaded successfullly</h4>
  //   </div>
  // );
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
              onChange={handleChange("media")}
              type="file"
              name="media"
              accept="video"
              placeholder="choose a file"
            />
          </label>
        </div>
        <span>Add Thumbnail</span>
        <div className="form-group">
          <label className="btn btn-block btn-success">
            <input
              onChange={handleChange("media")}
              type="file"
              name="media"
              accept="image"
              placeholder="choose a file"
            />
          </label>
        </div>
        <div className="form-group">
          <input
            name="media"
            className="form-control"
            placeholder="Title"
            onChange={handleChange("title")}
            value={title}
          />
        </div>
        <div className="form-group">
          <textarea
            name="media"
            className="form-control"
            placeholder="Description"
            onChange={handleChange("description")}
            value={description}
          />
        </div>
        <div className="form-group">
          <input
            name="media"
            className="form-control"
            placeholder="Tags"
            onChange={handleChange("tags")}
            value={tags}
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            placeholder="Privacy Status"
            onChange={handleChange("privacyStatus")}
            value={privacyStatus}
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
