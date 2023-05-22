import{Q as B,R as A,U as I,r as f,k as e,F as g,t as n,bG as te,j as p,B as E,az as W,bH as j,Z as ne,g as $,aL as oe,aM as re,aN as ae,x as b,T as o,bB as F,aO as ie,bz as le,bI as se,bJ as ce,bK as pe,c as x,b as w,S as de,a as ue,aH as he,v as D,aA as G,y as fe,z as me,A as Se,bC as ve,ai as ye,aw as ge,ab as N,ac as xe,av as V}from"./index.c0102965.js";import{N as be,P as Ce}from"./PageContent.c57ff487.js";import{d as ke}from"./Settings.4a8895dd.js";import{A as De}from"./ActionBar.c4fe5a50.js";import{B as L}from"./ButtonMenu.9ca9752a.js";import{u as z,g as Y,f as q,m as _e,s as Te,S as Re,a as Fe,b as we,v as Ee,G as H}from"./fleetSetupValidation.95687875.js";import{d as $e,a as J,b as Be,I as Ae,E as Ie}from"./ExportDataDialog.5adae6cd.js";import{d as Oe}from"./Save.d9f87c11.js";import{E as Pe}from"./ExpandStack.5d22df3e.js";import{R as Me}from"./ResponsiveDialog.af97cdd9.js";import{T as We}from"./TextField.2c2d20ca.js";import{P as je}from"./PageFooter.012d8f78.js";import{A as Ge}from"./Alert.abe1a767.js";import"./MenuItem.b8435d40.js";import"./domUtils.4f25a6c5.js";import"./Popper.4ef64c1e.js";import"./ClickAwayListener.3fb97e7a.js";import"./ConfirmationDialog.2b1077d0.js";import"./DialogContentText.7e41b6fe.js";import"./Download.192d6d6f.js";import"./Select.50584adf.js";import"./useFormControl.a391276c.js";var O={},Ne=A.exports;Object.defineProperty(O,"__esModule",{value:!0});var U=O.default=void 0,Ve=Ne(B),ze=I,He=(0,Ve.default)((0,ze.jsx)("path",{d:"M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zm-9 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm10 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"}),"Spoke");U=O.default=He;const Ke=u=>{const{fleetSetups:t,fleetSetup:i,onChange:r,buttonProps:d}=u,s=f.exports.useMemo(()=>t.map(a=>({key:a.key,text:a.name,value:a.key})),[t]);return e(g,{children:e(L,{icon:e(U,{}),text:n("fleetSetup.selectFleet"),value:i.key,options:s,onClick:r,buttonProps:d})})},Le=u=>{const{fleetSetup:t,grouping:i,onCopyAsText:r,buttonProps:d}=u,[s,a]=f.exports.useState(!1),[h,c]=f.exports.useState(!1),C=f.exports.useCallback((y,l)=>{(async()=>{const v=await te();if(!v){l();return}const m=z(v,t.key);y(m)})()},[t]),S=f.exports.useCallback(y=>{let l;try{l=JSON.parse(y)}catch(v){return console.log(v),null}return z(l,t.key)},[t]),k=f.exports.useCallback(y=>{const l=Y(i,y);return q(y,l)},[i]),R=f.exports.useCallback(y=>{switch(y){case"copyAsText":{r();break}case"import":{a(!0);break}case"export":{c(!0);break}}},[t]);return p(g,{children:[e(L,{icon:e($e,{}),text:n("button.share"),value:void 0,buttonProps:d,onClick:R,options:[{key:"copyAsText",icon:e(J,{}),text:n("label.copyAsText"),value:"copyAsText"},{key:"export",icon:e(Oe,{}),text:n("label.dataExport"),value:"export"},{key:"import",icon:e(Be,{}),text:n("label.dataImport"),value:"import"}]}),s&&e(Ae,{confirmDialogTitle:n("fleetSetup.importConfirmTitle"),confirmWarning:n("fleetSetup.importConfirmWarning",{name:t.name}),createPreview:k,parseInput:S,onImport:Ye,onClose:()=>a(!1),onSelectFile:C}),h&&e(Ie,{fileName:t.name,jsonContent:JSON.stringify(_e(t)),onClose:()=>c(!1)})]})};function Ye(u){Te(u),setTimeout(()=>{const t=new URL(window.location.href);window.location.href=`${t.origin}${t.pathname}#/fleetSetup/${u.key}`,window.location.reload()},0)}const qe=u=>{const{fleetSetups:t,fleetSetup:i,grouping:r,onChangeFleet:d,onChangeGrouping:s,onEdit:a,onShare:h}=u;return e(De,{left:c=>p(g,{children:[e(Re,{value:r,onChange:s,buttonProps:c}),e(Ke,{fleetSetups:t,fleetSetup:i,onChange:d,buttonProps:c}),e(E,{variant:"outlined",startIcon:e(ke,{}),onClick:a,...c,children:n("button.edit")},"edit")]}),right:c=>e(g,{children:e(Le,{fleetSetup:i,grouping:r,onCopyAsText:h,buttonProps:c})})})},Je=u=>{const{initialFleetKey:t}=u,i=f.exports.useMemo(()=>Fe(),[]),r=f.exports.useMemo(()=>{var d;return t&&(d=i.find(s=>s.key===t))!=null?d:i[0]},[t]);return{fleetSetups:i,fleetSetup:r}};var P={},Ue=A.exports;Object.defineProperty(P,"__esModule",{value:!0});var Q=P.default=void 0,Qe=Ue(B),Ze=I,Xe=(0,Qe.default)((0,Ze.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");Q=P.default=Xe;var M={},et=A.exports;Object.defineProperty(M,"__esModule",{value:!0});var Z=M.default=void 0,tt=et(B),nt=I,ot=(0,tt.default)((0,nt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");Z=M.default=ot;function rt(u){const t={hp:0,speed:1/0,warpSpeed:1/0,dpmShip:0,dpmAntiAir:0,dpmSiege:0,incomplete:!1};return u.reduce((i,r)=>{const d=W(r.shipDefinition,r.moduleSelection);if(!d)return{...i,incomplete:!0};const s=j(d,r.count,i);return r.carriedShips.reduce((a,h)=>{const c=W(h.shipDefinition,null);return c?j(c,h.count,a):{...a,incomplete:!0}},s)},t)}const at=u=>{const{fleetSetup:t}=u,[i,r]=f.exports.useState(!1),{totalCost:d,shipCount:s,shipCountByType:a,shipCountByRow:h}=f.exports.useMemo(()=>we(t.ships),[t.ships]),c=f.exports.useMemo(()=>rt(t.ships),[t.ships]),C=d>t.maxCost,S=t.totalReinforcementCount>t.maxReinforcement,k=f.exports.useMemo(()=>{const l=Ee(t);return Object.keys(l).map(v=>{const[m,X]=v.split("#"),ee=ne(m),_=$(ee),T=l[v];switch(X){case"self":return n("fleetSetup.reinforcementShipWithValidationError",{shipName:_,reinforcementType:n("fleetSetup.selfReinforcement"),errorText:T});case"ally":return n("fleetSetup.reinforcementShipWithValidationError",{shipName:_,reinforcementType:n("fleetSetup.orgReinforcementA"),errorText:T});case"ally2":return n("fleetSetup.reinforcementShipWithValidationError",{shipName:_,reinforcementType:n("fleetSetup.orgReinforcementB"),errorText:T});case"ally3":return n("fleetSetup.reinforcementShipWithValidationError",{shipName:_,reinforcementType:n("fleetSetup.orgReinforcementC"),errorText:T});default:return n("fleetSetup.shipWithValidationError",{shipName:_,errorText:T})}})},[t]),y=C||S||k.length>0?e(Z,{color:"error"}):e(Q,{color:"primary"});return p(oe,{expanded:i,onChange:()=>r(!i),children:[e(re,{expandIcon:i?e(ae,{}):y,children:p(b,{spacing:1,children:[e(o,{variant:"body1",children:t.name}),!i&&p("div",{children:[p(o,{variant:"body2",color:"text.secondary",component:"span",children:[n("fleetSetup.reinforcementColon"),F()?" ":""]}),e(o,{variant:"body2",color:"text.secondary",component:"span",sx:S?{color:"red"}:{},children:`${t.totalReinforcementCount} / ${t.maxReinforcement}`}),p(o,{variant:"body2",color:"text.secondary",component:"span",children:[n("fleetSetup.commaCommandPointColon"),F()?" ":""]}),e(o,{variant:"body2",color:"text.secondary",component:"span",sx:C?{color:"red"}:{},children:`${d} / ${t.maxCost}`})]})]})}),e(ie,{children:i&&e(le,{rows:[{key:"reinforcementCount",label:n("fleetSetup.reinforcement"),value:e(o,{variant:"body2",sx:S?{color:"red"}:{},children:`${t.totalReinforcementCount} / ${t.maxReinforcement}`})},{key:"cost",label:n("fleetSetup.totalFleetCommandPoints"),value:e(o,{variant:"body2",sx:C?{color:"red"}:{},children:`${d} / ${t.maxCost}`})},{key:"dpm",label:n("fleetSetup.totalFleetDpm"),value:p(g,{children:[e(o,{variant:"body2",children:se(c)}),c.incomplete&&e(o,{variant:"caption",color:"text.secondary",children:n("fleetSetup.inaccurateDueToMissingDataBrackets")})]})},{key:"hp",label:n("fleetSetup.totalFleetHp"),value:p(g,{children:[e(o,{variant:"body2",children:ce(c)}),c.incomplete&&e(o,{variant:"caption",color:"text.secondary",children:n("fleetSetup.inaccurateDueToMissingDataBrackets")})]})},{key:"speed",label:n("label.speed"),value:p(g,{children:[e(o,{variant:"body2",children:pe(c)}),c.incomplete&&e(o,{variant:"caption",color:"text.secondary",children:n("fleetSetup.inaccurateDueToMissingDataBrackets")})]})},{key:"shipCount",label:n("label.ships"),value:s>0?p(g,{children:[e(o,{variant:"body2",children:n("fleetSetup.totalShipCountValue",{value:s})}),Object.keys(a).filter(l=>a[l]>0&&l!==x.CORVETTE&&l!==x.FIGHTER).map(l=>e(o,{variant:"body2",children:n("fleetSetup.countPerKind",{kind:w(l),value:a[l]})},l))]}):e(o,{variant:"body2",children:"-"})},{key:"carriedShipCount",label:n("shipType.aircraft"),value:a[x.FIGHTER]+a[x.CORVETTE]>0?p(g,{children:[a[x.FIGHTER]>0&&e(o,{variant:"body2",children:n("fleetSetup.countPerKind",{kind:w(x.FIGHTER),value:a[x.FIGHTER]})}),a[x.CORVETTE]>0&&e(o,{variant:"body2",children:n("fleetSetup.countPerKind",{kind:w(x.CORVETTE),value:a[x.CORVETTE]})})]}):e(o,{variant:"body2",children:"-"})},{key:"rowCount",label:n("label.rowPlacement"),value:s>0?e(g,{children:Object.keys(h).filter(l=>l!==de.NONE&&h[l]>0).map(l=>e(o,{variant:"body2",children:n("fleetSetup.countPerKind",{kind:ue(l),value:h[l]})},l))}):e(o,{variant:"body2",children:"-"})},...k.length>0?[{key:"warnings",label:n("label.warning"),value:k.map((l,v)=>e(o,{variant:"body2",sx:{color:"red"},children:l},`warning_${v}`))}]:[]]})})]})},K=u=>{const{shipSelections:t}=u,{openShipDetailDialog:i}=he();return e(b,{spacing:1,children:t==null?void 0:t.map(r=>{var d;return p(f.exports.Fragment,{children:[p(b,{spacing:1,direction:"row",children:[p(b,{spacing:1,direction:"row",flexWrap:"wrap",sx:{flexGrow:1},children:[e(D,{component:"div",sx:{width:"25px"},children:e(o,{variant:"body2",textAlign:"end",children:`${r.count}\xD7`})}),e(o,{variant:"body2",children:e(G,{onClick:()=>{i(r.shipDefinition.id)},children:$(r.shipDefinition)})}),r.reinforcement==="self"&&e(o,{variant:"body2",noWrap:!0,children:n("fleetSetup.reinforcementBrackets")}),r.reinforcement==="ally"&&e(o,{variant:"body2",noWrap:!0,children:n("fleetSetup.orgReinforcementABrackets")}),r.reinforcement==="ally2"&&e(o,{variant:"body2",noWrap:!0,children:n("fleetSetup.orgReinforcementBBrackets")}),r.reinforcement==="ally3"&&e(o,{variant:"body2",noWrap:!0,children:n("fleetSetup.orgReinforcementCBrackets")})]}),e(D,{component:"div",sx:{width:"50px"},children:r.reinforcement===null&&e(o,{variant:"body2",textAlign:"end",children:`${r.shipDefinition.cost*r.count} Pt`})})]}),r.carriedShips.map(s=>{var a;return p(b,{spacing:1,direction:"row",flexWrap:"wrap",children:[e(o,{variant:"body2",color:"text.secondary",sx:{paddingLeft:"30px",opacity:.5},children:"\u2517"}),e(D,{component:"div",sx:{width:"25px"},children:e(o,{variant:"body2",textAlign:"end",children:`${s.count}\xD7`})}),e(o,{variant:"body2",children:e(G,{onClick:()=>{i(s.shipDefinition.id)},children:$(s.shipDefinition)})})]},`${s.shipDefinition.id}_${(a=s.reinforcement)!=null?a:"initial"}`)})]},`${r.shipDefinition.id}_${(d=r.reinforcement)!=null?d:"initial"}`)})})},it=u=>{const{fleetSetup:t,groupedShips:i,onClose:r}=u,[d,s]=f.exports.useState(!1),[a,h]=f.exports.useState(()=>q(t,i)),c=()=>{a&&me(a).then(()=>{s(!0)})},C=k=>{h(k.target.value)},S=()=>{r(),s(!1)};return e(Me,{title:n("button.share"),content:p(b,{spacing:1,children:[e(We,{variant:"filled",id:"outlined-multiline-static",multiline:!0,onChange:C,rows:10,defaultValue:a,fullWidth:!0}),!!navigator.clipboard&&e(E,{variant:"outlined",startIcon:d?e(fe,{}):e(J,{}),onClick:c,fullWidth:!0,children:n("button.copyToClipboard")})]}),actions:e(E,{variant:"outlined",onClick:S,children:n("button.close")}),onClose:S})},wt=()=>{const u=Se(),{fleetKey:t}=ve(),i=ye(),r=ge(i.breakpoints.up("lg")),[d,s]=f.exports.useState(!1),{fleetSetups:a,fleetSetup:h}=Je({initialFleetKey:t!=null?t:null}),[c,C]=f.exports.useState(H.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME),S=f.exports.useMemo(()=>Y(c,h),[h,c]),k=m=>{u(V.fleetSetupByKey.path(m))},R=()=>{u(V.fleetSetupEditByKey.path(h.key))},y=()=>{s(!0)},l=()=>{s(!1)},v=r&&S.groupedBy===H.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME?"row":"column";return p(g,{children:[e(be,{currentRoute:"/fleetSetup"}),e(qe,{fleetSetups:a,fleetSetup:h,grouping:c,onChangeFleet:k,onChangeGrouping:C,onEdit:R,onShare:y}),e(Ce,{disableContainer:v==="row",children:e(D,{component:"div",p:1,children:p(b,{spacing:1,children:[e(at,{fleetSetup:h}),h.ships.length>0?e(g,{children:v==="row"?e(b,{spacing:1,direction:"row",sx:{width:"100%"},children:S.groups.map(m=>e(N,{sx:{width:`${100/S.groups.length}%`},children:e(D,{component:"div",p:1,children:p(b,{spacing:1,children:[p(o,{variant:"body1",children:[m.name,F()&&e("span",{children:"\xA0"}),m.count>0?n("fleetSetup.shipCountBrackets",{value:m.count}):""]}),e(xe,{}),e(K,{shipSelections:m.ships})]})})},m.id))}):e(Pe,{expandables:S.groups.map(m=>({id:m.id,initiallyOpened:!0,summary:p(o,{variant:"body1",children:[m.name,F()&&e("span",{children:"\xA0"}),m.count>0?n("fleetSetup.shipCountBrackets",{value:m.count}):""]}),details:e(K,{shipSelections:m.ships}),skip:m.ships.length===0}))},S.groupedBy)}):e(N,{children:e(D,{component:"div",p:2,children:p(b,{spacing:1,children:[e(o,{variant:"body1",children:n("fleetSetup.fleetFormation")}),e(Ge,{severity:"info",children:n("fleetSetup.fleetEmptyNotice")})]})})}),e(o,{variant:"caption",align:"right",paragraph:!0,children:n("fleetSetup.pageFootnote")})]})})}),d&&e(it,{fleetSetup:h,groupedShips:S,onClose:l}),e(je,{disableContainer:v==="row"})]})};export{wt as FleetSetupPage,wt as default};
