import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import ChefDetails from "../Home/ChefDetails/ChefDetails";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('https://super-chefs-server-crih2tsf2-mirhasankhan.vercel.app/chef')
            },
            {
                path: '/:id',
                element: <ChefDetails/>,
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
        ]
    }
])

export default router;