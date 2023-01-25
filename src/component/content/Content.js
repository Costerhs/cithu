import { useEffect, useState } from 'react';
import { userApi } from '../../assets/api/api';
import Follow from '../follow/Follow';
import Load from '../load/Load';
import Switch from '../switch/Switch';
import Repositories from './repositories/Repositories';
import './style.scss'

const Content = ({ username, setUserImg }) => {
    const [partUserData, setPartUserData] = useState();
    const [isLoad, setIsLoad] = useState(false);
    const [userData, setUserData] = useState();
    const [type, setType] = useState('repos');
    let isPartUserData = partUserData && partUserData.length > 0

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
                setUserImg && setUserImg(res.data)
            });
    }

    useEffect(() => {
        setIsLoad(true)
        setForStateUserData()
        setPartOfUserData()
    }, [username])

    useEffect(() => {
        setIsLoad(true)
        setPartOfUserData()
    }, [type])

    return (
        <div className='content'>
            <div className="container">
                <Switch type={type} setType={setType} userData={userData} />
                {isPartUserData ?
                    !isLoad && type == 'repos' || type == 'starred' ?
                        <Repositories partUserData={partUserData} />
                        : <Follow data={partUserData} />
                    : null}
            </div>
            <Load isLoad={isLoad} />
        </div>
    )
}

export default Content