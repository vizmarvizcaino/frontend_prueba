import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addAcademic } from '../../features/academic/academicSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const DataAcademic = () => {
  const [academicBtn, setAcademicBtn] = useState(false);
  const [academic, setAcademic] = useState({
    grado: '',
    materia: '',
    nota: '',
    salon: '',
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    setAcademic({
      ...academic,
      [e.target.name]: e.target.value,
    });
    if(academic.grado.length >= 2 && academic.nota.length >= 2 ){
      setAcademicBtn(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAcademic({
      ...academic,
      id: uuid(),
    }));
    if(academicBtn){
      return navigate("/data-summary");
    }
  };

  return (
    <div className='container-usuario'>
      <h2>Ingresa los datos academicos del usuario</h2>
      <form action="" onSubmit={handleSubmit} className='container-usuario'>
        <input type="text" placeholder="introduzca el grado" name="grado" autoComplete='off' onChange={handleChange} />
        <input type="text" placeholder="introduzca la asignatura" name="materia" autoComplete='off' onChange={handleChange} />
        <input type="text" placeholder="introduzca la nota" name="nota" autoComplete='off' onChange={handleChange} />
        <input type="text" placeholder="introduzca el numero de salon" name="salon" autoComplete='off' onChange={handleChange} />
        <button disabled={academicBtn === false} className="btn btn-primary">Siguiente</button>
      </form>
    </div>
  );
};

export default DataAcademic;