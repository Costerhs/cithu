import { BiBook } from 'react-icons/bi'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'

const obj = [
    {
        title: 'Repositories',
        apiName: 'repos',
        icon: <BiBook />,
        getNumName: 'public_repos'
    },
    // {
    //     title: 'Star Repositories',
    //     apiName: 'repos',
    //     icon: <AiOutlineStar />,
    //     getNumName: 'repos'
    // },
    {
        title: 'Followers',
        apiName: 'followers',
        icon: <BsPeople />,
        getNumName: 'followers'
    },
    {
        title: 'Following',
        apiName: 'following',
        icon: <BsPeople />,
        getNumName: 'following'
    },
]

export default obj;