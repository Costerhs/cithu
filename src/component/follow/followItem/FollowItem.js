import './style.scss'

const FollowItem = ({ name, avatar }) => {
    return (
        <div className='fItem'>
            <img src={avatar} alt="avatar" />
            <p className="fItem__name">{name}</p>
        </div>
    )
}

export default FollowItem