import{t as o,a as B,S as C,b as E,c as F,n as j,s as R,g as T,d as O,e as A,f as L,r as c,h as q,i as W,j as h,F as f,k as e,p as P,l as _,m as N,o as V,q as z,B as D,u as w,v as k,T as u,w as G,x as M,y as H,z as K,A as J}from"./index.c0102965.js";import{d as Q}from"./Settings.4a8895dd.js";import{e as $,S as X,c as Y,a as Z,b as ee,d as te,f as ne}from"./ShipTypeFilterButton.35400437.js";import{A as se}from"./ActionBar.c4fe5a50.js";import{C as ae,S as ie,c as oe}from"./ShipDataTable.23525d48.js";import{d as re,a as I,b as le,I as pe,E as ce}from"./ExportDataDialog.5adae6cd.js";import{d as ue}from"./Save.d9f87c11.js";import{B as de}from"./ButtonMenu.9ca9752a.js";import{E as he}from"./ExpandStack.5d22df3e.js";import{R as me}from"./ResponsiveDialog.af97cdd9.js";import{T as ge}from"./TextField.2c2d20ca.js";import{N as ye,P as fe}from"./PageContent.c57ff487.js";import{P as Se}from"./PageFooter.012d8f78.js";import"./domUtils.4f25a6c5.js";import"./MenuItem.b8435d40.js";import"./Popper.4ef64c1e.js";import"./ClickAwayListener.3fb97e7a.js";import"./useFormControl.a391276c.js";import"./useTable.567e6b5f.js";import"./TableRow.41e1ebc9.js";import"./ConfirmationDialog.2b1077d0.js";import"./DialogContentText.7e41b6fe.js";import"./Alert.abe1a767.js";import"./Download.192d6d6f.js";import"./Select.50584adf.js";function U(a,t){const n=[],r=[],i=[],d=[],p=[];a.forEach(s=>{switch(s.row){case C.FRONT:{n.push(s);break}case C.MIDDLE:{r.push(s);break}case C.BACK:{i.push(s);break}default:switch(s.type){case F.CORVETTE:{d.push(s);break}case F.FIGHTER:{p.push(s);break}}}});const l=j([(s,m)=>R(s.type,s.subType)-R(m.type,m.subType),(s,m)=>T(s).localeCompare(T(m),O())]);return[o("label.acquiredShipsAndBlueprints"),[o("myList.groupNameForSharing",{name:B(C.FRONT)}),...n.sort(l).map(s=>b(s,t))].join(`
`),[o("myList.groupNameForSharing",{name:B(C.MIDDLE)}),...r.sort(l).map(s=>b(s,t))].join(`
`),[o("myList.groupNameForSharing",{name:B(C.BACK)}),...i.sort(l).map(s=>b(s,t))].join(`
`),[o("myList.groupNameForSharing",{name:E(F.CORVETTE)}),...d.sort(l).map(s=>b(s,t))].join(`
`),[o("myList.groupNameForSharing",{name:E(F.FIGHTER)}),...p.sort(l).map(s=>b(s,t))].join(`
`)].join(`

`)}function b(a,t){const n=A(a,t);return n.length===0?`\u3000${T(a)}`:[`\u3000${T(a)}`,n.map(r=>`\u3000\u2517 ${r.category}${r.categoryNumber} ${L(a.id,r)}`).join(`
`)].join(`
`)}const Ce=a=>{const{onCopyAsText:t,buttonProps:n}=a,[r,i]=c.exports.useState(!1),[d,p]=c.exports.useState(null),[l,s]=c.exports.useState(null),m=c.exports.useCallback(g=>{switch(g){case"copyAsText":{t();break}case"import":{s(W()),i(!0);break}case"export":{p(q());break}}},[]),S=c.exports.useCallback((g,x)=>{if(l===null){x();return}g(l)},[l]);return h(f,{children:[e(de,{icon:e(re,{}),text:o("button.share"),value:void 0,buttonProps:n,onClick:m,options:[{key:"copyAsText",icon:e(I,{}),text:o("label.copyAsText"),value:"copyAsText"},{key:"export",icon:e(ue,{}),text:o("label.dataExport"),value:"export"},{key:"import",icon:e(le,{}),text:o("label.dataImport"),value:"import"}]}),r&&e(pe,{confirmDialogTitle:o("myList.importConfirmTitle"),confirmWarning:o("myList.importConfirmWarning"),createPreview:be,parseInput:P,canRestore:!!l,onImport:xe,onClose:()=>i(!1),onSelectFile:Fe,onRestoreFromBackup:S}),d&&e(ce,{fileName:"settings",jsonContent:d,onClose:()=>p(null),onStoreBackup:_})]})};function be(a){const t=$(N,a.ships);return U(t,a)}function xe(a){V(a),setTimeout(()=>{window.location.reload()},0)}function Fe(a,t){(async()=>{const n=await z();if(n===null){t();return}a(n)})()}const ve=a=>{const{shipFilter:t,columnConfig:n,onEdit:r,onFilter:i,onCopyAsText:d,onColumnConfigChange:p}=a;return e(se,{left:l=>h(f,{children:[e(ae,{columnConfig:n,onChange:p,disableResearchAgreementOptions:!0,buttonProps:l},"columnConfig"),e(X,{filter:t,onChange:i,researchManufacturer:!1,researchStrategyTypes:!1,researchTacticTypes:!1,buttonProps:l},"filter"),e(D,{variant:"outlined",startIcon:e(Q,{}),onClick:r,...l,children:o("myList.editMyList")},"edit")]}),right:l=>e(f,{children:e(Ce,{onCopyAsText:d,buttonProps:l})})})},Te=a=>{const{ship:t}=a,{userSettings:n}=w(),r=c.exports.useMemo(()=>A(t,n),[t,n]);return r.length===0?null:e(k,{component:"div",mt:.5,children:r.map(i=>h(u,{variant:"body2",color:"text.secondary",children:[e(u,{variant:"body2",component:"span",color:"text.secondary",sx:{opacity:.5},children:"\u2517 "}),`${i.category}${i.categoryNumber} ${L(t.id,i)}`]},i.id))})},we=a=>{const{ship:t}=a,{userSettings:n}=w(),r=c.exports.useMemo(()=>G(t,n),[t,n]);return r.length===0?null:e(k,{component:"div",mt:.5,children:r.map(i=>h(u,{variant:"body2",color:"text.secondary",children:[e(u,{variant:"body2",component:"span",color:"text.secondary",sx:{opacity:.5},children:"\u2517 "}),`${i.category}${i.categoryNumber} ${L(t.id,i)}`]},i.id))})},v=c.exports.memo(ie),ke=a=>{const{shipListState:t,columnConfig:n}=a;return h(M,{spacing:1,children:[e(he,{expandables:[{id:"possessed-ships",initiallyOpened:!0,summary:e(u,{variant:"body1",children:o("label.acquiredShipsAndBlueprints")}),details:e(v,{shipDefinitions:t.possessed,columnConfig:n,decorateName:(r,i)=>h(f,{children:[r,e(Te,{ship:i})]})})},{id:"wished-ships",initiallyOpened:!1,summary:e(u,{variant:"body1",children:o("label.wantedBlueprints")}),details:e(v,{shipDefinitions:t.wished,columnConfig:n,decorateName:(r,i)=>h(f,{children:[r,e(we,{ship:i})]})})},{id:"unwished-by-user-ships",initiallyOpened:!1,summary:e(u,{variant:"body1",children:o("label.unwantedBlueprints")}),details:e(v,{shipDefinitions:t.unwishedByUser,columnConfig:n})},{id:"unwished-by-data-ships",initiallyOpened:!1,summary:e(u,{variant:"body1",children:o("myList.unwantedDuplicates")}),details:h(f,{children:[e(v,{shipDefinitions:t.unwishedByData,columnConfig:n}),e(k,{component:"div",pt:1,children:e(u,{variant:"caption",align:"right",paragraph:!0,children:o("myList.unwantedDuplicatesFootnote")})})]})}]}),e(u,{variant:"caption",align:"right",paragraph:!0,children:o("myList.pageFootnote")})]})},Be=a=>{const{ships:t,onClose:n}=a,[r,i]=c.exports.useState(!1),{userSettings:d}=w(),[p,l]=c.exports.useState(()=>U(t.possessed,d)),s=()=>{p&&K(p).then(()=>{i(!0)})},m=g=>{l(g.target.value)},S=()=>{n(),i(!1)};return e(me,{title:o("button.share"),content:h(M,{spacing:1,children:[e(ge,{variant:"filled",id:"outlined-multiline-static",multiline:!0,onChange:m,rows:10,defaultValue:p,fullWidth:!0}),!!navigator.clipboard&&e(D,{variant:"outlined",startIcon:r?e(H,{}):e(I,{}),onClick:s,fullWidth:!0,children:o("button.copyToClipboard")})]}),actions:e(D,{variant:"outlined",onClick:S,children:o("button.close")}),onClose:S})},Ze=()=>{const a=J(),{userSettings:t}=w(),[n,r]=c.exports.useState(Y),[i,d]=c.exports.useState(null),[p,l]=c.exports.useState(()=>oe({name:!0,row:!0,type:!0,cost:!1,operationLimit:!1})),s=c.exports.useMemo(()=>{const y=Z(N,n);return{possessed:$(y,t.ships),wished:ee(y,t),unwishedByUser:te(y,t.ships),unwishedByData:ne(y,t)}},[t,n]),m=()=>{a("/myList/edit")},S=()=>{d(s)},g=()=>{d(null)},x=Object.values(p).filter(y=>typeof y=="boolean"&&y).length>3;return h(f,{children:[e(ye,{currentRoute:"/myList"}),e(ve,{shipFilter:n,columnConfig:p,onEdit:m,onFilter:r,onCopyAsText:S,onColumnConfigChange:l}),e(fe,{disableContainer:x,children:h(k,{component:"div",p:1,children:[h(M,{pt:1,pb:2,spacing:2,children:[e(u,{variant:"body2",children:o("myList.pageDescription1")}),e(u,{variant:"body2",children:o("myList.pageDescription2")}),e(u,{variant:"body2",children:o("myList.pageDescription3")})]}),e(ke,{shipListState:s,columnConfig:p})]})}),i&&e(Be,{ships:i,onClose:g}),e(Se,{disableContainer:x})]})};export{Ze as MyListPage,Ze as default};
