import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Login from './page/login/Login'
import Main from './page/main/Main'
import Search from './page/search/Search';
const App = () => {
  const locat = useLocation();
  const [location, setLocation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('auth')
    }
  }, [localStorage.getItem('username')])

  useEffect(() => {
    if (locat.pathname === "/auth") {
      setLocation(true);
    } else {
      setLocation(false);
    }
  }, [locat]);

  return (
    <div className="App">
      {!location && <Header />}
      <Routes>
        <Route path='auth' element={<Login />} />
        <Route path='/' element={<Main />} />
        <Route path='search/:user' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
