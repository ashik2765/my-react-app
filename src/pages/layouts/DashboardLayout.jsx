import React from 'react'
import AllProducts from '../dashboard/AllProducts'
import DashboardHome from '../dashboard/DashboardHome'
import AddProduct from '../dashboard/AddProduct'
import { Link, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard/all-products">All Products</Link></li>
                    <li><Link to="/dashboard/add-product">Add a product</Link></li>
                </ul>

            </div>
        </div>
    )
}
