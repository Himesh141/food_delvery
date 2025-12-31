import React from "react";
import '../styles/Register.css';
import bgImage from "../assets/images/regbackground.jpg";

function Register() {
  return (
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
  );
}

export default Register;
