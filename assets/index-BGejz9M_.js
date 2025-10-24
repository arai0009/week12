(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},bn=[],ht=()=>{},ec=()=>!1,cs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ki=t=>t.startsWith("onUpdate:"),Se=Object.assign,xi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bu=Object.prototype.hasOwnProperty,Q=(t,e)=>Bu.call(t,e),V=Array.isArray,wn=t=>ls(t)==="[object Map]",tc=t=>ls(t)==="[object Set]",j=t=>typeof t=="function",ge=t=>typeof t=="string",Gt=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",nc=t=>(ue(t)||j(t))&&j(t.then)&&j(t.catch),rc=Object.prototype.toString,ls=t=>rc.call(t),$u=t=>ls(t).slice(8,-1),sc=t=>ls(t)==="[object Object]",Ni=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qn=Oi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),us=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Hu=/-\w/g,ze=us(t=>t.replace(Hu,e=>e.slice(1).toUpperCase())),Vu=/\B([A-Z])/g,dn=us(t=>t.replace(Vu,"-$1").toLowerCase()),fs=us(t=>t.charAt(0).toUpperCase()+t.slice(1)),ks=us(t=>t?`on${fs(t)}`:""),Wt=(t,e)=>!Object.is(t,e),Dr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ic=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ti=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mo;const ds=()=>mo||(mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Di(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?zu(r):Di(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ge(t)||ue(t))return t}const ju=/;(?![^(]*\))/g,Wu=/:([^]+)/,qu=/\/\*[^]*?\*\//g;function zu(t){const e={};return t.replace(qu,"").split(ju).forEach(n=>{if(n){const r=n.split(Wu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Li(t){let e="";if(ge(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=Li(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ku="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gu=Oi(Ku);function oc(t){return!!t||t===""}const ac=t=>!!(t&&t.__v_isRef===!0),be=t=>ge(t)?t:t==null?"":V(t)||ue(t)&&(t.toString===rc||!j(t.toString))?ac(t)?be(t.value):JSON.stringify(t,cc,2):String(t),cc=(t,e)=>ac(e)?cc(t,e.value):wn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xs(r,i)+" =>"]=s,n),{})}:tc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xs(n))}:Gt(e)?xs(e):ue(e)&&!V(e)&&!sc(e)?String(e):e,xs=(t,e="")=>{var n;return Gt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class Ju{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ke,!e&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ke;try{return ke=this,e()}finally{ke=n}}}on(){++this._on===1&&(this.prevScope=ke,ke=this)}off(){this._on>0&&--this._on===0&&(ke=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Yu(){return ke}let oe;const Ns=new WeakSet;class lc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&ke.active&&ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ns.has(this)&&(Ns.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,go(this),dc(this);const e=oe,n=Ze;oe=this,Ze=!0;try{return this.fn()}finally{hc(this),oe=e,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fi(e);this.deps=this.depsTail=void 0,go(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ns.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ni(this)&&this.run()}get dirty(){return ni(this)}}let uc=0,zn,Kn;function fc(t,e=!1){if(t.flags|=8,e){t.next=Kn,Kn=t;return}t.next=zn,zn=t}function Mi(){uc++}function Ui(){if(--uc>0)return;if(Kn){let e=Kn;for(Kn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zn;){let e=zn;for(zn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function dc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Fi(r),Xu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ni(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function pc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===rr)||(t.globalVersion=rr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ni(t))))return;t.flags|=2;const e=t.dep,n=oe,r=Ze;oe=t,Ze=!0;try{dc(t);const s=t.fn(t._value);(e.version===0||Wt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{oe=n,Ze=r,hc(t),t.flags&=-3}}function Fi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Fi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ze=!0;const mc=[];function At(){mc.push(Ze),Ze=!1}function Pt(){const t=mc.pop();Ze=t===void 0?!0:t}function go(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=oe;oe=void 0;try{e()}finally{oe=n}}}let rr=0;class Qu{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!oe||!Ze||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink=new Qu(oe,this),oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,gc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=r)}return n}trigger(e){this.version++,rr++,this.notify(e)}notify(e){Mi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ui()}}}function gc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)gc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ri=new WeakMap,on=Symbol(""),si=Symbol(""),sr=Symbol("");function ye(t,e,n){if(Ze&&oe){let r=ri.get(t);r||ri.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Bi),s.map=r,s.key=n),s.track()}}function St(t,e,n,r,s,i){const o=ri.get(t);if(!o){rr++;return}const a=c=>{c&&c.trigger()};if(Mi(),e==="clear")o.forEach(a);else{const c=V(t),l=c&&Ni(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===sr||!Gt(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(sr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(on)),wn(t)&&a(o.get(si)));break;case"delete":c||(a(o.get(on)),wn(t)&&a(o.get(si)));break;case"set":wn(t)&&a(o.get(on));break}}Ui()}function pn(t){const e=X(t);return e===t?e:(ye(e,"iterate",sr),et(t)?e:e.map(Te))}function $i(t){return ye(t=X(t),"iterate",sr),t}const Zu={__proto__:null,[Symbol.iterator](){return Ds(this,Symbol.iterator,Te)},concat(...t){return pn(this).concat(...t.map(e=>V(e)?pn(e):e))},entries(){return Ds(this,"entries",t=>(t[1]=Te(t[1]),t))},every(t,e){return bt(this,"every",t,e,void 0,arguments)},filter(t,e){return bt(this,"filter",t,e,n=>n.map(Te),arguments)},find(t,e){return bt(this,"find",t,e,Te,arguments)},findIndex(t,e){return bt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bt(this,"findLast",t,e,Te,arguments)},findLastIndex(t,e){return bt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ls(this,"includes",t)},indexOf(...t){return Ls(this,"indexOf",t)},join(t){return pn(this).join(t)},lastIndexOf(...t){return Ls(this,"lastIndexOf",t)},map(t,e){return bt(this,"map",t,e,void 0,arguments)},pop(){return Fn(this,"pop")},push(...t){return Fn(this,"push",t)},reduce(t,...e){return _o(this,"reduce",t,e)},reduceRight(t,...e){return _o(this,"reduceRight",t,e)},shift(){return Fn(this,"shift")},some(t,e){return bt(this,"some",t,e,void 0,arguments)},splice(...t){return Fn(this,"splice",t)},toReversed(){return pn(this).toReversed()},toSorted(t){return pn(this).toSorted(t)},toSpliced(...t){return pn(this).toSpliced(...t)},unshift(...t){return Fn(this,"unshift",t)},values(){return Ds(this,"values",Te)}};function Ds(t,e,n){const r=$i(t),s=r[e]();return r!==t&&!et(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ef=Array.prototype;function bt(t,e,n,r,s,i){const o=$i(t),a=o!==t&&!et(t),c=o[e];if(c!==ef[e]){const f=c.apply(t,i);return a?Te(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,Te(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function _o(t,e,n,r){const s=$i(t);let i=n;return s!==t&&(et(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Te(a),c,t)}),s[e](i,...r)}function Ls(t,e,n){const r=X(t);ye(r,"iterate",sr);const s=r[e](...n);return(s===-1||s===!1)&&ji(n[0])?(n[0]=X(n[0]),r[e](...n)):s}function Fn(t,e,n=[]){At(),Mi();const r=X(t)[e].apply(t,n);return Ui(),Pt(),r}const tf=Oi("__proto__,__v_isRef,__isVue"),_c=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gt));function nf(t){Gt(t)||(t=String(t));const e=X(this);return ye(e,"has",t),e.hasOwnProperty(t)}class yc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?hf:vc:i?Ec:wc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=V(e);if(!s){let c;if(o&&(c=Zu[n]))return c;if(n==="hasOwnProperty")return nf}const a=Reflect.get(e,n,ve(e)?e:r);return(Gt(n)?_c.has(n):tf(n))||(s||ye(e,"get",n),i)?a:ve(a)?o&&Ni(n)?a:a.value:ue(a)?s?Ic(a):hs(a):a}}class bc extends yc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=cn(i);if(!et(r)&&!cn(r)&&(i=X(i),r=X(r)),!V(e)&&ve(i)&&!ve(r))return c||(i.value=r),!0}const o=V(e)&&Ni(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,r,ve(e)?e:s);return e===X(s)&&(o?Wt(r,i)&&St(e,"set",n,r):St(e,"add",n,r)),a}deleteProperty(e,n){const r=Q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&St(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gt(n)||!_c.has(n))&&ye(e,"has",n),r}ownKeys(e){return ye(e,"iterate",V(e)?"length":on),Reflect.ownKeys(e)}}class rf extends yc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const sf=new bc,of=new rf,af=new bc(!0);const ii=t=>t,Pr=t=>Reflect.getPrototypeOf(t);function cf(t,e,n){return function(...r){const s=this.__v_raw,i=X(s),o=wn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ii:e?oi:Te;return!e&&ye(i,"iterate",c?si:on),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Or(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function lf(t,e){const n={get(s){const i=this.__v_raw,o=X(i),a=X(s);t||(Wt(s,a)&&ye(o,"get",s),ye(o,"get",a));const{has:c}=Pr(o),l=e?ii:t?oi:Te;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ye(X(s),"iterate",on),s.size},has(s){const i=this.__v_raw,o=X(i),a=X(s);return t||(Wt(s,a)&&ye(o,"has",s),ye(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=X(a),l=e?ii:t?oi:Te;return!t&&ye(c,"iterate",on),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return Se(n,t?{add:Or("add"),set:Or("set"),delete:Or("delete"),clear:Or("clear")}:{add(s){!e&&!et(s)&&!cn(s)&&(s=X(s));const i=X(this);return Pr(i).has.call(i,s)||(i.add(s),St(i,"add",s,s)),this},set(s,i){!e&&!et(i)&&!cn(i)&&(i=X(i));const o=X(this),{has:a,get:c}=Pr(o);let l=a.call(o,s);l||(s=X(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Wt(i,u)&&St(o,"set",s,i):St(o,"add",s,i),this},delete(s){const i=X(this),{has:o,get:a}=Pr(i);let c=o.call(i,s);c||(s=X(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&St(i,"delete",s,void 0),l},clear(){const s=X(this),i=s.size!==0,o=s.clear();return i&&St(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cf(s,t,e)}),n}function Hi(t,e){const n=lf(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const uf={get:Hi(!1,!1)},ff={get:Hi(!1,!0)},df={get:Hi(!0,!1)};const wc=new WeakMap,Ec=new WeakMap,vc=new WeakMap,hf=new WeakMap;function pf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mf(t){return t.__v_skip||!Object.isExtensible(t)?0:pf($u(t))}function hs(t){return cn(t)?t:Vi(t,!1,sf,uf,wc)}function Sc(t){return Vi(t,!1,af,ff,Ec)}function Ic(t){return Vi(t,!0,of,df,vc)}function Vi(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=mf(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Gn(t){return cn(t)?Gn(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function et(t){return!!(t&&t.__v_isShallow)}function ji(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function gf(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&ic(t,"__v_skip",!0),t}const Te=t=>ue(t)?hs(t):t,oi=t=>ue(t)?Ic(t):t;function ve(t){return t?t.__v_isRef===!0:!1}function Xe(t){return Tc(t,!1)}function _f(t){return Tc(t,!0)}function Tc(t,e){return ve(t)?t:new yf(t,e)}class yf{constructor(e,n){this.dep=new Bi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Te(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||et(e)||cn(e);e=r?e:X(e),Wt(e,n)&&(this._rawValue=e,this._value=r?e:Te(e),this.dep.trigger())}}function me(t){return ve(t)?t.value:t}const bf={get:(t,e,n)=>e==="__v_raw"?t:me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ve(s)&&!ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cc(t){return Gn(t)?t:new Proxy(t,bf)}class wf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return fc(this,!0),!0}get value(){const e=this.dep.track();return pc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ef(t,e,n=!1){let r,s;return j(t)?r=t:(r=t.get,s=t.set),new wf(r,s,n)}const kr={},zr=new WeakMap;let nn;function vf(t,e=!1,n=nn){if(n){let r=zr.get(n);r||zr.set(n,r=[]),r.push(t)}}function Sf(t,e,n=re){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:et(O)||s===!1||s===0?It(O,1):It(O);let u,f,h,m,_=!1,b=!1;if(ve(t)?(f=()=>t.value,_=et(t)):Gn(t)?(f=()=>l(t),_=!0):V(t)?(b=!0,_=t.some(O=>Gn(O)||et(O)),f=()=>t.map(O=>{if(ve(O))return O.value;if(Gn(O))return l(O);if(j(O))return c?c(O,2):O()})):j(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){At();try{h()}finally{Pt()}}const O=nn;nn=u;try{return c?c(t,3,[m]):t(m)}finally{nn=O}}:f=ht,e&&s){const O=f,q=s===!0?1/0:s;f=()=>It(O(),q)}const I=Yu(),C=()=>{u.stop(),I&&I.active&&xi(I.effects,u)};if(i&&e){const O=e;e=(...q)=>{O(...q),C()}}let A=b?new Array(t.length).fill(kr):kr;const k=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const q=u.run();if(s||_||(b?q.some((ce,K)=>Wt(ce,A[K])):Wt(q,A))){h&&h();const ce=nn;nn=u;try{const K=[q,A===kr?void 0:b&&A[0]===kr?[]:A,m];A=q,c?c(e,3,K):e(...K)}finally{nn=ce}}}else u.run()};return a&&a(k),u=new lc(f),u.scheduler=o?()=>o(k,!1):k,m=O=>vf(O,!1,u),h=u.onStop=()=>{const O=zr.get(u);if(O){if(c)c(O,4);else for(const q of O)q();zr.delete(u)}},e?r?k(!0):A=u.run():o?o(k.bind(null,!0),!0):u.run(),C.pause=u.pause.bind(u),C.resume=u.resume.bind(u),C.stop=C,C}function It(t,e=1/0,n){if(e<=0||!ue(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ve(t))It(t.value,e,n);else if(V(t))for(let r=0;r<t.length;r++)It(t[r],e,n);else if(tc(t)||wn(t))t.forEach(r=>{It(r,e,n)});else if(sc(t)){for(const r in t)It(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&It(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gr(t,e,n,r){try{return r?t(...r):t()}catch(s){ps(s,e,n)}}function _t(t,e,n,r){if(j(t)){const s=gr(t,e,n,r);return s&&nc(s)&&s.catch(i=>{ps(i,e,n)}),s}if(V(t)){const s=[];for(let i=0;i<t.length;i++)s.push(_t(t[i],e,n,r));return s}}function ps(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){At(),gr(i,null,10,[t,c,l]),Pt();return}}If(t,n,s,r,o)}function If(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ce=[];let ft=-1;const En=[];let Ut=null,mn=0;const Rc=Promise.resolve();let Kr=null;function Ac(t){const e=Kr||Rc;return t?e.then(this?t.bind(this):t):e}function Tf(t){let e=ft+1,n=Ce.length;for(;e<n;){const r=e+n>>>1,s=Ce[r],i=ir(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Wi(t){if(!(t.flags&1)){const e=ir(t),n=Ce[Ce.length-1];!n||!(t.flags&2)&&e>=ir(n)?Ce.push(t):Ce.splice(Tf(e),0,t),t.flags|=1,Pc()}}function Pc(){Kr||(Kr=Rc.then(kc))}function Cf(t){V(t)?En.push(...t):Ut&&t.id===-1?Ut.splice(mn+1,0,t):t.flags&1||(En.push(t),t.flags|=1),Pc()}function yo(t,e,n=ft+1){for(;n<Ce.length;n++){const r=Ce[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ce.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Oc(t){if(En.length){const e=[...new Set(En)].sort((n,r)=>ir(n)-ir(r));if(En.length=0,Ut){Ut.push(...e);return}for(Ut=e,mn=0;mn<Ut.length;mn++){const n=Ut[mn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ut=null,mn=0}}const ir=t=>t.id==null?t.flags&2?-1:1/0:t.id;function kc(t){try{for(ft=0;ft<Ce.length;ft++){const e=Ce[ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ft<Ce.length;ft++){const e=Ce[ft];e&&(e.flags&=-2)}ft=-1,Ce.length=0,Oc(),Kr=null,(Ce.length||En.length)&&kc()}}let He=null,xc=null;function Gr(t){const e=He;return He=t,xc=t&&t.type.__scopeId||null,e}function xe(t,e=He,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xr(-1);const i=Gr(e);let o;try{o=t(...s)}finally{Gr(i),r._d&&Xr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(t,e){if(He===null)return t;const n=bs(He),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=re]=e[s];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&It(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function en(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(At(),_t(c,n,8,[t.el,a,t,e]),Pt())}}const Rf=Symbol("_vte"),Af=t=>t.__isTeleport,Pf=Symbol("_leaveCb");function qi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,qi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Nc(t,e){return j(t)?Se({name:t.name},e,{setup:t}):t}function Dc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Jr=new WeakMap;function Jn(t,e,n,r,s=!1){if(V(t)){t.forEach((_,b)=>Jn(_,e&&(V(e)?e[b]:e),n,r,s));return}if(Yn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Jn(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?bs(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,f=a.setupState,h=X(f),m=f===re?ec:_=>Q(h,_);if(l!=null&&l!==c){if(bo(e),ge(l))u[l]=null,m(l)&&(f[l]=null);else if(ve(l)){l.value=null;const _=e;_.k&&(u[_.k]=null)}}if(j(c))gr(c,a,12,[o,u]);else{const _=ge(c),b=ve(c);if(_||b){const I=()=>{if(t.f){const C=_?m(c)?f[c]:u[c]:c.value;if(s)V(C)&&xi(C,i);else if(V(C))C.includes(i)||C.push(i);else if(_)u[c]=[i],m(c)&&(f[c]=u[c]);else{const A=[i];c.value=A,t.k&&(u[t.k]=A)}}else _?(u[c]=o,m(c)&&(f[c]=o)):b&&(c.value=o,t.k&&(u[t.k]=o))};if(o){const C=()=>{I(),Jr.delete(t)};C.id=-1,Jr.set(t,C),$e(C,n)}else bo(t),I()}}}function bo(t){const e=Jr.get(t);e&&(e.flags|=8,Jr.delete(t))}ds().requestIdleCallback;ds().cancelIdleCallback;const Yn=t=>!!t.type.__asyncLoader,Lc=t=>t.type.__isKeepAlive;function Of(t,e){Mc(t,"a",e)}function kf(t,e){Mc(t,"da",e)}function Mc(t,e,n=we){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ms(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Lc(s.parent.vnode)&&xf(r,e,n,s),s=s.parent}}function xf(t,e,n,r){const s=ms(e,t,r,!0);gs(()=>{xi(r[e],s)},n)}function ms(t,e,n=we,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{At();const a=_r(n),c=_t(e,n,t,o);return a(),Pt(),c});return r?s.unshift(i):s.push(i),i}}const Nt=t=>(e,n=we)=>{(!cr||t==="sp")&&ms(t,(...r)=>e(...r),n)},Nf=Nt("bm"),zi=Nt("m"),Df=Nt("bu"),Lf=Nt("u"),Mf=Nt("bum"),gs=Nt("um"),Uf=Nt("sp"),Ff=Nt("rtg"),Bf=Nt("rtc");function $f(t,e=we){ms("ec",t,e)}const Hf="components";function Vf(t,e){return Wf(Hf,t,!0,e)||t}const jf=Symbol.for("v-ndc");function Wf(t,e,n=!0,r=!1){const s=He||we;if(s){const i=s.type;{const a=Nd(i,!1);if(a&&(a===e||a===ze(e)||a===fs(ze(e))))return i}const o=wo(s[t]||i[t],e)||wo(s.appContext[t],e);return!o&&r?i:o}}function wo(t,e){return t&&(t[e]||t[ze(e)]||t[fs(ze(e))])}const ai=t=>t?nl(t)?bs(t):ai(t.parent):null,Xn=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ai(t.parent),$root:t=>ai(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Fc(t),$forceUpdate:t=>t.f||(t.f=()=>{Wi(t.update)}),$nextTick:t=>t.n||(t.n=Ac.bind(t.proxy)),$watch:t=>fd.bind(t)}),Ms=(t,e)=>t!==re&&!t.__isScriptSetup&&Q(t,e),qf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ms(r,e))return o[e]=1,r[e];if(s!==re&&Q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==re&&Q(n,e))return o[e]=4,n[e];ci&&(o[e]=0)}}const u=Xn[e];let f,h;if(u)return e==="$attrs"&&ye(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&Q(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ms(s,e)?(s[e]=n,!0):r!==re&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},a){let c,l;return!!(n[a]||t!==re&&a[0]!=="$"&&Q(t,a)||Ms(e,a)||(c=i[0])&&Q(c,a)||Q(r,a)||Q(Xn,a)||Q(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Eo(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ci=!0;function zf(t){const e=Fc(t),n=t.proxy,r=t.ctx;ci=!1,e.beforeCreate&&vo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:b,deactivated:I,beforeDestroy:C,beforeUnmount:A,destroyed:k,unmounted:O,render:q,renderTracked:ce,renderTriggered:K,errorCaptured:Ae,serverPrefetch:Me,expose:Ue,inheritAttrs:Ke,components:je,directives:_e,filters:Fe}=e;if(l&&Kf(l,r,null),o)for(const J in o){const z=o[J];j(z)&&(r[J]=z.bind(n))}if(s){const J=s.call(n,n);ue(J)&&(t.data=hs(J))}if(ci=!0,i)for(const J in i){const z=i[J],We=j(z)?z.bind(n,n):j(z.get)?z.get.bind(n,n):ht,st=!j(z)&&j(z.set)?z.set.bind(n):ht,pe=Je({get:We,set:st});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>pe.value,set:de=>pe.value=de})}if(a)for(const J in a)Uc(a[J],r,n,J);if(c){const J=j(c)?c.call(n):c;Reflect.ownKeys(J).forEach(z=>{Lr(z,J[z])})}u&&vo(u,t,"c");function Z(J,z){V(z)?z.forEach(We=>J(We.bind(n))):z&&J(z.bind(n))}if(Z(Nf,f),Z(zi,h),Z(Df,m),Z(Lf,_),Z(Of,b),Z(kf,I),Z($f,Ae),Z(Bf,ce),Z(Ff,K),Z(Mf,A),Z(gs,O),Z(Uf,Me),V(Ue))if(Ue.length){const J=t.exposed||(t.exposed={});Ue.forEach(z=>{Object.defineProperty(J,z,{get:()=>n[z],set:We=>n[z]=We,enumerable:!0})})}else t.exposed||(t.exposed={});q&&t.render===ht&&(t.render=q),Ke!=null&&(t.inheritAttrs=Ke),je&&(t.components=je),_e&&(t.directives=_e),Me&&Dc(t)}function Kf(t,e,n=ht){V(t)&&(t=li(t));for(const r in t){const s=t[r];let i;ue(s)?"default"in s?i=pt(s.from||r,s.default,!0):i=pt(s.from||r):i=pt(s),ve(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vo(t,e,n){_t(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Uc(t,e,n,r){let s=r.includes(".")?Xc(n,r):()=>n[r];if(ge(t)){const i=e[t];j(i)&&Mr(s,i)}else if(j(t))Mr(s,t.bind(n));else if(ue(t))if(V(t))t.forEach(i=>Uc(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Mr(s,i,t)}}function Fc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Yr(c,l,o,!0)),Yr(c,e,o)),ue(e)&&i.set(e,c),c}function Yr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yr(t,i,n,!0),s&&s.forEach(o=>Yr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Gf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gf={data:So,props:Io,emits:Io,methods:Vn,computed:Vn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Vn,directives:Vn,watch:Yf,provide:So,inject:Jf};function So(t,e){return e?t?function(){return Se(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Jf(t,e){return Vn(li(t),li(e))}function li(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Vn(t,e){return t?Se(Object.create(null),t,e):e}function Io(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Se(Object.create(null),Eo(t),Eo(e??{})):e}function Yf(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function Bc(){return{app:null,config:{isNativeTag:ec,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xf=0;function Qf(t,e){return function(r,s=null){j(r)||(r=Se({},r)),s!=null&&!ue(s)&&(s=null);const i=Bc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Xf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ld,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...f)):j(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!c){const m=l._ceVNode||le(r,s);return m.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(m,u,h),c=!0,l._container=u,u.__vue_app__=l,bs(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(_t(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=vn;vn=l;try{return u()}finally{vn=f}}};return l}}let vn=null;function Lr(t,e){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[t]=e}}function pt(t,e,n=!1){const r=Ad();if(r||vn){let s=vn?vn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}const $c={},Hc=()=>Object.create($c),Vc=t=>Object.getPrototypeOf(t)===$c;function Zf(t,e,n,r=!1){const s={},i=Hc();t.propsDefaults=Object.create(null),jc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Sc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ed(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=X(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(_s(t.emitsOptions,h))continue;const m=e[h];if(c)if(Q(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const _=ze(h);s[_]=ui(c,a,_,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{jc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=dn(f))===f||!Q(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ui(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Q(e,f))&&(delete i[f],l=!0)}l&&St(t.attrs,"set","")}function jc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(qn(c))continue;const l=e[c];let u;s&&Q(s,u=ze(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:_s(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||re;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ui(s,c,f,l[f],t,!Q(l,f))}}return o}function ui(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=_r(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===dn(n))&&(r=!0))}return r}const td=new WeakMap;function Wc(t,e,n=!1){const r=n?td:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=f=>{c=!0;const[h,m]=Wc(f,e,!0);Se(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ue(t)&&r.set(t,bn),bn;if(V(i))for(let u=0;u<i.length;u++){const f=ze(i[u]);To(f)&&(o[f]=re)}else if(i)for(const u in i){const f=ze(u);if(To(f)){const h=i[u],m=o[f]=V(h)||j(h)?{type:h}:Se({},h),_=m.type;let b=!1,I=!0;if(V(_))for(let C=0;C<_.length;++C){const A=_[C],k=j(A)&&A.name;if(k==="Boolean"){b=!0;break}else k==="String"&&(I=!1)}else b=j(_)&&_.name==="Boolean";m[0]=b,m[1]=I,(b||Q(m,"default"))&&a.push(f)}}const l=[o,a];return ue(t)&&r.set(t,l),l}function To(t){return t[0]!=="$"&&!qn(t)}const Ki=t=>t==="_"||t==="_ctx"||t==="$stable",Gi=t=>V(t)?t.map(dt):[dt(t)],nd=(t,e,n)=>{if(e._n)return e;const r=xe((...s)=>Gi(e(...s)),n);return r._c=!1,r},qc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ki(s))continue;const i=t[s];if(j(i))e[s]=nd(s,i,r);else if(i!=null){const o=Gi(i);e[s]=()=>o}}},zc=(t,e)=>{const n=Gi(e);t.slots.default=()=>n},Kc=(t,e,n)=>{for(const r in e)(n||!Ki(r))&&(t[r]=e[r])},rd=(t,e,n)=>{const r=t.slots=Hc();if(t.vnode.shapeFlag&32){const s=e._;s?(Kc(r,e,n),n&&ic(r,"_",s,!0)):qc(e,r)}else e&&zc(t,e)},sd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Kc(s,e,n):(i=!e.$stable,qc(e,s)),o=e}else e&&(zc(t,e),o={default:1});if(i)for(const a in s)!Ki(a)&&o[a]==null&&delete s[a]},$e=bd;function id(t){return od(t)}function od(t,e){const n=ds();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=ht,insertStaticContent:_}=t,b=(d,p,g,E=null,S=null,w=null,x=void 0,P=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Bn(d,p)&&(E=v(d),de(d,S,w,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:F,shapeFlag:D}=p;switch(T){case ys:I(d,p,g,E);break;case Kt:C(d,p,g,E);break;case Fs:d==null&&A(p,g,E,x);break;case vt:je(d,p,g,E,S,w,x,P,R);break;default:D&1?q(d,p,g,E,S,w,x,P,R):D&6?_e(d,p,g,E,S,w,x,P,R):(D&64||D&128)&&T.process(d,p,g,E,S,w,x,P,R,M)}F!=null&&S?Jn(F,d&&d.ref,w,p||d,!p):F==null&&d&&d.ref!=null&&Jn(d.ref,null,w,d,!0)},I=(d,p,g,E)=>{if(d==null)r(p.el=a(p.children),g,E);else{const S=p.el=d.el;p.children!==d.children&&l(S,p.children)}},C=(d,p,g,E)=>{d==null?r(p.el=c(p.children||""),g,E):p.el=d.el},A=(d,p,g,E)=>{[d.el,d.anchor]=_(d.children,p,g,E,d.el,d.anchor)},k=({el:d,anchor:p},g,E)=>{let S;for(;d&&d!==p;)S=h(d),r(d,g,E),d=S;r(p,g,E)},O=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),s(d),d=g;s(p)},q=(d,p,g,E,S,w,x,P,R)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),d==null?ce(p,g,E,S,w,x,P,R):Me(d,p,S,w,x,P,R)},ce=(d,p,g,E,S,w,x,P)=>{let R,T;const{props:F,shapeFlag:D,transition:U,dirs:$}=d;if(R=d.el=o(d.type,w,F&&F.is,F),D&8?u(R,d.children):D&16&&Ae(d.children,R,null,E,S,Us(d,w),x,P),$&&en(d,null,E,"created"),K(R,d,d.scopeId,x,E),F){for(const ie in F)ie!=="value"&&!qn(ie)&&i(R,ie,null,F[ie],w,E);"value"in F&&i(R,"value",null,F.value,w),(T=F.onVnodeBeforeMount)&&lt(T,E,d)}$&&en(d,null,E,"beforeMount");const G=ad(S,U);G&&U.beforeEnter(R),r(R,p,g),((T=F&&F.onVnodeMounted)||G||$)&&$e(()=>{T&&lt(T,E,d),G&&U.enter(R),$&&en(d,null,E,"mounted")},S)},K=(d,p,g,E,S)=>{if(g&&m(d,g),E)for(let w=0;w<E.length;w++)m(d,E[w]);if(S){let w=S.subTree;if(p===w||Zc(w.type)&&(w.ssContent===p||w.ssFallback===p)){const x=S.vnode;K(d,x,x.scopeId,x.slotScopeIds,S.parent)}}},Ae=(d,p,g,E,S,w,x,P,R=0)=>{for(let T=R;T<d.length;T++){const F=d[T]=P?Ft(d[T]):dt(d[T]);b(null,F,p,g,E,S,w,x,P)}},Me=(d,p,g,E,S,w,x)=>{const P=p.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:F}=p;R|=d.patchFlag&16;const D=d.props||re,U=p.props||re;let $;if(g&&tn(g,!1),($=U.onVnodeBeforeUpdate)&&lt($,g,p,d),F&&en(p,d,g,"beforeUpdate"),g&&tn(g,!0),(D.innerHTML&&U.innerHTML==null||D.textContent&&U.textContent==null)&&u(P,""),T?Ue(d.dynamicChildren,T,P,g,E,Us(p,S),w):x||z(d,p,P,null,g,E,Us(p,S),w,!1),R>0){if(R&16)Ke(P,D,U,g,S);else if(R&2&&D.class!==U.class&&i(P,"class",null,U.class,S),R&4&&i(P,"style",D.style,U.style,S),R&8){const G=p.dynamicProps;for(let ie=0;ie<G.length;ie++){const ee=G[ie],Pe=D[ee],Oe=U[ee];(Oe!==Pe||ee==="value")&&i(P,ee,Pe,Oe,S,g)}}R&1&&d.children!==p.children&&u(P,p.children)}else!x&&T==null&&Ke(P,D,U,g,S);(($=U.onVnodeUpdated)||F)&&$e(()=>{$&&lt($,g,p,d),F&&en(p,d,g,"updated")},E)},Ue=(d,p,g,E,S,w,x)=>{for(let P=0;P<p.length;P++){const R=d[P],T=p[P],F=R.el&&(R.type===vt||!Bn(R,T)||R.shapeFlag&198)?f(R.el):g;b(R,T,F,null,E,S,w,x,!0)}},Ke=(d,p,g,E,S)=>{if(p!==g){if(p!==re)for(const w in p)!qn(w)&&!(w in g)&&i(d,w,p[w],null,S,E);for(const w in g){if(qn(w))continue;const x=g[w],P=p[w];x!==P&&w!=="value"&&i(d,w,P,x,S,E)}"value"in g&&i(d,"value",p.value,g.value,S)}},je=(d,p,g,E,S,w,x,P,R)=>{const T=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:$}=p;$&&(P=P?P.concat($):$),d==null?(r(T,g,E),r(F,g,E),Ae(p.children||[],g,F,S,w,x,P,R)):D>0&&D&64&&U&&d.dynamicChildren?(Ue(d.dynamicChildren,U,g,S,w,x,P),(p.key!=null||S&&p===S.subTree)&&Gc(d,p,!0)):z(d,p,g,F,S,w,x,P,R)},_e=(d,p,g,E,S,w,x,P,R)=>{p.slotScopeIds=P,d==null?p.shapeFlag&512?S.ctx.activate(p,g,E,x,R):Fe(p,g,E,S,w,x,R):yt(d,p,R)},Fe=(d,p,g,E,S,w,x)=>{const P=d.component=Rd(d,E,S);if(Lc(d)&&(P.ctx.renderer=M),Pd(P,!1,x),P.asyncDep){if(S&&S.registerDep(P,Z,x),!d.el){const R=P.subTree=le(Kt);C(null,R,p,g),d.placeholder=R.el}}else Z(P,d,p,g,S,w,x)},yt=(d,p,g)=>{const E=p.component=d.component;if(_d(d,p,g))if(E.asyncDep&&!E.asyncResolved){J(E,p,g);return}else E.next=p,E.update();else p.el=d.el,E.vnode=p},Z=(d,p,g,E,S,w,x)=>{const P=()=>{if(d.isMounted){let{next:D,bu:U,u:$,parent:G,vnode:ie}=d;{const at=Jc(d);if(at){D&&(D.el=ie.el,J(d,D,x)),at.asyncDep.then(()=>{d.isUnmounted||P()});return}}let ee=D,Pe;tn(d,!1),D?(D.el=ie.el,J(d,D,x)):D=ie,U&&Dr(U),(Pe=D.props&&D.props.onVnodeBeforeUpdate)&&lt(Pe,G,D,ie),tn(d,!0);const Oe=Ro(d),ot=d.subTree;d.subTree=Oe,b(ot,Oe,f(ot.el),v(ot),d,S,w),D.el=Oe.el,ee===null&&yd(d,Oe.el),$&&$e($,S),(Pe=D.props&&D.props.onVnodeUpdated)&&$e(()=>lt(Pe,G,D,ie),S)}else{let D;const{el:U,props:$}=p,{bm:G,m:ie,parent:ee,root:Pe,type:Oe}=d,ot=Yn(p);tn(d,!1),G&&Dr(G),!ot&&(D=$&&$.onVnodeBeforeMount)&&lt(D,ee,p),tn(d,!0);{Pe.ce&&Pe.ce._def.shadowRoot!==!1&&Pe.ce._injectChildStyle(Oe);const at=d.subTree=Ro(d);b(null,at,g,E,d,S,w),p.el=at.el}if(ie&&$e(ie,S),!ot&&(D=$&&$.onVnodeMounted)){const at=p;$e(()=>lt(D,ee,at),S)}(p.shapeFlag&256||ee&&Yn(ee.vnode)&&ee.vnode.shapeFlag&256)&&d.a&&$e(d.a,S),d.isMounted=!0,p=g=E=null}};d.scope.on();const R=d.effect=new lc(P);d.scope.off();const T=d.update=R.run.bind(R),F=d.job=R.runIfDirty.bind(R);F.i=d,F.id=d.uid,R.scheduler=()=>Wi(F),tn(d,!0),T()},J=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,ed(d,p.props,E,g),sd(d,p.children,g),At(),yo(d),Pt()},z=(d,p,g,E,S,w,x,P,R=!1)=>{const T=d&&d.children,F=d?d.shapeFlag:0,D=p.children,{patchFlag:U,shapeFlag:$}=p;if(U>0){if(U&128){st(T,D,g,E,S,w,x,P,R);return}else if(U&256){We(T,D,g,E,S,w,x,P,R);return}}$&8?(F&16&&qe(T,S,w),D!==T&&u(g,D)):F&16?$&16?st(T,D,g,E,S,w,x,P,R):qe(T,S,w,!0):(F&8&&u(g,""),$&16&&Ae(D,g,E,S,w,x,P,R))},We=(d,p,g,E,S,w,x,P,R)=>{d=d||bn,p=p||bn;const T=d.length,F=p.length,D=Math.min(T,F);let U;for(U=0;U<D;U++){const $=p[U]=R?Ft(p[U]):dt(p[U]);b(d[U],$,g,null,S,w,x,P,R)}T>F?qe(d,S,w,!0,!1,D):Ae(p,g,E,S,w,x,P,R,D)},st=(d,p,g,E,S,w,x,P,R)=>{let T=0;const F=p.length;let D=d.length-1,U=F-1;for(;T<=D&&T<=U;){const $=d[T],G=p[T]=R?Ft(p[T]):dt(p[T]);if(Bn($,G))b($,G,g,null,S,w,x,P,R);else break;T++}for(;T<=D&&T<=U;){const $=d[D],G=p[U]=R?Ft(p[U]):dt(p[U]);if(Bn($,G))b($,G,g,null,S,w,x,P,R);else break;D--,U--}if(T>D){if(T<=U){const $=U+1,G=$<F?p[$].el:E;for(;T<=U;)b(null,p[T]=R?Ft(p[T]):dt(p[T]),g,G,S,w,x,P,R),T++}}else if(T>U)for(;T<=D;)de(d[T],S,w,!0),T++;else{const $=T,G=T,ie=new Map;for(T=G;T<=U;T++){const Be=p[T]=R?Ft(p[T]):dt(p[T]);Be.key!=null&&ie.set(Be.key,T)}let ee,Pe=0;const Oe=U-G+1;let ot=!1,at=0;const Un=new Array(Oe);for(T=0;T<Oe;T++)Un[T]=0;for(T=$;T<=D;T++){const Be=d[T];if(Pe>=Oe){de(Be,S,w,!0);continue}let ct;if(Be.key!=null)ct=ie.get(Be.key);else for(ee=G;ee<=U;ee++)if(Un[ee-G]===0&&Bn(Be,p[ee])){ct=ee;break}ct===void 0?de(Be,S,w,!0):(Un[ct-G]=T+1,ct>=at?at=ct:ot=!0,b(Be,p[ct],g,null,S,w,x,P,R),Pe++)}const fo=ot?cd(Un):bn;for(ee=fo.length-1,T=Oe-1;T>=0;T--){const Be=G+T,ct=p[Be],ho=p[Be+1],po=Be+1<F?ho.el||ho.placeholder:E;Un[T]===0?b(null,ct,g,po,S,w,x,P,R):ot&&(ee<0||T!==fo[ee]?pe(ct,g,po,2):ee--)}}},pe=(d,p,g,E,S=null)=>{const{el:w,type:x,transition:P,children:R,shapeFlag:T}=d;if(T&6){pe(d.component.subTree,p,g,E);return}if(T&128){d.suspense.move(p,g,E);return}if(T&64){x.move(d,p,g,M);return}if(x===vt){r(w,p,g);for(let D=0;D<R.length;D++)pe(R[D],p,g,E);r(d.anchor,p,g);return}if(x===Fs){k(d,p,g);return}if(E!==2&&T&1&&P)if(E===0)P.beforeEnter(w),r(w,p,g),$e(()=>P.enter(w),S);else{const{leave:D,delayLeave:U,afterLeave:$}=P,G=()=>{d.ctx.isUnmounted?s(w):r(w,p,g)},ie=()=>{w._isLeaving&&w[Pf](!0),D(w,()=>{G(),$&&$()})};U?U(w,G,ie):ie()}else r(w,p,g)},de=(d,p,g,E=!1,S=!1)=>{const{type:w,props:x,ref:P,children:R,dynamicChildren:T,shapeFlag:F,patchFlag:D,dirs:U,cacheIndex:$}=d;if(D===-2&&(S=!1),P!=null&&(At(),Jn(P,null,g,d,!0),Pt()),$!=null&&(p.renderCache[$]=void 0),F&256){p.ctx.deactivate(d);return}const G=F&1&&U,ie=!Yn(d);let ee;if(ie&&(ee=x&&x.onVnodeBeforeUnmount)&&lt(ee,p,d),F&6)Zt(d.component,g,E);else{if(F&128){d.suspense.unmount(g,E);return}G&&en(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,g,M,E):T&&!T.hasOnce&&(w!==vt||D>0&&D&64)?qe(T,p,g,!1,!0):(w===vt&&D&384||!S&&F&16)&&qe(R,p,g),E&&it(d)}(ie&&(ee=x&&x.onVnodeUnmounted)||G)&&$e(()=>{ee&&lt(ee,p,d),G&&en(d,null,p,"unmounted")},g)},it=d=>{const{type:p,el:g,anchor:E,transition:S}=d;if(p===vt){Ge(g,E);return}if(p===Fs){O(d);return}const w=()=>{s(g),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(d.shapeFlag&1&&S&&!S.persisted){const{leave:x,delayLeave:P}=S,R=()=>x(g,w);P?P(d.el,w,R):R()}else w()},Ge=(d,p)=>{let g;for(;d!==p;)g=h(d),s(d),d=g;s(p)},Zt=(d,p,g)=>{const{bum:E,scope:S,job:w,subTree:x,um:P,m:R,a:T}=d;Co(R),Co(T),E&&Dr(E),S.stop(),w&&(w.flags|=8,de(x,d,p,g)),P&&$e(P,p),$e(()=>{d.isUnmounted=!0},p)},qe=(d,p,g,E=!1,S=!1,w=0)=>{for(let x=w;x<d.length;x++)de(d[x],p,g,E,S)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),g=p&&p[Rf];return g?h(g):p};let L=!1;const N=(d,p,g)=>{d==null?p._vnode&&de(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,g),p._vnode=d,L||(L=!0,yo(),Oc(),L=!1)},M={p:b,um:de,m:pe,r:it,mt:Fe,mc:Ae,pc:z,pbc:Ue,n:v,o:t};return{render:N,hydrate:void 0,createApp:Qf(N)}}function Us({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function tn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ad(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gc(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ft(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Gc(o,a)),a.type===ys&&a.patchFlag!==-1&&(a.el=o.el),a.type===Kt&&!a.el&&(a.el=o.el)}}function cd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Jc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jc(e)}function Co(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ld=Symbol.for("v-scx"),ud=()=>pt(ld);function Mr(t,e,n){return Yc(t,e,n)}function Yc(t,e,n=re){const{immediate:r,deep:s,flush:i,once:o}=n,a=Se({},n),c=e&&r||!e&&i!=="post";let l;if(cr){if(i==="sync"){const m=ud();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=ht,m.resume=ht,m.pause=ht,m}}const u=we;a.call=(m,_,b)=>_t(m,u,_,b);let f=!1;i==="post"?a.scheduler=m=>{$e(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,_)=>{_?m():Wi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Sf(t,e,a);return cr&&(l?l.push(h):c&&h()),h}function fd(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?Xc(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=_r(this),a=Yc(s,i.bind(r),n);return o(),a}function Xc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const dd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ze(e)}Modifiers`]||t[`${dn(e)}Modifiers`];function hd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&dd(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ge(u)?u.trim():u)),o.number&&(s=n.map(ti)));let a,c=r[a=ks(e)]||r[a=ks(ze(e))];!c&&i&&(c=r[a=ks(dn(e))]),c&&_t(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(l,t,6,s)}}const pd=new WeakMap;function Qc(t,e,n=!1){const r=n?pd:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=Qc(l,e,!0);u&&(a=!0,Se(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ue(t)&&r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):Se(o,i),ue(t)&&r.set(t,o),o)}function _s(t,e){return!t||!cs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,dn(e))||Q(t,e))}function Ro(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:m,ctx:_,inheritAttrs:b}=t,I=Gr(t);let C,A;try{if(n.shapeFlag&4){const O=s||r,q=O;C=dt(l.call(q,O,u,f,m,h,_)),A=a}else{const O=e;C=dt(O.length>1?O(f,{attrs:a,slots:o,emit:c}):O(f,null)),A=e.props?a:md(a)}}catch(O){Qn.length=0,ps(O,t,1),C=le(Kt)}let k=C;if(A&&b!==!1){const O=Object.keys(A),{shapeFlag:q}=k;O.length&&q&7&&(i&&O.some(ki)&&(A=gd(A,i)),k=Rn(k,A,!1,!0))}return n.dirs&&(k=Rn(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&qi(k,n.transition),C=k,Gr(I),C}const md=t=>{let e;for(const n in t)(n==="class"||n==="style"||cs(n))&&((e||(e={}))[n]=t[n]);return e},gd=(t,e)=>{const n={};for(const r in t)(!ki(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function _d(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ao(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!_s(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ao(r,o,l):!0:!!o;return!1}function Ao(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_s(n,i))return!0}return!1}function yd({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Zc=t=>t.__isSuspense;function bd(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Cf(t)}const vt=Symbol.for("v-fgt"),ys=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),Qn=[];let Ve=null;function se(t=!1){Qn.push(Ve=t?null:[])}function wd(){Qn.pop(),Ve=Qn[Qn.length-1]||null}let ar=1;function Xr(t,e=!1){ar+=t,t<0&&Ve&&e&&(Ve.hasOnce=!0)}function el(t){return t.dynamicChildren=ar>0?Ve||bn:null,wd(),ar>0&&Ve&&Ve.push(t),t}function ae(t,e,n,r,s,i){return el(H(t,e,n,r,s,i,!0))}function Ed(t,e,n,r,s){return el(le(t,e,n,r,s,!0))}function Qr(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const tl=({key:t})=>t??null,Ur=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||ve(t)||j(t)?{i:He,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tl(e),ref:e&&Ur(e),scopeId:xc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:He};return a?(Ji(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),ar>0&&!o&&Ve&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ve.push(c),c}const le=vd;function vd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===jf)&&(t=Kt),Qr(t)){const a=Rn(t,e,!0);return n&&Ji(a,n),ar>0&&!i&&Ve&&(a.shapeFlag&6?Ve[Ve.indexOf(t)]=a:Ve.push(a)),a.patchFlag=-2,a}if(Dd(t)&&(t=t.__vccOpts),e){e=Sd(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=Li(a)),ue(c)&&(ji(c)&&!V(c)&&(c=Se({},c)),e.style=Di(c))}const o=ge(t)?1:Zc(t)?128:Af(t)?64:ue(t)?4:j(t)?2:0;return H(t,e,n,r,s,o,i,!0)}function Sd(t){return t?ji(t)||Vc(t)?Se({},t):t:null}function Rn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Id(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&tl(l),ref:e&&e.ref?n&&i?V(i)?i.concat(Ur(e)):[i,Ur(e)]:Ur(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&qi(u,c.clone(u)),u}function he(t=" ",e=0){return le(ys,null,t,e)}function Ot(t="",e=!1){return e?(se(),Ed(Kt,null,t)):le(Kt,null,t)}function dt(t){return t==null||typeof t=="boolean"?le(Kt):V(t)?le(vt,null,t.slice()):Qr(t)?Ft(t):le(ys,null,String(t))}function Ft(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rn(t)}function Ji(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ji(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Vc(e)?e._ctx=He:s===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:He},n=32):(e=String(e),r&64?(n=16,e=[he(e)]):n=8);t.children=e,t.shapeFlag|=n}function Id(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Li([e.class,r.class]));else if(s==="style")e.style=Di([e.style,r.style]);else if(cs(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function lt(t,e,n,r=null){_t(t,e,7,[n,r])}const Td=Bc();let Cd=0;function Rd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Td,i={uid:Cd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ju(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wc(r,s),emitsOptions:Qc(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hd.bind(null,i),t.ce&&t.ce(i),i}let we=null;const Ad=()=>we||He;let Zr,fi;{const t=ds(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zr=e("__VUE_INSTANCE_SETTERS__",n=>we=n),fi=e("__VUE_SSR_SETTERS__",n=>cr=n)}const _r=t=>{const e=we;return Zr(t),t.scope.on(),()=>{t.scope.off(),Zr(e)}},Po=()=>{we&&we.scope.off(),Zr(null)};function nl(t){return t.vnode.shapeFlag&4}let cr=!1;function Pd(t,e=!1,n=!1){e&&fi(e);const{props:r,children:s}=t.vnode,i=nl(t);Zf(t,r,i,e),rd(t,s,n||e);const o=i?Od(t,e):void 0;return e&&fi(!1),o}function Od(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qf);const{setup:r}=n;if(r){At();const s=t.setupContext=r.length>1?xd(t):null,i=_r(t),o=gr(r,t,0,[t.props,s]),a=nc(o);if(Pt(),i(),(a||t.sp)&&!Yn(t)&&Dc(t),a){if(o.then(Po,Po),e)return o.then(c=>{Oo(t,c)}).catch(c=>{ps(c,t,0)});t.asyncDep=o}else Oo(t,o)}else rl(t)}function Oo(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Cc(e)),rl(t)}function rl(t,e,n){const r=t.type;t.render||(t.render=r.render||ht);{const s=_r(t);At();try{zf(t)}finally{Pt(),s()}}}const kd={get(t,e){return ye(t,"get",""),t[e]}};function xd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kd),slots:t.slots,emit:t.emit,expose:e}}function bs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cc(gf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xn)return Xn[n](t)},has(e,n){return n in e||n in Xn}})):t.proxy}function Nd(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function Dd(t){return j(t)&&"__vccOpts"in t}const Je=(t,e)=>Ef(t,e,cr);function sl(t,e,n){const r=(i,o,a)=>{Xr(-1);try{return le(i,o,a)}finally{Xr(1)}},s=arguments.length;return s===2?ue(e)&&!V(e)?Qr(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qr(n)&&(n=[n]),r(t,e,n))}const Ld="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let di;const ko=typeof window<"u"&&window.trustedTypes;if(ko)try{di=ko.createPolicy("vue",{createHTML:t=>t})}catch{}const il=di?t=>di.createHTML(t):t=>t,Md="http://www.w3.org/2000/svg",Ud="http://www.w3.org/1998/Math/MathML",Et=typeof document<"u"?document:null,xo=Et&&Et.createElement("template"),Fd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Et.createElementNS(Md,t):e==="mathml"?Et.createElementNS(Ud,t):n?Et.createElement(t,{is:n}):Et.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Et.createTextNode(t),createComment:t=>Et.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Et.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xo.innerHTML=il(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=xo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Bd=Symbol("_vtc");function $d(t,e,n){const r=t[Bd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const No=Symbol("_vod"),Hd=Symbol("_vsh"),Vd=Symbol(""),jd=/(?:^|;)\s*display\s*:/;function Wd(t,e,n){const r=t.style,s=ge(n);let i=!1;if(n&&!s){if(e)if(ge(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Fr(r,a,"")}else for(const o in e)n[o]==null&&Fr(r,o,"");for(const o in n)o==="display"&&(i=!0),Fr(r,o,n[o])}else if(s){if(e!==n){const o=r[Vd];o&&(n+=";"+o),r.cssText=n,i=jd.test(n)}}else e&&t.removeAttribute("style");No in t&&(t[No]=i?r.display:"",t[Hd]&&(r.display="none"))}const Do=/\s*!important$/;function Fr(t,e,n){if(V(n))n.forEach(r=>Fr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=qd(t,e);Do.test(n)?t.setProperty(dn(r),n.replace(Do,""),"important"):t[r]=n}}const Lo=["Webkit","Moz","ms"],Bs={};function qd(t,e){const n=Bs[e];if(n)return n;let r=ze(e);if(r!=="filter"&&r in t)return Bs[e]=r;r=fs(r);for(let s=0;s<Lo.length;s++){const i=Lo[s]+r;if(i in t)return Bs[e]=i}return e}const Mo="http://www.w3.org/1999/xlink";function Uo(t,e,n,r,s,i=Gu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mo,e.slice(6,e.length)):t.setAttributeNS(Mo,e,n):n==null||i&&!oc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gt(n)?String(n):n)}function Fo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?il(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=oc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function gn(t,e,n,r){t.addEventListener(e,n,r)}function zd(t,e,n,r){t.removeEventListener(e,n,r)}const Bo=Symbol("_vei");function Kd(t,e,n,r,s=null){const i=t[Bo]||(t[Bo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Gd(e);if(r){const l=i[e]=Xd(r,s);gn(t,a,l,c)}else o&&(zd(t,a,o,c),i[e]=void 0)}}const $o=/(?:Once|Passive|Capture)$/;function Gd(t){let e;if($o.test(t)){e={};let r;for(;r=t.match($o);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dn(t.slice(2)),e]}let $s=0;const Jd=Promise.resolve(),Yd=()=>$s||(Jd.then(()=>$s=0),$s=Date.now());function Xd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_t(Qd(r,n.value),e,5,[r])};return n.value=t,n.attached=Yd(),n}function Qd(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Zd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?$d(t,r,o):e==="style"?Wd(t,n,r):cs(e)?ki(e)||Kd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eh(t,e,r,o))?(Fo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Uo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ge(r))?Fo(t,ze(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Uo(t,e,r,o))};function eh(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ho(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ho(e)&&ge(n)?!1:e in t}const Vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Dr(e,n):e};function th(t){t.target.composing=!0}function jo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hs=Symbol("_assign"),lr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Hs]=Vo(s);const i=r||s.props&&s.props.type==="number";gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ti(a)),t[Hs](a)}),n&&gn(t,"change",()=>{t.value=t.value.trim()}),e||(gn(t,"compositionstart",th),gn(t,"compositionend",jo),gn(t,"change",jo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Hs]=Vo(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?ti(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},nh=Se({patchProp:Zd},Fd);let Wo;function rh(){return Wo||(Wo=id(nh))}const sh=((...t)=>{const e=rh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=oh(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ih(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function ih(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function oh(t){return ge(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const _n=typeof document<"u";function ol(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ah(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ol(t.default)}const Y=Object.assign;function Vs(t,e){const n={};for(const r in e){const s=e[r];n[r]=tt(s)?s.map(t):t(s)}return n}const Zn=()=>{},tt=Array.isArray,al=/#/g,ch=/&/g,lh=/\//g,uh=/=/g,fh=/\?/g,cl=/\+/g,dh=/%5B/g,hh=/%5D/g,ll=/%5E/g,ph=/%60/g,ul=/%7B/g,mh=/%7C/g,fl=/%7D/g,gh=/%20/g;function Yi(t){return encodeURI(""+t).replace(mh,"|").replace(dh,"[").replace(hh,"]")}function _h(t){return Yi(t).replace(ul,"{").replace(fl,"}").replace(ll,"^")}function hi(t){return Yi(t).replace(cl,"%2B").replace(gh,"+").replace(al,"%23").replace(ch,"%26").replace(ph,"`").replace(ul,"{").replace(fl,"}").replace(ll,"^")}function yh(t){return hi(t).replace(uh,"%3D")}function bh(t){return Yi(t).replace(al,"%23").replace(fh,"%3F")}function wh(t){return t==null?"":bh(t).replace(lh,"%2F")}function ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Eh=/\/$/,vh=t=>t.replace(Eh,"");function js(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ch(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ur(o)}}function Sh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ih(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&An(e.matched[r],n.matched[s])&&dl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function An(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Th(t[n],e[n]))return!1;return!0}function Th(t,e){return tt(t)?zo(t,e):tt(e)?zo(e,t):t===e}function zo(t,e){return tt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ch(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fr;(function(t){t.pop="pop",t.push="push"})(fr||(fr={}));var er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(er||(er={}));function Rh(t){if(!t)if(_n){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vh(t)}const Ah=/^[^#]+#/;function Ph(t,e){return t.replace(Ah,"#")+e}function Oh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ws=()=>({left:window.scrollX,top:window.scrollY});function kh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Oh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ko(t,e){return(history.state?history.state.position-e:-1)+t}const pi=new Map;function xh(t,e){pi.set(t,e)}function Nh(t){const e=pi.get(t);return pi.delete(t),e}let Dh=()=>location.protocol+"//"+location.host;function hl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),qo(c,"")}return qo(n,t)+r+s}function Lh(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=hl(t,location),_=n.value,b=e.value;let I=0;if(h){if(n.value=m,e.value=h,o&&o===_){o=null;return}I=b?h.position-b.position:0}else r(m);s.forEach(C=>{C(n.value,_,{delta:I,type:fr.pop,direction:I?I>0?er.forward:er.back:er.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return i.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(Y({},h.state,{scroll:ws()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Go(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ws():null}}function Mh(t){const{history:e,location:n}=window,r={value:hl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Dh()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=Y({},e.state,Go(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Y({},s.value,e.state,{forward:c,scroll:ws()});i(u.current,u,!0);const f=Y({},Go(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Uh(t){t=Rh(t);const e=Mh(t),n=Lh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Y({location:"",base:t,go:r,createHref:Ph.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fh(t){return typeof t=="string"||t&&typeof t=="object"}function pl(t){return typeof t=="string"||typeof t=="symbol"}const ml=Symbol("");var Jo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jo||(Jo={}));function Pn(t,e){return Y(new Error,{type:t,[ml]:!0},e)}function wt(t,e){return t instanceof Error&&ml in t&&(e==null||!!(t.type&e))}const Yo="[^/]+?",Bh={sensitive:!1,strict:!1,start:!0,end:!0},$h=/[.+*?^${}()[\]/\\]/g;function Hh(t,e){const n=Y({},Bh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace($h,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:b,optional:I,regexp:C}=h;i.push({name:_,repeatable:b,optional:I});const A=C||Yo;if(A!==Yo){m+=10;try{new RegExp(`(${A})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+O.message)}}let k=b?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(k=I&&l.length<2?`(?:/${k})`:"/"+k),I&&(k+="?"),s+=k,m+=20,I&&(m+=-8),b&&(m+=-20),A===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=i[h-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:b,optional:I}=m,C=_ in l?l[_]:"";if(tt(C)&&!b)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=tt(C)?C.join("/"):C;if(!A)if(I)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Vh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Vh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xo(r))return 1;if(Xo(s))return-1}return s.length-r.length}function Xo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jh={type:0,value:""},Wh=/[a-zA-Z0-9_]/;function qh(t){if(!t)return[[]];if(t==="/")return[[jh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Wh.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function zh(t,e,n){const r=Hh(qh(t.path),n),s=Y(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kh(t,e){const n=[],r=new Map;e=ta({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,m){const _=!m,b=Zo(f);b.aliasOf=m&&m.record;const I=ta(e,f),C=[b];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const q of O)C.push(Zo(Y({},b,{components:m?m.record.components:b.components,path:q,aliasOf:m?m.record:b})))}let A,k;for(const O of C){const{path:q}=O;if(h&&q[0]!=="/"){const ce=h.record.path,K=ce[ce.length-1]==="/"?"":"/";O.path=h.record.path+(q&&K+q)}if(A=zh(O,h,I),m?m.alias.push(A):(k=k||A,k!==A&&k.alias.push(A),_&&f.name&&!ea(A)&&o(f.name)),_l(A)&&c(A),b.children){const ce=b.children;for(let K=0;K<ce.length;K++)i(ce[K],A,m&&m.children[K])}m=m||A}return k?()=>{o(k)}:Zn}function o(f){if(pl(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const h=Yh(f,n);n.splice(h,0,f),f.record.name&&!ea(f)&&r.set(f.record.name,f)}function l(f,h){let m,_={},b,I;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Pn(1,{location:f});I=m.record.name,_=Y(Qo(h.params,m.keys.filter(k=>!k.optional).concat(m.parent?m.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&Qo(f.params,m.keys.map(k=>k.name))),b=m.stringify(_)}else if(f.path!=null)b=f.path,m=n.find(k=>k.re.test(b)),m&&(_=m.parse(b),I=m.record.name);else{if(m=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!m)throw Pn(1,{location:f,currentLocation:h});I=m.record.name,_=Y({},h.params,f.params),b=m.stringify(_)}const C=[];let A=m;for(;A;)C.unshift(A.record),A=A.parent;return{name:I,path:b,params:_,matched:C,meta:Jh(C)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Qo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Gh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Gh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ea(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Jh(t){return t.reduce((e,n)=>Y(e,n.meta),{})}function ta(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Yh(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;gl(t,e[i])<0?r=i:n=i+1}const s=Xh(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Xh(t){let e=t;for(;e=e.parent;)if(_l(e)&&gl(t,e)===0)return e}function _l({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Qh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cl," "),o=i.indexOf("="),a=ur(o<0?i:i.slice(0,o)),c=o<0?null:ur(i.slice(o+1));if(a in e){let l=e[a];tt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function na(t){let e="";for(let n in t){const r=t[n];if(n=yh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(tt(r)?r.map(i=>i&&hi(i)):[r&&hi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Zh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=tt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ep=Symbol(""),ra=Symbol(""),Es=Symbol(""),yl=Symbol(""),mi=Symbol("");function $n(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(Pn(4,{from:n,to:e})):h instanceof Error?c(h):Fh(h)?c(Pn(2,{from:e,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function Ws(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ol(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Bt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ah(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Bt(m,n,r,o,a,s)()}))}}return i}function sa(t){const e=pt(Es),n=pt(yl),r=Je(()=>{const c=me(t.to);return e.resolve(c)}),s=Je(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(An.bind(null,u));if(h>-1)return h;const m=ia(c[l-2]);return l>1&&ia(u)===m&&f[f.length-1].path!==m?f.findIndex(An.bind(null,c[l-2])):h}),i=Je(()=>s.value>-1&&sp(n.params,r.value.params)),o=Je(()=>s.value>-1&&s.value===n.matched.length-1&&dl(n.params,r.value.params));function a(c={}){if(rp(c)){const l=e[me(t.replace)?"replace":"push"](me(t.to)).catch(Zn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Je(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function tp(t){return t.length===1?t[0]:t}const np=Nc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:sa,setup(t,{slots:e}){const n=hs(sa(t)),{options:r}=pt(Es),s=Je(()=>({[oa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&tp(e.default(n));return t.custom?i:sl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ne=np;function rp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!tt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ia(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oa=(t,e,n)=>t??e??n,ip=Nc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=pt(mi),s=Je(()=>t.route||r.value),i=pt(ra,0),o=Je(()=>{let l=me(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Je(()=>s.value.matched[o.value]);Lr(ra,Je(()=>o.value+1)),Lr(ep,a),Lr(mi,s);const c=Xe();return Mr(()=>[c.value,a.value,t.name],([l,u,f],[h,m,_])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!An(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return aa(n.default,{Component:h,route:l});const m=f.props[u],_=m?m===!0?l.params:typeof m=="function"?m(l):m:null,I=sl(h,Y({},_,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return aa(n.default,{Component:I,route:l})||I}}});function aa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const op=ip;function ap(t){const e=Kh(t.routes,t),n=t.parseQuery||Qh,r=t.stringifyQuery||na,s=t.history,i=$n(),o=$n(),a=$n(),c=_f(Lt);let l=Lt;_n&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vs.bind(null,v=>""+v),f=Vs.bind(null,wh),h=Vs.bind(null,ur);function m(v,L){let N,M;return pl(v)?(N=e.getRecordMatcher(v),M=L):M=v,e.addRoute(M,N)}function _(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function b(){return e.getRoutes().map(v=>v.record)}function I(v){return!!e.getRecordMatcher(v)}function C(v,L){if(L=Y({},L||c.value),typeof v=="string"){const g=js(n,v,L.path),E=e.resolve({path:g.path},L),S=s.createHref(g.fullPath);return Y(g,E,{params:h(E.params),hash:ur(g.hash),redirectedFrom:void 0,href:S})}let N;if(v.path!=null)N=Y({},v,{path:js(n,v.path,L.path).path});else{const g=Y({},v.params);for(const E in g)g[E]==null&&delete g[E];N=Y({},v,{params:f(g)}),L.params=f(L.params)}const M=e.resolve(N,L),te=v.hash||"";M.params=u(h(M.params));const d=Sh(r,Y({},v,{hash:_h(te),path:M.path})),p=s.createHref(d);return Y({fullPath:d,hash:te,query:r===na?Zh(v.query):v.query||{}},M,{redirectedFrom:void 0,href:p})}function A(v){return typeof v=="string"?js(n,v,c.value.path):Y({},v)}function k(v,L){if(l!==v)return Pn(8,{from:L,to:v})}function O(v){return K(v)}function q(v){return O(Y(A(v),{replace:!0}))}function ce(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let M=typeof N=="function"?N(v):N;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=A(M):{path:M},M.params={}),Y({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function K(v,L){const N=l=C(v),M=c.value,te=v.state,d=v.force,p=v.replace===!0,g=ce(N);if(g)return K(Y(A(g),{state:typeof g=="object"?Y({},te,g.state):te,force:d,replace:p}),L||N);const E=N;E.redirectedFrom=L;let S;return!d&&Ih(r,M,N)&&(S=Pn(16,{to:E,from:M}),pe(M,M,!0,!1)),(S?Promise.resolve(S):Ue(E,M)).catch(w=>wt(w)?wt(w,2)?w:st(w):z(w,E,M)).then(w=>{if(w){if(wt(w,2))return K(Y({replace:p},A(w.to),{state:typeof w.to=="object"?Y({},te,w.to.state):te,force:d}),L||E)}else w=je(E,M,!0,p,te);return Ke(E,M,w),w})}function Ae(v,L){const N=k(v,L);return N?Promise.reject(N):Promise.resolve()}function Me(v){const L=Ge.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(v):v()}function Ue(v,L){let N;const[M,te,d]=cp(v,L);N=Ws(M.reverse(),"beforeRouteLeave",v,L);for(const g of M)g.leaveGuards.forEach(E=>{N.push(Bt(E,v,L))});const p=Ae.bind(null,v,L);return N.push(p),qe(N).then(()=>{N=[];for(const g of i.list())N.push(Bt(g,v,L));return N.push(p),qe(N)}).then(()=>{N=Ws(te,"beforeRouteUpdate",v,L);for(const g of te)g.updateGuards.forEach(E=>{N.push(Bt(E,v,L))});return N.push(p),qe(N)}).then(()=>{N=[];for(const g of d)if(g.beforeEnter)if(tt(g.beforeEnter))for(const E of g.beforeEnter)N.push(Bt(E,v,L));else N.push(Bt(g.beforeEnter,v,L));return N.push(p),qe(N)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),N=Ws(d,"beforeRouteEnter",v,L,Me),N.push(p),qe(N))).then(()=>{N=[];for(const g of o.list())N.push(Bt(g,v,L));return N.push(p),qe(N)}).catch(g=>wt(g,8)?g:Promise.reject(g))}function Ke(v,L,N){a.list().forEach(M=>Me(()=>M(v,L,N)))}function je(v,L,N,M,te){const d=k(v,L);if(d)return d;const p=L===Lt,g=_n?history.state:{};N&&(M||p?s.replace(v.fullPath,Y({scroll:p&&g&&g.scroll},te)):s.push(v.fullPath,te)),c.value=v,pe(v,L,N,p),st()}let _e;function Fe(){_e||(_e=s.listen((v,L,N)=>{if(!Zt.listening)return;const M=C(v),te=ce(M);if(te){K(Y(te,{replace:!0,force:!0}),M).catch(Zn);return}l=M;const d=c.value;_n&&xh(Ko(d.fullPath,N.delta),ws()),Ue(M,d).catch(p=>wt(p,12)?p:wt(p,2)?(K(Y(A(p.to),{force:!0}),M).then(g=>{wt(g,20)&&!N.delta&&N.type===fr.pop&&s.go(-1,!1)}).catch(Zn),Promise.reject()):(N.delta&&s.go(-N.delta,!1),z(p,M,d))).then(p=>{p=p||je(M,d,!1),p&&(N.delta&&!wt(p,8)?s.go(-N.delta,!1):N.type===fr.pop&&wt(p,20)&&s.go(-1,!1)),Ke(M,d,p)}).catch(Zn)}))}let yt=$n(),Z=$n(),J;function z(v,L,N){st(v);const M=Z.list();return M.length?M.forEach(te=>te(v,L,N)):console.error(v),Promise.reject(v)}function We(){return J&&c.value!==Lt?Promise.resolve():new Promise((v,L)=>{yt.add([v,L])})}function st(v){return J||(J=!v,Fe(),yt.list().forEach(([L,N])=>v?N(v):L()),yt.reset()),v}function pe(v,L,N,M){const{scrollBehavior:te}=t;if(!_n||!te)return Promise.resolve();const d=!N&&Nh(Ko(v.fullPath,0))||(M||!N)&&history.state&&history.state.scroll||null;return Ac().then(()=>te(v,L,d)).then(p=>p&&kh(p)).catch(p=>z(p,v,L))}const de=v=>s.go(v);let it;const Ge=new Set,Zt={currentRoute:c,listening:!0,addRoute:m,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:b,resolve:C,options:t,push:O,replace:q,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:We,install(v){const L=this;v.component("RouterLink",Ne),v.component("RouterView",op),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>me(c)}),_n&&!it&&c.value===Lt&&(it=!0,O(s.location).catch(te=>{}));const N={};for(const te in Lt)Object.defineProperty(N,te,{get:()=>c.value[te],enumerable:!0});v.provide(Es,L),v.provide(yl,Sc(N)),v.provide(mi,c);const M=v.unmount;Ge.add(v),v.unmount=function(){Ge.delete(v),Ge.size<1&&(l=Lt,_e&&_e(),_e=null,c.value=Lt,it=!1,J=!1),M()}}};function qe(v){return v.reduce((L,N)=>L.then(()=>Me(N)),Promise.resolve())}return Zt}function cp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>An(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>An(l,c))||s.push(c))}return[n,r,s]}function bl(){return pt(Es)}const Jt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},lp={class:"nav",style:{padding:"0.75rem 1rem","border-bottom":"1px solid #eee"}},up={style:{display:"flex",gap:"1rem","align-items":"center"}},fp={__name:"BHeader",setup(t){return(e,n)=>(se(),ae("header",lp,[H("nav",up,[le(me(Ne),{to:"/",class:"link"},{default:xe(()=>[...n[0]||(n[0]=[he("Home",-1)])]),_:1}),le(me(Ne),{to:"/about",class:"link"},{default:xe(()=>[...n[1]||(n[1]=[he("About",-1)])]),_:1}),le(me(Ne),{to:"/GetBookCount",class:"link"},{default:xe(()=>[...n[2]||(n[2]=[he("GetBookCount",-1)])]),_:1}),le(me(Ne),{to:"/weathercheck",class:"nav-link","active-class":"active"},{default:xe(()=>[...n[3]||(n[3]=[he(" Get Weather ",-1)])]),_:1}),le(me(Ne),{to:"/CountBookAPI",class:"nav-link","active-class":"active"},{default:xe(()=>[...n[4]||(n[4]=[he(" Count Book API ",-1)])]),_:1}),n[7]||(n[7]=H("span",{style:{flex:"1"}},null,-1)),le(me(Ne),{to:"/FireRegister",class:"link"},{default:xe(()=>[...n[5]||(n[5]=[he("Register",-1)])]),_:1}),le(me(Ne),{to:"/FireLogin",class:"link"},{default:xe(()=>[...n[6]||(n[6]=[he("Login",-1)])]),_:1})])]))}},dp=Jt(fp,[["__scopeId","data-v-6bfbea7d"]]),hp={class:"container",style:{padding:"1rem"}},pp={__name:"App",setup(t){return(e,n)=>{const r=Vf("router-view");return se(),ae("div",null,[le(dp),H("main",hp,[le(r)])])}}},mp=()=>{};var ca={};/**
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
 */const wl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new _p;const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yp=function(t){const e=wl(t);return El.encodeByteArray(e,!0)},vl=function(t){return yp(t).replace(/\./g,"")},Sl=function(t){try{return El.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wp=()=>bp().__FIREBASE_DEFAULTS__,Ep=()=>{if(typeof process>"u"||typeof ca>"u")return;const t=ca.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sl(t[1]);return e&&JSON.parse(e)},Xi=()=>{try{return mp()||wp()||Ep()||vp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sp=t=>Xi()?.emulatorHosts?.[t],Il=()=>Xi()?.config,Tl=t=>Xi()?.[`_${t}`];/**
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
 */class Ip{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function vs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tp(t){return(await fetch(t,{credentials:"include"})).ok}const tr={};function Cp(){const t={prod:[],emulator:[]};for(const e of Object.keys(tr))tr[e]?t.emulator.push(e):t.prod.push(e);return t}function Rp(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let la=!1;function Ap(t,e){if(typeof window>"u"||typeof document>"u"||!vs(window.location.host)||tr[t]===e||tr[t]||la)return;tr[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=Cp().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,m){h.setAttribute("width","24"),h.setAttribute("id",m),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{la=!0,o()},h}function u(h,m){h.setAttribute("id",m),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=Rp(r),m=n("text"),_=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),I=document.getElementById(b)||document.createElement("a"),C=n("preprendIcon"),A=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const k=h.element;a(k),u(I,b);const O=l();c(A,C),k.append(A,_,I,O),document.body.appendChild(k)}i?(_.innerText="Preview backend disconnected.",A.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(A.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Op(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Np(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Dp(){try{return typeof indexedDB=="object"}catch{return!1}}function Lp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const Mp="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Mp,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Up(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Yt(s,a,r)}}function Up(t,e){return t.replace(Fp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Fp=/\{\$([^}]+)}/g;function Bp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function On(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ua(i)&&ua(o)){if(!On(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ua(t){return t!==null&&typeof t=="object"}/**
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
 */function br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $p(t,e){const n=new Hp(t,e);return n.subscribe.bind(n)}class Hp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Vp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qs),s.error===void 0&&(s.error=qs),s.complete===void 0&&(s.complete=qs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qs(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Dt(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rn="[DEFAULT]";/**
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
 */class jp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ip;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qp(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rn){return this.instances.has(e)}getOptions(e=rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rn){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wp(t){return t===rn?void 0:t}function qp(t){return t.instantiationMode==="EAGER"}/**
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
 */class zp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Kp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Gp=ne.INFO,Jp={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Yp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Jp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=Gp,this._logHandler=Yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Xp=(t,e)=>e.some(n=>t instanceof n);let fa,da;function Qp(){return fa||(fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zp(){return da||(da=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rl=new WeakMap,gi=new WeakMap,Al=new WeakMap,zs=new WeakMap,Qi=new WeakMap;function em(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rl.set(n,t)}).catch(()=>{}),Qi.set(e,t),e}function tm(t){if(gi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gi.set(t,e)}let _i={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Al.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nm(t){_i=t(_i)}function rm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ks(this),e,...n);return Al.set(r,e.sort?e.sort():[e]),qt(r)}:Zp().includes(t)?function(...e){return t.apply(Ks(this),e),qt(Rl.get(this))}:function(...e){return qt(t.apply(Ks(this),e))}}function sm(t){return typeof t=="function"?rm(t):(t instanceof IDBTransaction&&tm(t),Xp(t,Qp())?new Proxy(t,_i):t)}function qt(t){if(t instanceof IDBRequest)return em(t);if(zs.has(t))return zs.get(t);const e=sm(t);return e!==t&&(zs.set(t,e),Qi.set(e,t)),e}const Ks=t=>Qi.get(t);function im(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=qt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(qt(o.result),c.oldVersion,c.newVersion,qt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const om=["get","getKey","getAll","getAllKeys","count"],am=["put","add","delete","clear"],Gs=new Map;function ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gs.get(e))return Gs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=am.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||om.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Gs.set(e,i),i}nm(t=>({...t,get:(e,n,r)=>ha(e,n)||t.get(e,n,r),has:(e,n)=>!!ha(e,n)||t.has(e,n)}));/**
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
 */class cm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lm(t){return t.getComponent()?.type==="VERSION"}const yi="@firebase/app",pa="0.14.2";/**
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
 */const kt=new Cl("@firebase/app"),um="@firebase/app-compat",fm="@firebase/analytics-compat",dm="@firebase/analytics",hm="@firebase/app-check-compat",pm="@firebase/app-check",mm="@firebase/auth",gm="@firebase/auth-compat",_m="@firebase/database",ym="@firebase/data-connect",bm="@firebase/database-compat",wm="@firebase/functions",Em="@firebase/functions-compat",vm="@firebase/installations",Sm="@firebase/installations-compat",Im="@firebase/messaging",Tm="@firebase/messaging-compat",Cm="@firebase/performance",Rm="@firebase/performance-compat",Am="@firebase/remote-config",Pm="@firebase/remote-config-compat",Om="@firebase/storage",km="@firebase/storage-compat",xm="@firebase/firestore",Nm="@firebase/ai",Dm="@firebase/firestore-compat",Lm="firebase",Mm="12.2.0";/**
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
 */const bi="[DEFAULT]",Um={[yi]:"fire-core",[um]:"fire-core-compat",[dm]:"fire-analytics",[fm]:"fire-analytics-compat",[pm]:"fire-app-check",[hm]:"fire-app-check-compat",[mm]:"fire-auth",[gm]:"fire-auth-compat",[_m]:"fire-rtdb",[ym]:"fire-data-connect",[bm]:"fire-rtdb-compat",[wm]:"fire-fn",[Em]:"fire-fn-compat",[vm]:"fire-iid",[Sm]:"fire-iid-compat",[Im]:"fire-fcm",[Tm]:"fire-fcm-compat",[Cm]:"fire-perf",[Rm]:"fire-perf-compat",[Am]:"fire-rc",[Pm]:"fire-rc-compat",[Om]:"fire-gcs",[km]:"fire-gcs-compat",[xm]:"fire-fst",[Dm]:"fire-fst-compat",[Nm]:"fire-vertex","fire-js":"fire-js",[Lm]:"fire-js-all"};/**
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
 */const es=new Map,Fm=new Map,wi=new Map;function ma(t,e){try{t.container.addComponent(e)}catch(n){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dr(t){const e=t.name;if(wi.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;wi.set(e,t);for(const n of es.values())ma(n,t);for(const n of Fm.values())ma(n,t);return!0}function Pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ye(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Bm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new yr("app","Firebase",Bm);/**
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
 */class $m{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=Mm;function Ol(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:bi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});if(n||(n=Il()),!n)throw zt.create("no-options");const i=es.get(s);if(i){if(On(n,i.options)&&On(r,i.config))return i;throw zt.create("duplicate-app",{appName:s})}const o=new zp(s);for(const c of wi.values())o.addComponent(c);const a=new $m(n,r,o);return es.set(s,a),a}function Hm(t=bi){const e=es.get(t);if(!e&&t===bi&&Il())return Ol();if(!e)throw zt.create("no-app",{appName:t});return e}function Sn(t,e,n){let r=Um[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(o.join(" "));return}dr(new kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Vm="firebase-heartbeat-database",jm=1,hr="firebase-heartbeat-store";let Js=null;function kl(){return Js||(Js=im(Vm,jm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hr)}catch(n){console.warn(n)}}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),Js}async function Wm(t){try{const n=(await kl()).transaction(hr),r=await n.objectStore(hr).get(xl(t));return await n.done,r}catch(e){if(e instanceof Yt)kt.warn(e.message);else{const n=zt.create("idb-get",{originalErrorMessage:e?.message});kt.warn(n.message)}}}async function ga(t,e){try{const r=(await kl()).transaction(hr,"readwrite");await r.objectStore(hr).put(e,xl(t)),await r.done}catch(n){if(n instanceof Yt)kt.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n?.message});kt.warn(r.message)}}}function xl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const qm=1024,zm=30;class Km{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_a();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>zm){const s=Ym(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){kt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_a(),{heartbeatsToSend:n,unsentEntries:r}=Gm(this._heartbeatsCache.heartbeats),s=vl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return kt.warn(e),""}}}function _a(){return new Date().toISOString().substring(0,10)}function Gm(t,e=qm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ya(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ya(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dp()?Lp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wm(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ga(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ga(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ya(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}function Ym(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Xm(t){dr(new kn("platform-logger",e=>new cm(e),"PRIVATE")),dr(new kn("heartbeat",e=>new Km(e),"PRIVATE")),Sn(yi,pa,t),Sn(yi,pa,"esm2020"),Sn("fire-js","")}Xm("");var Qm="firebase",Zm="12.2.1";/**
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
 */Sn(Qm,Zm,"app");function Nl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eg=Nl,Dl=new yr("auth","Firebase",Nl());/**
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
 */const ts=new Cl("@firebase/auth");function tg(t,...e){ts.logLevel<=ne.WARN&&ts.warn(`Auth (${wr}): ${t}`,...e)}function Br(t,...e){ts.logLevel<=ne.ERROR&&ts.error(`Auth (${wr}): ${t}`,...e)}/**
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
 */function nt(t,...e){throw Zi(t,...e)}function mt(t,...e){return Zi(t,...e)}function Ll(t,e,n){const r={...eg(),[e]:n};return new yr("auth","Firebase",r).create(e,{appName:t.name})}function Rt(t){return Ll(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dl.create(t,...e)}function B(t,e,...n){if(!t)throw Zi(e,...n)}function Tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Br(e),new Error(e)}function xt(t,e){t||Tt(e)}/**
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
 */function Ei(){return typeof self<"u"&&self.location?.href||""}function ng(){return ba()==="http:"||ba()==="https:"}function ba(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function rg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ng()||kp()||"connection"in navigator)?navigator.onLine:!0}function sg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Er{constructor(e,n){this.shortDelay=e,this.longDelay=n,xt(n>e,"Short delay should be less than long delay!"),this.isMobile=Pp()||xp()}get(){return rg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eo(t,e){xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ml{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ig={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const og=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ag=new Er(3e4,6e4);function Xt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Qt(t,e,n,r,s={}){return Ul(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=br({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return Op()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&vs(t.emulatorConfig.host)&&(l.credentials="include"),Ml.fetch()(await Fl(t,t.config.apiHost,n,a),l)})}async function Ul(t,e,n){t._canInitEmulator=!1;const r={...ig,...e};try{const s=new lg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ll(t,u,l);nt(t,u)}}catch(s){if(s instanceof Yt)throw s;nt(t,"network-request-failed",{message:String(s)})}}async function vr(t,e,n,r,s={}){const i=await Qt(t,e,n,r,s);return"mfaPendingCredential"in i&&nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Fl(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?eo(t.config,s):`${t.config.apiScheme}://${s}`;return og.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function cg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),ag.get())})}}function xr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mt(t,e,r);return s.customData._tokenResponse=n,s}function wa(t){return t!==void 0&&t.enterprise!==void 0}class ug{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fg(t,e){return Qt(t,"GET","/v2/recaptchaConfig",Xt(t,e))}/**
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
 */async function dg(t,e){return Qt(t,"POST","/v1/accounts:delete",e)}async function ns(t,e){return Qt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function nr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hg(t,e=!1){const n=Dt(t),r=await n.getIdToken(e),s=to(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:nr(Ys(s.auth_time)),issuedAtTime:nr(Ys(s.iat)),expirationTime:nr(Ys(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ys(t){return Number(t)*1e3}function to(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const s=Sl(n);return s?JSON.parse(s):(Br("Failed to decode base64 JWT payload"),null)}catch(s){return Br("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ea(t){const e=to(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&pg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rs(t){const e=t.auth,n=await t.getIdToken(),r=await pr(t,ns(e,{idToken:n}));B(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Bl(s.providerUserInfo):[],o=_g(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vi(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function gg(t){const e=Dt(t);await rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _g(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bl(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function yg(t,e){const n=await Ul(t,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Fl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&vs(t.emulatorConfig.host)&&(c.credentials="include"),Ml.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bg(t,e){return Qt(t,"POST","/v2/accounts:revokeToken",Xt(t,e))}/**
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
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ea(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Ea(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new In;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
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
 */function Mt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qe{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new mg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pr(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hg(this,e)}reload(){return gg(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ye(this.auth.app))return Promise.reject(Rt(this.auth));const e=await this.getIdToken();return await pr(this,dg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:h,isAnonymous:m,providerData:_,stsTokenManager:b}=n;B(f&&b,e,"internal-error");const I=In.fromJSON(this.name,b);B(typeof f=="string",e,"internal-error"),Mt(r,e.name),Mt(s,e.name),B(typeof h=="boolean",e,"internal-error"),B(typeof m=="boolean",e,"internal-error"),Mt(i,e.name),Mt(o,e.name),Mt(a,e.name),Mt(c,e.name),Mt(l,e.name),Mt(u,e.name);const C=new Qe({uid:f,auth:e,email:s,emailVerified:h,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:I,createdAt:l,lastLoginAt:u});return _&&Array.isArray(_)&&(C.providerData=_.map(A=>({...A}))),c&&(C._redirectEventId=c),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new In;s.updateFromServerResponse(n);const i=new Qe({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await rs(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new In;a.updateFromIdToken(r);const c=new Qe({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const va=new Map;function Ct(t){xt(t instanceof Function,"Expected a class definition");let e=va.get(t);return e?(xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,va.set(t,e),e)}/**
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
 */class $l{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$l.type="NONE";const Sa=$l;/**
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
 */function $r(t,e,n){return`firebase:${t}:${e}:${n}`}class Tn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$r(this.userKey,s.apiKey,i),this.fullPersistenceKey=$r("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ns(this.auth,{idToken:e}).catch(()=>{});return n?Qe._fromGetAccountInfoResponse(this.auth,n,e):null}return Qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Tn(Ct(Sa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ct(Sa);const o=$r(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await ns(e,{idToken:u}).catch(()=>{});if(!h)break;f=await Qe._fromGetAccountInfoResponse(e,h,u)}else f=Qe._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Tn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Tn(i,e,r))}}/**
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
 */function Ia(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zl(e))return"Blackberry";if(Kl(e))return"Webos";if(Vl(e))return"Safari";if((e.includes("chrome/")||jl(e))&&!e.includes("edge/"))return"Chrome";if(ql(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Hl(t=Re()){return/firefox\//i.test(t)}function Vl(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jl(t=Re()){return/crios\//i.test(t)}function Wl(t=Re()){return/iemobile/i.test(t)}function ql(t=Re()){return/android/i.test(t)}function zl(t=Re()){return/blackberry/i.test(t)}function Kl(t=Re()){return/webos/i.test(t)}function no(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wg(t=Re()){return no(t)&&!!window.navigator?.standalone}function Eg(){return Np()&&document.documentMode===10}function Gl(t=Re()){return no(t)||ql(t)||Kl(t)||zl(t)||/windows phone/i.test(t)||Wl(t)}/**
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
 */function Jl(t,e=[]){let n;switch(t){case"Browser":n=Ia(Re());break;case"Worker":n=`${Ia(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
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
 */class vg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Sg(t,e={}){return Qt(t,"GET","/v2/passwordPolicy",Xt(t,e))}/**
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
 */const Ig=6;class Tg{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ig,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Cg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ta(this),this.idTokenSubscription=new Ta(this),this.beforeStateQueue=new vg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Tn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ns(this,{idToken:e}),r=await Qe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ye(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rs(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ye(this.app))return Promise.reject(Rt(this));const n=e?Dt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ye(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ye(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sg(this),n=new Tg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ye(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&tg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function hn(t){return Dt(t)}class Ta{constructor(e){this.auth=e,this.observer=null,this.addObserver=$p(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ss={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rg(t){Ss=t}function Yl(t){return Ss.loadJS(t)}function Ag(){return Ss.recaptchaEnterpriseScript}function Pg(){return Ss.gapiScript}function Og(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class kg{constructor(){this.enterprise=new xg}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class xg{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ng="recaptcha-enterprise",Xl="NO_RECAPTCHA";class Dg{constructor(e){this.type=Ng,this.auth=hn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{fg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ug(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;wa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Xl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kg().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&wa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Ag();c.length!==0&&(c+=a),Yl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ca(t,e,n,r=!1,s=!1){const i=new Dg(t);let o;if(s)o=Xl;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Si(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ca(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ca(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Lg(t,e){const n=Pl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(On(i,e??{}))return s;nt(s,"already-initialized")}return n.initialize({options:e})}function Mg(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ct);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Ug(t,e,n){const r=hn(t);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ql(e),{host:o,port:a}=Fg(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(On(l,r.config.emulator)&&On(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,vs(o)?(Tp(`${i}//${o}${c}`),Ap("Auth",!0)):Bg()}function Ql(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fg(t){const e=Ql(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ra(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ra(o)}}}function Ra(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ro{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,n){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function $g(t,e){return Qt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Hg(t,e){return vr(t,"POST","/v1/accounts:signInWithPassword",Xt(t,e))}/**
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
 */async function Vg(t,e){return vr(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}async function jg(t,e){return vr(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}/**
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
 */class mr extends ro{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new mr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,n,"signInWithPassword",Hg);case"emailLink":return Vg(e,{email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,r,"signUpPassword",$g);case"emailLink":return jg(e,{idToken:n,email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cn(t,e){return vr(t,"POST","/v1/accounts:signInWithIdp",Xt(t,e))}/**
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
 */const Wg="http://localhost";class ln extends ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ln(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cn(e,n)}buildRequest(){const e={requestUri:Wg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=br(n)}return e}}/**
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
 */function qg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zg(t){const e=jn(Wn(t)).link,n=e?jn(Wn(e)).deep_link_id:null,r=jn(Wn(t)).deep_link_id;return(r?jn(Wn(r)).link:null)||r||n||e||t}class so{constructor(e){const n=jn(Wn(e)),r=n.apiKey??null,s=n.oobCode??null,i=qg(n.mode??null);B(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=zg(e);try{return new so(n)}catch{return null}}}/**
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
 */class Dn{constructor(){this.providerId=Dn.PROVIDER_ID}static credential(e,n){return mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=so.parseLink(n);return B(r,"argument-error"),mr._fromEmailAndCode(e,r.code,r.tenantId)}}Dn.PROVIDER_ID="password";Dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sr extends Zl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $t extends Sr{constructor(){super("facebook.com")}static credential(e){return ln._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
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
 */class Ht extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ln._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
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
 */class Vt extends Sr{constructor(){super("github.com")}static credential(e){return ln._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
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
 */class jt extends Sr{constructor(){super("twitter.com")}static credential(e,n){return ln._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
 */async function Kg(t,e){return vr(t,"POST","/v1/accounts:signUp",Xt(t,e))}/**
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
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qe._fromIdTokenResponse(e,r,s),o=Aa(r);return new un({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Aa(r);return new un({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Aa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ss extends Yt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ss.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ss(e,n,r,s)}}function eu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ss._fromErrorAndOperation(t,i,e,r):i})}async function Gg(t,e,n=!1){const r=await pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return un._forOperation(t,"link",r)}/**
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
 */async function Jg(t,e,n=!1){const{auth:r}=t;if(Ye(r.app))return Promise.reject(Rt(r));const s="reauthenticate";try{const i=await pr(t,eu(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=to(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),un._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&nt(r,"user-mismatch"),i}}/**
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
 */async function tu(t,e,n=!1){if(Ye(t.app))return Promise.reject(Rt(t));const r="signIn",s=await eu(t,r,e),i=await un._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Yg(t,e){return tu(hn(t),e)}/**
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
 */async function nu(t){const e=hn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Xg(t,e,n){if(Ye(t.app))return Promise.reject(Rt(t));const r=hn(t),o=await Si(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Kg).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&nu(t),c}),a=await un._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Qg(t,e,n){return Ye(t.app)?Promise.reject(Rt(t)):Yg(Dt(t),Dn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nu(t),r})}function Zg(t,e,n,r){return Dt(t).onIdTokenChanged(e,n,r)}function e_(t,e,n){return Dt(t).beforeAuthStateChanged(e,n)}function ru(t,e,n,r){return Dt(t).onAuthStateChanged(e,n,r)}function su(t){return Dt(t).signOut()}const is="__sak";/**
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
 */class iu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(is,"1"),this.storage.removeItem(is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const t_=1e3,n_=10;class ou extends iu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Eg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,n_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},t_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ou.type="LOCAL";const r_=ou;/**
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
 */class au extends iu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}au.type="SESSION";const cu=au;/**
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
 */function s_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Is{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Is(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await s_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Is.receivers=[];/**
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
 */function io(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class i_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=io("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gt(){return window}function o_(t){gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function lu(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function a_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c_(){return navigator?.serviceWorker?.controller||null}function l_(){return lu()?self:null}/**
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
 */const uu="firebaseLocalStorageDb",u_=1,os="firebaseLocalStorage",fu="fbase_key";class Ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ts(t,e){return t.transaction([os],e?"readwrite":"readonly").objectStore(os)}function f_(){const t=indexedDB.deleteDatabase(uu);return new Ir(t).toPromise()}function Ii(){const t=indexedDB.open(uu,u_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(os,{keyPath:fu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(os)?e(r):(r.close(),await f_(),e(await Ii()))})})}async function Pa(t,e,n){const r=Ts(t,!0).put({[fu]:e,value:n});return new Ir(r).toPromise()}async function d_(t,e){const n=Ts(t,!1).get(e),r=await new Ir(n).toPromise();return r===void 0?null:r.value}function Oa(t,e){const n=Ts(t,!0).delete(e);return new Ir(n).toPromise()}const h_=800,p_=3;class du{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ii(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>p_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Is._getInstance(l_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await a_(),!this.activeServiceWorker)return;this.sender=new i_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||c_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ii();return await Pa(e,is,"1"),await Oa(e,is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>d_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ts(s,!1).getAll();return new Ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}du.type="LOCAL";const m_=du;new Er(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function g_(t,e){return e?Ct(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oo extends ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function __(t){return tu(t.auth,new oo(t),t.bypassAuthState)}function y_(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Jg(n,new oo(t),t.bypassAuthState)}async function b_(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Gg(n,new oo(t),t.bypassAuthState)}/**
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
 */class hu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return __;case"linkViaPopup":case"linkViaRedirect":return b_;case"reauthViaPopup":case"reauthViaRedirect":return y_;default:nt(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const w_=new Er(2e3,1e4);class yn extends hu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const e=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,w_.get())};e()}}yn.currentPopupAction=null;/**
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
 */const E_="pendingRedirect",Hr=new Map;class v_ extends hu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const r=await S_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S_(t,e){const n=C_(e),r=T_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function I_(t,e){Hr.set(t._key(),e)}function T_(t){return Ct(t._redirectPersistence)}function C_(t){return $r(E_,t.config.apiKey,t.name)}async function R_(t,e,n=!1){if(Ye(t.app))return Promise.reject(Rt(t));const r=hn(t),s=g_(r,e),o=await new v_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const A_=600*1e3;class P_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!pu(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(mt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A_&&this.cachedEventUids.clear(),this.cachedEventUids.has(ka(e))}saveEventToCache(e){this.cachedEventUids.add(ka(e)),this.lastProcessedEventTime=Date.now()}}function ka(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pu({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function O_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pu(t);default:return!1}}/**
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
 */async function k_(t,e={}){return Qt(t,"GET","/v1/projects",e)}/**
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
 */const x_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N_=/^https?/;async function D_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k_(t);for(const n of e)try{if(L_(n))return}catch{}nt(t,"unauthorized-domain")}function L_(t){const e=Ei(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!N_.test(n))return!1;if(x_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const M_=new Er(3e4,6e4);function xa(){const t=gt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function U_(t){return new Promise((e,n)=>{function r(){xa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xa(),n(mt(t,"network-request-failed"))},timeout:M_.get()})}if(gt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(gt().gapi?.load)r();else{const s=Og("iframefcb");return gt()[s]=()=>{gapi.load?r():n(mt(t,"network-request-failed"))},Yl(`${Pg()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Vr=null,e})}let Vr=null;function F_(t){return Vr=Vr||U_(t),Vr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const B_=new Er(5e3,15e3),$_="__/auth/iframe",H_="emulator/auth/iframe",V_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W_(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eo(e,H_):`https://${t.config.authDomain}/${$_}`,r={apiKey:e.apiKey,appName:t.name,v:wr},s=j_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${br(r).slice(1)}`}async function q_(t){const e=await F_(t),n=gt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:W_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:V_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),a=gt().setTimeout(()=>{i(o)},B_.get());function c(){gt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const z_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},K_=500,G_=600,J_="_blank",Y_="http://localhost";class Na{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X_(t,e,n,r=K_,s=G_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...z_,width:r.toString(),height:s.toString(),top:i,left:o},l=Re().toLowerCase();n&&(a=jl(l)?J_:n),Hl(l)&&(e=e||Y_,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(wg(l)&&a!=="_self")return Q_(e||"",a),new Na(null);const f=window.open(e||"",a,u);B(f,t,"popup-blocked");try{f.focus()}catch{}return new Na(f)}function Q_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Z_="__/auth/handler",ey="emulator/auth/handler",ty=encodeURIComponent("fac");async function Da(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:s};if(e instanceof Zl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof Sr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${ty}=${encodeURIComponent(c)}`:"";return`${ny(t)}?${br(a).slice(1)}${l}`}function ny({config:t}){return t.emulator?eo(t,ey):`https://${t.authDomain}/${Z_}`}/**
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
 */const Xs="webStorageSupport";class ry{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cu,this._completeRedirectFn=R_,this._overrideRedirectResult=I_}async _openPopup(e,n,r,s){xt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Da(e,n,r,Ei(),s);return X_(e,i,io())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Da(e,n,r,Ei(),s);return o_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await q_(e),r=new P_(e);return n.register("authEvent",s=>(B(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xs,{type:Xs},s=>{const i=s?.[0]?.[Xs];i!==void 0&&n(!!i),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gl()||Vl()||no()}}const sy=ry;var La="@firebase/auth",Ma="1.11.0";/**
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
 */class iy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ay(t){dr(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jl(t)},l=new Cg(r,s,i,c);return Mg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dr(new kn("auth-internal",e=>{const n=hn(e.getProvider("auth").getImmediate());return(r=>new iy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(La,Ma,oy(t)),Sn(La,Ma,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const cy=300,ly=Tl("authIdTokenMaxAge")||cy;let Ua=null;const uy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ly)return;const s=n?.token;Ua!==s&&(Ua=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fy(t=Hm()){const e=Pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Lg(t,{popupRedirectResolver:sy,persistence:[m_,r_,cu]}),r=Tl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=uy(i.toString());e_(n,o,()=>o(n.currentUser)),Zg(n,a=>o(a))}}const s=Sp("auth");return s&&Ug(n,`http://${s}`),n}function dy(){return document.getElementsByTagName("head")?.[0]??document}Rg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ay("Browser");const ao={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0};ao.apiKey||console.error("Firebase API key is missing. Check .env and restart dev server.");console.log("Firebase key starts with:",(ao.apiKey||"").slice(0,6));const hy=Ol(ao),xn=fy(hy),py={class:"container"},my={class:"card"},gy={key:0},_y={key:1},yy={key:2,class:"actions"},by={key:0,class:"card"},wy={__name:"HomeView",setup(t){const e=Xe(null);let n=null;zi(()=>{n=ru(xn,s=>{e.value=s})}),gs(()=>{n&&n()});const r=async()=>{await su(xn)};return(s,i)=>(se(),ae("section",py,[i[6]||(i[6]=H("h1",null,"Welcome 👋",-1)),i[7]||(i[7]=H("p",null," This is the Home page of your Vue 3 + Firebase demo. Use Register/Login to try auth, then come back here to see your status. ",-1)),H("div",my,[i[4]||(i[4]=H("h2",null,"Status",-1)),e.value?(se(),ae("p",gy,[i[0]||(i[0]=he(" Signed in as ",-1)),H("strong",null,be(e.value.email),1),i[1]||(i[1]=he(". ",-1))])):(se(),ae("p",_y," You’re not signed in. ")),e.value?(se(),ae("button",{key:3,onClick:r},"Sign out")):(se(),ae("div",yy,[le(me(Ne),{to:"/FireRegister"},{default:xe(()=>[...i[2]||(i[2]=[he("Create an Account",-1)])]),_:1}),le(me(Ne),{to:"/FireLogin"},{default:xe(()=>[...i[3]||(i[3]=[he("Login",-1)])]),_:1})]))]),e.value?(se(),ae("div",by,[...i[5]||(i[5]=[H("h2",null,"Members-only content",-1),H("p",null,"🎉 You can see this because you’re logged in.",-1)])])):Ot("",!0)]))}},Ey=Jt(wy,[["__scopeId","data-v-3a52ce50"]]),vy={class:"container"},Sy={class:"card"},Iy={key:0},Ty={key:1},Cy={key:2,class:"actions"},Ry={__name:"AboutView",setup(t){const e=Xe(null);let n=null;zi(()=>{n=ru(xn,s=>{e.value=s})}),gs(()=>{n&&n()});const r=async()=>{await su(xn)};return(s,i)=>(se(),ae("section",vy,[i[5]||(i[5]=H("h1",null,"About",-1)),i[6]||(i[6]=H("p",null," This demo shows Firebase Email/Password auth in a Vue 3 + Vite app. Use the links below to register or sign in, then come back to see your status. ",-1)),H("div",Sy,[i[4]||(i[4]=H("h2",null,"Auth status",-1)),e.value?(se(),ae("p",Iy,[i[0]||(i[0]=he(" Signed in as ",-1)),H("strong",null,be(e.value.email),1),i[1]||(i[1]=he(". ",-1))])):(se(),ae("p",Ty," You’re not signed in. ")),e.value?(se(),ae("button",{key:3,onClick:r},"Sign out")):(se(),ae("div",Cy,[le(me(Ne),{to:"/FireLogin"},{default:xe(()=>[...i[2]||(i[2]=[he("Go to Login",-1)])]),_:1}),le(me(Ne),{to:"/FireRegister"},{default:xe(()=>[...i[3]||(i[3]=[he("Create an Account",-1)])]),_:1})]))])]))}},Ay=Jt(Ry,[["__scopeId","data-v-fef41342"]]),Py={style:{"max-width":"420px",margin:"2rem auto"}},Oy=["disabled"],ky={key:0,style:{color:"#c00","margin-top":"0.5rem"}},xy={style:{"margin-top":"1rem"}},Ny={__name:"FirebaseSigninView",setup(t){const e=Xe(""),n=Xe(""),r=Xe(!1),s=Xe(""),i=bl(),o=async()=>{s.value="",r.value=!0;try{await Qg(xn,e.value.trim(),n.value),i.push("/")}catch(c){s.value=a(c?.code||c?.message)}finally{r.value=!1}};function a(c){switch(c){case"auth/invalid-email":return"Invalid email.";case"auth/user-not-found":case"auth/wrong-password":return"Incorrect email or password.";case"auth/too-many-requests":return"Too many attempts. Try again later.";default:return"Could not sign in. Please try again."}}return(c,l)=>(se(),ae("section",Py,[l[4]||(l[4]=H("h1",null,"Sign in",-1)),l[5]||(l[5]=H("label",null,"Email",-1)),or(H("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),type:"email",placeholder:"you@example.com"},null,512),[[lr,e.value]]),l[6]||(l[6]=H("label",null,"Password",-1)),or(H("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u),type:"password",placeholder:"Your password"},null,512),[[lr,n.value]]),H("button",{disabled:r.value,onClick:o},be(r.value?"Signing in...":"Sign in"),9,Oy),s.value?(se(),ae("p",ky,be(s.value),1)):Ot("",!0),H("p",xy,[l[3]||(l[3]=he(" New here? ",-1)),le(me(Ne),{to:"/FireRegister"},{default:xe(()=>[...l[2]||(l[2]=[he("Create an account",-1)])]),_:1})])]))}},Dy=Jt(Ny,[["__scopeId","data-v-2ac4e3c0"]]),Ly={style:{"max-width":"420px",margin:"2rem auto"}},My=["disabled"],Uy={key:0,style:{color:"#c00","margin-top":"0.5rem"}},Fy={style:{"margin-top":"1rem"}},By={__name:"FirebaseRegisterView",setup(t){const e=Xe(""),n=Xe(""),r=Xe(!1),s=Xe(""),i=bl(),o=async()=>{s.value="",r.value=!0;try{await Xg(xn,e.value.trim(),n.value),i.push("/FireLogin")}catch(c){s.value=a(c?.code||c?.message)}finally{r.value=!1}};function a(c){switch(c){case"auth/email-already-in-use":return"Email already in use.";case"auth/invalid-email":return"Invalid email.";case"auth/weak-password":return"Password should be at least 6 characters.";default:return"Could not register. Please try again."}}return(c,l)=>(se(),ae("section",Ly,[l[4]||(l[4]=H("h1",null,"Create an Account",-1)),l[5]||(l[5]=H("label",null,"Email",-1)),or(H("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),type:"email",placeholder:"you@example.com"},null,512),[[lr,e.value]]),l[6]||(l[6]=H("label",null,"Password",-1)),or(H("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u),type:"password",placeholder:"Minimum 6 characters"},null,512),[[lr,n.value]]),H("button",{disabled:r.value,onClick:o},be(r.value?"Creating...":"Register"),9,My),s.value?(se(),ae("p",Uy,be(s.value),1)):Ot("",!0),H("p",Fy,[l[3]||(l[3]=he(" Already have an account? ",-1)),le(me(Ne),{to:"/FireLogin"},{default:xe(()=>[...l[2]||(l[2]=[he("Sign in",-1)])]),_:1})])]))}},$y=Jt(By,[["__scopeId","data-v-f220b9cd"]]);function mu(t,e){return function(){return t.apply(e,arguments)}}const{toString:Hy}=Object.prototype,{getPrototypeOf:co}=Object,{iterator:Cs,toStringTag:gu}=Symbol,Rs=(t=>e=>{const n=Hy.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),rt=t=>(t=t.toLowerCase(),e=>Rs(e)===t),As=t=>e=>typeof e===t,{isArray:Ln}=Array,Nn=As("undefined");function Tr(t){return t!==null&&!Nn(t)&&t.constructor!==null&&!Nn(t.constructor)&&De(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const _u=rt("ArrayBuffer");function Vy(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&_u(t.buffer),e}const jy=As("string"),De=As("function"),yu=As("number"),Cr=t=>t!==null&&typeof t=="object",Wy=t=>t===!0||t===!1,jr=t=>{if(Rs(t)!=="object")return!1;const e=co(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(gu in t)&&!(Cs in t)},qy=t=>{if(!Cr(t)||Tr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},zy=rt("Date"),Ky=rt("File"),Gy=rt("Blob"),Jy=rt("FileList"),Yy=t=>Cr(t)&&De(t.pipe),Xy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||De(t.append)&&((e=Rs(t))==="formdata"||e==="object"&&De(t.toString)&&t.toString()==="[object FormData]"))},Qy=rt("URLSearchParams"),[Zy,eb,tb,nb]=["ReadableStream","Request","Response","Headers"].map(rt),rb=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Rr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Ln(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{if(Tr(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function bu(t,e){if(Tr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const sn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wu=t=>!Nn(t)&&t!==sn;function Ti(){const{caseless:t,skipUndefined:e}=wu(this)&&this||{},n={},r=(s,i)=>{const o=t&&bu(n,i)||i;jr(n[o])&&jr(s)?n[o]=Ti(n[o],s):jr(s)?n[o]=Ti({},s):Ln(s)?n[o]=s.slice():(!e||!Nn(s))&&(n[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&Rr(arguments[s],r);return n}const sb=(t,e,n,{allOwnKeys:r}={})=>(Rr(e,(s,i)=>{n&&De(s)?t[i]=mu(s,n):t[i]=s},{allOwnKeys:r}),t),ib=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ob=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},ab=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&co(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},cb=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},lb=t=>{if(!t)return null;if(Ln(t))return t;let e=t.length;if(!yu(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},ub=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&co(Uint8Array)),fb=(t,e)=>{const r=(t&&t[Cs]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},db=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},hb=rt("HTMLFormElement"),pb=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Fa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),mb=rt("RegExp"),Eu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Rr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},gb=t=>{Eu(t,(e,n)=>{if(De(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(De(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_b=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Ln(t)?r(t):r(String(t).split(e)),n},yb=()=>{},bb=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function wb(t){return!!(t&&De(t.append)&&t[gu]==="FormData"&&t[Cs])}const Eb=t=>{const e=new Array(10),n=(r,s)=>{if(Cr(r)){if(e.indexOf(r)>=0)return;if(Tr(r))return r;if(!("toJSON"in r)){e[s]=r;const i=Ln(r)?[]:{};return Rr(r,(o,a)=>{const c=n(o,s+1);!Nn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},vb=rt("AsyncFunction"),Sb=t=>t&&(Cr(t)||De(t))&&De(t.then)&&De(t.catch),vu=((t,e)=>t?setImmediate:e?((n,r)=>(sn.addEventListener("message",({source:s,data:i})=>{s===sn&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),sn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",De(sn.postMessage)),Ib=typeof queueMicrotask<"u"?queueMicrotask.bind(sn):typeof process<"u"&&process.nextTick||vu,Tb=t=>t!=null&&De(t[Cs]),y={isArray:Ln,isArrayBuffer:_u,isBuffer:Tr,isFormData:Xy,isArrayBufferView:Vy,isString:jy,isNumber:yu,isBoolean:Wy,isObject:Cr,isPlainObject:jr,isEmptyObject:qy,isReadableStream:Zy,isRequest:eb,isResponse:tb,isHeaders:nb,isUndefined:Nn,isDate:zy,isFile:Ky,isBlob:Gy,isRegExp:mb,isFunction:De,isStream:Yy,isURLSearchParams:Qy,isTypedArray:ub,isFileList:Jy,forEach:Rr,merge:Ti,extend:sb,trim:rb,stripBOM:ib,inherits:ob,toFlatObject:ab,kindOf:Rs,kindOfTest:rt,endsWith:cb,toArray:lb,forEachEntry:fb,matchAll:db,isHTMLForm:hb,hasOwnProperty:Fa,hasOwnProp:Fa,reduceDescriptors:Eu,freezeMethods:gb,toObjectSet:_b,toCamelCase:pb,noop:yb,toFiniteNumber:bb,findKey:bu,global:sn,isContextDefined:wu,isSpecCompliantForm:wb,toJSONObject:Eb,isAsyncFn:vb,isThenable:Sb,setImmediate:vu,asap:Ib,isIterable:Tb};function W(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}y.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.status}}});const Su=W.prototype,Iu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Iu[t]={value:t}});Object.defineProperties(W,Iu);Object.defineProperty(Su,"isAxiosError",{value:!0});W.from=(t,e,n,r,s,i)=>{const o=Object.create(Su);y.toFlatObject(t,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError");const a=t&&t.message?t.message:"Error",c=e==null&&t?t.code:e;return W.call(o,a,c,n,r,s),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",i&&Object.assign(o,i),o};const Cb=null;function Ci(t){return y.isPlainObject(t)||y.isArray(t)}function Tu(t){return y.endsWith(t,"[]")?t.slice(0,-2):t}function Ba(t,e,n){return t?t.concat(e).map(function(s,i){return s=Tu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Rb(t){return y.isArray(t)&&!t.some(Ci)}const Ab=y.toFlatObject(y,{},null,function(e){return/^is[A-Z]/.test(e)});function Ps(t,e,n){if(!y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,I){return!y.isUndefined(I[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(e);if(!y.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(y.isDate(_))return _.toISOString();if(y.isBoolean(_))return _.toString();if(!c&&y.isBlob(_))throw new W("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(_)||y.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,b,I){let C=_;if(_&&!I&&typeof _=="object"){if(y.endsWith(b,"{}"))b=r?b:b.slice(0,-2),_=JSON.stringify(_);else if(y.isArray(_)&&Rb(_)||(y.isFileList(_)||y.endsWith(b,"[]"))&&(C=y.toArray(_)))return b=Tu(b),C.forEach(function(k,O){!(y.isUndefined(k)||k===null)&&e.append(o===!0?Ba([b],O,i):o===null?b:b+"[]",l(k))}),!1}return Ci(_)?!0:(e.append(Ba(I,b,i),l(_)),!1)}const f=[],h=Object.assign(Ab,{defaultVisitor:u,convertValue:l,isVisitable:Ci});function m(_,b){if(!y.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(_),y.forEach(_,function(C,A){(!(y.isUndefined(C)||C===null)&&s.call(e,C,y.isString(A)?A.trim():A,b,h))===!0&&m(C,b?b.concat(A):[A])}),f.pop()}}if(!y.isObject(t))throw new TypeError("data must be an object");return m(t),e}function $a(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function lo(t,e){this._pairs=[],t&&Ps(t,this,e)}const Cu=lo.prototype;Cu.append=function(e,n){this._pairs.push([e,n])};Cu.toString=function(e){const n=e?function(r){return e.call(this,r,$a)}:$a;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pb(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ru(t,e,n){if(!e)return t;const r=n&&n.encode||Pb;y.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=y.isURLSearchParams(e)?e.toString():new lo(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Ha{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){y.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Au={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ob=typeof URLSearchParams<"u"?URLSearchParams:lo,kb=typeof FormData<"u"?FormData:null,xb=typeof Blob<"u"?Blob:null,Nb={isBrowser:!0,classes:{URLSearchParams:Ob,FormData:kb,Blob:xb},protocols:["http","https","file","blob","url","data"]},uo=typeof window<"u"&&typeof document<"u",Ri=typeof navigator=="object"&&navigator||void 0,Db=uo&&(!Ri||["ReactNative","NativeScript","NS"].indexOf(Ri.product)<0),Lb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Mb=uo&&window.location.href||"http://localhost",Ub=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:uo,hasStandardBrowserEnv:Db,hasStandardBrowserWebWorkerEnv:Lb,navigator:Ri,origin:Mb},Symbol.toStringTag,{value:"Module"})),Ee={...Ub,...Nb};function Fb(t,e){return Ps(t,new Ee.classes.URLSearchParams,{visitor:function(n,r,s,i){return Ee.isNode&&y.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function Bb(t){return y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function $b(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Pu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&y.isArray(s)?s.length:o,c?(y.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!y.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&y.isArray(s[o])&&(s[o]=$b(s[o])),!a)}if(y.isFormData(t)&&y.isFunction(t.entries)){const n={};return y.forEachEntry(t,(r,s)=>{e(Bb(r),s,n,0)}),n}return null}function Hb(t,e,n){if(y.isString(t))try{return(e||JSON.parse)(t),y.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ar={transitional:Au,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=y.isObject(e);if(i&&y.isHTMLForm(e)&&(e=new FormData(e)),y.isFormData(e))return s?JSON.stringify(Pu(e)):e;if(y.isArrayBuffer(e)||y.isBuffer(e)||y.isStream(e)||y.isFile(e)||y.isBlob(e)||y.isReadableStream(e))return e;if(y.isArrayBufferView(e))return e.buffer;if(y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Fb(e,this.formSerializer).toString();if((a=y.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ps(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Hb(e)):e}],transformResponse:[function(e){const n=this.transitional||Ar.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(y.isResponse(e)||y.isReadableStream(e))return e;if(e&&y.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ee.classes.FormData,Blob:Ee.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch"],t=>{Ar.headers[t]={}});const Vb=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jb=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Vb[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Va=Symbol("internals");function Hn(t){return t&&String(t).trim().toLowerCase()}function Wr(t){return t===!1||t==null?t:y.isArray(t)?t.map(Wr):String(t)}function Wb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const qb=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Qs(t,e,n,r,s){if(y.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!y.isString(e)){if(y.isString(r))return e.indexOf(r)!==-1;if(y.isRegExp(r))return r.test(e)}}function zb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Kb(t,e){const n=y.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Le=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Hn(c);if(!u)throw new Error("header name must be a non-empty string");const f=y.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Wr(a))}const o=(a,c)=>y.forEach(a,(l,u)=>i(l,u,c));if(y.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(y.isString(e)&&(e=e.trim())&&!qb(e))o(jb(e),n);else if(y.isObject(e)&&y.isIterable(e)){let a={},c,l;for(const u of e){if(!y.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?y.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=Hn(e),e){const r=y.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Wb(s);if(y.isFunction(n))return n.call(this,s,r);if(y.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Hn(e),e){const r=y.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Qs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Hn(o),o){const a=y.findKey(r,o);a&&(!n||Qs(r,r[a],a,n))&&(delete r[a],s=!0)}}return y.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Qs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return y.forEach(this,(s,i)=>{const o=y.findKey(r,i);if(o){n[o]=Wr(s),delete n[i];return}const a=e?zb(i):String(i).trim();a!==i&&delete n[i],n[a]=Wr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return y.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&y.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Va]=this[Va]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Hn(o);r[a]||(Kb(s,o),r[a]=!0)}return y.isArray(e)?e.forEach(i):i(e),this}};Le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(Le.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});y.freezeMethods(Le);function Zs(t,e){const n=this||Ar,r=e||n,s=Le.from(r.headers);let i=r.data;return y.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Ou(t){return!!(t&&t.__CANCEL__)}function Mn(t,e,n){W.call(this,t??"canceled",W.ERR_CANCELED,e,n),this.name="CanceledError"}y.inherits(Mn,W,{__CANCEL__:!0});function ku(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Gb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Jb(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,h=0;for(;f!==s;)h+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(h*1e3/m):void 0}}function Yb(t,e){let n=0,r=1e3/e,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),t(...l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const as=(t,e,n=3)=>{let r=0;const s=Jb(50,250);return Yb(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},ja=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Wa=t=>(...e)=>y.asap(()=>t(...e)),Xb=Ee.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Ee.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Ee.origin),Ee.navigator&&/(msie|trident)/i.test(Ee.navigator.userAgent)):()=>!0,Qb=Ee.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];y.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),y.isString(r)&&o.push("path="+r),y.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Zb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ew(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function xu(t,e,n){let r=!Zb(e);return t&&(r||n==!1)?ew(t,e):e}const qa=t=>t instanceof Le?{...t}:t;function fn(t,e){e=e||{};const n={};function r(l,u,f,h){return y.isPlainObject(l)&&y.isPlainObject(u)?y.merge.call({caseless:h},l,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function s(l,u,f,h){if(y.isUndefined(u)){if(!y.isUndefined(l))return r(void 0,l,f,h)}else return r(l,u,f,h)}function i(l,u){if(!y.isUndefined(u))return r(void 0,u)}function o(l,u){if(y.isUndefined(u)){if(!y.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(qa(l),qa(u),f,!0)};return y.forEach(Object.keys({...t,...e}),function(u){const f=c[u]||s,h=f(t[u],e[u],u);y.isUndefined(h)&&f!==a||(n[u]=h)}),n}const Nu=t=>{const e=fn({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;if(e.headers=o=Le.from(o),e.url=Ru(xu(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),y.isFormData(n)){if(Ee.hasStandardBrowserEnv||Ee.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(y.isFunction(n.getHeaders)){const c=n.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([u,f])=>{l.includes(u.toLowerCase())&&o.set(u,f)})}}if(Ee.hasStandardBrowserEnv&&(r&&y.isFunction(r)&&(r=r(e)),r||r!==!1&&Xb(e.url))){const c=s&&i&&Qb.read(i);c&&o.set(s,c)}return e},tw=typeof XMLHttpRequest<"u",nw=tw&&function(t){return new Promise(function(n,r){const s=Nu(t);let i=s.data;const o=Le.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,h,m,_;function b(){m&&m(),_&&_(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let I=new XMLHttpRequest;I.open(s.method.toUpperCase(),s.url,!0),I.timeout=s.timeout;function C(){if(!I)return;const k=Le.from("getAllResponseHeaders"in I&&I.getAllResponseHeaders()),q={data:!a||a==="text"||a==="json"?I.responseText:I.response,status:I.status,statusText:I.statusText,headers:k,config:t,request:I};ku(function(K){n(K),b()},function(K){r(K),b()},q),I=null}"onloadend"in I?I.onloadend=C:I.onreadystatechange=function(){!I||I.readyState!==4||I.status===0&&!(I.responseURL&&I.responseURL.indexOf("file:")===0)||setTimeout(C)},I.onabort=function(){I&&(r(new W("Request aborted",W.ECONNABORTED,t,I)),I=null)},I.onerror=function(O){const q=O&&O.message?O.message:"Network Error",ce=new W(q,W.ERR_NETWORK,t,I);ce.event=O||null,r(ce),I=null},I.ontimeout=function(){let O=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const q=s.transitional||Au;s.timeoutErrorMessage&&(O=s.timeoutErrorMessage),r(new W(O,q.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,I)),I=null},i===void 0&&o.setContentType(null),"setRequestHeader"in I&&y.forEach(o.toJSON(),function(O,q){I.setRequestHeader(q,O)}),y.isUndefined(s.withCredentials)||(I.withCredentials=!!s.withCredentials),a&&a!=="json"&&(I.responseType=s.responseType),l&&([h,_]=as(l,!0),I.addEventListener("progress",h)),c&&I.upload&&([f,m]=as(c),I.upload.addEventListener("progress",f),I.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=k=>{I&&(r(!k||k.type?new Mn(null,t,I):k),I.abort(),I=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const A=Gb(s.url);if(A&&Ee.protocols.indexOf(A)===-1){r(new W("Unsupported protocol "+A+":",W.ERR_BAD_REQUEST,t));return}I.send(i||null)})},rw=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof W?u:new Mn(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new W(`timeout ${e} of ms exceeded`,W.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>y.asap(a),c}},sw=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},iw=async function*(t,e){for await(const n of ow(t))yield*sw(n,e)},ow=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},za=(t,e,n,r)=>{const s=iw(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let h=i+=f;n(h)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Ka=64*1024,{isFunction:Nr}=y,aw=(({Request:t,Response:e})=>({Request:t,Response:e}))(y.global),{ReadableStream:Ga,TextEncoder:Ja}=y.global,Ya=(t,...e)=>{try{return!!t(...e)}catch{return!1}},cw=t=>{t=y.merge.call({skipUndefined:!0},aw,t);const{fetch:e,Request:n,Response:r}=t,s=e?Nr(e):typeof fetch=="function",i=Nr(n),o=Nr(r);if(!s)return!1;const a=s&&Nr(Ga),c=s&&(typeof Ja=="function"?(_=>b=>_.encode(b))(new Ja):async _=>new Uint8Array(await new n(_).arrayBuffer())),l=i&&a&&Ya(()=>{let _=!1;const b=new n(Ee.origin,{body:new Ga,method:"POST",get duplex(){return _=!0,"half"}}).headers.has("Content-Type");return _&&!b}),u=o&&a&&Ya(()=>y.isReadableStream(new r("").body)),f={stream:u&&(_=>_.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!f[_]&&(f[_]=(b,I)=>{let C=b&&b[_];if(C)return C.call(b);throw new W(`Response type '${_}' is not supported`,W.ERR_NOT_SUPPORT,I)})});const h=async _=>{if(_==null)return 0;if(y.isBlob(_))return _.size;if(y.isSpecCompliantForm(_))return(await new n(Ee.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(y.isArrayBufferView(_)||y.isArrayBuffer(_))return _.byteLength;if(y.isURLSearchParams(_)&&(_=_+""),y.isString(_))return(await c(_)).byteLength},m=async(_,b)=>{const I=y.toFiniteNumber(_.getContentLength());return I??h(b)};return async _=>{let{url:b,method:I,data:C,signal:A,cancelToken:k,timeout:O,onDownloadProgress:q,onUploadProgress:ce,responseType:K,headers:Ae,withCredentials:Me="same-origin",fetchOptions:Ue}=Nu(_),Ke=e||fetch;K=K?(K+"").toLowerCase():"text";let je=rw([A,k&&k.toAbortSignal()],O),_e=null;const Fe=je&&je.unsubscribe&&(()=>{je.unsubscribe()});let yt;try{if(ce&&l&&I!=="get"&&I!=="head"&&(yt=await m(Ae,C))!==0){let pe=new n(b,{method:"POST",body:C,duplex:"half"}),de;if(y.isFormData(C)&&(de=pe.headers.get("content-type"))&&Ae.setContentType(de),pe.body){const[it,Ge]=ja(yt,as(Wa(ce)));C=za(pe.body,Ka,it,Ge)}}y.isString(Me)||(Me=Me?"include":"omit");const Z=i&&"credentials"in n.prototype,J={...Ue,signal:je,method:I.toUpperCase(),headers:Ae.normalize().toJSON(),body:C,duplex:"half",credentials:Z?Me:void 0};_e=i&&new n(b,J);let z=await(i?Ke(_e,Ue):Ke(b,J));const We=u&&(K==="stream"||K==="response");if(u&&(q||We&&Fe)){const pe={};["status","statusText","headers"].forEach(Zt=>{pe[Zt]=z[Zt]});const de=y.toFiniteNumber(z.headers.get("content-length")),[it,Ge]=q&&ja(de,as(Wa(q),!0))||[];z=new r(za(z.body,Ka,it,()=>{Ge&&Ge(),Fe&&Fe()}),pe)}K=K||"text";let st=await f[y.findKey(f,K)||"text"](z,_);return!We&&Fe&&Fe(),await new Promise((pe,de)=>{ku(pe,de,{data:st,headers:Le.from(z.headers),status:z.status,statusText:z.statusText,config:_,request:_e})})}catch(Z){throw Fe&&Fe(),Z&&Z.name==="TypeError"&&/Load failed|fetch/i.test(Z.message)?Object.assign(new W("Network Error",W.ERR_NETWORK,_,_e),{cause:Z.cause||Z}):W.from(Z,Z&&Z.code,_,_e)}}},lw=new Map,Du=t=>{let e=t?t.env:{};const{fetch:n,Request:r,Response:s}=e,i=[r,s,n];let o=i.length,a=o,c,l,u=lw;for(;a--;)c=i[a],l=u.get(c),l===void 0&&u.set(c,l=a?new Map:cw(e)),u=l;return l};Du();const Ai={http:Cb,xhr:nw,fetch:{get:Du}};y.forEach(Ai,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Xa=t=>`- ${t}`,uw=t=>y.isFunction(t)||t===null||t===!1,Lu={getAdapter:(t,e)=>{t=y.isArray(t)?t:[t];const{length:n}=t;let r,s;const i={};for(let o=0;o<n;o++){r=t[o];let a;if(s=r,!uw(r)&&(s=Ai[(a=String(r)).toLowerCase()],s===void 0))throw new W(`Unknown adapter '${a}'`);if(s&&(y.isFunction(s)||(s=s.get(e))))break;i[a||"#"+o]=s}if(!s){const o=Object.entries(i).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Xa).join(`
`):" "+Xa(o[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s},adapters:Ai};function ei(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Mn(null,t)}function Qa(t){return ei(t),t.headers=Le.from(t.headers),t.data=Zs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Lu.getAdapter(t.adapter||Ar.adapter,t)(t).then(function(r){return ei(t),r.data=Zs.call(t,t.transformResponse,r),r.headers=Le.from(r.headers),r},function(r){return Ou(r)||(ei(t),r&&r.response&&(r.response.data=Zs.call(t,t.transformResponse,r.response),r.response.headers=Le.from(r.response.headers))),Promise.reject(r)})}const Mu="1.12.2",Os={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Os[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Za={};Os.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Mu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new W(s(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!Za[o]&&(Za[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};Os.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function fw(t,e,n){if(typeof t!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new W("option "+i+" must be "+c,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}}const qr={assertOptions:fw,validators:Os},ut=qr.validators;let an=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ha,response:new Ha}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=fn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&qr.assertOptions(r,{silentJSONParsing:ut.transitional(ut.boolean),forcedJSONParsing:ut.transitional(ut.boolean),clarifyTimeoutError:ut.transitional(ut.boolean)},!1),s!=null&&(y.isFunction(s)?n.paramsSerializer={serialize:s}:qr.assertOptions(s,{encode:ut.function,serialize:ut.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),qr.assertOptions(n,{baseUrl:ut.spelling("baseURL"),withXsrfToken:ut.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&y.merge(i.common,i[n.method]);i&&y.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=Le.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,h;if(!c){const _=[Qa.bind(this),void 0];for(_.unshift(...a),_.push(...l),h=_.length,u=Promise.resolve(n);f<h;)u=u.then(_[f++],_[f++]);return u}h=a.length;let m=n;for(;f<h;){const _=a[f++],b=a[f++];try{m=_(m)}catch(I){b.call(this,I);break}}try{u=Qa.call(this,m)}catch(_){return Promise.reject(_)}for(f=0,h=l.length;f<h;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=fn(this.defaults,e);const n=xu(e.baseURL,e.url,e.allowAbsoluteUrls);return Ru(n,e.params,e.paramsSerializer)}};y.forEach(["delete","get","head","options"],function(e){an.prototype[e]=function(n,r){return this.request(fn(r||{},{method:e,url:n,data:(r||{}).data}))}});y.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(fn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}an.prototype[e]=n(),an.prototype[e+"Form"]=n(!0)});let dw=class Uu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Mn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Uu(function(s){e=s}),cancel:e}}};function hw(t){return function(n){return t.apply(null,n)}}function pw(t){return y.isObject(t)&&t.isAxiosError===!0}const Pi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pi).forEach(([t,e])=>{Pi[e]=t});function Fu(t){const e=new an(t),n=mu(an.prototype.request,e);return y.extend(n,an.prototype,e,{allOwnKeys:!0}),y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Fu(fn(t,s))},n}const fe=Fu(Ar);fe.Axios=an;fe.CanceledError=Mn;fe.CancelToken=dw;fe.isCancel=Ou;fe.VERSION=Mu;fe.toFormData=Ps;fe.AxiosError=W;fe.Cancel=fe.CanceledError;fe.all=function(e){return Promise.all(e)};fe.spread=hw;fe.isAxiosError=pw;fe.mergeConfig=fn;fe.AxiosHeaders=Le;fe.formToJSON=t=>Pu(y.isHTMLForm(t)?new FormData(t):t);fe.getAdapter=Lu.getAdapter;fe.HttpStatusCode=Pi;fe.default=fe;const{Axios:Hw,AxiosError:Vw,CanceledError:jw,isCancel:Ww,CancelToken:qw,VERSION:zw,all:Kw,Cancel:Gw,isAxiosError:Jw,spread:Yw,toFormData:Xw,AxiosHeaders:Qw,HttpStatusCode:Zw,formToJSON:eE,getAdapter:tE,mergeConfig:nE}=fe,mw={data(){return{count:null,error:null}},methods:{async getBookCount(){try{const t=await fe.get("https://countbooks-uw6c5ibcbq-uc.a.run.app");this.count=t.data.count,this.error=null}catch(t){this.count=null,this.error=t.message||"Error fetching book count"}}}},gw={id:"app"},_w={key:0},yw={key:1};function bw(t,e,n,r,s,i){return se(),ae("div",gw,[e[1]||(e[1]=H("h1",null,"Book Counter",-1)),H("button",{onClick:e[0]||(e[0]=(...o)=>i.getBookCount&&i.getBookCount(...o))},"Get Book Count"),s.count!==null?(se(),ae("p",_w,"Total number of books: "+be(s.count),1)):Ot("",!0),s.error?(se(),ae("p",yw,be(s.error),1)):Ot("",!0)])}const ww=Jt(mw,[["render",bw],["__scopeId","data-v-b78968ca"]]),Ew="9010a5274c4a46ee05a1b04822b28514",vw={name:"WeatherView",data(){return{city:"",weatherData:null,errorMessage:""}},computed:{temperature(){return this.weatherData?Math.floor(this.weatherData.main.temp):null},iconUrl(){return this.weatherData?`https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`:""}},methods:{async fetchWeatherByCity(){if(!this.city.trim()){this.errorMessage="Please enter a city name.",this.weatherData=null;return}try{this.errorMessage="";const t=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${Ew}&units=metric`,e=await fe.get(t);this.weatherData=e.data}catch(t){console.error("Error fetching weather data:",t),this.errorMessage=t.response?.data?.message==="city not found"?"City not found. Please try again.":"Unable to fetch weather data. Check API key or connection.",this.weatherData=null}}}},Sw={class:"container"},Iw={class:"search-bar"},Tw={key:0},Cw={class:"weather-info"},Rw=["src"],Aw={key:1,class:"error"};function Pw(t,e,n,r,s,i){return se(),ae("div",Sw,[e[2]||(e[2]=H("div",{class:"header"},[H("h1",null,"WEATHER APP")],-1)),H("div",Iw,[or(H("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.city=o),placeholder:"Enter city name",class:"search-input"},null,512),[[lr,s.city]]),H("button",{onClick:e[1]||(e[1]=(...o)=>i.fetchWeatherByCity&&i.fetchWeatherByCity(...o)),class:"search-button"}," Search ")]),s.weatherData?(se(),ae("main",Tw,[H("h2",null,be(s.weatherData.name)+", "+be(s.weatherData.sys.country),1),H("div",Cw,[H("img",{src:i.iconUrl,alt:"Weather Icon"},null,8,Rw),H("p",null,be(i.temperature)+" °C",1)]),H("p",null,be(s.weatherData.weather[0].description),1)])):Ot("",!0),s.errorMessage?(se(),ae("div",Aw,be(s.errorMessage),1)):Ot("",!0)])}const Ow=Jt(vw,[["render",Pw],["__scopeId","data-v-6a5521fa"]]),kw={name:"CountBookAPI",data(){return{jsondata:null,error:null}},mounted(){this.getBookCountAPI()},methods:{async getBookCountAPI(){try{const t=await fe.get("https://countbooks-uw6c5ibcbq-uc.a.run.app");this.jsondata=t.data,this.error=null}catch(t){console.error("Error fetching book count:",t),this.error="Error fetching book count.",this.jsondata=null}}}},xw={class:"api-container"},Nw={key:0},Dw={key:1,class:"error"};function Lw(t,e,n,r,s,i){return se(),ae("div",xw,[e[0]||(e[0]=H("h1",null,"Book Count API Result",-1)),s.jsondata?(se(),ae("pre",Nw,be(s.jsondata),1)):Ot("",!0),s.error?(se(),ae("p",Dw,be(s.error),1)):Ot("",!0)])}const Mw=Jt(kw,[["render",Lw],["__scopeId","data-v-50ed22f9"]]),Uw=[{path:"/",name:"Home",component:Ey},{path:"/about",name:"About",component:Ay},{path:"/weathercheck",name:"WeatherCheck",component:Ow},{path:"/CountBookAPI",name:"CountBookAPI",component:Mw},{path:"/getbookcount",name:"GetBookCount",component:ww},{path:"/firelogin",name:"FireLogin",component:Dy},{path:"/fireregister",name:"FireRegister",component:$y}],Fw=ap({history:Uh("/"),routes:Uw});sh(pp).use(Fw).mount("#app");
