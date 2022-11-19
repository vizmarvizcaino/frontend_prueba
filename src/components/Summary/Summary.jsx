import React, { useState } from "react";
import axios from "axios";
import { Link } from "wouter";
import { useSelector } from "react-redux";
import "../Summary/Summary.css";

const Summary = () => {
  const [message, setMessage] = useState("");
  const listAcademics = useSelector((state) => state.academics);
  const listUser = useSelector((state) => state.users);
  const API_URL = "http://localhost:4000/user";
  const payload = {
    listUser,
    listAcademics,
  };

  async function writeResource() {
    return new Promise(function (resolve, reject) {
      axios.post(API_URL, payload).then(function (response) {
        // handle success
        console.log(response.data);
        resolve(response.data);
      });
    });
  }
  async function requestResource() {
    const message = await writeResource();
    setMessage(message);
    alert(message.message);
  }

  return (
    <>
      <div className="container-usuario">
        <h2>Resumen de los datos</h2>
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
        <Link href="/listado-usuarios">
          <h3>Mostar listado de usuarios</h3>
        </Link>
      </div>
    </>
  );
};

export default Summary;
