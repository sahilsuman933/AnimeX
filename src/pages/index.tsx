import { type NextPage } from "next";
import Navbar from "~/components/Navbar";
const Home: NextPage = () => {
  return (
    <div className="mx-auto w-[90vw]">
      <Navbar />
    </div>
  );
};

export default Home;
