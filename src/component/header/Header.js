import './style.scss'
import { AiFillGithub } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import UserList from './UserList/UserList'
import { userApi } from '../../assets/api/api'

const Header = () => {
    const navigate = useNavigate();
    const [isFind, setIsFind] = useState(false);
    const [text, setText] = useState('');
    const [users, setUsers] = useState();

    const signOut = () => {
        localStorage.clear()
        navigate('auth')
    }

    useEffect(() => {
        if (text.length >= 3) {
            userApi.getUsersByName(text)
                .then(res => {
                    setUsers(res.data.items)
                })
        }
    }, [text])

    return (
        <div className='head'>
            <div className="container">
                <div className="head__left">
                    <AiFillGithub className='git-icon' onClick={() => navigate('/')} />
                    <div className="head__search">
                        <input value={text} onChange={(e) => setText(e.target.value)} type="text" onBlur={() => setIsFind(false)} onFocus={() => setIsFind(true)} className='head__inp' placeholder='Search' />
                        <UserList isFind={isFind} users={users} />
                    </div>

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