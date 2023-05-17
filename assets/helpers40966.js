import{ae as g,a9 as f,m as v}from"./usetoast.esm40966.js";class _{static async updateTranslation(t){const s=t.id;return delete t.id,(await g(`/translations/${s}`,t)).data}}const m=f({id:"translation",state:()=>({translation:{}}),getters:{getTranslation:a=>a.translation},actions:{async updateTranslation(a){await _.updateTranslation(a).then(t=>this.translation=t)}}}),d=v(),b=()=>d.hideLoader(),S=()=>d.showLoader();function h(a,t){a.add({detail:t.message,life:3e3,severity:t.error?"error":"success",summary:t.error?"Errore":t.title})}const w=function(a,t){const s=Object.values(t.data.errors).join(`
`);h(a,{message:s,error:!0})},T=function(a,t,s){t&&typeof t=="object"&&!(t instanceof Date)&&!(t instanceof File)?Object.keys(t).forEach(e=>{T(a,t[e],s?`${s}[${e}]`:e)}):t!=null&&t!=""&&a.append(s,t)},p=function(a,t,s){a.forEach(e=>{s.append(t,e)})},x=function(a,t,s){if(a.value.tmp_audience){const e=a.value.tmp_audience.target_clusters,n=a.value.tmp_audience.target_group_ids,o=a.value.tmp_audience.target_all;t.append(s+"[target_all]",o),e&&e.length>0&&p(e,s+"[target_clusters][]",t),n&&n.length>0&&p(n,s+"[target_group_ids][]",t)}},A=function(a,t){if(a.value){a.value.tmp_audience={},a.value.tmp_audience.target_all=t.value.target_all;const s=t.value.target_clusters,e=t.value.target_group_ids;s&&(a.value.tmp_audience.target_clusters=s),e&&(a.value.tmp_audience.target_group_ids=e)}},L=function(a,t){a.value&&(t.value.image_url&&(a.value.tmp_image.image_url=t.value.image_url),t.value.video_url&&(a.value.tmp_image.video_url=t.value.video_url))},M=function(a,t){t.value.translations={};for(const s in a.value.translations)t.value.translations[s]={description:a.value.translations[s].description.text,short_description:a.value.translations[s].short_description.text,title:a.value.translations[s].title.text}},E=a=>{if(a===0)return"0 B";const t=1e3,s=3,e=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(a)/Math.log(t));return parseFloat((a/Math.pow(t,n)).toFixed(s))+" "+e[n]},k=function(a,t){for(const s in a.value.translations)u(t.translations[s].description,a.value.translations[s].description.id),u(t.translations[s].short_description,a.value.translations[s].short_description.id),u(t.translations[s].title,a.value.translations[s].title.id)},u=async function(a,t){const s=m();if(!t)return;const e={id:t,text:a};await s.updateTranslation(e).catch(n=>{})},B=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},y=function(a,t){let s="";const e=t.params.year,n=+t.params.quarter,o=t.params.user_id,l=t.params.company,c=t.params.user_name,i=t.params.cluster+"";let r="";t.name=="ranking"?r="sub-ranking":r="ranking",n==0?s="YEAR":s="Q"+n,a.value.push({label:B(i),to:"/"+r+"/"+e+"/"+i+"/"+n}),a.value.push({label:s,to:"/"+r+"/"+e+"/"+i+"/"+n}),o&&l&&a.value.push({label:l+"",to:"/"+r+"/"+e+"/"+i+"/"+n+"/"+o+"/"+l}),c&&a.value.push({label:c+""})},O=a=>a.substring(a.lastIndexOf("/")+1);export{h as a,T as b,x as c,A as d,w as e,L as f,k as g,b as h,M as i,E as j,O as k,p as l,y as m,S as s,u};