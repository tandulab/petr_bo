import{r as n,p as Ue,ac as Te,u as De,c as E,n as Ee,a as Ie,_ as Re,b as f,k as Be,o as r,e as v,f as s,g as i,h as I,i as _,v as x,w as M,F as Ne,l as b,B as Y,x as L}from"./usetoast.esm67435.js";import{e as A,a as F,s as H,h as V,u as je,b as Oe,c as Me,d as Pe,f as ze,g as Ge}from"./helpers67435.js";import{u as qe}from"./survey67435.js";import{u as Ye}from"./user67435.js";import{u as He}from"./group67435.js";import{a as K,f as Q}from"./formatData67435.js";import{A as Ke}from"./AudienceCard67435.js";import{U as Qe}from"./UploadImageCard67435.js";import{u as Je}from"./useconfirm.esm67435.js";import{v as J}from"./runtime-dom.esm-bundler67435.js";import"./datetime67435.js";const We={setup(){const W=n({icon:"pi pi-home",to:"/surveys"}),o=n(""),R=n([{label:""}]),e=n({}),X=n(),B=n(!1),P=n(),S=n(!0),g=n(!0),h=n(!0),N=n({}),k=n(),z=n([]),d=n(""),U=n({}),G=n([]),T=n(),D=n(),l=n([{label:"Online",value:!0},{label:"Offline",value:!1}]),w=n(!1),Z=Ue(),u=Te(),ie=Je(),p=qe(),re=De(),ce=He(),de=Ye(),j=n(!1),ue=n({sellout_code:{value:"",matchMode:"contains"},full_name:{value:"",matchMode:"contains"}}),me=n([{label:"Open",value:"open"},{label:"Closed",value:"closed"}]),m=E(()=>p.getCurrentSurvey),q=E(()=>re.getSelectedCountry),ve=E(()=>p.allSurveys),_e=E(()=>de.userRoles),ye=E(()=>ce.allGroups),O=async function(t){H(),p.fetchSurveyDetail(t).then(()=>{V(),ge()}).catch(a=>{V(),A(u,a)})},$=async function(){const t=new Map;await p.fetchAllSurveys(t).catch(a=>{A(u,a)})},fe=async function(){const t={id:e.value.id,formData:ee()};p.updateSurvey(t).then(()=>{V(),w.value?le():(O(e.value.id+""),F(u,{message:"Survey updated correctly.",title:""}))}).catch(a=>{V(),A(u,a)})},ee=function(){var y;const t=new FormData,a=Object.assign({},e.value);a.active_from=K(e.value.active_from),a.active_to=K(e.value.active_to),a.hidden_at=K(e.value.hidden_at),a.country_id=(y=a.country)==null?void 0:y.id,delete a.country,(o.value||a.id)&&je(m,a);const c=D.value.tmp_image;c&&c.image&&(a.image=c.image),a.answers=[];for(const oe in e.value.answers){const ne=e.value.answers[oe];ne.id?a.answers.push({}):a.answers.push(ne)}return delete a.target_all,delete a.target_clusters,delete a.target_group_ids,delete a.target_groups,delete a.created_at,delete a.updated_at,delete a.can_edit,delete a.can_delete,Oe(t,a,"survey"),Me(T,t,"survey"),t},pe=async function(){const t={formData:ee()};p.createSurvey(t).then(()=>{V(),O(m.value.id+""),F(u,{message:"Survey created correctly.",title:""}),Ie.push({name:"survey-detail",params:{id:m.value.id}})}).catch(a=>{V(),A(u,a)})},ge=function(){if(m.value){e.value=Object.assign({},m.value),m.value.active_from&&(e.value.active_from=Q(m.value.active_from+"")),m.value.active_to&&(e.value.active_to=Q(m.value.active_to+"")),m.value.hidden_at&&(e.value.hidden_at=Q(m.value.hidden_at+"")),te(),Pe(m,e);for(const t in e.value.answers)for(const a in e.value.answers[+t].translations){const c=e.value.answers[+t];delete c.translations[a].updated_at,delete c.translations[a].created_at}ze(T,e),Ge(D,e)}},he=function(){C(e.value.active_from),C(e.value.active_to),C(e.value.hidden_at),C(e.value.typology),C(e.value.translations[d.value].title),C(e.value.translations[d.value].description),e.value.typology=="closed"&&(!e.value.answers||e.value.answers.length==0)&&C(k.value)},ae=function(){if(B.value=!0,he(),j.value){F(u,{message:"Check that you have completed the required fields.",title:"",error:!0});return}o.value!=""||e.value.id?fe():pe(),B.value=!1,H()},C=function(t){if(B.value)return t==""||t==null?j.value=!0:j.value=!1,j.value},we=function(t,a){switch(t){case 1:{a?(e.value.target_clusters=[],e.value.target_group_ids=[],h.value=!1,g.value=!1):(g.value=!0,h.value=!0);break}case 2:{a?(h.value=!1,e.value.target_group_ids=[]):h.value=!0;break}case 3:{a?(g.value=!1,e.value.target_clusters=[]):g.value=!0;break}}},be=t=>{e.value.image_url="",e.value.image=t.files[0]},Se=function(){var a,c;const t={};(a=e.value.country.language_codes)==null||a.forEach((y,oe)=>{y==d.value,t[y]=k.value}),e.value.answers||(e.value.answers=[]),(c=e.value.answers)==null||c.push({translations:t}),k.value=""},Ce=async function(t,a){t?await p.deleteAnswerFromSurvey(t).then(()=>{F(u,{message:"Answer deleted correctly.",title:""}),e.value.answers.splice(a,1)}).catch(c=>{A(u,c)}):e.value.answers.splice(a,1)},xe=async function(t,a){const c={id:t,text:a};await p.updateAnswer(c).then(()=>{F(u,{message:"Answer update correctly.",title:""})}).catch(y=>{A(u,y)})},Ve=t=>{let{newData:a,index:c}=t;const y=a.translations[d.value].id;y&&xe(y,a.translations[d.value].text)},te=function(){var t;e.value.answers||(e.value.answers=[]),(t=e.value.country.language_codes)==null||t.forEach((a,c)=>{U.value[a]="",c==0&&(d.value=a),G.value.push({field:"lang",header:a})})},ke=function(){return e.value.online?"Status online":"Status offline"},Le=async function(t){if(!(m.value.online&&e.value.online)){if(!m.value.online&&e.value.online){w.value=!0,ae();return}le()}},le=async function(){const t=new Map;t.set("online",e.value.online),t.set("survey_id",e.value.id),await p.changeStatusSurvey(t).then(()=>{O(e.value.id+""),F(u,{message:"Survey status changed correctly",title:""}),w.value=!1})},Ae=t=>{ie.require({group:"push",target:t.currentTarget,message:"Are you sure you want to send the push notification?",icon:"pi pi-exclamation-triangle"})},Fe=async function(){H(),await p.sendPush(o.value).then(()=>{F(u,{message:"Notification sent correctly.",title:"",error:!1}),se(),V()}).catch(t=>{V(),A(u,t)})},se=function(){var t=document.getElementsByClassName("p-confirm-popup-reject")[0];t.click()};return Ee(async()=>{var t,a;$(),o.value=Z.params.id+"",o.value!=""&&o.value!="undefined"?(O(o.value),R.value[0]={label:"Edit survey"}):(R.value[0]={label:"New survey"},e.value.country_id=q.value.id,e.value.country=q.value,e.value.online=!1,d.value=q.value.default_language_code+"",e.value.translations||(e.value.translations={},(a=(t=e.value.country)==null?void 0:t.language_codes)==null||a.forEach(c=>{e.value.translations[c]={title:null,short_description:null,description:null}})))}),{home:W,items:R,tmp_survey:e,filteredSurveys:X,allSurveys:ve,filters:ue,allGroups:ye,newUser:P,showCheckboxAll:S,showSelectClusters:g,showSelectGroups:h,uploadedFile:N,surveyTypology:me,newAnswer:k,editingRows:z,userRoles:_e,selectedLang:d,question:U,audienceCard:T,uploadImageCard:D,survey_status:l,saveSurvey:ae,validateField:C,fetchAllSurveys:$,setSelected:we,onSelectedFiles:be,addAnswer:Se,onRowEditSave:Ve,populateSelectLanguages:te,deleteAnswer:Ce,getTooltipValue:ke,changeStatus:Le,confirmSendPush:Ae,closePopup:se,sendPush:Fe}},components:{AudienceCard:Ke,UploadImageCard:Qe}},Xe={class:"m-4"},Ze={class:"flex justify-content-between align-items-center mb-3"},$e={class:"flex align-items-center justify-content-between"},ea=s("h2",{class:"mb-2"},"SURVEY DETAILS",-1),aa={key:0,class:"field col-2 mb-0"},ta={class:"formgrid grid col-10 px-0"},la={class:"field col-3"},sa=s("label",{for:"name"},"Active from*",-1),oa={key:0,class:"p-error"},na={class:"field col-3"},ia=s("label",{for:"name"},"Active to*",-1),ra={key:0,class:"p-error"},ca={class:"field col-4"},da=s("label",{for:"name"},"Visible until*",-1),ua={key:0,class:"p-error"},ma={class:"flex align-items-center justify-content-between"},va=s("h2",{class:"mb-3"},"SURVEY CONTENT",-1),_a={key:0,class:"formgrid grid col-12 px-0 flex-column"},ya={class:"field col-5 flex flex-column"},fa={for:"title"},pa={class:"uppercase"},ga=s("span",{class:"text-sm font-italic"},"Maximum 210 characters",-1),ha={key:0,class:"p-error"},wa={key:1,class:"flex flex-column formgrid grid"},ba={class:"field col-5"},Sa={for:"note"},Ca={class:"uppercase"},xa={key:0,class:"p-error"},Va={class:"field col-2 flex flex-column"},ka=s("label",{for:"typology"},"Typology*",-1),La={key:0,class:"p-error"},Aa={class:"formgrid grid col-12 px-0 align-items-center"},Fa={key:0,class:"field col-5 flex flex-column mt-3"},Ua={class:"field flex align-items-center"},Ta={class:"field col-8 p-0"},Da={for:"answer"},Ea={class:"uppercase"},Ia={key:0,class:"p-error"},Ra={key:0},Ba={key:1},Na={class:"flex p-4 align-items-center"},ja={class:"pl-2"},Oa={class:"flex p-3 align-items-center"},Ma={class:"pl-2"},Pa={class:"flex align-items-center pb-3 justify-content-end"};function za(W,o,R,e,X,B){const P=f("Breadcrumb"),S=f("Button"),g=f("Dropdown"),h=f("Calendar"),N=f("Card"),k=f("AudienceCard"),z=f("UploadImageCard"),d=f("InputText"),U=f("Column"),G=f("DataTable"),T=f("ConfirmPopup"),D=Be("tooltip");return r(),v(Ne,null,[s("div",Xe,[s("div",Ze,[i(P,{home:e.home,model:e.items,class:"mt-0 p-0"},null,8,["home","model"]),s("div",null,[e.tmp_survey.id?(r(),I(S,{key:0,label:"Send push",onClick:o[0]||(o[0]=l=>e.confirmSendPush(l)),class:"mr-3 p-button-outlined",icon:"pi pi-envelope"})):_("",!0),i(S,{label:"Save",onClick:e.saveSurvey,disabled:!e.tmp_survey.can_edit},null,8,["onClick","disabled"])])]),i(N,null,{content:x(()=>[s("div",$e,[ea,e.tmp_survey.country?(r(),v("div",aa,[i(g,{modelValue:e.tmp_survey.online,"onUpdate:modelValue":o[1]||(o[1]=l=>e.tmp_survey.online=l),options:e.survey_status,optionLabel:"label",optionValue:"value",class:"w-full capitalize dropdown-status",onChange:o[2]||(o[2]=l=>e.changeStatus(l))},null,8,["modelValue","options"])])):_("",!0)]),s("div",ta,[s("div",la,[sa,i(h,{inputId:"dateformat",modelValue:e.tmp_survey.active_from,"onUpdate:modelValue":o[3]||(o[3]=l=>e.tmp_survey.active_from=l),dateFormat:"dd/mm/yy",manualInput:!1,class:b({"p-invalid":e.validateField(e.tmp_survey.active_from)}),placeholder:"gg/mm/aaaa"},null,8,["modelValue","class"]),e.validateField(e.tmp_survey.active_from)?(r(),v("small",oa,"Campo obbligatorio.")):_("",!0)]),s("div",na,[ia,i(h,{inputId:"dateformat",modelValue:e.tmp_survey.active_to,"onUpdate:modelValue":o[4]||(o[4]=l=>e.tmp_survey.active_to=l),dateFormat:"dd/mm/yy",manualInput:!1,class:b({"p-invalid":e.validateField(e.tmp_survey.active_to)})},null,8,["modelValue","class"]),e.validateField(e.tmp_survey.active_to)?(r(),v("small",ra,"Campo obbligatorio.")):_("",!0)]),s("div",ca,[da,i(h,{inputId:"dateformat",modelValue:e.tmp_survey.hidden_at,"onUpdate:modelValue":o[5]||(o[5]=l=>e.tmp_survey.hidden_at=l),dateFormat:"dd/mm/yy",manualInput:!1,class:b({"p-invalid":e.validateField(e.tmp_survey.hidden_at)})},null,8,["modelValue","class"]),e.validateField(e.tmp_survey.hidden_at)?(r(),v("small",ua,"Campo obbligatorio.")):_("",!0)])])]),_:1}),M(i(k,{ref:"audienceCard"},null,512),[[J,e.tmp_survey.country]]),M(i(z,{title:"SURVEY IMAGE",videoUrl:!1,ref:"uploadImageCard"},null,512),[[J,e.tmp_survey.country]]),M(i(N,{class:"mt-4"},{content:x(()=>[s("div",ma,[va,e.tmp_survey.country&&e.tmp_survey.country.language_codes&&e.tmp_survey.country.language_codes.length>1?(r(),I(g,{key:0,modelValue:e.selectedLang,"onUpdate:modelValue":o[6]||(o[6]=l=>e.selectedLang=l),options:e.tmp_survey.country.language_codes,class:"capitalize"},null,8,["modelValue","options"])):_("",!0)]),e.tmp_survey&&e.tmp_survey.translations&&e.selectedLang&&e.tmp_survey.translations[e.selectedLang]?(r(),v("div",_a,[s("div",ya,[s("label",fa,[Y("Title* "),s("span",pa,"("+L(e.selectedLang)+")",1)]),i(d,{id:"title",type:"text",modelValue:e.tmp_survey.translations[e.selectedLang].title,"onUpdate:modelValue":o[7]||(o[7]=l=>e.tmp_survey.translations[e.selectedLang].title=l),class:b({"p-invalid":e.validateField(e.tmp_survey.translations[e.selectedLang].title)}),maxlength:"210"},null,8,["modelValue","class"]),ga,e.validateField(e.tmp_survey.translations[e.selectedLang].title)?(r(),v("small",ha,"Campo obbligatorio.")):_("",!0)])])):_("",!0),e.tmp_survey&&e.tmp_survey.translations&&e.selectedLang&&e.tmp_survey.translations[e.selectedLang]?(r(),v("div",wa,[s("div",ba,[s("label",Sa,[Y("Question* "),s("span",Ca,"("+L(e.selectedLang)+")",1)]),i(d,{type:"text",modelValue:e.tmp_survey.translations[e.selectedLang].description,"onUpdate:modelValue":o[8]||(o[8]=l=>e.tmp_survey.translations[e.selectedLang].description=l),class:b(["w-full",{"p-invalid":e.validateField(e.tmp_survey.translations[e.selectedLang].description)}])},null,8,["modelValue","class"]),e.validateField(e.tmp_survey.translations[e.selectedLang].description)?(r(),v("small",xa,"Campo obbligatorio.")):_("",!0)]),s("div",Va,[ka,i(g,{modelValue:e.tmp_survey.typology,"onUpdate:modelValue":o[9]||(o[9]=l=>e.tmp_survey.typology=l),options:e.surveyTypology,optionLabel:"label",optionValue:"value",placeholder:"",class:b(["capitalize",{"p-invalid":e.validateField(e.tmp_survey.typology)}])},null,8,["modelValue","options","class"]),e.validateField(e.tmp_survey.typology)?(r(),v("small",La,"Campo obbligatorio.")):_("",!0)])])):_("",!0),s("div",Aa,[e.tmp_survey.typology=="closed"?(r(),v("div",Fa,[s("div",Ua,[s("div",Ta,[s("label",Da,[Y("Answer* "),s("span",Ea,"("+L(e.selectedLang)+")",1)]),i(d,{type:"text",modelValue:e.newAnswer,"onUpdate:modelValue":o[10]||(o[10]=l=>e.newAnswer=l),class:b(["w-full",{"p-invalid":e.tmp_survey.answers&&e.tmp_survey.answers.length<1&&e.validateField(e.newAnswer)}]),id:"answer"},null,8,["modelValue","class"]),e.tmp_survey.answers&&e.tmp_survey.answers.length<1&&e.validateField(e.newAnswer)?(r(),v("small",Ia,"Campo obbligatorio.")):_("",!0)]),i(S,{label:"Add answer",class:"p-button-outlined ml-3 mt-2",onClick:e.addAnswer,disabled:!e.newAnswer},null,8,["onClick","disabled"])]),e.tmp_survey.answers&&e.tmp_survey.answers.length>0?(r(),I(G,{key:0,value:e.tmp_survey.answers,responsiveLayout:"scroll",editMode:"row",dataKey:"id",editingRows:e.editingRows,"onUpdate:editingRows":o[11]||(o[11]=l=>e.editingRows=l),onRowEditSave:e.onRowEditSave},{default:x(()=>[i(U,{field:"",header:e.selectedLang.toUpperCase()},{body:x(({data:l})=>[l.translations[e.selectedLang]&&(l.translations[e.selectedLang].text||l.translations[e.selectedLang].text=="")?(r(),v("span",Ra,L(l.translations[e.selectedLang].text),1)):(r(),v("span",Ba,L(l.translations[e.selectedLang]),1))]),editor:x(({data:l})=>[l.translations[e.selectedLang]&&(l.translations[e.selectedLang].text||l.translations[e.selectedLang].text=="")?(r(),I(d,{key:0,modelValue:l.translations[e.selectedLang].text,"onUpdate:modelValue":w=>l.translations[e.selectedLang].text=w,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])):(r(),I(d,{key:1,modelValue:l.translations[e.selectedLang],"onUpdate:modelValue":w=>l.translations[e.selectedLang]=w},null,8,["modelValue","onUpdate:modelValue"]))]),_:1},8,["header"]),i(U,{rowEditor:!0,style:{width:"10%","min-width":"8rem"},bodyStyle:"text-align:center"}),i(U,{header:"",style:{width:"9rem"},rowEditor:!0},{body:x(({data:l,index:w})=>[M(i(S,{type:"button","aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-trash",onClick:Z=>e.deleteAnswer(l.id,w)},null,8,["onClick"]),[[D,"Delete",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","editingRows","onRowEditSave"])):_("",!0)])):_("",!0)])]),_:1},512),[[J,e.selectedLang]])]),i(T,null,{message:x(l=>[s("div",Na,[s("i",{class:b(l.message.icon),style:{"font-size":"1.5rem"}},null,2),s("p",ja,L(l.message.message),1)])]),_:1}),i(T,{group:"push",id:"push"},{message:x(l=>[s("div",Oa,[s("i",{class:b(l.message.icon),style:{"font-size":"1.5rem"}},null,2),s("p",Ma,L(l.message.message),1)]),s("div",Pa,[i(S,{label:"Cancel",class:"mr-3 p-button-text text-500",onClick:e.closePopup},null,8,["onClick"]),i(S,{label:"Send",class:"mr-4",onClick:e.sendPush},null,8,["onClick"])])]),_:1})],64)}const et=Re(We,[["render",za]]);export{et as default};
