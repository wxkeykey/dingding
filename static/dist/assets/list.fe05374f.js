import{_ as v,L as b,Q as g,r as w,o as i,c as l,a as r,w as _,b as k,g as x,d as a,k as C,f as y,T as h,F as p,i as D,t as u,j as M,V}from"./_plugin-vue_export-helper.81265c22.js";const q={data(){return{list:[],auth:!0,pass:""}},methods:{query(){this.start=!1,fetch(`/query?pass=${this.pass}`,{method:"GET"}).then(e=>{if(e.ok)return e.json();throw e}).then(e=>{this.list=e.keys.filter(t=>t.metadata.date!=null),this.list.sort((t,c)=>(this.auth=!1,c.metadata.date-t.metadata.date))}).catch(async e=>{const t=await e.json();alert(t.info)})},doCopy(e){this.$copyText(e).then(()=>{mdui.alert("\u590D\u5236\u6210\u529F")},()=>{mdui.alert("\u5931\u8D25")})},date(e){const t=new Date(e).getMonth()+1;return new Date(e).getFullYear()+"-"+t+"-"+new Date(e).getDate()+" "+new Date(e).getHours()+":"+new Date(e).getMinutes()},iconOver(e){document.getElementById("list_"+e).style.display="block"},iconLeave(e){document.getElementById("list_"+e).style.display="none"}},components:{Loading:b,QrcodeVue:g}},B={key:0,class:"mdui-textfield mdui-textfield-floating-label center",style:{top:"30%"}},L=a("label",{class:"mdui-textfield-label"},"PASSWORD",-1),T={class:"mdui-container"},E={key:0,class:"mdui-table-fluid center",style:{top:"50%",width:"89%",height:"70%"}},Q={class:"mdui-table mdui-table-hoverable",style:{"table-layout":"fixed"}},j={style:{"overflow-wrap":"break-word"}},z=["onMouseover","onMouseleave"],F=["id"],I=["onClick"];function N(e,t,c,S,n,o){const f=w("QrcodeVue");return i(),l(p,null,[r(h,{name:"loading"},{default:_(()=>[n.auth?(i(),l("div",B,[L,k(a("input",{class:"mdui-textfield-input","onUpdate:modelValue":t[0]||(t[0]=s=>n.pass=s),type:"password",onKeyup:t[1]||(t[1]=C((...s)=>o.query&&o.query(...s),["enter"]))},null,544),[[x,n.pass]]),a("button",{class:"mdui-btn mdui-btn-raised mdui-color-indigo mdui-text-color-white",style:{"margin-top":"10px"},onClick:t[2]||(t[2]=(...s)=>o.query&&o.query(...s))},"\u751F\u6210")])):y("",!0)]),_:1}),a("div",T,[r(h,{"enter-active-class":"animate__animated animate__zoomIn"},{default:_(()=>[n.auth?y("",!0):(i(),l("div",E,[a("table",Q,[a("tbody",null,[(i(!0),l(p,null,D(n.list,(s,d)=>(i(),l("tr",{key:d},[a("td",j,u(s.metadata.name),1),a("td",null,u(o.date(s.metadata.date)),1),a("td",null,u(Math.floor(s.metadata.size/1024/1024*100)/100)+" MB ",1),a("td",null,[a("i",{class:"iconfont icon-erweima icon",onMouseover:m=>o.iconOver(d),onMouseleave:m=>o.iconLeave(d)},[a("div",{id:"list_"+d,style:{display:"none"},class:"mdui-shadow-6 qrcode"},[r(f,{size:"80",value:s.metadata.link},null,8,["value"])],8,F)],40,z),a("button",{class:"mdui-btn mdui-btn-raised mdui-color-indigo",onClick:m=>this.doCopy(s.metadata.link)},"copy",8,I)])]))),128))])])]))]),_:1})])],64)}const O=v(q,[["render",N]]);M(O).use(V).mount("#app");
