import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import getAnimeName from "~/helpers/getAnimeName";

const Navbar = () => {
  const [animeName, setAnimeName] = useState("");

  return (
    <div className="m-8 mx-auto flex w-[90vw]  items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src="/images/logo.svg" width={155} height={45} alt="Logo" />
        </Link>

        <div className="flex items-center gap-3 rounded-md bg-blue-light pr-[1rem]">
          <input
            type="text"
            placeholder="Enter anime name..."
            className="bg-black-container px-[20px] py-[10px] text-text-grey focus:outline-none"
            onChange={(e) => {
              setAnimeName(e.target.value);
            }}
          />
          <div>
            <Image
              src="/icons/search.svg"
              width={20}
              height={21}
              alt="Search Icon"
              className="hover:cursor-pointer"
              onClick={async () => {
                console.log(await getAnimeName(animeName));
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-text-grey">
        <Link href={"/"}>Home</Link>
        <p>Top Anime</p>
        <p>Upcoming</p>
        <p>Random</p>
        <button className="rounded-md bg-blue-light px-[20px] py-[5px]">
          <Link href="/login"> Sign in</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
