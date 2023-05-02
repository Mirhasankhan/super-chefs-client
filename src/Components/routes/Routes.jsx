import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import ChefDetails from "../Home/ChefDetails/ChefDetails";

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
            }
        ]
    }
])

export default router;