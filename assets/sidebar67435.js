import{_ as o,o as l,e as s,f as t,a9 as i,u as r}from"./usetoast.esm67435.js";const d={},a={width:"68",height:"78",viewBox:"0 0 68 78",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n=t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M45.6645 31.4442L62.6816 1.77295H36.4233C29.1015 1.96795 27.1832 3.42042 24.3937 8.27721C24.3937 8.27721 7.51248 37.7264 7.50376 37.7432C5.40745 41.3532 4.18164 45.5906 4.18164 50.0742C4.18164 58.9492 8.89088 66.715 15.9308 70.9795C19.5693 73.183 23.8371 74.4548 28.3923 74.4548C41.7644 74.4548 52.6045 63.539 52.6045 50.0742C52.6045 45.4614 51.3285 41.149 49.1185 37.471L45.6645 31.4442Z",fill:"#FEFEFE"},null,-1),C=t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M28.1129 78C23.1218 78 18.2302 76.6602 13.968 74.1259C5.74493 69.2353 0.63623 60.3106 0.63623 50.8339C0.63623 46.0161 1.93968 41.2659 4.40487 37.0975H4.40524C4.68753 36.6121 6.65771 33.2375 21.4178 7.95707C24.9495 1.92004 28.1104 0.210321 36.1247 0H36.206H67.9999L49.0728 32.4013L51.65 36.8162C54.228 41.04 55.5908 45.8865 55.5908 50.8339C55.5908 65.8137 43.264 78 28.1129 78Z",fill:"#FEFEFE"},null,-1),c=t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M41.409 50.523C41.409 57.8652 35.4563 63.818 28.1141 63.818C20.7708 63.818 14.8181 57.8652 14.8181 50.523C14.8181 43.1798 20.7708 37.2271 28.1141 37.2271C35.4563 37.2271 41.409 43.1798 41.409 50.523Z",fill:"#00A19C"},null,-1),u=t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M28.3925 68.2436C23.9666 68.2436 19.9102 66.6338 16.7715 63.9714C12.8448 60.6392 10.3496 55.6506 10.3496 50.0731C10.3496 46.7149 11.251 43.5663 12.8281 40.8677C12.8281 40.8677 28.3296 13.8328 28.3874 13.7245L34.4402 24.2609L34.4387 24.262L34.4438 24.2697L43.9481 40.8574C43.9492 40.8626 43.9518 40.8677 43.9532 40.8717C45.5314 43.5714 46.4365 46.7149 46.4365 50.0731C46.4365 60.1086 38.3582 68.2436 28.3925 68.2436ZM36.558 8.00867H51.9534L42.0916 25.2096L38.7313 19.3456L32.4798 8.44405C33.3797 8.13416 34.6041 8.00867 36.558 8.00867ZM45.6648 31.4442L62.6817 1.77295H36.4235C29.1013 1.96795 27.1834 3.42042 24.3935 8.27721C24.3935 8.27721 7.5125 37.7264 7.50342 37.7432C5.40746 41.3532 4.18164 45.5906 4.18164 50.0742C4.18164 58.9492 8.89055 66.715 15.9305 70.9795C19.5691 73.183 23.8373 74.4548 28.3925 74.4548C41.7646 74.4548 52.6044 63.539 52.6044 50.0742C52.6044 45.4614 51.3288 41.149 49.1184 37.471L45.6648 31.4442Z",fill:"#00A19C"},null,-1),_=[n,C,c,u];function h(e,S){return l(),s("svg",a,_)}const L=o(d,[["render",h]]),f=function(){return localStorage.getItem("sidebar")!=null?!!localStorage.getItem("sidebar"):(localStorage.getItem("user")!=null&&r().logout(),!1)},b=i({id:"sidebar",state:()=>({_showSidebar:f()}),getters:{showSidebar:e=>e._showSidebar},actions:{setSidebarVisibility(e){this.updateSidebar(e)},updateSidebar(e){this._showSidebar=e,localStorage.setItem("sidebar",e+"")}}});export{L,b as u};