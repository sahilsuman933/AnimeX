import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-center gap-2 bg-black-container	p-2 ">
      <p className=" text-text-grey">Made with ❤️ By </p>
      <Image src="/images/logo.svg" width={100} height={45} alt="Logo" />
    </div>
  );
};

export default Footer;
