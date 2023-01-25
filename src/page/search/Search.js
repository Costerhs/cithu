import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Content from '../../component/content/Content';
import { IoLocationOutline } from "react-icons/io5";
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
                        {userImg && <>
                            <img src={userImg.avatar_url} alt="avatar" />
                            <p className="search__name">{username}</p>
                            <p className="search__name">{userImg.name}</p>
                            <p className='search__more'>{userImg.bio}</p>
                            <p className='search__more'><IoLocationOutline />{userImg.location}</p>
                        </>}
                    </div>
                    <Content username={username} setUserImg={setUserImg} />
                </div>
            </div>
        </div>
    )
}

export default Search