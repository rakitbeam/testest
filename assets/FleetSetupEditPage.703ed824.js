import{C as ee,D as te,E as G,L as ne,_ as F,r as h,P as oe,H,J as re,T as x,k as o,j as f,K as ae,M as _e,N as pt,O as Pe,bN as ht,I as ft,aj as mt,aV as gt,bO as Be,bP as Re,ab as M,v as D,bz as vt,t as l,F as O,B as $,A as Ge,x as w,m as Ne,bg as ze,c as k,S as E,Q as me,R as ge,U as ve,ai as ie,aw as se,aH as Ct,aA as yt,g as bt,bB as L,bM as N,u as St,bQ as xt,f as He,d as Rt,aJ as wt,bC as kt,bq as Ft,av as Tt}from"./index.2f7a2c15.js";import{a as Dt,N as $t,P as Mt}from"./PageContent.28bd436c.js";import{T as X}from"./TextField.64f3f36f.js";import{a as J,I as ue}from"./MenuItem.546554f4.js";import{d as At}from"./Save.919e611c.js";import{d as It,a as Ot}from"./DeleteForever.c37c37c4.js";import{A as Et}from"./ActionBar.7c7969f7.js";import{S as Lt,a as _t,c as Ue,d as Pt,e as Bt,h as Gt,s as Nt,i as zt,j as Ht,v as Ce,k as je,l as Ut,n as we,o as jt,b as Wt,G as ke,g as Vt}from"./fleetSetupValidation.88a7804e.js";import{d as We}from"./Add.aa9dcf40.js";import{B as qt}from"./ButtonMenu.956792d7.js";import{d as Yt,C as Kt}from"./ConfirmationDialog.aa14c59d.js";import{R as le}from"./ResponsiveDialog.4050c587.js";import{f as Ve,F as he}from"./Select.64930c5b.js";import{u as qe}from"./useFormControl.824e8f6a.js";import{g as Xt,c as Ye,S as Ke}from"./ShipTypeFilterButton.61835a33.js";import{T as Jt}from"./Tooltip.5f95d314.js";import{A as Xe}from"./Alert.cd102eba.js";import"./domUtils.576389cd.js";import"./Popper.9c4779dc.js";import"./ClickAwayListener.4ce3413e.js";import"./DialogContentText.91b224ac.js";function Qt(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Zt(n){return parseFloat(n)}function en(n){return ee("MuiFormControlLabel",n)}const tn=te("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var Q=tn;const nn=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],on=n=>{const{classes:e,disabled:t,labelPlacement:r,error:a}=n,c={root:["root",t&&"disabled",`labelPlacement${ne(r)}`,a&&"error"],label:["label",t&&"disabled"]};return re(c,en,e)},rn=G("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[{[`& .${Q.label}`]:e.label},e.root,e[`labelPlacement${ne(t.labelPlacement)}`]]}})(({theme:n,ownerState:e})=>F({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Q.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${Q.label}`]:{[`&.${Q.disabled}`]:{color:(n.vars||n).palette.text.disabled}}})),an=h.exports.forwardRef(function(e,t){const r=oe({props:e,name:"MuiFormControlLabel"}),{className:a,componentsProps:c={},control:s,disabled:d,disableTypography:m,label:y,labelPlacement:g="end"}=r,v=H(r,nn),u=qe();let p=d;typeof p=="undefined"&&typeof s.props.disabled!="undefined"&&(p=s.props.disabled),typeof p=="undefined"&&u&&(p=u.disabled);const i={disabled:p};["checked","name","onChange","value","inputRef"].forEach(T=>{typeof s.props[T]=="undefined"&&typeof r[T]!="undefined"&&(i[T]=r[T])});const C=Ve({props:r,muiFormControl:u,states:["error"]}),b=F({},r,{disabled:p,labelPlacement:g,error:C.error}),S=on(b);let R=y;return R!=null&&R.type!==x&&!m&&(R=o(x,F({component:"span",className:S.label},c.typography,{children:R}))),f(rn,F({className:ae(S.root,a),ownerState:b,ref:t},v,{children:[h.exports.cloneElement(s,i),R]}))});var P=an;function sn(n){return ee("MuiFormGroup",n)}te("MuiFormGroup",["root","row","error"]);const ln=["className","row"],cn=n=>{const{classes:e,row:t,error:r}=n;return re({root:["root",t&&"row",r&&"error"]},sn,e)},dn=G("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.row&&e.row]}})(({ownerState:n})=>F({display:"flex",flexDirection:"column",flexWrap:"wrap"},n.row&&{flexDirection:"row"})),un=h.exports.forwardRef(function(e,t){const r=oe({props:e,name:"MuiFormGroup"}),{className:a,row:c=!1}=r,s=H(r,ln),d=qe(),m=Ve({props:r,muiFormControl:d,states:["error"]}),y=F({},r,{row:c,error:m.error}),g=cn(y);return o(dn,F({className:ae(g.root,a),ownerState:y,ref:t},s))});var pn=un,hn=_e(o("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),fn=_e(o("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");const mn=G("span")({position:"relative",display:"flex"}),gn=G(hn)({transform:"scale(1)"}),vn=G(fn)(({theme:n,ownerState:e})=>F({left:0,position:"absolute",transform:"scale(0)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeIn,duration:n.transitions.duration.shortest})},e.checked&&{transform:"scale(1)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.shortest})}));function Je(n){const{checked:e=!1,classes:t={},fontSize:r}=n,a=F({},n,{checked:e});return f(mn,{className:t.root,ownerState:a,children:[o(gn,{fontSize:r,className:t.background,ownerState:a}),o(vn,{fontSize:r,className:t.dot,ownerState:a})]})}const Cn=h.exports.createContext(void 0);var Qe=Cn;function yn(){return h.exports.useContext(Qe)}function bn(n){return ee("MuiRadio",n)}const Sn=te("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);var Fe=Sn;const xn=["checked","checkedIcon","color","icon","name","onChange","size","className"],Rn=n=>{const{classes:e,color:t}=n,r={root:["root",`color${ne(t)}`]};return F({},e,re(r,bn,e))},wn=G(Xt,{shouldForwardProp:n=>pt(n)||n==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[`color${ne(t.color)}`]]}})(({theme:n,ownerState:e})=>F({color:(n.vars||n).palette.text.secondary,"&:hover":{backgroundColor:n.vars?`rgba(${e.color==="default"?n.vars.palette.action.activeChannel:n.vars.palette[e.color].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Pe(e.color==="default"?n.palette.action.active:n.palette[e.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${Fe.checked}`]:{color:(n.vars||n).palette[e.color].main}},{[`&.${Fe.disabled}`]:{color:(n.vars||n).palette.action.disabled}}));function kn(n,e){return typeof e=="object"&&e!==null?n===e:String(n)===String(e)}const Te=o(Je,{checked:!0}),De=o(Je,{}),Fn=h.exports.forwardRef(function(e,t){var r,a;const c=oe({props:e,name:"MuiRadio"}),{checked:s,checkedIcon:d=Te,color:m="primary",icon:y=De,name:g,onChange:v,size:u="medium",className:p}=c,i=H(c,xn),C=F({},c,{color:m,size:u}),b=Rn(C),S=yn();let R=s;const T=ht(v,S&&S.onChange);let A=g;return S&&(typeof R=="undefined"&&(R=kn(S.value,c.value)),typeof A=="undefined"&&(A=S.name)),o(wn,F({type:"radio",icon:h.exports.cloneElement(y,{fontSize:(r=De.props.fontSize)!=null?r:u}),checkedIcon:h.exports.cloneElement(d,{fontSize:(a=Te.props.fontSize)!=null?a:u}),ownerState:C,classes:b,name:A,checked:R,onChange:T,ref:t,className:ae(b.root,p)},i))});var B=Fn;const Tn=["actions","children","defaultValue","name","onChange","value"],Dn=h.exports.forwardRef(function(e,t){const{actions:r,children:a,defaultValue:c,name:s,onChange:d,value:m}=e,y=H(e,Tn),g=h.exports.useRef(null),[v,u]=ft({controlled:m,default:c,name:"RadioGroup"});h.exports.useImperativeHandle(r,()=>({focus:()=>{let b=g.current.querySelector("input:not(:disabled):checked");b||(b=g.current.querySelector("input:not(:disabled)")),b&&b.focus()}}),[]);const p=mt(t,g),i=b=>{u(b.target.value),d&&d(b,b.target.value)},C=gt(s);return o(Qe.Provider,{value:{name:C,onChange:i,value:v},children:o(pn,F({role:"radiogroup",ref:p},y,{children:a}))})});var fe=Dn;function $n(n){return ee("MuiSkeleton",n)}te("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Mn=["animation","className","component","height","style","variant","width"];let Z=n=>n,$e,Me,Ae,Ie;const An=n=>{const{classes:e,variant:t,animation:r,hasChildren:a,width:c,height:s}=n;return re({root:["root",t,r,a&&"withChildren",a&&!c&&"fitContent",a&&!s&&"heightAuto"]},$n,e)},In=Be($e||($e=Z`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),On=Be(Me||(Me=Z`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),En=G("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],t.animation!==!1&&e[t.animation],t.hasChildren&&e.withChildren,t.hasChildren&&!t.width&&e.fitContent,t.hasChildren&&!t.height&&e.heightAuto]}})(({theme:n,ownerState:e})=>{const t=Qt(n.shape.borderRadius)||"px",r=Zt(n.shape.borderRadius);return F({display:"block",backgroundColor:n.vars?n.vars.palette.Skeleton.bg:Pe(n.palette.text.primary,n.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${t}/${Math.round(r/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(n.vars||n).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:n})=>n.animation==="pulse"&&Re(Ae||(Ae=Z`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),In),({ownerState:n,theme:e})=>n.animation==="wave"&&Re(Ie||(Ie=Z`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),On,(e.vars||e).palette.action.hover)),Ln=h.exports.forwardRef(function(e,t){const r=oe({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:c,component:s="span",height:d,style:m,variant:y="text",width:g}=r,v=H(r,Mn),u=F({},r,{animation:a,component:s,variant:y,hasChildren:Boolean(v.children)}),p=An(u);return o(En,F({as:s,ref:t,className:ae(p.root,c),ownerState:u},v,{style:F({width:g,height:d},m)}))});var I=Ln;const _n=n=>{const{fleetSetup:e,onChange:t,errors:r,columnCount:a}=n,[c,s]=h.exports.useTransition(),[d,m]=h.exports.useState(e.name),y=p=>{m(p.target.value)};h.exports.useEffect(()=>{s(()=>{t({...e,name:d})})},[d,t]);const g=p=>{t({...e,maxCost:Number(p.target.value)})},v=p=>{t({...e,maxReinforcement:Number(p.target.value)})},u=p=>{t({...e,myListOnly:p.target.value==="myListOnly"})};return o(M,{children:o(D,{component:"div",p:1,children:o(vt,{sx:{alignItems:"center"},offsetValue:!1,rowGap:1,columnCount:a,rows:[{key:"name",label:l("fleetSetup.fleetName"),value:p=>o(X,{variant:"outlined",size:"small",value:d,onChange:y,error:!!r.name,helperText:r.name,fullWidth:p})},{key:"reinforcementCount",label:l("fleetSetup.maxReinforcementCount"),value:p=>o(X,{variant:"outlined",size:"small",select:!0,value:e.maxReinforcement,onChange:v,error:!!r.maxReinforcement,helperText:r.maxReinforcement,fullWidth:p,SelectProps:{renderValue:()=>o(x,{variant:"body1",whiteSpace:"normal",children:e.maxReinforcement})},children:[5,6,7,9,10].map(i=>o(J,{value:`${i}`,children:l("fleetSetup.shipCount",{value:i})},`reinforcementCount${i}`))})},{key:"maxCost",label:l("fleetSetup.maxCommandPoints"),value:p=>o(X,{variant:"outlined",size:"small",select:!0,value:e.maxCost,onChange:g,error:!!r.maxCost,helperText:r.maxCost,fullWidth:p,SelectProps:{renderValue:()=>o(x,{variant:"body1",whiteSpace:"normal",children:e.maxCost})},children:[450,430,415,400,350,330,315,300].map(i=>o(J,{value:`${i}`,children:i},`maxCost${i}`))})},{key:"myListOnly",label:l("fleetSetup.availableShipsForAdding"),value:p=>f(X,{variant:"outlined",size:"small",select:!0,value:e.myListOnly?"myListOnly":"all",onChange:u,error:!!r.myListOnly,helperText:r.myListOnly,fullWidth:p,SelectProps:{renderValue:()=>o(x,{variant:"body1",whiteSpace:"normal",children:e.myListOnly?l("label.acquiredShips"):l("label.allShips")})},children:[o(J,{value:"all",children:l("label.allShips")}),o(J,{value:"myListOnly",children:l("label.acquiredShips")})]})}]})})})},Ze=n=>{const{onOpenAddShips:e,filter:t,buttonProps:r}=n,a=c=>{switch(c){case"addInitialShip":{e(null,t);break}case"addSelfReinforcement":{e("self",t);break}case"addAllyReinforcement":{e("ally",t);break}case"addAlly2Reinforcement":{e("ally2",t);break}case"addAlly3Reinforcement":{e("ally3",t);break}}};return o(qt,{icon:o(We,{}),text:l("fleetSetup.addShips"),onClick:a,buttonProps:r,options:[{key:"addInitialShip",text:l("fleetSetup.normalAssignment"),value:"addInitialShip"},{key:"addSelfReinforcement",text:l("fleetSetup.selfReinforcement"),value:"addSelfReinforcement"},{key:"addAllyReinforcement",text:l("fleetSetup.orgReinforcementA"),value:"addAllyReinforcement"},{key:"addAlly2Reinforcement",text:l("fleetSetup.orgReinforcementB"),value:"addAlly2Reinforcement"},{key:"addAlly3Reinforcement",text:l("fleetSetup.orgReinforcementC"),value:"addAlly3Reinforcement"}]})},Pn=n=>{const{grouping:e,onChangeGrouping:t,onCancel:r,onSave:a,onReset:c,onOpenAddShips:s,saveDisabled:d}=n;return o(Et,{left:m=>f(O,{children:[o(Lt,{value:e,onChange:t,buttonProps:m}),o(Ze,{onOpenAddShips:s,buttonProps:m})]}),right:m=>f(O,{children:[o($,{variant:"outlined",startIcon:o(It,{}),onClick:c,...m,children:l("button.initialize")},"reset"),o($,{variant:"outlined",startIcon:o(Ot,{}),onClick:r,...m,children:l("button.cancel")},"cancel"),o($,{variant:"contained",startIcon:o(At,{}),onClick:a,disabled:d,...m,children:l("button.save")},"save")]})})},Bn=n=>{var i;const{initialFleetKey:e}=n,t=Ge(),r=h.exports.useMemo(()=>_t(),[]),[a,c]=h.exports.useState(e&&(i=r.find(C=>C.key===e))!=null?i:r[0]),s=h.exports.useCallback((C,b,S)=>{c(R=>Ue({shipId:C,count:b,reinforcement:S,fleetSetup:R}))},[]),d=h.exports.useCallback((C,b,S,R)=>{c(T=>Pt({shipId:C,carrierShipId:b,count:S,reinforcement:R,fleetSetup:T}))},[]),m=h.exports.useCallback((C,b,S)=>{c(R=>Bt({shipId:C,reinforcement:b,moduleSelection:S,fleetSetup:R}))},[]),y=h.exports.useCallback((C,b,S)=>{c(R=>Gt({shipId:C,row:b,cost:S,fleetSetup:R}))},[]),g=h.exports.useCallback(()=>{Nt(a),t("/fleetSetup")},[a]),v=h.exports.useCallback(()=>{const C=Number(a.key.substring(5));c(zt(C))},[a]),u=h.exports.useMemo(()=>Ht(a),[a]),p=h.exports.useMemo(()=>Ce(a),[a]);return{fleetSetup:a,errors:u,shipWarnings:p,setFleetSetup:c,setShipCount:s,setCarriedShipCount:d,setModule:m,setOverrides:y,save:g,reset:v}},Gn=n=>{const{fleetSetup:e,fleetShipCount:t}=n,r=t.totalCost>e.maxCost,a=e.totalReinforcementCount>e.maxReinforcement;return o(D,{component:"div",sx:{height:"100px"},children:o(M,{square:!0,sx:{position:"fixed",right:0,bottom:0,zIndex:1,width:"100%",borderTop:"1px solid rgba(0, 0, 0, 0.2)"},children:o(Dt,{maxWidth:"md",disableGutters:!0,children:o(D,{component:"div",p:1,children:f(w,{spacing:1,flexWrap:"wrap",direction:"row",children:[o(D,{component:"div",sx:{flexGrow:1,display:"flex",justifyContent:"center"},children:f("div",{children:[o(x,{variant:"body2",color:"text.secondary",children:l("fleetSetup.reinforcement")}),o(x,{variant:"body1",sx:{color:a?"red":void 0},children:o("strong",{children:`${e.totalReinforcementCount} / ${e.maxReinforcement}`})})]})}),o(D,{component:"div",sx:{flexGrow:1,display:"flex",justifyContent:"center"},children:f("div",{children:[o(x,{variant:"body2",color:"text.secondary",children:l("fleetSetup.commandPoints")}),o(x,{variant:"body1",sx:{color:r?"red":void 0},children:o("strong",{children:`${t.totalCost} / ${e.maxCost}`})})]})})]})})})})})};function Nn(n,e,t,r){const a={};e.ships.forEach(s=>{a[`${s.shipDefinition.id}_${s.reinforcement}`]=!0});const c=zn(Ne,n,e.myListOnly,t);return{fleetSetup:{...e,ships:[...e.ships,...c.flatMap(s=>a[`${s.id}_${n}`]?[]:[je({shipDefinition:s,usedModules:null,count:0,reinforcement:n,maxReinforcement:e.maxReinforcement,temporary:!0})])]},reinforcement:n,filter:r}}function zn(n,e,t,r){const a=n.filter(c=>c.type!==k.CORVETTE&&c.type!==k.FIGHTER);return(e==null?void 0:e.includes("ally"))||!t?a:a.filter(c=>ze(c.id,r))}function Hn(n){return{...n.fleetSetup,ships:n.fleetSetup.ships.flatMap(e=>e.temporary?e.count===0?[]:[{...e,temporary:!1}]:[e])}}function Un(n,e){let t={...e,fleetSetup:{...e.fleetSetup,ships:e.fleetSetup.ships.filter(r=>r.temporary===!0)}};return Object.keys(n).filter(r=>n[r]).forEach(r=>{switch(r){case E.FRONT:case E.MIDDLE:case E.BACK:{t={...t,fleetSetup:{...t.fleetSetup,ships:t.fleetSetup.ships.filter(a=>a.shipDefinition.row===r)}};break}case k.CARRIER:case k.AUXILIARY:case k.BATTLE_CRUISER:case k.CRUISER:case k.DESTROYER:case k.FRIGATE:{t={...t,fleetSetup:{...t.fleetSetup,ships:t.fleetSetup.ships.filter(a=>a.shipDefinition.type===r)}};break}}}),t}const jn=n=>{const{userSettings:e,fleetSetup:t,setFleetSetup:r}=n,[a,c]=h.exports.useState(null),s=h.exports.useCallback((v,u)=>{c(Nn(v,t,e,u!=null?u:null))},[t,e]),d=h.exports.useCallback(()=>{c(null)},[]),m=h.exports.useCallback(()=>{a&&(r(Hn(a)),c(null))},[a,r]),y=h.exports.useCallback((v,u,p)=>{c(i=>i?{...i,fleetSetup:Ue({shipId:v,count:u,reinforcement:p,fleetSetup:i.fleetSetup,keepZero:!0})}:null)},[e]),g=h.exports.useMemo(()=>a?Ce(a.fleetSetup):{},[a]);return{dialogData:a,shipWarnings:g,open:s,cancel:d,apply:m,setShipCount:y}};var ye={},Wn=ge.exports;Object.defineProperty(ye,"__esModule",{value:!0});var et=ye.default=void 0,Vn=Wn(me),qn=ve,Yn=(0,Vn.default)((0,qn.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");et=ye.default=Yn;var be={},Kn=ge.exports;Object.defineProperty(be,"__esModule",{value:!0});var tt=be.default=void 0,Xn=Kn(me),Jn=ve,Qn=(0,Xn.default)((0,Jn.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddBox");tt=be.default=Qn;const Zn=n=>{const{shipDefinition:e,rowOverride:t,costOverride:r,onChange:a,onClose:c}=n,s=e.row,d=e.cost,[m,y]=h.exports.useState(t!=null?t:s),[g,v]=h.exports.useState(r!=null?r:d),u=()=>{a(e.id,m,g),c()};return o(le,{title:l("fleetSetup.systemTune"),content:f(w,{spacing:3,children:[o(M,{children:f(w,{spacing:1,pl:1,pr:1,children:[o(x,{variant:"body1",children:l("label.rowPlacement")}),o(he,{children:f(fe,{name:"rowOverride",value:m,onChange:(p,i)=>y(i),children:[o(P,{label:`${s===E.FRONT?l("fleetSetup.frontRowDefault"):l("rowPlacement.frontRow")}`,value:E.FRONT,control:o(B,{})}),o(P,{label:`${s===E.MIDDLE?l("fleetSetup.middleRowDefault"):l("rowPlacement.middleRow")}`,value:E.MIDDLE,control:o(B,{})}),o(P,{label:`${s===E.BACK?l("fleetSetup.backRowDefault"):l("rowPlacement.backRow")}`,value:E.BACK,control:o(B,{})})]})})]})}),o(M,{children:f(w,{spacing:1,pl:1,pr:1,children:[o(x,{variant:"body1",children:l("fleetSetup.commandPoints")}),o(he,{children:f(fe,{name:"costOverride",value:g,onChange:(p,i)=>v(Number(i)),children:[o(P,{label:`${l("fleetSetup.costDefault",{cost:d})}`,value:e.cost,disabled:e.type!==k.CRUISER,control:o(B,{})}),o(P,{label:`${d-2}`,value:`${e.cost-2}`,disabled:e.type!==k.CRUISER,control:o(B,{})})]})})]})})]}),actions:f(O,{children:[o($,{variant:"outlined",onClick:c,children:l("button.cancel")}),o($,{variant:"contained",onClick:u,children:l("button.confirm")})]}),onClose:c})},eo=n=>{const{shipDefinition:e,count:t,maxCount:r,reinforcement:a,rowOverride:c,costOverride:s,showCost:d,showReinforcement:m,showTune:y,carrierShipId:g,shipWarning:v,onChangeShipCount:u,onChangeCarriedShipCount:p,onChangeOverrides:i}=n,[C,b]=h.exports.useState(!1),S=ie(),R=se(S.breakpoints.down("sm")),{openShipDetailDialog:T}=Ct(),A=f(O,{children:[o(x,{variant:"body1",children:o(yt,{onClick:()=>{T(e.id)},children:bt(e)})}),d&&a===null&&f(x,{variant:"body2",color:"text.secondary",children:[l("label.commandPointsColon"),L()?" ":"",s!=null?s:e.cost,l("label.comma"),L()?" ":"",l("label.totalColon"),L()?" ":"",`${(s!=null?s:e.cost)*t}`]}),m&&a==="self"&&o(x,{variant:"body2",color:"text.secondary",children:l("fleetSetup.selfReinforcement")}),m&&a==="ally"&&o(x,{variant:"body2",color:"text.secondary",children:l("fleetSetup.orgReinforcementA")}),m&&a==="ally2"&&o(x,{variant:"body2",color:"text.secondary",children:l("fleetSetup.orgReinforcementB")}),m&&a==="ally3"&&o(x,{variant:"body2",color:"text.secondary",children:l("fleetSetup.orgReinforcementC")})]}),U=v&&o(x,{variant:"caption",color:"red",textAlign:"end",children:v}),j=o($,{onClick:()=>{g?p==null||p(e.id,g,0,a):u==null||u(e.id,0,a)},disabled:t<=0,children:l("fleetSetup.clearAddedShips")}),z=o(ue,{onClick:()=>{g?p==null||p(e.id,g,t-1,a):u==null||u(e.id,t-1,a)},disabled:t<=0,children:o(et,{color:t<=0?"disabled":"primary"})}),W=o(x,{variant:"body1",sx:{minWidth:"55px"},textAlign:"center",children:o("strong",{children:`${t} / ${r}`})}),V=o(ue,{onClick:()=>{g?p==null||p(e.id,g,t+1,a):u==null||u(e.id,t+1,a)},disabled:t>=r,children:o(tt,{color:t>=r?"disabled":"primary"})}),q=o(ue,{onClick:()=>b(!0),children:o(Yt,{color:"primary"})}),Y=o($,{onClick:()=>{g?p==null||p(e.id,g,r,a):u==null||u(e.id,r,a)},disabled:t>=r,children:l("fleetSetup.fillUpAddedShips")});return f(O,{children:[R&&f(w,{spacing:1,children:[A,f(w,{direction:"row",spacing:1,children:[f(M,{variant:"outlined",sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",flexGrow:1},children:[f(w,{direction:"row",spacing:1,sx:{alignItems:"center"},children:[z,W,V]}),f(w,{direction:"row",spacing:1,sx:{alignItems:"center"},children:[j,Y]})]}),y&&o(M,{variant:"outlined",children:q})]}),U]}),!R&&f(w,{spacing:1,children:[f(w,{spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[o(D,{component:"div",pb:1,children:o(w,{spacing:1,children:A})}),o(D,{component:"div",sx:{display:"flex",justifyContent:"end",flexGrow:1},children:f(w,{direction:"row",spacing:1,children:[o(M,{variant:"outlined",sx:{display:"inline-block",flexGrow:1},children:f(w,{direction:"row",spacing:1,sx:{alignItems:"center"},children:[j,z,W,V,Y]})}),y&&o(M,{variant:"outlined",children:q})]})})]}),U]}),C&&i&&o(Zn,{shipDefinition:e,rowOverride:c,costOverride:s,onChange:i,onClose:()=>b(!1)})]})};function to(n){const e={corvette:{key:"corvette",name:l("shipType.corvette"),count:n.carriedShips.filter(t=>t.shipDefinition.type===k.CORVETTE).map(t=>t.count).reduce((t,r)=>t+r,0),maxCount:n.carrierCapabilities.carryCorvette*n.count},upToLargeFighter:{key:"upToLargeFighter",name:l("shipType.smallToLargeFighter"),count:n.carriedShips.filter(t=>t.shipDefinition.type===k.FIGHTER&&t.shipDefinition.subType===N.LARGE_FIGHTER).map(t=>t.count).reduce((t,r)=>t+r,0),maxCount:n.carrierCapabilities.carryUpToLargeFighter*n.count},upToMediumFighter:{key:"upToMediumFighter",name:l("shipType.smallToMediumFighter"),count:n.carriedShips.filter(t=>t.shipDefinition.type===k.FIGHTER&&t.shipDefinition.subType===N.MEDIUM_FIGHTER).map(t=>t.count).reduce((t,r)=>t+r,0),maxCount:n.carrierCapabilities.carryUpToMediumFighter*n.count},upToSmallFighter:{key:"upToSmallFighter",name:l("shipType.smallFighter"),count:n.carriedShips.filter(t=>t.shipDefinition.type===k.FIGHTER&&t.shipDefinition.subType===N.SMALL_FIGHTER).map(t=>t.count).reduce((t,r)=>t+r,0),maxCount:n.carrierCapabilities.carryUpToSmallFighter*n.count},removedHangar:{key:"removedHangar",name:l("label.unsupported"),count:0,maxCount:0}};return Oe(e.upToMediumFighter,[e.upToLargeFighter]),Oe(e.upToSmallFighter,[e.upToMediumFighter,e.upToLargeFighter]),pe(e.upToSmallFighter,e.upToMediumFighter),pe(e.upToMediumFighter,e.upToLargeFighter),e.upToLargeFighter.maxCount===0&&pe(e.upToLargeFighter,e.removedHangar),e}function Oe(n,e){let t=n.count-n.maxCount;t<=0||(n.count-=t,e.forEach(r=>{if(t<=0||r.maxCount===0)return;const a=r.maxCount-r.count;if(a<=0)return;const c=Math.min(a,t);t-=c,r.count+=c}),t>0&&(n.count+=t))}function pe(n,e){const t=n.count-n.maxCount;t>0&&(n.count-=t,e.count+=t)}function no(n){return n.count>0||n.maxCount>0}const oo=n=>{const{shipSelection:e,onOpenAddCarriedShips:t}=n,r=ie(),a=se(r.breakpoints.down("xs")),c=h.exports.useMemo(()=>to(e),[e]);return f(w,{spacing:1,direction:a?"column":"row",alignItems:a?"flex-start":"center",justifyContent:"end",flexWrap:"wrap",children:[f(w,{sx:{flexGrow:1},spacing:3,direction:"row",alignItems:"center",justifyContent:"space-between",children:[o(x,{variant:"body2",color:"text.secondary",children:l("label.hangarColon")}),o(w,{spacing:1,direction:"row",alignItems:"center",children:o(w,{spacing:1,direction:"row",alignItems:"center",children:Object.keys(c).filter(s=>no(c[s])).map(s=>c[s]).map(s=>f(h.exports.Fragment,{children:[o(x,{variant:"body2",color:"text.secondary",children:s.name}),o(x,{variant:"body2",color:"text.secondary",sx:{color:s.count>s.maxCount?"red":void 0},children:o("strong",{children:`${s.count} / ${s.maxCount}`})})]},s.key))})})]}),o($,{variant:"outlined",size:"small",startIcon:o(We,{}),sx:{whiteSpace:"nowrap"},onClick:()=>{t==null||t(e.shipDefinition.id,e.reinforcement)},children:l("fleetSetup.addAircraft")})]})};var Se={},ro=ge.exports;Object.defineProperty(Se,"__esModule",{value:!0});var nt=Se.default=void 0,ao=ro(me),io=ve,so=(0,ao.default)((0,io.jsx)("path",{d:"M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"}),"Tune");nt=Se.default=so;const lo=n=>{const{shipId:e,reinforcement:t,moduleSelection:r,myListOnly:a,onChange:c,onClose:s}=n,{userSettings:d}=St(),[m,y]=h.exports.useState(r),g=()=>{c(e,t,m),s()},v=i=>{const[C,b]=i.target.value.split("#");y(S=>Ut(C,b,S))},u=i=>{const C=Object.keys(m.groups[i]).find(b=>m.groups[i][b].usage==="used");return C?`${i}#${C}`:null},p=i=>!Object.keys(m.groups[i]).find(C=>m.groups[i][C].module.defaultModule);return o(le,{title:l("fleetSetup.configureModules"),content:f(w,{spacing:3,children:[Object.keys(m.groups).map(i=>{if(i==="STATIC")return null;const C=u(i),b=`${i}#none`;return o(M,{variant:"outlined",children:o(D,{component:"div",pl:1,pr:1,children:o(he,{children:f(fe,{defaultValue:"female",name:`group-${i}`,value:C!=null?C:b,onChange:v,children:[p(i)&&o(P,{label:`${l("label.notSelected")}`,value:b,control:o(B,{})},b),Object.keys(m.groups[i]).map(S=>{const R=m.groups[i][S],T=t!=="ally"&&t!=="ally2"&&t!=="ally3"&&a&&!R.module.defaultModule&&!xt(S,e,d),A=`${i}#${S}`;return o(P,{label:f(D,{component:"div",pt:1,pb:1,children:[o(x,{variant:"body1",children:`${R.module.category}${R.module.categoryNumber} ${He(e,R.module)}`}),Rt()===wt.JAPANESE&&R.module.description&&o(x,{variant:"body2",color:"text.secondary",children:`${R.module.description}`})]}),value:A,control:o(B,{disabled:T}),disabled:T},S)})]})})})},i)}),a&&o(x,{variant:"caption",paragraph:!0,children:l("fleetSetup.configureModulesFootnote")})]}),actions:f(O,{children:[o($,{variant:"outlined",onClick:s,children:l("button.cancel")}),o($,{variant:"contained",onClick:g,children:l("button.confirm")})]}),onClose:s})},co=n=>{const{shipId:e,reinforcement:t,moduleSelection:r,myListOnly:a,onChange:c}=n,s=ie(),d=se(s.breakpoints.down("xs")),[m,y]=h.exports.useState(!1),g=()=>{y(!0)},v=()=>{y(!1)},u=[];return Object.keys(r.groups).map(p=>{Object.keys(r.groups[p]).map(i=>r.groups[p][i]).forEach(i=>{i.module.category!=="STATIC"&&i.usage==="used"&&(u.length>0&&u.push(o(h.exports.Fragment,{children:f(x,{variant:"body2",component:"span",children:[l("label.comma"),L()?" ":""]})},`before_${i.module.id}`)),u.push(o(h.exports.Fragment,{children:o(Jt,{arrow:!0,disableFocusListener:!0,title:He(e,i.module),children:o(x,{variant:"body2",component:"span",children:`${i.module.category}${i.module.categoryNumber}`})})},i.module.id)))})}),u.length===0?null:f(O,{children:[f(w,{spacing:1,direction:d?"column":"row",alignItems:d?"flex-start":"center",justifyContent:"end",flexWrap:"wrap",children:[o(D,{component:"div",sx:{flexGrow:1},children:f(x,{variant:"body2",color:"text.secondary",children:[l("label.systemModulesColon"),L()?" ":"",u]})}),r.configuable&&o(D,{component:"div",sx:{display:"flex",alignContent:"end"},children:o($,{variant:"outlined",size:"small",startIcon:o(nt,{}),sx:{whiteSpace:"nowrap"},onClick:g,children:l("fleetSetup.configureModules")})})]}),m&&o(lo,{shipId:e,reinforcement:t,moduleSelection:r,myListOnly:a,onChange:c,onClose:v})]})},Ee=h.exports.memo(eo),xe=n=>{const{shipSelections:e,showCost:t,showReinforcement:r,showHangar:a,shipWarnings:c,showTune:s,carrierShipId:d,myListOnly:m,onChangeShipCount:y,onChangeCarriedShipCount:g,onOpenAddCarriedShips:v,onChangeModule:u,onChangeOverrides:p}=n;return o(w,{spacing:1,children:e==null?void 0:e.map(i=>{var C,b;return o(M,{variant:"outlined",children:o(D,{component:"div",p:1,children:f(w,{spacing:1,children:[o(Ee,{shipDefinition:i.shipDefinition,count:i.count,maxCount:i.maxCount,reinforcement:i.reinforcement,rowOverride:i.rowOverride,costOverride:i.costOverride,showCost:t,showReinforcement:r,showTune:s,carrierShipId:d,onChangeShipCount:y,onChangeCarriedShipCount:g,onChangeOverrides:p,shipWarning:c[we(i.shipDefinition.id,i.reinforcement)]}),i.moduleSelection&&u&&o(co,{shipId:i.shipDefinition.id,reinforcement:i.reinforcement,moduleSelection:i.moduleSelection,myListOnly:m,onChange:u}),a&&i.carrierCapabilities.canCarry&&f(w,{spacing:1,children:[o(oo,{shipSelection:i,onOpenAddCarriedShips:v}),(C=i.carriedShips)==null?void 0:C.map(S=>{var R;return o(Ee,{shipDefinition:S.shipDefinition,count:S.count,maxCount:S.shipDefinition.operationLimit,reinforcement:S.reinforcement,rowOverride:void 0,costOverride:void 0,carrierShipId:i.shipDefinition.id,showCost:!1,showReinforcement:!1,showTune:s,onChangeCarriedShipCount:g,shipWarning:c[we(S.shipDefinition.id,i.reinforcement)]},`${i.shipDefinition.id}_${S.shipDefinition.id}_${(R=S.reinforcement)!=null?R:"initial"}`)})]})]})})},`${i.shipDefinition.id}_${(b=i.reinforcement)!=null?b:"initial"}`)})})},uo=n=>{const{dialogData:e,shipWarnings:t,myListOnly:r,onCancel:a,onApply:c,onChangeShipCount:s}=n,[d,m]=h.exports.useState(!1),[y,g]=h.exports.useState(()=>{const u=Ye();return e.filter&&typeof u[e.filter]=="boolean"?{...u,[e.filter]:!0}:u}),v=h.exports.useMemo(()=>Un(y,e),[y,e]);return h.exports.useEffect(()=>{const u=setTimeout(()=>{m(!0)},0);return()=>{clearTimeout(u)}},[]),o(le,{title:f(w,{spacing:1,direction:"row",justifyContent:"space-between",alignItems:"center",children:[o(x,{variant:"h6",children:po(e.reinforcement)}),e.reinforcement===null?f("div",{children:[f(x,{variant:"body1",component:"span",children:[l("label.commandPointsColon"),L()?" ":""]}),o(x,{variant:"body1",component:"span",sx:{color:e.fleetSetup.totalCost>e.fleetSetup.maxCost?"red":void 0},children:o("strong",{children:`${e.fleetSetup.totalCost} / ${e.fleetSetup.maxCost}`})})]}):f("div",{children:[f(x,{variant:"body1",component:"span",children:[l("fleetSetup.reinforcementColon"),L()?" ":""]}),o(x,{variant:"body1",component:"span",sx:{color:e.fleetSetup.totalReinforcementCount>e.fleetSetup.maxReinforcement?"red":void 0},children:o("strong",{children:`${e.fleetSetup.totalReinforcementCount} / ${e.fleetSetup.maxReinforcement}`})})]})]}),content:f(w,{spacing:2,children:[o(x,{variant:"body2",children:ho(e.reinforcement)}),o("div",{children:o(Ke,{filter:y,shipTypes:[k.CARRIER,k.AUXILIARY,k.BATTLE_CRUISER,k.CRUISER,k.DESTROYER,k.FRIGATE],onChange:g,popperProps:{disablePortal:!1,placement:"bottom-start",style:{zIndex:1300}}})}),v.fleetSetup.ships.length===0&&o(Xe,{severity:"info",children:l("fleetSetup.noMatchingShip")}),d?o(xe,{shipSelections:v.fleetSetup.ships,showCost:!v.reinforcement,showReinforcement:!1,showHangar:!1,shipWarnings:t,showTune:!1,carrierShipId:null,myListOnly:r,onChangeShipCount:s}):f(w,{spacing:1,children:[o(I,{variant:"rectangular",height:90}),o(I,{variant:"rectangular",animation:"wave",height:90}),o(I,{variant:"rectangular",height:90}),o(I,{variant:"rectangular",animation:"wave",height:90}),o(I,{variant:"rectangular",height:90})]})]}),actions:f(O,{children:[o($,{variant:"outlined",onClick:a,children:l("button.cancel")}),o($,{variant:"contained",onClick:c,children:l("button.confirm")})]}),onClose:a})};function po(n){switch(n){case"ally":case"ally2":case"ally3":case"self":return l("fleetSetup.addReinforcement");default:return l("fleetSetup.addShips")}}function ho(n){switch(n){case"ally":return l("fleetSetup.addReinforcementDescriptionAllyA");case"ally2":return l("fleetSetup.addReinforcementDescriptionAllyB");case"ally3":return l("fleetSetup.addReinforcementDescriptionAllyC");case"self":return l("fleetSetup.addReinforcementDescriptionSelf");default:return l("fleetSetup.addShipsDescription")}}function fo(n,e,t,r){const a=t.ships.find(d=>d.shipDefinition.id===n&&d.reinforcement===e);if(!a)throw new Error("Invalid carrier");const c={};a.carriedShips.forEach(d=>{c[`${d.shipDefinition.id}_${d.reinforcement}`]=!0});const s=mo(a,Ne,e,t.myListOnly,r);return{carrierShipId:n,reinforcement:e,shipSelections:s.flatMap(d=>c[`${d.id}_${e}`]?[]:[je({shipDefinition:d,usedModules:null,count:0,reinforcement:e,maxReinforcement:t.maxReinforcement,temporary:!0})]),filter:null}}function mo(n,e,t,r,a){const c=e.filter(s=>{switch(s.type){case k.CORVETTE:return n.carrierCapabilities.carryCorvette>0;case k.FIGHTER:switch(s.subType){case N.LARGE_FIGHTER:return n.carrierCapabilities.carryUpToLargeFighter>0;case N.MEDIUM_FIGHTER:return n.carrierCapabilities.carryUpToMediumFighter>0||n.carrierCapabilities.carryUpToLargeFighter>0;case N.SMALL_FIGHTER:return n.carrierCapabilities.carryUpToSmallFighter>0||n.carrierCapabilities.carryUpToMediumFighter>0||n.carrierCapabilities.carryUpToLargeFighter>0}}return!1});return(t==null?void 0:t.includes("ally"))||!r?c:c.filter(s=>ze(s.id,a))}function Le(n,e){return{...e,ships:e.ships.map(t=>t.shipDefinition.id!==n.carrierShipId||t.reinforcement!==n.reinforcement?t:{...t,carriedShips:[...t.carriedShips,...n.shipSelections.filter(r=>r.count>0).map(r=>jt({shipId:r.shipDefinition.id,count:r.count,reinforcement:n.reinforcement}))]})}}function go(n,e){let t=e;return Object.keys(n).filter(r=>n[r]).forEach(r=>{switch(r){case k.CORVETTE:case k.FIGHTER:{t={...t,shipSelections:t.shipSelections.filter(a=>a.shipDefinition.type===r)};break}}}),t}const vo=n=>{const{userSettings:e,fleetSetup:t,setFleetSetup:r}=n,[a,c]=h.exports.useState(null),s=h.exports.useCallback((v,u)=>{c(fo(v,u,t,e))},[t,e]),d=h.exports.useCallback(()=>{c(null)},[]),m=h.exports.useCallback(()=>{a&&(r(Le(a,t)),c(null))},[a,t,r]),y=h.exports.useCallback((v,u,p)=>{c(i=>i?{...i,shipSelections:i.shipSelections.map(C=>C.shipDefinition.id!==v||C.reinforcement!==p?C:{...C,count:u})}:null)},[e]),g=h.exports.useMemo(()=>{if(!a)return{};const v=Le(a,t);return Ce(v)},[a,t]);return{dialogData:a,shipWarnings:g,open:s,cancel:d,apply:m,setShipCount:y}},Co=n=>{const{dialogData:e,shipWarnings:t,myListOnly:r,onCancel:a,onApply:c,onChangeShipCount:s}=n,[d,m]=h.exports.useState(!1),[y,g]=h.exports.useState(()=>{const i=Ye();return e.filter&&typeof i[e.filter]=="boolean"?{...i,[e.filter]:!0}:i}),v=h.exports.useMemo(()=>go(y,e),[y,e]);h.exports.useEffect(()=>{const i=setTimeout(()=>{m(!0)},0);return()=>{clearTimeout(i)}},[]);const u=!!e.shipSelections.find(i=>i.shipDefinition.type===k.CORVETTE),p=!!e.shipSelections.find(i=>i.shipDefinition.type===k.FIGHTER);return o(le,{title:l("fleetSetup.addAircraft"),content:f(w,{spacing:2,children:[o(x,{variant:"body2",children:l("fleetSetup.addAircraftDescription")}),u&&p&&o("div",{children:o(Ke,{filter:y,shipTypes:[k.CORVETTE,k.FIGHTER],shipRows:[],onChange:g,popperProps:{disablePortal:!1,placement:"bottom-start",style:{zIndex:1300}}})}),v.shipSelections.length===0&&o(Xe,{severity:"info",children:l("fleetSetup.noMatchingAircraft")}),d?o(xe,{shipSelections:v.shipSelections,showCost:!1,showReinforcement:!1,showHangar:!1,shipWarnings:t,showTune:!1,carrierShipId:null,myListOnly:r,onChangeShipCount:s}):f(w,{spacing:1,children:[o(I,{variant:"rectangular",height:90}),o(I,{variant:"rectangular",animation:"wave",height:90}),o(I,{variant:"rectangular",height:90}),o(I,{variant:"rectangular",animation:"wave",height:90}),o(I,{variant:"rectangular",height:90})]})]}),actions:f(O,{children:[o($,{variant:"outlined",onClick:a,children:l("button.cancel")}),o($,{variant:"contained",onClick:c,children:l("button.confirm")})]}),onClose:a})},No=()=>{const n=Ge(),{fleetKey:e}=kt(),t=ie(),r=se(t.breakpoints.up("lg")),a=h.exports.useMemo(()=>Ft(),[]),[c,s]=h.exports.useState(!1),{fleetSetup:d,errors:m,shipWarnings:y,setFleetSetup:g,setShipCount:v,setCarriedShipCount:u,setModule:p,setOverrides:i,save:C,reset:b}=Bn({initialFleetKey:e}),{dialogData:S,shipWarnings:R,open:T,cancel:A,apply:U,setShipCount:j}=jn({userSettings:a,fleetSetup:d,setFleetSetup:g}),{dialogData:z,shipWarnings:W,open:V,cancel:q,apply:Y,setShipCount:ot}=vo({userSettings:a,fleetSetup:d,setFleetSetup:g}),rt=h.exports.useMemo(()=>Wt(d.ships),[d.ships]),[ce,at]=h.exports.useState(ke.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME),de=h.exports.useMemo(()=>Vt(ce,d),[d,ce]),it=()=>{n(Tt.fleetSetupByKey.path(d.key))},st=()=>{Object.keys(m).length>0||(C(),n(`/fleetSetup/${d.key}`))},lt=()=>{s(!1)},ct=()=>{s(!0)},dt=()=>{s(!1),b()},K=r&&de.groupedBy===ke.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME?"row":"column",ut=K==="row"?4:2;return f(O,{children:[o($t,{currentRoute:"/fleetSetup"}),o(Pn,{grouping:ce,onChangeGrouping:at,onSave:st,onCancel:it,onReset:ct,onOpenAddShips:T,saveDisabled:Object.keys(m).length>0}),o(Mt,{disableContainer:K==="row",children:o(D,{component:"div",p:1,sx:{marginBottom:"60px"},children:f(w,{spacing:1,children:[o(_n,{fleetSetup:d,onChange:g,errors:m,columnCount:ut}),o(w,{spacing:1,direction:K,children:de.groups.map(_=>o(M,{sx:{width:K==="row"?`${100/de.groups.length}%`:void 0},children:o(D,{component:"div",p:1,children:f(w,{spacing:1,children:[f(w,{spacing:1,direction:"row",alignItems:"center",sx:{width:"100%"},children:[o(D,{component:"div",sx:{flexGrow:1},children:f(x,{variant:"body1",children:[_.name,L()&&o("span",{children:"\xA0"}),_.count>0?l("fleetSetup.shipCountBrackets",{value:_.count}):""]})}),o(Ze,{filter:_.id,onOpenAddShips:T,buttonProps:{size:"small"}})]}),_.ships.length>0&&o(xe,{shipSelections:_.ships,onChangeShipCount:v,onChangeCarriedShipCount:u,onOpenAddCarriedShips:V,onChangeModule:p,onChangeOverrides:i,showCost:!0,showReinforcement:!0,showHangar:!0,shipWarnings:y,showTune:!0,carrierShipId:null,myListOnly:d.myListOnly})]})})},_.id))})]})})}),o(Gn,{fleetSetup:d,fleetShipCount:rt}),S&&o(uo,{dialogData:S,shipWarnings:R,myListOnly:d.myListOnly,onCancel:A,onApply:U,onChangeShipCount:j}),z&&o(Co,{dialogData:z,shipWarnings:W,myListOnly:d.myListOnly,onCancel:q,onApply:Y,onChangeShipCount:ot}),c&&o(Kt,{title:l("button.initialize"),question:l("fleetSetup.confirmInitializeFleet"),cancelText:l("button.cancel"),confirmText:l("button.initialize"),onCancel:lt,onConfirm:dt})]})};export{No as FleetSetupEditPage,No as default};
