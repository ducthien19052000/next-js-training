import axios from "axios";

export default axios.create({
    baseURL: "https://5faaab72b5c645001602b026.mockapi.io/",
    headers: {
        "Content-type": "application/json"
    }
});