import{e as V}from"./helpers40966.js";import{ab as k,u as w,c as _,r as u,ac as A,_ as G,b as m,o as y,h as U,v as I,f as s,g as p}from"./usetoast.esm40966.js";import{u as M}from"./group40966.js";import{u as B}from"./user40966.js";const N={setup(v,t){k(()=>{S()});const i=M(),e=B(),f=w(),g=_(()=>i.allGroups),d=_(()=>e.userRoles),c=_(()=>f.getSelectedCountry),a=u(!0),o=u(!0),n=u(!0),l=u({}),h=A(),C=function(b,r){switch(b){case 1:{r?(l.value.target_clusters=[],l.value.target_group_ids=[],a.value=!1,n.value=!1):(n.value=!0,a.value=!0);break}case 2:{r?(a.value=!1,l.value.target_group_ids=[],l.value.target_all=!1):a.value=!0;break}case 3:{r?(n.value=!1,l.value.target_clusters=[],l.value.target_all=!1):n.value=!0;break}}};t.expose({tmp_audience:l});const S=async function(b){const r=new Map;r.set("country_id",c.value.id),await i.fetchAllGroups(r).catch(x=>{V(h,x)})};return{allGroups:g,showSelectGroups:a,showCheckboxAll:o,showSelectClusters:n,tmp_audience:l,userRoles:d,setSelected:C}}},R=s("div",{class:"flex align-items-center justify-content-between"},[s("h2",{class:"mb-0"},"AUDIENCE")],-1),z={class:"formgrid grid col-10 px-0 align-items-center"},E={class:"field col-2 mt-4 mb-0"},L={class:"field-checkbox"},j=s("label",{for:"binary"},"All users",-1),D={class:"field col-4 flex flex-column"},T=s("label",{for:"cluster"},"Cluster",-1),q={class:"field col-4 flex flex-column"},F=s("label",{for:"cluster"},"Groups",-1);function H(v,t,i,e,f,g){const d=m("Checkbox"),c=m("MultiSelect"),a=m("Card");return y(),U(a,{class:"mt-4"},{content:I(()=>[R,s("div",z,[s("div",E,[s("div",L,[p(d,{inputId:"binary",modelValue:e.tmp_audience.target_all,"onUpdate:modelValue":t[0]||(t[0]=o=>e.tmp_audience.target_all=o),binary:!0,disabled:!e.showCheckboxAll,onChange:t[1]||(t[1]=o=>e.setSelected(1,e.tmp_audience.target_all))},null,8,["modelValue","disabled"]),j])]),s("div",D,[T,p(c,{id:"cluster",modelValue:e.tmp_audience.target_clusters,"onUpdate:modelValue":t[2]||(t[2]=o=>e.tmp_audience.target_clusters=o),options:e.userRoles,class:"capitalize",optionLabel:"name",optionValue:"value",disabled:!e.showSelectClusters,onChange:t[3]||(t[3]=o=>e.setSelected(2,e.tmp_audience.target_clusters.length>0)),closeIcon:""},null,8,["modelValue","options","disabled"])]),s("div",q,[F,p(c,{id:"cluster",modelValue:e.tmp_audience.target_group_ids,"onUpdate:modelValue":t[4]||(t[4]=o=>e.tmp_audience.target_group_ids=o),options:e.allGroups,class:"capitalize",optionLabel:"name",optionValue:"id",disabled:!e.showSelectGroups,onChange:t[5]||(t[5]=o=>e.setSelected(3,e.tmp_audience.target_group_ids.length>0)),closeIcon:""},null,8,["modelValue","options","disabled"])])])]),_:1})}const Q=G(N,[["render",H]]);export{Q as A};