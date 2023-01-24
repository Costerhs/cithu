import './style.scss'
import { BiBook } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const UserList = ({ isFind, users }) => {
    const navigate = useNavigate()
    return (
        <div className={`head__user-list ${!isFind && "head__user-list--passive"}`}>
            {users && users.length > 0 && users.map((el, ind) => {
                return <div className="head__user" onClick={() => navigate(`/search/${el.login}`)}>
                    <BiBook />
                    <p>{el.login}</p>
                </div>
            })}
        </div>
    )
}

export default UserList