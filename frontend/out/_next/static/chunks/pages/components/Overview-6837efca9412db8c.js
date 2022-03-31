(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{7976:function(e,r,t){"use strict";var n=t(5318);r.Z=void 0;var o=n(t(4938)),a=t(5893),s=(0,o.default)((0,a.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");r.Z=s},7906:function(e,r,t){"use strict";t.d(r,{Z:function(){return Z}});var n=t(3366),o=t(7462),a=t(7294),s=t(6010),i=t(7192),c=t(1618),l=t(7623),u=t(1496),d=t(8979);function f(e){return(0,d.Z)("MuiTable",e)}(0,t(6087).Z)("MuiTable",["root","stickyHeader"]);var p=t(5893);const h=["className","component","padding","size","stickyHeader"],m=(0,u.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.stickyHeader&&r.stickyHeader]}})((({theme:e,ownerState:r})=>(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},r.stickyHeader&&{borderCollapse:"separate"}))),x="table";var Z=a.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiTable"}),{className:u,component:d=x,padding:Z="normal",size:y="medium",stickyHeader:v=!1}=t,b=(0,n.Z)(t,h),j=(0,o.Z)({},t,{component:d,padding:Z,size:y,stickyHeader:v}),g=(e=>{const{classes:r,stickyHeader:t}=e,n={root:["root",t&&"stickyHeader"]};return(0,i.Z)(n,f,r)})(j),w=a.useMemo((()=>({padding:Z,size:y,stickyHeader:v})),[Z,y,v]);return(0,p.jsx)(c.Z.Provider,{value:w,children:(0,p.jsx)(m,(0,o.Z)({as:d,role:d===x?null:"table",ref:r,className:(0,s.Z)(g.root,u),ownerState:j},b))})}))},295:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var n=t(7462),o=t(3366),a=t(7294),s=t(6010),i=t(7192),c=t(4063),l=t(7623),u=t(1496),d=t(8979);function f(e){return(0,d.Z)("MuiTableBody",e)}(0,t(6087).Z)("MuiTableBody",["root"]);var p=t(5893);const h=["className","component"],m=(0,u.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-row-group"}),x={variant:"body"},Z="tbody";var y=a.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiTableBody"}),{className:a,component:u=Z}=t,d=(0,o.Z)(t,h),y=(0,n.Z)({},t,{component:u}),v=(e=>{const{classes:r}=e;return(0,i.Z)({root:["root"]},f,r)})(y);return(0,p.jsx)(c.Z.Provider,{value:x,children:(0,p.jsx)(m,(0,n.Z)({className:(0,s.Z)(v.root,a),as:u,ref:r,role:u===Z?null:"rowgroup",ownerState:y},d))})}))},3184:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var n=t(7462),o=t(3366),a=t(7294),s=t(6010),i=t(7192),c=t(4063),l=t(7623),u=t(1496),d=t(8979);function f(e){return(0,d.Z)("MuiTableHead",e)}(0,t(6087).Z)("MuiTableHead",["root"]);var p=t(5893);const h=["className","component"],m=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-header-group"}),x={variant:"head"},Z="thead";var y=a.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiTableHead"}),{className:a,component:u=Z}=t,d=(0,o.Z)(t,h),y=(0,n.Z)({},t,{component:u}),v=(e=>{const{classes:r}=e;return(0,i.Z)({root:["root"]},f,r)})(y);return(0,p.jsx)(c.Z.Provider,{value:x,children:(0,p.jsx)(m,(0,n.Z)({as:u,className:(0,s.Z)(v.root,a),ref:r,role:u===Z?null:"rowgroup",ownerState:y},d))})}))},3347:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Overview",function(){return t(245)}])},7871:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(5893),o=t(7294),a=t(122),s=t(5861),i=t(9912);function c(e){new Date(Date.now());var r=new Date(Date.now()-6048e5),t=(100*e.failtask/e.alltask).toFixed(2),c=(100-t).toFixed(2);return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(i.default,{children:e.title||"Title"}),(0,n.jsxs)(s.Z,{component:"p",variant:"h4",children:["From ",r.toDateString()]}),(0,n.jsxs)(s.Z,{color:"red",sx:{flex:1},children:[t,"% Fail"]}),(0,n.jsxs)(s.Z,{color:"green",sx:{flex:1},children:[c,"% Success"]}),(0,n.jsxs)(s.Z,{color:"text.secondary",sx:{flex:1},children:[parseInt(e.failtask/7)||0," / ",parseInt(e.alltask/7)||0]}),(0,n.jsx)("div",{children:(0,n.jsx)(a.Z,{color:"primary",href:"/integrationspage",children:"View detail"})})]})}},9975:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(5893),o=t(7294),a=t(7906),s=t(295),i=t(3184),c=t(3816),l=t(9912);function u(e){var r=e.headers||[],t=e.values||[];return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(l.default,{children:e.tablename}),(0,n.jsxs)(a.Z,{size:"small",children:[(0,n.jsx)(i.Z,{children:(0,n.jsx)(c.Z,{children:r})}),(0,n.jsx)(s.Z,{children:t})]})]})}},3450:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return i}});var n=t(5893),o=t(122),a=t(5861);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){return(0,n.jsxs)(a.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}({variant:"body2",color:"text.secondary",align:"center"},e,{children:["Copyright \xa9 ",(0,n.jsx)(o.Z,{color:"inherit",href:"https://github.com/orgs/delta-gen",children:"Delta-gen"})," ",(new Date).getFullYear(),"."]}))}},245:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var n=t(5893),o=(t(7294),t(7357)),a=t(155),s=t(7948),i=t(6886),c=t(5113),l=t(122),u=t(3252),d=t(3816),f=t(7976),p=t(7871),h=t(9975),m=t(3450);function x(e){var r=[],t=[],x=e.data||[];(["Name","Location","Time","Amount","Setting"]||0).forEach((function(e){r.push((0,n.jsxs)(u.Z,{children:[e," "]},e))})),x.map((function(e){var r="/file/"+e.name.slice(0,-4).toString();t.push((0,n.jsxs)(d.Z,{children:[(0,n.jsx)(u.Z,{children:e.name}),(0,n.jsx)(u.Z,{children:e.loc}),(0,n.jsx)(u.Z,{children:e.init}),(0,n.jsx)(u.Z,{children:"".concat(e.amount,"kb")}),(0,n.jsxs)(u.Z,{children:[" ",(0,n.jsxs)(l.Z,{href:r,data:e,children:[" ",(0,n.jsx)(f.Z,{})," "]})," "]})]},e.id))}));var Z=0,y=0;x.forEach((function(e){e.children.forEach((function(e){"success"!=e.status&&Z++,y++}))}));return(0,n.jsxs)(o.Z,{component:"main",sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900]},flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,n.jsx)(a.Z,{}),(0,n.jsxs)(s.Z,{maxWidth:"lg",sx:{mt:4,mb:4},children:[(0,n.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,n.jsx)(c.Z,{sx:{p:2,display:"flex",flexDirection:"column",height:240},children:(0,n.jsx)(p.default,{title:"Overview",failtask:Z,alltask:y})})}),(0,n.jsx)(i.ZP,{item:!0,xs:12,children:(0,n.jsxs)(c.Z,{sx:{p:2,display:"flex",flexDirection:"column"},children:[(0,n.jsx)(h.default,{headers:r,values:t.slice(0,5)}),(0,n.jsx)(l.Z,{color:"primary",href:"/sourcespage",sx:{mt:3},children:"See more sources"})]})})]}),(0,n.jsx)(m.default,{sx:{pt:4}})]})]})}},9912:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=(t(7294),t(5697)),a=t.n(o),s=t(5861);function i(e){return(0,n.jsx)(s.Z,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}i.propTypes={children:a().node},r.default=i},2703:function(e,r,t){"use strict";var n=t(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,a,s){if(s!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},5697:function(e,r,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[810,122,39,752,774,888,179],(function(){return r=3347,e(e.s=r);var r}));var r=e.O();_N_E=r}]);