import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Summary/Summary.css";


const Summary = () => {
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const listAcademics = useSelector((state) => state.academics);
  const listUser = useSelector((state) => state.users);
  const API_URL = "http://localhost:4000/user";
  const payload = {
    listUser,
    listAcademics,
  };

  const navigate = useNavigate();

  const writeResource = async ()  => {
    return new Promise((resolve, reject) => {
      axios.post(API_URL, payload)
        .then((response) => {
        // handle success
          resolve(response.data);
        })
        .then(error => {
          reject(error);
        });
    });
  };
  const requestResource = async () => {
    setLoader(true);
    const message = await writeResource();
    setMessage(message);
    alert(message.message);
    setLoader(false);
    if(message){
      return navigate("/list-users");
    }
  };

  return (
    <>
      <div className="container-usuario">
        <h2>Resumen de los datos</h2>
        {loader ? <Spinner color="primary"/>  : '' }
        <p>{message}</p>
        {listUser.map((user) => (
          <div key={user.id} className="data-usuario">
            <div>
              <h3>Nombres</h3>
              <p>{user.nombres}</p>
            </div>
            <div>
              <h3>Apellidos</h3>
              <p>{user.apellidos}</p>
            </div>
            <div>
              <h3>Telefono</h3>
              <p>{user.telefono}</p>
            </div>
          </div>
        ))}

        {listAcademics.map((academic) => (
          <div key={academic.id} className="data-usuario">
            <div>
              <h3>Grado</h3>
              <p>{academic.grado}</p>
            </div>
            <div>
              <h3>Materia</h3>
              <p>{academic.materia}</p>
            </div>
            <div>
              <h3>Nota</h3>
              <p>{academic.nota}</p>
            </div>
            <div>
              <h3>Salon</h3>
              <p>{academic.salon}</p>
            </div>
          </div>
        ))}
        <button onClick={requestResource} className="btn btn-primary">
          Enviar
        </button>
      </div>
    </>
  );
};

export default Summary;
