import { type NextPage } from "next";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const [animeName, setAnimeName] = useState("");

  return (
    <>
      <Navbar />
      <div className="mt-[-150px] flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <Image src="/images/logo.svg" width={155} height={45} alt="Logo" />
          <div className="flex items-center gap-3 rounded-md bg-blue-light pr-[1rem] ">
            <input
              type="text"
              placeholder="Enter anime name..."
              className="bg-black-container py-[10px] pl-[20px] pr-[200px] text-text-grey focus:outline-none"
              onChange={(e) => {
                setAnimeName(e.target.value);
              }}
            />
            <Image
              src="/icons/search.svg"
              width={20}
              height={21}
              alt="Search Icon"
              className="hover:cursor-pointer"
              onClick={() => {
                router.replace(`/search?q=${animeName}`);
              }}
            />
          </div>
          <p className="mt-[-10px] text-text-golden">
            AnimeX - Unleash Your Anime Addiction!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
