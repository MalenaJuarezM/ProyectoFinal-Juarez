import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../../context/cartContext";
import { serverTimestamp } from "firebase/firestore";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const { cart, getTotalPrice } = useContext(CartContext);

  const total = getTotalPrice();

  const capturarDatos = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total,
      time: serverTimestamp(),
    };
  };

  return (
    <Checkout
      capturarDatos={capturarDatos}
      enviarFormulario={enviarFormulario}
    />
  );
};
