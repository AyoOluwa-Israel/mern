import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard'
import { Router, Route } from 'react-router-dom'
import { history } from "../store/history";
import { ConnectedNavigation } from './Navigation'
import { ConnectedTaskDetail } from "./TaskDetail";

const Main = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div>
        <ConnectedNavigation/>
          {/* <ConnectedDashboard/> */}
          <Route exact path="/dashboard" render={ () => (
            <ConnectedDashboard/> 
          )} />

          <Route exact path="/tasks/:id" render={ ({match}) => (
            <ConnectedTaskDetail match={match} /> 
          )} />
        </div>
      </Provider>
    </Router>
    
  )
}

export default Main

