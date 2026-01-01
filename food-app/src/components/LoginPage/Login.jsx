import React, { Component } from 'react'
import './login.css'
export default class Login extends Component {
  render() {
    return (
      <>
        <div className="login-container">
          <div className="card-out">
            <div className="card  ">

              <h3 className="text-center brand mt-2 mb-1">Login Here</h3>
              <p className="text-center text-muted mb-2">Order your favorite food fast</p>
              <form>
                <div className="mb-2">
                  <label  className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Enter phoneNumber/email" required/>
                </div>          
                  <div className="mb-2">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Create password" required/>
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
              </form>
            </div>
          </div>
        </div> 
      </>
    )
  }
}
