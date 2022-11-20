import React from "react";
import "../TableRegister/TableRegister.css";
import "../DataPersonal/DataPersona.css";

const TableRegister = ({
  nombre,
  apellido,
  telefono,
  grado,
  materia,
  nota,
  salon,
}) => {
  return (
    <>
      <div>
        <table className="table-modify table  table-hover">
          <thead>
            <tr>
              <th>nombre</th>
              <th>apellido</th>
              <th>telefono</th>
              <th>grado</th>
              <th>materia</th>
              <th>nota</th>
              <th>salon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{nombre}</td>
              <td>{apellido}</td>
              <td>{telefono}</td>
              <td>{grado}</td>
              <td>{materia}</td>
              <td>{nota}</td>
              <td>{salon}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRegister;
