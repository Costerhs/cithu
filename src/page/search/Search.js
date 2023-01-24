import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Content from '../../component/content/Content';
import './style.scss'

const Search = () => {
    const [userImg, setUserImg] = useState();
    const username = useParams().user;

    useEffect(() => {
        console.log(userImg)
    }, [userImg])

    return (
        <div className='search'>
            <div className="container">
                <div className="search__flex">
                    <div className="search__item">
                        <img src={userImg} alt="avatar" />
                        <p className="search__name">{username}</p>
                    </div>
                    <Content username={username} setUserImg={setUserImg} />
                </div>
            </div>
        </div>
    )
}

export default Search