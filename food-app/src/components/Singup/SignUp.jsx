import React, { Component } from "react";
import "./signup.css";

export default class SignUp extends Component {
  render() {
    return (
      <div className="register-container">
        <div className="signup-card">
          <h3 className="text-center brand mt-2 mb-1">🍕 FoodApp</h3>
          <h5 className="text-center mb-1">Create Account</h5>
          <p className="text-center text-muted mb-3">
            Order your favorite food fast
          </p>

          <form>
            <div className="mb-2">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter user name"
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

            <div className="mb-3">
              <label className="form-label">Role</label>
              <select className="form-select">
                <option value="">Select your role</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="delivery">Restaurant</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}
