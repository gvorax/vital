import React from "react";
import "./ModalStyle.scss";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Modal = ({ modal, setModal }) => {
  const [data, setData] = useState({
    name: "",
    phone: 998,
  });
  const handleChange = (e) => {
    const { name,value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (data.name && data.phone) {
      toast.success("Tez orada biz siz bilan bog'lanamiz...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setModal(false);
    } else {
      toast.warn("Ma'lumotlarni to'liq to'ldiring...", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div className="menu_model" onClick={() => setModal(false)}>
      <div className="modal_box" onClick={(e) => e.stopPropagation()}>
        <h2>Biz tezda aloqa chiqamiz 👋</h2>
        <form className="modal_form">
          <label>Ismingiz</label>
          <input
            type="text"
            placeholder="Ismingizni kiriting..."
            required
            value={data.name}
            name="name"
            onChange={(e)=>handleChange(e)}
          />
          <label htmlFor="number">Telefon raqamingiz</label>
          <input
            type="text"
            placeholder="99 999 99 99"
            required
            maxLength={12}
            value={data.phone}
            name="phone"
            onChange={(e)=>handleChange(e)}
          />
          <button onClick={handleSubmit}>Yuborish</button>
        </form>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Modal;
