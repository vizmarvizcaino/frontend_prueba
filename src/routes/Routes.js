import React from 'react'
import { Route, Switch } from 'wouter'
import DataPersonal from '../components/DataPersonal/DataPersonal'
import DataAcademic from '../components/DataAcademic/DataAcademic'
import DataSummary from '../components/Summary/Summary'
import { PeticionApi } from '../peticiones/getResource'
import TableRegister from '../components/TableRegister/TableRegister'

const Routes = () => {
  return (
    <div>
      <div className="routes">
        <Switch>
          <Route path="/" component={DataPersonal} />
          <Route path="/data-academic" component={DataAcademic} />
          <Route path="/data-summary" component={DataSummary} />
          <Route path="/listado-usarios" component={TableRegister} />
          <PeticionApi />
        </Switch>
      </div>

    </div>
  )
}

export default Routes