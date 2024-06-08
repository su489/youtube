import axios from "axios";

const apiKey='00f6bb0c2emsh418ce48054b6f5ep1a80cdjsnc25585efd62c' //import.meta.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY"
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":apiKey,           
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};