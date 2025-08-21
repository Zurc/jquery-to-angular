(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var Ks={exports:{}},tl={},Xs={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),ic=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),Oi=Symbol.iterator;function gc(e){return e===null||typeof e!="object"?null:(e=Oi&&e[Oi]||e["@@iterator"],typeof e=="function"?e:null)}var Ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gs=Object.assign,Zs={};function on(e,t,n){this.props=e,this.context=t,this.refs=Zs,this.updater=n||Ys}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qs(){}qs.prototype=on.prototype;function Ro(e,t,n){this.props=e,this.context=t,this.refs=Zs,this.updater=n||Ys}var Ao=Ro.prototype=new qs;Ao.constructor=Ro;Gs(Ao,on.prototype);Ao.isPureReactComponent=!0;var Li=Array.isArray,Js=Object.prototype.hasOwnProperty,Bo={current:null},bs={key:!0,ref:!0,__self:!0,__source:!0};function ea(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Js.call(t,r)&&!bs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Gn,type:e,key:o,ref:i,props:l,_owner:Bo.current}}function vc(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fi=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Gn:case ic:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+kl(i,0):r,Li(l)?(n="",e!=null&&(n=e.replace(Fi,"$&/")+"/"),wr(l,t,n,"",function(c){return c})):l!=null&&(Vo(l)&&(l=vc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Fi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Li(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+kl(o,s);i+=wr(o,t,n,a,l)}else if(a=gc(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+kl(o,s++),i+=wr(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},kr={transition:null},kc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Bo};function ta(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=on;j.Fragment=sc;j.Profiler=uc;j.PureComponent=Ro;j.StrictMode=ac;j.Suspense=pc;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;j.act=ta;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gs({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Bo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Js.call(t,a)&&!bs.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Gn,type:e.type,key:l,ref:o,props:r,_owner:i}};j.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};j.createElement=ea;j.createFactory=function(e){var t=ea.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:fc,render:e}};j.isValidElement=Vo;j.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:wc}};j.memo=function(e,t){return{$$typeof:mc,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};j.unstable_act=ta;j.useCallback=function(e,t){return se.current.useCallback(e,t)};j.useContext=function(e){return se.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return se.current.useDeferredValue(e)};j.useEffect=function(e,t){return se.current.useEffect(e,t)};j.useId=function(){return se.current.useId()};j.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return se.current.useMemo(e,t)};j.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};j.useRef=function(e){return se.current.useRef(e)};j.useState=function(e){return se.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return se.current.useTransition()};j.version="18.3.1";Xs.exports=j;var ke=Xs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=ke,xc=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),Ec=Object.prototype.hasOwnProperty,Nc=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ic={key:!0,ref:!0,__self:!0,__source:!0};function na(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ec.call(t,r)&&!Ic.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:xc,type:e,key:o,ref:i,props:l,_owner:Nc.current}}tl.Fragment=Cc;tl.jsx=na;tl.jsxs=na;Ks.exports=tl;var k=Ks.exports,ra={exports:{}},ye={},la={exports:{}},oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,D){var P=E.length;E.push(D);e:for(;0<P;){var W=P-1>>>1,G=E[W];if(0<l(G,D))E[W]=D,E[P]=G,P=W;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var D=E[0],P=E.pop();if(P!==D){E[0]=P;e:for(var W=0,G=E.length,er=G>>>1;W<er;){var vt=2*(W+1)-1,wl=E[vt],yt=vt+1,tr=E[yt];if(0>l(wl,P))yt<G&&0>l(tr,wl)?(E[W]=tr,E[yt]=P,W=yt):(E[W]=wl,E[vt]=P,W=vt);else if(yt<G&&0>l(tr,P))E[W]=tr,E[yt]=P,W=yt;else break e}}return D}function l(E,D){var P=E.sortIndex-D.sortIndex;return P!==0?P:E.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],h=1,m=null,p=3,g=!1,w=!1,S=!1,$=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=E)r(c),D.sortIndex=D.expirationTime,t(a,D);else break;D=n(c)}}function v(E){if(S=!1,f(E),!w)if(n(a)!==null)w=!0,vl(C);else{var D=n(c);D!==null&&yl(v,D.startTime-E)}}function C(E,D){w=!1,S&&(S=!1,d(_),_=-1),g=!0;var P=p;try{for(f(D),m=n(a);m!==null&&(!(m.expirationTime>D)||E&&!_e());){var W=m.callback;if(typeof W=="function"){m.callback=null,p=m.priorityLevel;var G=W(m.expirationTime<=D);D=e.unstable_now(),typeof G=="function"?m.callback=G:m===n(a)&&r(a),f(D)}else r(a);m=n(a)}if(m!==null)var er=!0;else{var vt=n(c);vt!==null&&yl(v,vt.startTime-D),er=!1}return er}finally{m=null,p=P,g=!1}}var N=!1,I=null,_=-1,H=5,T=-1;function _e(){return!(e.unstable_now()-T<H)}function un(){if(I!==null){var E=e.unstable_now();T=E;var D=!0;try{D=I(!0,E)}finally{D?cn():(N=!1,I=null)}}else N=!1}var cn;if(typeof u=="function")cn=function(){u(un)};else if(typeof MessageChannel<"u"){var zi=new MessageChannel,oc=zi.port2;zi.port1.onmessage=un,cn=function(){oc.postMessage(null)}}else cn=function(){$(un,0)};function vl(E){I=E,N||(N=!0,cn())}function yl(E,D){_=$(function(){E(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,vl(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var P=p;p=D;try{return E()}finally{p=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,D){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=p;p=E;try{return D()}finally{p=P}},e.unstable_scheduleCallback=function(E,D,P){var W=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,E){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=P+G,E={id:h++,callback:D,priorityLevel:E,startTime:P,expirationTime:G,sortIndex:-1},P>W?(E.sortIndex=P,t(c,E),n(a)===null&&E===n(c)&&(S?(d(_),_=-1):S=!0,yl(v,P-W))):(E.sortIndex=G,t(a,E),w||g||(w=!0,vl(C))),E},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(E){var D=p;return function(){var P=p;p=D;try{return E.apply(this,arguments)}finally{p=P}}}})(oa);la.exports=oa;var _c=la.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=ke,ve=_c;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ia=new Set,Mn={};function Tt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)ia.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$i={},Ui={};function jc(e){return Kl.call(Ui,e)?!0:Kl.call($i,e)?!1:Pc.test(e)?Ui[e]=!0:($i[e]=!0,!1)}function Tc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mc(e,t,n,r){if(t===null||typeof t>"u"||Tc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ho=/[\-:]([a-z])/g;function Wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ho,Wo);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ho,Wo);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ho,Wo);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mc(t,n,l,r)&&(n=null),r||l===null?jc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),sa=Symbol.for("react.provider"),aa=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ua=Symbol.for("react.offscreen"),Ri=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Ri&&e[Ri]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Sl;function wn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var xl=!1;function Cl(e,t){if(!e||xl)return"";xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function zc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lt:return"Fragment";case Ot:return"Portal";case Xl:return"Profiler";case Ko:return"StrictMode";case Yl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case aa:return(e.displayName||"Context")+".Consumer";case sa:return(e._context.displayName||"Context")+".Provider";case Xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yo:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Oc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ca(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lc(e){var t=ca(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Lc(e))}function da(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ca(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ai(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fa(e,t){t=t.checked,t!=null&&Qo(e,"checked",t,!1)}function Jl(e,t){fa(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function pa(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ma(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function to(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ma(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ha=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Fc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function ga(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function va(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ga(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var $c=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,t){if(t){if($c[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ro(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lo=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,Xt=null,Yt=null;function Wi(e){if(e=Jn(e)){if(typeof oo!="function")throw Error(y(280));var t=e.stateNode;t&&(t=il(t),oo(e.stateNode,e.type,t))}}function ya(e){Xt?Yt?Yt.push(e):Yt=[e]:Xt=e}function wa(){if(Xt){var e=Xt,t=Yt;if(Yt=Xt=null,Wi(e),t)for(e=0;e<t.length;e++)Wi(t[e])}}function ka(e,t){return e(t)}function Sa(){}var El=!1;function xa(e,t,n){if(El)return e(t,n);El=!0;try{return ka(e,t,n)}finally{El=!1,(Xt!==null||Yt!==null)&&(Sa(),wa())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var io=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){io=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{io=!1}function Uc(e,t,n,r,l,o,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var En=!1,Mr=null,zr=!1,so=null,Rc={onError:function(e){En=!0,Mr=e}};function Ac(e,t,n,r,l,o,i,s,a){En=!1,Mr=null,Uc.apply(Rc,arguments)}function Bc(e,t,n,r,l,o,i,s,a){if(Ac.apply(this,arguments),En){if(En){var c=Mr;En=!1,Mr=null}else throw Error(y(198));zr||(zr=!0,so=c)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qi(e){if(Mt(e)!==e)throw Error(y(188))}function Vc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Qi(l),e;if(o===r)return Qi(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ea(e){return e=Vc(e),e!==null?Na(e):null}function Na(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Na(e);if(t!==null)return t;e=e.sibling}return null}var Ia=ve.unstable_scheduleCallback,Ki=ve.unstable_cancelCallback,Hc=ve.unstable_shouldYield,Wc=ve.unstable_requestPaint,Q=ve.unstable_now,Qc=ve.unstable_getCurrentPriorityLevel,Zo=ve.unstable_ImmediatePriority,_a=ve.unstable_UserBlockingPriority,Or=ve.unstable_NormalPriority,Kc=ve.unstable_LowPriority,Da=ve.unstable_IdlePriority,nl=null,Ue=null;function Xc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Zc,Yc=Math.log,Gc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Yc(e)/Gc|0)|0}var ir=64,sr=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Sn(s):(o&=i,o!==0&&(r=Sn(o)))}else i=n&~l,i!==0?r=Sn(i):o!==0&&(r=Sn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Me(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=qc(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function ao(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pa(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function bc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function qo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var z=0;function ja(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ta,Jo,Ma,za,Oa,uo=!1,ar=[],rt=null,lt=null,ot=null,Ln=new Map,Fn=new Map,be=[],ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function pn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&Jo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function td(e,t,n,r,l){switch(t){case"focusin":return rt=pn(rt,e,t,n,r,l),!0;case"dragenter":return lt=pn(lt,e,t,n,r,l),!0;case"mouseover":return ot=pn(ot,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Ln.set(o,pn(Ln.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Fn.set(o,pn(Fn.get(o)||null,e,t,n,r,l)),!0}return!1}function La(e){var t=St(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,Oa(e.priority,function(){Ma(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lo=r,n.target.dispatchEvent(r),lo=null}else return t=Jn(n),t!==null&&Jo(t),e.blockedOn=n,!1;t.shift()}return!0}function Yi(e,t,n){Sr(e)&&n.delete(t)}function nd(){uo=!1,rt!==null&&Sr(rt)&&(rt=null),lt!==null&&Sr(lt)&&(lt=null),ot!==null&&Sr(ot)&&(ot=null),Ln.forEach(Yi),Fn.forEach(Yi)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,uo||(uo=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,nd)))}function $n(e){function t(l){return mn(l,e)}if(0<ar.length){mn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&mn(rt,e),lt!==null&&mn(lt,e),ot!==null&&mn(ot,e),Ln.forEach(t),Fn.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)La(n),n.blockedOn===null&&be.shift()}var Gt=Ge.ReactCurrentBatchConfig,Fr=!0;function rd(e,t,n,r){var l=z,o=Gt.transition;Gt.transition=null;try{z=1,bo(e,t,n,r)}finally{z=l,Gt.transition=o}}function ld(e,t,n,r){var l=z,o=Gt.transition;Gt.transition=null;try{z=4,bo(e,t,n,r)}finally{z=l,Gt.transition=o}}function bo(e,t,n,r){if(Fr){var l=co(e,t,n,r);if(l===null)Ll(e,t,r,$r,n),Xi(e,r);else if(td(l,e,t,n,r))r.stopPropagation();else if(Xi(e,r),t&4&&-1<ed.indexOf(e)){for(;l!==null;){var o=Jn(l);if(o!==null&&Ta(o),o=co(e,t,n,r),o===null&&Ll(e,t,r,$r,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var $r=null;function co(e,t,n,r){if($r=null,e=Go(r),e=St(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $r=e,null}function Fa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Zo:return 1;case _a:return 4;case Or:case Kc:return 16;case Da:return 536870912;default:return 16}default:return 16}}var tt=null,ei=null,xr=null;function $a(){if(xr)return xr;var e,t=ei,n=t.length,r,l="value"in tt?tt.value:tt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return xr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Gi(){return!1}function we(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:Gi,this.isPropagationStopped=Gi,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=we(sn),qn=B({},sn,{view:0,detail:0}),od=we(qn),Il,_l,hn,rl=B({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Il=e.screenX-hn.screenX,_l=e.screenY-hn.screenY):_l=Il=0,hn=e),Il)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),Zi=we(rl),id=B({},rl,{dataTransfer:0}),sd=we(id),ad=B({},qn,{relatedTarget:0}),Dl=we(ad),ud=B({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),cd=we(ud),dd=B({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=we(dd),pd=B({},sn,{data:0}),qi=we(pd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gd[e])?!!t[e]:!1}function ni(){return vd}var yd=B({},qn,{key:function(e){if(e.key){var t=md[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ni,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wd=we(yd),kd=B({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ji=we(kd),Sd=B({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ni}),xd=we(Sd),Cd=B({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=we(Cd),Nd=B({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=we(Nd),_d=[9,13,27,32],ri=Qe&&"CompositionEvent"in window,Nn=null;Qe&&"documentMode"in document&&(Nn=document.documentMode);var Dd=Qe&&"TextEvent"in window&&!Nn,Ua=Qe&&(!ri||Nn&&8<Nn&&11>=Nn),bi=" ",es=!1;function Ra(e,t){switch(e){case"keyup":return _d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Aa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Pd(e,t){switch(e){case"compositionend":return Aa(t);case"keypress":return t.which!==32?null:(es=!0,bi);case"textInput":return e=t.data,e===bi&&es?null:e;default:return null}}function jd(e,t){if(Ft)return e==="compositionend"||!ri&&Ra(e,t)?(e=$a(),xr=ei=tt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ua&&t.locale!=="ko"?null:t.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Td[e.type]:t==="textarea"}function Ba(e,t,n,r){ya(r),t=Ur(t,"onChange"),0<t.length&&(n=new ti("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Un=null;function Md(e){Ja(e,0)}function ll(e){var t=Rt(e);if(da(t))return e}function zd(e,t){if(e==="change")return t}var Va=!1;if(Qe){var Pl;if(Qe){var jl="oninput"in document;if(!jl){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),jl=typeof ns.oninput=="function"}Pl=jl}else Pl=!1;Va=Pl&&(!document.documentMode||9<document.documentMode)}function rs(){In&&(In.detachEvent("onpropertychange",Ha),Un=In=null)}function Ha(e){if(e.propertyName==="value"&&ll(Un)){var t=[];Ba(t,Un,e,Go(e)),xa(Md,t)}}function Od(e,t,n){e==="focusin"?(rs(),In=t,Un=n,In.attachEvent("onpropertychange",Ha)):e==="focusout"&&rs()}function Ld(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Un)}function Fd(e,t){if(e==="click")return ll(t)}function $d(e,t){if(e==="input"||e==="change")return ll(t)}function Ud(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Ud;function Rn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Kl.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function os(e,t){var n=ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ls(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qa(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rd(e){var t=Qa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(r!==null&&li(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=os(n,o);var i=os(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ad=Qe&&"documentMode"in document&&11>=document.documentMode,$t=null,fo=null,_n=null,po=!1;function is(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;po||$t==null||$t!==Tr(r)||(r=$t,"selectionStart"in r&&li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_n&&Rn(_n,r)||(_n=r,r=Ur(fo,"onSelect"),0<r.length&&(t=new ti("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$t)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Tl={},Ka={};Qe&&(Ka=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function ol(e){if(Tl[e])return Tl[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ka)return Tl[e]=t[n];return e}var Xa=ol("animationend"),Ya=ol("animationiteration"),Ga=ol("animationstart"),Za=ol("transitionend"),qa=new Map,ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){qa.set(e,t),Tt(t,[e])}for(var Ml=0;Ml<ss.length;Ml++){var zl=ss[Ml],Bd=zl.toLowerCase(),Vd=zl[0].toUpperCase()+zl.slice(1);pt(Bd,"on"+Vd)}pt(Xa,"onAnimationEnd");pt(Ya,"onAnimationIteration");pt(Ga,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Za,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function as(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function Ja(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;as(l,s,c),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;as(l,s,c),o=a}}}if(zr)throw e=so,zr=!1,so=null,e}function L(e,t){var n=t[yo];n===void 0&&(n=t[yo]=new Set);var r=e+"__bubble";n.has(r)||(ba(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),ba(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[dr]){e[dr]=!0,ia.forEach(function(n){n!=="selectionchange"&&(Hd.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Ol("selectionchange",!1,t))}}function ba(e,t,n,r){switch(Fa(t)){case 1:var l=rd;break;case 4:l=ld;break;default:l=bo}n=l.bind(null,t,n,e),l=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=St(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}xa(function(){var c=o,h=Go(n),m=[];e:{var p=qa.get(e);if(p!==void 0){var g=ti,w=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":g=wd;break;case"focusin":w="focus",g=Dl;break;case"focusout":w="blur",g=Dl;break;case"beforeblur":case"afterblur":g=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=xd;break;case Xa:case Ya:case Ga:g=cd;break;case Za:g=Ed;break;case"scroll":g=od;break;case"wheel":g=Id;break;case"copy":case"cut":case"paste":g=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ji}var S=(t&4)!==0,$=!S&&e==="scroll",d=S?p!==null?p+"Capture":null:p;S=[];for(var u=c,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=On(u,d),v!=null&&S.push(Bn(u,v,f)))),$)break;u=u.return}0<S.length&&(p=new g(p,w,null,n,h),m.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==lo&&(w=n.relatedTarget||n.fromElement)&&(St(w)||w[Ke]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?St(w):null,w!==null&&($=Mt(w),w!==$||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(S=Zi,v="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ji,v="onPointerLeave",d="onPointerEnter",u="pointer"),$=g==null?p:Rt(g),f=w==null?p:Rt(w),p=new S(v,u+"leave",g,n,h),p.target=$,p.relatedTarget=f,v=null,St(h)===c&&(S=new S(d,u+"enter",w,n,h),S.target=f,S.relatedTarget=$,v=S),$=v,g&&w)t:{for(S=g,d=w,u=0,f=S;f;f=zt(f))u++;for(f=0,v=d;v;v=zt(v))f++;for(;0<u-f;)S=zt(S),u--;for(;0<f-u;)d=zt(d),f--;for(;u--;){if(S===d||d!==null&&S===d.alternate)break t;S=zt(S),d=zt(d)}S=null}else S=null;g!==null&&us(m,p,g,S,!1),w!==null&&$!==null&&us(m,$,w,S,!0)}}e:{if(p=c?Rt(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=zd;else if(ts(p))if(Va)C=$d;else{C=Ld;var N=Od}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Fd);if(C&&(C=C(e,c))){Ba(m,C,n,h);break e}N&&N(e,p,c),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&bl(p,"number",p.value)}switch(N=c?Rt(c):window,e){case"focusin":(ts(N)||N.contentEditable==="true")&&($t=N,fo=c,_n=null);break;case"focusout":_n=fo=$t=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,is(m,n,h);break;case"selectionchange":if(Ad)break;case"keydown":case"keyup":is(m,n,h)}var I;if(ri)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ft?Ra(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ua&&n.locale!=="ko"&&(Ft||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ft&&(I=$a()):(tt=h,ei="value"in tt?tt.value:tt.textContent,Ft=!0)),N=Ur(c,_),0<N.length&&(_=new qi(_,e,null,n,h),m.push({event:_,listeners:N}),I?_.data=I:(I=Aa(n),I!==null&&(_.data=I)))),(I=Dd?Pd(e,n):jd(e,n))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(h=new qi("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=I))}Ja(m,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=On(e,n),o!=null&&r.unshift(Bn(e,o,l)),o=On(e,t),o!=null&&r.push(Bn(e,o,l))),e=e.return}return r}function zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=On(n,o),a!=null&&i.unshift(Bn(n,a,s))):l||(a=On(n,o),a!=null&&i.push(Bn(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Wd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(Qd,"")}function fr(e,t,n){if(t=cs(t),cs(e)!==t&&n)throw Error(y(425))}function Rr(){}var mo=null,ho=null;function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,ds=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof ds<"u"?function(e){return ds.resolve(null).then(e).catch(Yd)}:vo;function Yd(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);$n(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),$e="__reactFiber$"+an,Vn="__reactProps$"+an,Ke="__reactContainer$"+an,yo="__reactEvents$"+an,Gd="__reactListeners$"+an,Zd="__reactHandles$"+an;function St(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fs(e);e!==null;){if(n=e[$e])return n;e=fs(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[$e]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function il(e){return e[Vn]||null}var wo=[],At=-1;function mt(e){return{current:e}}function F(e){0>At||(e.current=wo[At],wo[At]=null,At--)}function O(e,t){At++,wo[At]=e.current,e.current=t}var ft={},le=mt(ft),de=mt(!1),It=ft;function bt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Ar(){F(de),F(le)}function ps(e,t,n){if(le.current!==ft)throw Error(y(168));O(le,t),O(de,n)}function eu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Oc(e)||"Unknown",l));return B({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,It=le.current,O(le,e),O(de,de.current),!0}function ms(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=eu(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,F(de),F(le),O(le,e)):F(de),O(de,n)}var Be=null,sl=!1,$l=!1;function tu(e){Be===null?Be=[e]:Be.push(e)}function qd(e){sl=!0,tu(e)}function ht(){if(!$l&&Be!==null){$l=!0;var e=0,t=z;try{var n=Be;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,sl=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Ia(Zo,ht),l}finally{z=t,$l=!1}}return null}var Bt=[],Vt=0,Vr=null,Hr=0,Se=[],xe=0,_t=null,Ve=1,He="";function wt(e,t){Bt[Vt++]=Hr,Bt[Vt++]=Vr,Vr=e,Hr=t}function nu(e,t,n){Se[xe++]=Ve,Se[xe++]=He,Se[xe++]=_t,_t=e;var r=Ve;e=He;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var o=32-Me(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ve=1<<32-Me(t)+l|n<<l|r,He=o+e}else Ve=1<<o|n<<l|r,He=e}function oi(e){e.return!==null&&(wt(e,1),nu(e,1,0))}function ii(e){for(;e===Vr;)Vr=Bt[--Vt],Bt[Vt]=null,Hr=Bt[--Vt],Bt[Vt]=null;for(;e===_t;)_t=Se[--xe],Se[xe]=null,He=Se[--xe],Se[xe]=null,Ve=Se[--xe],Se[xe]=null}var ge=null,he=null,U=!1,Te=null;function ru(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(U){var t=he;if(t){var n=t;if(!hs(e,t)){if(ko(e))throw Error(y(418));t=it(n.nextSibling);var r=ge;t&&hs(e,t)?ru(r,n):(e.flags=e.flags&-4097|2,U=!1,ge=e)}}else{if(ko(e))throw Error(y(418));e.flags=e.flags&-4097|2,U=!1,ge=e}}}function gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!U)return gs(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!go(e.type,e.memoizedProps)),t&&(t=he)){if(ko(e))throw lu(),Error(y(418));for(;t;)ru(e,t),t=it(t.nextSibling)}if(gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?it(e.stateNode.nextSibling):null;return!0}function lu(){for(var e=he;e;)e=it(e.nextSibling)}function en(){he=ge=null,U=!1}function si(e){Te===null?Te=[e]:Te.push(e)}var Jd=Ge.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vs(e){var t=e._init;return t(e._payload)}function ou(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=ct(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,v){return u===null||u.tag!==6?(u=Wl(f,d.mode,v),u.return=d,u):(u=l(u,f),u.return=d,u)}function a(d,u,f,v){var C=f.type;return C===Lt?h(d,u,f.props.children,v,f.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qe&&vs(C)===u.type)?(v=l(u,f.props),v.ref=gn(d,u,f),v.return=d,v):(v=jr(f.type,f.key,f.props,null,d.mode,v),v.ref=gn(d,u,f),v.return=d,v)}function c(d,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Ql(f,d.mode,v),u.return=d,u):(u=l(u,f.children||[]),u.return=d,u)}function h(d,u,f,v,C){return u===null||u.tag!==7?(u=Nt(f,d.mode,v,C),u.return=d,u):(u=l(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Wl(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return f=jr(u.type,u.key,u.props,null,d.mode,f),f.ref=gn(d,null,u),f.return=d,f;case Ot:return u=Ql(u,d.mode,f),u.return=d,u;case qe:var v=u._init;return m(d,v(u._payload),f)}if(kn(u)||dn(u))return u=Nt(u,d.mode,f,null),u.return=d,u;mr(d,u)}return null}function p(d,u,f,v){var C=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:s(d,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===C?a(d,u,f,v):null;case Ot:return f.key===C?c(d,u,f,v):null;case qe:return C=f._init,p(d,u,C(f._payload),v)}if(kn(f)||dn(f))return C!==null?null:h(d,u,f,v,null);mr(d,f)}return null}function g(d,u,f,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,s(u,d,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return d=d.get(v.key===null?f:v.key)||null,a(u,d,v,C);case Ot:return d=d.get(v.key===null?f:v.key)||null,c(u,d,v,C);case qe:var N=v._init;return g(d,u,f,N(v._payload),C)}if(kn(v)||dn(v))return d=d.get(f)||null,h(u,d,v,C,null);mr(u,v)}return null}function w(d,u,f,v){for(var C=null,N=null,I=u,_=u=0,H=null;I!==null&&_<f.length;_++){I.index>_?(H=I,I=null):H=I.sibling;var T=p(d,I,f[_],v);if(T===null){I===null&&(I=H);break}e&&I&&T.alternate===null&&t(d,I),u=o(T,u,_),N===null?C=T:N.sibling=T,N=T,I=H}if(_===f.length)return n(d,I),U&&wt(d,_),C;if(I===null){for(;_<f.length;_++)I=m(d,f[_],v),I!==null&&(u=o(I,u,_),N===null?C=I:N.sibling=I,N=I);return U&&wt(d,_),C}for(I=r(d,I);_<f.length;_++)H=g(I,d,_,f[_],v),H!==null&&(e&&H.alternate!==null&&I.delete(H.key===null?_:H.key),u=o(H,u,_),N===null?C=H:N.sibling=H,N=H);return e&&I.forEach(function(_e){return t(d,_e)}),U&&wt(d,_),C}function S(d,u,f,v){var C=dn(f);if(typeof C!="function")throw Error(y(150));if(f=C.call(f),f==null)throw Error(y(151));for(var N=C=null,I=u,_=u=0,H=null,T=f.next();I!==null&&!T.done;_++,T=f.next()){I.index>_?(H=I,I=null):H=I.sibling;var _e=p(d,I,T.value,v);if(_e===null){I===null&&(I=H);break}e&&I&&_e.alternate===null&&t(d,I),u=o(_e,u,_),N===null?C=_e:N.sibling=_e,N=_e,I=H}if(T.done)return n(d,I),U&&wt(d,_),C;if(I===null){for(;!T.done;_++,T=f.next())T=m(d,T.value,v),T!==null&&(u=o(T,u,_),N===null?C=T:N.sibling=T,N=T);return U&&wt(d,_),C}for(I=r(d,I);!T.done;_++,T=f.next())T=g(I,d,_,T.value,v),T!==null&&(e&&T.alternate!==null&&I.delete(T.key===null?_:T.key),u=o(T,u,_),N===null?C=T:N.sibling=T,N=T);return e&&I.forEach(function(un){return t(d,un)}),U&&wt(d,_),C}function $(d,u,f,v){if(typeof f=="object"&&f!==null&&f.type===Lt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var C=f.key,N=u;N!==null;){if(N.key===C){if(C=f.type,C===Lt){if(N.tag===7){n(d,N.sibling),u=l(N,f.props.children),u.return=d,d=u;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qe&&vs(C)===N.type){n(d,N.sibling),u=l(N,f.props),u.ref=gn(d,N,f),u.return=d,d=u;break e}n(d,N);break}else t(d,N);N=N.sibling}f.type===Lt?(u=Nt(f.props.children,d.mode,v,f.key),u.return=d,d=u):(v=jr(f.type,f.key,f.props,null,d.mode,v),v.ref=gn(d,u,f),v.return=d,d=v)}return i(d);case Ot:e:{for(N=f.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=l(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Ql(f,d.mode,v),u.return=d,d=u}return i(d);case qe:return N=f._init,$(d,u,N(f._payload),v)}if(kn(f))return w(d,u,f,v);if(dn(f))return S(d,u,f,v);mr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=l(u,f),u.return=d,d=u):(n(d,u),u=Wl(f,d.mode,v),u.return=d,d=u),i(d)):n(d,u)}return $}var tn=ou(!0),iu=ou(!1),Wr=mt(null),Qr=null,Ht=null,ai=null;function ui(){ai=Ht=Qr=null}function ci(e){var t=Wr.current;F(Wr),e._currentValue=t}function xo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Qr=e,ai=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ai!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Qr===null)throw Error(y(308));Ht=e,Qr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var xt=null;function di(e){xt===null?xt=[e]:xt.push(e)}function su(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,di(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,di(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qo(e,n)}}function ys(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;Je=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?o=c:i.next=c,i=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(o!==null){var m=l.baseState;i=0,h=c=a=null,s=o;do{var p=s.lane,g=s.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,S=s;switch(p=t,g=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){m=w.call(g,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,p=typeof w=="function"?w.call(g,m,p):w,p==null)break e;m=B({},m,p);break e;case 2:Je=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=g,a=m):h=h.next=g,i|=p;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;p=s,s=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Pt|=i,e.lanes=i,e.memoizedState=m}}function ws(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var bn={},Re=mt(bn),Hn=mt(bn),Wn=mt(bn);function Ct(e){if(e===bn)throw Error(y(174));return e}function pi(e,t){switch(O(Wn,t),O(Hn,e),O(Re,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:to(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=to(t,e)}F(Re),O(Re,t)}function nn(){F(Re),F(Hn),F(Wn)}function uu(e){Ct(Wn.current);var t=Ct(Re.current),n=to(t,e.type);t!==n&&(O(Hn,e),O(Re,n))}function mi(e){Hn.current===e&&(F(Re),F(Hn))}var R=mt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function hi(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Nr=Ge.ReactCurrentDispatcher,Rl=Ge.ReactCurrentBatchConfig,Dt=0,A=null,X=null,Z=null,Yr=!1,Dn=!1,Qn=0,bd=0;function te(){throw Error(y(321))}function gi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function vi(e,t,n,r,l,o){if(Dt=o,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nr.current=e===null||e.memoizedState===null?rf:lf,e=n(r,l),Dn){o=0;do{if(Dn=!1,Qn=0,25<=o)throw Error(y(301));o+=1,Z=X=null,t.updateQueue=null,Nr.current=of,e=n(r,l)}while(Dn)}if(Nr.current=Gr,t=X!==null&&X.next!==null,Dt=0,Z=X=A=null,Yr=!1,t)throw Error(y(300));return e}function yi(){var e=Qn!==0;return Qn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?A.memoizedState=Z=e:Z=Z.next=e,Z}function Ie(){if(X===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?A.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(y(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?A.memoizedState=Z=e:Z=Z.next=e}return Z}function Kn(e,t){return typeof t=="function"?t(e):t}function Al(e){var t=Ie(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,c=o;do{var h=c.lane;if((Dt&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,A.lanes|=h,Pt|=h}c=c.next}while(c!==null&&c!==o);a===null?i=r:a.next=s,Oe(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,A.lanes|=o,Pt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Oe(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cu(){}function du(e,t){var n=A,r=Ie(),l=t(),o=!Oe(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,wi(mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Xn(9,pu.bind(null,n,r,l,t),void 0,null),q===null)throw Error(y(349));Dt&30||fu(n,t,l)}return l}function fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pu(e,t,n,r){t.value=n,t.getSnapshot=r,hu(t)&&gu(e)}function mu(e,t,n){return n(function(){hu(t)&&gu(e)})}function hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function gu(e){var t=Xe(e,1);t!==null&&ze(t,e,1,-1)}function ks(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=nf.bind(null,A,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vu(){return Ie().memoizedState}function Ir(e,t,n,r){var l=Fe();A.flags|=e,l.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Ie();r=r===void 0?null:r;var o=void 0;if(X!==null){var i=X.memoizedState;if(o=i.destroy,r!==null&&gi(r,i.deps)){l.memoizedState=Xn(t,n,o,r);return}}A.flags|=e,l.memoizedState=Xn(1|t,n,o,r)}function Ss(e,t){return Ir(8390656,8,e,t)}function wi(e,t){return al(2048,8,e,t)}function yu(e,t){return al(4,2,e,t)}function wu(e,t){return al(4,4,e,t)}function ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Su(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,ku.bind(null,t,e),n)}function ki(){}function xu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return Dt&21?(Oe(n,t)||(n=Pa(),A.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function ef(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),t()}finally{z=n,Rl.transition=r}}function Nu(){return Ie().memoizedState}function tf(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iu(e))_u(t,n);else if(n=su(e,t,n,r),n!==null){var l=ie();ze(n,e,r,l),Du(n,t,r)}}function nf(e,t,n){var r=ut(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))_u(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Oe(s,i)){var a=t.interleaved;a===null?(l.next=l,di(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=su(e,t,l,r),n!==null&&(l=ie(),ze(n,e,r,l),Du(n,t,r))}}function Iu(e){var t=e.alternate;return e===A||t!==null&&t===A}function _u(e,t){Dn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Du(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qo(e,n)}}var Gr={readContext:Ne,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},rf={readContext:Ne,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:Ss,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tf.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:ks,useDebugValue:ki,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=ks(!1),t=e[0];return e=ef.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=A,l=Fe();if(U){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),q===null)throw Error(y(349));Dt&30||fu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ss(mu.bind(null,r,o,e),[e]),r.flags|=2048,Xn(9,pu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Fe(),t=q.identifierPrefix;if(U){var n=He,r=Ve;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lf={readContext:Ne,useCallback:xu,useContext:Ne,useEffect:wi,useImperativeHandle:Su,useInsertionEffect:yu,useLayoutEffect:wu,useMemo:Cu,useReducer:Al,useRef:vu,useState:function(){return Al(Kn)},useDebugValue:ki,useDeferredValue:function(e){var t=Ie();return Eu(t,X.memoizedState,e)},useTransition:function(){var e=Al(Kn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:cu,useSyncExternalStore:du,useId:Nu,unstable_isNewReconciler:!1},of={readContext:Ne,useCallback:xu,useContext:Ne,useEffect:wi,useImperativeHandle:Su,useInsertionEffect:yu,useLayoutEffect:wu,useMemo:Cu,useReducer:Bl,useRef:vu,useState:function(){return Bl(Kn)},useDebugValue:ki,useDeferredValue:function(e){var t=Ie();return X===null?t.memoizedState=e:Eu(t,X.memoizedState,e)},useTransition:function(){var e=Bl(Kn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:cu,useSyncExternalStore:du,useId:Nu,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Co(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),l=ut(e),o=We(r,l);o.payload=t,n!=null&&(o.callback=n),t=st(e,o,l),t!==null&&(ze(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),l=ut(e),o=We(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=st(e,o,l),t!==null&&(ze(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=ut(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(ze(t,e,r,n),Er(t,e,r))}};function xs(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Rn(n,r)||!Rn(l,o):!0}function Pu(e,t,n){var r=!1,l=ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(l=fe(t)?It:le.current,r=t.contextTypes,o=(r=r!=null)?bt(e,l):ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Eo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},fi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ne(o):(o=fe(t)?It:le.current,l.context=bt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Co(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=zc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function No(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sf=typeof WeakMap=="function"?WeakMap:Map;function ju(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Lo=r),No(e,t)},n}function Tu(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){No(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){No(e,t),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Es(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Sf.bind(null,e,t,n),t.then(e,e))}function Ns(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Is(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var af=Ge.ReactCurrentOwner,ce=!1;function oe(e,t,n,r){t.child=e===null?iu(t,null,n,r):tn(t,e.child,n,r)}function _s(e,t,n,r,l){n=n.render;var o=t.ref;return Zt(t,l),r=vi(e,t,n,r,o,l),n=yi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(U&&n&&oi(t),t.flags|=1,oe(e,t,r,l),t.child)}function Ds(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Di(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mu(e,t,o,r,l)):(e=jr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Rn,n(i,r)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=ct(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Rn(o,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return Io(e,t,n,r,l)}function zu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Qt,me),me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Qt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,O(Qt,me),me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,O(Qt,me),me|=r;return oe(e,t,l,n),t.child}function Ou(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Io(e,t,n,r,l){var o=fe(n)?It:le.current;return o=bt(t,o),Zt(t,l),n=vi(e,t,n,r,o,l),r=yi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(U&&r&&oi(t),t.flags|=1,oe(e,t,n,l),t.child)}function Ps(e,t,n,r,l){if(fe(n)){var o=!0;Br(t)}else o=!1;if(Zt(t,l),t.stateNode===null)_r(e,t),Pu(t,n,r),Eo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=fe(n)?It:le.current,c=bt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Cs(t,i,r,c),Je=!1;var p=t.memoizedState;i.state=p,Kr(t,r,i,l),a=t.memoizedState,s!==r||p!==a||de.current||Je?(typeof h=="function"&&(Co(t,n,h,r),a=t.memoizedState),(s=Je||xs(t,n,s,r,p,a,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,au(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Pe(t.type,s),i.props=c,m=t.pendingProps,p=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ne(a):(a=fe(n)?It:le.current,a=bt(t,a));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||p!==a)&&Cs(t,i,r,a),Je=!1,p=t.memoizedState,i.state=p,Kr(t,r,i,l);var w=t.memoizedState;s!==m||p!==w||de.current||Je?(typeof g=="function"&&(Co(t,n,g,r),w=t.memoizedState),(c=Je||xs(t,n,c,r,p,w,a)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _o(e,t,n,r,o,l)}function _o(e,t,n,r,l,o){Ou(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ms(t,n,!1),Ye(e,t,o);r=t.stateNode,af.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=tn(t,e.child,null,o),t.child=tn(t,null,s,o)):oe(e,t,s,o),t.memoizedState=r.state,l&&ms(t,n,!0),t.child}function Lu(e){var t=e.stateNode;t.pendingContext?ps(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ps(e,t.context,!1),pi(e,t.containerInfo)}function js(e,t,n,r,l){return en(),si(l),t.flags|=256,oe(e,t,n,r),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Po(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fu(e,t,n){var r=t.pendingProps,l=R.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(R,l&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=fl(i,r,0,null),e=Nt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Po(n),t.memoizedState=Do,e):Si(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return uf(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ct(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=ct(s,o):(o=Nt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Po(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Do,r}return o=e.child,e=o.sibling,r=ct(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Si(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&si(r),tn(t,e.child,null,n),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(y(422))),hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),o=Nt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tn(t,e.child,null,i),t.child.memoizedState=Po(i),t.memoizedState=Do,o);if(!(t.mode&1))return hr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(y(419)),r=Vl(o,r,void 0),hr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ce||s){if(r=q,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Xe(e,l),ze(r,e,l,-1))}return _i(),r=Vl(Error(y(421))),hr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=xf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,he=it(l.nextSibling),ge=t,U=!0,Te=null,e!==null&&(Se[xe++]=Ve,Se[xe++]=He,Se[xe++]=_t,Ve=e.id,He=e.overflow,_t=t),t=Si(t,r.children),t.flags|=4096,t)}function Ts(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xo(e.return,t,n)}function Hl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function $u(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=R.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ts(e,n,t);else if(e.tag===19)Ts(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(R,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Hl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Hl(t,!0,n,null,o);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cf(e,t,n){switch(t.tag){case 3:Lu(t),en();break;case 5:uu(t);break;case 1:fe(t.type)&&Br(t);break;case 4:pi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(R,R.current&1),t.flags|=128,null):n&t.child.childLanes?Fu(e,t,n):(O(R,R.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);O(R,R.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $u(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(R,R.current),r)break;return null;case 22:case 23:return t.lanes=0,zu(e,t,n)}return Ye(e,t,n)}var Uu,jo,Ru,Au;Uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jo=function(){};Ru=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(Re.current);var o=null;switch(n){case"input":l=ql(e,l),r=ql(e,r),o=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":l=eo(e,l),r=eo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rr)}no(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&L("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Au=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function df(e,t,n){var r=t.pendingProps;switch(ii(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Ar(),ne(t),null;case 3:return r=t.stateNode,nn(),F(de),F(le),hi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Uo(Te),Te=null))),jo(e,t),ne(t),null;case 5:mi(t);var l=Ct(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ru(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=Ct(Re.current),pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$e]=t,r[Vn]=o,e=(t.mode&1)!==0,n){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(l=0;l<xn.length;l++)L(xn[l],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":Ai(r,o),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},L("invalid",r);break;case"textarea":Vi(r,o),L("invalid",r)}no(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),l=["children",""+s]):Mn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&L("scroll",r)}switch(n){case"input":lr(r),Bi(r,o,!0);break;case"textarea":lr(r),Hi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Rr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ma(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[$e]=t,e[Vn]=r,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(i=ro(n,r),n){case"dialog":L("cancel",e),L("close",e),l=r;break;case"iframe":case"object":case"embed":L("load",e),l=r;break;case"video":case"audio":for(l=0;l<xn.length;l++)L(xn[l],e);l=r;break;case"source":L("error",e),l=r;break;case"img":case"image":case"link":L("error",e),L("load",e),l=r;break;case"details":L("toggle",e),l=r;break;case"input":Ai(e,r),l=ql(e,r),L("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),L("invalid",e);break;case"textarea":Vi(e,r),l=eo(e,r),L("invalid",e);break;default:l=r}no(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?va(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ha(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&zn(e,a):typeof a=="number"&&zn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&L("scroll",e):a!=null&&Qo(e,o,a,i))}switch(n){case"input":lr(e),Bi(e,r,!1);break;case"textarea":lr(e),Hi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Kt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Rr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Au(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ct(Wn.current),Ct(Re.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(o=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return ne(t),null;case 13:if(F(R),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&he!==null&&t.mode&1&&!(t.flags&128))lu(),en(),t.flags|=98560,o=!1;else if(o=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[$e]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else Te!==null&&(Uo(Te),Te=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||R.current&1?Y===0&&(Y=3):_i())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),jo(e,t),e===null&&An(t.stateNode.containerInfo),ne(t),null;case 10:return ci(t.type._context),ne(t),null;case 17:return fe(t.type)&&Ar(),ne(t),null;case 19:if(F(R),o=t.memoizedState,o===null)return ne(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)vn(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Xr(e),i!==null){for(t.flags|=128,vn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(R,R.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>ln&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!U)return ne(t),null}else 2*Q()-o.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=R.current,O(R,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Ii(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function ff(e,t){switch(ii(t),t.tag){case 1:return fe(t.type)&&Ar(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),F(de),F(le),hi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mi(t),null;case 13:if(F(R),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(R),null;case 4:return nn(),null;case 10:return ci(t.type._context),null;case 22:case 23:return Ii(),null;case 24:return null;default:return null}}var gr=!1,re=!1,pf=typeof WeakSet=="function"?WeakSet:Set,x=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function To(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ms=!1;function mf(e,t){if(mo=Fr,e=Qa(),li(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var g;m!==n||l!==0&&m.nodeType!==3||(s=i+l),m!==o||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(g=m.firstChild)!==null;)p=m,m=g;for(;;){if(m===e)break t;if(p===n&&++c===l&&(s=i),p===o&&++h===r&&(a=i),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ho={focusedElem:e,selectionRange:n},Fr=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,$=w.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:Pe(t.type,S),$);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return w=Ms,Ms=!1,w}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&To(t,n,o)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bu(e){var t=e.alternate;t!==null&&(e.alternate=null,Bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[Vn],delete t[yo],delete t[Gd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Rr));else if(r!==4&&(e=e.child,e!==null))for(zo(e,t,n),e=e.sibling;e!==null;)zo(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var J=null,je=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Hu(e,t,n),n=n.sibling}function Hu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:re||Wt(n,t);case 6:var r=J,l=je;J=null,Ze(e,t,n),J=r,je=l,J!==null&&(je?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(je?(e=J,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),$n(e)):Fl(J,n.stateNode));break;case 4:r=J,l=je,J=n.stateNode.containerInfo,je=!0,Ze(e,t,n),J=r,je=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&To(n,t,i),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!re&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ze(e,t,n),re=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pf),t.forEach(function(r){var l=Cf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:J=s.stateNode,je=!1;break e;case 3:J=s.stateNode.containerInfo,je=!0;break e;case 4:J=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(J===null)throw Error(y(160));Hu(o,i,l),J=null,je=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Le(e),r&4){try{Pn(3,e,e.return),cl(3,e)}catch(S){V(e,e.return,S)}try{Pn(5,e,e.return)}catch(S){V(e,e.return,S)}}break;case 1:De(t,e),Le(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(De(t,e),Le(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{zn(l,"")}catch(S){V(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&fa(l,o),ro(s,i);var c=ro(s,o);for(i=0;i<a.length;i+=2){var h=a[i],m=a[i+1];h==="style"?va(l,m):h==="dangerouslySetInnerHTML"?ha(l,m):h==="children"?zn(l,m):Qo(l,h,m,c)}switch(s){case"input":Jl(l,o);break;case"textarea":pa(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Kt(l,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?Kt(l,!!o.multiple,o.defaultValue,!0):Kt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Vn]=o}catch(S){V(e,e.return,S)}}break;case 6:if(De(t,e),Le(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){V(e,e.return,S)}}break;case 3:if(De(t,e),Le(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(S){V(e,e.return,S)}break;case 4:De(t,e),Le(e);break;case 13:De(t,e),Le(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ei=Q())),r&4&&Os(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,De(t,e),re=c):De(t,e),Le(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(x=e,h=e.child;h!==null;){for(m=x=h;x!==null;){switch(p=x,g=p.child,p.tag){case 0:case 11:case 14:case 15:Pn(4,p,p.return);break;case 1:Wt(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){V(r,n,S)}}break;case 5:Wt(p,p.return);break;case 22:if(p.memoizedState!==null){Fs(m);continue}}g!==null?(g.return=p,x=g):Fs(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ga("display",i))}catch(S){V(e,e.return,S)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(S){V(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(t,e),Le(e),r&4&&Os(e);break;case 21:break;default:De(t,e),Le(e)}}function Le(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(zn(l,""),r.flags&=-33);var o=zs(e);Oo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=zs(e);zo(e,s,i);break;default:throw Error(y(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hf(e,t,n){x=e,Qu(e)}function Qu(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var l=x,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||gr;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||re;s=gr;var c=re;if(gr=i,(re=a)&&!c)for(x=l;x!==null;)i=x,a=i.child,i.tag===22&&i.memoizedState!==null?$s(l):a!==null?(a.return=i,x=a):$s(l);for(;o!==null;)x=o,Qu(o),o=o.sibling;x=l,gr=s,re=c}Ls(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,x=o):Ls(e)}}function Ls(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ws(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ws(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&$n(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&Mo(t)}catch(p){V(t,t.return,p)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function Fs(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function $s(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(a){V(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){V(t,l,a)}}var o=t.return;try{Mo(t)}catch(a){V(t,o,a)}break;case 5:var i=t.return;try{Mo(t)}catch(a){V(t,i,a)}}}catch(a){V(t,t.return,a)}if(t===e){x=null;break}var s=t.sibling;if(s!==null){s.return=t.return,x=s;break}x=t.return}}var gf=Math.ceil,Zr=Ge.ReactCurrentDispatcher,xi=Ge.ReactCurrentOwner,Ee=Ge.ReactCurrentBatchConfig,M=0,q=null,K=null,b=0,me=0,Qt=mt(0),Y=0,Yn=null,Pt=0,dl=0,Ci=0,jn=null,ue=null,Ei=0,ln=1/0,Ae=null,qr=!1,Lo=null,at=null,vr=!1,nt=null,Jr=0,Tn=0,Fo=null,Dr=-1,Pr=0;function ie(){return M&6?Q():Dr!==-1?Dr:Dr=Q()}function ut(e){return e.mode&1?M&2&&b!==0?b&-b:Jd.transition!==null?(Pr===0&&(Pr=Pa()),Pr):(e=z,e!==0||(e=window.event,e=e===void 0?16:Fa(e.type)),e):1}function ze(e,t,n,r){if(50<Tn)throw Tn=0,Fo=null,Error(y(185));Zn(e,n,r),(!(M&2)||e!==q)&&(e===q&&(!(M&2)&&(dl|=n),Y===4&&et(e,b)),pe(e,r),n===1&&M===0&&!(t.mode&1)&&(ln=Q()+500,sl&&ht()))}function pe(e,t){var n=e.callbackNode;Jc(e,t);var r=Lr(e,e===q?b:0);if(r===0)n!==null&&Ki(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ki(n),t===1)e.tag===0?qd(Us.bind(null,e)):tu(Us.bind(null,e)),Xd(function(){!(M&6)&&ht()}),n=null;else{switch(ja(r)){case 1:n=Zo;break;case 4:n=_a;break;case 16:n=Or;break;case 536870912:n=Da;break;default:n=Or}n=bu(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(Dr=-1,Pr=0,M&6)throw Error(y(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Lr(e,e===q?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=br(e,r);else{t=r;var l=M;M|=2;var o=Yu();(q!==e||b!==t)&&(Ae=null,ln=Q()+500,Et(e,t));do try{wf();break}catch(s){Xu(e,s)}while(!0);ui(),Zr.current=o,M=l,K!==null?t=0:(q=null,b=0,t=Y)}if(t!==0){if(t===2&&(l=ao(e),l!==0&&(r=l,t=$o(e,l))),t===1)throw n=Yn,Et(e,0),et(e,r),pe(e,Q()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!vf(l)&&(t=br(e,r),t===2&&(o=ao(e),o!==0&&(r=o,t=$o(e,o))),t===1))throw n=Yn,Et(e,0),et(e,r),pe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:kt(e,ue,Ae);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Ei+500-Q(),10<t)){if(Lr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vo(kt.bind(null,e,ue,Ae),t);break}kt(e,ue,Ae);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Me(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gf(r/1960))-r,10<r){e.timeoutHandle=vo(kt.bind(null,e,ue,Ae),r);break}kt(e,ue,Ae);break;case 5:kt(e,ue,Ae);break;default:throw Error(y(329))}}}return pe(e,Q()),e.callbackNode===n?Ku.bind(null,e):null}function $o(e,t){var n=jn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=br(e,t),e!==2&&(t=ue,ue=n,t!==null&&Uo(t)),e}function Uo(e){ue===null?ue=e:ue.push.apply(ue,e)}function vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Oe(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ci,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function Us(e){if(M&6)throw Error(y(327));qt();var t=Lr(e,0);if(!(t&1))return pe(e,Q()),null;var n=br(e,t);if(e.tag!==0&&n===2){var r=ao(e);r!==0&&(t=r,n=$o(e,r))}if(n===1)throw n=Yn,Et(e,0),et(e,t),pe(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,ue,Ae),pe(e,Q()),null}function Ni(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(ln=Q()+500,sl&&ht())}}function jt(e){nt!==null&&nt.tag===0&&!(M&6)&&qt();var t=M;M|=1;var n=Ee.transition,r=z;try{if(Ee.transition=null,z=1,e)return e()}finally{z=r,Ee.transition=n,M=t,!(M&6)&&ht()}}function Ii(){me=Qt.current,F(Qt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(ii(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ar();break;case 3:nn(),F(de),F(le),hi();break;case 5:mi(r);break;case 4:nn();break;case 13:F(R);break;case 19:F(R);break;case 10:ci(r.type._context);break;case 22:case 23:Ii()}n=n.return}if(q=e,K=e=ct(e.current,null),b=me=t,Y=0,Yn=null,Ci=dl=Pt=0,ue=jn=null,xt!==null){for(t=0;t<xt.length;t++)if(n=xt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}xt=null}return e}function Xu(e,t){do{var n=K;try{if(ui(),Nr.current=Gr,Yr){for(var r=A.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yr=!1}if(Dt=0,Z=X=A=null,Dn=!1,Qn=0,xi.current=null,n===null||n.return===null){Y=1,Yn=t,K=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=b,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Ns(i);if(g!==null){g.flags&=-257,Is(g,i,s,o,t),g.mode&1&&Es(o,c,t),t=g,a=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(a),t.updateQueue=S}else w.add(a);break e}else{if(!(t&1)){Es(o,c,t),_i();break e}a=Error(y(426))}}else if(U&&s.mode&1){var $=Ns(i);if($!==null){!($.flags&65536)&&($.flags|=256),Is($,i,s,o,t),si(rn(a,s));break e}}o=a=rn(a,s),Y!==4&&(Y=2),jn===null?jn=[o]:jn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=ju(o,a,t);ys(o,d);break e;case 1:s=a;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(at===null||!at.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Tu(o,s,t);ys(o,v);break e}}o=o.return}while(o!==null)}Zu(n)}catch(C){t=C,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Yu(){var e=Zr.current;return Zr.current=Gr,e===null?Gr:e}function _i(){(Y===0||Y===3||Y===2)&&(Y=4),q===null||!(Pt&268435455)&&!(dl&268435455)||et(q,b)}function br(e,t){var n=M;M|=2;var r=Yu();(q!==e||b!==t)&&(Ae=null,Et(e,t));do try{yf();break}catch(l){Xu(e,l)}while(!0);if(ui(),M=n,Zr.current=r,K!==null)throw Error(y(261));return q=null,b=0,Y}function yf(){for(;K!==null;)Gu(K)}function wf(){for(;K!==null&&!Hc();)Gu(K)}function Gu(e){var t=Ju(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Zu(e):K=t,xi.current=null}function Zu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ff(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,K=null;return}}else if(n=df(n,t,me),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function kt(e,t,n){var r=z,l=Ee.transition;try{Ee.transition=null,z=1,kf(e,t,n,r)}finally{Ee.transition=l,z=r}return null}function kf(e,t,n,r){do qt();while(nt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(bc(e,o),e===q&&(K=q=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,bu(Or,function(){return qt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var i=z;z=1;var s=M;M|=4,xi.current=null,mf(e,n),Wu(n,e),Rd(ho),Fr=!!mo,ho=mo=null,e.current=n,hf(n),Wc(),M=s,z=i,Ee.transition=o}else e.current=n;if(vr&&(vr=!1,nt=e,Jr=l),o=e.pendingLanes,o===0&&(at=null),Xc(n.stateNode),pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Lo,Lo=null,e;return Jr&1&&e.tag!==0&&qt(),o=e.pendingLanes,o&1?e===Fo?Tn++:(Tn=0,Fo=e):Tn=0,ht(),null}function qt(){if(nt!==null){var e=ja(Jr),t=Ee.transition,n=z;try{if(Ee.transition=null,z=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Jr=0,M&6)throw Error(y(331));var l=M;for(M|=4,x=e.current;x!==null;){var o=x,i=o.child;if(x.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(x=c;x!==null;){var h=x;switch(h.tag){case 0:case 11:case 15:Pn(8,h,o)}var m=h.child;if(m!==null)m.return=h,x=m;else for(;x!==null;){h=x;var p=h.sibling,g=h.return;if(Bu(h),h===c){x=null;break}if(p!==null){p.return=g,x=p;break}x=g}}}var w=o.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var $=S.sibling;S.sibling=null,S=$}while(S!==null)}}x=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,x=i;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,x=d;break e}x=o.return}}var u=e.current;for(x=u;x!==null;){i=x;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,x=f;else e:for(i=u;x!==null;){if(s=x,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:cl(9,s)}}catch(C){V(s,s.return,C)}if(s===i){x=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,x=v;break e}x=s.return}}if(M=l,ht(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{z=n,Ee.transition=t}}return!1}function Rs(e,t,n){t=rn(n,t),t=ju(e,t,1),e=st(e,t,1),t=ie(),e!==null&&(Zn(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Rs(e,e,n);else for(;t!==null;){if(t.tag===3){Rs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=rn(n,e),e=Tu(t,e,1),t=st(t,e,1),e=ie(),t!==null&&(Zn(t,1,e),pe(t,e));break}}t=t.return}}function Sf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(b&n)===n&&(Y===4||Y===3&&(b&130023424)===b&&500>Q()-Ei?Et(e,0):Ci|=n),pe(e,t)}function qu(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ie();e=Xe(e,t),e!==null&&(Zn(e,t,n),pe(e,n))}function xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Cf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),qu(e,n)}var Ju;Ju=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,cf(e,t,n);ce=!!(e.flags&131072)}else ce=!1,U&&t.flags&1048576&&nu(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var l=bt(t,le.current);Zt(t,n),l=vi(null,t,r,e,l,n);var o=yi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(o=!0,Br(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fi(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,Eo(t,r,e,n),t=_o(null,t,r,!0,o,n)):(t.tag=0,U&&o&&oi(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Nf(r),e=Pe(r,e),l){case 0:t=Io(null,t,r,e,n);break e;case 1:t=Ps(null,t,r,e,n);break e;case 11:t=_s(null,t,r,e,n);break e;case 14:t=Ds(null,t,r,Pe(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Io(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ps(e,t,r,l,n);case 3:e:{if(Lu(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,au(e,t),Kr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=rn(Error(y(423)),t),t=js(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=js(e,t,r,n,l);break e}else for(he=it(t.stateNode.containerInfo.firstChild),ge=t,U=!0,Te=null,n=iu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ye(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return uu(t),e===null&&So(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,go(r,l)?i=null:o!==null&&go(r,o)&&(t.flags|=32),Ou(e,t),oe(e,t,i,n),t.child;case 6:return e===null&&So(t),null;case 13:return Fu(e,t,n);case 4:return pi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),_s(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,O(Wr,r._currentValue),r._currentValue=i,o!==null)if(Oe(o.value,i)){if(o.children===l.children&&!de.current){t=Ye(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=We(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xo(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),xo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=Ne(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Pe(r,t.pendingProps),l=Pe(r.type,l),Ds(e,t,r,l,n);case 15:return Mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),_r(e,t),t.tag=1,fe(r)?(e=!0,Br(t)):e=!1,Zt(t,n),Pu(t,r,l),Eo(t,r,l,n),_o(null,t,r,!0,e,n);case 19:return $u(e,t,n);case 22:return zu(e,t,n)}throw Error(y(156,t.tag))};function bu(e,t){return Ia(e,t)}function Ef(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Ef(e,t,n,r)}function Di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return Di(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===Yo)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Di(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Lt:return Nt(n.children,l,o,t);case Ko:i=8,l|=8;break;case Xl:return e=Ce(12,n,t,l|2),e.elementType=Xl,e.lanes=o,e;case Yl:return e=Ce(13,n,t,l),e.elementType=Yl,e.lanes=o,e;case Gl:return e=Ce(19,n,t,l),e.elementType=Gl,e.lanes=o,e;case ua:return fl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sa:i=10;break e;case aa:i=9;break e;case Xo:i=11;break e;case Yo:i=14;break e;case qe:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ce(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Nt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=ua,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function If(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Pi(e,t,n,r,l,o,i,s,a){return e=new If(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fi(o),e}function _f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ec(e){if(!e)return ft;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(fe(n))return eu(e,n,t)}return t}function tc(e,t,n,r,l,o,i,s,a){return e=Pi(n,r,!0,e,l,o,i,s,a),e.context=ec(null),n=e.current,r=ie(),l=ut(n),o=We(r,l),o.callback=t??null,st(n,o,l),e.current.lanes=l,Zn(e,l,r),pe(e,r),e}function pl(e,t,n,r){var l=t.current,o=ie(),i=ut(l);return n=ec(n),t.context===null?t.context=n:t.pendingContext=n,t=We(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,i),e!==null&&(ze(e,l,i,o),Er(e,l,i)),i}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function As(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ji(e,t){As(e,t),(e=e.alternate)&&As(e,t)}function Df(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ti(e){this._internalRoot=e}ml.prototype.render=Ti.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));pl(e,t,null,null)};ml.prototype.unmount=Ti.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){pl(null,e,null,null)}),t[Ke]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=za();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&La(e)}};function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bs(){}function Pf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=el(i);o.call(c)}}var i=tc(t,r,e,0,null,!1,!1,"",Bs);return e._reactRootContainer=i,e[Ke]=i.current,An(e.nodeType===8?e.parentNode:e),jt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=el(a);s.call(c)}}var a=Pi(e,0,!1,null,null,!1,!1,"",Bs);return e._reactRootContainer=a,e[Ke]=a.current,An(e.nodeType===8?e.parentNode:e),jt(function(){pl(t,a,n,r)}),a}function gl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=el(i);s.call(a)}}pl(t,i,e,l)}else i=Pf(n,t,e,l,r);return el(i)}Ta=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(qo(t,n|1),pe(t,Q()),!(M&6)&&(ln=Q()+500,ht()))}break;case 13:jt(function(){var r=Xe(e,1);if(r!==null){var l=ie();ze(r,e,1,l)}}),ji(e,1)}};Jo=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ie();ze(t,e,134217728,n)}ji(e,134217728)}};Ma=function(e){if(e.tag===13){var t=ut(e),n=Xe(e,t);if(n!==null){var r=ie();ze(n,e,t,r)}ji(e,t)}};za=function(){return z};Oa=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};oo=function(e,t,n){switch(t){case"input":if(Jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(y(90));da(r),Jl(r,l)}}}break;case"textarea":pa(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};ka=Ni;Sa=jt;var jf={usingClientEntryPoint:!1,Events:[Jn,Rt,il,ya,wa,Ni]},yn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tf={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ea(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{nl=yr.inject(Tf),Ue=yr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mi(t))throw Error(y(200));return _f(e,t,null,n)};ye.createRoot=function(e,t){if(!Mi(e))throw Error(y(299));var n=!1,r="",l=nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Pi(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,An(e.nodeType===8?e.parentNode:e),new Ti(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ea(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return jt(e)};ye.hydrate=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Mi(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=nc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=tc(t,null,e,1,n??null,l,!1,o,i),e[Ke]=t.current,An(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};ye.render=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!hl(e))throw Error(y(40));return e._reactRootContainer?(jt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ye.unstable_batchedUpdates=Ni;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gl(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),ra.exports=ye;var Mf=ra.exports,lc,Vs=Mf;lc=Vs.createRoot,Vs.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),gt=(e,t)=>{const n=ke.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:a,...c},h)=>ke.createElement("svg",{ref:h,...zf,width:l,height:l,stroke:r,strokeWidth:i?Number(o)*24/Number(l):o,className:["lucide",`lucide-${Of(e)}`,s].join(" "),...c},[...t.map(([m,p])=>ke.createElement(m,p)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=gt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=gt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=gt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=gt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=gt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=gt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=gt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=gt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Qs=[{id:"dom-manipulation",title:"DOM Manipulation",category:"Basic Operations",difficulty:"Beginner",description:"Learn how to manipulate DOM elements without jQuery selectors",jqueryCode:`// jQuery approach
$('#myElement').text('Hello World');
$('.my-class').hide();
$('#container').append('<p>New paragraph</p>');

// Adding CSS classes
$('#myElement').addClass('active');
$('#myElement').removeClass('inactive');`,angularCode:`// Angular approach
// In component.ts
export class MyComponent {
  message = 'Hello World';
  isVisible = true;
  items = ['Item 1', 'Item 2'];
  
  addItem() {
    this.items.push('New Item');
  }
  
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}

// In template.html
<div id="myElement" [class.active]="isActive">
  {{ message }}
</div>
<div [hidden]="!isVisible">Content</div>
<div *ngFor="let item of items">{{ item }}</div>`,explanation:"Angular uses data binding instead of direct DOM manipulation. The framework automatically updates the DOM when component properties change.",tips:["Use property binding [property] for dynamic values","Use *ngFor for dynamic lists instead of append()","Leverage Angular's change detection instead of manual DOM updates"]},{id:"event-handling",title:"Event Handling",category:"User Interaction",difficulty:"Beginner",description:"Convert jQuery event handlers to Angular event binding",jqueryCode:`// jQuery approach
$('#submitBtn').on('click', function(e) {
  e.preventDefault();
  const value = $('#inputField').val();
  console.log('Submitted:', value);
});

$('.item').on('mouseover', function() {
  $(this).addClass('hovered');
});

// Event delegation
$(document).on('click', '.dynamic-btn', function() {
  // Handle dynamically added buttons
});`,angularCode:`// Angular approach
// In component.ts
export class MyComponent {
  inputValue = '';
  
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Submitted:', this.inputValue);
  }
  
  onMouseOver(item: any) {
    item.hovered = true;
  }
  
  onDynamicClick(event: Event) {
    // Handle click on dynamically rendered elements
  }
}

// In template.html
<form (submit)="onSubmit($event)">
  <input [(ngModel)]="inputValue" type="text">
  <button type="submit">Submit</button>
</form>

<div *ngFor="let item of items" 
     (mouseover)="onMouseOver(item)"
     [class.hovered]="item.hovered">
  {{ item.name }}
</div>`,explanation:"Angular uses event binding with parentheses syntax. Two-way data binding eliminates the need to manually get/set form values.",tips:['Use (event)="method()" syntax for event binding',"Two-way binding [(ngModel)] handles form inputs automatically","Event delegation is built-in with *ngFor and event binding"]},{id:"ajax-requests",title:"AJAX Requests",category:"HTTP Operations",difficulty:"Intermediate",description:"Replace jQuery AJAX with Angular HttpClient",jqueryCode:`// jQuery approach
$.ajax({
  url: '/api/users',
  method: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log('Users loaded:', data);
    displayUsers(data);
  },
  error: function(xhr, status, error) {
    console.error('Error:', error);
  }
});

// POST request
$.post('/api/users', {
  name: 'John Doe',
  email: 'john@example.com'
}).done(function(response) {
  console.log('User created:', response);
});`,angularCode:`// Angular approach
// In service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }
}

// In component.ts
export class UserComponent {
  users: User[] = [];
  
  constructor(private userService: UserService) {}
  
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
  
  createUser(userData: User) {
    this.userService.createUser(userData).subscribe({
      next: (response) => {
        console.log('User created:', response);
        this.loadUsers(); // Refresh list
      }
    });
  }
}`,explanation:"Angular uses HttpClient service with Observables for HTTP requests. This provides better error handling, interceptors, and type safety.",tips:["Import HttpClientModule in your app module","Create dedicated services for API calls","Use Observables for reactive programming patterns","Leverage TypeScript interfaces for type safety"]},{id:"animations",title:"Animations",category:"UI Effects",difficulty:"Advanced",description:"Convert jQuery animations to Angular Animations API",jqueryCode:`// jQuery approach
$('#fadeElement').fadeIn(500);
$('#slideElement').slideUp(300);

$('#animateElement').animate({
  opacity: 0.5,
  height: '200px',
  width: '200px'
}, 1000);

// Chain animations
$('#chainElement')
  .fadeOut(300)
  .slideDown(500)
  .fadeIn(400);`,angularCode:`// Angular approach
// Import animations module
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animated',
  template: \`
    <div [@fadeIn]="fadeState" class="fade-element">
      Fade content
    </div>
    <div [@slideAnimation]="slideState" class="slide-element">
      Slide content
    </div>
    <div [@complexAnimation]="animState" class="complex-element">
      Complex animation
    </div>
  \`,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideAnimation', [
      state('up', style({ height: '0px', overflow: 'hidden' })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate('300ms ease-in-out'))
    ]),
    trigger('complexAnimation', [
      state('initial', style({
        opacity: 1,
        height: '100px',
        width: '100px'
      })),
      state('final', style({
        opacity: 0.5,
        height: '200px',
        width: '200px'
      })),
      transition('initial => final', animate('1000ms ease-in-out'))
    ])
  ]
})
export class AnimatedComponent {
  fadeState = 'in';
  slideState = 'down';
  animState = 'initial';
  
  toggleSlide() {
    this.slideState = this.slideState === 'up' ? 'down' : 'up';
  }
  
  startComplexAnimation() {
    this.animState = this.animState === 'initial' ? 'final' : 'initial';
  }
}`,explanation:"Angular Animations API provides declarative, state-based animations with better performance and control than jQuery animations.",tips:["Import BrowserAnimationsModule in your app module","Use triggers and states for reusable animations","Leverage :enter and :leave pseudo-states","Combine multiple animations for complex effects"]},{id:"form-validation",title:"Form Validation",category:"Forms & Validation",difficulty:"Intermediate",description:"Replace jQuery form validation with Angular Reactive Forms",jqueryCode:`// jQuery approach
$('#myForm').on('submit', function(e) {
  e.preventDefault();
  
  // Clear previous errors
  $('.error').remove();
  
  let isValid = true;
  
  // Validate email
  const email = $('#email').val();
  if (!email || !isValidEmail(email)) {
    $('#email').after('<span class="error">Valid email required</span>');
    isValid = false;
  }
  
  // Validate password
  const password = $('#password').val();
  if (!password || password.length < 8) {
    $('#password').after('<span class="error">Password must be 8+ chars</span>');
    isValid = false;
  }
  
  if (isValid) {
    // Submit form
    submitForm({ email, password });
  }
});

function isValidEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}`,angularCode:`// Angular approach
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.submitForm(formData);
    } else {
      this.markFormGroupTouched();
    }
  }
  
  markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsTouched();
    });
  }
  
  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
    if (control?.errors && control.touched) {
      if (control.errors['required']) return \`\${field} is required\`;
      if (control.errors['email']) return 'Invalid email format';
      if (control.errors['minlength']) return \`\${field} must be at least 8 characters\`;
    }
    return '';
  }
}

// Template
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <div>
    <input formControlName="email" type="email" placeholder="Email">
    <span class="error">{{ getErrorMessage('email') }}</span>
  </div>
  <div>
    <input formControlName="password" type="password" placeholder="Password">
    <span class="error">{{ getErrorMessage('password') }}</span>
  </div>
  <button type="submit" [disabled]="loginForm.invalid">Submit</button>
</form>`,explanation:"Angular Reactive Forms provide built-in validation with better type safety and testability than jQuery validation.",tips:["Import ReactiveFormsModule in your module","Use built-in validators for common validation rules","Create custom validators for complex business logic","Leverage form state (valid, invalid, touched, dirty) for UI feedback"]},{id:"data-tables",title:"Dynamic Data Tables",category:"Data Display",difficulty:"Intermediate",description:"Convert jQuery DataTables to Angular data tables with sorting and filtering",jqueryCode:`// jQuery approach
$(document).ready(function() {
  // Initialize DataTable
  $('#dataTable').DataTable({
    ajax: '/api/users',
    columns: [
      { data: 'name' },
      { data: 'email' },
      { data: 'role' },
      { 
        data: null,
        render: function(data, type, row) {
          return '<button onclick="editUser(' + row.id + ')">Edit</button>' +
                 '<button onclick="deleteUser(' + row.id + ')">Delete</button>';
        }
      }
    ],
    order: [[0, 'asc']],
    pageLength: 10
  });
});

function editUser(id) {
  // Edit user logic
}

function deleteUser(id) {
  if (confirm('Delete user?')) {
    $.ajax({
      url: '/api/users/' + id,
      method: 'DELETE',
      success: function() {
        $('#dataTable').DataTable().ajax.reload();
      }
    });
  }
}`,angularCode:`// Angular approach
export class UserTableComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  sortColumn = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';
  searchTerm = '';
  currentPage = 1;
  pageSize = 10;
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.loadUsers();
  }
  
  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.applyFilters();
    });
  }
  
  applyFilters() {
    let filtered = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    
    // Sort
    filtered.sort((a, b) => {
      const aVal = a[this.sortColumn];
      const bVal = b[this.sortColumn];
      const result = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return this.sortDirection === 'asc' ? result : -result;
    });
    
    this.filteredUsers = filtered;
  }
  
  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applyFilters();
  }
  
  editUser(user: User) {
    // Navigate to edit form or open modal
  }
  
  deleteUser(user: User) {
    if (confirm('Delete user?')) {
      this.userService.deleteUser(user.id).subscribe(() => {
        this.loadUsers();
      });
    }
  }
  
  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }
}

// Template
<div>
  <input [(ngModel)]="searchTerm" (input)="applyFilters()" placeholder="Search...">
  
  <table>
    <thead>
      <tr>
        <th (click)="sort('name')" [class.sorted]="sortColumn === 'name'">
          Name <span [class]="sortDirection"></span>
        </th>
        <th (click)="sort('email')" [class.sorted]="sortColumn === 'email'">Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of paginatedUsers">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button (click)="editUser(user)">Edit</button>
          <button (click)="deleteUser(user)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,explanation:"Angular provides reactive data binding and built-in directives for creating dynamic tables without external libraries.",tips:["Use *ngFor for dynamic row rendering","Implement sorting and filtering with component methods","Consider Angular Material Table for advanced features","Use trackBy functions for better performance with large datasets"]},{id:"modal-dialogs",title:"Modal Dialogs",category:"UI Components",difficulty:"Intermediate",description:"Replace jQuery modal plugins with Angular modal components",jqueryCode:`// jQuery approach
// Initialize modal
$('#myModal').modal({
  backdrop: 'static',
  keyboard: false
});

// Show modal
$('#openModal').on('click', function() {
  $('#myModal').modal('show');
});

// Handle modal events
$('#myModal').on('shown.bs.modal', function() {
  $('#modalInput').focus();
});

$('#myModal').on('hidden.bs.modal', function() {
  $(this).find('form')[0].reset();
});

// Close modal
$('#saveBtn').on('click', function() {
  const data = $('#modalForm').serialize();
  
  $.post('/api/save', data)
    .done(function() {
      $('#myModal').modal('hide');
      showSuccess('Data saved!');
    })
    .fail(function() {
      showError('Save failed!');
    });
});`,angularCode:`// Angular approach
// modal.component.ts
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: \`
    <div class="modal-overlay" *ngIf="isOpen" (click)="onOverlayClick($event)">
      <div class="modal-content" #modalContent>
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <button (click)="close()" class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        <div class="modal-footer">
          <button (click)="close()" class="btn-cancel">Cancel</button>
          <button (click)="save()" class="btn-save" [disabled]="!canSave">Save</button>
        </div>
      </div>
    </div>
  \`
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() canSave = true;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<any>();
  @ViewChild('modalContent') modalContent!: ElementRef;
  
  ngAfterViewInit() {
    if (this.isOpen) {
      this.focusModal();
    }
  }
  
  ngOnChanges() {
    if (this.isOpen) {
      setTimeout(() => this.focusModal(), 0);
    }
  }
  
  focusModal() {
    const firstInput = this.modalContent.nativeElement.querySelector('input, textarea, select');
    if (firstInput) {
      firstInput.focus();
    }
  }
  
  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  
  close() {
    this.isOpen = false;
    this.closed.emit();
  }
  
  save() {
    this.saved.emit();
  }
}

// parent.component.ts
export class ParentComponent {
  isModalOpen = false;
  formData = { name: '', email: '' };
  
  openModal() {
    this.isModalOpen = true;
  }
  
  onModalClosed() {
    this.isModalOpen = false;
    this.resetForm();
  }
  
  onModalSaved() {
    this.dataService.save(this.formData).subscribe({
      next: () => {
        this.isModalOpen = false;
        this.showSuccess('Data saved!');
        this.resetForm();
      },
      error: () => {
        this.showError('Save failed!');
      }
    });
  }
  
  resetForm() {
    this.formData = { name: '', email: '' };
  }
}

// Template usage
<button (click)="openModal()">Open Modal</button>

<app-modal 
  [isOpen]="isModalOpen"
  title="Edit User"
  [canSave]="formData.name && formData.email"
  (closed)="onModalClosed()"
  (saved)="onModalSaved()">
  
  <form>
    <input [(ngModel)]="formData.name" placeholder="Name" required>
    <input [(ngModel)]="formData.email" placeholder="Email" type="email" required>
  </form>
</app-modal>`,explanation:"Angular modals are built as reusable components with proper lifecycle management and data binding instead of DOM manipulation.",tips:["Create reusable modal components with @Input and @Output","Use ViewChild to access modal elements for focus management","Implement proper keyboard navigation and accessibility","Consider using Angular CDK Overlay for advanced modal features"]},{id:"autocomplete-typeahead",title:"Autocomplete/Typeahead",category:"User Interaction",difficulty:"Advanced",description:"Convert jQuery autocomplete to Angular with reactive search",jqueryCode:`// jQuery approach
$('#searchInput').autocomplete({
  source: function(request, response) {
    $.ajax({
      url: '/api/search',
      data: { term: request.term },
      success: function(data) {
        response(data.map(item => ({
          label: item.name,
          value: item.id
        })));
      }
    });
  },
  minLength: 2,
  delay: 300,
  select: function(event, ui) {
    console.log('Selected:', ui.item);
    $('#selectedValue').text(ui.item.label);
  }
});

// Custom styling and events
$('#searchInput').on('autocompleteopen', function() {
  $('.ui-autocomplete').css('z-index', 9999);
});`,angularCode:`// Angular approach
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export class AutocompleteComponent implements OnInit {
  searchControl = new FormControl();
  filteredOptions: Observable<any[]>;
  selectedItem: any = null;
  isLoading = false;
  
  constructor(private searchService: SearchService) {}
  
  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => {
        if (typeof value === 'string' && value.length >= 2) {
          this.isLoading = true;
          return this.searchService.search(value).pipe(
            finalize(() => this.isLoading = false)
          );
        }
        return of([]);
      })
    );
  }
  
  displayFn(item: any): string {
    return item ? item.name : '';
  }
  
  onSelectionChange(event: any) {
    this.selectedItem = event.option.value;
    console.log('Selected:', this.selectedItem);
  }
  
  onInputFocus() {
    // Handle focus events
  }
  
  onInputBlur() {
    // Handle blur events
  }
}

// search.service.ts
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}
  
  search(term: string): Observable<any[]> {
    return this.http.get<any[]>('/api/search', {
      params: { term }
    });
  }
}

// Template
<div class="autocomplete-container">
  <mat-form-field>
    <input 
      matInput
      [formControl]="searchControl"
      [matAutocomplete]="auto"
      placeholder="Search..."
      (focus)="onInputFocus()"
      (blur)="onInputBlur()">
    
    <mat-spinner *ngIf="isLoading" matSuffix diameter="20"></mat-spinner>
  </mat-form-field>
  
  <mat-autocomplete 
    #auto="matAutocomplete"
    [displayWith]="displayFn"
    (selectionChange)="onSelectionChange($event)">
    
    <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
      <div class="option-content">
        <strong>{{ option.name }}</strong>
        <small>{{ option.description }}</small>
      </div>
    </mat-option>
  </mat-autocomplete>
  
  <div *ngIf="selectedItem" class="selected-item">
    Selected: {{ selectedItem.name }}
  </div>
</div>

// Custom implementation without Material
<div class="custom-autocomplete">
  <input 
    [formControl]="searchControl"
    placeholder="Search..."
    (focus)="showDropdown = true">
  
  <div class="dropdown" *ngIf="showDropdown && (filteredOptions | async)?.length">
    <div 
      *ngFor="let option of filteredOptions | async; trackBy: trackByFn"
      class="dropdown-item"
      (click)="selectOption(option)">
      {{ option.name }}
    </div>
  </div>
</div>`,explanation:"Angular autocomplete uses reactive forms with RxJS operators for debouncing and API calls, providing better performance and user experience.",tips:["Use debounceTime to limit API calls","Implement distinctUntilChanged to avoid duplicate requests","Use switchMap to cancel previous requests","Consider Angular Material Autocomplete for ready-to-use component"]},{id:"drag-drop",title:"Drag and Drop",category:"User Interaction",difficulty:"Advanced",description:"Convert jQuery UI draggable/droppable to Angular CDK Drag Drop",jqueryCode:`// jQuery approach
$(function() {
  // Make items draggable
  $('.draggable-item').draggable({
    helper: 'clone',
    revert: 'invalid',
    start: function(event, ui) {
      $(this).addClass('dragging');
    },
    stop: function(event, ui) {
      $(this).removeClass('dragging');
    }
  });
  
  // Make containers droppable
  $('.drop-zone').droppable({
    accept: '.draggable-item',
    hoverClass: 'drop-hover',
    drop: function(event, ui) {
      const draggedItem = ui.draggable;
      const dropZone = $(this);
      
      // Move item to new container
      draggedItem.appendTo(dropZone);
      
      // Update data
      updateItemPosition(draggedItem.data('id'), dropZone.data('zone-id'));
    }
  });
  
  // Sortable lists
  $('.sortable-list').sortable({
    connectWith: '.sortable-list',
    placeholder: 'sort-placeholder',
    update: function(event, ui) {
      const newOrder = $(this).sortable('toArray', { attribute: 'data-id' });
      updateListOrder(newOrder);
    }
  });
});`,angularCode:`// Angular approach
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export class DragDropComponent {
  todoItems = [
    { id: 1, text: 'Task 1', status: 'todo' },
    { id: 2, text: 'Task 2', status: 'todo' }
  ];
  
  inProgressItems = [
    { id: 3, text: 'Task 3', status: 'in-progress' }
  ];
  
  doneItems = [
    { id: 4, text: 'Task 4', status: 'done' }
  ];
  
  // Handle drop events
  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      // Reorder within same container
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Move between containers
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      
      // Update item status
      const item = event.container.data[event.currentIndex];
      item.status = this.getStatusFromContainer(event.container.id);
      
      // Save to backend
      this.updateItemStatus(item);
    }
  }
  
  getStatusFromContainer(containerId: string): string {
    switch (containerId) {
      case 'todo-list': return 'todo';
      case 'progress-list': return 'in-progress';
      case 'done-list': return 'done';
      default: return 'todo';
    }
  }
  
  updateItemStatus(item: any) {
    this.taskService.updateTask(item).subscribe();
  }
  
  // Custom drag predicate
  dragPredicate(item: CdkDrag<any>): boolean {
    return !item.data.locked;
  }
  
  // Track items for performance
  trackByFn(index: number, item: any): any {
    return item.id;
  }
}

// Template
<div class="kanban-board">
  <div class="column">
    <h3>To Do</h3>
    <div 
      cdkDropList
      id="todo-list"
      [cdkDropListData]="todoItems"
      [cdkDropListConnectedTo]="['progress-list', 'done-list']"
      (cdkDropListDropped)="onDrop($event)"
      class="drop-zone">
      
      <div 
        *ngFor="let item of todoItems; trackBy: trackByFn"
        cdkDrag
        [cdkDragData]="item"
        [cdkDragDisabled]="item.locked"
        class="drag-item">
        
        <div class="drag-handle" cdkDragHandle>⋮⋮</div>
        <div class="item-content">{{ item.text }}</div>
        
        <!-- Custom drag preview -->
        <div *cdkDragPreview class="drag-preview">
          {{ item.text }}
        </div>
        
        <!-- Placeholder while dragging -->
        <div *cdkDragPlaceholder class="drag-placeholder"></div>
      </div>
    </div>
  </div>
  
  <div class="column">
    <h3>In Progress</h3>
    <div 
      cdkDropList
      id="progress-list"
      [cdkDropListData]="inProgressItems"
      [cdkDropListConnectedTo]="['todo-list', 'done-list']"
      (cdkDropListDropped)="onDrop($event)"
      class="drop-zone">
      
      <div 
        *ngFor="let item of inProgressItems; trackBy: trackByFn"
        cdkDrag
        [cdkDragData]="item"
        class="drag-item">
        <div class="drag-handle" cdkDragHandle>⋮⋮</div>
        <div class="item-content">{{ item.text }}</div>
      </div>
    </div>
  </div>
  
  <div class="column">
    <h3>Done</h3>
    <div 
      cdkDropList
      id="done-list"
      [cdkDropListData]="doneItems"
      [cdkDropListConnectedTo]="['todo-list', 'progress-list']"
      (cdkDropListDropped)="onDrop($event)"
      class="drop-zone">
      
      <div 
        *ngFor="let item of doneItems; trackBy: trackByFn"
        cdkDrag
        [cdkDragData]="item"
        class="drag-item">
        <div class="drag-handle" cdkDragHandle>⋮⋮</div>
        <div class="item-content">{{ item.text }}</div>
      </div>
    </div>
  </div>
</div>`,explanation:"Angular CDK Drag Drop provides a complete drag and drop solution with better accessibility, touch support, and integration with Angular's change detection.",tips:["Import DragDropModule from @angular/cdk/drag-drop","Use cdkDropListConnectedTo for cross-container drops","Implement trackBy functions for better performance","Customize drag previews and placeholders for better UX"]},{id:"infinite-scroll",title:"Infinite Scroll",category:"Performance",difficulty:"Advanced",description:"Replace jQuery infinite scroll with Angular CDK Virtual Scrolling",jqueryCode:`// jQuery approach
let page = 1;
let loading = false;
let hasMore = true;

$(window).on('scroll', function() {
  if (loading || !hasMore) return;
  
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const documentHeight = $(document).height();
  
  // Load more when near bottom
  if (scrollTop + windowHeight >= documentHeight - 100) {
    loadMoreItems();
  }
});

function loadMoreItems() {
  loading = true;
  $('#loading').show();
  
  $.ajax({
    url: '/api/items',
    data: { page: page, limit: 20 },
    success: function(response) {
      if (response.items.length === 0) {
        hasMore = false;
        $('#no-more').show();
      } else {
        response.items.forEach(function(item) {
          $('#items-container').append(
            '<div class="item">' + item.title + '</div>'
          );
        });
        page++;
      }
    },
    complete: function() {
      loading = false;
      $('#loading').hide();
    }
  });
}

// Initial load
loadMoreItems();`,angularCode:`// Angular approach with Virtual Scrolling
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { scan, switchMap, tap } from 'rxjs/operators';

export class InfiniteScrollComponent implements OnInit {
  items$: Observable<any[]>;
  loading$ = new BehaviorSubject(false);
  page$ = new BehaviorSubject(1);
  hasMore = true;
  
  // Virtual scrolling properties
  itemSize = 50;
  
  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    // Set up infinite scroll stream
    this.items$ = this.page$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap(page => 
        this.dataService.getItems(page, 20).pipe(
          tap(response => {
            this.hasMore = response.items.length === 20;
            this.loading$.next(false);
          })
        )
      ),
      scan((acc, response) => {
        return page === 1 ? response.items : [...acc, ...response.items];
      }, [])
    );
  }
  
  loadMore() {
    if (!this.loading$.value && this.hasMore) {
      this.page$.next(this.page$.value + 1);
    }
  }
  
  trackByFn(index: number, item: any): any {
    return item.id;
  }
  
  refresh() {
    this.page$.next(1);
    this.hasMore = true;
  }
}

// Alternative: Intersection Observer approach
export class IntersectionScrollComponent implements OnInit, OnDestroy {
  @ViewChild('loadTrigger', { static: false }) loadTrigger!: ElementRef;
  
  items: any[] = [];
  loading = false;
  page = 1;
  hasMore = true;
  
  private observer!: IntersectionObserver;
  
  ngOnInit() {
    this.loadItems();
  }
  
  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }
  
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  
  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.loading && this.hasMore) {
          this.loadItems();
        }
      },
      { threshold: 0.1 }
    );
    
    this.observer.observe(this.loadTrigger.nativeElement);
  }
  
  loadItems() {
    this.loading = true;
    
    this.dataService.getItems(this.page, 20).subscribe({
      next: (response) => {
        if (response.items.length === 0) {
          this.hasMore = false;
        } else {
          this.items = [...this.items, ...response.items];
          this.page++;
        }
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}

// Template with Virtual Scrolling
<div class="infinite-scroll-container">
  <cdk-virtual-scroll-viewport 
    [itemSize]="itemSize" 
    class="viewport">
    
    <div 
      *cdkVirtualFor="let item of items$ | async; trackBy: trackByFn"
      class="scroll-item">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </cdk-virtual-scroll-viewport>
  
  <div *ngIf="loading$ | async" class="loading">
    Loading more items...
  </div>
  
  <div *ngIf="!hasMore" class="no-more">
    No more items to load
  </div>
</div>

// Template with Intersection Observer
<div class="scroll-container">
  <div *ngFor="let item of items; trackBy: trackByFn" class="item">
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
  
  <div #loadTrigger class="load-trigger">
    <div *ngIf="loading" class="loading">Loading...</div>
    <div *ngIf="!hasMore" class="no-more">No more items</div>
  </div>
</div>`,explanation:"Angular provides multiple approaches for infinite scroll: CDK Virtual Scrolling for performance with large lists, and Intersection Observer API for traditional infinite scroll.",tips:["Use CDK Virtual Scrolling for large datasets to improve performance","Implement Intersection Observer for better scroll detection","Use RxJS operators like scan to accumulate paginated results","Always implement proper loading states and error handling"]},{id:"file-upload",title:"File Upload with Progress",category:"File Operations",difficulty:"Intermediate",description:"Convert jQuery file upload with progress to Angular HttpClient",jqueryCode:`// jQuery approach
$('#fileInput').on('change', function(e) {
  const files = e.target.files;
  
  for (let i = 0; i < files.length; i++) {
    uploadFile(files[i]);
  }
});

function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  const progressBar = createProgressBar(file.name);
  
  $.ajax({
    url: '/api/upload',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    xhr: function() {
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', function(e) {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          updateProgressBar(progressBar, percentComplete);
        }
      });
      
      return xhr;
    },
    success: function(response) {
      showSuccess('File uploaded: ' + file.name);
      removeProgressBar(progressBar);
    },
    error: function() {
      showError('Upload failed: ' + file.name);
      removeProgressBar(progressBar);
    }
  });
}

// Drag and drop
$('#dropZone').on('dragover', function(e) {
  e.preventDefault();
  $(this).addClass('drag-over');
});

$('#dropZone').on('drop', function(e) {
  e.preventDefault();
  $(this).removeClass('drag-over');
  
  const files = e.originalEvent.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    uploadFile(files[i]);
  }
});`,angularCode:`// Angular approach
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface UploadProgress {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  response?: any;
}

@Component({
  selector: 'app-file-upload',
  template: \`
    <div class="upload-container">
      <!-- File Input -->
      <div class="file-input-wrapper">
        <input 
          #fileInput
          type="file" 
          multiple 
          (change)="onFilesSelected($event)"
          accept="image/*,.pdf,.doc,.docx"
          class="file-input">
        <button (click)="fileInput.click()" class="upload-btn">
          Choose Files
        </button>
      </div>
      
      <!-- Drag and Drop Zone -->
      <div 
        class="drop-zone"
        [class.drag-over]="isDragOver"
        (dragover)="onDragOver($event)"
        (dragleave)="onDragLeave($event)"
        (drop)="onDrop($event)">
        <p>Drag and drop files here or click to select</p>
      </div>
      
      <!-- Upload Progress -->
      <div class="upload-progress" *ngIf="uploads.length > 0">
        <div 
          *ngFor="let upload of uploads; trackBy: trackByFile"
          class="upload-item">
          
          <div class="file-info">
            <span class="file-name">{{ upload.file.name }}</span>
            <span class="file-size">{{ formatFileSize(upload.file.size) }}</span>
          </div>
          
          <div class="progress-container">
            <div class="progress-bar">
              <div 
                class="progress-fill"
                [style.width.%]="upload.progress"
                [class]="upload.status">
              </div>
            </div>
            <span class="progress-text">{{ upload.progress }}%</span>
          </div>
          
          <div class="upload-status">
            <span *ngIf="upload.status === 'uploading'">Uploading...</span>
            <span *ngIf="upload.status === 'completed'" class="success">✓ Complete</span>
            <span *ngIf="upload.status === 'error'" class="error">✗ Failed</span>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class FileUploadComponent {
  uploads: UploadProgress[] = [];
  isDragOver = false;
  
  constructor(private http: HttpClient) {}
  
  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(Array.from(input.files));
    }
  }
  
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }
  
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }
  
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    
    if (event.dataTransfer?.files) {
      this.handleFiles(Array.from(event.dataTransfer.files));
    }
  }
  
  handleFiles(files: File[]) {
    files.forEach(file => {
      if (this.validateFile(file)) {
        this.uploadFile(file);
      }
    });
  }
  
  validateFile(file: File): boolean {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/', 'application/pdf', 'application/msword'];
    
    if (file.size > maxSize) {
      alert(\`File \${file.name} is too large. Maximum size is 10MB.\`);
      return false;
    }
    
    if (!allowedTypes.some(type => file.type.startsWith(type))) {
      alert(\`File \${file.name} is not a supported format.\`);
      return false;
    }
    
    return true;
  }
  
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
    const uploadProgress: UploadProgress = {
      file,
      progress: 0,
      status: 'uploading'
    };
    
    this.uploads.push(uploadProgress);
    
    const request = new HttpRequest('POST', '/api/upload', formData, {
      reportProgress: true
    });
    
    this.http.request(request).subscribe({
      next: (event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            if (event.total) {
              uploadProgress.progress = Math.round(100 * event.loaded / event.total);
            }
            break;
          case HttpEventType.Response:
            uploadProgress.status = 'completed';
            uploadProgress.response = event.body;
            break;
        }
      },
      error: (error) => {
        uploadProgress.status = 'error';
        console.error('Upload error:', error);
      }
    });
  }
  
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  trackByFile(index: number, upload: UploadProgress): string {
    return upload.file.name + upload.file.size;
  }
  
  clearCompleted() {
    this.uploads = this.uploads.filter(upload => upload.status !== 'completed');
  }
  
  retryFailed() {
    this.uploads
      .filter(upload => upload.status === 'error')
      .forEach(upload => {
        upload.status = 'uploading';
        upload.progress = 0;
        this.uploadFile(upload.file);
      });
  }
}

// upload.service.ts
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) {}
  
  uploadMultipleFiles(files: File[]): Observable<any> {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });
    
    return this.http.post('/api/upload-multiple', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  
  uploadWithMetadata(file: File, metadata: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('metadata', JSON.stringify(metadata));
    
    return this.http.post('/api/upload-with-metadata', formData);
  }
}`,explanation:"Angular HttpClient provides built-in support for upload progress tracking and better error handling compared to jQuery AJAX.",tips:["Use HttpRequest with reportProgress: true for progress tracking","Implement proper file validation before upload","Handle drag and drop events for better UX","Use FormData for multipart file uploads"]},{id:"real-time-updates",title:"Real-time Updates (WebSockets)",category:"Real-time Communication",difficulty:"Advanced",description:"Replace jQuery WebSocket handling with Angular WebSocket service",jqueryCode:`// jQuery approach
let socket;
let reconnectAttempts = 0;
const maxReconnectAttempts = 5;

function connectWebSocket() {
  socket = new WebSocket('ws://localhost:8080/ws');
  
  socket.onopen = function(event) {
    console.log('Connected to WebSocket');
    reconnectAttempts = 0;
    $('#connection-status').text('Connected').removeClass('disconnected');
    
    // Send authentication
    socket.send(JSON.stringify({
      type: 'auth',
      token: localStorage.getItem('authToken')
    }));
  };
  
  socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    handleMessage(data);
  };
  
  socket.onclose = function(event) {
    console.log('WebSocket connection closed');
    $('#connection-status').text('Disconnected').addClass('disconnected');
    
    // Attempt to reconnect
    if (reconnectAttempts < maxReconnectAttempts) {
      setTimeout(() => {
        reconnectAttempts++;
        connectWebSocket();
      }, 1000 * Math.pow(2, reconnectAttempts));
    }
  };
  
  socket.onerror = function(error) {
    console.error('WebSocket error:', error);
  };
}

function handleMessage(data) {
  switch (data.type) {
    case 'notification':
      showNotification(data.message);
      break;
    case 'user_update':
      updateUserList(data.users);
      break;
    case 'chat_message':
      addChatMessage(data);
      break;
  }
}

function sendMessage(type, payload) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type, ...payload }));
  }
}

// Send chat message
$('#chatForm').on('submit', function(e) {
  e.preventDefault();
  const message = $('#messageInput').val();
  
  sendMessage('chat_message', {
    message: message,
    timestamp: Date.now()
  });
  
  $('#messageInput').val('');
});

// Initialize connection
connectWebSocket();`,angularCode:`// Angular approach
// websocket.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, timer } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { retry, retryWhen, delay, take } from 'rxjs/operators';

export interface WebSocketMessage {
  type: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;
  private messagesSubject$ = new Subject<WebSocketMessage>();
  private connectionStatus$ = new BehaviorSubject<boolean>(false);
  
  public messages$ = this.messagesSubject$.asObservable();
  public connectionStatus = this.connectionStatus$.asObservable();
  
  constructor() {
    this.connect();
  }
  
  private connect(): void {
    this.socket$ = webSocket({
      url: 'ws://localhost:8080/ws',
      openObserver: {
        next: () => {
          console.log('WebSocket connected');
          this.connectionStatus$.next(true);
          this.authenticate();
        }
      },
      closeObserver: {
        next: () => {
          console.log('WebSocket disconnected');
          this.connectionStatus$.next(false);
        }
      }
    });
    
    // Handle incoming messages
    this.socket$.pipe(
      retryWhen(errors =>
        errors.pipe(
          delay(1000),
          take(5)
        )
      )
    ).subscribe({
      next: (message) => this.messagesSubject$.next(message),
      error: (error) => console.error('WebSocket error:', error)
    });
  }
  
  private authenticate(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.sendMessage({
        type: 'auth',
        token: token
      });
    }
  }
  
  public sendMessage(message: WebSocketMessage): void {
    if (this.socket$) {
      this.socket$.next(message);
    }
  }
  
  public disconnect(): void {
    if (this.socket$) {
      this.socket$.complete();
      this.connectionStatus$.next(false);
    }
  }
  
  public reconnect(): void {
    this.disconnect();
    this.connect();
  }
}

// chat.component.ts
export class ChatComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  users: any[] = [];
  newMessage = '';
  isConnected$ = this.wsService.connectionStatus;
  
  private destroy$ = new Subject<void>();
  
  constructor(private wsService: WebSocketService) {}
  
  ngOnInit() {
    // Subscribe to WebSocket messages
    this.wsService.messages$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(message => {
      this.handleMessage(message);
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  private handleMessage(message: WebSocketMessage) {
    switch (message.type) {
      case 'notification':
        this.showNotification(message.message);
        break;
      case 'user_update':
        this.users = message.users;
        break;
      case 'chat_message':
        this.messages.push(message);
        this.scrollToBottom();
        break;
      case 'user_joined':
        this.showNotification(\`\${message.username} joined the chat\`);
        break;
      case 'user_left':
        this.showNotification(\`\${message.username} left the chat\`);
        break;
    }
  }
  
  sendMessage() {
    if (this.newMessage.trim()) {
      this.wsService.sendMessage({
        type: 'chat_message',
        message: this.newMessage,
        timestamp: Date.now()
      });
      this.newMessage = '';
    }
  }
  
  private scrollToBottom() {
    setTimeout(() => {
      const chatContainer = document.getElementById('chat-messages');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 0);
  }
  
  private showNotification(message: string) {
    // Show toast notification or update UI
    console.log('Notification:', message);
  }
  
  reconnect() {
    this.wsService.reconnect();
  }
}

// Template
<div class="chat-container">
  <div class="connection-status">
    <span [class]="(isConnected$ | async) ? 'connected' : 'disconnected'">
      {{ (isConnected$ | async) ? 'Connected' : 'Disconnected' }}
    </span>
    <button *ngIf="!(isConnected$ | async)" (click)="reconnect()">
      Reconnect
    </button>
  </div>
  
  <div class="chat-users">
    <h4>Online Users ({{ users.length }})</h4>
    <ul>
      <li *ngFor="let user of users">{{ user.username }}</li>
    </ul>
  </div>
  
  <div id="chat-messages" class="chat-messages">
    <div 
      *ngFor="let message of messages; trackBy: trackByMessage"
      class="message">
      <span class="username">{{ message.username }}:</span>
      <span class="text">{{ message.message }}</span>
      <span class="timestamp">{{ message.timestamp | date:'short' }}</span>
    </div>
  </div>
  
  <form (ngSubmit)="sendMessage()" class="message-form">
    <input 
      [(ngModel)]="newMessage"
      placeholder="Type a message..."
      [disabled]="!(isConnected$ | async)"
      class="message-input">
    <button 
      type="submit" 
      [disabled]="!newMessage.trim() || !(isConnected$ | async)"
      class="send-button">
      Send
    </button>
  </form>
</div>`,explanation:"Angular WebSocket service using RxJS provides better error handling, automatic reconnection, and reactive programming patterns for real-time updates.",tips:["Use RxJS WebSocketSubject for reactive WebSocket handling","Implement proper error handling and reconnection logic","Use takeUntil pattern to prevent memory leaks","Consider using Socket.IO for more advanced real-time features"]}];function Bf(){const[e,t]=ke.useState(null),[n,r]=ke.useState(""),[l,o]=ke.useState("All"),[i,s]=ke.useState(!1),[a,c]=ke.useState(!1),h=["All",...Array.from(new Set(Qs.map(g=>g.category)))],m=Qs.filter(g=>{const w=g.title.toLowerCase().includes(n.toLowerCase())||g.description.toLowerCase().includes(n.toLowerCase()),S=l==="All"||g.category===l;return w&&S});ke.useEffect(()=>{a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[a]);const p=g=>{switch(g){case"Beginner":return"text-green-600 bg-green-100";case"Intermediate":return"text-yellow-600 bg-yellow-100";case"Advanced":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}};return k.jsxs("div",{className:`min-h-screen transition-colors duration-300 ${a?"dark bg-gray-900":"bg-gray-50"}`,children:[k.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:k.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:k.jsxs("div",{className:"flex justify-between items-center h-16",children:[k.jsxs("div",{className:"flex items-center",children:[k.jsx(Lf,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"}),k.jsx("h1",{className:"ml-3 text-xl font-bold text-gray-900 dark:text-white",children:"jQuery → Angular Migration Guide"})]}),k.jsx("div",{className:"hidden md:flex items-center space-x-4",children:k.jsx("button",{onClick:()=>c(!a),className:"p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700",children:a?k.jsx(Rf,{className:"h-5 w-5"}):k.jsx($f,{className:"h-5 w-5"})})}),k.jsx("button",{onClick:()=>s(!i),className:"md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700",children:i?k.jsx(Af,{className:"h-6 w-6"}):k.jsx(Ff,{className:"h-6 w-6"})})]})})}),k.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e?k.jsxs("div",{children:[k.jsxs("button",{onClick:()=>t(null),className:"mb-6 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors",children:[k.jsx(Hs,{className:"h-4 w-4 mr-2 rotate-180"}),"Back to Recipes"]}),k.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700",children:[k.jsxs("div",{className:"mb-6",children:[k.jsxs("div",{className:"flex items-center justify-between mb-4",children:[k.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:e.title}),k.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${p(e.difficulty)} dark:bg-opacity-20`,children:e.difficulty})]}),k.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mb-2",children:e.description}),k.jsxs("p",{className:"text-sm text-blue-600 dark:text-blue-400 font-medium",children:["Category: ",e.category]})]}),k.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 mb-8",children:[k.jsxs("div",{children:[k.jsxs("h3",{className:"text-lg font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center",children:[k.jsx("span",{className:"bg-red-100 dark:bg-red-900 dark:bg-opacity-30 px-2 py-1 rounded text-sm mr-2",children:"Before"}),"jQuery Approach"]}),k.jsx("div",{className:"bg-gray-900 rounded-lg p-4 overflow-x-auto",children:k.jsx("pre",{className:"text-sm text-gray-100",children:k.jsx("code",{children:e.jqueryCode})})})]}),k.jsxs("div",{children:[k.jsxs("h3",{className:"text-lg font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center",children:[k.jsx("span",{className:"bg-green-100 dark:bg-green-900 dark:bg-opacity-30 px-2 py-1 rounded text-sm mr-2",children:"After"}),"Angular Approach"]}),k.jsx("div",{className:"bg-gray-900 rounded-lg p-4 overflow-x-auto",children:k.jsx("pre",{className:"text-sm text-gray-100",children:k.jsx("code",{children:e.angularCode})})})]})]}),k.jsxs("div",{className:"mb-6",children:[k.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-3",children:"Explanation"}),k.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:e.explanation})]}),k.jsxs("div",{children:[k.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-3",children:"Pro Tips"}),k.jsx("ul",{className:"space-y-2",children:e.tips.map((g,w)=>k.jsxs("li",{className:"flex items-start",children:[k.jsx(Ws,{className:"h-4 w-4 text-yellow-500 mt-1 mr-2 flex-shrink-0"}),k.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:g})]},w))})]})]})]}):k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"text-center mb-12",children:[k.jsx("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:"Master the Migration"}),k.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Transform your jQuery skills into Angular expertise with practical recipes, real-world examples, and step-by-step guidance for modern web development."})]}),k.jsxs("div",{className:"mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between",children:[k.jsxs("div",{className:"relative max-w-md",children:[k.jsx(Uf,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),k.jsx("input",{type:"text",placeholder:"Search recipes...",value:n,onChange:g=>r(g.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"})]}),k.jsx("div",{className:"flex flex-wrap gap-2",children:h.map(g=>k.jsx("button",{onClick:()=>o(g),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors ${l===g?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`,children:g},g))})]}),k.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:m.map(g=>k.jsx("div",{onClick:()=>t(g),className:"bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700",children:k.jsxs("div",{className:"p-6",children:[k.jsxs("div",{className:"flex items-center justify-between mb-3",children:[k.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${p(g.difficulty)} dark:bg-opacity-20`,children:g.difficulty}),k.jsx(Ws,{className:"h-5 w-5 text-yellow-500"})]}),k.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:g.title}),k.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm mb-4",children:g.description}),k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx("span",{className:"text-sm text-blue-600 dark:text-blue-400 font-medium",children:g.category}),k.jsx(Hs,{className:"h-4 w-4 text-gray-400"})]})]})},g.id))})]})})]})}lc(document.getElementById("root")).render(k.jsx(ke.StrictMode,{children:k.jsx(Bf,{})}));
