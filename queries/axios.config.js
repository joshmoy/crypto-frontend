import axios from "axios";

let apiToken = "";
console.log(apiToken);
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
});

instance.defaults.headers.common["Authorization"] = `Bearer ${apiToken}`;

export default instance;
