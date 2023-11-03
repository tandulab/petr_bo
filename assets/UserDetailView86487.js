import{r as c,q as $,af as ee,u as le,c as b,n as se,a as oe,_ as te,b as _,e as v,f as y,g as l,h as t,i as ae,j as V,B as U,m as T,C as h}from"./usetoast.esm86487.js";import{e as x,a as k,s as F,h as u}from"./helpers86487.js";import{u as ne}from"./user86487.js";import{u as ie}from"./useconfirm.esm86487.js";const de={setup(){const L=c({icon:"pi pi-home",to:"/users"}),s=c(""),S=c([{label:""}]),e=c({}),N=c([{label:"Enabled",value:!0},{label:"Disabled",value:!1}]),I=c(),C=c(!1),g=$(),i=ee(),n=ne(),p=le(),R=ie(),j=c(!1),z=c(!1),o=c(!1),f=c(!1),d=b(()=>n.getCurrentUser),A=b(()=>n.userRoles),m=b(()=>n.allUsers),q=b(()=>p.getUserCountryId),M=b(()=>p.getSelectedCountry),w=b(()=>n.getResponseCredentials),B=async function(a){F(),n.fetchUserDetail(a).then(()=>{u(),H()}).catch(r=>{u(),x(i,r)})},O=async function(a){const r=new Map;a&&r.set("sellout_code",a.query),r.set("country_id",q.value),e.value.role=="user"?r.set("role","agent"):e.value.role=="agent"?r.set("role","dealer"):e.value.role=="dealer"&&r.set("role","vendor"),await n.fetchAllUsers(r).catch(D=>{x(i,D)})},Y=async function(){var D;e.value.parent&&(e.value.parent_id=e.value.parent.id);const a=Object.assign({},e.value);a.email==""&&((D=d.value.email)!=null&&D.includes("fake"))&&(a.email=d.value.email);const r={user:a};n.updateUser(r).then(()=>{u(),B(d.value.id+""),k(i,{message:"User updated correctly.",title:""})}).catch(Z=>{u(),x(i,Z)})},G=async function(){const a={user:e.value};n.createUser(a).then(()=>{u(),B(d.value.id+""),k(i,{message:"User created correctly.",title:""}),oe.push({name:"user-detail",params:{id:d.value.id}})}).catch(r=>{u(),x(i,r)})},H=function(){var a;e.value=Object.assign({},d.value),e.value.country_id=(a=d.value.country)==null?void 0:a.id,delete e.value.country,d.value.email&&d.value.email.includes("fake")&&(e.value.email="")},J=function(){E(e.value.role),E(e.value.sellout_code),E(e.value.company_name)},K=function(){if(C.value=!0,J(),e.value.parent&&(e.value.parent_id=e.value.parent.id),f.value){k(i,{message:"Check that you have completed the required fields.",title:"",error:!0});return}s.value!=""||e.value.id?Y():G(),C.value=!1,F()},E=function(a){if(C.value)return a==""||a==null?f.value=!0:f.value=!1,f.value},Q=async function(){n.disableUser(e.value.id+"",e.value.enabled).then(()=>{u(),e.value.enabled?k(i,{message:"User successfully enabled.",title:""}):k(i,{message:"User successfully disabled.",title:""})}).catch(a=>{u(),x(i,a)})},W=a=>{R.require({group:"credentials",target:a.currentTarget,message:"Are you sure you want to send credentials?",icon:"pi pi-exclamation-triangle"})},X=async function(){F(),await n.sendCredentials(s.value).then(()=>{w.value&&w.value.sent?i.add({summary:"Email sent successfully",detail:"Temporary password: "+w.value.temp_password,closable:!0,severity:"success"}):w.value.sent||i.add({summary:"Email was not sent",detail:"Temporary password: "+w.value.temp_password,closable:!0,severity:"warn"}),P(),u()}).catch(a=>{u(),x(i,a)})},P=function(){var a=document.getElementsByClassName("p-confirm-dialog-reject")[0];a&&a.click()};return se(async()=>{O(null),s.value=g.params.id+"",s.value!=""&&s.value!="undefined"?(B(s.value),S.value[0]={label:"Edit user"}):(S.value[0]={label:"New user"},e.value.country_id=M.value.id)}),{home:L,items:S,tmp_user:e,invalid_cluster:j,invalid_original_sellout_code:z,invalid_phone:o,userAdminRoles:A,filteredUsers:I,allUsers:m,user_status:N,saveUser:K,validateField:E,fetchAllUsers:O,disableUser:Q,confirmSendCredentials:W,sendCredentials:X,closePopup:P}},components:{}};const re={class:"m-4"},ce={class:"flex justify-content-between align-items-center mb-3"},ue={class:"flex align-items-center justify-content-between"},me=l("h2",{class:"mb-2"},"USER DETAILS",-1),_e={key:0,class:"field col-2 mb-0"},pe={class:"formgrid grid col-10 px-0"},fe={class:"field col-6"},ve=l("label",{for:"cluster"},"Cluster*",-1),he={key:0,class:"p-error"},ge={class:"field col-6"},be=l("label",{for:"name"},"Full name",-1),ye={class:"field col-6"},Ve=l("label",{for:"phone"},"Phone",-1),Ue={class:"field col-6"},xe=l("label",{for:"name"},"Email",-1),Ce={class:"field col-6"},we=l("label",{for:"company"},"Company*",-1),ke={key:0,class:"p-error"},Se={class:"field col-6"},Ae=l("label",{for:"name"},"Vat code",-1),Ee=l("div",{class:"flex align-items-center justify-content-between"},[l("h2",{class:"mb-2"},"SELLOUT DATA")],-1),De={class:"formgrid grid col-10 px-0"},Te={class:"field col-6"},Re=l("label",{for:"sellout_code"},"Actual sellout code*",-1),je={key:0,class:"p-error"},ze={class:"field col-6 flex flex-column"},Be=l("label",{for:"original_sellout_code"},"Original sellout code",-1),Fe=l("div",{class:"flex align-items-center justify-content-between"},[l("h2",{class:"mb-2"},"DELIVERY ADDRESS")],-1),Le={class:"formgrid grid col-10 px-0"},Ne={class:"field col-6"},Ie=l("label",{for:"shipping_name"},"Recipient",-1),Oe=l("div",{class:"col-6"},null,-1),Pe={class:"field col-6"},qe=l("label",{for:"shipping_city"},"City",-1),Me={class:"field col-3"},Ye=l("label",{for:"shipping_province"},"Province",-1),Ge={class:"field col-2"},He=l("label",{for:"shipping_zip"},"Cap",-1),Je={class:"field col-6"},Ke=l("label",{for:"shipping_zip"},"Address",-1),Qe={class:"field col-3"},We=l("label",{for:"shipping_number"},"Number",-1),Xe={class:"field col-12"},Ze=l("label",{for:"shipping_note"},"Note",-1),$e=l("div",{class:"flex align-items-center justify-content-between"},[l("h2",{class:"mb-2"},"MORE DATA")],-1),el={class:"formgrid grid col-10 px-0"},ll={class:"field col-6 flex flex-column"},sl=l("label",{for:"original_sellout_code"},"User parent",-1),ol=l("div",{class:"col-6"},null,-1),tl={key:0},al=l("div",{class:"flex align-items-center justify-content-between col-12"},[l("h2",{class:"mb-3"},"PARENT DETAIL")],-1),nl={class:"field flex col-12"},il=l("div",{class:"flex flex-column mr-2 line-height-3"},[l("span",{class:"mb-1"},"Sellout code: "),l("span",{class:"mb-1"},"Company:"),l("span",{class:"mb-1"},"Email: "),l("span",{class:"mb-1"},"Role:")],-1),dl={class:"flex flex-column line-height-3"},rl={class:"mb-1"},cl={class:"mb-1"},ul={class:"mb-1"},ml={class:"capitalize"},_l={class:"flex p-3 align-items-center"},pl={class:"pl-2"},fl={class:"flex align-items-center pb-3 justify-content-end"};function vl(L,s,S,e,N,I){const C=_("Breadcrumb"),g=_("Button"),i=_("Dropdown"),n=_("InputText"),p=_("Card"),R=_("Textarea"),j=_("AutoComplete"),z=_("ConfirmPopup");return v(),y("div",re,[l("div",ce,[t(C,{home:e.home,model:e.items,class:"mt-0 p-0"},null,8,["home","model"]),l("div",null,[e.tmp_user.id?(v(),ae(g,{key:0,label:"Send credentials",onClick:s[0]||(s[0]=o=>e.confirmSendCredentials(o)),class:"p-button-outlined mr-3",icon:"pi pi-envelope"})):V("",!0),t(g,{label:"Save",onClick:e.saveUser},null,8,["onClick"])])]),t(p,null,{content:U(()=>[l("div",ue,[me,e.tmp_user.id?(v(),y("div",_e,[t(i,{modelValue:e.tmp_user.enabled,"onUpdate:modelValue":s[1]||(s[1]=o=>e.tmp_user.enabled=o),options:e.user_status,class:"w-full capitalize dropdown-status",optionLabel:"label",optionValue:"value",onChange:s[2]||(s[2]=o=>e.disableUser())},null,8,["modelValue","options"])])):V("",!0)]),l("div",pe,[l("div",fe,[ve,t(i,{modelValue:e.tmp_user.role,"onUpdate:modelValue":s[3]||(s[3]=o=>e.tmp_user.role=o),options:e.userAdminRoles,optionLabel:"name",optionValue:"value",id:"cluster",class:T(["w-full",{"p-invalid":e.validateField(e.tmp_user.role)}])},null,8,["modelValue","options","class"]),e.validateField(e.tmp_user.role)?(v(),y("small",he,"Campo obbligatorio.")):V("",!0)]),l("div",ge,[be,t(n,{id:"name",type:"text",modelValue:e.tmp_user.full_name,"onUpdate:modelValue":s[4]||(s[4]=o=>e.tmp_user.full_name=o),class:"w-full"},null,8,["modelValue"])]),l("div",ye,[Ve,t(n,{id:"phone",type:"text",modelValue:e.tmp_user.phone,"onUpdate:modelValue":s[5]||(s[5]=o=>e.tmp_user.phone=o),class:"w-full"},null,8,["modelValue"])]),l("div",Ue,[xe,t(n,{id:"name",type:"text",modelValue:e.tmp_user.email,"onUpdate:modelValue":s[6]||(s[6]=o=>e.tmp_user.email=o),class:"w-full"},null,8,["modelValue"])]),l("div",Ce,[we,t(n,{id:"company_name",type:"text",modelValue:e.tmp_user.company_name,"onUpdate:modelValue":s[7]||(s[7]=o=>e.tmp_user.company_name=o),class:T(["w-full",{"p-invalid":e.validateField(e.tmp_user.company_name)}])},null,8,["modelValue","class"]),e.validateField(e.tmp_user.company_name)?(v(),y("small",ke,"Campo obbligatorio.")):V("",!0)]),l("div",Se,[Ae,t(n,{id:"name",type:"text",modelValue:e.tmp_user.vat_cf,"onUpdate:modelValue":s[8]||(s[8]=o=>e.tmp_user.vat_cf=o),class:"w-full"},null,8,["modelValue"])])])]),_:1}),t(p,{class:"mt-4"},{content:U(()=>[Ee,l("div",De,[l("div",Te,[Re,t(n,{id:"sellout_code",type:"text",modelValue:e.tmp_user.sellout_code,"onUpdate:modelValue":s[9]||(s[9]=o=>e.tmp_user.sellout_code=o),class:T(["w-full",{"p-invalid":e.validateField(e.tmp_user.original_sellout_code)}])},null,8,["modelValue","class"]),e.validateField(e.tmp_user.sellout_code)?(v(),y("small",je,"Campo obbligatorio.")):V("",!0)]),l("div",ze,[Be,t(n,{id:"original_sellout_code",type:"text",modelValue:e.tmp_user.original_sellout_code,"onUpdate:modelValue":s[10]||(s[10]=o=>e.tmp_user.original_sellout_code=o)},null,8,["modelValue"])])])]),_:1}),t(p,{class:"mt-4"},{content:U(()=>[Fe,l("div",Le,[l("div",Ne,[Ie,t(n,{id:"shipping_name",type:"text",modelValue:e.tmp_user.shipping_name,"onUpdate:modelValue":s[11]||(s[11]=o=>e.tmp_user.shipping_name=o),class:"w-full"},null,8,["modelValue"])]),Oe,l("div",Pe,[qe,t(n,{id:"shipping_city",type:"text",modelValue:e.tmp_user.shipping_city,"onUpdate:modelValue":s[12]||(s[12]=o=>e.tmp_user.shipping_city=o),class:"w-full"},null,8,["modelValue"])]),l("div",Me,[Ye,t(n,{id:"shipping_province",type:"text",modelValue:e.tmp_user.shipping_province,"onUpdate:modelValue":s[13]||(s[13]=o=>e.tmp_user.shipping_province=o),class:"w-full"},null,8,["modelValue"])]),l("div",Ge,[He,t(n,{id:"shipping_zip",type:"text",modelValue:e.tmp_user.shipping_zip,"onUpdate:modelValue":s[14]||(s[14]=o=>e.tmp_user.shipping_zip=o),class:"w-full"},null,8,["modelValue"])]),l("div",Je,[Ke,t(n,{id:"shipping_zip",type:"text",modelValue:e.tmp_user.shipping_address,"onUpdate:modelValue":s[15]||(s[15]=o=>e.tmp_user.shipping_address=o),class:"w-full"},null,8,["modelValue"])]),l("div",Qe,[We,t(n,{id:"shipping_number",type:"text",modelValue:e.tmp_user.shipping_number,"onUpdate:modelValue":s[16]||(s[16]=o=>e.tmp_user.shipping_number=o),class:"w-full"},null,8,["modelValue"])]),l("div",Xe,[Ze,t(R,{modelValue:e.tmp_user.shipping_note,"onUpdate:modelValue":s[17]||(s[17]=o=>e.tmp_user.shipping_note=o),rows:"5",cols:"30",class:"w-full"},null,8,["modelValue"])])])]),_:1}),t(p,{class:"mt-4"},{content:U(()=>{var o,f,d,A;return[$e,l("div",el,[l("div",ll,[sl,t(j,{modelValue:e.tmp_user.parent,"onUpdate:modelValue":s[18]||(s[18]=m=>e.tmp_user.parent=m),suggestions:e.allUsers,onComplete:s[19]||(s[19]=m=>e.fetchAllUsers(m)),optionLabel:"sellout_code",optionValude:"id",emptySearchMessage:"Nessun risultato",emptySelectionMessage:"Nessun risultato",disabled:!e.tmp_user.role,placeholder:"Search by sellout code"},{item:U(m=>[l("div",null,h(m.item.sellout_code)+" - "+h(m.item.company_name),1)]),_:1},8,["modelValue","suggestions","disabled"])]),ol,e.tmp_user.parent?(v(),y("div",tl,[al,l("div",nl,[il,l("div",dl,[l("span",rl,h(((o=e.tmp_user.parent)==null?void 0:o.sellout_code)||"-"),1),l("span",cl,h(((f=e.tmp_user.parent)==null?void 0:f.company_name)||"-"),1),l("span",ul,h(((d=e.tmp_user.parent)==null?void 0:d.email)||"-"),1),l("span",ml,h(((A=e.tmp_user.parent)==null?void 0:A.role)||"-"),1)])])])):V("",!0)])]}),_:1}),t(z,{group:"credentials",id:"credentials"},{message:U(o=>[l("div",_l,[l("i",{class:T(o.message.icon),style:{"font-size":"1.5rem"}},null,2),l("p",pl,h(o.message.message),1)]),l("div",fl,[t(g,{label:"Cancel",class:"mr-3 p-button-text text-500",onClick:e.closePopup},null,8,["onClick"]),t(g,{label:"Send",class:"mr-4",onClick:e.sendCredentials},null,8,["onClick"])])]),_:1})])}const Vl=te(de,[["render",vl]]);export{Vl as default};
