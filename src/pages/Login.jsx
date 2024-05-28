import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../authProvider/AuthProvider';

export default function Login() {

  const { user, signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content md:w-1/2 flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>Do not have an account? <Link to="/registration"><span className='text-green-700'>Registration</span></Link></p>
          </form>
          <div className='mb-5'>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  )
}
