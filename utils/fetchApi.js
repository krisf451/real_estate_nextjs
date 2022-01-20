import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "90646c5694mshe72d0ccf61a2548p137719jsn21c47dd5f3f3",
    },
  });

  return data;
};
