import React from 'react';
import { connect } from "react-redux";
import { ConnectedTaskList } from './TaskList'

export const Dashboard = ({ groups }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        {
        groups.map(( group ) => {
          return(
            <ConnectedTaskList key={group.id} id={group.id} name={group.name} />
          )
        })
      }
      </div>
      
    </div>
  )
}




function mapStateToProps( state ){
  return{
    groups:state.groups
  }
}


export const ConnectedDashboard = connect(mapStateToProps)(Dashboard)