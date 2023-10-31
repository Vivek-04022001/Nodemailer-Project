import Logo from "../../assets/UNYN-BLUE-LOGO.png";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../utilities/Button";
const Header = () => {
  return (
    <section id="header">
      <header className="container pt-10 max-w-6xl mx-auto mb-20 flex justify-between items-center px-4">
        <nav className="flex  justify-between items-center gap-8">
          <div className="logo-container w-[120px] cursor-pointer">
            <img src={Logo} alt="blue-logo" className="w-full" />
          </div>
          <ul className="flex  gap-4">
            <li>
              <a href="#aboutUs">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#more" className="flex items-center gap-1">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            </li>
          </ul>
        </nav>

        <Button text={'Contact us'}/>
      </header>
    </section>
  );
};

export default Header;
