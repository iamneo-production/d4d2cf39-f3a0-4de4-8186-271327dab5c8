import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './action';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  login: {
    width: '400px',
    padding: '40px',
    border: '2px solid black',
    borderRadius: '4px',
    backgroundColor: '#F7F7F7',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#33bbff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'140px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
  },
};

function Login({
  email,
  pass,
  firstName,
  setEmail,
  setName,
  setPass,
}) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password: pass,
      firstName,
    };

    fetch('http://localhost:8080/api/insurance/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
          alert('Login successful');
          navigate('/home');
        } 
        else {
          setError('Invalid credentials');
        }
      })
      .catch(error => {
        setError('An error occurred. Please try again later.');
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Login</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>Username:</label>
            <input
              style={styles.input}
              type="text"
              name="firstName"
              value={firstName}
              placeholder="Enter your username"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button style={styles.button} type="submit">
            Login
          </button>
          {error && alert(error)}
          <Link to="/home" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    firstName: state.login.firstName,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
