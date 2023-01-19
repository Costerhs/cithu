import './style.scss';
import { getLStorage } from '../../assets/defFunction/defFunction';
import Content from '../../component/content/Content';

const Main = () => {
  return (
    <div className='main'>
      <Content username={getLStorage('username')} />
    </div>
  )
}

export default Main
