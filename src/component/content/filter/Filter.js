import './style.scss'

const Filter = ({ filterArr, langOfRepos, setLangOfRepos }) => {
    return (
        <div className='filter'>
            <select onChange={(e) => setLangOfRepos(e.target.value)} name="" id="" className="filter__select">
                <option value="" className="filter__option">
                    All
                </option>
                {filterArr && filterArr.length > 0 && filterArr.map((el, ind) => {
                    return <option value={el} selected={el === langOfRepos} className='filter__option'>
                        {el}
                    </option>
                })}
            </select>
        </div>
    )
}

export default Filter