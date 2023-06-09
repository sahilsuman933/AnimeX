import { NextPage } from "next";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

const ErrorPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[-50px] flex h-[90vh] flex-col items-center justify-center gap-2 text-center">
        <h2 className=" text-bol  text-3xl font-extrabold uppercase text-text-white">
          404 Page Not Found
        </h2>
        <p className="text-text-golden">
          Oops, Oni-Chan, it seems like you've wandered off to the wrong page.
          <br />
          Let's retrace our steps together!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
