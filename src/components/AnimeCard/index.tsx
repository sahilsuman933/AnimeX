const AnimeCard = ({ imageURL, animeName, episodes }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageURL}
        alt={`${animeName} Poster`}
        className="hover:cursor-pointer"
        style={{ width: "70%", height: "70%" }}
      />
      <div className="flex h-[80px] w-[70%] flex-col justify-center bg-black-container py-2 text-center">
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
        <p className=" mt-2 text-xs text-text-grey/60">
          Total Episodes: {episodes}
        </p>
      </div>
    </div>
  );
};

export default AnimeCard;
