import React from "react";
import "./ModalStyle.scss";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/context";
import axios from "axios";

const Modal = ({ modal, setModal }) => {
  const { pro_id, setPro_id } = useContext(ProductContext);

  const [data, setData] = useState({
    name: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  
  const getWater = async () =>{
    const res = await axios.get('https://selva.zirapcha.uz/api/product/all');


    let data1 = res.data.data.products.filter(item => item?.type == "water");
    let id = data1[0]._id
    setPro_id(id)

  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    getWater();

    if (data.name && data.phone_number && pro_id) {
      setModal(false);

      let res = await axios.post(`https://selva.zirapcha.uz/api/order/create`, {
        name: data.name,
        phone_number: data.phone_number,
        product_id: pro_id,
      });

      if(res.status == 201){
        toast.success("Tez orada biz siz bilan bog'lanamiz...", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setModal(false);
      }else{
        toast.warning("Biz bilan muammo sodir bo'ldi, Iltimos bizga qo'ng'iroq qiling!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      

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
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="number">Telefon raqamingiz</label>
          <input
            type="text"
            placeholder="99 123 45 67"
            required
            maxLength={9}
            value={data.phone_number}
            name="phone_number"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={handleSubmit}>Yuborish</button>
        </form>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Modal;
