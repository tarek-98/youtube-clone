import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "8489493744mshf1b35721a012638p1401ebjsn9f2a65b0bb0f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default fetchFromApi;
