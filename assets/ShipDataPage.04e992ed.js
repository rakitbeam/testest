import{k as t,j as p,F as l,r as s,q as c,m as h}from"./index.a60674bf.js";import{C as f,c as u,S as C}from"./ShipDataTable.1959c270.js";import{S as g,c as S,a as F}from"./ShipTypeFilterButton.d50a9dbe.js";import{A as d}from"./ActionBar.a4399985.js";import{N as x,P as D}from"./PageContent.6272911e.js";import{P as B}from"./PageFooter.1a58ef5a.js";import"./domUtils.bceef3e7.js";import"./Popper.5fe13022.js";import"./useTable.dab2bb96.js";import"./sorting.c6946657.js";import"./TableRow.b4416562.js";import"./useFormControl.b1827ac7.js";const j=e=>{const{shipFilter:n,columnConfig:i,onFilterChange:r,onColumnConfigChange:a}=e;return t(d,{left:o=>p(l,{children:[t(f,{columnConfig:i,onChange:a,buttonProps:o},"columnConfig"),t(g,{filter:n,onChange:r,buttonProps:o},"filter")]})})},M=()=>{const[e,n]=s.exports.useState(S),[i,r]=s.exports.useState(()=>u({name:!0,row:!0,type:!0,cost:!0,operationLimit:!0})),a=s.exports.useMemo(()=>F(h,e),[e]),o=Object.values(i).filter(m=>m).length>3;return p(l,{children:[t(x,{currentRoute:"/shipData"}),t(j,{shipFilter:e,columnConfig:i,onFilterChange:n,onColumnConfigChange:r}),t(D,{disableContainer:o,children:t(c,{p:1,children:t(C,{shipDefinitions:a,columnConfig:i})})}),t(B,{disableContainer:o})]})};export{M as ShipDataPage,M as default};