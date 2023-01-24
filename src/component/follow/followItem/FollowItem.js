import { useNavigate } from 'react-router-dom'
import './style.scss'

const FollowItem = ({ name, avatar }) => {
    const navigate = useNavigate();

    return (
        <div className='fItem' onClick={() => navigate(`/search/${name}`)}>
            <img src={avatar} alt="avatar" />
            <p className="fItem__name">{name}</p>
        </div>
    )
}

export default FollowItem