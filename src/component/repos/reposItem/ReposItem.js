import './style.scss';
/*   "id": 480244770,
        "node_id": "R_kgDOHJ_0Ig",
        "name": "zeon",
        "description": null,
        "created_at": "2022-04-11T05:53:20Z",
        "updated_at": "2022-10-21T17:52:18Z",
        "language": "JavaScript",
        "visibility": "public",*/

const ReposItem = ({ info }) => {
    return (
        <div className='ritem'>
            <div className="ritem__top">
                <p className="ritem__name">{info.name}</p>
                <div className="ritem__status">{info.visibility}</div>
            </div>
            <div className="ritem__bot">
                <p className="ritem__lang">{info.language}</p>
                {/* <div className="ritem__desc">{info.description}</div> */}
                <div className="ritem__date">{"update at " + info.updated_at.slice(0, 10)}</div>
            </div>
        </div>
    )
}

export default ReposItem