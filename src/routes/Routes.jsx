import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Queries from "../pages/Queries/Queries";
import RecommendationsForMe from "../pages/RecommendationsForMe/RecommendationsForMe";
import MyQueries from "../pages/MyQueries/MyQueries";
import MyRecommendations from "../pages/MyRecommendations/MyRecommendations";
import AddQueries from "../pages/AddQueries/AddQueries";
import QueryDetails from "../pages/QueryDetails/QueryDetails";
import UpdateQuery from "../../UpdateQuery/UpdateQuery";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('https://alt-products-server.vercel.app/queries')
        },


        {
            path:'/queries',
            element: <Queries></Queries>,
            loader: () => fetch('https://alt-products-server.vercel.app/queries')
        },
        {
            path:'/queryDetails/:id',
            element: <QueryDetails></QueryDetails>,
            loader: () => fetch('https://alt-products-server.vercel.app/queries')
            // loader: ({params}) => fetch(`https://alt-products-server.vercel.app/queries/${params.id}`)
        },


        {
            path:'/recommendationsForMe',
            element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe></PrivateRoute>
        },
        {
            path:'/myQueries',
            element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
        },
        {
            path:'/addQueries',
            element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
        },
        {
            path:'/updateQuery/:id',
            element: <PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>,
            loader: ({params}) => fetch(`https://alt-products-server.vercel.app/queries/${params.id}`)
        },
        {
            path:'/myRecommendations',
            element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
        },

        
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },


      ]
    },
  ]);
  export default router;