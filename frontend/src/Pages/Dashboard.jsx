import React from 'react'
import './Dashboard.css'
import TransactionTable from '../Components/TransactionTable'
const Dashboard = () => {
  return (
    <div className='Dashboard-comp'>
        <h1><b>Transaction Dashboard</b></h1>

        <TransactionTable/>
    </div>
  )
}

export default Dashboard