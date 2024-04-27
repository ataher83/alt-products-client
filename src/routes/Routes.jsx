import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems/AllArtAndCraftItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList/MyArtAndCraftList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";
import Users from "../pages/Users/Users";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/craft')
        
        },
        {
            path:'/allArtAndCraftItems',
            element: <AllArtAndCraftItems></AllArtAndCraftItems>
        },
        {
            path:'/addCraftItem',
            element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
            path:'/updateCraft/:id',
            element: <UpdateCraft></UpdateCraft>,
            loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
        },
        {
            path:'/myArtAndCraftList',
            element: <PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/users',
            element: <Users></Users>,
            loader: () => fetch('http://localhost:5000/user')
        }

      ]
    },
  ]);
  export default router;