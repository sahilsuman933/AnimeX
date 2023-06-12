import { useRouter } from "next/router";
import { getAnimeName } from "../../utils/anime";
import Loading from "~/components/Loading";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Image from "next/image";
import AnimeCard from "~/components/AnimeCard";

const SearchPage = () => {
  const { query, isReady, replace } = useRouter();

  if (isReady) {
    if (!query.q) {
      replace("/404");
    }
  }

  const { data, isLoading } = getAnimeName(query.q);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    throw new Error();
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-6">
        <p className="text-text-white">
          Search results for:
          <span className="capitalize text-text-golden"> {query.q}</span>
        </p>
        <div className="max-w- grid max-w-[80%] grid-cols-6 grid-rows-2 gap-x-2 gap-y-2">
          {data.data.map((anime) => {
            return (
              <AnimeCard
                imageURL={anime.images.jpg.image_url}
                animeName={
                  anime.title_english ? anime.title_english : anime.title
                }
                episodes={anime.episodes}
              />
            );
          })}
        </div>
        {data.pagination.has_next_page ? (
          <button className="mb-2 flex items-center gap-2 rounded-md bg-black-btn  px-[20px] py-2 text-blue-light">
            <Image
              src="/icons/bottom-arrow.svg"
              width={12}
              height={11}
              alt="Bottom Arrow Icon"
              className="fill-blue-dark hover:cursor-pointer"
            />
            Load More
          </button>
        ) : (
          ""
        )}
      </div>

      <Footer />
    </>
  );
};

export default SearchPage;
