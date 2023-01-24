import { useEffect, useState } from 'react'
import { setUniqValue } from '../../../assets/defFunction/defFunction'
import ReposList from '../../repos/ReposList'
import Filter from '../filter/Filter'
import './style.scss'

const Repositories = ({ partUserData }) => {
    const [valueOfFilter, setValueOfFilter] = useState();
    const [langOfRepos, setLangOfRepos] = useState('');
    const [paginationNum, setPaginationNum] = useState(6);

    useEffect(() => {
        let arr = [];
        partUserData.map(el => {
            arr.push(el.language)
        })

        let val = setUniqValue(arr)
        setValueOfFilter(val)
    }, [partUserData])

    useEffect(() => {
        setPaginationNum(6)
    }, [langOfRepos])

    return (
        <div className='container'>
            <Filter filterArr={valueOfFilter} langOfRepos={langOfRepos} setLangOfRepos={setLangOfRepos} />
            <ReposList paginationNum={paginationNum} langOfRepos={langOfRepos} data={partUserData} />
            <button className="content__more" onClick={() => setPaginationNum(paginationNum + 6)}>
                More
            </button>
        </div>
    )
}

export default Repositories