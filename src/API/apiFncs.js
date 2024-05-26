import axios from "axios";
import { config } from "../../config.js";

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(config.baseURL, {
      params: {
        query: query,
        page: page,
      },
      headers: {
        Authorization: `Client-ID ${config.apiKey}`,
      },
    });
    return response.data.results; // Не забудьте повернути дані з відповіді
  } catch (err) {
    throw new Error(err.message);
  }
};
