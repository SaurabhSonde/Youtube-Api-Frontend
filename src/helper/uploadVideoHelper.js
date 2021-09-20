const API = "http://localhost:5000";

export const uploadVideo = (videoInfo) => {
  return fetch(`${API}/upload`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: videoInfo,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
