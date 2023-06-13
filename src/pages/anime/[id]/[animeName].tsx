import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { useRouter } from "next/router";

const AnimePage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div></div>
      <div>
        <div>
          <img src="" alt="" />
          <p>Anime Name</p>
          <p>Japanese Anime Name</p>
          <hr />
          <p>Information</p>
          <hr />
          <div>
            <p>Score: ⭐ rating</p>
            <p>Episodes: 12 TV</p>
            <p>Status: Currently Airing</p>
            <p>Aired: Oct 5, 2022 to ?</p>
            <p>Popularity: 84,056 (#2029)</p>
            <p>Rating: PG-13 - Teens 13 or older</p>
            <p>Duration: 23 min per ep</p>
            <p>Source: Light novel</p>
            <p>Studios: C2C</p>
            <p>
              More info: <a href="MAL">MAL</a>, <a href="AL">AL</a>,{" "}
              <a href="Simkl">Simkl</a>
            </p>
          </div>
        </div>
        <div>
          <button>
            <img src="/public/icons/play.svg" alt="Play" />
            Watch
          </button>
          <h2>Anime Name</h2>
          <p>Genres : Action, Fantasy, Isekai, Reincarnation</p>

          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AnimePage;
