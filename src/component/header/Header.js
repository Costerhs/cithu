import './style.scss'
import { AiFillGithub } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.clear()
        navigate('auth')
    }

    return (
        <div className='head'>
            <div className="container">
                <div className="head__left">
                    <AiFillGithub className='git-icon' />
                    <input type="text" className='head__inp' placeholder='Search' />

                </div>
                <div className="head__right">
                    <button className="head__sign-out" onClick={signOut}>
                        Sign Out
                    </button>
                    <div className="head__user-info">
                        <img src={localStorage.getItem('user_avatar')} alt="avatar" />
                        <p className="head__username">{localStorage.getItem('username')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header