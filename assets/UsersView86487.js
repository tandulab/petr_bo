import{a as O}from"./api.esm86487.js";import{o as R,u as T,c as w,af as B,r as y,a as P,_ as K,b as m,l as L,e as f,f as b,h as t,B as p,E as A,i as V,m as k,w as z,ag as N,g as S,C as j}from"./usetoast.esm86487.js";import{u as $}from"./user86487.js";import{u as I}from"./country86487.js";import{e as E,s as q,h as D}from"./helpers86487.js";import{w as F}from"./runtime-dom.esm-bundler86487.js";const W={setup(){R(()=>{_.value=!0,d.value={first:0,rows:c.value.rows,sortField:null,sortOrder:null,filters:u.value},O.register("myfilter",(o,C)=>o===C),r()});const v=$(),s=I(),g=T(),l=w(()=>v.responseUsers),h=w(()=>s.allCountries),U=w(()=>v.userRoles),i=w(()=>g.getSelectedCountry),a=B(),c=y(),u=y({sellout_code:{value:"",matchMode:"contains"},role:{value:"",matchMode:"contains"},company_name:{value:"",matchMode:"contains"},country:{value:i.value.id,matchMode:"contains"},agent_code:{value:"",matchMode:"contains"},dealer_code:{value:"",matchMode:"contains"}}),_=y(!0),d=y(),M=y(0),x=y([{label:"Enabled",value:"true"},{label:"Disabled",value:"false"}]),e=y([{label:"My Filter",value:"myfilter"}]);function r(){_.value=!0;const o=new Map;o.set("country_id",u.value.country.value),o.set("company_name",u.value.company_name.value),o.set("role",u.value.role.value),o.set("sellout_code",u.value.sellout_code.value),o.set("agent_code",u.value.agent_code.value),o.set("dealer_code",u.value.dealer_code.value),o.set("page",d.value.page+1),o.set("per_page",d.value.rows),d.value.sortField&&(d.value.sortOrder==1?o.set("sorted_by",d.value.sortField+"_asc"):o.set("sorted_by",d.value.sortField+"_desc")),setTimeout(()=>{n(o)},Math.random()*1e3+250)}const n=async function(o){await v.fetchAllUsers(o).then(()=>{_.value=!1}).catch(C=>{_.value=!1,E(a,C)})};return{dt:c,responseUsers:l,filters:u,loading:_,totalRecords:M,lazyParams:d,matchModes:e,countries:h,userRoles:U,status:x,onPage:o=>{d.value=o,r()},onSort:o=>{d.value=o,r()},onFilter:()=>{d.value.page=0,d.value.filters=u.value,r()},toggleEdit:function(o){P.push({name:"user-detail",params:{id:o.id}})}}}};const G={key:0,class:"pi pi-check text-color-secondary"},H={key:1,class:"pi pi-times text-red-600"};function J(v,s,g,l,h,U){const i=m("InputText"),a=m("Column"),c=m("Badge"),u=m("Dropdown"),_=m("Button"),d=m("DataTable"),M=m("ConfirmPopup"),x=L("tooltip");return f(),b("div",null,[t(d,{value:l.responseUsers.users,totalRecords:l.responseUsers.total,lazy:!0,paginator:!0,rows:30,filters:l.filters,"onUpdate:filters":s[0]||(s[0]=e=>l.filters=e),ref:"dt",dataKey:"id",loading:l.loading,onPage:s[1]||(s[1]=e=>l.onPage(e)),onSort:s[2]||(s[2]=e=>l.onSort(e)),onFilter:s[3]||(s[3]=e=>l.onFilter()),filterDisplay:"row",removableSort:""},{empty:p(()=>[A(" No users found. ")]),default:p(()=>[t(a,{field:"sellout_code",header:"Sellout code",filterMatchMode:"contains",ref:"sellout_code",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:p(({filterModel:e,filterCallback:r})=>[t(i,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:F(n=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by sellout code"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),t(a,{field:"company_name",header:"Company",filterMatchMode:"contains",ref:"company_name",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:p(({filterModel:e,filterCallback:r})=>[t(i,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:F(n=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by company"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),t(a,{field:"role",header:"Cluster",filterMatchMode:"contains",ref:"role",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:p(({data:e})=>[e.role=="dealer"?(f(),V(c,{key:0,value:"Distributor",class:k(["px-4",e.role])},null,8,["class"])):e.role=="user"?(f(),V(c,{key:1,value:"Workshop",class:k(["px-4",e.role])},null,8,["class"])):(f(),V(c,{key:2,value:e.role,class:k(["px-4",e.role])},null,8,["value","class"]))]),filter:p(({filterModel:e,filterCallback:r})=>[t(u,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:l.userRoles,optionValue:"value",optionLabel:"name",onChange:n=>r(),placeholder:"Filter by cluster"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},512),t(a,{header:"Status",ref:"enabled",field:"enabled",style:{width:"100px"}},{body:p(({data:e})=>[e.enabled?(f(),b("i",G)):(f(),b("i",H))]),_:1},512),t(a,{field:"agent_code",header:"Agent code",filterMatchMode:"contains",ref:"agent_code",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:p(({filterModel:e,filterCallback:r})=>[t(i,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:F(n=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by code"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),t(a,{header:"Agent",field:"agent_name"}),t(a,{field:"dealer_code",header:"Distributor code",filterMatchMode:"contains",ref:"dealer_code",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:p(({filterModel:e,filterCallback:r})=>[t(i,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:F(n=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by code"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),t(a,{header:"Distributor",field:"dealer_name"}),t(a,{header:"",style:{width:"4rem"}},{body:p(({data:e})=>[z(t(_,{type:"button",onClick:r=>l.toggleEdit(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-pencil"},null,8,["onClick"]),[[x,"Edit",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading"]),t(M)])}const Q=K(W,[["render",J]]),X={setup(){const v=$(),s=B(),g=T(),l=w(()=>v.getTotalUsers),h=w(()=>g.getSelectedCountry);return{totalUser:l,downloadFile:async function(){q();try{const a=await N({method:"get",url:"/users/export",responseType:"blob",params:{country_id:h.value.id}});var i=new Blob([a.data],{type:a.headers["content-type"]});const c=document.createElement("a");c.href=window.URL.createObjectURL(i),c.download=h.value.country_code+"_users.xlsx",c.click(),D()}catch(a){D(),E(s,a)}}}},components:{UsersTable:Q}},Y={class:"flex justify-content-between align-items-center"},Z={class:"uppercase"},ee={key:0},oe={key:1};function te(v,s,g,l,h,U){const i=m("Button"),a=m("UsersTable"),c=m("Card");return f(),b("div",null,[t(c,null,{content:p(()=>[S("div",Y,[S("h1",Z,[l.totalUser==1?(f(),b("span",ee," 1 User")):(f(),b("span",oe,j(l.totalUser)+" Users",1))]),S("div",null,[t(i,{label:"Download",icon:"pi pi-download",class:"mb-3 mr-3 p-button-outlined",onClick:s[0]||(s[0]=u=>l.downloadFile())}),t(i,{label:"user",onClick:s[1]||(s[1]=u=>v.$router.push("/user-detail")),icon:"pi pi-plus",class:"mb-3"})])]),t(a)]),_:1})])}const me=K(X,[["render",te]]);export{me as default};