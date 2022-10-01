import{J as j,K as B,L as N,t as n,r as p,a as P,F as A,j as l,B as M,a2 as $,b as L,a3 as q,aq as V,k as o,l as s,ar as E,O as W,T as D,as as G,h as J,s as H,e as Y,at as F,au as Z,av as k,Z as Q,aw as R,$ as U,ax as I,a0 as X,ay as m,a1 as ee,az as T,aA as re}from"./index.bc9ea099.js";import{B as ae,C as ne,g as te,L as oe}from"./domUtils.cb11983a.js";import{P as le}from"./useFormControl.7ef86f90.js";import{G as ie,M as se,a as ce,L as me}from"./PageContent.2e377fbf.js";import{C as pe}from"./ShipTypeFilterButton.b8c8f6b3.js";import{u as ue,T as de}from"./useTable.9eea529c.js";var v={},he=B.exports;Object.defineProperty(v,"__esModule",{value:!0});var O=v.default=void 0,ye=he(j),Ce=N,fe=(0,ye.default)((0,Ce.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");O=v.default=fe;function Ge(e={}){return{name:!0,type:!1,row:!1,cost:!1,operationLimit:!1,dpmShip:!1,dpmAntiAir:!1,dpmSiege:!1,hp:!1,speed:!1,warpSpeed:!1,dpmShipPerCommandPoint:!1,dpmAntiAirPerCommandPoint:!1,dpmSiegePerCommandPoint:!1,hpPerCommandPoint:!1,source:!1,manufacturer:!1,researchManufacturer:!1,researchStrategyType:!1,researchTacticType:!1,weight:!1,...e}}function Se(e){const{disableResearchAgreementOptions:r}=e;return[{columnKey:"type",name:n("label.shipType")},{columnKey:"row",name:n("label.rowPlacement")},{columnKey:"cost",name:n("label.commandPoints")},{columnKey:"operationLimit",name:n("label.operationLimit")},{columnKey:"dpmShip",name:n("label.antiShipDpm")},{columnKey:"dpmAntiAir",name:n("label.antiAirDpm")},{columnKey:"dpmSiege",name:n("label.siegeDpm")},{columnKey:"hp",name:n("label.hp")},{columnKey:"speed",name:n("label.cruiseSpeed")},{columnKey:"warpSpeed",name:n("label.warpSpeed")},{columnKey:"dpmShipPerCommandPoint",name:n("label.antiShipDpmPerCommandPoint")},{columnKey:"dpmAntiAirPerCommandPoint",name:n("label.antiAirDpmPerCommandPoint")},{columnKey:"dpmSiegePerCommandPoint",name:n("label.siegeDpmPerCommandPoint")},{columnKey:"hpPerCommandPoint",name:n("label.hpPerCommandPoint")},{columnKey:"source",name:n("label.acquirableThrough")},{columnKey:"manufacturer",name:n("label.manufacturer")},...r!==!0?[{columnKey:"researchManufacturer",name:n("label.researchManufacturerColumn")},{columnKey:"researchStrategyType",name:n("label.researchStrategyTypeColumn")},{columnKey:"researchTacticType",name:n("label.researchTacticTypeColumn")}]:[],{columnKey:"weight",name:n("label.probabilityWeight")}]}const Je=e=>{const{onChange:r,buttonProps:a,disableResearchAgreementOptions:t}=e,[i,c]=p.exports.useState(e.columnConfig),[C,u]=p.exports.useState(!1),[x]=p.exports.useState(()=>Se({disableResearchAgreementOptions:t})),h=p.exports.useRef(null),[je,_]=p.exports.useTransition(),z=f=>{c(S=>({...S,[f]:!S[f]}))};return p.exports.useEffect(()=>{_(()=>{r(i)})},[i,r]),P(A,{children:[l(ae,{variant:"outlined",fullWidth:a==null?void 0:a.fullWidth,size:a==null?void 0:a.size,ref:h,children:l(M,{startIcon:l(O,{}),onClick:()=>u(!0),children:n("button.displayItems")})},"columnConfig"),l(le,{open:C,anchorEl:h.current,role:void 0,transition:!0,disablePortal:!0,style:{zIndex:1},children:({TransitionProps:f,placement:S})=>{var K;return l(ie,{...f,style:{transformOrigin:S==="bottom"?"center top":"center bottom"},children:l("div",{children:l(ne,{onClickAway:()=>u(!1),children:P($,{children:[l(L,{sx:{overflowY:"auto",maxHeight:`${((K=te(h.current))!=null?K:0)-50}px`},children:l(se,{id:"split-button-menu",children:x.map(y=>P(ce,{selected:i[y.columnKey],onClick:()=>z(y.columnKey),children:[l(oe,{children:l(pe,{edge:"start",checked:i[y.columnKey],tabIndex:-1,disableRipple:!0})}),l(me,{children:y.name})]},y.columnKey))})}),l(q,{}),l(L,{p:1,display:"flex",justifyContent:"end",children:l(M,{variant:"outlined",onClick:()=>u(!1),children:n("button.close")})})]})})})})}})]})},Te=e=>({id:"nameLink",renderHeader:()=>n("label.shipName"),renderCell:r=>{var t;return((t=e.decorateName)!=null?t:(i,c)=>i)(l(D,{variant:"body2",children:l(G,{onClick:()=>{e.onClick(r.id)},children:o(r)})}),r)},sortFn:(r,a)=>o(r).localeCompare(o(a),s())}),ge={id:"type",renderHeader:()=>n("label.shipType"),renderCell:e=>J(e.type,e.subType),sortFn:[(e,r)=>H(e.type,e.subType)-H(r.type,r.subType),(e,r)=>o(e).localeCompare(o(r),s())],initialSortDirection:"asc"},be={id:"row",renderHeader:()=>n("label.rowPlacement"),renderCell:e=>Y(e.row),sortFn:[(e,r)=>F(e.row)-F(r.row),(e,r)=>o(e).localeCompare(o(r),s())]},Pe={id:"cost",renderHeader:()=>n("label.commandPoints"),renderCell:e=>e.cost,sortFn:[(e,r)=>e.cost-r.cost,(e,r)=>o(e).localeCompare(o(r),s())]},we={id:"operationLimit",renderHeader:()=>n("label.operationLimit"),renderCell:e=>e.operationLimit,sortFn:[(e,r)=>e.operationLimit-r.operationLimit,(e,r)=>o(e).localeCompare(o(r),s())]},Ae={id:"source",renderHeader:()=>n("label.acquirableThrough"),renderCell:e=>Z(e.source),sortFn:[(e,r)=>k(e.source)-k(r.source),(e,r)=>o(e).localeCompare(o(r),s())]},De={id:"manufacturer",renderHeader:()=>n("label.manufacturer"),renderCell:e=>Q(e.manufacturer),sortFn:[(e,r)=>R(e.manufacturer)-R(r.manufacturer),(e,r)=>o(e).localeCompare(o(r),s())]},ve={id:"researchManufacturer",renderHeader:()=>n("label.researchManufacturerColumn"),renderCell:e=>e.researchManufacturer?U(e.researchManufacturer):"-",sortFn:[(e,r)=>(e.researchManufacturer?I(e.researchManufacturer):0)-(r.researchManufacturer?I(r.researchManufacturer):0),(e,r)=>o(e).localeCompare(o(r),s())]},xe={id:"researchStrategyType",renderHeader:()=>n("label.researchStrategyTypeColumn"),renderCell:e=>{var r,a;return l(A,{children:(a=(r=e.researchStrategyTypes)==null?void 0:r.map(t=>l(D,{variant:"body2",children:X(t)},t)))!=null?a:"-"})},sortFn:[(e,r)=>{var a,t;return((a=e.researchStrategyTypes)!=null&&a[0]?m(e.researchStrategyTypes[0]):0)-((t=r.researchStrategyTypes)!=null&&t[0]?m(r.researchStrategyTypes[0]):0)},(e,r)=>{var a,t;return((a=e.researchStrategyTypes)!=null&&a[1]?m(e.researchStrategyTypes[1]):0)-((t=r.researchStrategyTypes)!=null&&t[1]?m(r.researchStrategyTypes[1]):0)},(e,r)=>{var a,t;return((a=e.researchStrategyTypes)!=null&&a[2]?m(e.researchStrategyTypes[2]):0)-((t=r.researchStrategyTypes)!=null&&t[2]?m(r.researchStrategyTypes[2]):0)},(e,r)=>{var a,t;return((a=e.researchStrategyTypes)!=null&&a[3]?m(e.researchStrategyTypes[3]):0)-((t=r.researchStrategyTypes)!=null&&t[3]?m(r.researchStrategyTypes[3]):0)},(e,r)=>o(e).localeCompare(o(r),s())]},Ke={id:"researchTacticType",renderHeader:()=>n("label.researchTacticTypeColumn"),renderCell:e=>{var r,a;return l(A,{children:(a=(r=e.researchTacticTypes)==null?void 0:r.map(t=>l(D,{variant:"body2",children:ee(t)},t)))!=null?a:"-"})},sortFn:[(e,r)=>{var a,t;return((a=e.researchTacticTypes)!=null&&a[0]?T(e.researchTacticTypes[0]):0)-((t=r.researchTacticTypes)!=null&&t[0]?T(r.researchTacticTypes[0]):0)},(e,r)=>{var a,t;return((a=e.researchTacticTypes)!=null&&a[1]?T(e.researchTacticTypes[1]):0)-((t=r.researchTacticTypes)!=null&&t[1]?T(r.researchTacticTypes[1]):0)},(e,r)=>o(e).localeCompare(o(r),s())]},Me={id:"weight",renderHeader:()=>n("label.probabilityWeight"),renderCell:e=>e.weight,sortFn:[(e,r)=>e.weight-r.weight,(e,r)=>o(e).localeCompare(o(r),s())]},Le=d(n("label.antiShipDpm"),"dpmShip"),He=d(n("label.antiAirDpm"),"dpmAntiAir"),Fe=d(n("label.siegeDpm"),"dpmSiege"),ke=d(n("label.hp"),"hp"),Re=d(n("label.cruiseSpeed"),"speed"),Ie=d(n("label.warpSpeed"),"warpSpeed"),Ve=b(n("label.antiShipDpmPerCommandPoint"),"dpmShip"),Oe=b(n("label.antiAirDpmPerCommandPoint"),"dpmAntiAir"),_e=b(n("label.siegeDpmPerCommandPoint"),"dpmSiege"),ze=b(n("label.hpPerCommandPoint"),"hp");function d(e,r){return{id:r,renderHeader:()=>e,renderCell:a=>V(g(a.id,r)),sortFn:[(a,t)=>{var i,c;return((i=g(a.id,r))!=null?i:0)-((c=g(t.id,r))!=null?c:0)},(a,t)=>o(a).localeCompare(o(t),s())]}}function b(e,r){return{id:`${r}_per_command_point`,renderHeader:()=>e,renderCell:a=>V(w(a,r),0),sortFn:[(a,t)=>{var i,c;return((i=w(a,r))!=null?i:0)-((c=w(t,r))!=null?c:0)},(a,t)=>o(a).localeCompare(o(t),s())]}}function g(e,r){var t,i;const a=(i=(t=E(W(e),null))==null?void 0:t[r])!=null?i:null;if(typeof a=="boolean")throw new Error(`${r} is not a numeric value`);return a}function w(e,r){if(e.cost===0)return null;const a=g(e.id,r);if(typeof a=="boolean")throw new Error(`${r} is not a numeric value`);return a===null?null:a/e.cost}const Ye=e=>{const{shipDefinitions:r,columnConfig:a,decorateName:t}=e,{table:i,setTableData:c}=ue(),{openShipDetailDialog:C}=re(),u=p.exports.useMemo(()=>[Te({onClick:C,decorateName:t}),...a.type?[ge]:[],...a.row?[be]:[],...a.cost?[Pe]:[],...a.operationLimit?[we]:[],...a.dpmShip?[Le]:[],...a.dpmAntiAir?[He]:[],...a.dpmSiege?[Fe]:[],...a.hp?[ke]:[],...a.speed?[Re]:[],...a.warpSpeed?[Ie]:[],...a.dpmShipPerCommandPoint?[Ve]:[],...a.dpmAntiAirPerCommandPoint?[Oe]:[],...a.dpmSiegePerCommandPoint?[_e]:[],...a.hpPerCommandPoint?[ze]:[],...a.source?[Ae]:[],...a.manufacturer?[De]:[],...a.researchManufacturer?[ve]:[],...a.researchStrategyType?[xe]:[],...a.researchTacticType?[Ke]:[],...a.weight?[Me]:[]],[a,t,C]);return p.exports.useEffect(()=>{c({columns:u,data:r,rowIdFn:h=>h.id})},[c,u,r]),l(de,{table:i,size:"small"})};export{Je as C,Ye as S,Ge as c};