import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

const { username, password } = formData
const { handleLogin } = props
  
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value,
  }))
}

  return (
    <div className="login-form-div">
      <div className="form-container">
  <form onSubmit={(e) => {
    e.preventDefault();
    handleLogin(formData)
  }}>
    <h3>Login</h3>
    <label>
      Username:
       <input className="login"
        type='text'
        name='username'
        value={username}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Password:
       <input className="login"
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
      />
    </label>
    <br />
    <Link to='/register'>Register</Link>
    <button>Submit</button>
  </form>
      </div>
      </div>
)
}
