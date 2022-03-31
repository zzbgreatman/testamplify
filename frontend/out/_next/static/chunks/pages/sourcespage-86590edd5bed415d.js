(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{6720:function(e,n,r){"use strict";var t=r(7462),i=r(7294),o=r(7623),a=r(2287),s=r(5893);const l=(e,n)=>(0,t.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},n&&{colorScheme:e.palette.mode}),u=e=>(0,t.Z)({color:e.palette.text.primary},e.typography.body1,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}});n.ZP=function(e){const n=(0,o.Z)({props:e,name:"MuiCssBaseline"}),{children:r,enableColorScheme:c=!1}=n;return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(a.Z,{styles:e=>((e,n=!1)=>{var r,i;let o={html:l(e,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,t.Z)({margin:0},u(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})};const a=null==(r=e.components)||null==(i=r.MuiCssBaseline)?void 0:i.styleOverrides;return a&&(o=[o,a]),o})(e,c)}),r]})}},1927:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var t=r(7294),i=r(7462),o=r(4819),a=r(6760);var s="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",l=r(5893);var u=function(e){const{children:n,theme:r}=e,u=(0,a.Z)(),c=t.useMemo((()=>{const e=null===u?r:function(e,n){if("function"===typeof n)return n(e);return(0,i.Z)({},e,n)}(u,r);return null!=e&&(e[s]=null!==u),e}),[r,u]);return(0,l.jsx)(o.Z.Provider,{value:c,children:n})},c=r(4880),d=r(9718);function f(e){const n=(0,d.Z)();return(0,l.jsx)(c.T.Provider,{value:"object"===typeof n?n:{},children:e.children})}var h=function(e){const{children:n,theme:r}=e;return(0,l.jsx)(u,{theme:r,children:(0,l.jsx)(f,{children:n})})}},795:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sourcespage",function(){return r(1834)}])},5876:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var t=r(5893),i=r(7294),o=r(4707),a=r(3508),s=r(6215),l=r(5254),u=r(3252),c=r(122),d=r(3321),f=r(7906),h=r(295),p=r(3184),x=r(3816);function m(e){var n=e.data||[],r=[],m=[];["Name"].forEach((function(e){m.push((0,t.jsxs)(u.Z,{children:[e," "]},e))}));var g=function(e){var n="";return n=e.name.endsWith("parquet")?"/file/"+e.parent.toString()+"/"+e.name:e.name.includes("Task")?"/file/"+e.parent.toString()+"/"+e.parent:"/file/"+e.name.toString(),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(u.Z,{children:(0,t.jsx)(c.Z,{href:n,data:e,children:e.name})}),(0,t.jsx)(u.Z,{children:e.loc}),(0,t.jsx)(u.Z,{children:e.init}),(0,t.jsx)(u.Z,{children:"".concat(e.amount,"kb")})]})},j=function(e){return(0,t.jsx)(i.Fragment,{children:(0,t.jsxs)(l.Z,{nodeId:e.id,label:g(e),children:[Array.isArray(e.children)?e.children.map((function(e){return j(e)})):null,(0,t.jsx)(d.Z,{size:"small",children:"Detail"}),(0,t.jsx)(d.Z,{size:"small",children:"Generate"}),(0,t.jsx)(d.Z,{size:"small",children:"Delete"}),(0,t.jsx)(d.Z,{size:"small",children:"Setting"})]},e.id+"snaps")})};return n.forEach((function(e){r.push(function(e){return(0,t.jsx)(x.Z,{children:(0,t.jsx)(l.Z,{nodeId:e.id,label:g(e),children:Array.isArray(e.children)?e.children.map((function(e){return j(e)})):null},e.id)},e.id)}(e))})),(0,t.jsxs)(f.Z,{size:"big",children:[(0,t.jsx)(p.Z,{children:(0,t.jsx)(x.Z,{children:m})}),(0,t.jsx)(h.Z,{children:(0,t.jsx)(o.Z,{"aria-label":"rich object",defaultCollapseIcon:(0,t.jsx)(a.Z,{}),defaultExpanded:["root"],defaultExpandIcon:(0,t.jsx)(s.Z,{}),sx:{height:"auto",flexGrow:1,maxWidth:"auto",overflowY:"auto"},children:r})})]})}},1834:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r(5893),i=(r(7294),r(8239)),o=r(1927),a=r(6720),s=r(7357),l=r(2207),u=r(9612),c=r(155),d=r(7948),f=r(6886),h=r(5113),p=r(3450),x=r(5876),m=(0,i.Z)(),g=(0,u.default)(30);function j(e){var n=e.data||g;return(0,t.jsx)(o.Z,{theme:m,children:(0,t.jsxs)(s.Z,{sx:{display:"flex"},children:[(0,t.jsx)(a.ZP,{}),(0,t.jsx)(l.default,{title:"Sources"}),(0,t.jsxs)(s.Z,{component:"main",sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900]},flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,t.jsx)(c.Z,{}),(0,t.jsxs)(d.Z,{maxWidth:"lg",sx:{mt:4,mb:4},children:[(0,t.jsx)(f.ZP,{container:!0,spacing:3,children:(0,t.jsx)(f.ZP,{item:!0,xs:12,children:(0,t.jsx)(h.Z,{sx:{p:2,display:"flex",flexDirection:"column"},children:(0,t.jsx)(x.default,{data:n})})})}),(0,t.jsx)(p.default,{sx:{pt:4}})]})]})]})})}},5934:function(e,n,r){"use strict";var t;r.d(n,{Z:function(){return d}});var i=new Uint8Array(16);function o(){if(!t&&!(t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(i)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(e){return"string"===typeof e&&a.test(e)},l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));var c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(l[e[n+0]]+l[e[n+1]]+l[e[n+2]]+l[e[n+3]]+"-"+l[e[n+4]]+l[e[n+5]]+"-"+l[e[n+6]]+l[e[n+7]]+"-"+l[e[n+8]]+l[e[n+9]]+"-"+l[e[n+10]]+l[e[n+11]]+l[e[n+12]]+l[e[n+13]]+l[e[n+14]]+l[e[n+15]]).toLowerCase();if(!s(r))throw TypeError("Stringified UUID is invalid");return r};var d=function(e,n,r){var t=(e=e||{}).random||(e.rng||o)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,n){r=r||0;for(var i=0;i<16;++i)n[r+i]=t[i];return n}return c(t)}}},function(e){e.O(0,[810,122,39,739,752,364,971,557,59,774,888,179],(function(){return n=795,e(e.s=n);var n}));var n=e.O();_N_E=n}]);