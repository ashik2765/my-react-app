import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../authProvider/AuthProvider'

export default function NavBar() {

    const { user, logOut } = useContext(AuthContext);
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>

    </>
   
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Shoes</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>


            <div className="navbar-end">
                <div className="avatar me-5">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                {
                    user ? <><button onClick={()=>logOut()} className="btn btn-ghost">
                        Log Out
                    </button></>
                        : <><Link to="/login" className="btn">Login</Link></>
                }

            </div>
        </div>
    )
}
