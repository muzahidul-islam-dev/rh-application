import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import App from "../App";
import AllApplication from "../pages/AllApplication";

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
                path: '*',
                element: 'Not Found'
            }
        ]
    }
])

export default route;