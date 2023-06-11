import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const SearchPage = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const { data, error } = useSWR("https://api.jikan.moe/v4/anime", fetcher);

  console.log(data);

  return (
    <div>
      <h1>Search Results for: {keyword}</h1>
    </div>
  );
};

export default SearchPage;
