import{_ as z,L as D,Q as T,r as g,o as a,c as l,a as r,w as p,T as v,b as y,v as M,d as e,e as _,f as c,t as u,g as V,h as w,F as x,i as b,j as $,V as j}from"./_plugin-vue_export-helper.81265c22.js";const B={data(){return{file_info:[],status:!1,list_s:!1,page_status:!1,over_page:!1,qr_val:"",code:"",rec_code:"",rec_msg:{},file_list_head:["\u6587\u4EF6\u540D","\u5927\u5C0F"]}},mounted(){const s=document.getElementById("drag");s.addEventListener("dragenter",t=>{t.preventDefault(),this.over_page=!0}),s.addEventListener("dragleave",t=>{t.preventDefault(),(t.clientX<=0||t.clientY<=0||t.clientX>=window.innerWidth||t.clientY>=window.innerHeight)&&(this.over_page=!1,console.log("leave"))}),s.addEventListener("dragover",t=>{t.preventDefault(),t.dataTransfer.dropEffect="copy"}),s.addEventListener("drop",t=>{t.preventDefault(),this.drop_upload(t)})},watch:{rec_code(s){s.length==5&&fetch(`/code?query=${s}`).then(t=>{if(t.ok)return t.json();throw t}).then(t=>{this.page_status="code_succ_page",this.rec_msg=t.link}).catch(async t=>{let i=await t.json();return mdui.alert(i.link)})}},methods:{file(){let s=this.$refs.inp;this.list_s=!0;for(let i=0;i<s.files.length;i++)if(s.files[i].size>26214400)return alert("\u6587\u4EF6\u5927\u4E8E25MB");let t=new FormData;for(let i=0;i<s.files.length;i++)t.append("file",s.files[i]),this.status=!0;setTimeout(()=>{fetch("/api",{method:"POST",body:t}).then(i=>{if(i.ok)return i.json();throw i}).then(i=>{this.status=!1,this.list_s=!0;for(let o=0;o<i.msg.length;o++)this.file_info.push(i.msg[o])})},600)},assign(s){window.location.assign(s)},doCopy(s){this.$copyText(s).then(()=>{mdui.alert("\u590D\u5236\u6210\u529F")},()=>{mdui.alert("\u5931\u8D25")})},date(s){const t=new Date(s).getMonth()+1;return new Date(s).getFullYear()+"-"+t+"-"+new Date(s).getDate()+" "+new Date(s).getHours()+":"+new Date(s).getMinutes()},qrcode(s){this.qr_val=s,this.page_status="qrcode"},share_code(s){this.code=s,this.page_status="code_out"},drop_upload(s){const t=s.dataTransfer.files;this.list_s=!0,this.over_page=!1;for(let o=0;o<t.length;o++)if(t[o].size>26214400)return alert("\u6587\u4EF6\u5927\u4E8E25MB");let i=new FormData;for(let o=0;o<t.length;o++)i.append("file",t[o]),this.status=!0;setTimeout(()=>{fetch("/api",{method:"POST",body:i}).then(o=>{if(o.ok)return o.json();throw o}).then(o=>{this.status=!1,this.list_s=!0;for(let d=0;d<o.msg.length;d++)this.file_info.push(o.msg[d])})},600)}},components:{Loading:D,QrcodeVue:T}},L={id:"drag",style:{position:"fixed",inset:"0"}},q={style:{position:"fixed",bottom:"0",left:"0",right:"0",top:"0","z-index":"999"}},E=e("div",{style:{"background-color":"white",opacity:"0.5",inset:"0",position:"absolute"}},null,-1),F=e("div",{style:{border:"dashed 2px",top:"50%","text-align":"center","z-index":"999",width:"50%",height:"30%"},class:"center"},[e("div",{style:{"text-align":"center","padding-top":"10%",position:"absolute",width:"100%",height:"100%"},class:"drop_text"})],-1),I=[E,F],N={key:0,style:{"font-weight":"300",top:"20%"},class:"center"},Q=e("br",null,null,-1),S={key:0,class:"mdui-shadow-6 msg"},H={key:1,class:"mdui-shadow-6 msg card"},O=e("div",{style:{"margin-top":"10px","font-size":"x-large","font-weight":"900"}},"\u53D6\u4EF6\u7801",-1),Y={style:{"margin-top":"15%","font-size":"x-large","font-weight":"900","letter-spacing":"5px","text-decoration":"underline","margin-bottom":"15%"}},P={key:2,class:"mdui-shadow-6 msg card"},X=e("div",{style:{"margin-top":"10px","font-size":"x-large","font-weight":"900"}},"\u8BF7\u8F93\u5165\u53D6\u4EF6\u7801",-1),A={class:"mdui-textfield mdui-textfield-floating-label",style:{"margin-top":"15%","margin-bottom":"15%"}},G=e("label",{class:"mdui-textfield-label"},"5\u4F4D\u6570\u5B57\u7801",-1),R={key:3,class:"mdui-shadow-6 msg card"},U={style:{"margin-top":"10px","font-size":"large","overflow-wrap":"break-word","font-weight":"900"}},W={style:{display:"block",margin:"10px"}},J=e("span",null,"\u786E\u8BA4\u4E0B\u8F7D",-1),K=[J],Z={key:0,class:"mdui-table-fluid center",style:{top:"50%",width:"89%",height:"70%"}},tt={class:"mdui-table mdui-table-hoverable",style:{"table-layout":"fixed"}},et={style:{"overflow-wrap":"break-word"}},st={style:{"overflow-wrap":"normal"}},it=["mdui-menu"],ot=["id"],nt={class:"mdui-menu-item",style:{position:"relative"}},at=["onClick"],lt=e("i",{class:"iconfont icon-erweima icon"},null,-1),dt={class:"mdui-menu-item",style:{position:"relative"}},rt=["onClick"],ct=e("i",{class:"iconfont icon-link icon"},null,-1),ut={class:"mdui-menu-item",style:{position:"relative"}},_t=["onClick"],ht=e("i",{class:"iconfont icon-codev1 icon"},null,-1),pt={style:{display:"flex",top:"88%",width:"100%","justify-content":"space-around"},class:"center"},mt={type:"file",ref:"inp",multiple:"",style:{opacity:"0",position:"relative","z-index":"9999"}},ft=e("i",{style:{position:"absolute",left:"15px"}},"\u53D1\u9001\u6587\u4EF6",-1),gt=e("span",null,"\u63A5\u6536\u6587\u4EF6",-1),vt=[gt];function yt(s,t,i,o,d,h){const k=g("Loading"),C=g("QrcodeVue");return a(),l("div",L,[r(v,{name:"loading"},{default:p(()=>[r(k,{active:this.status,loader:"bars",width:"50",height:"50",color:"rgb(0,123,255)"},null,8,["active"])]),_:1}),y(e("div",q,I,512),[[M,d.over_page]]),d.list_s?c("",!0):(a(),l("div",N,[_(" \u6700\u5927\u53EF\u4E0A\u4F2025MB\u5927\u5C0F\u6587\u4EF6,\u5B58\u653E\u65F6\u95F4\u4E3A24H"),Q,_(" \u4E5F\u53EF\u5C06\u6587\u4EF6\u62D6\u62FD\u4E0A\u4F20 ")])),r(w,{"enter-active-class":"animate__animated animate__zoomIn","leave-active-class":"animate__animated animate__fadeOut"},{default:p(()=>[this.page_status=="qrcode"?(a(),l("div",S,[e("li",{onClick:t[0]||(t[0]=n=>this.page_status=!1),class:"iconfont icon-close",style:{display:"block",position:"absolute",left:"100%",top:"-15%","font-size":"25px"}}),r(C,{size:"95",value:this.qr_val},null,8,["value"])])):c("",!0),this.page_status=="code_out"?(a(),l("div",H,[e("li",{onClick:t[1]||(t[1]=n=>this.page_status=!1),class:"iconfont icon-shanchu del"}),O,e("div",Y,u(d.code),1)])):c("",!0),this.page_status=="code_page"?(a(),l("div",P,[e("li",{onClick:t[2]||(t[2]=n=>this.page_status=!1),class:"iconfont icon-shanchu del"}),X,e("div",A,[G,y(e("input",{maxlength:"5",class:"mdui-textfield-input","onUpdate:modelValue":t[3]||(t[3]=n=>this.rec_code=n),style:{"letter-spacing":"5px","text-align":"center","font-size":"x-large","font-weight":"900"},type:"text"},null,512),[[V,this.rec_code]])])])):c("",!0),this.page_status=="code_succ_page"?(a(),l("div",R,[e("li",{onClick:t[4]||(t[4]=n=>this.page_status==!1),class:"iconfont icon-close del"}),e("div",U,u(this.rec_msg.name),1),e("span",W,u(Math.floor(this.rec_msg.size/1024/1024*100)/100)+" MB",1),e("button",{onClick:t[5]||(t[5]=n=>h.assign(this.rec_msg.url)),style:{margin:"10px","border-radius":"10px"},class:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-indigo mdui-text-color-white"},K)])):c("",!0)]),_:1}),r(v,{"enter-active-class":"animate__animated animate__zoomIn"},{default:p(()=>[this.list_s?(a(),l("div",Z,[e("table",tt,[e("thead",null,[e("tr",null,[(a(!0),l(x,null,b(this.file_list_head,n=>(a(),l("th",null,u(n),1))),256))])]),e("tbody",null,[r(w,{"enter-active-class":"animate__animated animate__fadeInRight"},{default:p(()=>[(a(!0),l(x,null,b(this.file_info,(n,m)=>(a(),l("tr",{key:m},[e("td",et,u(n.name),1),e("td",st,u(Math.floor(n.size/1024/1024*100)/100)+" MB ",1),e("td",null,[e("button",{class:"mdui-btn mdui-btn-raised mdui-color-indigo",style:{position:"relative",right:"15px"},"mdui-menu":`{target: '#share_${m}'}`},"\u5206\u4EAB",8,it),e("ul",{class:"mdui-menu",id:"share_"+m},[e("li",nt,[e("a",{href:"javascript:;",onClick:f=>h.qrcode(n.link),class:"mdui-ripple"},[lt,_("\u4E8C\u7EF4\u7801 ")],8,at)]),e("li",dt,[e("a",{href:"javascript:;",onClick:f=>this.doCopy(n.link),class:"mdui-ripple"},[ct,_("\u590D\u5236\u94FE\u63A5 ")],8,rt)]),e("li",ut,[e("a",{href:"javascript:;",onClick:f=>this.share_code(n.code),class:"mdui-ripple"},[ht,_("\u5206\u4EAB\u7801 ")],8,_t)])],8,ot)])]))),128))]),_:1})])])])):c("",!0)]),_:1}),e("div",pt,[e("button",{style:{"border-radius":"10px",width:"10px"},class:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-indigo mdui-text-color-white",onChange:t[6]||(t[6]=(...n)=>h.file&&h.file(...n))},[e("input",mt,null,512),ft],32),e("button",{style:{"border-radius":"10px"},class:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-indigo mdui-text-color-white",onClick:t[7]||(t[7]=n=>this.page_status="code_page")},vt)])])}const wt=z(B,[["render",yt]]);$(wt).use(j).mount("#app");
