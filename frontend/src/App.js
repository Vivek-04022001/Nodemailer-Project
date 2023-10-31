import AboutUs from "./components/layouts/AboutUs";
import Header from "./components/layouts/Header";
import Services from "./components/layouts/Services";
import Events from "./components/layouts/Events";
import Testimonials from "./components/layouts/Testimonials";
import JoinSection from "./components/layouts/JoinSection";
import Newsletter from "./components/layouts/Newsletter";
import Contact from "./components/layouts/Contact";
import Footer from "./components/layouts/Footer";
import FormModal from "./components/layouts/form/FormModal";
import { useContext, useEffect } from "react";
import { ModalContext } from "./context/Modal";

function App() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (isModalOpen) {
      setIsModalOpen(!isModalOpen);
    }
  };
  return (
    <>
      <div
        className={`${isModalOpen ? "blur-lg bg-slate-500/20 " : " "} `}
        onClick={handleCloseModal}
      >
        <Header />
        <AboutUs />
        <Services />
        <Events />
        <Testimonials />
        <JoinSection />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
      {/* Modal-form */}
      <FormModal />
    </>
  );
}

export default App;
