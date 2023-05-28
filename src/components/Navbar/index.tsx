import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <Image src="/images/logo.svg" width={155} height={45} alt="Logo" />
      <div>
        <input type="text" placeholder="Enter anime name..." />
        <div>
          <Image
            src="/icons/search.svg"
            width={20}
            height={21}
            alt="Search Icon"
          />
        </div>
      </div>

      <div className="text-text-grey">
        <p>Home</p>
        <p>Top Anime</p>
        <p>Upcoming</p>
        <p>Random</p>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
