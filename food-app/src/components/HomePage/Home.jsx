import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
export default class Home extends Component {
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
        <div className="image">
            <div className="row">
                <div className="col-md-12">
                    <div className="car">
                        <div className=" text-center">
                            <h1 className='text-danger'>Welcome to FoodApp</h1>
                            <Link to="/signup" className='btn btn-primary me-2'>Get Started</Link>
                            <Link to="/login" className='btn btn-secondary'>Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
