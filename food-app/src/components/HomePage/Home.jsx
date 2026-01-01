import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
export default class Home extends Component {
  render() {
    return (
      <>
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
