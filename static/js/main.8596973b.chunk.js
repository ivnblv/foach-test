(this["webpackJsonpfoach-test"]=this["webpackJsonpfoach-test"]||[]).push([[0],{69:function(e,a,t){e.exports=t.p+"static/media/account_circle-24px.f395b399.svg"},81:function(e,a,t){e.exports=t(93)},93:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),o=t.n(l),i=t(42),c=t(32),s=t(12),m=t(34),u={users:{0:{id:0,name:"Phil Schiller",position:"Senior Vice President, Worldwide Marketing",onVacation:!0},1:{id:1,name:"Craig Federighi",position:"Senior Vice President Software Engineering",onVacation:!1},2:{id:2,name:"Eddy Cue",position:"Senior Vice President, Internet Software and Services",onVacation:!1}}},d=Object(c.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SWITCH_USER_VACATION":return Object(m.a)({},e,{users:Object.assign({},e.users,Object(s.a)({},n,Object(m.a)({},e.users[n],{onVacation:!e.users[n].onVacation})))});default:return e}}}),p=Object(c.d)(d,{},Object(c.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),h=t(51),f=t(27),b=t(28),E=t(140),g=t(55),x=t(133),v=t(134),k=t(135),y=t(2),w=t(139),N=function(e){var a=e.label,t=e.className,n=e.value,l=e.name,o=e.handleInput,i=e.error,c=Object(y.a)(e,["label","className","value","name","handleInput","error"]);return r.a.createElement(w.a,Object.assign({fullWidth:!0,name:l,value:n,variant:"outlined",label:a,InputProps:{className:t},onChange:function(e){return o(e,"text")},error:!!i,helperText:i},c))},O=t(127),S=t(129),C=t(141),j=t(128),I=function(e){var a=e.name,t=e.value,n=e.label,l=e.handleCheckbox,o=e.error;return r.a.createElement(O.a,{error:!!o},r.a.createElement(S.a,{name:a,onChange:function(e){return l(e,"bool")},control:r.a.createElement(C.a,{value:t,color:"primary"}),label:n}),o?r.a.createElement(j.a,null,o):null)},P=t(146),A=function(e){var a=e.label,t=e.options,n=e.className,l=e.value,o=e.name,i=e.handleInput,c=e.error;return r.a.createElement(w.a,{name:o,value:l,className:n,InputProps:{className:n},onChange:function(e){return i(e,"text")},variant:"outlined",label:a,select:!0,fullWidth:!0,error:!!c,helperText:c},t.map((function(e,a){return r.a.createElement(P.a,{key:o+a,value:e},e)})))},_=t(95),z=Object(_.a)({container:{maxWidth:"470px",backgroundColor:"#fff"},title:{fontFamily:"Playfair Display",fontSize:"25px",lineHeight:"33px",fontWeight:"bold",fontStyle:"normal",marginBottom:"1rem",color:"#161616"},inlineLink:{margin:"0 .3rem",fontWeight:"bold",fontSize:"14px",lineHeight:"17px"},button:{fontSize:14,letterSpacing:"3px",lineHeight:"17px",fontWeight:"bold",borderRadius:0,padding:"15px 17px",color:"#fff"},input:{lineHeight:"17px",fontSize:14,borderRadius:0,color:"#161616"},checkboxes:{lineHeight:"20px",color:"#212322"},label:{lineHeight:"20px",color:"#212322"}}),H={firstName:{0:"First name is required",short:"First name must be 2 characters or more",long:"First name must be 12 characters or less"},lastName:{0:"Last name is required",short:"Last name must be 2 characters or more",long:"Last name must be 12 characters or less"},phone:{0:"Phone number is required",invalid:"Phone number isn't valid"},email:{0:"Email address is required",invalid:"Enter a valid email address"},amount:{0:"Select an amount"},confirmEmail:{0:"Confirm email address",noMatch:"Email addresses must match"},password:{0:"Password is required",short:"Password must me 8 characters or more"},confirmPassword:{0:"Confirm password",noMatch:"Passwords must match"},terms:{0:"You must agree to terms of service"}},V=t(144),F=t(143),W=t(130),L=t(94),T=t(131),M=t(132),R=function(e){var a=e.label,t=e.className,l=e.value,o=e.name,i=e.handleInput,c=e.error,s=Object(n.useState)(!1),m=Object(b.a)(s,2),u=m[0],d=m[1];return r.a.createElement(O.a,{fullWidth:!0,error:!!c},r.a.createElement(V.a,{variant:"outlined",style:{backgroundColor:"#fff",padding:"0 .1rem"}},a),r.a.createElement(F.a,{variant:"outlined",value:l,name:o,className:t,onChange:function(e){return i(e,"text")},type:u?"text":"password",endAdornment:r.a.createElement(W.a,{position:"end"},r.a.createElement(L.a,{"aria-label":"toggle password visibility",onClick:function(){return d(!u)}},u?r.a.createElement(T.a,null):r.a.createElement(M.a,null)))}),c?r.a.createElement(j.a,null,c):null)},B=Object(f.f)((function(e){var a=e.history,t=Object(n.useState)({firstName:"",lastName:"",phone:"",amount:"",email:"",confirmEmail:"",password:"",confirmPassword:"",terms:!1,news:!1}),l=Object(b.a)(t,2),o=l[0],i=l[1],c=Object(n.useState)(!1),m=Object(b.a)(c,2),u=m[0],d=m[1],p=Object(n.useState)({}),h=Object(b.a)(p,2),f=h[0],y=h[1];Object(n.useEffect)((function(){Object.values(o).includes("")||!1===o.terms?d(!0):d(!1)}),[o]);var w=function(e,a){var t=e.target,n=t.name,r=t.value;switch(a){case"text":i(Object.assign({},o,Object(s.a)({},n,r)));break;case"bool":i(Object.assign({},o,Object(s.a)({},n,!o[n])));break;default:return}},O=z();return r.a.createElement(E.a,{className:O.container,p:"2rem 2rem 3rem 2rem"},r.a.createElement(g.a,{className:O.title},"Sign up"),r.a.createElement("form",{className:O.form,onSubmit:function(e){e.preventDefault();var t=function(e,a,t){var n={},r=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,l=/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,o=Object.keys(e).filter((function(e){return!a.includes(e)})),i=o.filter((function(e){return!t.includes(e)})),c=o.filter((function(e){return t.includes(e)}));return i.forEach((function(a){switch(typeof e[a]){case"string":if(0===e[a].length){n[a]=H[a][0];break}if(e[a].length<2){n[a]=H[a].short;break}if(e[a].length>12){n[a]=H[a].long;break}break;case"boolean":!1===e[a]&&(n[a]=H[a][0])}})),c.forEach((function(a){switch(a){case"phone":if(0===e[a].length){n[a]=H[a][0];break}if(l.test(e[a]))break;n[a]=H[a].invalid;break;case"email":if(0===e[a].length){n[a]=H[a][0];break}if(r.test(e[a]))break;n[a]=H[a].invalid;break;case"confirmEmail":if(0===e[a].length){n[a]=H[a][0];break}if(e[a]===e.email)break;n[a]=H[a].noMatch;break;case"password":if(0===e[a].length){n[a]=H[a][0];break}if(e[a].length<8){n[a]=H[a].short;break}break;case"confirmPassword":if(0===e[a].length){n[a]=H[a][0];break}if(e[a]!=e.password){n[a]=H[a].noMatch;break}}})),n}(o,["news"],["phone","email","confirmEmail","password","confirmPassword"]);0===Object.keys(t).length?a.push("app"):y(t)}},r.a.createElement(x.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(x.a,{item:!0,sm:6,xs:12},r.a.createElement(N,{label:"First Name",className:O.input,name:"firstName",value:o.firstName,handleInput:w,error:f.firstName})),r.a.createElement(x.a,{item:!0,sm:6,xs:12},r.a.createElement(N,{label:"Last Name",className:O.input,name:"lastName",value:o.lastName,handleInput:w,error:f.lastName})),r.a.createElement(x.a,{item:!0,sm:6,xs:12},r.a.createElement(N,{label:"Phone Number",className:O.input,name:"phone",value:o.phone,handleInput:w,error:f.phone})),r.a.createElement(x.a,{item:!0,sm:6,xs:12},r.a.createElement(A,{className:O.input,label:"Amount to invest",options:["100","200","300"],name:"amount",value:o.amount,handleInput:w,error:f.amount})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(N,{label:"Email Address",className:O.input,name:"email",value:o.email,handleInput:w,error:f.email})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(N,{label:"Confirm Email Address",className:O.input,name:"confirmEmail",value:o.confirmEmail,handleInput:w,error:f.confirmEmail})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(R,{label:"Password",className:O.input,name:"password",value:o.password,handleInput:w,error:f.password,type:"password"})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(R,{label:"Confirm Password",className:O.input,name:"confirmPassword",value:o.confirmPassword,handleInput:w,error:f.confirmPassword,type:"password"})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(I,{value:o.terms,name:"terms",className:O.label,handleCheckbox:w,error:f.terms,label:r.a.createElement(E.a,{className:O.checkboxes},"I certify that I am 18 years of age or older, and I agree to the",r.a.createElement(v.a,{href:"#",className:O.inlineLink},"Terms of Service"),"and",r.a.createElement(v.a,{href:"#",className:O.inlineLink},"Privacy Policy."))})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(I,{value:o.news,name:"news",className:O.label,handleCheckbox:w,label:r.a.createElement(g.a,{className:O.checkboxes},"I would like to receive important information and periodic news updates.")})),r.a.createElement(x.a,{item:!0,mt:4},r.a.createElement(E.a,{mt:2},r.a.createElement(k.a,{type:"submit",fullWidth:!0,className:O.button,variant:"contained",color:"primary",disabled:u},"create account"))))))})),Z=t(145),D=t(137),U=Object(_.a)({container:{maxWidth:"920px",backgroundColor:"#fff",padding:"1rem",margin:"auto",marginBottom:"2rem",border:"2px solid #1EAAFC",borderRadius:"8px"},text:{color:"#747474",fontSize:30,letterSpacing:"0.75px",lineHeight:"36px"},textPrimary:{color:"#747474"},textSecondary:{color:"#E0E0E0"},avatar:{backgroundColor:"#E0E0E0",height:"auto",width:"150px"},switch:{color:"#747474",fontSize:16,lineHeight:"16px",letterSpacing:"0.4px",paddingBottom:"5px"},switchChecked:{color:"#1EAAFC !important",fontSize:16,lineHeight:"16px",letterSpacing:"0.4px"},label:{fontSize:16,letterSpacing:"0.4px",lineHeight:"16px",color:"#747474",paddingBottom:"4px",paddingLeft:"5px"},labelChecked:{color:"#1EAAFC"}}),$=t(69),q=t.n($),X=t(71),J=t(136),Y=function(e){return Object(X.a)({typography:Object(m.a)({},e.typography,{h2:{fontSize:30,lineHeight:"36px",letterSpacing:"0.75px",fontWeight:"normal",fontStyle:"normal"}}),palette:Object(m.a)({},e.palette),overrides:Object(m.a)({},e.overrides,{MuiSwitch:{switchBase:{color:"#979797","&$checked":{"& + $track":{backgroundColor:"#ECF6FE !important"}}},thumb:{width:"18px",height:"18px"},checked:{},track:{backgroundColor:"rgba(151, 151, 151, 0.3)"}}})})},G=function(e){var a=e.id,t=e.name,n=e.position,l=e.onVacation,o=e.changeUserVacation,i=U();return r.a.createElement(J.a,{theme:Y},r.a.createElement(x.a,{container:!0,className:i.container},r.a.createElement(x.a,{item:!0,xs:12,sm:3},r.a.createElement(E.a,{display:"flex",alignItems:"center",justifyContent:"center",style:{height:"100%"}},r.a.createElement(Z.a,{className:i.avatar,src:q.a},t[0]))),r.a.createElement(x.a,{item:!0,xs:12,sm:6},r.a.createElement(E.a,{display:"flex-column",pt:"1.5rem",pb:"2rem",pl:"2rem"},r.a.createElement(E.a,{mb:"1.5rem"},r.a.createElement(g.a,{variant:"h2",className:i.textPrimary},t)),r.a.createElement(E.a,{mb:"1.5rem"},r.a.createElement(g.a,{variant:"h2",className:l?i.textSecondary:i.textPrimary},n)),r.a.createElement(g.a,null,r.a.createElement(S.a,{label:"On vacation",labelPlacement:"end",classes:{label:l?"".concat(i.label," ").concat(i.labelChecked):i.label},control:r.a.createElement(D.a,{checked:l,onChange:function(){return o(a)},color:"primary"})}))))))},K=function(){var e=Object(i.c)((function(e){return e.users.users})),a=Object(i.b)(),t=function(e){a(function(e){return{type:"SWITCH_USER_VACATION",payload:e}}(e))};return r.a.createElement(x.a,{container:!0,justify:"center",style:{overflowX:"hidden"}},Object.keys(e).map((function(a,n){return r.a.createElement(x.a,{item:!0,sm:12,key:"user".concat(n)},r.a.createElement(G,{id:e[a].id,name:e[a].name,position:e[a].position,onVacation:e[a].onVacation,changeUserVacation:t}))})))},Q=t(138),ee=t(70),ae=(t(91),t(92),Object(X.a)({typography:{fontFamily:"Lato"},palette:{primary:{main:"#1EAAFC"}},overrides:{MuiFormHelperText:{root:{"&$error":{maxWidth:"65%",position:"absolute",bottom:"-0.9rem",backgroundColor:"#fff",paddingLeft:".3rem"}}},MuiFormLabel:{root:{fontSize:"14px",color:"#C2C2C2",lineHeight:"17px"}},MuiCheckbox:{root:{color:" #C2C2C2",borderRadius:0,marginBottom:"3px",paddingTop:0}}}})),te=Object(ee.a)({container:{maxWidth:1024,margin:"auto",minHeight:"inherit"}}),ne=function(){var e=te();return r.a.createElement(i.a,{store:p},r.a.createElement("div",{className:"App",style:{minHeight:"100vh",backgroundColor:"#ecf6fe"}},r.a.createElement(E.a,{component:"div",display:"flex",className:e.container,alignItems:"center"},r.a.createElement(J.a,{theme:ae},r.a.createElement(Q.a,null),r.a.createElement(h.a,{basename:"/foach-test"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:B}),r.a.createElement(f.a,{exact:!0,path:"/app",component:K})))))))};o.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.8596973b.chunk.js.map