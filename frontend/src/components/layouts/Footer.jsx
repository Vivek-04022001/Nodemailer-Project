import Button from "../utilities/Button";
import Logo from "../../assets/UNYN-WHITE-LOGO.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer id="footer" className="bg-secondary py-20">
      <div className="container mt-40 px-4 space-y-6  mx-auto max-w-6xl  text-white ">
        <div className=" border-b-2 pb-6 mx-auto max-w-6xl  text-white flex gap-10 ">
          {/*  */}
          <div className="w-1/2  space-y-6">
            <div className="w-[120px] ">
              <img src={Logo} alt="brand-logo" />
            </div>
            <p className="text-lg">
              Stay up to date on the latest features and releases by joining our
              newslatter.
            </p>
            <form className="flex gap-x-4 ">
              <div className="flex-1 border bg-white border-white rounded-full overflow-hidden p-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-2 px-3 outline-none placeholder:text-neutral border-none text-black "
                />
              </div>
              <Button text={"Sign Up"} />
            </form>
            <p>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.{" "}
            </p>
          </div>

          <div className="w-1/2 flex justify-between ">
            <div className="flex flex-col gap-y-4">
              <h4 className="bold text-xl mb-2 font-bold">Quick Links</h4>
              <span>Home</span>
              <span>About us</span>
              <span>Services</span>
              <span>Events</span>
            </div>
            <div className="flex flex-col gap-y-4">
              <h4 className="bold text-xl mb-2 font-bold">Updates</h4>
              <span>News</span>
              <span>Blog</span>
              <span>FAQ's</span>
              <span>Contact us</span>
            </div>
            <div className="flex flex-col gap-y-4">
              <h4 className="bold text-xl mb-2 font-bold">Follow us</h4>
              <span className="flex gap-2 items-center">
                <AiFillTwitterCircle /> Twitter
              </span>
              <span className="flex gap-2 items-center">
                <BsFacebook /> Facebook
              </span>
              <span className="flex gap-2 items-center">
                <BiLogoInstagramAlt /> Instagram
              </span>
            </div>
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex gap-4 text-white">
            <span>© 2023 UNYN. All rights reserved.</span>
            <span>Privacy Policy</span>
            <span>Term of Service</span>
          </div>
          <span>Design and Developed by InGelt Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
