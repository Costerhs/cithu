import FollowItem from './followItem/FollowItem'
import './style.scss'

const Follow = ({ data }) => {
    return (
        <div className='follow'>
            <div className="container">
                {data.map((el, index) => {
                    return <FollowItem key={index} name={el.login} avatar={el.avatar_url} />
                })}
            </div>
        </div>
    )
}

export default Follow