import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Table2 from './Table2'
import { Route, Routes } from 'react-router-dom'
import Studentinfo from '../components/Studentinfo'
import History from '../components/History'
import Onlinepay from '../components/Onlinepay'
import Onlinenext from '../components/Onlinenext'
import Dash from '../components/Dash'
import Cashreceipt from '../components/Cashreceipt'
export default function Dashboard() {
    return (

        <div
            style={{
                height: '100vh',
                width: '100%',
                display: 'flex'
            }}>
            {/* Sidebar  */}
            <div style={{
                height: '100vh',
                width: '220px',
                backgroundColor: '#3b5998',


            }}>
                <Sidebar />
            </div>

            {/* Header */}
            <div style={{
                display: 'block',
                width: '100%'
            }}>
                <div style={{
                    height: '20vh',
                    width: '100%',
                }}>
                    <Navbar />
                </div>
                <div style={{
                    height: '20vh',
                    width: '182vh',
                }}>

                    <Routes>
                    <Route path="/dashboard" element={<Dash />} />
                        <Route path="/fees" element={<Table2 />} />
                        <Route path="/studentinfo" element={<Studentinfo />} />
                        <Route path="/history" element={<History/>} />
                        <Route path="/payment" element={<Onlinepay/>} />
                        <Route path="/Online_next" element={<Onlinenext/>} />
                        <Route path="/recipt" element={<Cashreceipt/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
