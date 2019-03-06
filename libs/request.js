import axios from "axios";

const API_HOST = "https://tourist-search-meni.now.sh";

const getUrl = endpoint => API_HOST + endpoint;

export const post = async (endpoint, data) => {
  // const url = getUrl(endpoint);
  return axios.post(getUrl(endpoint), data, {
    headers: { "Content-Type": "application/json" }
  });
};

export const get = async (endpoint, jwt) => {
  const headers = jwt
    ? {
      headers: { Authorization: `Bearer ${jwt}` }
    }
    : null;
  return axios.get(getUrl(endpoint), headers);
};
