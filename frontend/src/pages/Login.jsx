import React, { useState } from 'eact';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // For example, you can make an API call to authenticate the user
    // If the authentication is successful, redirect the user to the dashboard
    // If the authentication fails, display an error message
    if (email === 'admin@example.com' && password === 'password') {
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      setError('Invalid email or password');
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <div style={{ color: 'ed' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;