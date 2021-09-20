import React, { useState } from "react";
import { broadcastVideo } from "./helper/broadcastHelper";

const BroadCastVideo = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    tags: "",
    media: "",
    privacyStatus: "",
    scheduledStartTime: "",
    scheduledEndTime: "",
    formData: new FormData(),
  });

  console.log(values);

  const {
    title,
    description,
    tags,
    privacyStatus,
    scheduledStartTime,
    scheduledEndTime,
    formData,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    broadcastVideo(formData).then((data) => {
      setValues({
        ...values,
        title: "",
        description: "",
        tags: "",
        privacyStatus: "",
        scheduledStartTime: "",
        scheduledEndTime: "",
      });
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "media" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
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
        <h1>BroadCast Video</h1>
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
          <input
            type="datetime-local"
            name="media"
            className="form-control"
            placeholder="scheduled start time"
            onChange={handleChange("scheduledStartTime")}
            value={scheduledStartTime}
          />
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            name="media"
            className="form-control"
            placeholder="scheduled end time"
            onChange={handleChange("scheduledEndTime")}
            value={scheduledEndTime}
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

export default BroadCastVideo;
