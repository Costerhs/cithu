import './style.scss'
import { AiFillGithub } from 'react-icons/ai'

const Header = () => {
    return (
        <div className='head'>
            <div className="container">
                <div className="head__left">
                    <AiFillGithub className='git-icon' />
                    <input type="text" className='head__inp' placeholder='Search' />

                </div>
                <div className="head__right">
                    <button className="head__sign-out">
                        Sign Out
                    </button>
                    <div className="head__user-info">
                        <img src="https://avatars.githubusercontent.com/u/99422432?v=4" alt="avatar" />
                        <p className="head__username">Costerhs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header