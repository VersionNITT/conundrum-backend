(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{124:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),c=n.n(r),s=n(12),o=n(204),l=n(26),u=n(25),j=(n(124),n(14)),d=n(208),b=n(101),h=n(210),O=n(211),m=n(212),x=n(31),g=n(213),p=n(238),f=n(214),v=n(215),y=n(216),S=n(217),w=n(218),C=n(97),k=n.n(C),z=n(55),D=n.n(z),T=n(67),I=n(42),q=n(29),N=n.n(q),W=n(237),F={saveSession:function(e,t){localStorage.setItem("session",JSON.stringify(Object(I.a)(Object(I.a)({},e),t)))},getSessionData:function(){return JSON.parse(localStorage.getItem("session"))},logIn:function(e){return N.a.post("/users/login",e).then((function(e){return e.data}))},getTime:function(){var e=Object(T.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=N.a.get("/api/time"),e.next=3,t;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),saveSessionScore:function(e){var t=JSON.parse(localStorage.getItem("session")),n=Object(I.a)(Object(I.a)({},t),{},{score:e});localStorage.setItem("session",JSON.stringify(n))},saveQuestionState:function(e){var t=JSON.parse(localStorage.getItem("session"));t.currentQuestion=e,localStorage.setItem("session",JSON.stringify(t))},logOut:function(){localStorage.removeItem("session"),N.a.get("/users/logout")},register:function(e){return N.a.post("/users/register",e).then((function(e){return e.data}))},getList:function(){return N.a.get("/api/list").then((function(e){return e.data}))},getQuestion:function(e,t,n){return console.log(e,t,n),N.a.post("/api/question",{nextId:e,prvsId:t,ans:n}).then((function(e){return e.data}))},setKey:function(){var e=Object(W.a)();return N.a.post("/api/setKey",{key:e}).then((function(e){return e.data}))},getHint:function(e){return N.a.post("/api/getHint",{key:e}).then((function(e){return e.data}))},getPuzzle:function(e){return N.a.post("/api/getPuzzle",{id:e}).then((function(e){return e.data}))},checkPuzzleAnswer:function(e,t){return N.a.post("/api/checkPuzzle",{id:t,ans:e}).then((function(e){return e.data}))},endContest:function(){return N.a.get("/api/endContest").then((function(e){return e.data}))}},H=i.a.createContext({userSession:F.getSessionData(),setUserSession:function(){}}),P=n(2),A=Object(d.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));function B(){var e=A(),t=Object(a.useState)(null),n=Object(s.a)(t,2),i=n[0],r=n[1],c=Object(a.useContext)(H),o=c.sessionData,l=c.setSessionData,u=Object(a.useState)(!1),d=Object(s.a)(u,2),C=d[0],z=d[1],D=Boolean(i),T="primary-search-account-menu",I=Object(j.f)(),q=function(){z(!1)},N=Object(P.jsxs)(b.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:T,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:D,onClose:function(){r(null)},children:[Object(P.jsx)(h.a,{children:o.name}),Object(P.jsx)(h.a,{children:o.email}),Object(P.jsx)(h.a,{component:"button",onClick:function(){l(null),F.logOut()},children:"Logout"})]});return Object(P.jsxs)("div",{className:e.root,children:[Object(P.jsx)(O.a,{position:"static",color:"transparent",children:Object(P.jsxs)(m.a,{children:[Object(P.jsx)(x.a,{variant:"h6",className:e.title,children:"Conundrum"}),Object(P.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(){z(!0)},children:"Finish"}),Object(P.jsxs)(p.a,{open:C,onClose:q,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(P.jsx)(f.a,{id:"alert-dialog-title",children:"Do you want to submit?"}),Object(P.jsx)(v.a,{children:Object(P.jsx)(y.a,{id:"alert-dialog-description",children:"Final Submission will end the contest and you will not be able to submit again."})}),Object(P.jsxs)(S.a,{children:[Object(P.jsx)(g.a,{onClick:q,color:"primary",children:"No"}),Object(P.jsx)(g.a,{onClick:function(e){e.preventDefault(),q(),F.endContest().then((function(e){console.log(e),I.push("/finish")}))},color:"primary",autoFocus:!0,children:"Yes"})]})]}),Object(P.jsx)(w.a,{edge:"end","aria-label":"account of current user","aria-controls":T,"aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(P.jsx)(k.a,{})})]})}),N]})}var E=n(219),K=function(){return Object(P.jsx)(O.a,{position:"static",color:"transparent",style:{marginTop:"10px"},children:Object(P.jsx)(E.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",children:Object(P.jsx)(E.a,{item:!0,xs:12,children:Object(P.jsx)(m.a,{children:Object(P.jsx)(x.a,{variant:"body1",color:"inherit",children:"Developed by EEC (Version'21)"})})})})})},Q=n(220),_=n(221),J=n(225),R=n(222),G=n(223),M=n(233),L=n(226),U=n(239),V=n(224),Y=n(98),X=n.n(Y),Z=function(e){var t=Object(l.b)().enqueueSnackbar,n=Object(a.useState)(!1),i=Object(s.a)(n,2),r=i[0],c=i[1],u=e.puzzle,d=Object(j.f)(),b=Object(a.useContext)(H),h=(b.sessionData,b.setSessionData);return Object(P.jsx)(Q.a,{children:Object(P.jsx)(_.a,{children:u?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(R.a,{variant:"middle"}),Object(P.jsx)("br",{}),Object(P.jsx)(x.a,{variant:"subtitle1",component:"p",children:u}),Object(P.jsx)("br",{}),Object(P.jsx)(R.a,{variant:"middle"}),Object(P.jsx)(G.a,{children:Object(P.jsx)(E.a,{container:!0,spacing:3,justify:"flex-start",alignItems:"flex-start",children:Object(P.jsx)(E.a,{item:!0,xs:4,children:Object(P.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(n){n.preventDefault();var a=n.target[0].value;F.checkPuzzleAnswer(a,e.id).then((function(n){n.status?(c(!0),e.onSolved()):t("Wrong answer",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error",TransitionComponent:o.a})})).catch((function(e){403===e.response.status?(F.logout(),h(null),d.push("/end")):t("Something went wrong !!",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error",TransitionComponent:o.a})}))},children:[Object(P.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"ans",label:"Answer",name:"ans",autoFocus:!0}),Object(P.jsx)(g.a,{disabled:r,type:"submit",variant:"contained",style:{backgroundColor:"#9fe6a0"},size:"medium",children:"Check Answer"})]})})})})]}):Object(P.jsx)(V.a,{})})})},$=function(e){return console.log(e),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,children:[!e.hintData&&Object(P.jsxs)(E.a,{item:!0,xs:12,children:[e.puzzle?Object(P.jsx)(Z,{id:e.id,puzzle:e.puzzle,onSolved:e.setHintKey}):Object(P.jsx)(X.a,{defaultDifficulty:"medium",disableTimer:!0,disableDifficultyButtons:!0,disableNumberButtons:!0,disableHelpButtons:!0,onSolved:e.setHintKey}),Object(P.jsx)("br",{}),Object(P.jsx)(R.a,{variant:"middle"})]}),e.hintData?Object(P.jsxs)(E.a,{item:!0,xs:12,children:[Object(P.jsx)(x.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Hint"}),Object(P.jsx)(x.a,{variant:"body1",align:"center",gutterBottom:!0,children:e.hintData})]}):Object(P.jsxs)(E.a,{item:!0,xs:12,children:[Object(P.jsx)(x.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Secret Key"}),Object(P.jsx)(x.a,{variant:"body1",align:"center",gutterBottom:!0,children:e.hintKey?e.hintKey:"Solve puzzle to get your key!"})]}),Object(P.jsx)(E.a,{item:!0,children:Object(P.jsx)(g.a,{disabled:!e.hintKey||e.hintData,onClick:e.getHint,type:"submit",variant:"contained",size:"medium",children:"Get Hint"})})]})})},ee=function(e){var t,n,i,r;e.question&&(t=e.question.title,n=e.question.description,i=e.question._id,r=e.question.puzzle);var c=Object(a.useState)(!1),u=Object(s.a)(c,2),d=u[0],b=u[1],h=Object(a.useState)(!1),O=Object(s.a)(h,2),m=O[0],p=O[1],f=Object(a.useState)(null),v=Object(s.a)(f,2),y=v[0],S=v[1],w=Object(l.b)().enqueueSnackbar,C=Object(j.f)();Object(a.useEffect)((function(){b(!1),p(!1),S(null)}),[e.question]);return Object(P.jsx)(Q.a,{children:Object(P.jsx)(_.a,{children:e.question?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(J.a,{title:Object(P.jsx)(x.a,{variant:"h5",component:"p",children:t})}),Object(P.jsx)(R.a,{variant:"middle"}),Object(P.jsx)("br",{}),d?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(x.a,{variant:"body1",display:"block",align:"center",children:"Solve puzzle get secret key to your hint."}),Object(P.jsx)(x.a,{align:"center",variant:"body1",display:"block",gutterBottom:!0,paragraph:!0,children:"Going back to Question will reset the puzzle!!"}),Object(P.jsx)($,{hintData:y,hintKey:m,setHintKey:function(){F.setKey().then((function(e){p(e.key),w("Congrats!! you got your hint key, Click on get hint to get your hint.",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success",TransitionComponent:o.a})})).catch((function(e){403===e.response.status?(F.logOut(),C.push("/end")):w("Something went wrong !!",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error",TransitionComponent:o.a})}))},getHint:function(){F.getHint(m).then((function(e){S(e.hint),p(!1)})).catch((function(e){403===e.response.status?(F.logOut(),C.push("/end")):w("Something went wrong !!",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error",TransitionComponent:o.a})}))},puzzle:r,id:i})]}):Object(P.jsx)(x.a,{variant:"body1",style:{whiteSpace:"pre-line",fontSize:"18px"},children:n}),Object(P.jsx)("br",{}),Object(P.jsx)(R.a,{variant:"middle"}),Object(P.jsx)(G.a,{children:Object(P.jsxs)(E.a,{container:!0,spacing:3,justify:"flex-start",alignItems:"flex-start",children:[Object(P.jsx)(E.a,{item:!0,xs:4,children:Object(P.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault();var n=t.target[0].value;e.checkAnswer(i,n),t.target[0].value=""},children:[Object(P.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"ans",label:"Answer",name:"ans",autoFocus:!0}),Object(P.jsx)(g.a,{required:!0,type:"submit",variant:"contained",style:{backgroundColor:"#9fe6a0"},size:"medium",children:"Submit"})]})}),Object(P.jsx)(E.a,{item:!0,xs:4,children:Object(P.jsx)(L.a,{control:Object(P.jsx)(U.a,{checked:d,onChange:function(){return b(!d)},name:"hint",color:"primary"}),label:"Hint",labelPlacement:"top"})})]})})]}):Object(P.jsx)(V.a,{})})})},te=n(209),ne=n(227),ae=n(176),ie=n(228),re=n(229),ce=n(99),se=n.n(ce),oe=Object(d.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}})),le=function(e){var t=oe(),n=e.list,a=e.active;return Object(P.jsx)(P.Fragment,{children:n&&a&&Object(P.jsx)(te.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(P.jsx)(ne.a,{component:"div",id:"nested-list-subheader",children:"Questions"}),className:t.root,children:n.map((function(e){return Object(P.jsxs)(ae.a,{disabled:e._id!==a._id,children:[Object(P.jsx)(ie.a,{children:Object(P.jsx)(se.a,{})}),Object(P.jsx)(re.a,{primary:e.title,secondary:"Score:".concat(e.score)})]},e._id)}))})})},ue=n(230);var je=function(e){var t=e.score,n=e.initTime,i=Object(a.useState)(n),r=Object(s.a)(i,2),c=r[0],u=r[1],d=Object(j.f)(),b=Object(l.b)().enqueueSnackbar;Object(a.useEffect)((function(){u(n)}),[n]);!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e})),Object(a.useEffect)((function(){var e=setInterval((function(){n.current(e)}),t);return function(){return clearInterval(e)}}),[t])}((function(e){null!==c&&(c<=1e3?(clearInterval(e),F.endContest().then((function(e){d.push("/finish"),b("Time up!",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"warning",TransitionComponent:o.a})}))):c>=1e3&&u(c-1e3))}));var h=function(e){if(!e)return;var t=Math.floor(e/1e3)%60,n=Math.floor(e/6e4%60),a=Math.floor(e/36e5%24);return a=a<10?"0".concat(a):a,n=n<10?"0".concat(n):n,t=t<10?"0".concat(t):t,{h:a,m:n,s:t}}(c);return Object(P.jsxs)(E.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,children:[Object(P.jsx)(E.a,{item:!0,xs:5,children:Object(P.jsxs)(Q.a,{style:{padding:"5%"},children:[Object(P.jsx)(x.a,{variant:"subtitle1",children:"Time"}),Object(P.jsx)(x.a,{variant:"h4",children:c?"".concat(h.h,":").concat(h.m,":").concat(h.s):Object(P.jsx)(ue.a,{})})]})}),Object(P.jsx)(E.a,{item:!0,xs:4,children:Object(P.jsxs)(Q.a,{style:{padding:"5%"},children:[Object(P.jsx)(x.a,{variant:"subtitle1",children:"Score"}),Object(P.jsx)(x.a,{variant:"h4",children:t})]})})]})},de=Object(d.a)((function(e){return{root:{flexGrow:1,marginTop:"1%"}}})),be=function(){var e=de(),t=Object(a.useState)([]),n=Object(s.a)(t,2),i=n[0],r=n[1],c=Object(a.useState)(!1),u=Object(s.a)(c,2),d=u[0],b=u[1],h=Object(a.useContext)(H),O=h.sessionData,m=h.setSessionData,x=Object(a.useState)(O.score||0),g=Object(s.a)(x,2),p=g[0],f=g[1],v=Object(a.useState)(null),y=Object(s.a)(v,2),S=y[0],w=y[1],C=Object(l.b)().enqueueSnackbar,k=Object(j.f)(),z=function(e,t){if(!t)return e[0]._id;var n=i.findIndex((function(e){return e._id==t}));return n==i.length-1?-1:i[n+1]._id};Object(a.useEffect)((function(){F.getList().then((function(e){r(e);var t=O.currentQuestion||z(e,null);-1!==t?F.getQuestion(t,null,null).then((function(n){t==e[0]._id&&C("Time Starts Now!",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"info",TransitionComponent:o.a}),b(n.question)})):F.endContest().then((function(e){console.log(e),k.push("/finish")}))})).catch((function(e){m(null),F.logOut(),console.log(e)})),Object(T.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.getTime();case 3:t=e.sent,w(t.data.time),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),F.logOut(),m(null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]);return Object(P.jsx)("div",{className:e.root,children:Object(P.jsxs)(E.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"baseline",children:[Object(P.jsx)(E.a,{item:!0,xs:4,children:Object(P.jsxs)(E.a,{container:!0,direction:"column",justify:"space-around",alignItems:"stretch",spacing:3,children:[Object(P.jsx)(E.a,{item:!0,xs:12,children:Object(P.jsx)(je,{initTime:S,score:p})}),Object(P.jsx)(E.a,{item:!0,xs:12,children:Object(P.jsx)(le,{list:i,active:d})})]})}),Object(P.jsx)(E.a,{item:!0,xs:8,children:Object(P.jsx)(ee,{question:d,checkAnswer:function(e,t){var n=z(null,e);F.getQuestion(n,e,t).then((function(e){if(console.log(e),e){F.saveQuestionState(n);C("Correct Answer!!",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success",TransitionComponent:o.a}),f(e.score),F.saveSessionScore(e.score),-1===n?F.endContest().then((function(e){setTimeout((function(){return k.push("/finish",1e3)}))})):b(e.question)}else{C("Wrong Answer!!",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error",TransitionComponent:o.a})}}))}})})]})})},he=function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(B,{}),Object(P.jsx)(be,{}),Object(P.jsx)(K,{})]})},Oe=n(231),me=n(104),xe=n(240),ge=n(207),pe=n(234);var fe=function(){return Object(P.jsx)(E.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",children:Object(P.jsx)(E.a,{item:!0,xs:12,children:Object(P.jsx)("a",{href:"https://version21.in/",target:"_blank",rel:"noreferrer",children:Object(P.jsx)("img",{alt:"version-logo",src:"/static/logos/version.png"})})})})},ve=n(236),ye=n(100),Se=n.n(ye),we=function(e){return Object(P.jsx)(ve.a,{style:{margin:"2%"},variant:"outlined",severity:e.errorObj.severity,action:Object(P.jsx)(w.a,{"aria-label":"close",color:"inherit",size:"small",onClick:e.handleClose,children:Object(P.jsx)(Se.a,{fontSize:"inherit"})}),children:e.errorObj.msg})},Ce=Object(d.a)((function(e){return{root:{height:"100vh"},image:{backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ke(){var e=Ce(),t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],r=n[1],c=Object(a.useContext)(H).setSessionData,j=Object(l.b)().enqueueSnackbar;return Object(P.jsxs)(E.a,{container:!0,component:"main",className:e.root,children:[Object(P.jsx)(Oe.a,{}),Object(P.jsx)(E.a,{item:!0,xs:!1,sm:4,md:7,children:Object(P.jsx)("img",{src:"/static/logos/about.png",style:{maxWidth:"100%",maxHeight:"110vh"},alt:"rules"})}),Object(P.jsx)(E.a,{item:!0,xs:12,sm:8,md:5,component:me.a,elevation:6,square:!0,children:Object(P.jsxs)("div",{className:e.paper,children:[Object(P.jsx)(xe.a,{className:e.avatar,alt:"nitt-logo",src:"/static/logos/nitt.png",style:{height:"10vh",width:"10vh"}}),Object(P.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(P.jsx)(ge.a,{in:i,children:Object(P.jsx)(we,{errorObj:i,handleClose:function(){return r(!1)}})}),Object(P.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault();var t=e.target[0].value,n=e.target[2].value;F.logIn({email:t,password:n}).then((function(e){e.user&&e.session?(F.saveSession(e.session,e.user),c(Object(I.a)(Object(I.a)({},e.session),e.user))):r({msg:e.Response,severity:"warning"})})).catch((function(e){var t=e.response;403===t.status?j(t.data.error,{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error",TransitionComponent:o.a}):t&&t.data?r({msg:t.data.message,severity:"error"}):r({msg:"Invalid credentials!",severity:"error"})}))},children:[Object(P.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",type:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(P.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(P.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(P.jsx)(E.a,{container:!0,children:Object(P.jsx)(E.a,{item:!0,children:Object(P.jsx)(u.b,{to:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})}),Object(P.jsx)(pe.a,{mt:5,children:Object(P.jsx)(fe,{})})]})]})})]})}var ze=function(){return F.logOut(),Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(E.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(P.jsxs)(E.a,{item:!0,xs:12,children:[Object(P.jsx)(x.a,{variant:"h4",display:"block",gutterBottom:!0,children:"Thank you for your participation!"}),Object(P.jsx)(x.a,{variant:"subtitle1",display:"block",gutterBottom:!0,children:"Results will be informed via Discord."})]})})})},De=n(232),Te=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Ie(){var e=Te(),t=Object(a.useState)(""),n=Object(s.a)(t,2),i=n[0],r=n[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),l=o[0],d=o[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),O=h[0],m=h[1],p=Object(a.useState)(!1),f=Object(s.a)(p,2),v=f[0],y=f[1],S=Object(a.useState)(!1),w=Object(s.a)(S,2),C=w[0],k=w[1],z=Object(j.f)();return Object(P.jsxs)(De.a,{component:"main",maxWidth:"sm",children:[Object(P.jsx)(Oe.a,{}),Object(P.jsxs)("div",{className:e.paper,children:[Object(P.jsx)(xe.a,{className:e.avatar,alt:"nitt-logo",src:"/static/logos/nitt.png",style:{height:"10vh",width:"10vh"}}),Object(P.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(P.jsx)(ge.a,{in:!!C,children:Object(P.jsx)(we,{errorObj:C,handleClose:function(){return k(!1)}})}),Object(P.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault();var t=e.target[0].value,n=e.target[2].value,a=e.target[4].value,i=e.target[6].value;F.register({name:t,email:n,password:a,password2:i}).then((function(e){e.user1?(k({msg:e.Response,severity:"success"}),setTimeout((function(){return z.replace("/")}),2e3)):k({msg:e.Response,severity:"warning"})})).catch((function(e){console.log(e),k({msg:"Something went wrong!",severity:"error"})}))},children:[Object(P.jsxs)(E.a,{container:!0,spacing:2,children:[Object(P.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(M.a,{autoComplete:"name",name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0})}),Object(P.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(M.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",type:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(P.jsx)(E.a,{item:!0,xs:12,children:Object(P.jsx)(M.a,{variant:"outlined",required:!0,helperText:v&&"Password should be atleast 6 characters long",error:v,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:i,onChange:function(e){r(e.target.value),y(e.target.value.length<6)},autoComplete:"current-password"})}),Object(P.jsx)(E.a,{item:!0,xs:12,children:Object(P.jsx)(M.a,{error:O,helperText:O&&"Passwords do not match",variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",value:l,onChange:function(e){d(e.target.value),m(!(e.target.value===i))},autoComplete:"current-password"})})]}),Object(P.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:O||v,children:"Sign Up"}),Object(P.jsx)(E.a,{container:!0,justify:"flex-end",children:Object(P.jsx)(E.a,{item:!0,children:Object(P.jsx)(u.b,{to:"/",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(P.jsx)(pe.a,{mt:5,children:Object(P.jsx)(fe,{})})]})}var qe=function(){var e=Object(a.useContext)(H).sessionData;return Object(P.jsxs)(j.c,{children:[Object(P.jsx)(j.a,{path:"/",exact:!0,children:e?Object(P.jsx)(he,{}):Object(P.jsx)(ke,{})}),Object(P.jsx)(j.a,{path:"/signup",exact:!0,children:e?Object(P.jsx)(he,{}):Object(P.jsx)(Ie,{})}),Object(P.jsx)(j.a,{path:"/finish",exact:!0,children:e?Object(P.jsx)(ze,{}):Object(P.jsx)(Ie,{})})]})};var Ne=function(){var e=Object(a.useState)(F.getSessionData()),t=Object(s.a)(e,2),n={sessionData:t[0],setSessionData:t[1]};return Object(P.jsx)(H.Provider,{value:n,children:Object(P.jsx)(u.a,{children:Object(P.jsx)(l.a,{maxSnack:2,anchorOrigin:{vertical:"top",horizontal:"center"},TransitionComponent:o.a,children:Object(P.jsx)(qe,{})})})})};c.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(Ne,{})}),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.2d4e68dc.chunk.js.map