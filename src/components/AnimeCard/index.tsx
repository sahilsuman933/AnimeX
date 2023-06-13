import Link from "next/link";

const AnimeCard = ({ imageURL, animeName, episodes, id }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageURL}
        alt={`${animeName} Poster`}
        style={{ width: "70%", height: "70%" }}
      />
      <div className="flex h-[80px] w-[70%] flex-col justify-center bg-black-container py-2 text-center">
        <Link
          href={`/anime/${id}/${animeName.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <p
            className=" px-2 text-sm text-blue-light"
            style={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
            title={animeName}
          >
            {animeName}
          </p>
        </Link>
        <p className=" mt-2 text-xs text-text-grey/60">
          Total Episodes: {episodes}
        </p>
      </div>
    </div>
  );
};

export default AnimeCard;
