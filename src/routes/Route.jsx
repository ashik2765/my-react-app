import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import MainLayout from "../pages/layouts/MainLayout";
import Home from "../pages/home/Home";
import DashboardLayout from "../pages/layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AllProducts from "../pages/dashboard/AllProducts";
import AddProduct from "../pages/dashboard/AddProduct";
import ProductDetails from "../pages/home/ProductDetails";
import EditProduct from "../pages/dashboard/EditProduct";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/shoe"),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/shoe/${params.id}`)
      }
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "registration",
    element: <Registration></Registration>,
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "all-products",
        element: <AllProducts></AllProducts>
      },
      {
        path: "all-products/edit/:id",
        element: <EditProduct></EditProduct>,
        loader: ({ params }) => fetch(`http://localhost:3000/shoe/${params.id}`)
      },
      {
        path: "add-product",
        element: <AddProduct></AddProduct>
      },
    ]
  }
]);