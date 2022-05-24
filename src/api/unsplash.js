import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID I0erQ_DGDgoJjndv3Y6ZAdxxtxOOEx82XMxY9CZEZsQ",
  },
});
