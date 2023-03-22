import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Friend's club</h1>
                <p> Friend's club helps you connect and share with the people in your life.</p>
                <span> Do you have an account?</span>
                <Link to ='/login'>
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        <input type="Email" placeholder='Email' />
                        <input type="text" placeholder='username' />
                        <input type="password" placeholder='password' />
                        <button>Register</button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Register  