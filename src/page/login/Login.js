import './style.scss'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'
import { userApi } from '../../assets/api/api';

const Login = () => {
    const [name, setName] = useState('');
    const [isFind, setIsFind] = useState(false);

    const getUser = () => {
        userApi.getUser(name)
            .then(res => {
                console.log(res.data)
            })
            .catch(() => {
                setIsFind(true)
            })
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
                    <button type='button' className="login__btn" disabled={!name} onClick={getUser}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login