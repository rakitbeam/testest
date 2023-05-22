import{C as h,D as R,M as i,k as a,E as d,ab as O,L as S,b7 as A,b8 as C,_ as c,r as N,P as W,H as w,J as E,j as H,K as P}from"./index.c0102965.js";import{I as _}from"./MenuItem.b8435d40.js";function j(o){return h("MuiAlert",o)}const B=R("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var M=B,T=i(a("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),U=i(a("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),V=i(a("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),F=i(a("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Z=i(a("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),x;const D=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],J=o=>{const{variant:t,color:e,severity:l,classes:r}=o,p={root:["root",`${t}${S(e||l)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return E(p,j,r)},K=d(O,{name:"MuiAlert",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[e.variant],t[`${e.variant}${S(e.color||e.severity)}`]]}})(({theme:o,ownerState:t})=>{const e=o.palette.mode==="light"?A:C,l=o.palette.mode==="light"?C:A,r=t.color||t.severity;return c({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},r&&t.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${r}Color`]:e(o.palette[r].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${r}StandardBg`]:l(o.palette[r].light,.9),[`& .${M.icon}`]:o.vars?{color:o.vars.palette.Alert[`${r}IconColor`]}:{color:o.palette.mode==="dark"?o.palette[r].main:o.palette[r].light}},r&&t.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${r}Color`]:e(o.palette[r].light,.6),border:`1px solid ${(o.vars||o).palette[r].light}`,[`& .${M.icon}`]:o.vars?{color:o.vars.palette.Alert[`${r}IconColor`]}:{color:o.palette.mode==="dark"?o.palette[r].main:o.palette[r].light}},r&&t.variant==="filled"&&c({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${r}FilledColor`],backgroundColor:o.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[r].dark:o.palette[r].main,color:o.palette.getContrastText(o.palette.mode==="dark"?o.palette[r].dark:o.palette[r].main)}))}),q=d("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),G=d("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),I=d("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),y={success:a(T,{fontSize:"inherit"}),warning:a(U,{fontSize:"inherit"}),error:a(V,{fontSize:"inherit"}),info:a(F,{fontSize:"inherit"})},Q=N.exports.forwardRef(function(t,e){const l=W({props:t,name:"MuiAlert"}),{action:r,children:p,className:$,closeText:u="Close",color:z,icon:g,iconMapping:L=y,onClose:f,role:k="alert",severity:v="success",variant:b="standard"}=l,m=w(l,D),s=c({},l,{color:z,severity:v,variant:b}),n=J(s);return H(K,c({role:k,elevation:0,ownerState:s,className:P(n.root,$),ref:e},m,{children:[g!==!1?a(q,{ownerState:s,className:n.icon,children:g||L[v]||y[v]}):null,a(G,{ownerState:s,className:n.message,children:p}),r!=null?a(I,{ownerState:s,className:n.action,children:r}):null,r==null&&f?a(I,{ownerState:s,className:n.action,children:a(_,{size:"small","aria-label":u,title:u,color:"inherit",onClick:f,children:x||(x=a(Z,{fontSize:"small"}))})}):null]}))});var oo=Q;export{oo as A};
