(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[1],{13:function(e,t,n){e.exports={usersPage:"Users_usersPage__3pLvn",container:"Users_container__3gcvt",users:"Users_users__iHU0o",user:"Users_user__3F1QO",userAvatar:"Users_userAvatar__12H_V",blockInfoUser:"Users_blockInfoUser__2D7Vl",name:"Users_name__2dkYM",status:"Users_status__3RLyX",location:"Users_location__1H_JJ",buttonFollow:"Users_buttonFollow__1zNtR",buttonUnfollow:"Users_buttonUnfollow__U1RPy"}},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return j}));var r=n(4),a=n.n(r),s=n(7),c=n(2),o=n(6),i={data:{userId:null,email:null,login:null},isAuth:!1,message:"",captchaUrl:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET-USERS-DATA":return Object(c.a)(Object(c.a)({},e),{},{data:t.data});case"AUTH/SET-IS-AUTH":return Object(c.a)(Object(c.a)({},e),{},{isAuth:t.isAuth});case"AUTH/GET-CAPTCHA-URL-SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}};var u=function(e,t,n){return{type:"AUTH/SET-USERS-DATA",data:{userId:e,email:t,login:n}}},l=function(e){return{type:"AUTH/SET-IS-AUTH",isAuth:e}},f=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,c=r.email,i=r.login,t(u(s,c,i)),t(l(!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n,r,c){return function(){var i=Object(s.a)(a.a.mark((function s(i){var u;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,o.a.login(e,t,n,r);case 3:0===(u=a.sent).data.resultCode?i(f()):(10===u.data.resultCode&&i(p()),c(u.data.messages[0]));case 5:case"end":return a.stop()}}),s)})));return function(e){return i.apply(this,arguments)}}()},p=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t({type:"AUTH/GET-CAPTCHA-URL-SUCCESS",captchaUrl:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&(t(d(null,null,!1,"null",(function(e){return""}))),t(l(!1)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var r=n.p+"static/media/fidget-spinner.29181c59.gif",a=n(1),s=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},23:function(e,t,n){e.exports={header:"Header_header__2U6A2",container:"Header_container__3KFfA",title:"Header_title__1TVtx",loginBlock:"Header_loginBlock__2yecS",button:"Header_button__2fdez"}},27:function(e,t,n){e.exports={paginator:"Paginator_paginator__2uczv",selectedPage:"Paginator_selectedPage__3VRT4",button:"Paginator_button__2eyNF"}},39:function(e,t,n){e.exports={footer:"Footer_footer__1TAdZ",footerText:"Footer_footerText__2fXBr"}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"g",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(4),a=n.n(r),s=n(7),c=n(20),o=n(2),i=n(6),u={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Awesome!",likesCount:5}],profile:{photos:{small:"",large:""},lookingForAJobDescription:"",lookingForAJob:!1,aboutMe:"",fullName:"",contacts:{github:"",vk:"",facebook:"",instagram:"",twitter:"",website:"",youtube:"",mainLink:""}},status:""};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE-PAGE/ADD-POST":var n={id:(new Date).getTime(),message:t.newMessageText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case"PROFILE-PAGE/SET-STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"PROFILE-PAGE/SET-USER-PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"PROFILE-PAGE/DELETE-POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"PROFILE-PAGE/SAVE-PHOTO-SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:Object(o.a)(Object(o.a)({},e.profile.photos),{},{small:t.photo,large:t.photo})})});default:return e}};var l=function(e){return{type:"PROFILE-PAGE/ADD-POST",newMessageText:e}},f=function(e){return{type:"PROFILE-PAGE/SET-STATUS",status:e}},d=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n({type:"PROFILE-PAGE/SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"PROFILE-PAGE/SAVE-PHOTO-SUCCESS",photo:r.data.data.photos.large});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r,s){var c,o,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=s().auth.data.userId,n.next=3,i.b.changeProfileData(e);case 3:if(0!==(o=n.sent).data.resultCode){n.next=8;break}r(d(c)),n.next=11;break;case 8:return u=o.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase(),t("Invalid url format "+u),n.abrupt("return",Promise.reject(o.data.messages[0]));case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}},56:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(20),a=n(2),s={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Pasha"},{id:4,name:"Olga"}],messages:[{id:1,message:"Hello, my friend!"},{id:2,message:'Have you seen the new "Spider-Man: No Way Home" yet?'},{id:3,message:"What will you do during the winter holidays? Come with us to the Altai! Will be cool!"},{id:4,message:"How are you learning Javascript?"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS-PAGE/SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}};var c=function(e){return{type:"DIALOGS-PAGE/SEND-MESSAGE",newMessageBody:e}}},6:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(59),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"88133967-bfe7-4c18-8b37-a3c163827473"}}),s={getUsers:function(e,t){return a.get("users/?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},changeProfileData:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},69:function(e,t,n){},70:function(e,t,n){},8:function(e,t,n){e.exports={nav:"Navbar_nav__2Fa0v",item:"Navbar_item__90oSo",activeLink:"Navbar_activeLink__3nmss"}},97:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,273)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(0),s=n.n(a),c=n(32),o=n.n(c),i=(n(69),n(16)),u=n(17),l=n(18),f=n(19),d=(n(70),n(5)),p=n(10),j=n(2),b=n(15),h=n(21),g=n(23),O=n.n(g),m=n(60),v=n(31),S=n.p+"static/media/black-map.6d299889.png",w=n(1),P=function(e){return Object(w.jsx)("header",{className:O.a.header,children:Object(w.jsxs)("div",{className:O.a.container,children:[Object(w.jsx)("img",{src:S}),Object(w.jsxs)("div",{className:O.a.title,children:["Social Network",Object(w.jsx)(v.a,{icon:m.faDragon,style:{marginLeft:10}})]}),Object(w.jsx)("div",{className:O.a.loginBlock,children:e.isAuth?Object(w.jsxs)("div",{children:[e.login,Object(w.jsx)("button",{onClick:e.logoutTC,className:O.a.button,children:"Log out"})]}):Object(w.jsx)("div",{children:Object(w.jsx)(p.b,{to:"/login",children:"Login"})})})]})})},x=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(w.jsx)(P,Object(j.a)({},this.props))}}]),n}(s.a.Component),E=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.data.login}}),{logoutTC:h.d})(x),A=n(22),U=n(4),C=n.n(U),y=n(7),I=n(20),T=n(6),G=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),r):e}))},N={users:[],pageSize:8,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS-PAGE/FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:G(e.users,t.userId,"id",{followed:!0})});case"USERS-PAGE/UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:G(e.users,t.userId,"id",{followed:!1})});case"USERS-PAGE/SET-USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case"USERS-PAGE/SET-CURRENT-PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"USERS-PAGE/SET-TOTAL-USERS-COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case"USERS-PAGE/TOGGLE-IS-FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"USERS-PAGE/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(I.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},R=function(e){return{type:"USERS-PAGE/FOLLOW",userId:e}},F=function(e){return{type:"USERS-PAGE/UNFOLLOW",userId:e}},L=function(e){return{type:"USERS-PAGE/SET-CURRENT-PAGE",currentPage:e}},z=function(e){return{type:"USERS-PAGE/TOGGLE-IS-FETCHING",isFetching:e}},M=function(e,t){return{type:"USERS-PAGE/TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},D=function(){var e=Object(y.a)(C.a.mark((function e(t,n,r,a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(M(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(M(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),K=n(14),V=n(13),H=n.n(V),B=n(41),Z=n(27),Y=n.n(Z),Q=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var s=Math.ceil(t/20),c=Object(a.useState)(1),o=Object(B.a)(c,2),i=o[0],u=o[1],l=20*(i-1)+1,f=20*i;return Object(w.jsxs)("div",{className:Y.a.paginator,children:[i>1&&Object(w.jsx)("button",{className:Y.a.button,onClick:function(){u(i-1)},children:"<"}),n.filter((function(e){return e>=l&&e<=f})).map((function(t){return Object(w.jsx)("span",{className:e.currentPage===t?Y.a.selectedPage:"",onClick:function(n){e.onPageChanged(t)},children:t})})),s>i&&Object(w.jsx)("button",{className:Y.a.button,onClick:function(){u(i+1)},children:">"})]})},q=n(56),J=function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:H.a.user,children:[Object(w.jsx)("div",{className:H.a.userAvatar,children:Object(w.jsx)(p.b,{to:"profile/"+e.users.id,children:Object(w.jsx)("img",{src:null!=e.users.photos.small?e.users.photos.small:q.a})})}),Object(w.jsx)("div",{className:H.a.blockInfoUser,children:Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:H.a.name,children:e.users.name}),Object(w.jsx)("div",{className:H.a.status,children:null!==e.users.status?e.users.status:"I have not status"})]})}),Object(w.jsx)("div",{children:e.users.followed?Object(w.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.users.id})),onClick:function(){e.unfollow(e.users.id)},className:H.a.buttonFollow,children:"unfollow"}):Object(w.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.users.id})),onClick:function(){e.follow(e.users.id)},className:H.a.buttonUnfollow,children:"follow"})})]},e.users.id)})},W=function(e){return Object(w.jsxs)("div",{className:H.a.usersPage,children:[Object(w.jsx)(Q,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),Object(w.jsx)("div",{className:H.a.users,children:e.users.map((function(t){return Object(w.jsx)(J,{users:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},t.id)}))})]})},X=n(64),_=Object(X.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),$=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},re=function(e){return e.usersPage.followingInProgress},ae=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(w.jsxs)(w.Fragment,{children:[this.props.isFetching?Object(w.jsx)(A.a,{}):null,Object(w.jsx)(W,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.PureComponent),se=Object(K.compose)(Object(b.b)((function(e){return{users:_(e),pageSize:$(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:re(e)}}),{follow:function(e){return function(){var t=Object(y.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,T.d.follow.bind(T.d),R);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(y.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,T.d.unfollow.bind(T.d),F);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleFollowingProgress:M,getUsers:function(e,t){return function(){var n=Object(y.a)(C.a.mark((function n(r){var a;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(!0)),r(L(e)),n.next=4,T.d.getUsers(e,t);case 4:a=n.sent,r(z(!1)),r({type:"USERS-PAGE/SET-USERS",users:a.items}),r({type:"USERS-PAGE/SET-TOTAL-USERS-COUNT",count:a.totalCount}),r(L(e));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPage:L}))(ae),ce=n(8),oe=n.n(ce),ie=function(){return Object(w.jsxs)("nav",{className:oe.a.nav,children:[Object(w.jsx)("div",{className:oe.a.item,children:Object(w.jsx)(p.b,{to:"/profile",activeClassName:oe.a.activeLink,children:"Profile"})}),Object(w.jsx)("div",{className:"".concat(oe.a.item," $(s.active}"),children:Object(w.jsx)(p.b,{to:"/dialogs",activeClassName:oe.a.activeLink,children:"Messages"})}),Object(w.jsx)("div",{className:"".concat(oe.a.item," $(s.active}"),children:Object(w.jsx)(p.b,{to:"/users",activeClassName:oe.a.activeLink,children:"Users"})}),Object(w.jsx)("div",{className:oe.a.item,children:Object(w.jsx)(p.b,{to:"/music",activeClassName:oe.a.activeLink,children:"Music"})}),Object(w.jsx)("div",{className:oe.a.item,children:Object(w.jsx)(p.b,{to:"/news",activeClassName:oe.a.activeLink,children:"News"})}),Object(w.jsx)("div",{className:oe.a.item,children:Object(w.jsx)(p.b,{to:"/settings",activeClassName:oe.a.activeLink,children:"Settings"})})]})},ue={initialized:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/INITIALIZED-SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},fe=n(43),de=n(57),pe={},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;return e},be=n(62),he=n(61),ge=Object(K.combineReducers)({profilePage:fe.c,dialogsPage:de.a,sidebar:je,usersPage:k,auth:h.a,app:le}),Oe=Object(K.createStore)(ge,Object(he.composeWithDevTools)(Object(K.applyMiddleware)(be.a)));window.store=Oe;var me=Oe;function ve(e){return function(t){return Object(w.jsx)(s.a.Suspense,{fallback:Object(w.jsx)(A.a,{}),children:Object(w.jsx)(e,Object(j.a)({},t))})}}var Se=n(39),we=n.n(Se),Pe=n(63),xe=s.a.memo((function(){return Object(w.jsx)("footer",{className:we.a.footer,children:Object(w.jsxs)("div",{className:we.a.footerText,children:[Object(w.jsx)("span",{children:"This is my first project"}),Object(w.jsx)("br",{}),Object(w.jsxs)("span",{children:["Social network was developed by SrG ",Object(w.jsx)(v.a,{icon:Pe.faAtom})," 2022"]})]})})})),Ee=s.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,277))})),Ae=s.a.lazy((function(){return Promise.all([n.e(0),n.e(7),n.e(4)]).then(n.bind(null,276))})),Ue=s.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,274))})),Ce=s.a.lazy((function(){return n.e(5).then(n.bind(null,275))})),ye=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(w.jsxs)("div",{className:"app-wrapper",children:[Object(w.jsx)(E,{}),Object(w.jsx)(ie,{}),Object(w.jsxs)("div",{className:"app-wrapper-content",children:[Object(w.jsx)(d.b,{path:"/dialogs",component:ve(Ee)}),Object(w.jsx)(d.b,{path:"/profile/:userId?",component:ve(Ae)}),Object(w.jsx)(d.b,{path:"/users",render:function(){return Object(w.jsx)(se,{})}}),Object(w.jsx)(d.b,{path:"/login",component:ve(Ue)}),Object(w.jsx)(d.b,{path:"/music",component:ve(Ce)})]}),Object(w.jsx)(xe,{})]}):Object(w.jsx)(A.a,{})}}]),n}(s.a.Component),Ie=Object(K.compose)(d.f,Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializedAppTC:function(){return function(e){var t=e(Object(h.b)());Promise.all([t]).then((function(){e({type:"APP/INITIALIZED-SUCCESS"})}))}}}))(ye),Te=function(){return Object(w.jsx)(p.a,{basename:"/social-net",children:Object(w.jsx)(b.a,{store:me,children:Object(w.jsx)(Ie,{})})})};o.a.render(Object(w.jsx)(Te,{}),document.getElementById("root")),r()}},[[97,2,3]]]);
//# sourceMappingURL=main.06d0af0f.chunk.js.map