import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID V35-9jSq-YhJd5n1dmjF6qv-s8XNtGXhU2fEDC2D3p4",
  },
});
