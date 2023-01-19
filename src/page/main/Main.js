import ReposList from '../../component/repos/ReposList';
import './style.scss';
import obj from "../../assets/localData/rep";

const Main = () => {

  return (
    <div className='main'>
      <div className="container">
        <ReposList data={obj} />
      </div>
    </div>
  )
}

export default Main