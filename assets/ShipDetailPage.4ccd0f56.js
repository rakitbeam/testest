import{J as l,K as u,L as c,j as a,F as i,B as p,ap as d,bp as h,o as v,r as f,a as m,b as g,a2 as D,bq as x,br as B,T as S}from"./index.bc9ea099.js";import{N as I,P}from"./PageContent.2e377fbf.js";import{A as _}from"./ActionBar.bb5f0bc4.js";import{P as b}from"./PageFooter.83de53bb.js";var r={},j=u.exports;Object.defineProperty(r,"__esModule",{value:!0});var s=r.default=void 0,k=j(l),A=c,q=(0,k.default)((0,A.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");s=r.default=q;const y=()=>a(_,{left:e=>a(i,{children:a(p,{variant:"outlined",startIcon:a(s,{}),component:d,to:"/shipData",fullWidth:e.fullWidth,size:e.size,children:"\u8266\u8239\u4E00\u89A7"},"share")})}),F=()=>{const{shipId:e}=h(),t=v(),o=f.exports.useCallback(n=>{t(`/shipData/${n}`)},[t]);return m(i,{children:[a(I,{currentRoute:"/shipData"}),a(y,{}),a(P,{children:a(g,{p:1,children:a(D,{children:e&&x(e)?a(B,{shipId:e,onClickShip:o}):a(S,{variant:"body1",children:"Invalid ID"})})})}),a(b,{})]})};export{F as ShipDetailPage,F as default};