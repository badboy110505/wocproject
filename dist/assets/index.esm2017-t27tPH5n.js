import{_ as Ya,C as Ja,r as bi,F as Za,c as Pe,f as tu,d as eu,u as nu,L as wt,v as ru,S as iu,n as su,w as ou,l as _n,x as au}from"./index.esm-Gw7Hybki.js";var uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,jr=jr||{},I=uu||self;function xn(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Be(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function hu(n){return Object.prototype.hasOwnProperty.call(n,ar)&&n[ar]||(n[ar]=++lu)}var ar="closure_uid_"+(1e9*Math.random()>>>0),lu=0;function cu(n,t,e){return n.call.apply(n.bind,arguments)}function du(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Z(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=cu:Z=du,Z.apply(null,arguments)}function rn(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function z(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Dt(){this.s=this.s,this.o=this.o}var fu=0;Dt.prototype.s=!1;Dt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fu!=0)&&hu(this)};Dt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xs=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function zr(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Ui(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(xn(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function tt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var mu=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};I.addEventListener("test",e,t),I.removeEventListener("test",e,t)}catch{}return n}();function Ve(n){return/^[\s\xa0]*$/.test(n)}function Mn(){var n=I.navigator;return n&&(n=n.userAgent)?n:""}function lt(n){return Mn().indexOf(n)!=-1}function Kr(n){return Kr[" "](n),n}Kr[" "]=function(){};function gu(n,t){var e=ah;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var pu=lt("Opera"),Zt=lt("Trident")||lt("MSIE"),Ms=lt("Edge"),Er=Ms||Zt,Os=lt("Gecko")&&!(Mn().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge"))&&!(lt("Trident")||lt("MSIE"))&&!lt("Edge"),_u=Mn().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge");function Ls(){var n=I.document;return n?n.documentMode:void 0}var Tr;t:{var ur="",hr=function(){var n=Mn();if(Os)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ms)return/Edge\/([\d\.]+)/.exec(n);if(Zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(_u)return/WebKit\/(\S+)/.exec(n);if(pu)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(hr&&(ur=hr?hr[1]:""),Zt){var lr=Ls();if(lr!=null&&lr>parseFloat(ur)){Tr=String(lr);break t}}Tr=ur}var vr;if(I.document&&Zt){var qi=Ls();vr=qi||parseInt(Tr,10)||void 0}else vr=void 0;var yu=vr;function Se(n,t){if(tt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Os){t:{try{Kr(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Eu[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Se.$.h.call(this)}}z(Se,tt);var Eu={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),Tu=0;function vu(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++Tu,this.fa=this.ia=!1}function On(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function $r(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Iu(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Fs(n){const t={};for(const e in n)t[e]=n[e];return t}const Bi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bs(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Bi.length;s++)e=Bi[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Ln(n){this.src=n,this.g={},this.h=0}Ln.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ar(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new vu(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Ir(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=xs(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(On(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Ar(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Qr="closure_lm_"+(1e6*Math.random()|0),cr={};function Us(n,t,e,r,i){if(r&&r.once)return Bs(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Us(n,t[s],e,r,i);return null}return e=Hr(e),n&&n[je]?n.O(t,e,Be(r)?!!r.capture:!!r,i):qs(n,t,e,!1,r,i)}function qs(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Be(i)?!!i.capture:!!i,a=Wr(n);if(a||(n[Qr]=a=new Ln(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Au(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)mu||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(zs(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Au(){function n(e){return t.call(n.src,n.listener,e)}const t=wu;return n}function Bs(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Bs(n,t[s],e,r,i);return null}return e=Hr(e),n&&n[je]?n.P(t,e,Be(r)?!!r.capture:!!r,i):qs(n,t,e,!0,r,i)}function js(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)js(n,t[s],e,r,i);else r=Be(r)?!!r.capture:!!r,e=Hr(e),n&&n[je]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Ar(s,e,r,i),-1<e&&(On(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Wr(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Ar(t,e,r,i)),(e=-1<n?t[n]:null)&&Gr(e))}function Gr(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[je])Ir(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(zs(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Wr(t))?(Ir(e,n),e.h==0&&(e.src=null,t[Qr]=null)):On(n)}}}function zs(n){return n in cr?cr[n]:cr[n]="on"+n}function wu(n,t){if(n.fa)n=!0;else{t=new Se(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Gr(n),n=e.call(r,t)}return n}function Wr(n){return n=n[Qr],n instanceof Ln?n:null}var dr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hr(n){return typeof n=="function"?n:(n[dr]||(n[dr]=function(t){return n.handleEvent(t)}),n[dr])}function j(){Dt.call(this),this.i=new Ln(this),this.S=this,this.J=null}z(j,Dt);j.prototype[je]=!0;j.prototype.removeEventListener=function(n,t,e,r){js(this,n,t,e,r)};function W(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new tt(t,n);else if(t instanceof tt)t.target=t.target||n;else{var i=t;t=new tt(r,n),bs(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=sn(o,r,!0,t)&&i}if(o=t.g=n,i=sn(o,r,!0,t)&&i,i=sn(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=sn(o,r,!1,t)&&i}j.prototype.N=function(){if(j.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)On(e[r]);delete n.g[t],n.h--}}this.J=null};j.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};j.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function sn(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&Ir(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xr=I.JSON.stringify;class Ru{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Pu(){var n=Yr;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Vu{constructor(){this.h=this.g=null}add(t,e){const r=Ks.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Ks=new Ru(()=>new Su,n=>n.reset());class Su{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Cu(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Du(n){I.setTimeout(()=>{throw n},0)}let Ce,De=!1,Yr=new Vu,$s=()=>{const n=I.Promise.resolve(void 0);Ce=()=>{n.then(ku)}};var ku=()=>{for(var n;n=Pu();){try{n.h.call(n.g)}catch(e){Du(e)}var t=Ks;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}De=!1};function Fn(n,t){j.call(this),this.h=n||1,this.g=t||I,this.j=Z(this.qb,this),this.l=Date.now()}z(Fn,j);_=Fn.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),W(this,"tick"),this.ga&&(Jr(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jr(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}_.N=function(){Fn.$.N.call(this),Jr(this),delete this.g};function Zr(n,t,e){if(typeof n=="function")e&&(n=Z(n,e));else if(n&&typeof n.handleEvent=="function")n=Z(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(n,t||0)}function Qs(n){n.g=Zr(()=>{n.g=null,n.i&&(n.i=!1,Qs(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Nu extends Dt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Qs(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(n){Dt.call(this),this.h=n,this.g={}}z(ke,Dt);var ji=[];function Gs(n,t,e,r){Array.isArray(e)||(e&&(ji[0]=e.toString()),e=ji);for(var i=0;i<e.length;i++){var s=Us(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Ws(n){$r(n.g,function(t,e){this.g.hasOwnProperty(e)&&Gr(t)},n),n.g={}}ke.prototype.N=function(){ke.$.N.call(this),Ws(this)};ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bn(){this.g=!0}bn.prototype.Ea=function(){this.g=!1};function xu(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var l=h[0];h=h[1];var c=l.split("_");o=2<=c.length&&c[1]=="type"?o+(l+"="+h+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Mu(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Ht(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Lu(n,e)+(r?" "+r:"")})}function Ou(n,t){n.info(function(){return"TIMEOUT: "+t})}bn.prototype.info=function(){};function Lu(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xr(e)}catch{return t}}var Bt={},zi=null;function Un(){return zi=zi||new j}Bt.Ta="serverreachability";function Hs(n){tt.call(this,Bt.Ta,n)}z(Hs,tt);function Ne(n){const t=Un();W(t,new Hs(t))}Bt.STAT_EVENT="statevent";function Xs(n,t){tt.call(this,Bt.STAT_EVENT,n),this.stat=t}z(Xs,tt);function nt(n){const t=Un();W(t,new Xs(t,n))}Bt.Ua="timingevent";function Ys(n,t){tt.call(this,Bt.Ua,n),this.size=t}z(Ys,tt);function ze(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){n()},t)}var qn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Js={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ti(){}ti.prototype.h=null;function Ki(n){return n.h||(n.h=n.i())}function Zs(){}var Ke={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ei(){tt.call(this,"d")}z(ei,tt);function ni(){tt.call(this,"c")}z(ni,tt);var wr;function Bn(){}z(Bn,ti);Bn.prototype.g=function(){return new XMLHttpRequest};Bn.prototype.i=function(){return{}};wr=new Bn;function $e(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new ke(this),this.P=Fu,n=Er?125:void 0,this.V=new Fn(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new to}function to(){this.i=null,this.g="",this.h=!1}var Fu=45e3,eo={},Rr={};_=$e.prototype;_.setTimeout=function(n){this.P=n};function Pr(n,t,e){n.L=1,n.A=zn(It(t)),n.u=e,n.S=!0,no(n,null)}function no(n,t){n.G=Date.now(),Qe(n),n.B=It(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),lo(e.i,"t",r),n.o=0,e=n.l.J,n.h=new to,n.g=No(n.l,e?t:null,!n.u),0<n.O&&(n.M=new Nu(Z(n.Pa,n,n.g),n.O)),Gs(n.U,n.g,"readystatechange",n.nb),t=n.I?Fs(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Ne(),xu(n.j,n.v,n.B,n.m,n.W,n.u)}_.nb=function(n){n=n.target;const t=this.M;t&&ct(n)==3?t.l():this.Pa(n)};_.Pa=function(n){try{if(n==this.g)t:{const l=ct(this.g);var t=this.g.Ia();const c=this.g.da();if(!(3>l)&&(l!=3||Er||this.g&&(this.h.h||this.g.ja()||Wi(this.g)))){this.J||l!=4||t==7||(t==8||0>=c?Ne(3):Ne(2)),jn(this);var e=this.g.da();this.ca=e;e:if(ro(this)){var r=Wi(this.g);n="";var i=r.length,s=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),Te(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Mu(this.j,this.v,this.B,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ve(a)){var h=a;break e}}h=null}if(e=h)Ht(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vr(this,e);else{this.i=!1,this.s=3,nt(12),xt(this),Te(this);break t}}this.S?(io(this,l,o),Er&&this.i&&l==3&&(Gs(this.U,this.V,"tick",this.mb),this.V.start())):(Ht(this.j,this.m,o,null),Vr(this,o)),l==4&&xt(this),this.i&&!this.J&&(l==4?So(this.l,this):(this.i=!1,Qe(this)))}else ih(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),xt(this),Te(this)}}}catch{}finally{}};function ro(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function io(n,t,e){let r=!0,i;for(;!n.J&&n.o<e.length;)if(i=bu(n,e),i==Rr){t==4&&(n.s=4,nt(14),r=!1),Ht(n.j,n.m,null,"[Incomplete Response]");break}else if(i==eo){n.s=4,nt(15),Ht(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Ht(n.j,n.m,i,null),Vr(n,i);ro(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,nt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),ui(t),t.M=!0,nt(11))):(Ht(n.j,n.m,e,"[Invalid Chunked Response]"),xt(n),Te(n))}_.mb=function(){if(this.g){var n=ct(this.g),t=this.g.ja();this.o<t.length&&(jn(this),io(this,n,t),this.i&&n!=4&&Qe(this))}};function bu(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?Rr:(e=Number(t.substring(e,r)),isNaN(e)?eo:(r+=1,r+e>t.length?Rr:(t=t.slice(r,r+e),n.o=r+e,t)))}_.cancel=function(){this.J=!0,xt(this)};function Qe(n){n.Y=Date.now()+n.P,so(n,n.P)}function so(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=ze(Z(n.lb,n),t)}function jn(n){n.C&&(I.clearTimeout(n.C),n.C=null)}_.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(Ou(this.j,this.B),this.L!=2&&(Ne(),nt(17)),xt(this),this.s=2,Te(this)):so(this,this.Y-n)};function Te(n){n.l.H==0||n.J||So(n.l,n)}function xt(n){jn(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Jr(n.V),Ws(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Vr(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Sr(e.i,n))){if(!n.K&&Sr(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Tn(e),Gn(e);else break t;ai(e),nt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=ze(Z(e.ib,e),6e3));if(1>=mo(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Mt(e,11)}else if((n.K||e.g==n)&&Tn(e),!Ve(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(e.V=h[0],h=h[1],e.H==2)if(h[0]=="c"){e.K=h[1],e.pa=h[2];const l=h[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const c=h[4];c!=null&&(e.Ga=c,e.l.info("SVER="+e.Ga));const m=h[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const g=n.g;if(g){const S=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var s=r.i;s.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ri(s,s.h),s.h=null))}if(r.F){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,N(r.I,r.F,R))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=ko(r,r.J?r.pa:null,r.Y),o.K){go(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(jn(a),Qe(a)),r.g=o}else Po(r);0<e.j.length&&Wn(e)}else h[0]!="stop"&&h[0]!="close"||Mt(e,7);else e.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Mt(e,7):oi(e):h[0]!="noop"&&e.h&&e.h.Aa(h),e.A=0)}}Ne(4)}catch{}}function Uu(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(xn(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function qu(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(xn(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function oo(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(xn(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=qu(n),r=Uu(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bu(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ft(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ft){this.h=n.h,yn(this,n.j),this.s=n.s,this.g=n.g,En(this,n.m),this.l=n.l;var t=n.i,e=new xe;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),$i(this,e),this.o=n.o}else n&&(t=String(n).match(ao))?(this.h=!1,yn(this,t[1]||"",!0),this.s=pe(t[2]||""),this.g=pe(t[3]||"",!0),En(this,t[4]),this.l=pe(t[5]||"",!0),$i(this,t[6]||"",!0),this.o=pe(t[7]||"")):(this.h=!1,this.i=new xe(null,this.h))}Ft.prototype.toString=function(){var n=[],t=this.j;t&&n.push(_e(t,Qi,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(_e(t,Qi,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(_e(e,e.charAt(0)=="/"?Ku:zu,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",_e(e,Qu)),n.join("")};function It(n){return new Ft(n)}function yn(n,t,e){n.j=e?pe(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function En(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function $i(n,t,e){t instanceof xe?(n.i=t,Gu(n.i,n.h)):(e||(t=_e(t,$u)),n.i=new xe(t,n.h))}function N(n,t,e){n.i.set(t,e)}function zn(n){return N(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function pe(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function _e(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,ju),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ju(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Qi=/[#\/\?@]/g,zu=/[#\?:]/g,Ku=/[#\?]/g,$u=/[#\?@]/g,Qu=/#/g;function xe(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function kt(n){n.g||(n.g=new Map,n.h=0,n.i&&Bu(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}_=xe.prototype;_.add=function(n,t){kt(this),this.i=null,n=ae(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function uo(n,t){kt(n),t=ae(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function ho(n,t){return kt(n),t=ae(n,t),n.g.has(t)}_.forEach=function(n,t){kt(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};_.ta=function(){kt(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};_.Z=function(n){kt(this);let t=[];if(typeof n=="string")ho(this,n)&&(t=t.concat(this.g.get(ae(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};_.set=function(n,t){return kt(this),this.i=null,n=ae(this,n),ho(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};_.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function lo(n,t,e){uo(n,t),0<e.length&&(n.i=null,n.g.set(ae(n,t),zr(e)),n.h+=e.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function ae(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Gu(n,t){t&&!n.j&&(kt(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(uo(this,r),lo(this,i,e))},n)),n.j=t}var Wu=class{constructor(n,t){this.g=n,this.map=t}};function co(n){this.l=n||Hu,I.PerformanceNavigationTiming?(n=I.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hu=10;function fo(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function mo(n){return n.h?1:n.g?n.g.size:0}function Sr(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function ri(n,t){n.g?n.g.add(t):n.h=t}function go(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}co.prototype.cancel=function(){if(this.i=po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function po(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return zr(n.i)}var Xu=class{stringify(n){return I.JSON.stringify(n,void 0)}parse(n){return I.JSON.parse(n,void 0)}};function Yu(){this.g=new Xu}function Ju(n,t,e){const r=e||"";try{oo(n,function(i,s){let o=i;Be(i)&&(o=Xr(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Zu(n,t){const e=new bn;if(I.Image){const r=new Image;r.onload=rn(on,e,r,"TestLoadImage: loaded",!0,t),r.onerror=rn(on,e,r,"TestLoadImage: error",!1,t),r.onabort=rn(on,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=rn(on,e,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function on(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Kn(n){this.l=n.ec||null,this.j=n.ob||!1}z(Kn,ti);Kn.prototype.g=function(){return new $n(this.l,this.j)};Kn.prototype.i=function(n){return function(){return n}}({});function $n(n,t){j.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=ii,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z($n,j);var ii=0;_=$n.prototype;_.open=function(n,t){if(this.readyState!=ii)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,Me(this)};_.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ge(this)),this.readyState=ii};_.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Me(this)),this.g&&(this.readyState=3,Me(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_o(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function _o(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}_.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Ge(this):Me(this),this.readyState==3&&_o(this)}};_.Za=function(n){this.g&&(this.response=this.responseText=n,Ge(this))};_.Ya=function(n){this.g&&(this.response=n,Ge(this))};_.ka=function(){this.g&&Ge(this)};function Ge(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Me(n)}_.setRequestHeader=function(n,t){this.v.append(n,t)};_.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function Me(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty($n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var th=I.JSON.parse;function O(n){j.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yo,this.L=this.M=!1}z(O,j);var yo="",eh=/^https?$/i,nh=["POST","PUT"];_=O.prototype;_.Oa=function(n){this.M=n};_.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wr.g(),this.C=this.u?Ki(this.u):Ki(wr),this.g.onreadystatechange=Z(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Gi(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=I.FormData&&n instanceof I.FormData,!(0<=xs(nh,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{vo(this),0<this.B&&((this.L=rh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.ua,this)):this.A=Zr(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Gi(this,s)}};function rh(n){return Zt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}_.ua=function(){typeof jr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function Gi(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Eo(n),Qn(n)}function Eo(n){n.F||(n.F=!0,W(n,"complete"),W(n,"error"))}_.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,W(this,"complete"),W(this,"abort"),Qn(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qn(this,!0)),O.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?To(this):this.kb())};_.kb=function(){To(this)};function To(n){if(n.h&&typeof jr<"u"&&(!n.C[1]||ct(n)!=4||n.da()!=2)){if(n.v&&ct(n)==4)Zr(n.La,0,n);else if(W(n,"readystatechange"),ct(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(ao)[1]||null;!i&&I.self&&I.self.location&&(i=I.self.location.protocol.slice(0,-1)),r=!eh.test(i?i.toLowerCase():"")}e=r}if(e)W(n,"complete"),W(n,"success");else{n.m=6;try{var s=2<ct(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Eo(n)}}finally{Qn(n)}}}}function Qn(n,t){if(n.g){vo(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||W(n,"ready");try{e.onreadystatechange=r}catch{}}}function vo(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(I.clearTimeout(n.A),n.A=null)}_.isActive=function(){return!!this.g};function ct(n){return n.g?n.g.readyState:0}_.da=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),th(t)}};function Wi(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case yo:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function ih(n){const t={};n=(n.g&&2<=ct(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Ve(n[r]))continue;var e=Cu(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Iu(t,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Io(n){let t="";return $r(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function si(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Io(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):N(n,t,e))}function fe(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Ao(n){this.Ga=0,this.j=[],this.l=new bn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fe("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fe("baseRetryDelayMs",5e3,n),this.hb=fe("retryDelaySeedMs",1e4,n),this.eb=fe("forwardChannelMaxRetries",2,n),this.xa=fe("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new co(n&&n.concurrentRequestLimit),this.Ja=new Yu,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=Ao.prototype;_.ra=8;_.H=1;function oi(n){if(wo(n),n.H==3){var t=n.W++,e=It(n.I);if(N(e,"SID",n.K),N(e,"RID",t),N(e,"TYPE","terminate"),We(n,e),t=new $e(n,n.l,t),t.L=2,t.A=zn(It(e)),e=!1,I.navigator&&I.navigator.sendBeacon)try{e=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&I.Image&&(new Image().src=t.A,e=!0),e||(t.g=No(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Qe(t)}Do(n)}function Gn(n){n.g&&(ui(n),n.g.cancel(),n.g=null)}function wo(n){Gn(n),n.u&&(I.clearTimeout(n.u),n.u=null),Tn(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&I.clearTimeout(n.m),n.m=null)}function Wn(n){if(!fo(n.i)&&!n.m){n.m=!0;var t=n.Na;Ce||$s(),De||(Ce(),De=!0),Yr.add(t,n),n.C=0}}function sh(n,t){return mo(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=ze(Z(n.Na,n,t),Co(n,n.C)),n.C++,!0)}_.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new $e(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Fs(s),bs(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Ro(this,i,t),e=It(this.I),N(e,"RID",n),N(e,"CVER",22),this.F&&N(e,"X-HTTP-Session-Id",this.F),We(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Io(s)))+"&"+t:this.o&&si(e,this.o,s)),ri(this.i,i),this.bb&&N(e,"TYPE","init"),this.P?(N(e,"$req",t),N(e,"SID","null"),i.aa=!0,Pr(i,e,null)):Pr(i,e,t),this.H=2}}else this.H==3&&(n?Hi(this,n):this.j.length==0||fo(this.i)||Hi(this))};function Hi(n,t){var e;t?e=t.m:e=n.W++;const r=It(n.I);N(r,"SID",n.K),N(r,"RID",e),N(r,"AID",n.V),We(n,r),n.o&&n.s&&si(r,n.o,n.s),e=new $e(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Ro(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ri(n.i,e),Pr(e,r,t)}function We(n,t){n.na&&$r(n.na,function(e,r){N(t,r,e)}),n.h&&oo({},function(e,r){N(t,r,e)})}function Ro(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Z(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let h=i[u].g;const l=i[u].map;if(h-=s,0>h)s=Math.max(0,i[u].g-100),a=!1;else try{Ju(l,o,"req"+h+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Po(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Ce||$s(),De||(Ce(),De=!0),Yr.add(t,n),n.A=0}}function ai(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=ze(Z(n.Ma,n),Co(n,n.A)),n.A++,!0)}_.Ma=function(){if(this.u=null,Vo(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=ze(Z(this.jb,this),n)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Gn(this),Vo(this))};function ui(n){n.B!=null&&(I.clearTimeout(n.B),n.B=null)}function Vo(n){n.g=new $e(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=It(n.wa);N(t,"RID","rpc"),N(t,"SID",n.K),N(t,"AID",n.V),N(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&N(t,"TO",n.qa),N(t,"TYPE","xmlhttp"),We(n,t),n.o&&n.s&&si(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=zn(It(t)),e.u=null,e.S=!0,no(e,n)}_.ib=function(){this.v!=null&&(this.v=null,Gn(this),ai(this),nt(19))};function Tn(n){n.v!=null&&(I.clearTimeout(n.v),n.v=null)}function So(n,t){var e=null;if(n.g==t){Tn(n),ui(n),n.g=null;var r=2}else if(Sr(n.i,t))e=t.F,go(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var i=n.C;r=Un(),W(r,new Ys(r,e)),Wn(n)}else Po(n);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&sh(n,t)||r==2&&ai(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Mt(n,5);break;case 4:Mt(n,10);break;case 3:Mt(n,6);break;default:Mt(n,2)}}}function Co(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Mt(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Z(n.pb,n);e||(e=new Ft("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||yn(e,"https"),zn(e)),Zu(e.toString(),r)}else nt(2);n.H=0,n.h&&n.h.za(t),Do(n),wo(n)}_.pb=function(n){n?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function Do(n){if(n.H=0,n.ma=[],n.h){const t=po(n.i);(t.length!=0||n.j.length!=0)&&(Ui(n.ma,t),Ui(n.ma,n.j),n.i.i.length=0,zr(n.j),n.j.length=0),n.h.ya()}}function ko(n,t,e){var r=e instanceof Ft?It(e):new Ft(e);if(r.g!="")t&&(r.g=t+"."+r.g),En(r,r.m);else{var i=I.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ft(null);r&&yn(s,r),t&&(s.g=t),i&&En(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&N(r,e,t),N(r,"VER",n.ra),We(n,r),r}function No(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new O(new Kn({ob:e})):new O(n.va),t.Oa(n.J),t}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function xo(){}_=xo.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function vn(){if(Zt&&!(10<=Number(yu)))throw Error("Environmental error: no available transport.")}vn.prototype.g=function(n,t){return new it(n,t)};function it(n,t){j.call(this),this.g=new Ao(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Ve(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ve(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new ue(this)}z(it,j);it.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;nt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=ko(n,null,n.Y),Wn(n)};it.prototype.close=function(){oi(this.g)};it.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Xr(n),n=e);t.j.push(new Wu(t.fb++,n)),t.H==3&&Wn(t)};it.prototype.N=function(){this.g.h=null,delete this.j,oi(this.g),delete this.g,it.$.N.call(this)};function Mo(n){ei.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}z(Mo,ei);function Oo(){ni.call(this),this.status=1}z(Oo,ni);function ue(n){this.g=n}z(ue,xo);ue.prototype.Ba=function(){W(this.g,"a")};ue.prototype.Aa=function(n){W(this.g,new Mo(n))};ue.prototype.za=function(n){W(this.g,new Oo)};ue.prototype.ya=function(){W(this.g,"b")};function oh(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ht,oh);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fr(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}ht.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)fr(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){fr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){fr(this,r),i=0;break}}this.h=i,this.i+=t};ht.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function D(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var ah={};function hi(n){return-128<=n&&128>n?gu(n,function(t){return new D([t|0],0>t?-1:0)}):new D([n|0],0>n?-1:0)}function dt(n){if(isNaN(n)||!isFinite(n))return Xt;if(0>n)return Q(dt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Cr;return new D(t,0)}function Lo(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Q(Lo(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=dt(Math.pow(t,8)),r=Xt,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=dt(Math.pow(t,s)),r=r.R(s).add(dt(o))):(r=r.R(e),r=r.add(dt(o)))}return r}var Cr=4294967296,Xt=hi(0),Dr=hi(1),Xi=hi(16777216);_=D.prototype;_.ea=function(){if(st(this))return-Q(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Cr+r)*t,t*=Cr}return n};_.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Et(this))return"0";if(st(this))return"-"+Q(this).toString(n);for(var t=dt(Math.pow(n,6)),e=this,r="";;){var i=An(e,t).g;e=In(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Et(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};_.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Et(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function st(n){return n.h==-1}_.X=function(n){return n=In(this,n),st(n)?-1:Et(n)?0:1};function Q(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new D(e,~n.h).add(Dr)}_.abs=function(){return st(this)?Q(this):this};_.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new D(e,e[e.length-1]&-2147483648?-1:0)};function In(n,t){return n.add(Q(t))}_.R=function(n){if(Et(this)||Et(n))return Xt;if(st(this))return st(n)?Q(this).R(Q(n)):Q(Q(this).R(n));if(st(n))return Q(this.R(Q(n)));if(0>this.X(Xi)&&0>n.X(Xi))return dt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,an(e,2*r+2*i),e[2*r+2*i+1]+=s*u,an(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,an(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,an(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new D(e,0)};function an(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function me(n,t){this.g=n,this.h=t}function An(n,t){if(Et(t))throw Error("division by zero");if(Et(n))return new me(Xt,Xt);if(st(n))return t=An(Q(n),t),new me(Q(t.g),Q(t.h));if(st(t))return t=An(n,Q(t)),new me(Q(t.g),t.h);if(30<n.g.length){if(st(n)||st(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Dr,r=t;0>=r.X(n);)e=Yi(e),r=Yi(r);var i=$t(e,1),s=$t(r,1);for(r=$t(r,2),e=$t(e,2);!Et(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=$t(r,1),e=$t(e,1)}return t=In(n,i.R(t)),new me(i,t)}for(i=Xt;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=dt(e),o=s.R(t);st(o)||0<o.X(n);)e-=r,s=dt(e),o=s.R(t);Et(s)&&(s=Dr),i=i.add(s),n=In(n,o)}return new me(i,n)}_.gb=function(n){return An(this,n).h};_.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new D(e,this.h&n.h)};_.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new D(e,this.h|n.h)};_.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new D(e,this.h^n.h)};function Yi(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new D(e,n.h)}function $t(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new D(i,n.h)}vn.prototype.createWebChannel=vn.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;qn.NO_ERROR=0;qn.TIMEOUT=8;qn.HTTP_ERROR=6;Js.COMPLETE="complete";Zs.EventType=Ke;Ke.OPEN="a";Ke.CLOSE="b";Ke.ERROR="c";Ke.MESSAGE="d";j.prototype.listen=j.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;D.prototype.add=D.prototype.add;D.prototype.multiply=D.prototype.R;D.prototype.modulo=D.prototype.gb;D.prototype.compare=D.prototype.X;D.prototype.toNumber=D.prototype.ea;D.prototype.toString=D.prototype.toString;D.prototype.getBits=D.prototype.D;D.fromNumber=dt;D.fromString=Lo;var uh=function(){return new vn},hh=function(){return Un()},mr=qn,lh=Js,ch=Bt,Ji={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},un=Zs,dh=O,fh=ht,Yt=D;const Zi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let he="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new su("@firebase/firestore");function ge(){return bt.logLevel}function p(n,...t){if(bt.logLevel<=wt.DEBUG){const e=t.map(li);bt.debug(`Firestore (${he}): ${n}`,...e)}}function gt(n,...t){if(bt.logLevel<=wt.ERROR){const e=t.map(li);bt.error(`Firestore (${he}): ${n}`,...e)}}function te(n,...t){if(bt.logLevel<=wt.WARN){const e=t.map(li);bt.warn(`Firestore (${he}): ${n}`,...e)}}function li(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(n="Unexpected state"){const t=`FIRESTORE (${he}) INTERNAL ASSERTION FAILED: `+n;throw gt(t),new Error(t)}function k(n,t){n||T()}function w(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Za{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Y.UNAUTHENTICATED))}shutdown(){}}class gh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ph{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tt)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(k(typeof r.accessToken=="string"),new Fo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new Y(t)}}class _h{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new _h(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Th{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,p("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(k(typeof e.token=="string"),this.R=e.token,new Eh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=vh(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function C(n,t){return n<t?-1:n>t?1:0}function ee(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new q(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new q(0,0))}static max(){return new A(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e,r){e===void 0?e=0:e>t.length&&T(),r===void 0?r=t.length-e:r>t.length-e&&T(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Oe.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Oe?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class x extends Oe{construct(t,e,r){return new x(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new x(e)}static emptyPath(){return new x([])}}const Ih=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends Oe{construct(t,e,r){return new G(t,e,r)}static isValidIdentifier(t){return Ih.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new G(e)}static emptyPath(){return new G([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(x.fromString(t))}static fromName(t){return new E(x.fromString(t).popFirst(5))}static empty(){return new E(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return x.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new x(t.slice()))}}function Ah(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=A.fromTimestamp(r===1e9?new q(e+1,0):new q(e,r));return new Vt(i,E.empty(),t)}function wh(n){return new Vt(n.readTime,n.key,-1)}class Vt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Vt(A.min(),E.empty(),-1)}static max(){return new Vt(A.max(),E.empty(),-1)}}function Rh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=E.comparator(n.documentKey,t.documentKey),e!==0?e:C(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==Ph)throw n;p("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new d((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof d?e:d.resolve(e)}catch(e){return d.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):d.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):d.reject(e)}static resolve(t){return new d((e,r)=>{e(t)})}static reject(t){return new d((e,r)=>{r(t)})}static waitFor(t){return new d((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=d.resolve(!1);for(const r of t)e=e.next(i=>i?d.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new d((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const h=u;e(t[h]).next(l=>{o[h]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new d((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new ve(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=di(r.target.error);this.V.reject(new ve(t,i))}}static open(t,e,r,i){try{return new ci(e,t.transaction(i,r))}catch(s){throw new ve(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Ch(e)}}class Ot{constructor(t,e,r){this.name=t,this.version=e,this.p=r,Ot.S(_n())===12.2&&gt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),Nt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!au())return!1;if(Ot.C())return!0;const t=_n(),e=Ot.S(t),r=0<e&&e<10,i=Ot.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new ve(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ve(t,o))},i.onupgradeneeded=s=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=ci.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),d.reject(h))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,h=u.name!=="FirebaseError"&&o<3;if(p("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Sh{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Nt(this.k.delete())}}class ve extends y{constructor(t,e){super(f.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Xe(n){return n.name==="IndexedDbTransactionError"}class Ch{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(p("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Nt(r)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),Nt(this.store.add(t))}get(t){return Nt(this.store.get(t)).next(e=>(e===void 0&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),Nt(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),Nt(this.store.count())}W(t,e){const r=this.options(t,e),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new d((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new d((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){p("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new d((r,i)=>{e.onerror=s=>{const o=di(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new d((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new Sh(a),h=e(a.primaryKey,a.value,u);if(h instanceof d){const l=h.catch(c=>(u.done(),d.reject(c)));r.push(l)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>d.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Nt(n){return new d((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=di(r.target.error);e(i)}})}let ts=!1;function di(n){const t=Ot.S(_n());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ts||(ts=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}fi._e=-1;function Hn(n){return n==null}function wn(n){return n===0&&1/n==-1/0}function Dh(n){return typeof n=="number"&&Number.isInteger(n)&&!wn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function le(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Uo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,e){this.comparator=t,this.root=e||$.EMPTY}insert(t,e){return new M(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$.BLACK,null,null))}remove(t){return new M(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hn(this.root,t,this.comparator,!1)}getReverseIterator(){return new hn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hn(this.root,t,this.comparator,!0)}}class hn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ${constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??$.RED,this.left=i??$.EMPTY,this.right=s??$.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new $(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return $.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,e,r,i,s){return this}insert(t,e,r){return new $(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.comparator=t,this.data=new M(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ns(this.data.getIterator())}getIteratorFrom(t){return new ns(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof H)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new H(this.comparator);return e.data=t,e}}class ns{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.fields=t,t.sort(G.comparator)}static empty(){return new at([])}unionWith(t){let e=new H(G.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new at(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ee(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qo("Invalid base64 string: "+s):s}}(t);return new et(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new et(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}et.EMPTY_BYTE_STRING=new et("");const kh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(n){if(k(!!n),typeof n=="string"){let t=0;const e=kh.exec(n);if(k(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:b(n.seconds),nanos:b(n.nanos)}}function b(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ut(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function gi(n){const t=n.mapValue.fields.__previous_value__;return mi(t)?gi(t):t}function Le(n){const t=St(n.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,e,r,i,s,o,a,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class Fe{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Fe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Fe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mi(n)?4:xh(n)?9007199254740991:10:T()}function pt(n,t){if(n===t)return!0;const e=qt(n);if(e!==qt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Le(n).isEqual(Le(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=St(i.timestampValue),a=St(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Ut(i.bytesValue).isEqual(Ut(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return b(i.geoPointValue.latitude)===b(s.geoPointValue.latitude)&&b(i.geoPointValue.longitude)===b(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return b(i.integerValue)===b(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=b(i.doubleValue),a=b(s.doubleValue);return o===a?wn(o)===wn(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return ee(n.arrayValue.values||[],t.arrayValue.values||[],pt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(es(o)!==es(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!pt(o[u],a[u])))return!1;return!0}(n,t);default:return T()}}function be(n,t){return(n.values||[]).find(e=>pt(e,t))!==void 0}function ne(n,t){if(n===t)return 0;const e=qt(n),r=qt(t);if(e!==r)return C(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return C(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=b(s.integerValue||s.doubleValue),u=b(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return rs(n.timestampValue,t.timestampValue);case 4:return rs(Le(n),Le(t));case 5:return C(n.stringValue,t.stringValue);case 6:return function(s,o){const a=Ut(s),u=Ut(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let h=0;h<a.length&&h<u.length;h++){const l=C(a[h],u[h]);if(l!==0)return l}return C(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=C(b(s.latitude),b(o.latitude));return a!==0?a:C(b(s.longitude),b(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let h=0;h<a.length&&h<u.length;++h){const l=ne(a[h],u[h]);if(l)return l}return C(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ln.mapValue&&o===ln.mapValue)return 0;if(s===ln.mapValue)return 1;if(o===ln.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),h=o.fields||{},l=Object.keys(h);u.sort(),l.sort();for(let c=0;c<u.length&&c<l.length;++c){const m=C(u[c],l[c]);if(m!==0)return m;const g=ne(a[u[c]],h[l[c]]);if(g!==0)return g}return C(u.length,l.length)}(n.mapValue,t.mapValue);default:throw T()}}function rs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return C(n,t);const e=St(n),r=St(t),i=C(e.seconds,r.seconds);return i!==0?i:C(e.nanos,r.nanos)}function re(n){return kr(n)}function kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=St(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ut(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return E.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=kr(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kr(e.fields[o])}`;return i+"}"}(n.mapValue):T()}function Nr(n){return!!n&&"integerValue"in n}function pi(n){return!!n&&"arrayValue"in n}function is(n){return!!n&&"nullValue"in n}function ss(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fn(n){return!!n&&"mapValue"in n}function Ie(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return le(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ie(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ie(n.arrayValue.values[e]);return t}return Object.assign({},n)}function xh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.value=t}static empty(){return new ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!fn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ie(e)}setAll(t){let e=G.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Ie(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());fn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];fn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){le(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ot(Ie(this.value))}}function Bo(n){const t=[];return le(n.fields,(e,r)=>{const i=new G([e]);if(fn(r)){const s=Bo(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new at(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new J(t,0,A.min(),A.min(),A.min(),ot.empty(),0)}static newFoundDocument(t,e,r,i){return new J(t,1,e,A.min(),r,i,0)}static newNoDocument(t,e){return new J(t,2,e,A.min(),A.min(),ot.empty(),0)}static newUnknownDocument(t,e){return new J(t,3,e,A.min(),A.min(),ot.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof J&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,e){this.position=t,this.inclusive=e}}function os(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),e.key):r=ne(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function as(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!pt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{}class U extends jo{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Lh(t,e,r):e==="array-contains"?new Uh(t,r):e==="in"?new qh(t,r):e==="not-in"?new Bh(t,r):e==="array-contains-any"?new jh(t,r):new U(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Fh(t,r):new bh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ne(e,this.value)):e!==null&&qt(this.value)===qt(e)&&this.matchesComparison(ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _t extends jo{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new _t(t,e)}matches(t){return zo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function zo(n){return n.op==="and"}function Ko(n){return Oh(n)&&zo(n)}function Oh(n){for(const t of n.filters)if(t instanceof _t)return!1;return!0}function xr(n){if(n instanceof U)return n.field.canonicalString()+n.op.toString()+re(n.value);if(Ko(n))return n.filters.map(t=>xr(t)).join(",");{const t=n.filters.map(e=>xr(e)).join(",");return`${n.op}(${t})`}}function $o(n,t){return n instanceof U?function(r,i){return i instanceof U&&r.op===i.op&&r.field.isEqual(i.field)&&pt(r.value,i.value)}(n,t):n instanceof _t?function(r,i){return i instanceof _t&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&$o(o,i.filters[a]),!0):!1}(n,t):void T()}function Qo(n){return n instanceof U?function(e){return`${e.field.canonicalString()} ${e.op} ${re(e.value)}`}(n):n instanceof _t?function(e){return e.op.toString()+" {"+e.getFilters().map(Qo).join(" ,")+"}"}(n):"Filter"}class Lh extends U{constructor(t,e,r){super(t,e,r),this.key=E.fromName(r.referenceValue)}matches(t){const e=E.comparator(t.key,this.key);return this.matchesComparison(e)}}class Fh extends U{constructor(t,e){super(t,"in",e),this.keys=Go("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class bh extends U{constructor(t,e){super(t,"not-in",e),this.keys=Go("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Go(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>E.fromName(r.referenceValue))}class Uh extends U{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return pi(e)&&be(e.arrayValue,this.value)}}class qh extends U{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&be(this.value.arrayValue,e)}}class Bh extends U{constructor(t,e){super(t,"not-in",e)}matches(t){if(be(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!be(this.value.arrayValue,e)}}class jh extends U{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!pi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>be(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function us(n,t=null,e=[],r=[],i=null,s=null,o=null){return new zh(n,t,e,r,i,s,o)}function _i(n){const t=w(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>xr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Hn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>re(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>re(r)).join(",")),t.ce=e}return t.ce}function yi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Mh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!$o(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!as(n.startAt,t.startAt)&&as(n.endAt,t.endAt)}function Mr(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Kh(n,t,e,r,i,s,o,a){return new Xn(n,t,e,r,i,s,o,a)}function Wo(n){return new Xn(n)}function hs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $h(n){return n.collectionGroup!==null}function Ae(n){const t=w(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new H(G.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Pn(s,r))}),e.has(G.keyField().canonicalString())||t.le.push(new Pn(G.keyField(),r))}return t.le}function ft(n){const t=w(n);return t.he||(t.he=Qh(t,Ae(n))),t.he}function Qh(n,t){if(n.limitType==="F")return us(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pn(i.field,s)});const e=n.endAt?new Rn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Rn(n.startAt.position,n.startAt.inclusive):null;return us(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Or(n,t,e){return new Xn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Yn(n,t){return yi(ft(n),ft(t))&&n.limitType===t.limitType}function Ho(n){return`${_i(ft(n))}|lt:${n.limitType}`}function Qt(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Qo(i)).join(", ")}]`),Hn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>re(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>re(i)).join(",")),`Target(${r})`}(ft(n))}; limitType=${n.limitType})`}function Jn(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Ae(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const h=os(o,a,u);return o.inclusive?h<=0:h<0}(r.startAt,Ae(r),i)||r.endAt&&!function(o,a,u){const h=os(o,a,u);return o.inclusive?h>=0:h>0}(r.endAt,Ae(r),i))}(n,t)}function Gh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xo(n){return(t,e)=>{let r=!1;for(const i of Ae(n)){const s=Wh(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Wh(n,t,e){const r=n.field.isKeyField()?E.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),h=a.data.field(s);return u!==null&&h!==null?ne(u,h):T()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){le(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Uo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=new M(E.comparator);function At(){return Hh}const Yo=new M(E.comparator);function ye(...n){let t=Yo;for(const e of n)t=t.insert(e.key,e);return t}function Jo(n){let t=Yo;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Lt(){return we()}function Zo(){return we()}function we(){return new ce(n=>n.toString(),(n,t)=>n.isEqual(t))}const Xh=new M(E.comparator),Yh=new H(E.comparator);function P(...n){let t=Yh;for(const e of n)t=t.add(e);return t}const Jh=new H(C);function Zh(){return Jh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wn(t)?"-0":t}}function ea(n){return{integerValue:""+n}}function tl(n,t){return Dh(t)?ea(t):ta(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this._=void 0}}function el(n,t,e){return n instanceof Vn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mi(s)&&(s=gi(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Ue?ra(n,t):n instanceof qe?ia(n,t):function(i,s){const o=na(i,s),a=ls(o)+ls(i.Ie);return Nr(o)&&Nr(i.Ie)?ea(a):ta(i.serializer,a)}(n,t)}function nl(n,t,e){return n instanceof Ue?ra(n,t):n instanceof qe?ia(n,t):e}function na(n,t){return n instanceof Sn?function(r){return Nr(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Vn extends Zn{}class Ue extends Zn{constructor(t){super(),this.elements=t}}function ra(n,t){const e=sa(t);for(const r of n.elements)e.some(i=>pt(i,r))||e.push(r);return{arrayValue:{values:e}}}class qe extends Zn{constructor(t){super(),this.elements=t}}function ia(n,t){let e=sa(t);for(const r of n.elements)e=e.filter(i=>!pt(i,r));return{arrayValue:{values:e}}}class Sn extends Zn{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function ls(n){return b(n.integerValue||n.doubleValue)}function sa(n){return pi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function rl(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Ue&&i instanceof Ue||r instanceof qe&&i instanceof qe?ee(r.elements,i.elements,pt):r instanceof Sn&&i instanceof Sn?pt(r.Ie,i.Ie):r instanceof Vn&&i instanceof Vn}(n.transform,t.transform)}class il{constructor(t,e){this.version=t,this.transformResults=e}}class vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new vt}static exists(t){return new vt(void 0,t)}static updateTime(t){return new vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class tr{}function oa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ua(n.key,vt.none()):new Ye(n.key,n.data,vt.none());{const e=n.data,r=ot.empty();let i=new H(G.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jt(n.key,r,new at(i.toArray()),vt.none())}}function sl(n,t,e){n instanceof Ye?function(i,s,o){const a=i.value.clone(),u=ds(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof jt?function(i,s,o){if(!mn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ds(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(aa(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Re(n,t,e,r){return n instanceof Ye?function(s,o,a,u){if(!mn(s.precondition,o))return a;const h=s.value.clone(),l=fs(s.fieldTransforms,u,o);return h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof jt?function(s,o,a,u){if(!mn(s.precondition,o))return a;const h=fs(s.fieldTransforms,u,o),l=o.data;return l.setAll(aa(s)),l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(n,t,e,r):function(s,o,a){return mn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function ol(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=na(r.transform,i||null);s!=null&&(e===null&&(e=ot.empty()),e.set(r.field,s))}return e||null}function cs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ee(r,i,(s,o)=>rl(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ye extends tr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jt extends tr{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ds(n,t,e){const r=new Map;k(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,nl(o,a,e[i]))}return r}function fs(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,el(s,o,t))}return r}class ua extends tr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class al extends tr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&sl(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Re(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Re(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Zo();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=oa(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(A.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),P())}isEqual(t){return this.batchId===t.batchId&&ee(this.mutations,t.mutations,(e,r)=>cs(e,r))&&ee(this.baseMutations,t.baseMutations,(e,r)=>cs(e,r))}}class Ei{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){k(t.mutations.length===r.length);let i=function(){return Xh}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ei(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,V;function cl(n){switch(n){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function ha(n){if(n===void 0)return gt("GRPC error has no .code"),f.UNKNOWN;switch(n){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(V=F||(F={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Yt([4294967295,4294967295],0);function ms(n){const t=dl().encode(n),e=new fh;return e.update(t),new Uint8Array(e.digest())}function gs(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Yt([e,r],0),new Yt([i,s],0)]}class Ti{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ee(`Invalid padding: ${e}`);if(r<0)throw new Ee(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ee(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ee(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Yt.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Yt.fromNumber(r)));return i.compare(fl)===1&&(i=new Yt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=ms(t),[r,i]=gs(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Ti(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=ms(t),[r,i]=gs(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ee extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Je.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new er(A.min(),i,new M(C),At(),P())}}class Je{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Je(r,e,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class la{constructor(t,e){this.targetId=t,this.fe=e}}class ca{constructor(t,e,r=et.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ps{constructor(){this.ge=0,this.pe=ys(),this.ye=et.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),e=P(),r=P();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:T()}}),new Je(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=ys()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,k(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class ml{constructor(t){this.Le=t,this.ke=new Map,this.qe=At(),this.Qe=_s(),this.Ke=new M(C)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:T()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(Mr(s))if(r===0){const o=new E(s.path);this.We(e,o,J.newNoDocument(o,A.min()))}else k(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,h)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=Ut(r).toUint8Array()}catch(u){if(u instanceof qo)return te("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ti(o,i,s)}catch(u){return te(u instanceof Ee?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Mr(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,J.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=P();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new er(t,e,this.Ke,this.qe,r);return this.qe=At(),this.Qe=_s(),this.Ke=new M(C),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new ps,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new H(C),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||p("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new ps),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function _s(){return new M(E.comparator)}function ys(){return new M(E.comparator)}const gl={asc:"ASCENDING",desc:"DESCENDING"},pl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_l={and:"AND",or:"OR"};class yl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Lr(n,t){return n.useProto3Json||Hn(t)?t:{value:t}}function Cn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function da(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function El(n,t){return Cn(n,t.toTimestamp())}function mt(n){return k(!!n),A.fromTimestamp(function(e){const r=St(e);return new q(r.seconds,r.nanos)}(n))}function vi(n,t){return Fr(n,t).canonicalString()}function Fr(n,t){const e=function(i){return new x(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function fa(n){const t=x.fromString(n);return k(ya(t)),t}function br(n,t){return vi(n.databaseId,t.path)}function gr(n,t){const e=fa(t);if(e.get(1)!==n.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new E(ga(e))}function ma(n,t){return vi(n.databaseId,t)}function Tl(n){const t=fa(n);return t.length===4?x.emptyPath():ga(t)}function Ur(n){return new x(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ga(n){return k(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Es(n,t,e){return{name:br(n,t),fields:e.value.mapValue.fields}}function vl(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,l){return h.useProto3Json?(k(l===void 0||typeof l=="string"),et.fromBase64String(l||"")):(k(l===void 0||l instanceof Uint8Array),et.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const l=h.code===void 0?f.UNKNOWN:ha(h.code);return new y(l,h.message||"")}(o);e=new ca(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=gr(n,r.document.name),s=mt(r.document.updateTime),o=r.document.createTime?mt(r.document.createTime):A.min(),a=new ot({mapValue:{fields:r.document.fields}}),u=J.newFoundDocument(i,s,o,a),h=r.targetIds||[],l=r.removedTargetIds||[];e=new gn(h,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=gr(n,r.document),s=r.readTime?mt(r.readTime):A.min(),o=J.newNoDocument(i,s),a=r.removedTargetIds||[];e=new gn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=gr(n,r.document),s=r.removedTargetIds||[];e=new gn([],s,i,null)}else{if(!("filter"in t))return T();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ll(i,s),a=r.targetId;e=new la(a,o)}}return e}function Il(n,t){let e;if(t instanceof Ye)e={update:Es(n,t.key,t.value)};else if(t instanceof ua)e={delete:br(n,t.key)};else if(t instanceof jt)e={update:Es(n,t.key,t.data),updateMask:kl(t.fieldMask)};else{if(!(t instanceof al))return T();e={verify:br(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ue)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qe)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Sn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw T()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:El(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(n,t.precondition)),e}function Al(n,t){return n&&n.length>0?(k(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?mt(i.updateTime):mt(s);return o.isEqual(A.min())&&(o=mt(s)),new il(o,i.transformResults||[])}(e,t))):[]}function wl(n,t){return{documents:[ma(n,t.path)]}}function Rl(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ma(n,i);const s=function(h){if(h.length!==0)return _a(_t.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(l=>function(m){return{field:Gt(m.field),direction:Sl(m.dir)}}(l))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Lr(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ut:e,parent:i}}function Pl(n){let t=Tl(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){k(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(c){const m=pa(c);return m instanceof _t&&Ko(m)?m.getFilters():[m]}(e.where));let o=[];e.orderBy&&(o=function(c){return c.map(m=>function(S){return new Pn(Wt(S.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(e.orderBy));let a=null;e.limit&&(a=function(c){let m;return m=typeof c=="object"?c.value:c,Hn(m)?null:m}(e.limit));let u=null;e.startAt&&(u=function(c){const m=!!c.before,g=c.values||[];return new Rn(g,m)}(e.startAt));let h=null;return e.endAt&&(h=function(c){const m=!c.before,g=c.values||[];return new Rn(g,m)}(e.endAt)),Kh(t,i,o,s,a,"F",u,h)}function Vl(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function pa(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Wt(e.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Wt(e.unaryFilter.field);return U.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wt(e.unaryFilter.field);return U.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wt(e.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(n):n.fieldFilter!==void 0?function(e){return U.create(Wt(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return _t.create(e.compositeFilter.filters.map(r=>pa(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(n):T()}function Sl(n){return gl[n]}function Cl(n){return pl[n]}function Dl(n){return _l[n]}function Gt(n){return{fieldPath:n.canonicalString()}}function Wt(n){return G.fromServerFormat(n.fieldPath)}function _a(n){return n instanceof U?function(e){if(e.op==="=="){if(ss(e.value))return{unaryFilter:{field:Gt(e.field),op:"IS_NAN"}};if(is(e.value))return{unaryFilter:{field:Gt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ss(e.value))return{unaryFilter:{field:Gt(e.field),op:"IS_NOT_NAN"}};if(is(e.value))return{unaryFilter:{field:Gt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gt(e.field),op:Cl(e.op),value:e.value}}}(n):n instanceof _t?function(e){const r=e.getFilters().map(i=>_a(i));return r.length===1?r[0]:{compositeFilter:{op:Dl(e.op),filters:r}}}(n):T()}function kl(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ya(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,r,i,s=A.min(),o=A.min(),a=et.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Rt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.ct=t}}function xl(n){const t=Pl({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Or(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this._n=new Ol}addToCollectionParentIndex(t,e){return this._n.add(e),d.resolve()}getCollectionParents(t,e){return d.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return d.resolve()}deleteFieldIndex(t,e){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,e){return d.resolve()}getDocumentsMatchingTarget(t,e){return d.resolve(null)}getIndexType(t,e){return d.resolve(0)}getFieldIndexes(t,e){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,e){return d.resolve(Vt.min())}getMinOffsetFromCollectionGroup(t,e){return d.resolve(Vt.min())}updateCollectionGroup(t,e,r){return d.resolve()}updateIndexEntries(t,e){return d.resolve()}}class Ol{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new H(x.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new H(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new ie(0)}static Bn(){return new ie(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.changes=new ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,J.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?d.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Re(r.mutation,i,at.empty(),q.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,e,r=P()){const i=Lt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=ye();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Lt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,P()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=At();const o=we(),a=function(){return we()}();return e.forEach((u,h)=>{const l=r.get(h.key);i.has(h.key)&&(l===void 0||l.mutation instanceof jt)?s=s.insert(h.key,h):l!==void 0?(o.set(h.key,l.mutation.getFieldMask()),Re(l.mutation,h,l.mutation.getFieldMask(),q.now())):o.set(h.key,at.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((h,l)=>o.set(h,l)),e.forEach((h,l)=>{var c;return a.set(h,new Fl(l,(c=o.get(h))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,e){const r=we();let i=new M((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let l=r.get(u)||at.empty();l=a.applyToLocalView(h,l),r.set(u,l);const c=(i.get(a.batchId)||P()).add(u);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,l=u.value,c=Zo();l.forEach(m=>{if(!s.has(m)){const g=oa(e.get(m),r.get(m));g!==null&&c.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,c))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):$h(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):d.resolve(Lt());let a=-1,u=s;return o.next(h=>d.forEach(h,(l,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(l)?d.resolve():this.remoteDocumentCache.getEntry(t,l).next(m=>{u=u.insert(l,m)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,u,h,P())).next(l=>({batchId:a,changes:Jo(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new E(e)).next(r=>{let i=ye();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=ye();return this.indexManager.getCollectionParents(t,s).next(a=>d.forEach(a,u=>{const h=function(c,m){return new Xn(m,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(l=>{l.forEach((c,m)=>{o=o.insert(c,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,h)=>{const l=h.getKey();o.get(l)===null&&(o=o.insert(l,J.newInvalidDocument(l)))});let a=ye();return o.forEach((u,h)=>{const l=s.get(u);l!==void 0&&Re(l.mutation,h,at.empty(),q.now()),Jn(e,h)&&(a=a.insert(u,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return d.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:mt(i.createTime)}}(e)),d.resolve()}getNamedQuery(t,e){return d.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:xl(i.bundledQuery),readTime:mt(i.readTime)}}(e)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.overlays=new M(E.comparator),this.hr=new Map}getOverlay(t,e){return d.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Lt();return d.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),d.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),d.resolve()}getOverlaysForCollection(t,e,r){const i=Lt(),s=e.length+1,o=new E(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new M((h,l)=>h-l);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let l=s.get(h.largestBatchId);l===null&&(l=Lt(),s=s.insert(h.largestBatchId,l)),l.set(h.getKey(),h)}}const a=Lt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,l)=>a.set(h,l)),!(a.size()>=i)););return d.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hl(e,r));let s=this.hr.get(e);s===void 0&&(s=P(),this.hr.set(e,s)),this.hr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.Pr=new H(B.Ir),this.Tr=new H(B.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new B(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new B(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new E(new x([])),r=new B(e,t),i=new B(e,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new E(new x([])),r=new B(e,t),i=new B(e,t+1);let s=P();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new B(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class B{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return E.comparator(t.key,e.key)||C(t.pr,e.pr)}static Er(t,e){return C(t.pr,e.pr)||E.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new H(B.Ir)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ul(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new B(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,e){return d.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),s=i<0?0:i;return d.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new B(e,0),i=new B(e,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),d.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new H(C);return e.forEach(i=>{const s=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),d.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new B(new E(s),0);let a=new H(C);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.pr)),!0)},o),d.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){k(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return d.forEach(e.mutations,i=>{const s=new B(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new B(e,0),i=this.wr.firstAfterOrEqual(r);return d.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t){this.vr=t,this.docs=function(){return new M(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return d.resolve(r?r.document.mutableCopy():J.newInvalidDocument(e))}getEntries(t,e){let r=At();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():J.newInvalidDocument(i))}),d.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=At();const o=e.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:l}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Rh(wh(l),r)<=0||(i.has(l.key)||Jn(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return d.resolve(s)}getAllFromCollectionGroup(t,e,r,i){T()}Fr(t,e){return d.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new zl(this)}getSize(t){return d.resolve(this.size)}}class zl extends Ll{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),d.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t){this.persistence=t,this.Mr=new ce(e=>_i(e),yi),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ii,this.targetCount=0,this.Br=ie.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),d.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new ie(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,d.resolve()}updateTargetData(t,e){return this.qn(e),d.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(s).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return d.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),d.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),d.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return d.resolve(r)}containsKey(t,e){return d.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e){this.Lr={},this.overlays={},this.kr=new fi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Kl(this),this.indexManager=new Ml,this.remoteDocumentCache=function(i){return new jl(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Nl(e),this.$r=new Ul(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ql,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new Bl(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){p("MemoryPersistence","Starting transaction:",t);const i=new Ql(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,e){return d.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class Ql extends Vh{constructor(t){super(),this.currentSequenceNumber=t}}class Ai{constructor(t){this.persistence=t,this.zr=new Ii,this.jr=null}static Hr(t){return new Ai(t)}get Jr(){if(this.jr)return this.jr;throw T()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),d.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),d.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Jr,r=>{const i=E.fromPath(r);return this.Yr(t,i).next(s=>{s||e.removeEntry(i,A.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return d.or([()=>d.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=P(),i=P();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wi(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ou()?8:Ot.v(_n())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Gl;return this.Ji(t,e,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>s.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(ge()<=wt.DEBUG&&p("QueryEngine","SDK will not create cache indexes for query:",Qt(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),d.resolve()):(ge()<=wt.DEBUG&&p("QueryEngine","Query:",Qt(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ge()<=wt.DEBUG&&p("QueryEngine","The SDK decides to create cache indexes for query:",Qt(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ft(e))):d.resolve())}ji(t,e){if(hs(e))return d.resolve(null);let r=ft(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Or(e,null,"F"),r=ft(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=P(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.Zi(e,a);return this.Xi(e,h,o,u.readTime)?this.ji(t,Or(e,null,"F")):this.es(t,h,e,u)}))})))}Hi(t,e,r,i){return hs(e)||i.isEqual(A.min())?d.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(e,s);return this.Xi(e,o,r,i)?d.resolve(null):(ge()<=wt.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qt(e)),this.es(t,o,e,Ah(i,-1)).next(a=>a))})}Zi(t,e){let r=new H(Xo(t));return e.forEach((i,s)=>{Jn(t,s)&&(r=r.add(s))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,e,r){return ge()<=wt.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Qt(e)),this.zi.getDocumentsMatchingQuery(t,e,Vt.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new M(C),this.rs=new ce(s=>_i(s),yi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bl(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Xl(n,t,e,r){return new Hl(n,t,e,r)}async function Ea(n,t){const e=w(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=P();for(const h of i){o.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}for(const h of s){a.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:o,addedBatchIds:a}))})})}function Yl(n,t){const e=w(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.os.newChangeBuffer({trackRemovals:!0});return function(a,u,h,l){const c=h.batch,m=c.keys();let g=d.resolve();return m.forEach(S=>{g=g.next(()=>l.getEntry(u,S)).next(R=>{const v=h.docVersions.get(S);k(v!==null),R.version.compareTo(v)<0&&(c.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),l.addEntry(R)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,c))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=P();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(u=u.add(a.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Ta(n){const t=w(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Jl(n,t){const e=w(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const a=[];t.targetChanges.forEach((l,c)=>{const m=i.get(c);if(!m)return;a.push(e.Qr.removeMatchingKeys(s,l.removedDocuments,c).next(()=>e.Qr.addMatchingKeys(s,l.addedDocuments,c)));let g=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(c)!==null?g=g.withResumeToken(et.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),i=i.insert(c,g),function(R,v,L){return R.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,g,l)&&a.push(e.Qr.updateTargetData(s,g))});let u=At(),h=P();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Zl(s,o,t.documentUpdates).next(l=>{u=l.cs,h=l.ls})),!r.isEqual(A.min())){const l=e.Qr.getLastRemoteSnapshotVersion(s).next(c=>e.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return d.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(e.ns=i,s))}function Zl(n,t,e){let r=P(),i=P();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=At();return e.forEach((a,u)=>{const h=s.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(A.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):p("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{cs:o,ls:i}})}function tc(n,t){const e=w(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function ec(n,t){const e=w(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(s=>s?(i=s,d.resolve(i)):e.Qr.allocateTargetId(r).next(o=>(i=new Rt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function qr(n,t,e){const r=w(n),i=r.ns.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xe(o))throw o;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Ts(n,t,e){const r=w(n);let i=A.min(),s=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,l){const c=w(u),m=c.rs.get(l);return m!==void 0?d.resolve(c.ns.get(m)):c.Qr.getTargetData(h,l)}(r,o,ft(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?i:A.min(),e?s:P())).next(a=>(nc(r,Gh(t),a),{documents:a,hs:s})))}function nc(n,t,e){let r=n.ss.get(t)||A.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(t,r)}class vs{constructor(){this.activeTargetIds=Zh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rc{constructor(){this.no=new vs,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new vs,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn=null;function pr(){return cn===null?cn=function(){return 268435456+Math.round(2147483648*Math.random())}():cn++,"0x"+cn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class ac extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(e,r,i,s,o){const a=pr(),u=this.bo(e,r.toUriEncodedString());p("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const h={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(h,s,o),this.Co(e,u,h,i).then(l=>(p("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw te("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}vo(e,r,i,s,o,a){return this.So(e,r,i,s,o)}Do(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+he}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}bo(e,r){const i=sc[e];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,i){const s=pr();return new Promise((o,a)=>{const u=new dh;u.setWithCredentials(!0),u.listenOnce(lh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case mr.NO_ERROR:const l=u.getResponseJson();p(X,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case mr.TIMEOUT:p(X,`RPC '${t}' ${s} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:const c=u.getStatus();if(p(X,`RPC '${t}' ${s} failed with status:`,c,"response text:",u.getResponseText()),c>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const S=function(v){const L=v.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(L)>=0?L:f.UNKNOWN}(g.status);a(new y(S,g.message))}else a(new y(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{p(X,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);p(X,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",h,r,15)})}Fo(t,e,r){const i=pr(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=uh(),a=hh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const l=s.join("");p(X,`Creating RPC '${t}' stream ${i}: ${l}`,u);const c=o.createWebChannel(l,u);let m=!1,g=!1;const S=new oc({lo:v=>{g?p(X,`Not sending because RPC '${t}' stream ${i} is closed:`,v):(m||(p(X,`Opening RPC '${t}' stream ${i} transport.`),c.open(),m=!0),p(X,`RPC '${t}' stream ${i} sending:`,v),c.send(v))},ho:()=>c.close()}),R=(v,L,K)=>{v.listen(L,rt=>{try{K(rt)}catch(yt){setTimeout(()=>{throw yt},0)}})};return R(c,un.EventType.OPEN,()=>{g||p(X,`RPC '${t}' stream ${i} transport opened.`)}),R(c,un.EventType.CLOSE,()=>{g||(g=!0,p(X,`RPC '${t}' stream ${i} transport closed`),S.Vo())}),R(c,un.EventType.ERROR,v=>{g||(g=!0,te(X,`RPC '${t}' stream ${i} transport errored:`,v),S.Vo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),R(c,un.EventType.MESSAGE,v=>{var L;if(!g){const K=v.data[0];k(!!K);const rt=K,yt=rt.error||((L=rt[0])===null||L===void 0?void 0:L.error);if(yt){p(X,`RPC '${t}' stream ${i} received error:`,yt);const en=yt.status;let Kt=function(Xa){const Fi=F[Xa];if(Fi!==void 0)return ha(Fi)}(en),nn=yt.message;Kt===void 0&&(Kt=f.INTERNAL,nn="Unknown error status: "+en+" with message "+yt.message),g=!0,S.Vo(new y(Kt,nn)),c.close()}else p(X,`RPC '${t}' stream ${i} received:`,K),S.mo(K)}}),R(a,ch.STAT_EVENT,v=>{v.stat===Ji.PROXY?p(X,`RPC '${t}' stream ${i} detected buffering proxy`):v.stat===Ji.NOPROXY&&p(X,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.Ro()},0),S}}function _r(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n){return new yl(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-r);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e,r,i,s,o,a,u){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new va(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===f.RESOURCE_EXHAUSTED?(gt(e.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===e&&this.o_(r,i)},r=>{t(()=>{const i=new y(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uc extends Ia{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=vl(this.serializer,t),r=function(s){if(!("targetChange"in s))return A.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?A.min():o.readTime?mt(o.readTime):A.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=Ur(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=Mr(u)?{documents:wl(s,u)}:{query:Rl(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=da(s,o.resumeToken);const h=Lr(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(A.min())>0){a.readTime=Cn(s,o.snapshotVersion.toTimestamp());const h=Lr(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=Vl(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=Ur(this.serializer),e.removeTarget=t,this.t_(e)}}class hc extends Ia{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=Al(t.writeResults,t.commitTime),r=mt(t.commitTime);return this.listener.T_(r,e)}return k(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Ur(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Il(this.serializer,r))};this.t_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,Fr(e,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}vo(t,e,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Fr(e,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(f.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class cc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(gt(e),this.g_=!1):p("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{zt(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=w(u);h.v_.add(4),await Ze(h),h.x_.set("Unknown"),h.v_.delete(4),await rr(h)}(this))})}),this.x_=new cc(r,i)}}async function rr(n){if(zt(n))for(const t of n.F_)await t(!0)}async function Ze(n){for(const t of n.F_)await t(!1)}function Aa(n,t){const e=w(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),Vi(e)?Pi(e):de(e).Jo()&&Ri(e,t))}function wa(n,t){const e=w(n),r=de(e);e.C_.delete(t),r.Jo()&&Ra(e,t),e.C_.size===0&&(r.Jo()?r.Xo():zt(e)&&e.x_.set("Unknown"))}function Ri(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(A.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}de(n).c_(t)}function Ra(n,t){n.O_.Oe(t),de(n).l_(t)}function Pi(n){n.O_=new ml({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),de(n).start(),n.x_.p_()}function Vi(n){return zt(n)&&!de(n).Ho()&&n.C_.size>0}function zt(n){return w(n).v_.size===0}function Pa(n){n.O_=void 0}async function fc(n){n.C_.forEach((t,e)=>{Ri(n,t)})}async function mc(n,t){Pa(n),Vi(n)?(n.x_.S_(t),Pi(n)):n.x_.set("Unknown")}async function gc(n,t,e){if(n.x_.set("Online"),t instanceof ca&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,t)}catch(r){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Dn(n,r)}else if(t instanceof gn?n.O_.$e(t):t instanceof la?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(A.min()))try{const r=await Ta(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.C_.get(h);l&&s.C_.set(h,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,h)=>{const l=s.C_.get(u);if(!l)return;s.C_.set(u,l.withResumeToken(et.EMPTY_BYTE_STRING,l.snapshotVersion)),Ra(s,u);const c=new Rt(l.target,u,h,l.sequenceNumber);Ri(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){p("RemoteStore","Failed to raise snapshot:",r),await Dn(n,r)}}async function Dn(n,t,e){if(!Xe(t))throw t;n.v_.add(1),await Ze(n),n.x_.set("Offline"),e||(e=()=>Ta(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await rr(n)})}function Va(n,t){return t().catch(e=>Dn(n,e,t))}async function ir(n){const t=w(n),e=Ct(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;pc(t);)try{const i=await tc(t.localStore,r);if(i===null){t.D_.length===0&&e.Xo();break}r=i.batchId,_c(t,i)}catch(i){await Dn(t,i)}Sa(t)&&Ca(t)}function pc(n){return zt(n)&&n.D_.length<10}function _c(n,t){n.D_.push(t);const e=Ct(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function Sa(n){return zt(n)&&!Ct(n).Ho()&&n.D_.length>0}function Ca(n){Ct(n).start()}async function yc(n){Ct(n).d_()}async function Ec(n){const t=Ct(n);for(const e of n.D_)t.I_(e.mutations)}async function Tc(n,t,e){const r=n.D_.shift(),i=Ei.from(r,t,e);await Va(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ir(n)}async function vc(n,t){t&&Ct(n).P_&&await async function(r,i){if(function(o){return cl(o)&&o!==f.ABORTED}(i.code)){const s=r.D_.shift();Ct(r).Zo(),await Va(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ir(r)}}(n,t),Sa(n)&&Ca(n)}async function As(n,t){const e=w(n);e.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=zt(e);e.v_.add(3),await Ze(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await rr(e)}async function Ic(n,t){const e=w(n);t?(e.v_.delete(2),await rr(e)):t||(e.v_.add(2),await Ze(e),e.x_.set("Unknown"))}function de(n){return n.N_||(n.N_=function(e,r,i){const s=w(e);return s.R_(),new uc(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:fc.bind(null,n),To:mc.bind(null,n),u_:gc.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),Vi(n)?Pi(n):n.x_.set("Unknown")):(await n.N_.stop(),Pa(n))})),n.N_}function Ct(n){return n.B_||(n.B_=function(e,r,i){const s=w(e);return s.R_(),new hc(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:yc.bind(null,n),To:vc.bind(null,n),E_:Ec.bind(null,n),T_:Tc.bind(null,n)}),n.F_.push(async t=>{t?(n.B_.Zo(),await ir(n)):(await n.B_.stop(),n.D_.length>0&&(p("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Si(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ci(n,t){if(gt("AsyncQueue",`${t}: ${n}`),Xe(n))return new y(f.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.comparator=t?(e,r)=>t(e,r)||E.comparator(e.key,r.key):(e,r)=>E.comparator(e.key,r.key),this.keyedMap=ye(),this.sortedSet=new M(this.comparator)}static emptySet(t){return new Jt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Jt)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Jt;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.L_=new M(E.comparator)}track(t){const e=t.doc.key,r=this.L_.get(e);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(e,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(e):t.type===1&&r.type===2?this.L_=this.L_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):T():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal((e,r)=>{t.push(r)}),t}}class se{constructor(t,e,r,i,s,o,a,u,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new se(t,e,Jt.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.q_=void 0,this.Q_=[]}}class wc{constructor(){this.queries=new ce(t=>Ho(t),Yn),this.onlineState="Unknown",this.K_=new Set}}async function Rc(n,t){const e=w(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new Ac),i)try{s.q_=await e.onListen(r)}catch(o){const a=Ci(o,`Initialization of query '${Qt(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.Q_.push(t),t.U_(e.onlineState),s.q_&&t.W_(s.q_)&&Di(e)}async function Pc(n,t){const e=w(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function Vc(n,t){const e=w(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&Di(e)}function Sc(n,t,e){const r=w(n),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(e);r.queries.delete(t)}function Di(n){n.K_.forEach(t=>{t.next()})}class Cc{constructor(t,e,r){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new se(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t){this.key=t}}class ka{constructor(t){this.key=t}}class Dc{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=P(),this.mutatedKeys=P(),this.ua=Xo(t),this.ca=new Jt(this.ua)}get la(){return this.oa}ha(t,e){const r=e?e.Pa:new ws,i=e?e.ca:this.ca;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,c)=>{const m=i.get(l),g=Jn(this.query,c)?c:null,S=!!m&&this.mutatedKeys.has(m.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;m&&g?m.data.isEqual(g.data)?S!==R&&(r.track({type:3,doc:g}),v=!0):this.Ia(m,g)||(r.track({type:2,doc:g}),v=!0,(u&&this.ua(g,u)>0||h&&this.ua(g,h)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),v=!0):m&&!g&&(r.track({type:1,doc:m}),v=!0,(u||h)&&(a=!0)),v&&(g?(o=o.add(g),s=R?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((l,c)=>function(g,S){const R=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return R(g)-R(S)}(l.type,c.type)||this.ua(l.doc,c.doc)),this.Ta(r),i=i!=null&&i;const a=e&&!i?this.Ea():[],u=this.aa.size===0&&this.current&&!i?1:0,h=u!==this._a;return this._a=u,o.length!==0||h?{snapshot:new se(this.query,t.ca,s,o,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ws,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=P(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const e=[];return t.forEach(r=>{this.aa.has(r)||e.push(new ka(r))}),this.aa.forEach(r=>{t.has(r)||e.push(new Da(r))}),e}Ra(t){this.oa=t.hs,this.aa=P();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return se.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class kc{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Nc{constructor(t){this.key=t,this.ma=!1}}class xc{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ce(a=>Ho(a),Yn),this.pa=new Map,this.ya=new Set,this.wa=new M(E.comparator),this.Sa=new Map,this.ba=new Ii,this.Da={},this.Ca=new Map,this.va=ie.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Mc(n,t){const e=Kc(n);let r,i;const s=e.ga.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await ec(e.localStore,ft(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Oc(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Aa(e.remoteStore,o)}return i}async function Oc(n,t,e,r,i){n.Ma=(c,m,g)=>async function(R,v,L,K){let rt=v.view.ha(L);rt.Xi&&(rt=await Ts(R.localStore,v.query,!1).then(({documents:nn})=>v.view.ha(nn,rt)));const yt=K&&K.targetChanges.get(v.targetId),en=K&&K.targetMismatches.get(v.targetId)!=null,Kt=v.view.applyChanges(rt,R.isPrimaryClient,yt,en);return Ps(R,v.targetId,Kt.da),Kt.snapshot}(n,c,m,g);const s=await Ts(n.localStore,t,!0),o=new Dc(t,s.hs),a=o.ha(s.documents),u=Je.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),h=o.applyChanges(a,n.isPrimaryClient,u);Ps(n,e,h.da);const l=new kc(t,e,o);return n.ga.set(t,l),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),h.snapshot}async function Lc(n,t){const e=w(n),r=e.ga.get(t),i=e.pa.get(r.targetId);if(i.length>1)return e.pa.set(r.targetId,i.filter(s=>!Yn(s,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await qr(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),wa(e.remoteStore,r.targetId),Br(e,r.targetId)}).catch(He)):(Br(e,r.targetId),await qr(e.localStore,r.targetId,!0))}async function Fc(n,t,e){const r=$c(n);try{const i=await function(o,a){const u=w(o),h=q.now(),l=a.reduce((g,S)=>g.add(S.key),P());let c,m;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let S=At(),R=P();return u.os.getEntries(g,l).next(v=>{S=v,S.forEach((L,K)=>{K.isValidDocument()||(R=R.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,S)).next(v=>{c=v;const L=[];for(const K of a){const rt=ol(K,c.get(K.key).overlayedDocument);rt!=null&&L.push(new jt(K.key,rt,Bo(rt.value.mapValue),vt.exists(!0)))}return u.mutationQueue.addMutationBatch(g,h,L,a)}).next(v=>{m=v;const L=v.applyToLocalDocumentSet(c,R);return u.documentOverlayCache.saveOverlays(g,v.batchId,L)})}).then(()=>({batchId:m.batchId,changes:Jo(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let h=o.Da[o.currentUser.toKey()];h||(h=new M(C)),h=h.insert(a,u),o.Da[o.currentUser.toKey()]=h}(r,i.batchId,e),await tn(r,i.changes),await ir(r.remoteStore)}catch(i){const s=Ci(i,"Failed to persist write");e.reject(s)}}async function Na(n,t){const e=w(n);try{const r=await Jl(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Sa.get(s);o&&(k(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?k(o.ma):i.removedDocuments.size>0&&(k(o.ma),o.ma=!1))}),await tn(e,r,t)}catch(r){await He(r)}}function Rs(n,t,e){const r=w(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=w(o);u.onlineState=a;let h=!1;u.queries.forEach((l,c)=>{for(const m of c.Q_)m.U_(a)&&(h=!0)}),h&&Di(u)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bc(n,t,e){const r=w(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new M(E.comparator);o=o.insert(s,J.newNoDocument(s,A.min()));const a=P().add(s),u=new er(A.min(),new Map,new M(C),o,a);await Na(r,u),r.wa=r.wa.remove(s),r.Sa.delete(t),ki(r)}else await qr(r.localStore,t,!1).then(()=>Br(r,t,e)).catch(He)}async function Uc(n,t){const e=w(n),r=t.batch.batchId;try{const i=await Yl(e.localStore,t);Ma(e,r,null),xa(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await tn(e,i)}catch(i){await He(i)}}async function qc(n,t,e){const r=w(n);try{const i=await function(o,a){const u=w(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let l;return u.mutationQueue.lookupMutationBatch(h,a).next(c=>(k(c!==null),l=c.keys(),u.mutationQueue.removeMutationBatch(h,c))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,l)).next(()=>u.localDocuments.getDocuments(h,l))})}(r.localStore,t);Ma(r,t,e),xa(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await tn(r,i)}catch(i){await He(i)}}function xa(n,t){(n.Ca.get(t)||[]).forEach(e=>{e.resolve()}),n.Ca.delete(t)}function Ma(n,t,e){const r=w(n);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function Br(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.pa.get(t))n.ga.delete(r),e&&n.fa.xa(r,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.Vr(t).forEach(r=>{n.ba.containsKey(r)||Oa(n,r)})}function Oa(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(wa(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),ki(n))}function Ps(n,t,e){for(const r of e)r instanceof Da?(n.ba.addReference(r.key,t),Bc(n,r)):r instanceof ka?(p("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,t),n.ba.containsKey(r.key)||Oa(n,r.key)):T()}function Bc(n,t){const e=t.key,r=e.path.canonicalString();n.wa.get(e)||n.ya.has(r)||(p("SyncEngine","New document in limbo: "+e),n.ya.add(r),ki(n))}function ki(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new E(x.fromString(t)),r=n.va.next();n.Sa.set(r,new Nc(e)),n.wa=n.wa.insert(e,r),Aa(n.remoteStore,new Rt(ft(Wo(e.path)),r,"TargetPurposeLimboResolution",fi._e))}}async function tn(n,t,e){const r=w(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,u)=>{o.push(r.Ma(u,t,e).then(h=>{if((h||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){i.push(h);const l=wi.Ki(u.targetId,h);s.push(l)}}))}),await Promise.all(o),r.fa.u_(i),await async function(u,h){const l=w(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>d.forEach(h,m=>d.forEach(m.qi,g=>l.persistence.referenceDelegate.addReference(c,m.targetId,g)).next(()=>d.forEach(m.Qi,g=>l.persistence.referenceDelegate.removeReference(c,m.targetId,g)))))}catch(c){if(!Xe(c))throw c;p("LocalStore","Failed to update sequence numbers: "+c)}for(const c of h){const m=c.targetId;if(!c.fromCache){const g=l.ns.get(m),S=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(S);l.ns=l.ns.insert(m,R)}}}(r.localStore,s))}async function jc(n,t){const e=w(n);if(!e.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const r=await Ea(e.localStore,t);e.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(u=>{u.reject(new y(f.CANCELLED,o))})}),s.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await tn(e,r.us)}}function zc(n,t){const e=w(n),r=e.Sa.get(t);if(r&&r.ma)return P().add(r.key);{let i=P();const s=e.pa.get(t);if(!s)return i;for(const o of s){const a=e.ga.get(o);i=i.unionWith(a.view.la)}return i}}function Kc(n){const t=w(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Na.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bc.bind(null,t),t.fa.u_=Vc.bind(null,t.eventManager),t.fa.xa=Sc.bind(null,t.eventManager),t}function $c(n){const t=w(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qc.bind(null,t),t}class Vs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=nr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Xl(this.persistence,new Wl,t.initialUser,this.serializer)}createPersistence(t){return new $l(Ai.Hr,this.serializer)}createSharedClientState(t){return new rc}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rs(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jc.bind(null,this.syncEngine),await Ic(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wc}()}createDatastore(t){const e=nr(t.databaseInfo.databaseId),r=function(s){return new ac(s)}(t.databaseInfo);return function(s,o,a,u){return new lc(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new dc(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Rs(this.syncEngine,e,0),function(){return Is.D()?new Is:new ic}())}createSyncEngine(t,e){return function(i,s,o,a,u,h,l){const c=new xc(i,s,o,a,u,h);return l&&(c.Fa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=w(r);p("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Ze(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):gt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Y.UNAUTHENTICATED,this.clientId=bo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{p("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(p("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ci(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function yr(n,t){n.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ea(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ss(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Xc(n);p("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>As(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>As(t.remoteStore,i)),n._onlineComponents=t}function Hc(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Xc(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await yr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Hc(e))throw e;te("Error using user provided cache. Falling back to memory cache: "+e),await yr(n,new Vs)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await yr(n,new Vs);return n._offlineComponents}async function La(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await Ss(n,n._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await Ss(n,new Qc))),n._onlineComponents}function Yc(n){return La(n).then(t=>t.syncEngine)}async function Jc(n){const t=await La(n),e=t.eventManager;return e.onListen=Mc.bind(null,t.syncEngine),e.onUnlisten=Lc.bind(null,t.syncEngine),e}function Zc(n,t,e={}){const r=new Tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,h){const l=new Gc({next:m=>{o.enqueueAndForget(()=>Pc(s,c)),m.fromCache&&u.source==="server"?h.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),c=new Cc(a,l,{includeMetadataChanges:!0,Z_:!0});return Rc(s,c)}(await Jc(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n,t,e){if(!e)throw new y(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function td(n,t,e,r){if(t===!0&&r===!0)throw new y(f.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ds(n){if(!E.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ks(n){if(E.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ni(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":T()}function kn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ni(n);throw new y(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}td("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fa((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class sr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ns({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ns(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mh;switch(r.type){case"firstParty":return new yh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Cs.get(e);r&&(p("ComponentProvider","Removing Datastore"),Cs.delete(e),r.terminate())}(this),Promise.resolve()}}function ed(n,t,e,r={}){var i;const s=(n=kn(n,sr))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&te("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Y.MOCK_USER;else{a=ru(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Y(h)}n._authCredentials=new gh(new Fo(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new or(this.firestore,t,this._query)}}class ut{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ut(this.firestore,t,this._key)}}class Pt extends or{constructor(t,e,r){super(t,e,Wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ut(this.firestore,null,new E(t))}withConverter(t){return new Pt(this.firestore,t,this._path)}}function Pd(n,t,...e){if(n=Pe(n),ba("collection","path",t),n instanceof sr){const r=x.fromString(t,...e);return ks(r),new Pt(n,null,r)}{if(!(n instanceof ut||n instanceof Pt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(t,...e));return ks(r),new Pt(n.firestore,null,r)}}function nd(n,t,...e){if(n=Pe(n),arguments.length===1&&(t=bo.newId()),ba("doc","path",t),n instanceof sr){const r=x.fromString(t,...e);return Ds(r),new ut(n,null,new E(r))}{if(!(n instanceof ut||n instanceof Pt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(t,...e));return Ds(r),new ut(n.firestore,n instanceof Pt?n.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new va(this,"async_queue_retry"),this._u=()=>{const e=_r();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=_r();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=_r();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const e=new Tt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Xe(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const e=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw gt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=e,e}enqueueAfterDelay(t,e,r){this.au(),this.ou.indexOf(t)>-1&&(e=0);const i=Si.createAndSchedule(this,t,e,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&T()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.nu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class xi extends sr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new rd}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qa(this),this._firestoreClient.terminate()}}function Vd(n,t){const e=typeof n=="object"?n:tu(),r=typeof n=="string"?n:t||"(default)",i=eu(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nu("firestore");s&&ed(i,...s)}return i}function Ua(n){return n._firestoreClient||qa(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function qa(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,h,l){return new Nh(a,u,h,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Fa(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Wc(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new oe(et.fromBase64String(t))}catch(e){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new oe(et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=/^__.*__$/;class sd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new jt(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ye(t,this.data,e,this.fieldTransforms)}}function ja(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Li{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Au({path:r,Vu:!1});return i.mu(t),i}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Nn(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(ja(this.du)&&id.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class od{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||nr(t)}Su(t,e,r,i=!1){return new Li({du:t,methodName:e,wu:r,path:G.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ad(n){const t=n._freezeSettings(),e=nr(n._databaseId);return new od(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ud(n,t,e,r,i,s={}){const o=n.Su(s.merge||s.mergeFields?2:0,t,e,i);Qa("Data must be an object, but it was:",o,r);const a=Ka(r,o);let u,h;if(s.merge)u=new at(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const c of s.mergeFields){const m=hd(t,c,e);if(!o.contains(m))throw new y(f.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);cd(l,m)||l.push(m)}u=new at(l),h=o.fieldTransforms.filter(c=>u.covers(c.field))}else u=null,h=o.fieldTransforms;return new sd(new ot(a),u,h)}function za(n,t){if($a(n=Pe(n)))return Qa("Unsupported field value:",t,n),Ka(n,t);if(n instanceof Ba)return function(r,i){if(!ja(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=za(a,i.gu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tl(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=q.fromDate(r);return{timestampValue:Cn(i.serializer,s)}}if(r instanceof q){const s=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cn(i.serializer,s)}}if(r instanceof Oi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof oe)return{bytesValue:da(i.serializer,r._byteString)};if(r instanceof ut){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vi(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Ni(r)}`)}(n,t)}function Ka(n,t){const e={};return Uo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(n,(r,i)=>{const s=za(i,t.Ru(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function $a(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof q||n instanceof Oi||n instanceof oe||n instanceof ut||n instanceof Ba)}function Qa(n,t,e){if(!$a(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Ni(e);throw r==="an object"?t.pu(n+" a custom object"):t.pu(n+" "+r)}}function hd(n,t,e){if((t=Pe(t))instanceof Mi)return t._internalPath;if(typeof t=="string")return Ga(n,t);throw Nn("Field path arguments must be of type string or ",n,!1,void 0,e)}const ld=new RegExp("[~\\*/\\[\\]]");function Ga(n,t,e){if(t.search(ld)>=0)throw Nn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Mi(...t.split("."))._internalPath}catch{throw Nn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Nn(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new y(f.INVALID_ARGUMENT,a+n+u)}function cd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ha("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class dd extends Wa{data(){return super.data()}}function Ha(n,t){return typeof t=="string"?Ga(n,t):t instanceof Mi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class md{convertValue(t,e="none"){switch(qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return b(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ut(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw T()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return le(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Oi(b(t.latitude),b(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=gi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Le(t));default:return null}}convertTimestamp(t){const e=St(t);return new q(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=x.fromString(t);k(ya(r));const i=new Fe(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(e)||gt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pd extends Wa{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ha("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class pn extends pd{data(t={}){return super.data(t)}}class _d{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new pn(this._firestore,this._userDataWriter,r.key,r,new dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new pn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new pn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,l=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:yd(a.type),doc:u,oldIndex:h,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class Ed extends md{constructor(t){super(),this.firestore=t}convertBytes(t){return new oe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ut(this.firestore,null,e)}}function Sd(n){n=kn(n,or);const t=kn(n.firestore,xi),e=Ua(t),r=new Ed(t);return fd(n._query),Zc(e,n._query).then(i=>new _d(t,r,n,i))}function Cd(n,t){const e=kn(n.firestore,xi),r=nd(n),i=gd(n.converter,t);return Td(e,[ud(ad(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,vt.exists(!1))]).then(()=>r)}function Td(n,t){return function(r,i){const s=new Tt;return r.asyncQueue.enqueueAndForget(async()=>Fc(await Yc(r),i,s)),s.promise}(Ua(n),t)}(function(t,e=!0){(function(i){he=i})(iu),Ya(new Ja("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new xi(new ph(r.getProvider("auth-internal")),new Th(r.getProvider("app-check-internal")),function(h,l){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fe(h.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bi(Zi,"4.4.1",t),bi(Zi,"4.4.1","esm2017")})();export{Cd as a,Sd as b,Pd as c,Vd as g};
