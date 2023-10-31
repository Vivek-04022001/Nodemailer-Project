import Button from "../utilities/Button";
import Empower from "../../assets/empower-youth.png";
import Empower2 from "../../assets/empower-youth-2.png";
import { IoIosArrowForward } from "react-icons/io";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <div className="container mx-auto mb-40 px-4 max-w-6xl flex flex-col gap-20">
        {/* upper-container */}
        <div className=" flex items-center justify-between gap-20">
          {/* text content */}
          <div className="w-1/2 space-y-4 ">
            <h3 className="text-6xl text-left font-bold leading-[76.8px] tracking-wider">
              Empowering Youth for a Brighter Future
            </h3>
            <p className="text-neutral text-lg leading-6">
              United Youth Network (UNYN) is a dynamic and impactful
              international student society committed to nurturing the talents
              and potential of young individuals across colleges and
              universities of different countries. Join us today to be a part of
              our mission to create a brighter and more promising future.
            </p>
            <div className="buttons-container flex gap-8 ">
              <Button text={'Join'}/>
              <button className="text-brand flex items-center gap-2">
                Learn More <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="image-container w-1/2 ">
            <img src={Empower} alt="empower-youth" />
            <div className="bg-brand/10 p-4 flex flex-col gap-10 ">
              <div className="text-content">
                <h4 className="font-semibold">Empower the Youth Today</h4>
                <p className="text-xs font-light">
                  Unlock Your Potential and Make a Diffrence
                </p>
              </div>

              {/* button container */}
              <div className="flex justify-between items-center">
                {/* circles */}
                <div className="flex gap-1">
                  <div className="bg-secondary/90 w-2 h-2 rounded-full"></div>
                  <div className="bg-secondary/50 w-2 h-2 rounded-full"></div>
                  <div className="bg-secondary/50 w-2 h-2 rounded-full"></div>
                </div>

                {/* arrows button */}
                <div className="flex gap-4 text-secondary text-lg">
                  <div>
                    <BsArrowLeftCircle />
                  </div>
                  <div>
                    <BsArrowRightCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* lower-container */}
        <div className="space-y-10 ">
          {/* text-content */}
          <div className="flex gap-4 justify-between">
            <h3 className="w-1/2  text-5xl leading-[57.6px]">
              Empowering Youth for a Brighter Future:{" "}
              <span className="text-secondary">
                UNYN's Impact on Youth Individuals
              </span>
            </h3>
            <p className="max-w-md text-neutral text-lg leading-5">
              United Youth Network (UNYN) is dedicated to empowering young
              individuals by providing them with opportunities for growth and
              development. Through our international student society, we aim to
              nurture their talents and unlock their full potential. By
              investing in the youth today, we believe that we can create a
              brighter and more promising future for tomorrow.
            </p>
          </div>

          {/* image */}
          <div>
            <img src={Empower2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
