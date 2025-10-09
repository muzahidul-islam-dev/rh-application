import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import { ToastContainer } from 'react-toastify'

function Layout() {
    return (
        <div>
            <Header />
            <ToastContainer />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
