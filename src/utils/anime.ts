import axios from "axios";
import useSWR from "swr";

const api = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
});

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const getAnimeName = (
  name: string | string[] | undefined,
  pageNumber: number
) => {
  pageNumber = pageNumber ? pageNumber : 1;
  return useSWR(
    `https://api.jikan.moe/v4/anime?q=${name}&page=${pageNumber}`,
    fetcher
  );
};
