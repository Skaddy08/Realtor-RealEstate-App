import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '9ec995103emsh65300767c74666ap1876d7jsn28db1c57ad6e',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}