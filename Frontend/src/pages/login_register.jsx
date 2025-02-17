import { useState } from "react";
import "../css/login.css";

export default function Login() {
  const [isProvider, setIsProvider] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={`login-container ${isProvider ? "provider-active" : ""}`}>
      {/* Left Side - Seeker Login/Signup */}
      <div className="login-side seeker-side" onClick={() => setIsProvider(false)}>
        {!isProvider ? (
          !isSignup ? (
            <>
              <h3>Login as a Seeker</h3>
              <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
              </form>
              <p onClick={() => setIsSignup(true)} className="toggle-link">Not have an account? Sign up</p>
            </>
          ) : (
            <>
              <h3>Sign up as a Seeker</h3>
              <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
              </form>
              <p onClick={() => setIsSignup(false)} className="toggle-link">Already have an account? Login</p>
            </>
          )
        ) : (
          <h2>Click here to login as a Seeker</h2>
        )}
      </div>

      {/* Right Side - Provider Login/Signup */}
      <div className="login-side provider-side" onClick={() => setIsProvider(true)}>
        {isProvider ? (
          !isSignup ? (
            <>
              <h3>Login as a Provider</h3>
              <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
              </form>
              <p onClick={() => setIsSignup(true)} className="toggle-link">Not have an account? Sign up</p>
            </>
          ) : (
            <>
              <h3>Sign up as a Provider</h3>
              <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
              </form>
              <p onClick={() => setIsSignup(false)} className="toggle-link">Already have an account? Login</p>
            </>
          )
        ) : (
          <h2>Click here to login as a Provider</h2>
        )}
      </div>
    </div>
  );
}
