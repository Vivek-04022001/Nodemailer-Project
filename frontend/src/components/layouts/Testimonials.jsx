import React from "react";
import { RiStarSFill } from "react-icons/ri";
import profile1 from "../../assets/profile-1.png";
import profile2 from "../../assets/profile-2.png";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-4 mb-40 max-w-6xl space-y-20">
        {/* text content */}
        <div className="space-y-4">
          <h3 className="text-5xl font-bold">Member Testimonials</h3>
          <p className="text-lg text-neutral">
            Here what our members have to say about their experience with UNYN
          </p>
        </div>

        {/* testimonials cards container */}
        <div className="flex gap-x-10">
          <div className="w-1/2">
            {/* ratings  */}
            <div className="flex">
              <RiStarSFill className="text-brand" />
              <RiStarSFill className="text-brand" />
              <RiStarSFill className="text-brand" />
              <RiStarSFill className="text-brand" />
              <RiStarSFill className="text-neutral" />
            </div>
            <h4 className="text-lg font-bold">
              UNYN has provided me with incredible opportunities to grow and
              connect with like-minded individuals.
            </h4>

            {/* profile containers */}
            <div className="flex items-center gap-x-4">
              <img src={profile1} alt="john-doe" />
              {/* profile-details */}
              <div>
                <h4 className="text-base">John Doe</h4>
                <h5 className="text-sm">Marketing Manager, XYZ Company</h5>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            {/* ratings  */}
            <div className="flex">
              <RiStarSFill className="text-brand" />
              <RiStarSFill className="text-brand" />
              <RiStarSFill className="text-brand" />
              <RiStarSFill className="text-brand" />
              <RiStarSFill className="text-neutral" />
            </div>
            <h4 className="text-lg font-bold">
              UNYN has provided me with incredible opportunities to grow and
              connect with like-minded individuals.
            </h4>

            {/* profile containers */}
            <div className="flex items-center gap-x-4">
              <img src={profile2} alt="john-doe" />
              {/* profile-details */}
              <div>
                <h4 className="text-base">John Doe</h4>
                <h5 className="text-sm">Marketing Manager, XYZ Company</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
