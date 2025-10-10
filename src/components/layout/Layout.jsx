import React, { Suspense, useEffect, useState } from 'react'
import Header from '../Header'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import Footer from '../Footer'
import { ToastContainer } from 'react-toastify'
import Loading from '../Loading'

function Layout() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const loadingTime = setTimeout(() => {
            setLoading(false);
        }, 200);

        return () => clearTimeout(loadingTime);
    }, [location.pathname]);
    return (
        <div>
            <Header />
            <ToastContainer />
            {loading ? <Loading />  : <Outlet />}
                
            <Footer />
        </div>
    )
}

export default Layout
