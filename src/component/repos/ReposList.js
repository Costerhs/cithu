import ReposItem from './reposItem/ReposItem'
import './style.scss'

function ReposList({ data }) {
    return (
        <div className='repos'>
            {data && data.length > 1 ?
                data.map((el) => {
                    return <ReposItem key={el.id} info={el} />
                })
                : 'публичные репозитории отсутствуют'}
        </div>
    )
}

export default ReposList