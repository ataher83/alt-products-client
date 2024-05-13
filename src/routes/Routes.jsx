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
import CraftDetails from "../pages/CraftDetails/CraftDetails";
import ViewDetails from "./ViewDetails/ViewDetails";
import ArtAndCraftCategories from "../pages/ArtAndCraftCategories/ArtAndCraftCategories";
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
            // loader: () => fetch('https://art-gallery-server-one.vercel.app/craft')
        
        },
        {
            path:'/queries',
            element: <Queries></Queries>,
            loader: () => fetch('https://alt-products-server.vercel.app/queries')
            // loader: () => fetch('https://art-gallery-server-one.vercel.app/craft')
        },
        {
            path:'/queryDetails/:id',
            element: <QueryDetails></QueryDetails>,
            loader: () => fetch('https://alt-products-server.vercel.app/queries')
            // loader: () => fetch('https://art-gallery-server-one.vercel.app/craft')
            // loader: () => fetch('https://art-gallery-server-one.vercel.app/craft')
            // loader: ({params}) => fetch(`https://art-gallery-server-one.vercel.app/craft/${params.id}`)
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
            path:'/allArtAndCraftItems',
            element: <AllArtAndCraftItems></AllArtAndCraftItems>,
            loader: () => fetch('https://art-gallery-server-one.vercel.app/craft')
        },
        {
            path:'/artAndCraftCategories',   
            element: <ArtAndCraftCategories></ArtAndCraftCategories>,
            loader: () => fetch('https://art-gallery-server-one.vercel.app/catagories')
        },
        {
            path:'/addCraftItem',
            element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
            path:'/craftDetails/:id',
            element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,

            // loader: ({params}) => fetch(`https://art-gallery-server-one.vercel.app/craft/${params.id}`)

            loader: () => fetch('https://art-gallery-server-one.vercel.app/craft')
        },
        {
            path:'/updateCraft/:id',
            element: <UpdateCraft></UpdateCraft>,
            loader: ({params}) => fetch(`https://art-gallery-server-one.vercel.app/craft/${params.id}`)
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
            loader: () => fetch('https://art-gallery-server-one.vercel.app/user')
        },
        {
            path:'/viewDetails',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            
        }

      ]
    },
  ]);
  export default router;