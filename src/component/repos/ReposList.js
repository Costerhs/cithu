import { useEffect, useState } from 'react'
import { filterOfRepos } from '../../assets/defFunction/defFunction';
import ReposItem from './reposItem/ReposItem'
import './style.scss'

function ReposList({ data, paginationNum, langOfRepos }) {
    const [datas, setDatas] = useState();

    useEffect(() => {
        let newData = filterOfRepos(data, langOfRepos, paginationNum)
        setDatas(newData)
    }, [langOfRepos, paginationNum, data])

    return (
        <div className='repos'>
            {datas && datas.length > 0 ?
                datas.map((el) => {
                    return <ReposItem key={el.id} info={el} />
                })
                : 'публичные репозитории отсутствуют'}
        </div>
    )
}

export default ReposList