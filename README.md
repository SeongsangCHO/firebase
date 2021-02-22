![ezgif com-gif-maker](https://user-images.githubusercontent.com/55486644/108703566-2266e680-754e-11eb-89aa-b6a754147f29.gif)



**## 설치**



\- npm i —save firebase

\- npm i react-router-dom

\- npm i dotenv



**# Firebase**



\- 아주 빠르게 구현 가능, 진입이 쉬움

\- 실무 프로젝트에선 안씀, 아이디어를 테스팅할 때 사용함

\- 백엔드 코드없이 백엔드 사용할 수 있음.

\- firestore으로 DB코드 없이 사용 가능.

\- 호스팅 사용 가능.

\- Authentication으로 인증구현 가능

\- cloud firebase로 파일 업로드 가능

\- analytics도 가능

\- 비슷한 것으로 aws amplify가 있음.

​    \- rest api제공



**### 사용 세팅**



\- 사용 세팅은 발급받은 fb의 키값들을 적고 firebase.initializeApp(firebaseConfig);를 호출하면 사용할 수 있다.

\- 사용자 인증을 위한 auth()

\- 파일 업로드를 위한 firestore()

\- string형 데이터 저장을 위한 storage()



**### 회원가입 / 로그인**



\- 위에서 Import하는 auth의 메소드 중 유저를 생성하는 가입메소드와 로그인하는 메소드를 사용한다.

​    \- 이메일과 비밀번호 사용

\- 비동기함수이므로 async, await를 사용하고 try catch로 예외처리를 한다.

\- 해당 방식으로 가입을 진행하면 로컬스토리지에 로그인 값이 존재하는데 이 저장방법을 변경할 수 있다. (persistence)

\- 소셜로그인을 할 수 있다.



\```jsx

data = await authService.createUserWithEmailAndPassword(email, password);



data = await authService.signInWithEmailAndPassword(email, password);



provider = new firebaseInstance.auth.GoogleAuthProvider();

\```



**## 컴포넌트 구성**



**### App.js**



\- 최상위 컴포넌트

\- 랜더링될 때 유저상태를 받아와 userObj에 유저데이터 저장

​    \- 유저 프로필정보가 변경됨을 확인해주는 함수 등록



**### Router.js**



\- 로그인 여부에 따라서 Home, Profile  | Auth컴포넌트를 랜더링

​    \- Home, Profile (로그인 되었을 때) (routes/..)

​    \- Home : 트윗을 날리는 form태그, 트윗 랜더링부분

​    \- Profile : 유저 정보를 보여주는 컴포넌트, 유저정보 업데이트 및 로그아웃 수행



**### Sweet.js**



\- 트윗을 수정, 삭제

\- 업로드된 사진의 preview를 제공

\- submit시 트윗, 사진 정보 firebase storage에 전달



**### Home.js**



\- 파일 업로드, 파일 업로드시 `FileReader` API로 image의 URL확인



**# 에러**



Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.



경고! 언마운티드된 컴포넌트에 대해서는 상태 업데이트를 수행할 수 없다.



해당 작업은 수행되지 않지만 메모리 누수가 발생된다.



해결방법으로



\```

useEffect

\```



의 cleanup function을 이용해라



\- 비동기작업후 언마운티드(사라진) 컴포넌트에 대한 상태변수를 관리했기 때문에 발생했다.

\- 에러는 App.js의 useEffect. 로그아웃했을 때,( 로그아웃 클릭 후 AuthStateChanged에서 유저데이터가 null이 되었으므로 콜백 수행) setUserObj({})로 userObj의 데이터를 사용하던 컴포넌트들이 어디를 가리킬지 몰라 메모리누수가 발생한다는 뜻 같음.



home.js에서도 발생함



[https://stackoverflow.com/questions/56450975/to-fix-cancel-all-subscriptions-and-asynchronous-tasks-in-a-useeffect-cleanup-f](https://stackoverflow.com/questions/56450975/to-fix-cancel-all-subscriptions-and-asynchronous-tasks-in-a-useeffect-cleanup-f)



\- onSnapShot이라는 이벤트리스너를 구독중인데 로그아웃할 때 이를 구독해제하지 않아서 발생하는 메모리 누수

\- 해당 async요청에 대해 return문 작성