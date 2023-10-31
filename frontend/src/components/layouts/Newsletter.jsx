import React from "react";
import Button from "../utilities/Button";
import newsletter from '../../assets/newsletter.png'

const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="container max-w-6xl px-4 mb-40 mx-auto flex gap-x-10 items-center">
        <div className="w-1/2 space-y-4">
          <h3 className="text-5xl">Stay Updated with UNYN Newsletter </h3>
          <p className="text-neutral">
            Gets the latest updates, news and exciting opportunities for UNYN.{" "}
          </p>
          <form className="flex gap-x-4 ">
            <div className="flex-1 border border-brand rounded-full overflow-hidden p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-3 outline-none placeholder:text-neutral border-none "
              />
            </div>
            <Button text={"Sign Up"} />
          </form>
          <small className="text-neutral">
            By signing up, you agree to our Term and Conditions.
          </small>
        </div>
        <div className="w-1/2">
            <img src={newsletter} alt="newsletter-section-img" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
