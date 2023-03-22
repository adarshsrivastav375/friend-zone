import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Friend's club </h1>
                <p> Friend's club helps you connect and share with the people in your life.</p>
                <span>Don't have an account?</span>
                <Link to='/register'>
                <button>Singn up</button>
                </Link>
               

            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                        <input type="text" placeholder='user name' />
                        <input type="password" placeholder='password' />
                        <button>Log in</button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Login 