import axios from "axios";

const getAnimeName = async (name: String) => {
  try {
    const data = await axios.get("https://api.jikan.moe/v4/anime", {
      params: { q: name },
    });

    return data.data;
  } catch (error) {
    return error;
  }
};

export default getAnimeName;
