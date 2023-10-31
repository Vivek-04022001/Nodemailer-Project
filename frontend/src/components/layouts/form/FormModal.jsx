import { useContext, useState } from "react";
import { ModalContext } from "../../../context/Modal";
import Logo from "../../../assets/UNYN-BLUE-LOGO.png";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaulFormFields = {
  name: "",
  email: "",
  phone: "",
};

const FormModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { name, email, phone } = formFields;

  const handleCloseModal = () => {
    if (isModalOpen) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const dataToSend = formFields;

    try {
      const response = await axios.post("http://localhost:8800", dataToSend);
      toast.success("Thank You");
    } catch (error) {
      toast.warning(`${error.message}`);
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        className={`container max-w-md bg-white flex flex-col p-8 space-y-8 fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 z-50 ${
          !isModalOpen && "hidden"
        }`}
        onSubmit={handleSubmitForm}
      >
        {/* close modal */}
        <div
          className="ml-auto text-2xl cursor-pointer"
          onClick={handleCloseModal}
        >
          <RxCross2 />
        </div>

        <img src={Logo} alt="brand-logo" className="w-[120px] mx-auto" />
        <h2 className="text-2xl font-bold text-center">Fill details to join</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="p-2 px-3 placeholder:text-neutral outline-none border border-neutral rounded-lg"
          onChange={handleChange}
          value={name}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="p-2 px-3 placeholder:text-neutral outline-none border border-neutral rounded-lg"
          onChange={handleChange}
          value={email}
          required
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          className="p-2 px-3 placeholder:text-neutral outline-none border border-neutral rounded-lg"
          onChange={handleChange}
          value={phone}
          required
        />

        <button
          type="submit"
          className="w-full bg-brand rounded-lg text-center text-white p-2 py-3"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormModal;
