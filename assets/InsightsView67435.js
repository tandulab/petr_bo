import{u as ue}from"./user67435.js";import{D as pe}from"./datetime67435.js";import{u as W}from"./useconfirm.esm67435.js";import{r as g,_ as M,b as m,k as _e,o as i,e as c,f as o,x as w,w as H,g as _,F as L,A as O,B as I,i as C,n as X,h as Y,v as V,ac as Z,u as me,p as fe,c as F,a as he,l as ge}from"./usetoast.esm67435.js";import{j as ve,k as xe,s as $,h as S,a as j,e as N,i as ye,l as J,b as be}from"./helpers67435.js";import{u as ke}from"./insight67435.js";import{u as Ce}from"./product67435.js";import{u as we,U as Se}from"./UploadImageCard67435.js";const Ue={props:{target:Object},setup(){const b=W(),t=g({});return{confirm:b,insight:t}}};const De={key:0,class:"insight border-round-lg m-2 border-300 border-solid border-1 p-3 h-full pt-2"},Ve={class:"flex align-items-center justify-content-between mb-2"},ze={class:"my-0"},Fe={key:0},Ie={key:1},Te={class:"actions"},Re={key:0,class:"text-sm"},Be={class:"truncate-products"},Ae={key:0},Ee={key:0},Pe={class:"uppercase"},je={key:1},Ne=o("p",{class:"text-center"},[o("i",null,"Insight not configured")],-1),Le=[Ne];function Oe(b,t,a,e,v,f){const x=m("Button"),h=_e("tooltip");return a.target?(i(),c("div",De,[o("div",Ve,[o("h2",ze,[a.target.quarter==0?(i(),c("span",Fe,"YEAR")):(i(),c("span",Ie,"Q"+w(a.target.quarter),1))]),o("div",Te,[H(_(x,{type:"button","aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-2",icon:"pi pi-pencil",onClick:t[0]||(t[0]=u=>b.$emit("open",a.target))},null,512),[[h,"Edit",void 0,{top:!0}]]),H(_(x,{type:"button","aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-0",icon:"pi ranking-icon",onClick:t[1]||(t[1]=u=>b.$emit("ranking",a.target))},null,512),[[h,"Ranking",void 0,{top:!0}]])])]),a.target.products.length>0||a.target.all_products?(i(),c("div",Re,[o("div",Be,[a.target.all_products?(i(),c("span",Ae," All products ")):(i(!0),c(L,{key:1},O(a.target.products,(u,d)=>(i(),c("span",{key:u.id,class:"mb-1 inline-block mr-1 text-sm"},[d!=0?(i(),c("span",Ee," / ")):C("",!0),I(" "+w(u.name),1)]))),128))]),o("p",null,[I(" Units: "),o("span",Pe,w(a.target.unit),1)])])):(i(),c("div",je,Le))])):C("",!0)}const Me=M(Ue,[["render",Oe]]),qe={props:{title:String,tmp_insight:{}},setup(b,{emit:t}){return X(async()=>{}),{catchEvent:f=>{t("open",f)},catchEventRanking:f=>{t("ranking",f)},catchDetailRanking:f=>{t("detail",f)}}},components:{InsightCard:Me}},Je={class:"flex justify-content-between align-items-center"},Ye={class:"uppercase"},Ge={class:"grid col-12 mb-4"};function Ke(b,t,a,e,v,f){const x=m("InsightCard"),h=m("Card");return i(),Y(h,{class:"mt-4"},{content:V(()=>[o("div",Je,[o("h2",Ye,w(a.title),1)]),o("div",Ge,[(i(!0),c(L,null,O(a.tmp_insight,u=>(i(),c("div",{key:u,class:"flex-1"},[_(x,{target:u,onOpen:t[0]||(t[0]=d=>e.catchEvent(d)),onRanking:t[1]||(t[1]=d=>e.catchEventRanking(d)),onDetail:t[2]||(t[2]=d=>e.catchDetailRanking(d))},null,8,["target"])]))),128))])]),_:1})}const Qe=M(qe,[["render",Ke]]),He={props:{title:String,videoUrl:Boolean},setup(b,t){const a=g({}),e=we(),v=Z(),f=g(),x=d=>{a.value.file_url={},a.value.file=d.files[0]},h=async()=>{const d=a.value.file_url.id;d?($(),await e.deleteAttachment(d).then(()=>{S(),j(v,{message:"File deleted correctly.",title:""}),u()}).catch(T=>{S(),N(v,T)})):u()},u=()=>{a.value={},f.value.files=[]};return t.expose({tmp_file:a,deleteFile:h}),{tmp_file:a,fileUpload:f,onSelectedFiles:x,deleteFile:h,formatSize:ve,getFileName:xe,deleteTmpFile:u}}};const We={class:"flex align-items-center justify-content-between"},Xe={class:"mb-4"},Ze={class:"flex col-10"},$e={class:"col-6 flex-column p-0"},et={key:0,class:"card m-0 flex border-1 surface-border align-items-center justify-content-between pl-4 pr-3 py-3 w-full my-2"},tt={class:"flex align-items-center"},ot=o("i",{class:"pi pi-file text-2xl"},null,-1),st={key:0,class:"flex flex-column ml-2 file",style:{"font-size":"12px"}},nt={class:"mb-1"},lt={key:1,class:"flex flex-column ml-2 file",style:{"font-size":"12px"}},it={class:"mb-1"},at={key:0,class:"text-center"},rt=o("b",null,"Drag and drop file to here to upload.",-1),dt=o("p",{class:"text-xs"},"(Maximum size 2 MB)",-1),ct=[rt,dt];function ut(b,t,a,e,v,f){const x=m("Button"),h=m("FileUpload"),u=m("Card");return i(),Y(u,{class:"mt-4"},{content:V(()=>[o("div",We,[o("h2",Xe,w(a.title),1)]),o("div",Ze,[o("div",$e,[_(h,{name:"file",url:"https://www.primefaces.org/upload.php",multiple:!1,accept:"application/pdf",maxFileSize:2e6,id:"logo",modelValue:e.tmp_file.file,"onUpdate:modelValue":t[1]||(t[1]=d=>e.tmp_file.file=d),customUpload:!0,onSelect:e.onSelectedFiles,onRemove:e.deleteTmpFile,fileLimit:1,ref:"fileUpload"},{content:V(()=>[e.tmp_file.file||e.tmp_file.file_url&&e.tmp_file.file_url.url?(i(),c("div",et,[o("div",tt,[ot,e.tmp_file.file&&e.tmp_file.file.name?(i(),c("div",st,[o("div",nt,w(e.tmp_file.file.name),1),o("div",null,w(e.formatSize(e.tmp_file.file.size)),1)])):C("",!0),e.tmp_file.file_url&&e.tmp_file.file_url.url?(i(),c("div",lt,[o("div",it,w(e.getFileName(e.tmp_file.file_url.url)),1)])):C("",!0)]),_(x,{icon:"pi pi-times sdfsdf",onClick:t[0]||(t[0]=d=>e.deleteFile()),class:"p-button p-component p-button-icon-only p-fileupload-file-remove p-button-text p-button-danger p-button-rounded"})])):C("",!0)]),empty:V(()=>[e.tmp_file.file_url?C("",!0):(i(),c("div",at,ct))]),_:1},8,["modelValue","onSelect","onRemove"])])])]),_:1})}const pt=M(He,[["render",ut]]),_t={setup(){const b=g({icon:"pi pi-home",to:"/dashboard"}),t=g(),a=g([{label:"Dashboard"}]),e=g([]),v=g(),f=g({}),x=g([{name:"KG",value:"kg"},{name:"LT",value:"lt"}]),h=ue(),u=ke(),d=Z(),T=me();W();const l=g({}),U=g(),D=g(),z=g(!1);fe();const R=F(()=>h.userRoles),q=F(()=>u.getCurrentInsights),n=F(()=>T.getSelectedCountry),k=Ce(),A=F(()=>k.allProducts),G=F(()=>u.getNumTarget),ee=F(()=>u.ranking_params),E=async function(){$();const s=new Map;s.set("country_id",n.value.id),s.set("year",v.value),u.fetchAllInsights(s).then(()=>{S(),te()}).catch(r=>{S(),N(d,r)})},te=function(){f.value=Object.assign({},q.value)},oe=function(s){var r;(r=n.value.language_codes)==null||r.forEach(p=>{s.translations[p].description==null&&(s.translations[p].description={text:""}),s.translations[p].short_description==null&&(s.translations[p].short_description={text:""}),s.translations[p].prize==null&&(s.translations[p].prize={text:""})}),s.product_ids=[],s.all_products?s.product_ids=A.value.map(p=>p.id+""):s.products.forEach(p=>{s.product_ids.push(p.id)}),D.value&&s.prize_image_url&&(D.value.tmp_image.image_url=s.prize_image_url),U.value&&s.pdf_url&&(U.value.tmp_file.file_url=s.pdf_url)},se=function(){var Q;const s=new FormData,r={},p=D.value.tmp_image,B=U.value.tmp_file;p&&p.image&&(r.prize_image=p.image),B&&B.file&&(r.pdf=B.file),l.value.all_products?r.all_products=!0:ye(l.value.product_ids,"insight[product_ids][]",s),r.unit=l.value.unit,r.translations={};for(const P in l.value.translations){const y=l.value.translations[P];y.description.id?J(y.description.text,y.description.id):s.append("insight[translations]["+P+"][description]",y.description.text),y.short_description.id?J(y.short_description.text,y.short_description.id):s.append("insight[translations]["+P+"][short_description]",y.short_description.text),y.prize.id?J(y.prize.text,y.prize.id):s.append("insight[translations]["+P+"][prize]",y.prize.text)}return r.translations={},be(s,r,"insight"),l.value.all_products||s.append("insight[all_products]","false"),((Q=l.value.product_ids)==null?void 0:Q.length)==0&&s.append("insight[product_ids]","[]"),s},K=async function(){const s={id:l.value.id,formData:se()};u.updateInsight(s).then(()=>{S(),E(),j(d,{message:"Insight updated correctly.",title:""}),z.value=!1}).catch(r=>{S(),N(d,r)})},ne=s=>{l.value=JSON.parse(JSON.stringify(s)),setTimeout(()=>{oe(l.value)},500),z.value=!0},le=s=>{const r=new FormData;r.append("file",s.files[0]);const p={id:l.value.id,formData:r};u.importTarget(p).then(()=>{S(),E(),G.value?j(d,{message:G.value+" targets uploaded.",title:""}):j(d,{message:"0 teargets uploaded.",title:""})}).catch(B=>{S(),N(d,B)})},ie=s=>{l.value.all_products=s.checked,s.checked?l.value.product_ids=A.value.map(r=>r.id+""):l.value.product_ids=[]},ae=s=>{l.value.all_products=s.value.length===A.value.length},re=s=>{var r=JSON.parse(JSON.stringify(s)),p=r.cluster;p=="user"&&(p="workshop"),p=="dealer"&&(p="distributor"),he.push({name:"ranking",params:{year:r.year,cluster:p,quarter:r.quarter}})},de=()=>{var s,r;l.value.prize_image_url&&D.value.deleteImage((s=l.value.prize_image_url)==null?void 0:s.id),(r=l.value.pdf_url)!=null&&r.id&&U.value.deleteFile(),l.value.all_products=!1,l.value.unit="lt",l.value.product_ids=[],l.value.translations&&l.value.translations.it&&(l.value.translations.it.description.text=" ",l.value.translations.it.prize.text=" ",l.value.translations.it.short_description.text=" "),l.value.translations&&l.value.translations.fr&&(l.value.translations.fr.description.text=" ",l.value.translations.fr.prize.text=" ",l.value.translations.fr.short_description.text=" "),K()},ce=function(){l.value={},z.value=!1};return X(async()=>{v.value=pe.now().toFormat("yyyy"),e.value.push(v.value),e.value.push(+v.value+1),E()}),{date:t,selectedYear:v,years:e,items:a,home:b,tmp_insight:f,dialog_insight:l,uploadPdfCard:U,uploadImageCard:D,units:x,visible:z,userRoles:R,products:A,selectedCountry:n,rankingParamsNavigation:ee,fetchInsights:E,showDialog:ne,onUpload:le,onSelectAllChange:ie,onChange:ae,showRanking:re,updateInsight:K,closeDialog:ce,resetForm:de}},components:{InsightByAudienceCard:Qe,UploadImageCard:Se,UploadPdfCard:pt}};const mt={class:"flex justify-content-between align-items-center mb-3"},ft=o("div",{class:"flex justify-content-between align-items-center"},[o("h1",{class:"uppercase"},"Dashboard")],-1),ht={class:"col-2"},gt={key:0,class:"flex flex-column col-12"},vt={class:"field col-6 mb-0"},xt=o("label",{for:"products"},"Products",-1),yt={class:"flex flex-wrap"},bt={key:0,class:"field col-12 flex flex-column"},kt={class:"uppercase"},Ct=o("i",{style:{"font-size":"12px"}},"ES: Acquista entro il 30 Giugno 200 l di prodotti Syntium o Selenia, in omaggio 1 kit Petronas",-1),wt={key:1,class:"field col-12 flex flex-column"},St={class:"uppercase"},Ut={key:2,class:"field col-12 flex flex-column"},Dt={class:"uppercase"},Vt={class:"field col-12 flex my-0 py-0"},zt={class:"field col-6 upload-file pl-0 my-0 pt-0"},Ft={class:"field col-6 upload-file my-0 pt-0"},It={class:"col-12 flex align-items-center justify-content-between my-0"},Tt={class:"col-6 flex flex-column field my-0"},Rt=o("label",{for:"unit"},"Unit of measurement",-1),Bt={class:"col-6 flex align-items-center justify-content-end"},At=o("a",{href:"https://petronas-adv-test.s3-eu-west-1.amazonaws.com/template_sellout_targets.xlsx",class:"p-button mr-4 p-button-outlined",icon:"pi pi-download"},[o("i",{class:"pi pi-download mr-2"}),I(" TEMPLATE ")],-1),Et={class:"flex justify-content-end"};function Pt(b,t,a,e,v,f){const x=m("Breadcrumb"),h=m("Dropdown"),u=m("Card"),d=m("InsightByAudienceCard"),T=m("MultiSelect"),l=m("Textarea"),U=m("UploadImageCard"),D=m("UploadPdfCard"),z=m("FileUpload"),R=m("Button"),q=m("Dialog");return i(),c("div",null,[o("div",mt,[_(x,{home:e.home,model:e.items,class:"mt-0 p-0"},null,8,["home","model"])]),_(u,null,{content:V(()=>[ft,o("div",ht,[_(h,{modelValue:e.selectedYear,"onUpdate:modelValue":t[0]||(t[0]=n=>e.selectedYear=n),options:e.years,placeholder:"Select a year",class:"w-full md:w-14rem",onChange:t[1]||(t[1]=n=>e.fetchInsights())},null,8,["modelValue","options"])])]),_:1}),(i(!0),c(L,null,O(e.userRoles,n=>(i(),c("div",{key:n.value},[_(d,{title:n.name,tmp_insight:e.tmp_insight[n.value],onOpen:t[2]||(t[2]=k=>e.showDialog(k)),onRanking:t[3]||(t[3]=k=>e.showRanking(k)),class:ge(n.value)},null,8,["title","tmp_insight","class"])]))),128)),_(q,{header:"Insight",style:{width:"80vw"},class:"insight",visible:e.visible,"onUpdate:visible":t[11]||(t[11]=n=>e.visible=n),modal:""},{footer:V(()=>[o("div",Et,[e.dialog_insight.id?(i(),Y(R,{key:0,label:"Reset",class:"mr-3 p-button-text",onClick:t[8]||(t[8]=n=>e.resetForm())})):C("",!0),_(R,{label:"Cancel",class:"mr-3 p-button-outlined",onClick:t[9]||(t[9]=n=>e.closeDialog())}),_(R,{label:"Save",onClick:t[10]||(t[10]=n=>e.updateInsight())})])]),default:V(()=>[e.dialog_insight&&e.dialog_insight.translations?(i(),c("div",gt,[o("div",vt,[xt,_(T,{modelValue:e.dialog_insight.product_ids,"onUpdate:modelValue":t[4]||(t[4]=n=>e.dialog_insight.product_ids=n),options:e.products,optionLabel:"name",optionValue:"id",class:"w-full capitalize",selectAll:e.dialog_insight.all_products,maxSelectedLabels:10,display:"chip",onSelectallChange:t[5]||(t[5]=n=>e.onSelectAllChange(n)),onChange:t[6]||(t[6]=n=>e.onChange(n))},null,8,["modelValue","options","selectAll"])]),o("div",yt,[(i(!0),c(L,null,O(e.selectedCountry.language_codes,n=>(i(),c("div",{key:n,class:"col-6 p-0"},[e.dialog_insight.translations[n].short_description?(i(),c("div",bt,[o("label",null,[I("Short Description "),o("span",kt,"("+w(n)+")",1)]),Ct,_(l,{modelValue:e.dialog_insight.translations[n].short_description.text,"onUpdate:modelValue":k=>e.dialog_insight.translations[n].short_description.text=k,maxlength:"210"},null,8,["modelValue","onUpdate:modelValue"])])):C("",!0),e.dialog_insight.translations[n].description?(i(),c("div",wt,[o("label",null,[I("Description "),o("span",St,"("+w(n)+")",1)]),_(l,{modelValue:e.dialog_insight.translations[n].description.text,"onUpdate:modelValue":k=>e.dialog_insight.translations[n].description.text=k,style:{height:"100px"}},null,8,["modelValue","onUpdate:modelValue"])])):C("",!0),e.dialog_insight.translations[n].prize?(i(),c("div",Ut,[o("label",null,[I("Prize Description "),o("span",Dt,"("+w(n)+")",1)]),_(l,{modelValue:e.dialog_insight.translations[n].prize.text,"onUpdate:modelValue":k=>e.dialog_insight.translations[n].prize.text=k,style:{height:"100px"}},null,8,["modelValue","onUpdate:modelValue"])])):C("",!0)]))),128))]),o("div",Vt,[o("div",zt,[_(U,{title:"Prize image",ref:"uploadImageCard",videoUrl:!1},null,512)]),o("div",Ft,[_(D,{title:"Folder",ref:"uploadPdfCard",videoUrl:!1},null,512)])]),o("div",It,[o("div",Tt,[Rt,_(h,{modelValue:e.dialog_insight.unit,"onUpdate:modelValue":t[7]||(t[7]=n=>e.dialog_insight.unit=n),options:e.units,optionLabel:"name",optionValue:"value",placeholder:"Select a unit",class:"w-full md:w-14rem",id:"unit"},null,8,["modelValue","options"])]),o("div",Bt,[At,_(z,{mode:"basic",name:"demo[]",url:"./upload.php",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",maxFileSize:1e6,onUploader:e.onUpload,customUpload:"",auto:!0,chooseLabel:"Import Target"},null,8,["onUploader"])])])])):C("",!0)]),_:1},8,["visible"])])}const Gt=M(_t,[["render",Pt]]);export{Gt as default};
