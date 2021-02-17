import AppRouter from "components/Router";
import { React, useState, useEffect } from "react";
import { authService } from 'fbase';


function App() {
  const [userObj, setUserObj] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  useEffect(() => {
    //유저 상태를 추적하는 이벤트리스너를 마운트될 때 등록. 변경되면 콜백 수행
    authService.onAuthStateChanged((user) => {
      if (user){
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),//진짜 func을 사용하기 위한 중간 func
        }); // 크기가 너무 커지면 느려질 수도 있음. 쓰는 것만 사용하자, {}로 아예 새로운 객체를 생성해 re-render할 수 있도록함.
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  }
  return (
  <>
    {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj}/> : "Initialized..."}
    <footer>&copy; {new Date().getFullYear()} Switter</footer>
  </> );
}

export default App;
