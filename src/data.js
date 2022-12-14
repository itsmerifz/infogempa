import axios from "axios";

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': true,
  }
}

export const getData = async () => {
  
  const { data } = await axios.get(`https://cuaca-gempa-rest-api.vercel.app/quake`);
  return data;
};
