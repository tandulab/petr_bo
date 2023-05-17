import{a as $}from"./api.esm40966.js";import{ab as K,u as P,c as b,ac as O,r as y,a as E,_ as T,b as d,k as R,o as p,e as h,g as t,v as c,B as N,h as C,l as x,x as B,i as z,w as A,f as S}from"./usetoast.esm40966.js";import{u as D}from"./user40966.js";import{u as L}from"./country40966.js";import{e as I}from"./helpers40966.js";import{w as k}from"./runtime-dom.esm-bundler40966.js";const j={setup(){K(()=>{v.value=!0,r.value={first:0,rows:_.value.rows,sortField:null,sortOrder:null,filters:u.value},$.register("myfilter",(o,V)=>o===V),s()});const m=D(),n=L(),w=P(),l=b(()=>m.responseUsers),g=b(()=>n.allCountries),U=b(()=>m.userRoles),f=b(()=>w.getSelectedCountry),i=O(),_=y(),u=y({sellout_code:{value:"",matchMode:"contains"},role:{value:"",matchMode:"contains"},company_name:{value:"",matchMode:"contains"},country:{value:f.value.id,matchMode:"contains"},enabled:{value:"",matchMode:"contains"},parent_company_name:{value:"",matchMode:"contains"}}),v=y(!0),r=y(),M=y(0),F=y([{label:"Enabled",value:"true"},{label:"Disabled",value:"false"}]),e=y([{label:"My Filter",value:"myfilter"}]);function s(){v.value=!0;const o=new Map;o.set("country_id",u.value.country.value),o.set("company_name",u.value.company_name.value),o.set("role",u.value.role.value),o.set("sellout_code",u.value.sellout_code.value),o.set("enabled",u.value.enabled.value),o.set("parent_company_name",u.value.parent_company_name.value),o.set("page",r.value.page+1),o.set("per_page",r.value.rows),r.value.sortField&&(r.value.sortOrder==1?o.set("sorted_by",r.value.sortField+"_asc"):o.set("sorted_by",r.value.sortField+"_desc")),setTimeout(()=>{a(o)},Math.random()*1e3+250)}const a=async function(o){await m.fetchAllUsers(o).then(()=>{v.value=!1}).catch(V=>{v.value=!1,I(i,V)})};return{dt:_,responseUsers:l,filters:u,loading:v,totalRecords:M,lazyParams:r,matchModes:e,countries:g,userRoles:U,status:F,onPage:o=>{r.value=o,s()},onSort:o=>{r.value=o,s()},onFilter:()=>{r.value.page=0,r.value.filters=u.value,s()},toggleEdit:function(o){E.push({name:"user-detail",params:{id:o.id}})}}}};const W={key:0},q={key:0,class:"pi pi-check text-color-secondary"},G={key:1,class:"pi pi-times text-red-600"};function H(m,n,w,l,g,U){const f=d("InputText"),i=d("Column"),_=d("Badge"),u=d("Dropdown"),v=d("Button"),r=d("DataTable"),M=d("ConfirmPopup"),F=R("tooltip");return p(),h("div",null,[t(r,{value:l.responseUsers.users,totalRecords:l.responseUsers.total,lazy:!0,paginator:!0,rows:30,filters:l.filters,"onUpdate:filters":n[0]||(n[0]=e=>l.filters=e),ref:"dt",dataKey:"id",loading:l.loading,onPage:n[1]||(n[1]=e=>l.onPage(e)),onSort:n[2]||(n[2]=e=>l.onSort(e)),onFilter:n[3]||(n[3]=e=>l.onFilter()),filterDisplay:"row",removableSort:""},{empty:c(()=>[N(" No users found. ")]),default:c(()=>[t(i,{field:"sellout_code",header:"Sellout code",filterMatchMode:"contains",ref:"sellout_code",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:c(({filterModel:e,filterCallback:s})=>[t(f,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:k(a=>s(),["enter"]),class:"p-column-filter",placeholder:"Filter by sellout code"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),t(i,{field:"company_name",header:"Company",filterMatchMode:"contains",ref:"company_name",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:c(({filterModel:e,filterCallback:s})=>[t(f,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:k(a=>s(),["enter"]),class:"p-column-filter",placeholder:"Filter by company"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),t(i,{field:"role",header:"Cluster",filterMatchMode:"contains",ref:"role",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:c(({data:e})=>[e.role=="dealer"?(p(),C(_,{key:0,value:"Distributor",class:x(["px-4",e.role])},null,8,["class"])):e.role=="user"?(p(),C(_,{key:1,value:"Workshop",class:x(["px-4",e.role])},null,8,["class"])):(p(),C(_,{key:2,value:e.role,class:x(["px-4",e.role])},null,8,["value","class"]))]),filter:c(({filterModel:e,filterCallback:s})=>[t(u,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:l.userRoles,optionValue:"value",optionLabel:"name",onChange:a=>s(),placeholder:"Filter by cluster"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},512),t(i,{field:"parent_company_name",header:"Parent company",filterMatchMode:"contains",ref:"parent_company_name",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:c(({data:e})=>[e.parent?(p(),h("span",W,B(e.parent.company_name),1)):z("",!0)]),filter:c(({filterModel:e,filterCallback:s})=>[t(f,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:k(a=>s(),["enter"]),class:"p-column-filter",placeholder:"Filter by parent company"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),t(i,{header:"Status",filterMatchMode:"contains",ref:"enabled",field:"enabled",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:c(({filterModel:e,filterCallback:s})=>[t(u,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:l.status,optionValue:"value",optionLabel:"label",onChange:a=>s(),placeholder:"Filter by status"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),body:c(({data:e})=>[e.enabled?(p(),h("i",q)):(p(),h("i",G))]),_:1},512),t(i,{header:"",style:{width:"4rem"}},{body:c(({data:e})=>[A(t(v,{type:"button",onClick:s=>l.toggleEdit(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-pencil"},null,8,["onClick"]),[[F,"Edit",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading"]),t(M)])}const J=T(j,[["render",H]]),Q={setup(){const m=D();return{totalUser:b(()=>m.getTotalUsers)}},components:{UsersTable:J}},X={class:"flex justify-content-between align-items-center"},Y={class:"uppercase"},Z={key:0},ee={key:1};function oe(m,n,w,l,g,U){const f=d("Button"),i=d("UsersTable"),_=d("Card");return p(),h("div",null,[t(_,null,{content:c(()=>[S("div",X,[S("h1",Y,[l.totalUser==1?(p(),h("span",Z," 1 User")):(p(),h("span",ee,B(l.totalUser)+" Users",1))]),t(f,{label:"user",onClick:n[0]||(n[0]=u=>m.$router.push("/user-detail")),icon:"pi pi-plus",class:"mb-3"})]),t(i)]),_:1})])}const pe=T(Q,[["render",oe]]);export{pe as default};