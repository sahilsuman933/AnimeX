import { getTopAnime } from "../utils/anime";
import Loading from "~/components/Loading";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import AnimeCard from "~/components/AnimeCard";
import { useState } from "react";

const TopAnime = () => {
  const [currPage, setPage] = useState(1);
  let count = 1;

  const { data, isLoading } = getTopAnime(currPage);

  const pageNum = !isLoading ? data.pagination.current_page : 1;
  console.log(currPage);

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
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg text-text-white">Top Anime</p>
          <p className=" mt-[-10px] text-text-grey/60">
            Discover new and trending series.
          </p>
        </div>

        <div className="grid max-w-[70%] grid-cols-5">
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

        <div className="flex items-center justify-center gap-2 pb-5 text-text-white">
          <button
            className="mb-2 flex items-center gap-2 rounded-md bg-black-btn  px-[20px] py-2 text-blue-light"
            onClick={() => {
              setPage(pageNum - 1);
            }}
          >
            Previous
          </button>
          <p>page</p>
          <div className="flex">
            <input
              type="text"
              className="mb-2 w-10  bg-black-container text-center text-text-grey focus:outline-none "
              placeholder={pageNum}
              onChange={(e) => {
                count = Number(e.target.value);
              }}
            />
            <button
              className="mb-2 flex items-center rounded-e-md bg-black-btn px-[20px] py-2 text-blue-light"
              onClick={() => {
                setPage(count);
              }}
            >
              go
            </button>
          </div>
          <p>
            of <span>{data.pagination.last_visible_page}</span>
          </p>
          <button
            className="mb-2 flex items-center gap-2 rounded-md bg-black-btn  px-[20px] py-2 text-blue-light"
            onClick={() => {
              setPage(pageNum + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TopAnime;
