import './style.scss'
import mainTypeObj from '../../assets/localData/infoType';

const Switch = ({ type, userData, setType }) => {
    return (
        <div className="switch__type">
            {mainTypeObj.map((el, ind) => {
                let isActive = type == el.apiName;
                return <div key={ind} className="switch__item" onClick={() => setType(el.apiName)}>
                    {el.icon}
                    <p className={isActive ? 'switch__active-p' : undefined}>{el.title}</p>
                    {userData && userData[el.getNumName] ? <p className="switch__item-num">{userData[el.getNumName]}</p> : null}
                </div>
            })}
        </div>
    )
}

export default Switch