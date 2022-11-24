import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryPhone from "../Pages/CategoryPhone/CategoryPhone";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageSeller from "../Pages/Dashboard/ManageSeller/ManageSeller";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ReportedProduct from "../Pages/Dashboard/ReportedProduct/ReportedProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <CategoryPhone></CategoryPhone>,
                loader: ({ params }) => fetch(`http://localhost:5000/allphones/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                // booking product
                path: '/dashboard',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/users',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/manage-seller',
                element: <ManageSeller></ManageSeller>
            },
            {
                // seller product
                path: '/dashboard/my-products',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/reported-product',
                element: <ReportedProduct></ReportedProduct>
            },
        ]
    }
])