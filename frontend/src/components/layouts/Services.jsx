import { IoIosArrowForward } from "react-icons/io";
import mentoring_services from "../../assets/mentoring-programs.png";
import networking_events from "../../assets/networking-events.png";
import international_collaboration from "../../assets/international-collaboration.png";
import Button from "../utilities/Button";

const Services = () => {
  return (
    <section id="services">
      <div className="container max-w-6xl px-4 mb-40 mx-auto space-y-10">
        <div className="mx-auto max-w-2xl  text-center">
          <h4 className="text-lg font-semibold">Empower</h4>
          <h3 className="text-5xl font-bold">
            Unlock Your Potential with UNYN
          </h3>
          <p className="text-lg text-neutral">
            At UNYN, we offer a range of impactful programs and events designed
            to empower young individuals. From mentorship programs to networking
            events and international collaborations, we provide the resources
            and support needed to help you thrive.
          </p>
        </div>

        {/* services-card container */}
        <div className="flex justify-between items-center gap-10">
          {/* Mentoring Program */}
          <div className="flex flex-col items-center gap-4 text-center">
            <img src={mentoring_services} alt="" className="w-[60px]" />
            <h4 className="font-bold text-base">Mentoring Programs</h4>
            <p className="text-neutral text-lg">
              Connect with experienced mentors who will guide you towards
              success.
            </p>
          </div>
          {/* Networking Events */}
          <div className="flex flex-col items-center gap-4 text-center">
            <img src={networking_events} alt="" className="w-[60px]" />
            <h4 className="font-bold text-base">Networking Events</h4>
            <p className="text-neutral text-lg">
              Expand your network and forge valuable connections with like-
              minded individual.
            </p>
          </div>
          {/* International Collaborations */}
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src={international_collaboration}
              alt=""
              className="w-[60px]"
            />
            <h4 className="font-bold text-base">Mentoring Programs</h4>
            <p className="text-neutral text-lg">
              Connect with experienced mentors who will guide you towards
              success.
            </p>
          </div>
        </div>

        {/* button container */}
        <div className="mx-auto flex justify-center gap-8 ">
          <Button text={'Join'}/>
          <button className="text-brand flex items-center gap-2">
            Learn More <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
