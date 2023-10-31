import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto mb-10 px-4 max-w-6xl relative ">
        {/* address section */}
        <div className="w-1/2 ">
          <h3 className="text-5xl font-bold">Get in touch</h3>
          <p className="text-lg text-neutral">
            <span className="text-secondary">Contact with our team</span> to
            talk about how we can help your business process at scale, or sign
            up for more info
          </p>

          <div className="max-w-xs mt-20 space-y-2">
            <div className="flex gap-4 ">
              <FaMapMarkerAlt />
              <span>
                1-4929, Lane No. 6, Balbirnagar Ext., Shahdara, Delhi 110032
              </span>
            </div>
            <div className="flex gap-4 ">
              <BsFillTelephoneFill />
              <span>+91-8888888888</span>
            </div>
            <div className="flex gap-4 ">
              <IoMdMail />
              <span>info@unyn.com</span>
            </div>
          </div>
        </div>

        {/* floating form box */}
        <form className="bg-white max-w-lg absolute -top-8 z-10 right-0 shadow-2xl p-6  space-y-4 ">
          <h3 className="text-5xl font-bold">Say something</h3>
          <input
            type="text"
            className="w-full outline-none border border-brand rounded-lg py-4 px-6 placeholder:text-neutral"
            placeholder="Your name..."
          />
          <input
            type="email"
            className="w-full outline-none rounded-lg border border-brand  py-4 px-6 placeholder:text-neutral"
            placeholder="Your email..."
          />
          <textarea
            rows="8"
            className="w-full rounded-lg outline-none border border-brand placeholder:text-neutral py-4 px-6"
            placeholder="Message..."
          ></textarea>
          <button className="w-full rounded-lg bg-brand text-white text-center p-2">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
