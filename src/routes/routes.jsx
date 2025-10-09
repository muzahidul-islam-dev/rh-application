import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import App from "../App";
import AllApplication from "../pages/AllApplication";
import SingleApp from "../pages/SingleApp";
import PageNotFound from "../components/NotFound/PageNotFound";
import Installed from "../pages/Installed";
import AppNotFound from "../components/NotFound/AppNotFound";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: 'apps',
                element: <AllApplication />
            },
            {
                path: '/app/:id',
                element: <SingleApp />,
                errorElement: <AppNotFound />
            },
            {
                path: '/installed',
                element: <Installed />
            },
            {
                path: '*',
                element: <PageNotFound />
            }
        ]
    }
])

export default route;