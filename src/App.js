import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Login from './page/login/Login'
import Main from './page/main/Main'
const App = () => {
  const locat = useLocation();
  const [location, setLocation] = useState(false);

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
      </Routes>
    </div>
  );
}

export default App;
