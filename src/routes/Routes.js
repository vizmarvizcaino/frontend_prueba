import React from 'react'
import { Routes as Switch, Route, } from 'react-router-dom'
import DataPersonal from '../components/DataPersonal/DataPersonal'
import DataAcademic from '../components/DataAcademic/DataAcademic'
import DataSummary from '../components/Summary/Summary'
import { PeticionApi } from '../peticiones/getResource'


const Routes = () => {
  return (
    <div>
      <div className="routes">
        <Switch>
          <Route exact path="/" element={<DataPersonal />} />
          <Route exact path="/data-academic" element={<DataAcademic />} />
          <Route exact path="/data-summary" element={<DataSummary />} />
          <Route exact path="/list-users" element={<PeticionApi />} />
          <Route exact path="*" element={"Page Not Found"} />
        </Switch>
      </div>

    </div>
  )
}

export default Routes