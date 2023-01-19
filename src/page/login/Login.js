import './style.scss'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'
import { userApi } from '../../assets/api/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [isFind, setIsFind] = useState(false);
    const navigate = useNavigate();

    const getUser = (e) => {
        userApi.getUser(name)
            .then(res => {
                localStorage.setItem('username', name)
                localStorage.setItem('user_avatar', res.data.avatar_url)
                navigate('/')
            })
            .catch(() => {
                setIsFind(true)
            })
        e.preventDefault()
    }

    return (
        <div className='login'>
            <div className="container">
                <AiFillGithub className='git-icon' />
                <h2 className="login__title">
                    Sign in
                </h2>
                <form className="login__form">
                    <div className="login__item">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="login__inp" />
                        {isFind && <p className="login__error">user not found, please try again</p>}
                    </div>
                    <button type='submit' className="login__btn" disabled={!name} onClick={getUser}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login