import './style.scss'

const Load = ({ isLoad }) => {
    return (<>
        {isLoad ? <div className='load'>
            <p className='load__text'>...loading</p>
        </div> : null}
    </>)
}

export default Load