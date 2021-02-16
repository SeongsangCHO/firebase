import AppRouter from "components/Router";
import { React, useState, useEffect } from "react";
import { authService } from 'fbase';


function App() {
  const [userObj, setUserObj] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log('use Effect');
    //유저 상태를 추적하는 이벤트리스너를 마운트될 때 등록. 변경되면 콜백 수행
    authService.onAuthStateChanged((user) => {
      if (user){
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
  <>
    {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "Initialized..."}
    <footer>&copy; {new Date().getFullYear()} Switter</footer>
  </> );
}

export default App;
