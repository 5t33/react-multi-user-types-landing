(this["webpackJsonpband-connect"]=this["webpackJsonpband-connect"]||[]).push([[0],{201:function(e,t,a){e.exports=a.p+"static/media/alexander-popov-hTv8aaPziOQ-unsplash.30356eb3.jpg"},202:function(e,t,a){e.exports=a.p+"static/media/down-arrow.5e4afb31.svg"},203:function(e,t,a){e.exports=a.p+"static/media/austin-neill-1t0yY9lSpyE-unsplash.9f7ca609.jpg"},205:function(e,t,a){e.exports=a.p+"static/media/left-arrow-alt-solid-orange.1c10a373.svg"},206:function(e,t,a){e.exports=a.p+"static/media/right-arrow-alt-solid-orange.957294c8.svg"},219:function(e,t,a){e.exports=a(355)},223:function(e,t,a){},224:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),i=a.n(o),l=a(9),c=a.n(l),s=(a(223),a(46)),u=(a(224),a(398)),m=a(211),p=Object(m.a)({palette:{primary:{main:"#333",dark:"#333",light:"#fff"},secondary:{main:"#FF5A5F"}},typography:{},breakpoints:{values:{xs:400,sm:600,md:960,lg:1280,xl:1920}}}),d=a(3),b=a(388),f=a(390),g=a(356),h=a(391),E=a(386),x=a(392),v=a(393),S=a(402),C=a(212),w=a(394),y=a(403),T=a(404),O=a(61),N=function(e){console.log("successfully called scrollToDiv"),e&&e.current&&(console.log("calling scroll into view"),e.current.scrollIntoView({behavior:"smooth"}))},k=Object(E.a)((function(e){var t,a;return{root:{flexGrow:1},title:{flexGrow:1,"& p":(t={cursor:"pointer",fontWeight:"bold",fontSize:"1.5rem"},Object(d.a)(t,e.breakpoints.up("lg"),{fontSize:"2rem"}),Object(d.a)(t,e.breakpoints.up("xl"),{fontSize:"2.75rem"}),t),display:"flex"},ToolBarStyles:{minHeight:"4rem",height:"7vh","& button":(a={fontWeight:800,textTransform:"none"},Object(d.a)(a,e.breakpoints.down("xl"),{fontSize:"1rem"}),Object(d.a)(a,e.breakpoints.up("xl"),{fontSize:"1.5rem"}),Object(d.a)(a,"padding","2px 5px"),Object(d.a)(a,"&.MuiButton-root",{"&:hover":{backgroundColor:"#6d6d6d"}}),a)},SignUpButton:{borderStyle:"solid",borderWidth:"1px","&.MuiButton-root":{"&:hover":{backgroundColor:"none"}}},AboutUsButton:{marginRight:"1rem"},MenuButton:Object(d.a)({},e.breakpoints.up("md"),{visibility:"hidden"}),HorizontalMenuContainer:Object(d.a)({},e.breakpoints.down("sm"),{visibility:"hidden"}),VertMenu:{backgroundColor:e.palette.primary.main,color:"#ffffff","& .MuiMenuItem-root":{fontWeight:"bold","&:hover":{backgroundColor:"#6d6d6d"}}},MenuIcon:{fontSize:"1.5rem"}}})),j=function(e){var t=e.signUpClick,a=k(),n=i.a.useState(!1),r=Object(s.a)(n,2),o=r[0],l=r[1],c=i.a.useRef(null),u=function(e){console.log("inside handle close"),c.current&&c.current.contains(e.target)?console.log("handle close returned pre-maturely"):(console.log("successfully set handleOpen"),l(!1))};function m(e){"Tab"===e.key&&(e.preventDefault(),l(!1))}return window.addEventListener("resize",(function(){return l(!1)})),i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,null,i.a.createElement(f.a,{className:a.ToolBarStyles},i.a.createElement("div",{className:a.title,onClick:function(){return N(e.aboutRef)}},i.a.createElement(g.a,null,"Band\xa0Connect")),i.a.createElement("div",{className:a.HorizontalMenuContainer},i.a.createElement(h.a,{color:"inherit",className:a.AboutUsButton,onClick:function(){return N(e.aboutRef)}},"About Us"),i.a.createElement(h.a,{color:"inherit",className:a.SignUpButton,onClick:function(){return t()}},"Sign Up")),i.a.createElement(x.a,{edge:"start",className:a.MenuButton,color:"inherit","aria-label":"menu",ref:c,"aria-controls":o?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){l((function(e){return!e}))}},i.a.createElement(O.a,{className:a.MenuIcon,icon:"bars"})),i.a.createElement(v.a,{open:o,anchorEl:c.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var n=e.TransitionProps,r=e.placement;return i.a.createElement(S.a,Object.assign({},n,{style:{transformOrigin:"bottom"===r?"center top":"center bottom"}}),i.a.createElement(C.a,{className:a.VertMenu},i.a.createElement(w.a,{onClickAway:u},i.a.createElement(y.a,{autoFocusItem:o,id:"menu-list-grow",onKeyDown:m},i.a.createElement(T.a,{onClick:function(e){t(),u(e)}},"About Us"),i.a.createElement(T.a,{onClick:function(e){t(),u(e)}},"Sign Up")))))})))))},I=a(200),z=Object(E.a)((function(e){var t;return{root:(t={minWidth:"200px",color:"white",margin:"0 10px",backgroundColor:e.palette.secondary.main,textTransform:"none",fontWeight:"bold",marginTop:"1rem",padding:"1rem 4rem",whiteSpace:"nowrap",flex:"1 0 45%",maxWidth:"250px","&:hover":{backgroundColor:e.palette.secondary.main,cursor:"pointer"},"& p":{fontWeight:"bold"}},Object(d.a)(t,e.breakpoints.down("xs"),{padding:".5rem 2rem","& p":{fontSize:".875rem"}}),Object(d.a)(t,e.breakpoints.up("xs"),{padding:".5rem 2rem","& p":{fontSize:"1rem"}}),Object(d.a)(t,e.breakpoints.up("lg"),{maxWidth:"300px","& p":{fontSize:"1.5rem"}}),Object(d.a)(t,e.breakpoints.up("xl"),{"& p":{fontSize:"2rem"}}),t)}})),A=function(e){var t=z();return i.a.createElement(h.a,Object.assign({className:"".concat(e.className," ").concat(t.root)},Object(I.omit)(e,"className")))},F=a(201),B=a.n(F),P=a(202),_=a.n(P),R=Object(E.a)((function(e){var t,a;return{root:(a={position:"relative",alignSelf:"center",cursor:"pointer","& p":{color:"white",display:"inline-block",marginRight:".625rem",textShadow:"1px 1px 3px #8D8D8D",flexGrow:1,fontWeight:"bold"}},Object(d.a)(a,e.breakpoints.down("xs"),{marginTop:"1rem","& p":{fontSize:"1.25rem"}}),Object(d.a)(a,e.breakpoints.up("sm"),{marginTop:"2rem","& p":{fontSize:"2rem"}}),Object(d.a)(a,e.breakpoints.up("xl"),{marginTop:"3rem","& p":{fontSize:"3rem"}}),Object(d.a)(a,"& img",(t={position:"absolute",right:"-30px",top:"18px"},Object(d.a)(t,e.breakpoints.down("xs"),{right:"-18px",top:"9px",height:"14px"}),Object(d.a)(t,e.breakpoints.up("sm"),{height:"22px",top:"14px"}),Object(d.a)(t,e.breakpoints.up("lg"),{top:"15px",height:"23px"}),Object(d.a)(t,e.breakpoints.up("xl"),{top:"24px",right:"-40px",height:"28px"}),t)),a)}})),L=function(e){var t=R({});return i.a.createElement("div",{className:t.root,onClick:e.onClick||function(){}},i.a.createElement(g.a,null," ",e.text," "),i.a.createElement("img",{src:_.a}))},D=Object(E.a)((function(e){var t,a,n,r,o;return{root:{height:"100vh",backgroundColor:"#E1E1E1"},LandingPageContainer:Object(d.a)({height:"100vh",overflow:"hidden",position:"relative",display:"flex"},e.breakpoints.down("sm"),{justifyContent:"center"}),CoverImageStyles:{backgroundPosition:"center",minHeight:"160vh",position:"absolute",left:"0vw",top:"-60vh"},CoverImageOverLay:{backgroundPosition:"center",top:0,position:"absolute",width:"100vw",height:"100vh",zIndex:100},ContentContainer:(t={display:"flex",flexFlow:"column",justifyContent:"center",color:"white",height:"100vh",maxWidth:"700px",position:"relative",margin:"0 5vw",zIndex:1e3},Object(d.a)(t,e.breakpoints.down("xs"),{marginTop:"1.5rem"}),Object(d.a)(t,e.breakpoints.up("xl"),{justifyContent:"center",maxWidth:"800px"}),t),CopyContainer:{position:"relative",zIndex:1300,"& > *":{fontWeight:"bold"},"& p":(a={},Object(d.a)(a,e.breakpoints.down("xs"),{fontSize:"1.25rem"}),Object(d.a)(a,e.breakpoints.up("sm"),{fontSize:"2rem"}),Object(d.a)(a,e.breakpoints.up("lg"),{fontSize:"2.5rem"}),Object(d.a)(a,e.breakpoints.up("xl"),{fontSize:"3rem"}),a)},JoinButtonsContainer:{position:"relative",display:"flex",flexFlow:"wrap",zIndex:1300,justifyContent:"center"},JoinButton:{minWidth:"250px"},AboutPageContainer:{height:"100vh",width:"100vw",backgroundColor:"red"},title:{display:"flex",flex:"none",margin:0,padding:0,"& p":(n={flexGrow:1,fontWeight:"bold"},Object(d.a)(n,e.breakpoints.down("xs"),{fontSize:"2rem"}),Object(d.a)(n,e.breakpoints.up("sm"),{fontSize:"2.5rem"}),Object(d.a)(n,e.breakpoints.up("lg"),{fontSize:"3rem"}),Object(d.a)(n,e.breakpoints.up("xl"),{fontSize:"3.5rem"}),n)},LearnMoreContainer:(o={position:"relative",alignSelf:"center",cursor:"pointer","& p":{color:"white",display:"inline-block",marginRight:".625rem",flexGrow:1,fontWeight:"bold"}},Object(d.a)(o,e.breakpoints.down("xs"),{marginTop:"1rem","& p":{fontSize:"2rem"}}),Object(d.a)(o,e.breakpoints.up("sm"),{marginTop:"2rem","& p":{fontSize:"2rem"}}),Object(d.a)(o,e.breakpoints.up("xl"),{marginTop:"5rem","& p":{fontSize:"3rem"}}),Object(d.a)(o,"& img",(r={},Object(d.a)(r,e.breakpoints.down("lg"),{height:"18px"}),Object(d.a)(r,e.breakpoints.up("lg"),{height:"23px"}),Object(d.a)(r,e.breakpoints.up("xl"),{height:"28px"}),r)),o)}})),M=function(e){var t=D(),a=e.aboutRef,n=e.topRef,r=e.signUpClick;return i.a.createElement("div",{className:t.root,ref:n},i.a.createElement("div",{className:t.LandingPageContainer},i.a.createElement("img",{src:B.a,className:t.CoverImageStyles}),i.a.createElement("div",{className:t.CoverImageOverLay}),i.a.createElement("div",{className:t.ContentContainer},i.a.createElement("div",{className:t.CopyContainer},i.a.createElement("div",{className:t.title},i.a.createElement(g.a,{id:"title"},"Band Connect")),i.a.createElement(g.a,null,"The only place for bands to connect with venues and fans.")),i.a.createElement("div",{className:t.JoinButtonsContainer},i.a.createElement(A,{className:t.JoinButton,onClick:r},i.a.createElement(g.a,null,"Create Account"))),i.a.createElement(L,{text:"Learn More",onClick:function(){return N(a)}}))))},U=a(395),q=a(203),W=a.n(q),V=Object(E.a)((function(e){var t,a,n,r;return{root:(t={display:"flex",flexFlow:"column",alignItems:"flex-end",justifyContent:"center",position:"relative",height:"100vh",backgroundColor:"#E1E1E1",overflow:"hidden"},Object(d.a)(t,e.breakpoints.down("xs"),{height:"120vh"}),Object(d.a)(t,e.breakpoints.down("md"),{alignItems:"center"}),t),CoverImageStyles:Object(d.a)({backgroundPosition:"center",position:"absolute",height:"110vh",minWidth:"100vw",left:"0",top:"0"},e.breakpoints.down("xs"),{height:"120vh"}),CoverImageOverLay:Object(d.a)({top:"0",backgroundPosition:"center",position:"absolute",width:"100vw",height:"100vh",zIndex:100},e.breakpoints.down("xs"),{height:"120vh"}),ContentContainer:(a={zIndex:1e3,paddingBottom:"2rem",position:"relative",maxWidth:"650px",display:"flex",flexFlow:"column",textAlign:"left",marginRight:"2rem",marginLeft:"2rem","& p":{position:"relative",color:"gray"},"& > *":{}},Object(d.a)(a,e.breakpoints.down("xs"),{marginTop:"1rem"}),Object(d.a)(a,e.breakpoints.up("xs"),{}),Object(d.a)(a,e.breakpoints.up("sm"),{}),Object(d.a)(a,e.breakpoints.up("md"),{maxWidth:"800px"}),Object(d.a)(a,e.breakpoints.up("lg"),{}),a),CopyCard:{backgroundColor:"rgba(255,255,255,.9)"},Title:(n={paddingTop:"1rem",paddingLeft:"2rem",paddingRight:"1rem"},Object(d.a)(n,e.breakpoints.down("xs"),{marginBottom:"1rem",fontSize:"1.5rem"}),Object(d.a)(n,e.breakpoints.up("xs"),{}),Object(d.a)(n,e.breakpoints.up("sm"),{fontSize:"2rem",marginBottom:"2rem"}),Object(d.a)(n,e.breakpoints.up("md"),{}),Object(d.a)(n,e.breakpoints.up("lg"),{}),n),Copy:(r={fontWeight:"bold",marginBottom:"1rem",paddingLeft:"2rem",paddingRight:"2rem"},Object(d.a)(r,e.breakpoints.down("sm"),{fontSize:".625rem"}),Object(d.a)(r,e.breakpoints.up("sm"),{fontSize:"1rem"}),Object(d.a)(r,e.breakpoints.up("md"),{fontSize:"1.25rem"}),Object(d.a)(r,e.breakpoints.up("xl"),{fontSize:"1.5rem"}),r)}})),Y=function(e,t){var a=V();return i.a.createElement("div",{className:a.root,ref:t},i.a.createElement("img",{src:W.a,className:a.CoverImageStyles}),i.a.createElement("div",{className:a.CoverImageOverLay}),i.a.createElement("div",{className:a.ContentContainer},i.a.createElement(U.a,{className:a.CopyCard},i.a.createElement(g.a,{className:a.Title},"About Us"),i.a.createElement(g.a,{className:a.Copy},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.        Pellentesque lorem nibh, eleifend eu fermentum at, gravida ac libero.        Aliquam sollicitudin justo neque, in elementum nulla pretium sed.        Phasellus varius, nisl non vulputate facilisis, lacus ligula lobortis augue,        id feugiat enim felis id dui. Morbi rutrum fringilla tortor,et consequat nibh        aliquet sit amet."),i.a.createElement(g.a,{className:a.Copy},"Ut a nibh porttitor, tincidunt ligula vel, ornare dolor. Donec accumsan arcu orci,         nec imperdiet lacus varius facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.        Aliquam vestibulum diam mi, eu ullamcorper ante fringilla ac. In commodo sit amet metus id auctor.         Suspendisse bibendum non metus ac rhoncus. Vivamus malesuada id leo et pharetra."))))},G=a(401),J=a(59),H={Artist:"Artist",Venue:"Venue",Fan:"Fan"};!function(e){e[e.INCREMENT_STEP=0]="INCREMENT_STEP",e[e.DECREMENT_STEP=1]="DECREMENT_STEP",e[e.SET_STEP=2]="SET_STEP",e[e.SET_ADDRESS=3]="SET_ADDRESS",e[e.SET_USER_TYPE=4]="SET_USER_TYPE",e[e.SET_BASIC_INFO_DATA=5]="SET_BASIC_INFO_DATA"}(n||(n={})),function(e){e[e.INITIAL_STEP=0]="INITIAL_STEP",e[e.BASIC_INFO_STEP=1]="BASIC_INFO_STEP",e[e.ADDRESS_STEP=2]="ADDRESS_STEP",e[e.CONFIRMATION_STEP=3]="CONFIRMATION_STEP"}(r||(r={}));var Z={step:r.INITIAL_STEP,userType:H.Artist},$=i.a.createContext(Z),K=i.a.createContext((function(){throw new Error("dispatch used before reducer was set")})),Q=function(e,t){switch(t.type){case n.SET_USER_TYPE:return J.a.setIn(e,["userType"],t.payload);case n.INCREMENT_STEP:return J.a.setIn(e,["step"],e.step+1);case n.DECREMENT_STEP:return J.a.setIn(e,["step"],e.step-1);case n.SET_STEP:return J.a.setIn(e,["step"],t.payload);case n.SET_BASIC_INFO_DATA:return J.a.setIn(e,["".concat(e.userType),"basicInfoData"],t.payload);case n.SET_ADDRESS:return J.a.setIn(e,["data","address"],t.payload);default:throw new Error(function(e){return"Reducer used with unreginized action: ".concat(e)}(t.type.toString()))}},X=function(){var e=i.a.useContext($);if(void 0===e)throw new Error("useSignUpState must be used within a SignUpProvider");return e},ee=function(){var e=i.a.useContext(K);if(void 0===e)throw new Error("useSignUpdispatch must be used within a SignUpProvider");return e},te=function(e){var t=i.a.useReducer(Q,Z),a=Object(s.a)(t,2),n=a[0],r=a[1],o=e.children;return i.a.createElement($.Provider,{value:n},i.a.createElement(K.Provider,{value:r},o))},ae=a(204),ne=a.n(ae),re=a(205),oe=a.n(re),ie=a(206),le=a.n(ie),ce=Object(E.a)((function(e){return{root:{display:"flex",flexFlow:"row",justifyContent:"space-between"},ButtonLeft:{justifySelf:"left"},ButtonRight:{justifySelf:"right"},NavButton:{minWidth:"0px",textTransform:"none",fontWeight:"bold","& img":{height:"25px"},"&:hover":{backgroundColor:"transparent"},padding:".25rem",whiteSpace:"nowrap"}}})),se=function(e){var t=e.className,a=e.onClick,n=e.direction,r=ce();return i.a.createElement("div",{className:"".concat(r.root," ").concat(t)},i.a.createElement(h.a,{className:"".concat(r.NavButton," ").concat("left"===n?r.ButtonLeft:r.ButtonRight),onClick:function(){return a()},disableFocusRipple:!0,disableRipple:!0},"left"===n&&i.a.createElement("img",{src:oe.a}),"right"===n&&i.a.createElement("img",{src:le.a})))},ue=a(400),me=a(396),pe=a(405),de=a(397),be=Object(E.a)((function(e){var t;return{root:{display:"flex",flexFlow:"column",justifyContent:"center",alignItems:"center"},RadioGroup:Object(d.a)({display:"flex",flexDirection:"row",marginTop:"1rem","& .MuiIconButton-Label":{"&:focus":{background:"transparent"},"&:hover":{background:"transparent"}},"& .MuiFormControlLabel-root":{marginRight:0,marginLeft:0}},e.breakpoints.down("xs"),{maxWidth:"200px"}),RadioButton:Object(d.a)({"&:hover":{backgroundColor:"transparent !important",cursor:"pointer"},"&:focus":{background:"transparent !important"}},e.breakpoints.down("xs"),{padding:"6px","& .MuiSvgIcon-root":{height:".8rem",width:".8rem"}}),NextButton:(t={width:"100%"},Object(d.a)(t,e.breakpoints.down("xs"),{maxWidth:"180px"}),Object(d.a)(t,e.breakpoints.down("sm"),{padding:".5rem 2rem"}),t),FormControlLabel:Object(d.a)({},e.breakpoints.down("xs"),{fontSize:".8rem"})}})),fe=function(e){var t=be();return i.a.createElement(ue.a,Object.assign({className:t.RadioButton,color:"primary",disableRipple:!0,size:"medium"},e))},ge=function(e){var t=be(),a=ee(),r=i.a.useState(H.Artist),o=Object(s.a)(r,2),l=o[0],c=o[1];return i.a.createElement("div",{className:t.root},i.a.createElement(A,{className:t.NextButton,onClick:function(){a({type:n.SET_USER_TYPE,payload:l}),a({type:n.INCREMENT_STEP})}}," ",i.a.createElement(g.a,null,"Next")),i.a.createElement(me.a,{component:"fieldset"},i.a.createElement(pe.a,{className:t.RadioGroup,"aria-label":"gender",name:"gender",value:l,onChange:function(e){c(H[e.target.value])}},i.a.createElement(de.a,{value:H.Artist,control:i.a.createElement(fe,null),label:i.a.createElement(g.a,{className:t.FormControlLabel},"Artist")}),i.a.createElement(de.a,{value:H.Venue,control:i.a.createElement(fe,null),label:i.a.createElement(g.a,{className:t.FormControlLabel},"Venue")}),i.a.createElement(de.a,{value:H.Fan,control:i.a.createElement(fe,null),label:i.a.createElement(g.a,{className:t.FormControlLabel},"Fan")}))))},he=a(399),Ee=Object(E.a)((function(e){return{root:{display:"flex",flexDirection:"column","&label.Mui-focused":{color:"green"},"& .MuiInput-underline:after":{},"& .MuiInputBase-input":Object(d.a)({},e.breakpoints.down("xs"),{padding:"12px 10px"}),"& .MuiOutlinedInput-root":{borderRadius:"15px",backgroundColor:"#e6e6e6","& fieldset":{border:"none"},"&:hover fieldset":{},"&.Mui-focused fieldset":{border:"none"},"&.Mui-error":{borderWidth:"1px",borderColor:e.palette.error.main,borderStyle:"solid"}},"& .UpperLabel":{marginLeft:".5rem",fontSize:"1rem"}}}})),xe=function(e){var t=e.upperlabel,a=e.className,n=Ee().root;return i.a.createElement("div",{className:"".concat(n," ").concat(a)},i.a.createElement(g.a,{className:"UpperLabel"},t),i.a.createElement(he.a,e))},ve=a(354).AsYouType,Se=a(351),Ce=Object(E.a)((function(e){return{root:{display:"flex",flexDirection:"row",flexFlow:"wrap",justifyContent:"center","& #username":{flexBasis:"100%"}},LocalTextField:Object(d.a)({flex:"1 80%",margin:".5rem",justifySelf:"left"},e.breakpoints.down("xs"),{margin:".25rem"})}})),we=function(e){var t=Ce(),a=e.userType,n=e.handleChange,r=e.values,o=e.errors,l=a===H.Artist||a===H.Fan,c=a===H.Venue;return i.a.createElement("div",{className:t.root},!l&&!c&&function(e){throw new Error(function(e){return"Unknown user type ".concat(e)}(e))}(a),l&&i.a.createElement(xe,{id:"name",name:"name",upperlabel:"Full Name",variant:"outlined",type:"text",onChange:n,placeholder:"John Doe",className:"".concat(t.LocalTextField),value:r.name||"",error:!!o.name,helperText:o.name}),c&&i.a.createElement(xe,{id:"venueName",name:"venueName",upperlabel:"Venue Name",variant:"outlined",type:"text",onChange:n,placeholder:"Your Business",className:"".concat(t.LocalTextField),value:r.venueName||"",error:!!o.venueName,helperText:o.venueName}),i.a.createElement(xe,{onChange:n,id:"email",upperlabel:"Email",name:"email",variant:"outlined",type:"email",placeholder:"john@doe.com",className:"".concat(t.LocalTextField),value:r.email||"",error:!!o.email,helperText:o.email}),c&&i.a.createElement(xe,{onChange:function(e){var t=e.target.value;"1"!==t[0]&&t.length>14||"1"===t[0]&&t.length>16||(6===t.length||4===t.length?n(e):3===t.length?n(e):(e.target.value=new ve("US",Se).input(t||""),n(e)))},id:"phoneNumber",name:"phoneNumber",type:"string",upperlabel:"Phone Number",variant:"outlined",placeholder:"(555) 555-5555",className:"".concat(t.LocalTextField),value:r.phoneNumber||"",error:!!o.phoneNumber,helperText:o.phoneNumber}),l&&i.a.createElement(xe,{onChange:n,id:"zipcode",name:"zipcode",upperlabel:"Zipcode",variant:"outlined",type:"text",placeholder:"55555",className:"".concat(t.LocalTextField),value:r.zipcode||"",error:!!o.zipcode,helperText:o.zipcode}),i.a.createElement(xe,{onChange:n,id:"password",upperlabel:"Password",name:"password",variant:"outlined",type:"password",placeholder:"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf",className:"".concat(t.LocalTextField),value:r.password||"",error:!!o.password,helperText:o.password}))},ye=a(50),Te=a(17),Oe=a(39),Ne=Object(Oe.compose)(Object(Oe.tap)((function(e){return Object({NODE_ENV:"production",PUBLIC_URL:"/band-connect"}).DEBUG&&console.log("Form Errors",e)})),Object(Oe.reduce)((function(e,t){return Object(Oe.merge)(e,Object(d.a)({},t.path,t.message))}),{}),Object(Oe.get)("inner")),ke=Te.a().shape({name:Te.b().required("Name i a required field"),email:Te.b().required().email("Email is a required field"),zipcode:Te.b().required("Zipcode is a required field").matches(/^[0-9]{5}(?:-[0-9]{4})?$/,"Must be 5 or 9 digits"),password:Te.b().required("Password is a required field").min(8).matches(/\d/,"Password must contain at leat one number.").matches(/[a-zA-Z]/,"Password must contain at leat one letter.").matches(/[!@#$%^&*]/,"Password must contain at leat one special character.")}),je=Object(E.a)((function(e){return{root:{display:"flex",position:"relative"},FormContainer:{display:"flex",paddingRight:"1rem",paddingLeft:"1rem",justifyContent:"center",flexDirection:"row",flexFlow:"wrap",maxWidth:"500px","& #username":{flexBasis:"100%"}},Title:{flexBasis:"100%",textAlign:"center",marginBottom:"1rem",fontSize:"2rem",color:"#333333"},Button:Object(d.a)({},e.breakpoints.down("xs"),{maxWidth:"180px"})}})),Ie=function(e){var t=je({}),a=e.initialValues,o=X(),l=ee();return i.a.createElement(ye.b,{initialValues:a,validate:function(e){return ke.validate(e,{abortEarly:!1}).then(console.log).catch(Ne)},validateOnChange:!1,onSubmit:function(e,t){t.setSubmitting(!1),l({type:n.SET_STEP,payload:r.CONFIRMATION_STEP})}},(function(e){e.touched;var a=e.errors,r=(e.isSubmitting,e.handleSubmit),c=e.handleChange,s=e.values;return i.a.createElement(ye.a,{onSubmit:function(e){console.log(e.target),e.preventDefault(),console.log("submitting"),r(e)}},i.a.createElement("div",{className:t.FormContainer},i.a.createElement(we,{values:s,errors:a,userType:o.userType,handleChange:function(e){c(e),l({type:n.SET_BASIC_INFO_DATA,payload:s})}}),i.a.createElement(A,{className:t.Button,type:"submit"},"Create Account")))}))},ze=a(145),Ae=a.n(ze),Fe=a(210),Be=Object(E.a)((function(e){return{root:{display:"flex",flexDirection:"row",flexFlow:"wrap",justifyContent:"center","& #username":{flexBasis:"100%"}},LocalTextField:Object(d.a)({flex:"1 80%",margin:".5rem",justifySelf:"left"},e.breakpoints.down("xs"),{margin:".25rem"}),Title:{flexBasis:"100%",textAlign:"center",marginBottom:"1rem",fontSize:"2rem",color:"#333333"},LocalNavigation:{width:"100%",padding:"0 1rem"}}})),Pe=function(e){var t=Be(),a=e.handleChange,n=e.values,r=e.errors;return i.a.createElement("div",{className:t.root},i.a.createElement(xe,{id:"address1",name:"address1",type:"text",upperlabel:"Address 1",variant:"outlined",placeholder:"123 Fourth Street",onChange:a,className:"".concat(t.LocalTextField),value:n.address1||"",error:!!r.address1,helperText:r.address1}),i.a.createElement(xe,{id:"address2",name:"address2",type:"text",upperlabel:"Address 2",variant:"outlined",placeholder:"Apt. 555 (Optional)",onChange:a,className:"".concat(t.LocalTextField),value:n.address2||"",error:!!r.address2,helperText:r.address2}),i.a.createElement(xe,{id:"city",name:"city",type:"text",upperlabel:"City",variant:"outlined",placeholder:"New York",onChange:a,className:"".concat(t.LocalTextField),value:n.city||"",error:!!r.city,helperText:r.city}),i.a.createElement(xe,{id:"state",name:"state",type:"text",upperlabel:"State",variant:"outlined",placeholder:"New York",onChange:a,className:"".concat(t.LocalTextField),value:n.state||"",error:!!r.state,helperText:r.state}),i.a.createElement(xe,{id:"zipcode",name:"zipcode",type:"text",upperlabel:"Zipcode",variant:"outlined",placeholder:"55555",onChange:a,className:"".concat(t.LocalTextField),value:n.zipcode||"",error:!!r.zipcode,helperText:r.zipcode}))},_e=Object(E.a)((function(e){return{FormContainer:{margin:"0 1rem",display:"flex",justifyContent:"center",flexDirection:"row",flexFlow:"wrap",maxWidth:"500px","& #username":{flexBasis:"100%"}},Title:{flexBasis:"100%",textAlign:"center",marginBottom:"1rem",fontSize:"2rem",color:"#333333"},LocalNavButton:{position:"absolute",top:"1rem",left:"1rem"}}})),Re=Te.a().shape({venueName:Te.b().required("Venue name is a required field"),email:Te.b().required("Email is a required field").email(),phoneNumber:Te.b().required("Phone number is a required field").matches(/^(?:1\s){0,1}\(\d{3}\)\s\d{3}-\d{4}$/,"Incorrect Format"),password:Te.b().required("Password is a required field").min(8).matches(/\d/,"Password must contain at leat one number.").matches(/[a-zA-Z]/,"Password must contain at leat one letter.").matches(/[!@#$%^&*]/,"Password must contain at leat one special character.")}),Le=Te.a().shape({address1:Te.b().required("Address 1 is a required field"),zipcode:Te.b().required("Zipcode is a required field").matches(/^[0-9]{5}(?:-[0-9]{4})?$/,"Incorrect format"),city:Te.b().required("City is a required field"),state:Te.b().required("State is a required field")}),De=function(e){var t=_e({}),a=e.initialValues,r=X(),o=ee();return i.a.createElement(ye.b,{initialValues:a,validate:function(e){return Re.validate(e,{abortEarly:!1}).then(console.log).catch(Ne)},validateOnChange:!1,onSubmit:function(e,t){t.setSubmitting(!1),o({type:n.INCREMENT_STEP})}},(function(e){e.touched;var a=e.errors,l=(e.isSubmitting,e.handleSubmit),c=e.handleChange,s=e.values;return i.a.createElement(ye.a,{onSubmit:l},i.a.createElement("div",{className:t.FormContainer},i.a.createElement(we,{values:s,errors:a,userType:r.userType,handleChange:function(e){c(e),o({type:n.SET_BASIC_INFO_DATA,payload:s})}}),i.a.createElement(A,{type:"submit"},"Next")))}))},Me=function(e){var t=_e({}),a=ee();return i.a.createElement(ye.b,{initialValues:e.initialValues,validate:function(e){return Le.validate(e,{abortEarly:!1}).then(console.log).catch(Ne)},validateOnChange:!1,onSubmit:function(e,t){t.setSubmitting(!1),a({type:n.INCREMENT_STEP})}},(function(e){e.touched;var r=e.errors,o=(e.isSubmitting,e.handleSubmit),l=e.handleChange,c=e.values;return i.a.createElement(ye.a,{onSubmit:function(){var e=Object(Fe.a)(Ae.a.mark((function e(t){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target),t.preventDefault(),e.next=4,o(t);case 4:console.log("errors on subit",r),Object.keys(r).length;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},i.a.createElement("div",{className:t.FormContainer},i.a.createElement(Pe,{values:c,errors:r,handleChange:function(e){l(e),a({type:n.SET_ADDRESS,payload:c})}}),i.a.createElement(A,{type:"submit"},"Create Account")))}))},Ue=function(e){var t,a=X();switch(a.step){case r.BASIC_INFO_STEP:return i.a.createElement(De,{initialValues:Object(Oe.get)(["".concat(a.userType),"basicInfoData"],a)||{}});case r.ADDRESS_STEP:return i.a.createElement(Me,{initialValues:Object(Oe.get)(["".concat(a.userType),"addressData"],a)||{}});default:throw new Error((t=a.step,"Unknown Venue Sign Up Step ".concat(t)))}},qe=Object(E.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& p":Object(d.a)({fontSize:"3rem",color:"#333333"},e.breakpoints.down("sm"),{fontSize:"1.5rem"})},Title:Object(d.a)({display:"flex",alignItems:"center",textAlign:"center",margin:"0 1rem"},e.breakpoints.down("sm"),{margin:"0 .25rem"}),CheckIcon:Object(d.a)({color:"green",fontSize:"5rem"},e.breakpoints.down("sm"),{fontSize:"3rem"})}})),We=function(e){var t=qe({});return i.a.createElement("div",{className:t.root},i.a.createElement(g.a,{className:t.Title},"Success!"),i.a.createElement(O.a,{className:t.CheckIcon,icon:"check"}),i.a.createElement(g.a,{className:t.Title},"You've been signed up!"))},Ve=Object(E.a)((function(e){return{root:{position:"relative",flexDirection:"column",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"1rem"},Title:Object(d.a)({flexBasis:"100%",textAlign:"center",marginBottom:"1rem",marginTop:"1rem",fontSize:"2rem",color:"#333333"},e.breakpoints.down("xs"),{fontSize:"1.25rem",marginTop:".5rem"}),LocalNavButton:Object(d.a)({position:"absolute",top:"1rem",left:"1rem"},e.breakpoints.down("xs"),{top:".5rem",left:".5rem"})}})),Ye=function(e){var t=Ve(),a=X(),o=ee(),l=a.userType===H.Artist||a.userType===H.Fan,c=a.userType===H.Venue;return i.a.createElement("div",{className:t.root},0===a.step&&i.a.createElement(ge,null),a.step>0&&a.step!==r.CONFIRMATION_STEP&&i.a.createElement(i.a.Fragment,null,i.a.createElement(se,{className:t.LocalNavButton,direction:"left",onClick:function(){return o({type:n.DECREMENT_STEP})}}),i.a.createElement(g.a,{className:t.Title},a.userType),l&&i.a.createElement(Ie,{initialValues:ne()(["".concat(a.userType),"basicInfoData"],a)||{}}),c&&i.a.createElement(Ue,null)),a.step===r.CONFIRMATION_STEP&&i.a.createElement(We,null))},Ge=Object(E.a)((function(e){return{root:{},modal:{backgroundColor:"transparent",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},SignUpContainer:{position:"relative",minHeight:"60vh",maxHeight:"95vh",width:"70vw",display:"flex",flexFlow:"wrap",justifyContent:"center",alignItems:"center",backgroundColor:"#F4F4F4",border:"none",outline:"none",overflowY:"scroll"},CloseButton:Object(d.a)({"&:hover":{cursor:"pointer"},zIndex:1300,color:"#868686",position:"absolute",top:"1rem",right:"1rem",fontSize:"1.25rem"},e.breakpoints.down("xs"),{top:".5rem",right:".5rem",fontSize:"1rem"})}})),Je=function(e){var t=e.isOpen,a=e.setOpen,n=Ge();return i.a.createElement("div",{className:n.root},i.a.createElement(G.a,{className:n.modal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:t,onClose:function(){return a(!1)},disableBackdropClick:!0},i.a.createElement(U.a,{className:n.SignUpContainer},i.a.createElement(x.a,{className:n.CloseButton,onClick:function(){a(!1)}},i.a.createElement(O.a,{icon:"times"})),i.a.createElement(te,null,i.a.createElement(Ye,null)))))},He=a(89),Ze=a(119);He.b.add(Ze.c,Ze.b,Ze.a);var $e=i.a.forwardRef(Y),Ke=function(){var e=i.a.createRef(),t=i.a.createRef(),a=i.a.useState(!1),n=Object(s.a)(a,2),r=n[0],o=n[1],l=function(){o(!0)};return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,{theme:p},i.a.createElement(j,{aboutRef:e,topRef:t,signUpClick:l}),i.a.createElement(Je,{isOpen:r,setOpen:o}),i.a.createElement(M,{aboutRef:e,topRef:t,signUpClick:l}),i.a.createElement($e,{ref:e})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(Ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[219,1,2]]]);
//# sourceMappingURL=main.3d128d90.chunk.js.map