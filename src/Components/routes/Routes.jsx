import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import ChefDetails from "../Home/ChefDetails/ChefDetails";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ErrorElement from "./ErrorElement";
import Blog from "../Blog/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import OurChef from "../OurChef.jsx/OurChef";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home />                
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><ChefDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://super-chefs-server.vercel.app/chef/${params.id}`)
            },
            {
                path: '/ourChef',
                element: <OurChef/>,
                loader: () => fetch('https://super-chefs-server.vercel.app/chef')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])

export default router;