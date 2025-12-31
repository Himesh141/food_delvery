import React, { Component } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
export default class SignUp extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">FoodApp</Link>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id='menu'>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className='nav-link' to="/">Home</Link></li>
                    <li className="nav-item"><Link className='nav-link' to="/signup">SignUp</Link></li>
                    <li className="nav-item"><Link className='nav-link' to="/login">LogIn</Link></li>
                </ul>
            </div>
            
        </nav>
       <div className="register-container">
        <div className="card-out">
        <div className="card ">

          <h3 className="text-center brand mt-2 mb-1">🍕 FoodApp</h3>
          <h5 className="text-center mb-1">Create Account</h5>
          <p className="text-center text-muted mb-2">
            Order your favorite food fast
          </p>

          <form>
            <div className="mb-2">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter User name"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter phone number"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Email (Optional)</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Create password"
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Role</label>
                <select className="form-select" name="role">
                  <option value="">Select your role</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                  <option value="delivery">Restuarent</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Create Account
            </button>
          </form>

          <div className="text-center my-2 text-muted">OR</div>

          <button className="btn btn-outline-secondary w-100">
            Continue with Google
          </button>

          <p className="text-center small text-muted mt-3">
            By continuing, you agree to our{" "}
            <a href="#" className="text-decoration-none">
              Terms
            </a>{" "}
            &{" "}
            <a href="#" className="text-decoration-none">
              Privacy Policy
            </a>
          </p>

          <p className="text-center mb-0">
            Already have an account?{" "}
            <a href="#" className="brand text-decoration-none">
              Log in
            </a>
          </p>

        </div>
      </div>
    </div> 
      </>
    )
  }
}
