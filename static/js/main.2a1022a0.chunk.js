(this.webpackJsonpstwitter=this.webpackJsonpstwitter||[]).push([[0],{20:function(e,t,a){e.exports={sweetForm:"SweetFactory_sweetForm__tZhG8",sweetInput:"SweetFactory_sweetInput__1Ye0n",TweetLabelStyle:"SweetFactory_TweetLabelStyle__lCsXz",uploadIcon:"SweetFactory_uploadIcon__1kPki",sweetWriterWrapper:"SweetFactory_sweetWriterWrapper__1FoNj",rightSide:"SweetFactory_rightSide__1PVql",TweetBtnStyle:"SweetFactory_TweetBtnStyle__keGgB",imagePreviewContainer:"SweetFactory_imagePreviewContainer__3dkem",cancelBtn:"SweetFactory_cancelBtn__nnTbj"}},23:function(e,t,a){e.exports={container:"Auth_container__2mFFO",twitterIcon:"Auth_twitterIcon__1NI8a",authContainer:"Auth_authContainer__1URqK",authBtnContainer:"Auth_authBtnContainer__M30zw",loginGoogle:"Auth_loginGoogle__2Vr_U",loginGithub:"Auth_loginGithub__xCCWP",googleIcon:"Auth_googleIcon__Kr34U",githubIcon:"Auth_githubIcon__2O9PZ"}},30:function(e,t,a){e.exports={profileEditContainer:"Profile_profileEditContainer__2CNGp",profileEditForm:"Profile_profileEditForm__1MneZ",TweetBtnStyle:"Profile_TweetBtnStyle__3e9EZ",logOutBtn:"Profile_logOutBtn__1K9bx"}},32:function(e,t,a){e.exports={sweetContainer:"Home_sweetContainer__1DLSx",sweetContent:"Home_sweetContent__ts2r7",twitterIcon:"Home_twitterIcon__LqvyQ"}},33:function(e,t,a){e.exports={navBar:"Navigation_navBar__pub4D"}},44:function(e,t,a){e.exports={authForm:"AuthForm_authForm__19kRN"}},6:function(e,t,a){e.exports={writedSweet:"Sweet_writedSweet__1QkZZ",writedSweetContainer:"Sweet_writedSweetContainer__1qOun",sweet:"Sweet_sweet__16jDK",sweetTop:"Sweet_sweetTop__1ZtEU",imageWrapper:"Sweet_imageWrapper__3XmlL",hide:"Sweet_hide__3BlMM",manageBtn:"Sweet_manageBtn__10YcB",ownerBtnBox:"Sweet_ownerBtnBox__2N4nN",writer:"Sweet_writer__16g2w",date:"Sweet_date__2ewCR",ownerBtnContainer:"Sweet_ownerBtnContainer__3slG3",ownerSweetManageBtn:"Sweet_ownerSweetManageBtn__2zb87",showBtn:"Sweet_showBtn__1Tsbd"}},62:function(e,t,a){},63:function(e,t,a){e.exports={root:"src_root__3TmMh"}},66:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(36),s=a.n(c),i=a(7),o=a(11),l=a.n(o),u=a(17),j=a(28);a(53),a(68),a(67);j.a.initializeApp({apiKey:"AIzaSyAxn5LR4dG_pEodeeXARdNHPSIGaeCdSMs",authDomain:"stwitter-87ef6.firebaseapp.com",projectId:"stwitter-87ef6",storageBucket:"stwitter-87ef6.appspot.com",messagingSenderId:"1081009089133",appId:"1:1081009089133:web:c1e42d2021573157616d64"});var d=j.a.auth(),b=j.a.firestore(),h=j.a,p=j.a.storage(),O=a(44),w=a.n(O),m=a(1),x=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=(t[1],Object(n.useState)("")),c=Object(i.a)(r,2),s=c[0],o=c[1],j=Object(n.useState)(""),b=Object(i.a)(j,2),h=b[0],p=b[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),f=x[0],_=x[1],g=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?p(n):"password"===a&&_(n)},v=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!a){e.next=8;break}return e.next=5,d.createUserWithEmailAndPassword(h,f);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,d.signInWithEmailAndPassword(h,f);case 10:n=e.sent;case 11:console.log(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),o(e.t0.message),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:v,className:w.a.authForm,"accept-charset":"euc-kr",children:[Object(m.jsx)("input",{onChange:g,name:"email",type:"text",placeholder:"Email",required:!0,value:h}),Object(m.jsx)("input",{onChange:g,name:"password",type:"password",placeholder:"password",required:!0,value:f}),Object(m.jsx)("input",{type:"submit",value:"Create Account"}),s]})})},f=a(23),_=a.n(f),g=a(21),v=a(24),S=function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name?a=new h.auth.GoogleAuthProvider:"github"===t.target.name&&(a=new h.auth.GithubAuthProvider),e.prev=1,e.next=4,d.signInWithPopup(a);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:_.a.container,children:[Object(m.jsx)(g.a,{className:_.a.twitterIcon,icon:v.c}),Object(m.jsxs)("div",{className:_.a.authContainer,children:[Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:_.a.authBtnContainer,children:[Object(m.jsxs)("div",{className:_.a.loginGoogle,children:[Object(m.jsx)(g.a,{name:"google",className:_.a.googleIcon,icon:v.b}),Object(m.jsx)("button",{name:"google",onClick:e,children:"Continue with Google"})]}),Object(m.jsxs)("div",{className:_.a.loginGithub,children:[Object(m.jsx)(g.a,{name:"github",className:_.a.githubIcon,icon:v.a}),Object(m.jsx)("button",{name:"github",onClick:e,children:"Continue with Github"})]})]})]})]})},N=a(27),y=a(8),C=a(45),B=a(9),k=a(6),I=a.n(k),F=a(19),A=a.n(F),P=(A.a.bind(I.a),function(e){var t,a,r,c,s,o,j,d,h=e.sweetObj,O=e.isOwner,w=Object(n.useState)(!1),x=Object(i.a)(w,2),f=x[0],_=x[1],g=Object(n.useState)(h.text),v=Object(i.a)(g,2),S=v[0],N=v[1],y=Object(n.useState)(new Date(h.createdAt).toLocaleString()),C=Object(i.a)(y,2),k=C[0],F=(C[1],Object(n.useState)(!1)),P=Object(i.a)(F,2),U=P[0],E=P[1],T=Object(n.useState)(!1),G=Object(i.a)(T,2),D=(G[0],G[1],function(){_((function(e){return!e})),E(!1)}),L=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this sweet?")){e.next=7;break}return e.next=4,b.doc("sweets/".concat(h.id)).delete();case 4:if(""===h.attachmentUrl){e.next=7;break}return e.next=7,p.refFromURL(h.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b.doc("sweets/".concat(h.id)).update({text:S});case 3:_(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:I.a.sweet,children:f?Object(m.jsx)("div",{className:I.a.writedSweet,children:Object(m.jsxs)("form",{onSubmit:W,children:[Object(m.jsx)("textarea",{type:"text",maxLength:120,placeholder:"Edit your sweet",value:S,required:!0,onChange:function(e){var t=e.target.value;N(t)}}),Object(m.jsx)("button",{onClick:D,children:"Cancel"}),Object(m.jsx)("button",{type:"submit",children:"Update"})]})}):Object(m.jsx)("div",{className:I.a.writedSweetContainer,children:Object(m.jsxs)("div",{className:A()(Object(B.a)({},I.a.writedSweet,!0)),children:[Object(m.jsxs)("div",{className:I.a.sweetTop,children:[Object(m.jsx)("span",{className:A()((t={},Object(B.a)(t,I.a.writer,!0),Object(B.a)(t,I.a.hide,U),t)),children:h.displayName}),Object(m.jsx)("span",{className:A()((a={},Object(B.a)(a,I.a.date,!0),Object(B.a)(a,I.a.hide,U),a)),children:k})]}),Object(m.jsxs)("div",{className:A()((r={},Object(B.a)(r,I.a.imageWrapper,!0),Object(B.a)(r,I.a.hide,U),r)),onClick:function(e){console.log("click")},children:[Object(m.jsx)("span",{className:A()(Object(B.a)({},I.a.sweet,!0)),children:h.text}),h.attachmentUrl&&Object(m.jsx)("img",{alt:"sweetImage",src:h.attachmentUrl})]}),O&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:A()((c={},Object(B.a)(c,I.a.ownerBtnContainer,!0),Object(B.a)(c,I.a.hide,!U),c)),children:Object(m.jsx)("button",{className:A()((s={},Object(B.a)(s,I.a.ownerSweetManageBtn,!U),Object(B.a)(s,I.a.manageBtn,!0),s),{active:U}),onClick:function(e){E((function(e){return!e}))},children:U?"Close":"Manage"})}),Object(m.jsxs)("div",{className:A()((o={},Object(B.a)(o,I.a.ownerBtnBox,!0),Object(B.a)(o,I.a.hide,!U),o)),children:[Object(m.jsx)("button",{className:A()((j={},Object(B.a)(j,I.a.showBtn,U),Object(B.a)(j,I.a.hide,!U),j)),disabled:!U,onClick:L,children:"Delete sweet"}),Object(m.jsx)("button",{className:A()((d={},Object(B.a)(d,I.a.showBtn,U),Object(B.a)(d,I.a.hide,!U),d)),disabled:!U,onClick:D,children:"Edit sweet"})]})]})]})})})}),U=a(70),E=a(20),T=a.n(E),G=a(31),D=function(e){var t=e.userObj,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(""),j=Object(i.a)(o,2),d=j[0],h=j[1],O=Object(n.useState)(0),w=Object(i.a)(O,2),x=w[0],f=w[1],_=function(){var e=Object(u.a)(l.a.mark((function e(a){var n,r,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",""===d){e.next=10;break}return r=p.ref().child("".concat(t.uid,"/").concat(Object(U.a)())),e.next=6,r.putString(d,"data_url");case 6:return i=e.sent,e.next=9,i.ref.getDownloadURL();case 9:n=e.sent;case 10:return o={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n,displayName:t.displayName},e.next=13,b.collection("sweets").add(o);case 13:s(""),h(""),f(0),document.getElementById("file-upload").value="";case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:_,className:T.a.sweetForm,children:[Object(m.jsx)("input",{value:c,type:"text",maxLength:120,placeholder:"What's on your mind?",className:T.a.sweetInput,onChange:function(e){var t=e.target.value;f(t.length),s(t)}}),Object(m.jsxs)("div",{className:T.a.sweetWriterWrapper,children:[Object(m.jsxs)("label",{htmlFor:"file-upload",className:T.a.TweetLabelStyle,children:[Object(m.jsx)(g.a,{className:T.a.uploadIcon,icon:G.a}),"Picture",Object(m.jsx)("input",{id:"file-upload",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;h(t)},a.readAsDataURL(t)}})]}),Object(m.jsxs)("div",{className:T.a.rightSide,children:[Object(m.jsxs)("span",{children:[x,"/120"]}),Object(m.jsx)("input",{className:T.a.TweetBtnStyle,type:"submit",value:"Sweet"})]})]}),d&&Object(m.jsxs)("div",{className:T.a.imagePreviewContainer,children:[Object(m.jsx)(g.a,{id:"uploadCancelBtn",className:T.a.cancelBtn,onClick:function(){h(""),document.getElementById("file-upload").value=""},icon:G.b}),Object(m.jsx)("img",{src:d,width:"125px",height:"125px"})]})]})},L=a(32),W=a.n(L),M=function(e){var t=e.userObj,a=Object(n.useState)([]),r=Object(i.a)(a,2),c=r[0],s=r[1];new AbortController;return Object(n.useEffect)((function(){return b.collection("sweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(C.a)({id:e.id},e.data())})).sort((function(e,t){return t.createdAt-e.createdAt}));s(t)}))}),[]),Object(m.jsxs)("div",{className:W.a.sweetContainer,children:[Object(m.jsx)(g.a,{className:W.a.twitterIcon,icon:v.c}),Object(m.jsx)(D,{userObj:t}),Object(m.jsx)("div",{className:W.a.sweetContent,children:c.map((function(e){return Object(m.jsx)(P,{sweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},q=a(30),R=a.n(q),Z=function(e){var t=e.userObj,a=e.refreshUser,r=Object(n.useState)(t.displayName),c=Object(i.a)(r,2),s=c[0],o=c[1],j=Object(y.f)();Object(n.useEffect)((function(){document.querySelector("#editInput").focus()}),[]);var b=function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===s){e.next=4;break}return e.next=4,t.updateProfile({displayName:s});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:R.a.profileEditContainer,children:[Object(m.jsxs)("span",{children:["Hello,",t.displayName,"!"]}),Object(m.jsxs)("form",{onSubmit:b,className:R.a.profileEditForm,children:[Object(m.jsx)("input",{id:"editInput",onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"Display Name",value:s}),Object(m.jsx)("input",{className:R.a.TweetBtnStyle,type:"submit",value:"Update Profile"}),Object(m.jsx)("button",{className:R.a.logOutBtn,onClick:function(){d.signOut(),j.push("/")},children:"Log out"})]})]})},z=a(33),H=a.n(z),K=function(e){var t=e.userObj;return Object(m.jsx)("nav",{className:H.a.navBar,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(N.b,{to:"/",className:H.a.link,children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsxs)(N.b,{to:"/profile",className:H.a.link,children:[t.displayName,"'s Profile"]})})]})})},X=function(e){var t=e.userObj,a=e.refreshUser;return Object(m.jsxs)(N.a,{children:[t&&Object(m.jsx)(K,{userObj:t}),Object(m.jsx)(y.c,{children:t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.a,{exact:!0,path:"/",children:Object(m.jsx)(M,{userObj:t})}),Object(m.jsx)(y.a,{exact:!0,path:"/profile",children:Object(m.jsx)(Z,{refreshUser:a,userObj:t})})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(S,{})})})]})};a(62);var Y=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),o=s[0],l=s[1];return new AbortController,Object(n.useEffect)((function(){d.onAuthStateChanged((function(e){return r(e?{displayName:e.displayName||e.email,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),l(!0),e}))}),[]),Object(m.jsxs)(m.Fragment,{children:[o?Object(m.jsx)(X,{refreshUser:function(){var e=d.currentUser;r({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},userObj:a}):"Initialized...",Object(m.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Switter"]})]})},J=(a(63),a(47)),Q=a.n(J);s.a.render(Object(m.jsxs)(r.a.StrictMode,{children:[Object(m.jsx)(Y,{}),Object(m.jsxs)(Q.a,{children:[Object(m.jsx)("title",{children:"Switter"}),Object(m.jsx)("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}),Object(m.jsx)("meta",{charset:"UTF-8"})]})]}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.2a1022a0.chunk.js.map