(this["webpackJsonpfoach-test"]=this["webpackJsonpfoach-test"]||[]).push([[0],{69:function(e,a,t){e.exports=t.p+"static/media/account_circle-24px.f395b399.svg"},81:function(e,a,t){e.exports=t(93)},93:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),o=t(42),c=t(32),s=t(12),m=t(34),u={users:{0:{id:0,name:"Phil Schiller",position:"Senior Vice President, Worldwide Marketing",onVacation:!0},1:{id:1,name:"Craig Federighi",position:"Senior Vice President Software Engineering",onVacation:!1},2:{id:2,name:"Eddy Cue",position:"Senior Vice President, Internet Software and Services",onVacation:!1}}},d=Object(c.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SWITCH_USER_VACATION":return Object(m.a)({},e,{users:Object.assign({},e.users,Object(s.a)({},n,Object(m.a)({},e.users[n],{onVacation:!e.users[n].onVacation})))});default:return e}}}),p=Object(c.d)(d,{},Object(c.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),f=t(51),h=t(27),b=t(28),E=t(140),g=t(55),v=t(133),x=t(134),y=t(135),k=t(2),N=t(139),w=function(e){var a=e.label,t=e.className,n=e.value,l=e.name,i=e.handleInput,o=e.error,c=Object(k.a)(e,["label","className","value","name","handleInput","error"]);return r.a.createElement(N.a,Object.assign({style:{verticalAlign:"middle"},fullWidth:!0,name:l,value:n,variant:"outlined",label:a,InputProps:{className:t},onChange:function(e){return i(e,"text")},error:!!o,helperText:o},c))},O=t(127),j=t(129),S=t(141),C=t(128),I=function(e){var a=e.name,t=e.value,n=e.label,l=e.handleCheckbox,i=e.error;return r.a.createElement(O.a,{error:!!i},r.a.createElement(j.a,{name:a,onChange:function(e){return l(e,"bool")},control:r.a.createElement(S.a,{value:t,color:"primary"}),label:n}),i?r.a.createElement(C.a,null,i):null)},P=t(146),A=function(e){var a=e.label,t=e.options,n=e.className,l=e.value,i=e.name,o=e.handleInput,c=e.error;return r.a.createElement(N.a,{name:i,value:l,className:n,InputProps:{className:n},onChange:function(e){return o(e,"text")},variant:"outlined",label:a,select:!0,fullWidth:!0,error:!!c,helperText:c},t.map((function(e,a){return r.a.createElement(P.a,{key:i+a,value:e},e)})))},_=t(95),V=Object(_.a)({container:{maxWidth:"470px",backgroundColor:"#fff"},title:{fontFamily:"Playfair Display",fontSize:"25px",lineHeight:"33px",fontWeight:"bold",fontStyle:"normal",marginBottom:"1rem",color:"#161616"},inlineLink:{margin:"0 .3rem",fontWeight:"bold",fontSize:"14px",lineHeight:"17px"},button:{fontSize:14,letterSpacing:"3px",lineHeight:"17px",fontWeight:"bold",borderRadius:0,padding:"15px 17px",color:"#fff"},input:{lineHeight:"17px",fontSize:14,borderRadius:0,color:"#161616"},checkboxes:{lineHeight:"20px",color:"#212322"},label:{lineHeight:"20px",color:"#212322"}}),z={firstName:{0:"First name is required",short:"First name must be 2 characters or more",long:"First name must be 12 characters or less"},lastName:{0:"Last name is required",short:"Last name must be 2 characters or more",long:"Last name must be 12 characters or less"},phone:{0:"Phone number is required",invalid:"Phone number isn't valid"},email:{0:"Email address is required",invalid:"Enter a valid email address"},amount:{0:"Select an amount"},confirmEmail:{0:"Confirm email address",noMatch:"Email addresses must match"},password:{0:"Password is required",short:"Password must me 8 characters or more"},confirmPassword:{0:"Confirm password",noMatch:"Passwords must match"},terms:{0:"You must agree to terms of service"}},H=t(144),W=t(143),F=t(130),L=t(94),T=t(131),M=t(132),Z=function(e){var a=e.label,t=e.className,l=e.value,i=e.name,o=e.handleInput,c=e.error,s=Object(n.useState)(!1),m=Object(b.a)(s,2),u=m[0],d=m[1];return r.a.createElement(O.a,{fullWidth:!0,error:!!c},r.a.createElement(H.a,{variant:"outlined",style:{backgroundColor:"#fff",padding:"0 .1rem"}},a),r.a.createElement(W.a,{variant:"outlined",value:l,name:i,className:t,onChange:function(e){return o(e,"text")},type:u?"text":"password",endAdornment:r.a.createElement(F.a,{position:"end"},r.a.createElement(L.a,{"aria-label":"toggle password visibility",onClick:function(){return d(!u)}},u?r.a.createElement(T.a,null):r.a.createElement(M.a,null)))}),c?r.a.createElement(C.a,null,c):null)},D=Object(h.f)((function(e){var a=e.history,t=Object(n.useState)({firstName:"",lastName:"",phone:"",amount:"",email:"",confirmEmail:"",password:"",confirmPassword:"",terms:!1,news:!1}),l=Object(b.a)(t,2),i=l[0],o=l[1],c=Object(n.useState)(!1),m=Object(b.a)(c,2),u=m[0],d=m[1],p=Object(n.useState)({}),f=Object(b.a)(p,2),h=f[0],k=f[1];Object(n.useEffect)((function(){Object.values(i).includes("")||!1===i.terms?d(!0):d(!1)}),[i]);var N=function(e,a){var t=e.target,n=t.name,r=t.value;switch(a){case"text":o(Object.assign({},i,Object(s.a)({},n,r)));break;case"bool":o(Object.assign({},i,Object(s.a)({},n,!i[n])));break;default:return}},O=V();return r.a.createElement(E.a,{className:O.container,p:"2rem 2rem 3rem 2rem"},r.a.createElement(g.a,{className:O.title},"Sign up"),r.a.createElement("form",{className:O.form,onSubmit:function(e){e.preventDefault();var t=function(e,a,t){var n={},r=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,l=/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,i=Object.keys(e).filter((function(e){return!a.includes(e)})),o=i.filter((function(e){return!t.includes(e)})),c=i.filter((function(e){return t.includes(e)}));return o.forEach((function(a){switch(typeof e[a]){case"string":if(0===e[a].length){n[a]=z[a][0];break}if(e[a].length<2){n[a]=z[a].short;break}if(e[a].length>12){n[a]=z[a].long;break}break;case"boolean":!1===e[a]&&(n[a]=z[a][0])}})),c.forEach((function(a){switch(a){case"phone":if(0===e[a].length){n[a]=z[a][0];break}if(l.test(e[a]))break;n[a]=z[a].invalid;break;case"email":if(0===e[a].length){n[a]=z[a][0];break}if(r.test(e[a]))break;n[a]=z[a].invalid;break;case"confirmEmail":if(0===e[a].length){n[a]=z[a][0];break}if(e[a]===e.email)break;n[a]=z[a].noMatch;break;case"password":if(0===e[a].length){n[a]=z[a][0];break}if(e[a].length<8){n[a]=z[a].short;break}break;case"confirmPassword":if(0===e[a].length){n[a]=z[a][0];break}if(e[a]!=e.password){n[a]=z[a].noMatch;break}}})),n}(i,["news"],["phone","email","confirmEmail","password","confirmPassword"]);0===Object.keys(t).length?a.push("app"):k(t)}},r.a.createElement(v.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(v.a,{item:!0,sm:6,xs:12},r.a.createElement(w,{label:"First Name",className:O.input,name:"firstName",value:i.firstName,handleInput:N,error:h.firstName})),r.a.createElement(v.a,{item:!0,sm:6,xs:12},r.a.createElement(w,{label:"Last Name",className:O.input,name:"lastName",value:i.lastName,handleInput:N,error:h.lastName})),r.a.createElement(v.a,{item:!0,sm:6,xs:12},r.a.createElement(w,{label:"Phone Number",className:O.input,name:"phone",value:i.phone,handleInput:N,error:h.phone})),r.a.createElement(v.a,{item:!0,sm:6,xs:12},r.a.createElement(A,{className:O.input,label:"Amount to invest",options:["100","200","300"],name:"amount",value:i.amount,handleInput:N,error:h.amount})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(w,{label:"Email Address",className:O.input,name:"email",value:i.email,handleInput:N,error:h.email})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(w,{label:"Confirm Email Address",className:O.input,name:"confirmEmail",value:i.confirmEmail,handleInput:N,error:h.confirmEmail})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(Z,{label:"Password",className:O.input,name:"password",value:i.password,handleInput:N,error:h.password,type:"password"})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(Z,{label:"Confirm Password",className:O.input,name:"confirmPassword",value:i.confirmPassword,handleInput:N,error:h.confirmPassword,type:"password"})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(I,{value:i.terms,name:"terms",className:O.label,handleCheckbox:N,error:h.terms,label:r.a.createElement(E.a,{className:O.checkboxes},"I certify that I am 18 years of age or older, and I agree to the",r.a.createElement(x.a,{href:"#",className:O.inlineLink},"Terms of Service"),"and",r.a.createElement(x.a,{href:"#",className:O.inlineLink},"Privacy Policy."))})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(I,{value:i.news,name:"news",className:O.label,handleCheckbox:N,label:r.a.createElement(g.a,{className:O.checkboxes},"I would like to receive important information and periodic news updates.")})),r.a.createElement(v.a,{item:!0,mt:4},r.a.createElement(E.a,{mt:2},r.a.createElement(y.a,{type:"submit",fullWidth:!0,className:O.button,variant:"contained",color:"primary",disabled:u},"create account"))))))})),R=t(145),U=t(137),$=Object(_.a)({container:{maxWidth:"920px",backgroundColor:"#fff",padding:"0 1rem",margin:"auto",marginBottom:"2rem"},text:{color:"#747474",fontSize:30,letterSpacing:"0.75px",lineHeight:"36px"},textPrimary:{color:"#747474"},textSecondary:{color:"#E0E0E0"},avatar:{backgroundColor:"#E0E0E0",height:"auto",width:"150px"},switch:{color:"#747474",fontSize:16,lineHeight:"16px",letterSpacing:"0.4px"}}),q=t(69),X=t.n(q),B=t(71),J=t(136),Y=function(e){return Object(B.a)({typography:Object(m.a)({},e.typography,{h2:{fontSize:30,lineHeight:"36px",letterSpacing:"0.75px",fontWeight:"normal",fontStyle:"normal"}}),palette:Object(m.a)({},e.palette),overrides:Object(m.a)({},e.overrides,{MuiSwitch:{switchBase:{color:"#979797","&$checked":{"& + $track":{backgroundColor:"#ECF6FE !important"}}},thumb:{width:"18px",height:"18px"},checked:{},track:{backgroundColor:"rgba(151, 151, 151, 0.3)"}}})})},G=function(e){var a=e.id,t=e.name,n=e.position,l=e.onVacation,i=e.changeUserVacation,o=$();return r.a.createElement(J.a,{theme:Y},r.a.createElement(v.a,{container:!0,className:o.container,spacing:2},r.a.createElement(v.a,{item:!0,xs:12,sm:3},r.a.createElement(E.a,{display:"flex",alignItems:"center",justifyContent:"center",style:{height:"100%"}},r.a.createElement(R.a,{className:o.avatar,src:X.a},t[0]))),r.a.createElement(v.a,{item:!0,xs:12,sm:6},r.a.createElement(E.a,{display:"flex-column",pt:"1.5rem",pb:"2rem"},r.a.createElement(E.a,{mb:"1.5rem"},r.a.createElement(g.a,{variant:"h2",className:o.textPrimary},t)),r.a.createElement(E.a,{mb:"1.5rem"},r.a.createElement(g.a,{variant:"h2",className:l?o.textSecondary:o.textPrimary},n)),r.a.createElement(g.a,null,r.a.createElement(j.a,{label:"On vacation",labelPlacement:"end",className:o.switch,control:r.a.createElement(U.a,{checked:l,onChange:function(){return i(a)},color:"primary"})}))))))},K=function(){var e=Object(o.c)((function(e){return e.users.users})),a=Object(o.b)(),t=function(e){a(function(e){return{type:"SWITCH_USER_VACATION",payload:e}}(e))};return r.a.createElement(v.a,{container:!0,justify:"center",style:{overflowX:"hidden"}},Object.keys(e).map((function(a,n){return r.a.createElement(v.a,{item:!0,sm:12,key:"user".concat(n)},r.a.createElement(G,{id:e[a].id,name:e[a].name,position:e[a].position,onVacation:e[a].onVacation,changeUserVacation:t}))})))},Q=t(138),ee=t(70),ae=(t(91),t(92),Object(B.a)({typography:{fontFamily:"Lato"},palette:{primary:{main:"#1EAAFC"}},overrides:{MuiFormHelperText:{root:{"&$error":{maxWidth:"65%",position:"absolute",bottom:"-0.9rem",backgroundColor:"#fff",paddingLeft:".3rem"}}},MuiFormLabel:{root:{fontSize:"14px",color:"#C2C2C2",lineHeight:"17px"}}}})),te=Object(ee.a)({container:{maxWidth:1024,margin:"auto",minHeight:"inherit"}}),ne=function(){var e=te();return r.a.createElement(o.a,{store:p},r.a.createElement("div",{className:"App",style:{minHeight:"100vh",backgroundColor:"#ecf6fe"}},r.a.createElement(E.a,{component:"div",display:"flex",className:e.container,alignItems:"center"},r.a.createElement(J.a,{theme:ae},r.a.createElement(Q.a,null),r.a.createElement(f.a,{basename:"/foach-test"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:D}),r.a.createElement(h.a,{exact:!0,path:"/app",component:K})))))))};i.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.23163097.chunk.js.map