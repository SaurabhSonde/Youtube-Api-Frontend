const API = "http://localhost:5000";

export const broadcastVideo = (videoInfo) => {
  return fetch(`${API}/broadcast`, {
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
