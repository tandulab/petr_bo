import{a as D}from"./api.esm67435.js";import{ab as O,p as T,u as N,c as C,ac as B,r as _,a as E,_ as P,b as g,k as q,o as f,e as y,g as l,v as i,B as V,h as K,i as R,x as M,w as S,f as I}from"./usetoast.esm67435.js";import{u as A}from"./insight67435.js";import{e as z,n as L}from"./helpers67435.js";import{w as h}from"./runtime-dom.esm-bundler67435.js";const j={setup(){O(()=>{p.value=!0,c.value={first:0,rows:u.value.rows,sortField:null,sortOrder:null,filters:d.value},D.register("myfilter",(t,s)=>t===s),e()});const o=T(),v=A(),F=N(),n=C(()=>v.getCurrentRanking),x=C(()=>F.getSelectedCountry),U=B(),u=_(),d=_({sellout_code:{value:"",matchMode:"contains"},name:{value:"",matchMode:"contains"},vat_cf:{value:"",matchMode:"contains"},current:{value:"",matchMode:"contains"},target:{value:"",matchMode:"contains"},parent_name:{value:"",matchMode:"contains"},parent_parent_name:{value:"",matchMode:"contains"}}),p=_(!0),c=_(),k=_(0),w=_([{label:"My Filter",value:"myfilter"}]);function e(){p.value=!0;const t=new Map;r(t),t.set("page",c.value.page+1),t.set("per_page",c.value.rows),c.value.sortField&&(c.value.sortOrder==1?t.set("sorted_by",c.value.sortField+"_asc"):t.set("sorted_by",c.value.sortField+"_desc")),setTimeout(()=>{a(t)},Math.random()*1e3+250)}const r=function(t){var s=o.params.cluster;s=="workshop"&&(s="user"),s=="distributor"&&(s="dealer"),o.params.second_user_id?(t.set("parent_id",o.params.second_user_id),s=="dealer"?s="agent":s="user"):o.params.user_id&&(t.set("parent_id",o.params.user_id),s=="dealer"?s="agent":s="user"),t.set("year",o.params.year),t.set("cluster",s),t.set("quarter",o.params.quarter),t.set("country_id",x.value.id)},a=async function(t){await v.getInsightsRanking(t).then(()=>{p.value=!1}).catch(s=>{p.value=!1,z(U,s)})};return{dt:u,responseRanking:n,filters:d,loading:p,totalRecords:k,lazyParams:c,matchModes:w,route:o,toggleEdit:function(t,s){let m={year:o.params.year,cluster:o.params.cluster,quarter:o.params.quarter};t.name&&(m.company=t.name),(t.user_role=="dealer"||o.params.cluster=="agent"&&t.user_role=="agent")&&(m.user_id=t.user_id),t.user_role=="agent"&&o.params.cluster=="distributor"&&(m.user_id=o.params.user_id,m.second_user_id=t.user_id),o.params.cluster=="distributor"&&t.user_role=="agent"&&(m.user_name=t.name,m.company=o.params.company);let b=o.name;s=="ranking-detail"?(b="ranking-detail",t.user_id&&(m.user_id=t.user_id)):o.name=="ranking"?b="sub-ranking":b="ranking",E.push({name:b,params:m})},loadLazyData:e,setParams:r,formatNumber:L}}},G={key:0},H={key:1},J={key:0},Q={key:1},W={key:2},X=I("span",null,"Distributor",-1);function Y(o,v,F,n,x,U){const u=g("Column"),d=g("InputText"),p=g("Button"),c=g("DataTable"),k=g("ConfirmPopup"),w=q("tooltip");return f(),y("div",null,[l(c,{value:n.responseRanking,paginator:!0,rows:30,filters:n.filters,"onUpdate:filters":v[0]||(v[0]=e=>n.filters=e),ref:"dt",dataKey:"id",loading:n.loading,filterDisplay:"row",removableSort:""},{empty:i(()=>[V(" No ranking found. ")]),default:i(()=>[l(u,{header:"#",field:"id",headerStyle:"width:5rem",sortable:""}),l(u,{field:"sellout_code",header:"Sellout code",ref:"sellout_code",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:""},{filter:i(({filterModel:e,filterCallback:r})=>[l(d,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:h(a=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by sellout code"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),l(u,{header:"",field:"name",ref:"name",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:""},{header:i(()=>[n.route.params.cluster=="agent"?(f(),y("span",G,"Agent")):(f(),y("span",H,"Company"))]),filter:i(({filterModel:e,filterCallback:r})=>[l(d,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:h(a=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by company"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),l(u,{header:"Vat code",field:"vat_cf",ref:"vat",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:""},{filter:i(({filterModel:e,filterCallback:r})=>[l(d,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:h(a=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by vat code"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),l(u,{header:"",field:"parent_name",ref:"parent_name",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:""},{header:i(()=>[n.route.params.cluster=="workshop"?(f(),y("span",J,"Agent")):n.route.params.cluster=="agent"?(f(),y("span",Q,"Distributor")):(f(),y("span",W,"Parent company"))]),filter:i(({filterModel:e,filterCallback:r})=>[l(d,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:h(a=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by company"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),n.route.params.cluster=="workshop"?(f(),K(u,{key:0,header:"",field:"parent_parent_name",ref:"parent_parent_name",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:""},{header:i(()=>[X]),filter:i(({filterModel:e,filterCallback:r})=>[l(d,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:h(a=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by distributor"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512)):R("",!0),l(u,{header:"Sell out",field:"current",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:""},{body:i(({data:e})=>[V(M(n.formatNumber(e.current)+"")+" "+M(e.unit),1)]),filter:i(({filterModel:e,filterCallback:r})=>[l(d,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:h(a=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by sell out"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1}),l(u,{header:"Target",field:"target",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:""},{body:i(({data:e})=>[V(M(n.formatNumber(e.target)+"")+" "+M(e.unit),1)]),filter:i(({filterModel:e,filterCallback:r})=>[l(d,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:h(a=>r(),["enter"]),class:"p-column-filter",placeholder:"Filter by target"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1}),l(u,{header:"",style:{width:"9rem"}},{body:i(({data:e})=>[n.responseRanking&&n.responseRanking[0]&&n.responseRanking[0].user_role!="user"?S((f(),K(p,{key:0,type:"button",onClick:r=>n.toggleEdit(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi ranking-icon"},null,8,["onClick"])),[[w,"View ranking",void 0,{top:!0}]]):R("",!0),S(l(p,{type:"button",onClick:r=>n.toggleEdit(e,"ranking-detail"),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-eye"},null,8,["onClick"]),[[w,"View detail",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","filters","loading"]),l(k)])}const re=P(j,[["render",Y]]);export{re as R};
