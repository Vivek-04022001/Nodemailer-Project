import React from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/Modal";
const Button = ({
  text,
  textColor = "text-white",
  bgColor = "bg-brand",
  borderColor = "border-brand",
}) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const handleOnClick = () => {
    if (text.toLowerCase() === "join") {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <div
      className={`min-w-[150px] cursor-pointer text-center  border  ${textColor} ${bgColor} ${borderColor} rounded-full px-8 py-3`}
      onClick={handleOnClick}
    >
      {text}
    </div>
  );
};

export default Button;
