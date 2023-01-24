import FollowItem from './followItem/FollowItem'
import './style.scss'

const Follow = ({ data }) => {
    return (
        <div className='follow'>
            {data.map((el, index) => {
                return <FollowItem key={index} name={el.login} avatar={el.avatar_url} />
            })}
        </div>
    )
}

export default Follow