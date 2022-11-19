import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addAcademic } from '../../features/academic/academicSlice'
import { v4 as uuid } from 'uuid'
import { Link } from 'wouter'
import "bootstrap/dist/css/bootstrap.min.css"

const DataAcademic = () => {
  const [academicBtn, setAcademicBtn] = useState(false)
  const [academic, setAcademic] = useState({
    grado: '',
    materia: '',
    nota: '',
    salon: '',
  })

  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    setAcademic({
      ...academic,
      [e.target.name]: e.target.value,
    })
    if(academic.grado.length >= 3 && academic.nota.length >= 3 ){
      setAcademicBtn(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addAcademic({
      ...academic,
      id: uuid(),
    }))
    alert('Los datos del usuario se ha guardado correctamente')
  }

  return (
    <div className='container-usuario'>
      <h2>Ingresa los datos academicos del usuario</h2>
      <form action="" onSubmit={handleSubmit} className='container-usuario'>
        <input type="text" placeholder="introduzca el grado" name="grado" autoComplete='off' onChange={handleChange} />
        <input type="text" placeholder="introduzca la asignatura" name="materia" autoComplete='off' onChange={handleChange} />
        <input type="text" placeholder="introduzca la nota" name="nota" autoComplete='off' onChange={handleChange} />
        <input type="text" placeholder="introduzca el numero de salon" name="salon" autoComplete='off' onChange={handleChange} />
        <button disabled={academicBtn === false} className="btn btn-primary">Guardar</button>
        {!academicBtn ? '' : <li ><Link href='/data-summary'><a className="btn btn-primary p-1 mb-3 bg-primary text-white">Siguiente</a></Link></li>}
        <Link href='/listado-usuarios'><h3>Mostar listado de usuarios</h3></Link>
      </form>
    </div>
  )
}

export default DataAcademic