import Header from "./components/Header/Header";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";

AOS.init();

function App() {
  const [modal, setModal] = useState(false)
  return (
    <div className="app">
      {modal && <Modal modal={modal} setModal={setModal} />}
      <Header />
      <About />
      <Shop modal={modal} setModal={setModal}/>
      <Contact />
      <Footer />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
