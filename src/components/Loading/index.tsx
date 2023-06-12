import Navbar from "../Navbar";
import Footer from "../Footer";
import { PacmanLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[100vh] flex-col items-center justify-center gap-4 align-middle">
        <PacmanLoader color="#ECC47C" size={24} />
        <p className=" ml-12 text-text-white"> Loading...</p>
      </div>
      <Footer />
    </>
  );
};

export default Loading;
