const API = "http://localhost:5000";

export const authenticate = () => {
  return fetch(`${API}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
