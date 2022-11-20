import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../features/user/userSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom" ;
import "../DataPersonal/DataPersona.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DataPersonal = () => {
  const [userBtn, setUserBtn] = useState(false);
  const [user, setUser] = useState({
    id: uuid(),
    nombres: "",
    apellidos: "",
    telefono: "",
  });
  const navigate =useNavigate()

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    if (
      user.nombres.length >= 3 &&
      user.apellidos.length >= 3 &&
      user.telefono.length >= 5
    ) {
      setUserBtn(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUsers({
        ...user,
        id: uuid(),
      })
    );
    if(userBtn){
      return navigate("/data-academic");
    }
  };
  return (
    <div className="container-usuario">
      <h2>Ingresa los datos del usuario</h2>
      <form action="" onSubmit={handleSubmit} className="container-usuario">
        <input
          type="text"
          placeholder="Introduzca los nombres"
          name="nombres"
          autoComplete="off"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Introduzca los apellidos"
          name="apellidos"
          autoComplete="off"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Introduzca el telefono"
          name="telefono"
          autoComplete="off"
          onChange={handleChange}
        />
        <button disabled={userBtn === false} className="btn btn-primary">
          Siguiente
        </button> 
      </form>
    </div>
  );
};

export default DataPersonal;
