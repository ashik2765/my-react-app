import React, { useContext } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider'

export default function DashboardHome() {
    const { user } = useContext(AuthContext);
    return (
        <div className="max-w-sm mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-3xl">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 relative">
                <div className="flex items-center space-x-4">
                    <img className="w-24 h-24 rounded-full border-4 border-white shadow-lg" src={user?.photoURL} alt="User avatar" />
                    <div>
                        <h2 className="text-2xl font-bold text-white">{user?.displayName}</h2>
                        <p className="text-gray-200">{user?.email}</p>
                        <span className="inline-block bg-white text-indigo-500 text-sm font-semibold px-3 py-1 rounded-full mt-2 shadow-md">User</span>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-100 to-transparent"></div>
            </div>
            <div className="p-6 bg-gray-50">
                <p className="text-gray-700">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
        </div>
    )
}

