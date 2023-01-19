import './style.scss';

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
                {info.updated_at &&
                    <div className="ritem__date">{"update at " + info.updated_at.slice(0, 10)}</div>
                }
            </div>
        </div>
    )
}

export default ReposItem