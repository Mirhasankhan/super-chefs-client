import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import ChefDetails from "../Home/ChefDetails/ChefDetails";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ErrorElement from "./ErrorElement";
import Blog from "../Blog/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('https://super-chefs-server-crih2tsf2-mirhasankhan.vercel.app/chef')
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><ChefDetails/></PrivateRoute>,
                loader: ({params})=> fetch(`https://super-chefs-server-crih2tsf2-mirhasankhan.vercel.app/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    }
])

export default router;