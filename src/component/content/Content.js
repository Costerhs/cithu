import { useEffect, useState } from 'react';
import { userApi } from '../../assets/api/api';
import Follow from '../follow/Follow';
import Load from '../load/Load';
import ReposList from '../repos/ReposList';
import Switch from '../switch/Switch';
import './style.scss'

const Content = ({ username }) => {
    const [partUserData, setPartUserData] = useState();
    const [isLoad, setIsLoad] = useState(false);
    const [userData, setUserData] = useState();
    const [type, setType] = useState('repos');

    const setPartOfUserData = () => {
        userApi.getUserMorePart(username, type)
            .then(res => {
                setPartUserData(res.data)
                setIsLoad(false)
            })
    }
    const setForStateUserData = () => {
        userApi.getUser(username)
            .then(res => {
                setUserData(res.data)
            });
    }

    useEffect(() => {
        setIsLoad(true)
        setForStateUserData()
        setPartOfUserData()
    }, [])

    useEffect(() => {
        setIsLoad(true)
        setPartOfUserData()
    }, [type])

    return (
        <div className='switch'>
            <div className="container">
                <Switch type={type} setType={setType} userData={userData} />
                {partUserData && partUserData.length > 0 ?
                    type == 'repos' ?
                        <ReposList data={partUserData} />
                        : <Follow data={partUserData} />
                    : null}
            </div>
            <Load isLoad={isLoad} />
        </div>
    )
}

export default Content