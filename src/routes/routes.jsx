import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import App from "../App";
import AllApplication from "../pages/AllApplication";
import SingleApp from "../pages/SingleApp";
import PageNotFound from "../components/NotFound/PageNotFound";
import Installed from "../pages/Installed";

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
                errorElement: <h3>App Not Found</h3>
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