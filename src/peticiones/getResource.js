import { useEffect, useState } from 'react'
import TableRegister from '../components/TableRegister/TableRegister'
import axios from 'axios'

export function PeticionApi() {
  const [user, setUser] = useState([])
  const API_URL = 'http://localhost:4000/users'

  function getCoursesApi() {
    return new Promise((resolve, reject) => {
      axios(API_URL)
        .then(function (response) {
          // handle success
          resolve(response.data);
        })
    })
  }

  async function requestApi() {
    const user = await getCoursesApi()
    setUser(user)
  }

  useEffect(() => {
    requestApi()
  }, [])

  return (

    <div className="peticion">
      {
        user.map(user => {
          return <TableRegister
            nombre={user.nombres}
            apellido={user.apellidos}
            telefono={user.telefono}
            grado={user.grado}
            materia={user.materia}
            nota={user.nota}
            salon={user.salon}
            key={user.id}
          />

        })
      }
    </div>
  )
}


