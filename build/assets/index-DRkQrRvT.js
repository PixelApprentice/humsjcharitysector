(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Ed={exports:{}},Fa={},Td={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function OE(){if(Cg)return Ae;Cg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),x=Symbol.iterator;function k(j){return j===null||typeof j!="object"?null:(j=x&&j[x]||j["@@iterator"],typeof j=="function"?j:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,Q={};function B(j,W,Te){this.props=j,this.context=W,this.refs=Q,this.updater=Te||z}B.prototype.isReactComponent={},B.prototype.setState=function(j,W){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,W,"setState")},B.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function he(){}he.prototype=B.prototype;function ye(j,W,Te){this.props=j,this.context=W,this.refs=Q,this.updater=Te||z}var de=ye.prototype=new he;de.constructor=ye,$(de,B.prototype),de.isPureReactComponent=!0;var J=Array.isArray,De=Object.prototype.hasOwnProperty,Ie={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function A(j,W,Te){var xe,ke={},Ne=null,Fe=null;if(W!=null)for(xe in W.ref!==void 0&&(Fe=W.ref),W.key!==void 0&&(Ne=""+W.key),W)De.call(W,xe)&&!b.hasOwnProperty(xe)&&(ke[xe]=W[xe]);var Me=arguments.length-2;if(Me===1)ke.children=Te;else if(1<Me){for(var qe=Array(Me),Ht=0;Ht<Me;Ht++)qe[Ht]=arguments[Ht+2];ke.children=qe}if(j&&j.defaultProps)for(xe in Me=j.defaultProps,Me)ke[xe]===void 0&&(ke[xe]=Me[xe]);return{$$typeof:r,type:j,key:Ne,ref:Fe,props:ke,_owner:Ie.current}}function N(j,W){return{$$typeof:r,type:j.type,key:W,ref:j.ref,props:j.props,_owner:j._owner}}function D(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function C(j){var W={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Te){return W[Te]})}var M=/\/+/g;function S(j,W){return typeof j=="object"&&j!==null&&j.key!=null?C(""+j.key):W.toString(36)}function We(j,W,Te,xe,ke){var Ne=typeof j;(Ne==="undefined"||Ne==="boolean")&&(j=null);var Fe=!1;if(j===null)Fe=!0;else switch(Ne){case"string":case"number":Fe=!0;break;case"object":switch(j.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=j,ke=ke(Fe),j=xe===""?"."+S(Fe,0):xe,J(ke)?(Te="",j!=null&&(Te=j.replace(M,"$&/")+"/"),We(ke,W,Te,"",function(Ht){return Ht})):ke!=null&&(D(ke)&&(ke=N(ke,Te+(!ke.key||Fe&&Fe.key===ke.key?"":(""+ke.key).replace(M,"$&/")+"/")+j)),W.push(ke)),1;if(Fe=0,xe=xe===""?".":xe+":",J(j))for(var Me=0;Me<j.length;Me++){Ne=j[Me];var qe=xe+S(Ne,Me);Fe+=We(Ne,W,Te,qe,ke)}else if(qe=k(j),typeof qe=="function")for(j=qe.call(j),Me=0;!(Ne=j.next()).done;)Ne=Ne.value,qe=xe+S(Ne,Me++),Fe+=We(Ne,W,Te,qe,ke);else if(Ne==="object")throw W=String(j),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Fe}function Et(j,W,Te){if(j==null)return j;var xe=[],ke=0;return We(j,xe,"","",function(Ne){return W.call(Te,Ne,ke++)}),xe}function Dt(j){if(j._status===-1){var W=j._result;W=W(),W.then(function(Te){(j._status===0||j._status===-1)&&(j._status=1,j._result=Te)},function(Te){(j._status===0||j._status===-1)&&(j._status=2,j._result=Te)}),j._status===-1&&(j._status=0,j._result=W)}if(j._status===1)return j._result.default;throw j._result}var Xe={current:null},ee={transition:null},ce={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ie};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Et,forEach:function(j,W,Te){Et(j,function(){W.apply(this,arguments)},Te)},count:function(j){var W=0;return Et(j,function(){W++}),W},toArray:function(j){return Et(j,function(W){return W})||[]},only:function(j){if(!D(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Ae.Component=B,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ye,Ae.StrictMode=i,Ae.Suspense=y,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ae.act=ie,Ae.cloneElement=function(j,W,Te){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var xe=$({},j.props),ke=j.key,Ne=j.ref,Fe=j._owner;if(W!=null){if(W.ref!==void 0&&(Ne=W.ref,Fe=Ie.current),W.key!==void 0&&(ke=""+W.key),j.type&&j.type.defaultProps)var Me=j.type.defaultProps;for(qe in W)De.call(W,qe)&&!b.hasOwnProperty(qe)&&(xe[qe]=W[qe]===void 0&&Me!==void 0?Me[qe]:W[qe])}var qe=arguments.length-2;if(qe===1)xe.children=Te;else if(1<qe){Me=Array(qe);for(var Ht=0;Ht<qe;Ht++)Me[Ht]=arguments[Ht+2];xe.children=Me}return{$$typeof:r,type:j.type,key:ke,ref:Ne,props:xe,_owner:Fe}},Ae.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:l,_context:j},j.Consumer=j},Ae.createElement=A,Ae.createFactory=function(j){var W=A.bind(null,j);return W.type=j,W},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(j){return{$$typeof:f,render:j}},Ae.isValidElement=D,Ae.lazy=function(j){return{$$typeof:T,_payload:{_status:-1,_result:j},_init:Dt}},Ae.memo=function(j,W){return{$$typeof:v,type:j,compare:W===void 0?null:W}},Ae.startTransition=function(j){var W=ee.transition;ee.transition={};try{j()}finally{ee.transition=W}},Ae.unstable_act=ie,Ae.useCallback=function(j,W){return Xe.current.useCallback(j,W)},Ae.useContext=function(j){return Xe.current.useContext(j)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(j){return Xe.current.useDeferredValue(j)},Ae.useEffect=function(j,W){return Xe.current.useEffect(j,W)},Ae.useId=function(){return Xe.current.useId()},Ae.useImperativeHandle=function(j,W,Te){return Xe.current.useImperativeHandle(j,W,Te)},Ae.useInsertionEffect=function(j,W){return Xe.current.useInsertionEffect(j,W)},Ae.useLayoutEffect=function(j,W){return Xe.current.useLayoutEffect(j,W)},Ae.useMemo=function(j,W){return Xe.current.useMemo(j,W)},Ae.useReducer=function(j,W,Te){return Xe.current.useReducer(j,W,Te)},Ae.useRef=function(j){return Xe.current.useRef(j)},Ae.useState=function(j){return Xe.current.useState(j)},Ae.useSyncExternalStore=function(j,W,Te){return Xe.current.useSyncExternalStore(j,W,Te)},Ae.useTransition=function(){return Xe.current.useTransition()},Ae.version="18.3.1",Ae}var Pg;function wf(){return Pg||(Pg=1,Td.exports=OE()),Td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function VE(){if(Dg)return Fa;Dg=1;var r=wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,y,v){var T,x={},k=null,z=null;v!==void 0&&(k=""+v),y.key!==void 0&&(k=""+y.key),y.ref!==void 0&&(z=y.ref);for(T in y)i.call(y,T)&&!l.hasOwnProperty(T)&&(x[T]=y[T]);if(f&&f.defaultProps)for(T in y=f.defaultProps,y)x[T]===void 0&&(x[T]=y[T]);return{$$typeof:e,type:f,key:k,ref:z,props:x,_owner:o.current}}return Fa.Fragment=t,Fa.jsx=h,Fa.jsxs=h,Fa}var jg;function LE(){return jg||(jg=1,Ed.exports=VE()),Ed.exports}var g=LE(),ju={},xd={exports:{}},Xt={},Id={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function FE(){return Mg||(Mg=1,(function(r){function e(ee,ce){var ie=ee.length;ee.push(ce);e:for(;0<ie;){var j=ie-1>>>1,W=ee[j];if(0<o(W,ce))ee[j]=ce,ee[ie]=W,ie=j;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var ce=ee[0],ie=ee.pop();if(ie!==ce){ee[0]=ie;e:for(var j=0,W=ee.length,Te=W>>>1;j<Te;){var xe=2*(j+1)-1,ke=ee[xe],Ne=xe+1,Fe=ee[Ne];if(0>o(ke,ie))Ne<W&&0>o(Fe,ke)?(ee[j]=Fe,ee[Ne]=ie,j=Ne):(ee[j]=ke,ee[xe]=ie,j=xe);else if(Ne<W&&0>o(Fe,ie))ee[j]=Fe,ee[Ne]=ie,j=Ne;else break e}}return ce}function o(ee,ce){var ie=ee.sortIndex-ce.sortIndex;return ie!==0?ie:ee.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var y=[],v=[],T=1,x=null,k=3,z=!1,$=!1,Q=!1,B=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(ee){for(var ce=t(v);ce!==null;){if(ce.callback===null)i(v);else if(ce.startTime<=ee)i(v),ce.sortIndex=ce.expirationTime,e(y,ce);else break;ce=t(v)}}function J(ee){if(Q=!1,de(ee),!$)if(t(y)!==null)$=!0,Dt(De);else{var ce=t(v);ce!==null&&Xe(J,ce.startTime-ee)}}function De(ee,ce){$=!1,Q&&(Q=!1,he(A),A=-1),z=!0;var ie=k;try{for(de(ce),x=t(y);x!==null&&(!(x.expirationTime>ce)||ee&&!C());){var j=x.callback;if(typeof j=="function"){x.callback=null,k=x.priorityLevel;var W=j(x.expirationTime<=ce);ce=r.unstable_now(),typeof W=="function"?x.callback=W:x===t(y)&&i(y),de(ce)}else i(y);x=t(y)}if(x!==null)var Te=!0;else{var xe=t(v);xe!==null&&Xe(J,xe.startTime-ce),Te=!1}return Te}finally{x=null,k=ie,z=!1}}var Ie=!1,b=null,A=-1,N=5,D=-1;function C(){return!(r.unstable_now()-D<N)}function M(){if(b!==null){var ee=r.unstable_now();D=ee;var ce=!0;try{ce=b(!0,ee)}finally{ce?S():(Ie=!1,b=null)}}else Ie=!1}var S;if(typeof ye=="function")S=function(){ye(M)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Et=We.port2;We.port1.onmessage=M,S=function(){Et.postMessage(null)}}else S=function(){B(M,0)};function Dt(ee){b=ee,Ie||(Ie=!0,S())}function Xe(ee,ce){A=B(function(){ee(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){$||z||($=!0,Dt(De))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_getFirstCallbackNode=function(){return t(y)},r.unstable_next=function(ee){switch(k){case 1:case 2:case 3:var ce=3;break;default:ce=k}var ie=k;k=ce;try{return ee()}finally{k=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,ce){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ie=k;k=ee;try{return ce()}finally{k=ie}},r.unstable_scheduleCallback=function(ee,ce,ie){var j=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?j+ie:j):ie=j,ee){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ie+W,ee={id:T++,callback:ce,priorityLevel:ee,startTime:ie,expirationTime:W,sortIndex:-1},ie>j?(ee.sortIndex=ie,e(v,ee),t(y)===null&&ee===t(v)&&(Q?(he(A),A=-1):Q=!0,Xe(J,ie-j))):(ee.sortIndex=W,e(y,ee),$||z||($=!0,Dt(De))),ee},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(ee){var ce=k;return function(){var ie=k;k=ce;try{return ee.apply(this,arguments)}finally{k=ie}}}})(Ad)),Ad}var Og;function UE(){return Og||(Og=1,Id.exports=FE()),Id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function zE(){if(Vg)return Xt;Vg=1;var r=wf(),e=UE();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},x={};function k(n){return y.call(x,n)?!0:y.call(T,n)?!1:v.test(n)?x[n]=!0:(T[n]=!0,!1)}function z(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,s,a,c){if(s===null||typeof s>"u"||z(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Q(n,s,a,c,d,m,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=w}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];B[s]=new Q(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ye(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(he,ye);B[s]=new Q(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(he,ye);B[s]=new Q(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(he,ye);B[s]=new Q(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function de(n,s,a,c){var d=B.hasOwnProperty(s)?B[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?k(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var J=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,De=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),C=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Xe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,j;function W(n){if(j===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);j=s&&s[1]||""}return`
`+j+n}var Te=!1;function xe(n,s){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(F){var c=F}Reflect.construct(n,[],s)}else{try{s.call()}catch(F){c=F}n.call(s.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),m=c.stack.split(`
`),w=d.length-1,I=m.length-1;1<=w&&0<=I&&d[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==m[I]){var R=`
`+d[w].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=w&&0<=I);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function ke(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=xe(n.type,!1),n;case 11:return n=xe(n.type.render,!1),n;case 1:return n=xe(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case Ie:return"Portal";case N:return"Profiler";case A:return"StrictMode";case S:return"Suspense";case We:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case C:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case M:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Et:return s=n.displayName||null,s!==null?s:Ne(n.type)||"Memo";case Dt:s=n._payload,n=n._init;try{return Ne(n(s))}catch{}}return null}function Fe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ht(n){var s=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Cs(n){n._valueTracker||(n._valueTracker=Ht(n))}function $o(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Br(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ps(n,s){var a=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function vl(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Me(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ds(n,s){s=s.checked,s!=null&&de(n,"checked",s,!1)}function zi(n,s){Ds(n,s);var a=Me(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ct(n,s.type,a):s.hasOwnProperty("defaultValue")&&ct(n,s.type,Me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Wo(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ct(n,s,a){(s!=="number"||Br(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function Sn(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Go(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ko(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Me(a)}}function wl(n,s){var a=Me(s.value),c=Me(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Hr(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function Qo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function js(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?Qo(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qr,El=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=qr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Bi(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tl=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(n){Tl.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),$r[s]=$r[n]})});function Wr(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||$r.hasOwnProperty(n)&&$r[n]?(""+s).trim():s+"px"}function Ms(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Wr(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Yo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kn(n,s){if(s){if(Yo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Os(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gr=null;function Vs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gr=null,yr=null,rt=null;function Jo(n){if(n=Ia(n)){if(typeof gr!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Ql(s),gr(n.stateNode,n.type,s))}}function Kr(n){yr?rt?rt.push(n):rt=[n]:yr=n}function Qr(){if(yr){var n=yr,s=rt;if(rt=yr=null,Jo(n),s)for(n=0;n<s.length;n++)Jo(s[n])}}function xl(n,s){return n(s)}function Il(){}var Bn=!1;function Al(n,s,a){if(Bn)return n(s,a);Bn=!0;try{return xl(n,s,a)}finally{Bn=!1,(yr!==null||rt!==null)&&(Il(),Qr())}}function Hi(n,s){var a=n.stateNode;if(a===null)return null;var c=Ql(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Yr=!1;if(f)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Yr=!1}function Sl(n,s,a,c,d,m,w,I,R){var F=Array.prototype.slice.call(arguments,3);try{s.apply(a,F)}catch(K){this.onError(K)}}var _r=!1,Hn=null,Ls=!1,pn=null,kl={onError:function(n){_r=!0,Hn=n}};function Nl(n,s,a,c,d,m,w,I,R){_r=!1,Hn=null,Sl.apply(kl,arguments)}function Xo(n,s,a,c,d,m,w,I,R){if(Nl.apply(this,arguments),_r){if(_r){var F=Hn;_r=!1,Hn=null}else throw Error(t(198));Ls||(Ls=!0,pn=F)}}function Nn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Zo(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Rl(n){if(Nn(n)!==n)throw Error(t(188))}function bl(n){var s=n.alternate;if(!s){if(s=Nn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Rl(d),n;if(m===c)return Rl(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var w=!1,I=d.child;I;){if(I===a){w=!0,a=d,c=m;break}if(I===c){w=!0,c=d,a=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===a){w=!0,a=m,c=d;break}if(I===c){w=!0,c=m,a=d;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Cl(n){return n=bl(n),n!==null?qi(n):null}function qi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=qi(n);if(s!==null)return s;n=n.sibling}return null}var ea=e.unstable_scheduleCallback,Fs=e.unstable_cancelCallback,$i=e.unstable_shouldYield,vr=e.unstable_requestPaint,Qe=e.unstable_now,Xc=e.unstable_getCurrentPriorityLevel,Us=e.unstable_ImmediatePriority,ta=e.unstable_UserBlockingPriority,Wi=e.unstable_NormalPriority,na=e.unstable_LowPriority,zs=e.unstable_IdlePriority,Gi=null,nn=null;function Pl(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Gi,n,void 0,(n.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Ki,qn=Math.log,gn=Math.LN2;function Ki(n){return n>>>=0,n===0?32:31-(qn(n)/gn|0)|0}var $n=64,Xr=4194304;function Le(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wr(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~d;I!==0?c=Le(I):(m&=w,m!==0&&(c=Le(m)))}else w=a&~d,w!==0?c=Le(w):m!==0&&(c=Le(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-rn(s),d=1<<a,c|=n[a],s&=~d;return c}function Qi(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yi(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-rn(m),I=1<<w,R=d[w];R===-1?((I&a)===0||(I&c)!==0)&&(d[w]=Qi(I,s)):R<=s&&(n.expiredLanes|=I),m&=~I}}function ra(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ia(){var n=$n;return $n<<=1,($n&4194240)===0&&($n=64),n}function sa(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Ji(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-rn(s),n[s]=a}function Zc(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-rn(a),m=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function oa(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-rn(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var Pe=0;function Wn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var aa,Bs,la,ua,ca,Gn=!1,Hs=[],Kn=null,Qn=null,St=null,Xi=new Map,Er=new Map,sn=[],Dl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zr(n,s){switch(n){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Xi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(s.pointerId)}}function Rn(n,s,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ia(s),s!==null&&Bs(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function jl(n,s,a,c,d){switch(s){case"focusin":return Kn=Rn(Kn,n,s,a,c,d),!0;case"dragenter":return Qn=Rn(Qn,n,s,a,c,d),!0;case"mouseover":return St=Rn(St,n,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Xi.set(m,Rn(Xi.get(m)||null,n,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Er.set(m,Rn(Er.get(m)||null,n,s,a,c,d)),!0}return!1}function qs(n){var s=ns(n.target);if(s!==null){var a=Nn(s);if(a!==null){if(s=a.tag,s===13){if(s=Zo(a),s!==null){n.blockedOn=s,ca(n.priority,function(){la(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $e(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=$s(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Gr=c,a.target.dispatchEvent(c),Gr=null}else return s=Ia(a),s!==null&&Bs(s),n.blockedOn=a,!1;s.shift()}return!0}function Ml(n,s,a){$e(n)&&a.delete(s)}function eh(){Gn=!1,Kn!==null&&$e(Kn)&&(Kn=null),Qn!==null&&$e(Qn)&&(Qn=null),St!==null&&$e(St)&&(St=null),Xi.forEach(Ml),Er.forEach(Ml)}function ei(n,s){n.blockedOn===s&&(n.blockedOn=null,Gn||(Gn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,eh)))}function ti(n){function s(d){return ei(d,n)}if(0<Hs.length){ei(Hs[0],n);for(var a=1;a<Hs.length;a++){var c=Hs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Kn!==null&&ei(Kn,n),Qn!==null&&ei(Qn,n),St!==null&&ei(St,n),Xi.forEach(s),Er.forEach(s),a=0;a<sn.length;a++)c=sn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<sn.length&&(a=sn[0],a.blockedOn===null);)qs(a),a.blockedOn===null&&sn.shift()}var Tr=J.ReactCurrentBatchConfig,xr=!0;function Yn(n,s,a,c){var d=Pe,m=Tr.transition;Tr.transition=null;try{Pe=1,ha(n,s,a,c)}finally{Pe=d,Tr.transition=m}}function Ol(n,s,a,c){var d=Pe,m=Tr.transition;Tr.transition=null;try{Pe=4,ha(n,s,a,c)}finally{Pe=d,Tr.transition=m}}function ha(n,s,a,c){if(xr){var d=$s(n,s,a,c);if(d===null)hh(n,s,c,Jn,a),Zr(n,c);else if(jl(d,n,s,a,c))c.stopPropagation();else if(Zr(n,c),s&4&&-1<Dl.indexOf(n)){for(;d!==null;){var m=Ia(d);if(m!==null&&aa(m),m=$s(n,s,a,c),m===null&&hh(n,s,c,Jn,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else hh(n,s,c,null,a)}}var Jn=null;function $s(n,s,a,c){if(Jn=null,n=Vs(c),n=ns(n),n!==null)if(s=Nn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Zo(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Jn=n,null}function Ws(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case Us:return 1;case ta:return 4;case Wi:case na:return 16;case zs:return 536870912;default:return 16}default:return 16}}var on=null,Gs=null,Ir=null;function Vl(){if(Ir)return Ir;var n,s=Gs,a=s.length,c,d="value"in on?on.value:on.textContent,m=d.length;for(n=0;n<a&&s[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&s[a-c]===d[m-c];c++);return Ir=d.slice(n,1<c?1-c:void 0)}function Zi(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Xn(){return!0}function da(){return!1}function jt(n){function s(a,c,d,m,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xn:da,this.isPropagationStopped=da,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),s}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=jt(Zn),ni=ie({},Zn,{view:0,detail:0}),Ks=jt(ni),Qs,Ys,an,ts=ie({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==an&&(an&&n.type==="mousemove"?(Qs=n.screenX-an.screenX,Ys=n.screenY-an.screenY):Ys=Qs=0,an=n),Qs)},movementY:function(n){return"movementY"in n?n.movementY:Ys}}),fa=jt(ts),Ll=ie({},ts,{dataTransfer:0}),Fl=jt(Ll),Js=ie({},ni,{relatedTarget:0}),kt=jt(Js),Ul=ie({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),zl=jt(Ul),ri=ie({},Zn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=jt(ri),p=ie({},Zn,{data:0}),_=jt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=U[n])?!!s[n]:!1}function we(){return Z}var ot=ie({},ni,{key:function(n){if(n.key){var s=E[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Zi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?V[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(n){return n.type==="keypress"?Zi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ze=jt(ot),ht=ie({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ln=jt(ht),Ar=ie({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we}),er=jt(Ar),tr=ie({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xs=jt(tr),ma=ie({},ts,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bw=jt(ma),Cw=[9,13,27,32],th=f&&"CompositionEvent"in window,pa=null;f&&"documentMode"in document&&(pa=document.documentMode);var Pw=f&&"TextEvent"in window&&!pa,xm=f&&(!th||pa&&8<pa&&11>=pa),Im=" ",Am=!1;function Sm(n,s){switch(n){case"keyup":return Cw.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Zs=!1;function Dw(n,s){switch(n){case"compositionend":return km(s);case"keypress":return s.which!==32?null:(Am=!0,Im);case"textInput":return n=s.data,n===Im&&Am?null:n;default:return null}}function jw(n,s){if(Zs)return n==="compositionend"||!th&&Sm(n,s)?(n=Vl(),Ir=Gs=on=null,Zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return xm&&s.locale!=="ko"?null:s.data;default:return null}}var Mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Mw[n.type]:s==="textarea"}function Rm(n,s,a,c){Kr(c),s=Wl(s,"onChange"),0<s.length&&(a=new es("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ga=null,ya=null;function Ow(n){Gm(n,0)}function Bl(n){var s=io(n);if($o(s))return n}function Vw(n,s){if(n==="change")return s}var bm=!1;if(f){var nh;if(f){var rh="oninput"in document;if(!rh){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),rh=typeof Cm.oninput=="function"}nh=rh}else nh=!1;bm=nh&&(!document.documentMode||9<document.documentMode)}function Pm(){ga&&(ga.detachEvent("onpropertychange",Dm),ya=ga=null)}function Dm(n){if(n.propertyName==="value"&&Bl(ya)){var s=[];Rm(s,ya,n,Vs(n)),Al(Ow,s)}}function Lw(n,s,a){n==="focusin"?(Pm(),ga=s,ya=a,ga.attachEvent("onpropertychange",Dm)):n==="focusout"&&Pm()}function Fw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bl(ya)}function Uw(n,s){if(n==="click")return Bl(s)}function zw(n,s){if(n==="input"||n==="change")return Bl(s)}function Bw(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var bn=typeof Object.is=="function"?Object.is:Bw;function _a(n,s){if(bn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(s,d)||!bn(n[d],s[d]))return!1}return!0}function jm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mm(n,s){var a=jm(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jm(a)}}function Om(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Om(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Vm(){for(var n=window,s=Br();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Br(n.document)}return s}function ih(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Hw(n){var s=Vm(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Om(a.ownerDocument.documentElement,a)){if(c!==null&&ih(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Mm(a,m);var w=Mm(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qw=f&&"documentMode"in document&&11>=document.documentMode,eo=null,sh=null,va=null,oh=!1;function Lm(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oh||eo==null||eo!==Br(c)||(c=eo,"selectionStart"in c&&ih(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),va&&_a(va,c)||(va=c,c=Wl(sh,"onSelect"),0<c.length&&(s=new es("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=eo)))}function Hl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var to={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},ah={},Fm={};f&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function ql(n){if(ah[n])return ah[n];if(!to[n])return n;var s=to[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Fm)return ah[n]=s[a];return n}var Um=ql("animationend"),zm=ql("animationiteration"),Bm=ql("animationstart"),Hm=ql("transitionend"),qm=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(n,s){qm.set(n,s),l(s,[n])}for(var lh=0;lh<$m.length;lh++){var uh=$m[lh],$w=uh.toLowerCase(),Ww=uh[0].toUpperCase()+uh.slice(1);ii($w,"on"+Ww)}ii(Um,"onAnimationEnd"),ii(zm,"onAnimationIteration"),ii(Bm,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(Hm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gw=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function Wm(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,Xo(c,s,void 0,n),n.currentTarget=null}function Gm(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var w=c.length-1;0<=w;w--){var I=c[w],R=I.instance,F=I.currentTarget;if(I=I.listener,R!==m&&d.isPropagationStopped())break e;Wm(d,I,F),m=R}else for(w=0;w<c.length;w++){if(I=c[w],R=I.instance,F=I.currentTarget,I=I.listener,R!==m&&d.isPropagationStopped())break e;Wm(d,I,F),m=R}}}if(Ls)throw n=pn,Ls=!1,pn=null,n}function Ye(n,s){var a=s[yh];a===void 0&&(a=s[yh]=new Set);var c=n+"__bubble";a.has(c)||(Km(s,n,2,!1),a.add(c))}function ch(n,s,a){var c=0;s&&(c|=4),Km(a,n,c,s)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[$l]){n[$l]=!0,i.forEach(function(a){a!=="selectionchange"&&(Gw.has(a)||ch(a,!1,n),ch(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[$l]||(s[$l]=!0,ch("selectionchange",!1,s))}}function Km(n,s,a,c){switch(Ws(s)){case 1:var d=Yn;break;case 4:d=Ol;break;default:d=ha}a=d.bind(null,s,a,n),d=void 0,!Yr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function hh(n,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var R=w.tag;if((R===3||R===4)&&(R=w.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;w=w.return}for(;I!==null;){if(w=ns(I),w===null)return;if(R=w.tag,R===5||R===6){c=m=w;continue e}I=I.parentNode}}c=c.return}Al(function(){var F=m,K=Vs(a),Y=[];e:{var G=qm.get(n);if(G!==void 0){var ne=es,oe=n;switch(n){case"keypress":if(Zi(a)===0)break e;case"keydown":case"keyup":ne=ze;break;case"focusin":oe="focus",ne=kt;break;case"focusout":oe="blur",ne=kt;break;case"beforeblur":case"afterblur":ne=kt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=fa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=er;break;case Um:case zm:case Bm:ne=zl;break;case Hm:ne=Xs;break;case"scroll":ne=Ks;break;case"wheel":ne=bw;break;case"copy":case"cut":case"paste":ne=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=ln}var ae=(s&4)!==0,at=!ae&&n==="scroll",O=ae?G!==null?G+"Capture":null:G;ae=[];for(var P=F,L;P!==null;){L=P;var X=L.stateNode;if(L.tag===5&&X!==null&&(L=X,O!==null&&(X=Hi(P,O),X!=null&&ae.push(Ta(P,X,L)))),at)break;P=P.return}0<ae.length&&(G=new ne(G,oe,null,a,K),Y.push({event:G,listeners:ae}))}}if((s&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==Gr&&(oe=a.relatedTarget||a.fromElement)&&(ns(oe)||oe[Sr]))break e;if((ne||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(oe=a.relatedTarget||a.toElement,ne=F,oe=oe?ns(oe):null,oe!==null&&(at=Nn(oe),oe!==at||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=F),ne!==oe)){if(ae=fa,X="onMouseLeave",O="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ae=ln,X="onPointerLeave",O="onPointerEnter",P="pointer"),at=ne==null?G:io(ne),L=oe==null?G:io(oe),G=new ae(X,P+"leave",ne,a,K),G.target=at,G.relatedTarget=L,X=null,ns(K)===F&&(ae=new ae(O,P+"enter",oe,a,K),ae.target=L,ae.relatedTarget=at,X=ae),at=X,ne&&oe)t:{for(ae=ne,O=oe,P=0,L=ae;L;L=no(L))P++;for(L=0,X=O;X;X=no(X))L++;for(;0<P-L;)ae=no(ae),P--;for(;0<L-P;)O=no(O),L--;for(;P--;){if(ae===O||O!==null&&ae===O.alternate)break t;ae=no(ae),O=no(O)}ae=null}else ae=null;ne!==null&&Qm(Y,G,ne,ae,!1),oe!==null&&at!==null&&Qm(Y,at,oe,ae,!0)}}e:{if(G=F?io(F):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var le=Vw;else if(Nm(G))if(bm)le=zw;else{le=Fw;var fe=Lw}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(le=Uw);if(le&&(le=le(n,F))){Rm(Y,le,a,K);break e}fe&&fe(n,G,F),n==="focusout"&&(fe=G._wrapperState)&&fe.controlled&&G.type==="number"&&ct(G,"number",G.value)}switch(fe=F?io(F):window,n){case"focusin":(Nm(fe)||fe.contentEditable==="true")&&(eo=fe,sh=F,va=null);break;case"focusout":va=sh=eo=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Lm(Y,a,K);break;case"selectionchange":if(qw)break;case"keydown":case"keyup":Lm(Y,a,K)}var me;if(th)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Zs?Sm(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(xm&&a.locale!=="ko"&&(Zs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Zs&&(me=Vl()):(on=K,Gs="value"in on?on.value:on.textContent,Zs=!0)),fe=Wl(F,_e),0<fe.length&&(_e=new _(_e,n,null,a,K),Y.push({event:_e,listeners:fe}),me?_e.data=me:(me=km(a),me!==null&&(_e.data=me)))),(me=Pw?Dw(n,a):jw(n,a))&&(F=Wl(F,"onBeforeInput"),0<F.length&&(K=new _("onBeforeInput","beforeinput",null,a,K),Y.push({event:K,listeners:F}),K.data=me))}Gm(Y,s)})}function Ta(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Wl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Hi(n,a),m!=null&&c.unshift(Ta(n,m,d)),m=Hi(n,s),m!=null&&c.push(Ta(n,m,d))),n=n.return}return c}function no(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qm(n,s,a,c,d){for(var m=s._reactName,w=[];a!==null&&a!==c;){var I=a,R=I.alternate,F=I.stateNode;if(R!==null&&R===c)break;I.tag===5&&F!==null&&(I=F,d?(R=Hi(a,m),R!=null&&w.unshift(Ta(a,R,I))):d||(R=Hi(a,m),R!=null&&w.push(Ta(a,R,I)))),a=a.return}w.length!==0&&n.push({event:s,listeners:w})}var Kw=/\r\n?/g,Qw=/\u0000|\uFFFD/g;function Ym(n){return(typeof n=="string"?n:""+n).replace(Kw,`
`).replace(Qw,"")}function Gl(n,s,a){if(s=Ym(s),Ym(n)!==s&&a)throw Error(t(425))}function Kl(){}var dh=null,fh=null;function mh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,Yw=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,Jw=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(n){return Jm.resolve(null).then(n).catch(Xw)}:ph;function Xw(n){setTimeout(function(){throw n})}function gh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ti(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ti(s)}function si(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Xm(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var ro=Math.random().toString(36).slice(2),nr="__reactFiber$"+ro,xa="__reactProps$"+ro,Sr="__reactContainer$"+ro,yh="__reactEvents$"+ro,Zw="__reactListeners$"+ro,eE="__reactHandles$"+ro;function ns(n){var s=n[nr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Sr]||a[nr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Xm(n);n!==null;){if(a=n[nr])return a;n=Xm(n)}return s}n=a,a=n.parentNode}return null}function Ia(n){return n=n[nr]||n[Sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function io(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ql(n){return n[xa]||null}var _h=[],so=-1;function oi(n){return{current:n}}function Je(n){0>so||(n.current=_h[so],_h[so]=null,so--)}function Ge(n,s){so++,_h[so]=n.current,n.current=s}var ai={},Mt=oi(ai),Gt=oi(!1),rs=ai;function oo(n,s){var a=n.type.contextTypes;if(!a)return ai;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Yl(){Je(Gt),Je(Mt)}function Zm(n,s,a){if(Mt.current!==ai)throw Error(t(168));Ge(Mt,s),Ge(Gt,a)}function ep(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Fe(n)||"Unknown",d));return ie({},a,c)}function Jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ai,rs=Mt.current,Ge(Mt,n),Ge(Gt,Gt.current),!0}function tp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ep(n,s,rs),c.__reactInternalMemoizedMergedChildContext=n,Je(Gt),Je(Mt),Ge(Mt,n)):Je(Gt),Ge(Gt,a)}var kr=null,Xl=!1,vh=!1;function np(n){kr===null?kr=[n]:kr.push(n)}function tE(n){Xl=!0,np(n)}function li(){if(!vh&&kr!==null){vh=!0;var n=0,s=Pe;try{var a=kr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}kr=null,Xl=!1}catch(d){throw kr!==null&&(kr=kr.slice(n+1)),ea(Us,li),d}finally{Pe=s,vh=!1}}return null}var ao=[],lo=0,Zl=null,eu=0,yn=[],_n=0,is=null,Nr=1,Rr="";function ss(n,s){ao[lo++]=eu,ao[lo++]=Zl,Zl=n,eu=s}function rp(n,s,a){yn[_n++]=Nr,yn[_n++]=Rr,yn[_n++]=is,is=n;var c=Nr;n=Rr;var d=32-rn(c)-1;c&=~(1<<d),a+=1;var m=32-rn(s)+d;if(30<m){var w=d-d%5;m=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Nr=1<<32-rn(s)+d|a<<d|c,Rr=m+n}else Nr=1<<m|a<<d|c,Rr=n}function wh(n){n.return!==null&&(ss(n,1),rp(n,1,0))}function Eh(n){for(;n===Zl;)Zl=ao[--lo],ao[lo]=null,eu=ao[--lo],ao[lo]=null;for(;n===is;)is=yn[--_n],yn[_n]=null,Rr=yn[--_n],yn[_n]=null,Nr=yn[--_n],yn[_n]=null}var un=null,cn=null,Ze=!1,Cn=null;function ip(n,s){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function sp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,un=n,cn=si(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,un=n,cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=is!==null?{id:Nr,overflow:Rr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,un=n,cn=null,!0):!1;default:return!1}}function Th(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xh(n){if(Ze){var s=cn;if(s){var a=s;if(!sp(n,s)){if(Th(n))throw Error(t(418));s=si(a.nextSibling);var c=un;s&&sp(n,s)?ip(c,a):(n.flags=n.flags&-4097|2,Ze=!1,un=n)}}else{if(Th(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,un=n}}}function op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;un=n}function tu(n){if(n!==un)return!1;if(!Ze)return op(n),Ze=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!mh(n.type,n.memoizedProps)),s&&(s=cn)){if(Th(n))throw ap(),Error(t(418));for(;s;)ip(n,s),s=si(s.nextSibling)}if(op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){cn=si(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}cn=null}}else cn=un?si(n.stateNode.nextSibling):null;return!0}function ap(){for(var n=cn;n;)n=si(n.nextSibling)}function uo(){cn=un=null,Ze=!1}function Ih(n){Cn===null?Cn=[n]:Cn.push(n)}var nE=J.ReactCurrentBatchConfig;function Aa(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(w){var I=d.refs;w===null?delete I[m]:I[m]=w},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function nu(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function lp(n){var s=n._init;return s(n._payload)}function up(n){function s(O,P){if(n){var L=O.deletions;L===null?(O.deletions=[P],O.flags|=16):L.push(P)}}function a(O,P){if(!n)return null;for(;P!==null;)s(O,P),P=P.sibling;return null}function c(O,P){for(O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function d(O,P){return O=gi(O,P),O.index=0,O.sibling=null,O}function m(O,P,L){return O.index=L,n?(L=O.alternate,L!==null?(L=L.index,L<P?(O.flags|=2,P):L):(O.flags|=2,P)):(O.flags|=1048576,P)}function w(O){return n&&O.alternate===null&&(O.flags|=2),O}function I(O,P,L,X){return P===null||P.tag!==6?(P=pd(L,O.mode,X),P.return=O,P):(P=d(P,L),P.return=O,P)}function R(O,P,L,X){var le=L.type;return le===b?K(O,P,L.props.children,X,L.key):P!==null&&(P.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Dt&&lp(le)===P.type)?(X=d(P,L.props),X.ref=Aa(O,P,L),X.return=O,X):(X=Su(L.type,L.key,L.props,null,O.mode,X),X.ref=Aa(O,P,L),X.return=O,X)}function F(O,P,L,X){return P===null||P.tag!==4||P.stateNode.containerInfo!==L.containerInfo||P.stateNode.implementation!==L.implementation?(P=gd(L,O.mode,X),P.return=O,P):(P=d(P,L.children||[]),P.return=O,P)}function K(O,P,L,X,le){return P===null||P.tag!==7?(P=fs(L,O.mode,X,le),P.return=O,P):(P=d(P,L),P.return=O,P)}function Y(O,P,L){if(typeof P=="string"&&P!==""||typeof P=="number")return P=pd(""+P,O.mode,L),P.return=O,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case De:return L=Su(P.type,P.key,P.props,null,O.mode,L),L.ref=Aa(O,null,P),L.return=O,L;case Ie:return P=gd(P,O.mode,L),P.return=O,P;case Dt:var X=P._init;return Y(O,X(P._payload),L)}if(st(P)||ce(P))return P=fs(P,O.mode,L,null),P.return=O,P;nu(O,P)}return null}function G(O,P,L,X){var le=P!==null?P.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return le!==null?null:I(O,P,""+L,X);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case De:return L.key===le?R(O,P,L,X):null;case Ie:return L.key===le?F(O,P,L,X):null;case Dt:return le=L._init,G(O,P,le(L._payload),X)}if(st(L)||ce(L))return le!==null?null:K(O,P,L,X,null);nu(O,L)}return null}function ne(O,P,L,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return O=O.get(L)||null,I(P,O,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case De:return O=O.get(X.key===null?L:X.key)||null,R(P,O,X,le);case Ie:return O=O.get(X.key===null?L:X.key)||null,F(P,O,X,le);case Dt:var fe=X._init;return ne(O,P,L,fe(X._payload),le)}if(st(X)||ce(X))return O=O.get(L)||null,K(P,O,X,le,null);nu(P,X)}return null}function oe(O,P,L,X){for(var le=null,fe=null,me=P,_e=P=0,It=null;me!==null&&_e<L.length;_e++){me.index>_e?(It=me,me=null):It=me.sibling;var Ve=G(O,me,L[_e],X);if(Ve===null){me===null&&(me=It);break}n&&me&&Ve.alternate===null&&s(O,me),P=m(Ve,P,_e),fe===null?le=Ve:fe.sibling=Ve,fe=Ve,me=It}if(_e===L.length)return a(O,me),Ze&&ss(O,_e),le;if(me===null){for(;_e<L.length;_e++)me=Y(O,L[_e],X),me!==null&&(P=m(me,P,_e),fe===null?le=me:fe.sibling=me,fe=me);return Ze&&ss(O,_e),le}for(me=c(O,me);_e<L.length;_e++)It=ne(me,O,_e,L[_e],X),It!==null&&(n&&It.alternate!==null&&me.delete(It.key===null?_e:It.key),P=m(It,P,_e),fe===null?le=It:fe.sibling=It,fe=It);return n&&me.forEach(function(yi){return s(O,yi)}),Ze&&ss(O,_e),le}function ae(O,P,L,X){var le=ce(L);if(typeof le!="function")throw Error(t(150));if(L=le.call(L),L==null)throw Error(t(151));for(var fe=le=null,me=P,_e=P=0,It=null,Ve=L.next();me!==null&&!Ve.done;_e++,Ve=L.next()){me.index>_e?(It=me,me=null):It=me.sibling;var yi=G(O,me,Ve.value,X);if(yi===null){me===null&&(me=It);break}n&&me&&yi.alternate===null&&s(O,me),P=m(yi,P,_e),fe===null?le=yi:fe.sibling=yi,fe=yi,me=It}if(Ve.done)return a(O,me),Ze&&ss(O,_e),le;if(me===null){for(;!Ve.done;_e++,Ve=L.next())Ve=Y(O,Ve.value,X),Ve!==null&&(P=m(Ve,P,_e),fe===null?le=Ve:fe.sibling=Ve,fe=Ve);return Ze&&ss(O,_e),le}for(me=c(O,me);!Ve.done;_e++,Ve=L.next())Ve=ne(me,O,_e,Ve.value,X),Ve!==null&&(n&&Ve.alternate!==null&&me.delete(Ve.key===null?_e:Ve.key),P=m(Ve,P,_e),fe===null?le=Ve:fe.sibling=Ve,fe=Ve);return n&&me.forEach(function(ME){return s(O,ME)}),Ze&&ss(O,_e),le}function at(O,P,L,X){if(typeof L=="object"&&L!==null&&L.type===b&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case De:e:{for(var le=L.key,fe=P;fe!==null;){if(fe.key===le){if(le=L.type,le===b){if(fe.tag===7){a(O,fe.sibling),P=d(fe,L.props.children),P.return=O,O=P;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Dt&&lp(le)===fe.type){a(O,fe.sibling),P=d(fe,L.props),P.ref=Aa(O,fe,L),P.return=O,O=P;break e}a(O,fe);break}else s(O,fe);fe=fe.sibling}L.type===b?(P=fs(L.props.children,O.mode,X,L.key),P.return=O,O=P):(X=Su(L.type,L.key,L.props,null,O.mode,X),X.ref=Aa(O,P,L),X.return=O,O=X)}return w(O);case Ie:e:{for(fe=L.key;P!==null;){if(P.key===fe)if(P.tag===4&&P.stateNode.containerInfo===L.containerInfo&&P.stateNode.implementation===L.implementation){a(O,P.sibling),P=d(P,L.children||[]),P.return=O,O=P;break e}else{a(O,P);break}else s(O,P);P=P.sibling}P=gd(L,O.mode,X),P.return=O,O=P}return w(O);case Dt:return fe=L._init,at(O,P,fe(L._payload),X)}if(st(L))return oe(O,P,L,X);if(ce(L))return ae(O,P,L,X);nu(O,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,P!==null&&P.tag===6?(a(O,P.sibling),P=d(P,L),P.return=O,O=P):(a(O,P),P=pd(L,O.mode,X),P.return=O,O=P),w(O)):a(O,P)}return at}var co=up(!0),cp=up(!1),ru=oi(null),iu=null,ho=null,Ah=null;function Sh(){Ah=ho=iu=null}function kh(n){var s=ru.current;Je(ru),n._currentValue=s}function Nh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function fo(n,s){iu=n,Ah=ho=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Qt=!0),n.firstContext=null)}function vn(n){var s=n._currentValue;if(Ah!==n)if(n={context:n,memoizedValue:s,next:null},ho===null){if(iu===null)throw Error(t(308));ho=n,iu.dependencies={lanes:0,firstContext:n}}else ho=ho.next=n;return s}var os=null;function Rh(n){os===null?os=[n]:os.push(n)}function hp(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Rh(s)):(a.next=d.next,d.next=a),s.interleaved=a,br(n,c)}function br(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ui=!1;function bh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Cr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ci(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,br(n,a)}return d=c.interleaved,d===null?(s.next=s,Rh(c)):(s.next=d.next,d.next=s),c.interleaved=s,br(n,a)}function su(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,oa(n,a)}}function fp(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function ou(n,s,a,c){var d=n.updateQueue;ui=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var R=I,F=R.next;R.next=null,w===null?m=F:w.next=F,w=R;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==w&&(I===null?K.firstBaseUpdate=F:I.next=F,K.lastBaseUpdate=R))}if(m!==null){var Y=d.baseState;w=0,K=F=R=null,I=m;do{var G=I.lane,ne=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var oe=n,ae=I;switch(G=s,ne=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Y=oe.call(ne,Y,G);break e}Y=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,G=typeof oe=="function"?oe.call(ne,Y,G):oe,G==null)break e;Y=ie({},Y,G);break e;case 2:ui=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else ne={eventTime:ne,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(F=K=ne,R=Y):K=K.next=ne,w|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(R=Y),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=K,s=d.shared.interleaved,s!==null){d=s;do w|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);us|=w,n.lanes=w,n.memoizedState=Y}}function mp(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Sa={},rr=oi(Sa),ka=oi(Sa),Na=oi(Sa);function as(n){if(n===Sa)throw Error(t(174));return n}function Ch(n,s){switch(Ge(Na,s),Ge(ka,n),Ge(rr,Sa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:js(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=js(s,n)}Je(rr),Ge(rr,s)}function mo(){Je(rr),Je(ka),Je(Na)}function pp(n){as(Na.current);var s=as(rr.current),a=js(s,n.type);s!==a&&(Ge(ka,n),Ge(rr,a))}function Ph(n){ka.current===n&&(Je(rr),Je(ka))}var et=oi(0);function au(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Dh=[];function jh(){for(var n=0;n<Dh.length;n++)Dh[n]._workInProgressVersionPrimary=null;Dh.length=0}var lu=J.ReactCurrentDispatcher,Mh=J.ReactCurrentBatchConfig,ls=0,tt=null,yt=null,Tt=null,uu=!1,Ra=!1,ba=0,rE=0;function Ot(){throw Error(t(321))}function Oh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!bn(n[a],s[a]))return!1;return!0}function Vh(n,s,a,c,d,m){if(ls=m,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,lu.current=n===null||n.memoizedState===null?aE:lE,n=a(c,d),Ra){m=0;do{if(Ra=!1,ba=0,25<=m)throw Error(t(301));m+=1,Tt=yt=null,s.updateQueue=null,lu.current=uE,n=a(c,d)}while(Ra)}if(lu.current=du,s=yt!==null&&yt.next!==null,ls=0,Tt=yt=tt=null,uu=!1,s)throw Error(t(300));return n}function Lh(){var n=ba!==0;return ba=0,n}function ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function wn(){if(yt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var s=Tt===null?tt.memoizedState:Tt.next;if(s!==null)Tt=s,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Ca(n,s){return typeof s=="function"?s(n):s}function Fh(n){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=w=null,R=null,F=m;do{var K=F.lane;if((ls&K)===K)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Y={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(I=R=Y,w=c):R=R.next=Y,tt.lanes|=K,us|=K}F=F.next}while(F!==null&&F!==m);R===null?w=c:R.next=I,bn(c,s.memoizedState)||(Qt=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,tt.lanes|=m,us|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Uh(n){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);bn(m,s.memoizedState)||(Qt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function gp(){}function yp(n,s){var a=tt,c=wn(),d=s(),m=!bn(c.memoizedState,d);if(m&&(c.memoizedState=d,Qt=!0),c=c.queue,zh(wp.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Pa(9,vp.bind(null,a,c,d,s),void 0,null),xt===null)throw Error(t(349));(ls&30)!==0||_p(a,s,d)}return d}function _p(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function vp(n,s,a,c){s.value=a,s.getSnapshot=c,Ep(s)&&Tp(n)}function wp(n,s,a){return a(function(){Ep(s)&&Tp(n)})}function Ep(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!bn(n,a)}catch{return!0}}function Tp(n){var s=br(n,1);s!==null&&Mn(s,n,1,-1)}function xp(n){var s=ir();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:n},s.queue=n,n=n.dispatch=oE.bind(null,tt,n),[s.memoizedState,n]}function Pa(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function Ip(){return wn().memoizedState}function cu(n,s,a,c){var d=ir();tt.flags|=n,d.memoizedState=Pa(1|s,a,void 0,c===void 0?null:c)}function hu(n,s,a,c){var d=wn();c=c===void 0?null:c;var m=void 0;if(yt!==null){var w=yt.memoizedState;if(m=w.destroy,c!==null&&Oh(c,w.deps)){d.memoizedState=Pa(s,a,m,c);return}}tt.flags|=n,d.memoizedState=Pa(1|s,a,m,c)}function Ap(n,s){return cu(8390656,8,n,s)}function zh(n,s){return hu(2048,8,n,s)}function Sp(n,s){return hu(4,2,n,s)}function kp(n,s){return hu(4,4,n,s)}function Np(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Rp(n,s,a){return a=a!=null?a.concat([n]):null,hu(4,4,Np.bind(null,s,n),a)}function Bh(){}function bp(n,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Oh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Cp(n,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Oh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Pp(n,s,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a):(bn(a,s)||(a=ia(),tt.lanes|=a,us|=a,n.baseState=!0),s)}function iE(n,s){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=Mh.transition;Mh.transition={};try{n(!1),s()}finally{Pe=a,Mh.transition=c}}function Dp(){return wn().memoizedState}function sE(n,s,a){var c=mi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},jp(n))Mp(s,a);else if(a=hp(n,s,a,c),a!==null){var d=$t();Mn(a,n,c,d),Op(a,s,c)}}function oE(n,s,a){var c=mi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(jp(n))Mp(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,I=m(w,a);if(d.hasEagerState=!0,d.eagerState=I,bn(I,w)){var R=s.interleaved;R===null?(d.next=d,Rh(s)):(d.next=R.next,R.next=d),s.interleaved=d;return}}catch{}finally{}a=hp(n,s,d,c),a!==null&&(d=$t(),Mn(a,n,c,d),Op(a,s,c))}}function jp(n){var s=n.alternate;return n===tt||s!==null&&s===tt}function Mp(n,s){Ra=uu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Op(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,oa(n,a)}}var du={readContext:vn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},aE={readContext:vn,useCallback:function(n,s){return ir().memoizedState=[n,s===void 0?null:s],n},useContext:vn,useEffect:Ap,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,cu(4194308,4,Np.bind(null,s,n),a)},useLayoutEffect:function(n,s){return cu(4194308,4,n,s)},useInsertionEffect:function(n,s){return cu(4,2,n,s)},useMemo:function(n,s){var a=ir();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=ir();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=sE.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var s=ir();return n={current:n},s.memoizedState=n},useState:xp,useDebugValue:Bh,useDeferredValue:function(n){return ir().memoizedState=n},useTransition:function(){var n=xp(!1),s=n[0];return n=iE.bind(null,n[1]),ir().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=tt,d=ir();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),xt===null)throw Error(t(349));(ls&30)!==0||_p(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,Ap(wp.bind(null,c,m,n),[n]),c.flags|=2048,Pa(9,vp.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=ir(),s=xt.identifierPrefix;if(Ze){var a=Rr,c=Nr;a=(c&~(1<<32-rn(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=ba++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=rE++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},lE={readContext:vn,useCallback:bp,useContext:vn,useEffect:zh,useImperativeHandle:Rp,useInsertionEffect:Sp,useLayoutEffect:kp,useMemo:Cp,useReducer:Fh,useRef:Ip,useState:function(){return Fh(Ca)},useDebugValue:Bh,useDeferredValue:function(n){var s=wn();return Pp(s,yt.memoizedState,n)},useTransition:function(){var n=Fh(Ca)[0],s=wn().memoizedState;return[n,s]},useMutableSource:gp,useSyncExternalStore:yp,useId:Dp,unstable_isNewReconciler:!1},uE={readContext:vn,useCallback:bp,useContext:vn,useEffect:zh,useImperativeHandle:Rp,useInsertionEffect:Sp,useLayoutEffect:kp,useMemo:Cp,useReducer:Uh,useRef:Ip,useState:function(){return Uh(Ca)},useDebugValue:Bh,useDeferredValue:function(n){var s=wn();return yt===null?s.memoizedState=n:Pp(s,yt.memoizedState,n)},useTransition:function(){var n=Uh(Ca)[0],s=wn().memoizedState;return[n,s]},useMutableSource:gp,useSyncExternalStore:yp,useId:Dp,unstable_isNewReconciler:!1};function Pn(n,s){if(n&&n.defaultProps){s=ie({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Hh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:ie({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var fu={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=$t(),d=mi(n),m=Cr(c,d);m.payload=s,a!=null&&(m.callback=a),s=ci(n,m,d),s!==null&&(Mn(s,n,d,c),su(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=$t(),d=mi(n),m=Cr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=ci(n,m,d),s!==null&&(Mn(s,n,d,c),su(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=$t(),c=mi(n),d=Cr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ci(n,d,c),s!==null&&(Mn(s,n,c,a),su(s,n,c))}};function Vp(n,s,a,c,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):s.prototype&&s.prototype.isPureReactComponent?!_a(a,c)||!_a(d,m):!0}function Lp(n,s,a){var c=!1,d=ai,m=s.contextType;return typeof m=="object"&&m!==null?m=vn(m):(d=Kt(s)?rs:Mt.current,c=s.contextTypes,m=(c=c!=null)?oo(n,d):ai),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=fu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),s}function Fp(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&fu.enqueueReplaceState(s,s.state,null)}function qh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},bh(n);var m=s.contextType;typeof m=="object"&&m!==null?d.context=vn(m):(m=Kt(s)?rs:Mt.current,d.context=oo(n,m)),d.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Hh(n,s,m,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&fu.enqueueReplaceState(d,d.state,null),ou(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function po(n,s){try{var a="",c=s;do a+=ke(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:d,digest:null}}function $h(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Wh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var cE=typeof WeakMap=="function"?WeakMap:Map;function Up(n,s,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){wu||(wu=!0,ad=c),Wh(n,s)},a}function zp(n,s,a){a=Cr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Wh(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Wh(n,s),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function Bp(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new cE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=IE.bind(null,n,s,a),s.then(n,n))}function Hp(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function qp(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Cr(-1,1),s.tag=2,ci(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var hE=J.ReactCurrentOwner,Qt=!1;function qt(n,s,a,c){s.child=n===null?cp(s,null,a,c):co(s,n.child,a,c)}function $p(n,s,a,c,d){a=a.render;var m=s.ref;return fo(s,d),c=Vh(n,s,a,c,m,d),a=Lh(),n!==null&&!Qt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Pr(n,s,d)):(Ze&&a&&wh(s),s.flags|=1,qt(n,s,c,d),s.child)}function Wp(n,s,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!md(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Gp(n,s,m,c,d)):(n=Su(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:_a,a(w,c)&&n.ref===s.ref)return Pr(n,s,d)}return s.flags|=1,n=gi(m,c),n.ref=s.ref,n.return=s,s.child=n}function Gp(n,s,a,c,d){if(n!==null){var m=n.memoizedProps;if(_a(m,c)&&n.ref===s.ref)if(Qt=!1,s.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qt=!0);else return s.lanes=n.lanes,Pr(n,s,d)}return Gh(n,s,a,c,d)}function Kp(n,s,a){var c=s.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(yo,hn),hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ge(yo,hn),hn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ge(yo,hn),hn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,Ge(yo,hn),hn|=c;return qt(n,s,d,a),s.child}function Qp(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Gh(n,s,a,c,d){var m=Kt(a)?rs:Mt.current;return m=oo(s,m),fo(s,d),a=Vh(n,s,a,c,m,d),c=Lh(),n!==null&&!Qt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Pr(n,s,d)):(Ze&&c&&wh(s),s.flags|=1,qt(n,s,a,d),s.child)}function Yp(n,s,a,c,d){if(Kt(a)){var m=!0;Jl(s)}else m=!1;if(fo(s,d),s.stateNode===null)pu(n,s),Lp(s,a,c),qh(s,a,c,d),c=!0;else if(n===null){var w=s.stateNode,I=s.memoizedProps;w.props=I;var R=w.context,F=a.contextType;typeof F=="object"&&F!==null?F=vn(F):(F=Kt(a)?rs:Mt.current,F=oo(s,F));var K=a.getDerivedStateFromProps,Y=typeof K=="function"||typeof w.getSnapshotBeforeUpdate=="function";Y||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||R!==F)&&Fp(s,w,c,F),ui=!1;var G=s.memoizedState;w.state=G,ou(s,c,w,d),R=s.memoizedState,I!==c||G!==R||Gt.current||ui?(typeof K=="function"&&(Hh(s,a,K,c),R=s.memoizedState),(I=ui||Vp(s,a,I,c,G,R,F))?(Y||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=R),w.props=c,w.state=R,w.context=F,c=I):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,dp(n,s),I=s.memoizedProps,F=s.type===s.elementType?I:Pn(s.type,I),w.props=F,Y=s.pendingProps,G=w.context,R=a.contextType,typeof R=="object"&&R!==null?R=vn(R):(R=Kt(a)?rs:Mt.current,R=oo(s,R));var ne=a.getDerivedStateFromProps;(K=typeof ne=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Y||G!==R)&&Fp(s,w,c,R),ui=!1,G=s.memoizedState,w.state=G,ou(s,c,w,d);var oe=s.memoizedState;I!==Y||G!==oe||Gt.current||ui?(typeof ne=="function"&&(Hh(s,a,ne,c),oe=s.memoizedState),(F=ui||Vp(s,a,F,c,G,oe,R)||!1)?(K||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,oe,R),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,oe,R)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=oe),w.props=c,w.state=oe,w.context=R,c=F):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(s.flags|=1024),c=!1)}return Kh(n,s,a,c,m,d)}function Kh(n,s,a,c,d,m){Qp(n,s);var w=(s.flags&128)!==0;if(!c&&!w)return d&&tp(s,a,!1),Pr(n,s,m);c=s.stateNode,hE.current=s;var I=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&w?(s.child=co(s,n.child,null,m),s.child=co(s,null,I,m)):qt(n,s,I,m),s.memoizedState=c.state,d&&tp(s,a,!0),s.child}function Jp(n){var s=n.stateNode;s.pendingContext?Zm(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Zm(n,s.context,!1),Ch(n,s.containerInfo)}function Xp(n,s,a,c,d){return uo(),Ih(d),s.flags|=256,qt(n,s,a,c),s.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Yh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zp(n,s,a){var c=s.pendingProps,d=et.current,m=!1,w=(s.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(et,d&1),n===null)return xh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=s.mode,m=s.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=ku(w,c,0,null),n=fs(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=Yh(a),s.memoizedState=Qh,n):Jh(s,w));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return dE(n,s,w,c,I,d,a);if(m){m=c.fallback,w=s.mode,d=n.child,I=d.sibling;var R={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=R,s.deletions=null):(c=gi(d,R),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=gi(I,m):(m=fs(m,w,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,w=n.child.memoizedState,w=w===null?Yh(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,s.memoizedState=Qh,c}return m=n.child,n=m.sibling,c=gi(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Jh(n,s){return s=ku({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function mu(n,s,a,c){return c!==null&&Ih(c),co(s,n.child,null,a),n=Jh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function dE(n,s,a,c,d,m,w){if(a)return s.flags&256?(s.flags&=-257,c=$h(Error(t(422))),mu(n,s,w,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=ku({mode:"visible",children:c.children},d,0,null),m=fs(m,d,w,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&co(s,n.child,null,w),s.child.memoizedState=Yh(w),s.memoizedState=Qh,m);if((s.mode&1)===0)return mu(n,s,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=$h(m,c,void 0),mu(n,s,w,c)}if(I=(w&n.childLanes)!==0,Qt||I){if(c=xt,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,br(n,d),Mn(c,n,d,-1))}return fd(),c=$h(Error(t(421))),mu(n,s,w,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=AE.bind(null,n),d._reactRetry=s,null):(n=m.treeContext,cn=si(d.nextSibling),un=s,Ze=!0,Cn=null,n!==null&&(yn[_n++]=Nr,yn[_n++]=Rr,yn[_n++]=is,Nr=n.id,Rr=n.overflow,is=s),s=Jh(s,c.children),s.flags|=4096,s)}function eg(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Nh(n.return,s,a)}function Xh(n,s,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function tg(n,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(qt(n,s,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&eg(n,a,s);else if(n.tag===19)eg(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(et,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&au(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Xh(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&au(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Xh(s,!0,a,null,m);break;case"together":Xh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function pu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Pr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),us|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=gi(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=gi(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function fE(n,s,a){switch(s.tag){case 3:Jp(s),uo();break;case 5:pp(s);break;case 1:Kt(s.type)&&Jl(s);break;case 4:Ch(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ge(ru,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ge(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Zp(n,s,a):(Ge(et,et.current&1),n=Pr(n,s,a),n!==null?n.sibling:null);Ge(et,et.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return tg(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(et,et.current),c)break;return null;case 22:case 23:return s.lanes=0,Kp(n,s,a)}return Pr(n,s,a)}var ng,Zh,rg,ig;ng=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Zh=function(){},rg=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,as(rr.current);var m=null;switch(a){case"input":d=Ps(n,d),c=Ps(n,c),m=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),m=[];break;case"textarea":d=Go(n,d),c=Go(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Kl)}kn(a,c);var w;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in c){var R=c[F];if(I=d?.[F],c.hasOwnProperty(F)&&R!==I&&(R!=null||I!=null))if(F==="style")if(I){for(w in I)!I.hasOwnProperty(w)||R&&R.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in R)R.hasOwnProperty(w)&&I[w]!==R[w]&&(a||(a={}),a[w]=R[w])}else a||(m||(m=[]),m.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,I=I?I.__html:void 0,R!=null&&I!==R&&(m=m||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(m=m||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&Ye("scroll",n),m||I===R||(m=[])):(m=m||[]).push(F,R))}a&&(m=m||[]).push("style",a);var F=m;(s.updateQueue=F)&&(s.flags|=4)}},ig=function(n,s,a,c){a!==c&&(s.flags|=4)};function Da(n,s){if(!Ze)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function mE(n,s,a){var c=s.pendingProps;switch(Eh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Kt(s.type)&&Yl(),Vt(s),null;case 3:return c=s.stateNode,mo(),Je(Gt),Je(Mt),jh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(tu(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Cn!==null&&(cd(Cn),Cn=null))),Zh(n,s),Vt(s),null;case 5:Ph(s);var d=as(Na.current);if(a=s.type,n!==null&&s.stateNode!=null)rg(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(n=as(rr.current),tu(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[nr]=s,c[xa]=m,n=(s.mode&1)!==0,a){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(d=0;d<wa.length;d++)Ye(wa[d],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":vl(c,m),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ye("invalid",c);break;case"textarea":Ko(c,m),Ye("invalid",c)}kn(a,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Gl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Gl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Ye("scroll",c)}switch(a){case"input":Cs(c),Wo(c,m,!0);break;case"textarea":Cs(c),Hr(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Kl)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Qo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[nr]=s,n[xa]=c,ng(n,s,!1,!1),s.stateNode=n;e:{switch(w=Os(a,c),a){case"dialog":Ye("cancel",n),Ye("close",n),d=c;break;case"iframe":case"object":case"embed":Ye("load",n),d=c;break;case"video":case"audio":for(d=0;d<wa.length;d++)Ye(wa[d],n);d=c;break;case"source":Ye("error",n),d=c;break;case"img":case"image":case"link":Ye("error",n),Ye("load",n),d=c;break;case"details":Ye("toggle",n),d=c;break;case"input":vl(n,c),d=Ps(n,c),Ye("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Ye("invalid",n);break;case"textarea":Ko(n,c),d=Go(n,c),Ye("invalid",n);break;default:d=c}kn(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var R=I[m];m==="style"?Ms(n,R):m==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&El(n,R)):m==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Bi(n,R):typeof R=="number"&&Bi(n,""+R):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?R!=null&&m==="onScroll"&&Ye("scroll",n):R!=null&&de(n,m,R,w))}switch(a){case"input":Cs(n),Wo(n,c,!1);break;case"textarea":Cs(n),Hr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Sn(n,!!c.multiple,m,!1):c.defaultValue!=null&&Sn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(n&&s.stateNode!=null)ig(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=as(Na.current),as(rr.current),tu(s)){if(c=s.stateNode,a=s.memoizedProps,c[nr]=s,(m=c.nodeValue!==a)&&(n=un,n!==null))switch(n.tag){case 3:Gl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Gl(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=s,s.stateNode=c}return Vt(s),null;case 13:if(Je(et),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&cn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)ap(),uo(),s.flags|=98560,m=!1;else if(m=tu(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[nr]=s}else uo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Vt(s),m=!1}else Cn!==null&&(cd(Cn),Cn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(et.current&1)!==0?_t===0&&(_t=3):fd())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return mo(),Zh(n,s),n===null&&Ea(s.stateNode.containerInfo),Vt(s),null;case 10:return kh(s.type._context),Vt(s),null;case 17:return Kt(s.type)&&Yl(),Vt(s),null;case 19:if(Je(et),m=s.memoizedState,m===null)return Vt(s),null;if(c=(s.flags&128)!==0,w=m.rendering,w===null)if(c)Da(m,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(w=au(n),w!==null){for(s.flags|=128,Da(m,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(et,et.current&1|2),s.child}n=n.sibling}m.tail!==null&&Qe()>_o&&(s.flags|=128,c=!0,Da(m,!1),s.lanes=4194304)}else{if(!c)if(n=au(w),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Da(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ze)return Vt(s),null}else 2*Qe()-m.renderingStartTime>_o&&a!==1073741824&&(s.flags|=128,c=!0,Da(m,!1),s.lanes=4194304);m.isBackwards?(w.sibling=s.child,s.child=w):(a=m.last,a!==null?a.sibling=w:s.child=w,m.last=w)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Qe(),s.sibling=null,a=et.current,Ge(et,c?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return dd(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(hn&1073741824)!==0&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function pE(n,s){switch(Eh(s),s.tag){case 1:return Kt(s.type)&&Yl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return mo(),Je(Gt),Je(Mt),jh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Ph(s),null;case 13:if(Je(et),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));uo()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Je(et),null;case 4:return mo(),null;case 10:return kh(s.type._context),null;case 22:case 23:return dd(),null;case 24:return null;default:return null}}var gu=!1,Lt=!1,gE=typeof WeakSet=="function"?WeakSet:Set,se=null;function go(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,s,c)}else a.current=null}function ed(n,s,a){try{a()}catch(c){it(n,s,c)}}var sg=!1;function yE(n,s){if(dh=xr,n=Vm(),ih(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,I=-1,R=-1,F=0,K=0,Y=n,G=null;t:for(;;){for(var ne;Y!==a||d!==0&&Y.nodeType!==3||(I=w+d),Y!==m||c!==0&&Y.nodeType!==3||(R=w+c),Y.nodeType===3&&(w+=Y.nodeValue.length),(ne=Y.firstChild)!==null;)G=Y,Y=ne;for(;;){if(Y===n)break t;if(G===a&&++F===d&&(I=w),G===m&&++K===c&&(R=w),(ne=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=ne}a=I===-1||R===-1?null:{start:I,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:n,selectionRange:a},xr=!1,se=s;se!==null;)if(s=se,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,se=n;else for(;se!==null;){s=se;try{var oe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,at=oe.memoizedState,O=s.stateNode,P=O.getSnapshotBeforeUpdate(s.elementType===s.type?ae:Pn(s.type,ae),at);O.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var L=s.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){it(s,s.return,X)}if(n=s.sibling,n!==null){n.return=s.return,se=n;break}se=s.return}return oe=sg,sg=!1,oe}function ja(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&ed(s,a,m)}d=d.next}while(d!==c)}}function yu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function td(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function og(n){var s=n.alternate;s!==null&&(n.alternate=null,og(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[nr],delete s[xa],delete s[yh],delete s[Zw],delete s[eE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ag(n){return n.tag===5||n.tag===3||n.tag===4}function lg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ag(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nd(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Kl));else if(c!==4&&(n=n.child,n!==null))for(nd(n,s,a),n=n.sibling;n!==null;)nd(n,s,a),n=n.sibling}function rd(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(rd(n,s,a),n=n.sibling;n!==null;)rd(n,s,a),n=n.sibling}var Nt=null,Dn=!1;function hi(n,s,a){for(a=a.child;a!==null;)ug(n,s,a),a=a.sibling}function ug(n,s,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Gi,a)}catch{}switch(a.tag){case 5:Lt||go(a,s);case 6:var c=Nt,d=Dn;Nt=null,hi(n,s,a),Nt=c,Dn=d,Nt!==null&&(Dn?(n=Nt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(Dn?(n=Nt,a=a.stateNode,n.nodeType===8?gh(n.parentNode,a):n.nodeType===1&&gh(n,a),ti(n)):gh(Nt,a.stateNode));break;case 4:c=Nt,d=Dn,Nt=a.stateNode.containerInfo,Dn=!0,hi(n,s,a),Nt=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&ed(a,s,w),d=d.next}while(d!==c)}hi(n,s,a);break;case 1:if(!Lt&&(go(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){it(a,s,I)}hi(n,s,a);break;case 21:hi(n,s,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,hi(n,s,a),Lt=c):hi(n,s,a);break;default:hi(n,s,a)}}function cg(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new gE),s.forEach(function(c){var d=SE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function jn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,w=s,I=w;e:for(;I!==null;){switch(I.tag){case 5:Nt=I.stateNode,Dn=!1;break e;case 3:Nt=I.stateNode.containerInfo,Dn=!0;break e;case 4:Nt=I.stateNode.containerInfo,Dn=!0;break e}I=I.return}if(Nt===null)throw Error(t(160));ug(m,w,d),Nt=null,Dn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){it(d,s,F)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)hg(s,n),s=s.sibling}function hg(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(s,n),sr(n),c&4){try{ja(3,n,n.return),yu(3,n)}catch(ae){it(n,n.return,ae)}try{ja(5,n,n.return)}catch(ae){it(n,n.return,ae)}}break;case 1:jn(s,n),sr(n),c&512&&a!==null&&go(a,a.return);break;case 5:if(jn(s,n),sr(n),c&512&&a!==null&&go(a,a.return),n.flags&32){var d=n.stateNode;try{Bi(d,"")}catch(ae){it(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,I=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Ds(d,m),Os(I,w);var F=Os(I,m);for(w=0;w<R.length;w+=2){var K=R[w],Y=R[w+1];K==="style"?Ms(d,Y):K==="dangerouslySetInnerHTML"?El(d,Y):K==="children"?Bi(d,Y):de(d,K,Y,F)}switch(I){case"input":zi(d,m);break;case"textarea":wl(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?Sn(d,!!m.multiple,ne,!1):G!==!!m.multiple&&(m.defaultValue!=null?Sn(d,!!m.multiple,m.defaultValue,!0):Sn(d,!!m.multiple,m.multiple?[]:"",!1))}d[xa]=m}catch(ae){it(n,n.return,ae)}}break;case 6:if(jn(s,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ae){it(n,n.return,ae)}}break;case 3:if(jn(s,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ti(s.containerInfo)}catch(ae){it(n,n.return,ae)}break;case 4:jn(s,n),sr(n);break;case 13:jn(s,n),sr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(od=Qe())),c&4&&cg(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||K,jn(s,n),Lt=F):jn(s,n),sr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(Y=se=K;se!==null;){switch(G=se,ne=G.child,G.tag){case 0:case 11:case 14:case 15:ja(4,G,G.return);break;case 1:go(G,G.return);var oe=G.stateNode;if(typeof oe.componentWillUnmount=="function"){c=G,a=G.return;try{s=c,oe.props=s.memoizedProps,oe.state=s.memoizedState,oe.componentWillUnmount()}catch(ae){it(c,a,ae)}}break;case 5:go(G,G.return);break;case 22:if(G.memoizedState!==null){mg(Y);continue}}ne!==null?(ne.return=G,se=ne):mg(Y)}K=K.sibling}e:for(K=null,Y=n;;){if(Y.tag===5){if(K===null){K=Y;try{d=Y.stateNode,F?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Y.stateNode,R=Y.memoizedProps.style,w=R!=null&&R.hasOwnProperty("display")?R.display:null,I.style.display=Wr("display",w))}catch(ae){it(n,n.return,ae)}}}else if(Y.tag===6){if(K===null)try{Y.stateNode.nodeValue=F?"":Y.memoizedProps}catch(ae){it(n,n.return,ae)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;K===Y&&(K=null),Y=Y.return}K===Y&&(K=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:jn(s,n),sr(n),c&4&&cg(n);break;case 21:break;default:jn(s,n),sr(n)}}function sr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(ag(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Bi(d,""),c.flags&=-33);var m=lg(n);rd(n,m,d);break;case 3:case 4:var w=c.stateNode.containerInfo,I=lg(n);nd(n,I,w);break;default:throw Error(t(161))}}catch(R){it(n,n.return,R)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function _E(n,s,a){se=n,dg(n)}function dg(n,s,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,m=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||gu;if(!w){var I=d.alternate,R=I!==null&&I.memoizedState!==null||Lt;I=gu;var F=Lt;if(gu=w,(Lt=R)&&!F)for(se=d;se!==null;)w=se,R=w.child,w.tag===22&&w.memoizedState!==null?pg(d):R!==null?(R.return=w,se=R):pg(d);for(;m!==null;)se=m,dg(m),m=m.sibling;se=d,gu=I,Lt=F}fg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,se=m):fg(n)}}function fg(n){for(;se!==null;){var s=se;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Lt||yu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Pn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&mp(s,m,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}mp(s,w,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var R=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var F=s.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Y=K.dehydrated;Y!==null&&ti(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||s.flags&512&&td(s)}catch(G){it(s,s.return,G)}}if(s===n){se=null;break}if(a=s.sibling,a!==null){a.return=s.return,se=a;break}se=s.return}}function mg(n){for(;se!==null;){var s=se;if(s===n){se=null;break}var a=s.sibling;if(a!==null){a.return=s.return,se=a;break}se=s.return}}function pg(n){for(;se!==null;){var s=se;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{yu(4,s)}catch(R){it(s,a,R)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(R){it(s,d,R)}}var m=s.return;try{td(s)}catch(R){it(s,m,R)}break;case 5:var w=s.return;try{td(s)}catch(R){it(s,w,R)}}}catch(R){it(s,s.return,R)}if(s===n){se=null;break}var I=s.sibling;if(I!==null){I.return=s.return,se=I;break}se=s.return}}var vE=Math.ceil,_u=J.ReactCurrentDispatcher,id=J.ReactCurrentOwner,En=J.ReactCurrentBatchConfig,Oe=0,xt=null,dt=null,Rt=0,hn=0,yo=oi(0),_t=0,Ma=null,us=0,vu=0,sd=0,Oa=null,Yt=null,od=0,_o=1/0,Dr=null,wu=!1,ad=null,di=null,Eu=!1,fi=null,Tu=0,Va=0,ld=null,xu=-1,Iu=0;function $t(){return(Oe&6)!==0?Qe():xu!==-1?xu:xu=Qe()}function mi(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Rt!==0?Rt&-Rt:nE.transition!==null?(Iu===0&&(Iu=ia()),Iu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Ws(n.type)),n)}function Mn(n,s,a,c){if(50<Va)throw Va=0,ld=null,Error(t(185));Ji(n,a,c),((Oe&2)===0||n!==xt)&&(n===xt&&((Oe&2)===0&&(vu|=a),_t===4&&pi(n,Rt)),Jt(n,c),a===1&&Oe===0&&(s.mode&1)===0&&(_o=Qe()+500,Xl&&li()))}function Jt(n,s){var a=n.callbackNode;Yi(n,s);var c=wr(n,n===xt?Rt:0);if(c===0)a!==null&&Fs(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&Fs(a),s===1)n.tag===0?tE(yg.bind(null,n)):np(yg.bind(null,n)),Jw(function(){(Oe&6)===0&&li()}),a=null;else{switch(Wn(c)){case 1:a=Us;break;case 4:a=ta;break;case 16:a=Wi;break;case 536870912:a=zs;break;default:a=Wi}a=Ag(a,gg.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function gg(n,s){if(xu=-1,Iu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(vo()&&n.callbackNode!==a)return null;var c=wr(n,n===xt?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Au(n,c);else{s=c;var d=Oe;Oe|=2;var m=vg();(xt!==n||Rt!==s)&&(Dr=null,_o=Qe()+500,hs(n,s));do try{TE();break}catch(I){_g(n,I)}while(!0);Sh(),_u.current=m,Oe=d,dt!==null?s=0:(xt=null,Rt=0,s=_t)}if(s!==0){if(s===2&&(d=ra(n),d!==0&&(c=d,s=ud(n,d))),s===1)throw a=Ma,hs(n,0),pi(n,c),Jt(n,Qe()),a;if(s===6)pi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!wE(d)&&(s=Au(n,c),s===2&&(m=ra(n),m!==0&&(c=m,s=ud(n,m))),s===1))throw a=Ma,hs(n,0),pi(n,c),Jt(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ds(n,Yt,Dr);break;case 3:if(pi(n,c),(c&130023424)===c&&(s=od+500-Qe(),10<s)){if(wr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ph(ds.bind(null,n,Yt,Dr),s);break}ds(n,Yt,Dr);break;case 4:if(pi(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var w=31-rn(c);m=1<<w,w=s[w],w>d&&(d=w),c&=~m}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*vE(c/1960))-c,10<c){n.timeoutHandle=ph(ds.bind(null,n,Yt,Dr),c);break}ds(n,Yt,Dr);break;case 5:ds(n,Yt,Dr);break;default:throw Error(t(329))}}}return Jt(n,Qe()),n.callbackNode===a?gg.bind(null,n):null}function ud(n,s){var a=Oa;return n.current.memoizedState.isDehydrated&&(hs(n,s).flags|=256),n=Au(n,s),n!==2&&(s=Yt,Yt=a,s!==null&&cd(s)),n}function cd(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function wE(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!bn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function pi(n,s){for(s&=~sd,s&=~vu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-rn(s),c=1<<a;n[a]=-1,s&=~c}}function yg(n){if((Oe&6)!==0)throw Error(t(327));vo();var s=wr(n,0);if((s&1)===0)return Jt(n,Qe()),null;var a=Au(n,s);if(n.tag!==0&&a===2){var c=ra(n);c!==0&&(s=c,a=ud(n,c))}if(a===1)throw a=Ma,hs(n,0),pi(n,s),Jt(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ds(n,Yt,Dr),Jt(n,Qe()),null}function hd(n,s){var a=Oe;Oe|=1;try{return n(s)}finally{Oe=a,Oe===0&&(_o=Qe()+500,Xl&&li())}}function cs(n){fi!==null&&fi.tag===0&&(Oe&6)===0&&vo();var s=Oe;Oe|=1;var a=En.transition,c=Pe;try{if(En.transition=null,Pe=1,n)return n()}finally{Pe=c,En.transition=a,Oe=s,(Oe&6)===0&&li()}}function dd(){hn=yo.current,Je(yo)}function hs(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Yw(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Eh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Yl();break;case 3:mo(),Je(Gt),Je(Mt),jh();break;case 5:Ph(c);break;case 4:mo();break;case 13:Je(et);break;case 19:Je(et);break;case 10:kh(c.type._context);break;case 22:case 23:dd()}a=a.return}if(xt=n,dt=n=gi(n.current,null),Rt=hn=s,_t=0,Ma=null,sd=vu=us=0,Yt=Oa=null,os!==null){for(s=0;s<os.length;s++)if(a=os[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=d,c.next=w}a.pending=c}os=null}return n}function _g(n,s){do{var a=dt;try{if(Sh(),lu.current=du,uu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}uu=!1}if(ls=0,Tt=yt=tt=null,Ra=!1,ba=0,id.current=null,a===null||a.return===null){_t=1,Ma=s,dt=null;break}e:{var m=n,w=a.return,I=a,R=s;if(s=Rt,I.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,K=I,Y=K.tag;if((K.mode&1)===0&&(Y===0||Y===11||Y===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=Hp(w);if(ne!==null){ne.flags&=-257,qp(ne,w,I,m,s),ne.mode&1&&Bp(m,F,s),s=ne,R=F;var oe=s.updateQueue;if(oe===null){var ae=new Set;ae.add(R),s.updateQueue=ae}else oe.add(R);break e}else{if((s&1)===0){Bp(m,F,s),fd();break e}R=Error(t(426))}}else if(Ze&&I.mode&1){var at=Hp(w);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),qp(at,w,I,m,s),Ih(po(R,I));break e}}m=R=po(R,I),_t!==4&&(_t=2),Oa===null?Oa=[m]:Oa.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var O=Up(m,R,s);fp(m,O);break e;case 1:I=R;var P=m.type,L=m.stateNode;if((m.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(di===null||!di.has(L)))){m.flags|=65536,s&=-s,m.lanes|=s;var X=zp(m,I,s);fp(m,X);break e}}m=m.return}while(m!==null)}Eg(a)}catch(le){s=le,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function vg(){var n=_u.current;return _u.current=du,n===null?du:n}function fd(){(_t===0||_t===3||_t===2)&&(_t=4),xt===null||(us&268435455)===0&&(vu&268435455)===0||pi(xt,Rt)}function Au(n,s){var a=Oe;Oe|=2;var c=vg();(xt!==n||Rt!==s)&&(Dr=null,hs(n,s));do try{EE();break}catch(d){_g(n,d)}while(!0);if(Sh(),Oe=a,_u.current=c,dt!==null)throw Error(t(261));return xt=null,Rt=0,_t}function EE(){for(;dt!==null;)wg(dt)}function TE(){for(;dt!==null&&!$i();)wg(dt)}function wg(n){var s=Ig(n.alternate,n,hn);n.memoizedProps=n.pendingProps,s===null?Eg(n):dt=s,id.current=null}function Eg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=mE(a,s,hn),a!==null){dt=a;return}}else{if(a=pE(a,s),a!==null){a.flags&=32767,dt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,dt=null;return}}if(s=s.sibling,s!==null){dt=s;return}dt=s=n}while(s!==null);_t===0&&(_t=5)}function ds(n,s,a){var c=Pe,d=En.transition;try{En.transition=null,Pe=1,xE(n,s,a,c)}finally{En.transition=d,Pe=c}return null}function xE(n,s,a,c){do vo();while(fi!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Zc(n,m),n===xt&&(dt=xt=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Eu||(Eu=!0,Ag(Wi,function(){return vo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=En.transition,En.transition=null;var w=Pe;Pe=1;var I=Oe;Oe|=4,id.current=null,yE(n,a),hg(a,n),Hw(fh),xr=!!dh,fh=dh=null,n.current=a,_E(a),vr(),Oe=I,Pe=w,En.transition=m}else n.current=a;if(Eu&&(Eu=!1,fi=n,Tu=d),m=n.pendingLanes,m===0&&(di=null),Pl(a.stateNode),Jt(n,Qe()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(wu)throw wu=!1,n=ad,ad=null,n;return(Tu&1)!==0&&n.tag!==0&&vo(),m=n.pendingLanes,(m&1)!==0?n===ld?Va++:(Va=0,ld=n):Va=0,li(),null}function vo(){if(fi!==null){var n=Wn(Tu),s=En.transition,a=Pe;try{if(En.transition=null,Pe=16>n?16:n,fi===null)var c=!1;else{if(n=fi,fi=null,Tu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,se=n.current;se!==null;){var m=se,w=m.child;if((se.flags&16)!==0){var I=m.deletions;if(I!==null){for(var R=0;R<I.length;R++){var F=I[R];for(se=F;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:ja(8,K,m)}var Y=K.child;if(Y!==null)Y.return=K,se=Y;else for(;se!==null;){K=se;var G=K.sibling,ne=K.return;if(og(K),K===F){se=null;break}if(G!==null){G.return=ne,se=G;break}se=ne}}}var oe=m.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var at=ae.sibling;ae.sibling=null,ae=at}while(ae!==null)}}se=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,se=w;else e:for(;se!==null;){if(m=se,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ja(9,m,m.return)}var O=m.sibling;if(O!==null){O.return=m.return,se=O;break e}se=m.return}}var P=n.current;for(se=P;se!==null;){w=se;var L=w.child;if((w.subtreeFlags&2064)!==0&&L!==null)L.return=w,se=L;else e:for(w=P;se!==null;){if(I=se,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:yu(9,I)}}catch(le){it(I,I.return,le)}if(I===w){se=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,se=X;break e}se=I.return}}if(Oe=d,li(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Gi,n)}catch{}c=!0}return c}finally{Pe=a,En.transition=s}}return!1}function Tg(n,s,a){s=po(a,s),s=Up(n,s,1),n=ci(n,s,1),s=$t(),n!==null&&(Ji(n,1,s),Jt(n,s))}function it(n,s,a){if(n.tag===3)Tg(n,n,a);else for(;s!==null;){if(s.tag===3){Tg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){n=po(a,n),n=zp(s,n,1),s=ci(s,n,1),n=$t(),s!==null&&(Ji(s,1,n),Jt(s,n));break}}s=s.return}}function IE(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=$t(),n.pingedLanes|=n.suspendedLanes&a,xt===n&&(Rt&a)===a&&(_t===4||_t===3&&(Rt&130023424)===Rt&&500>Qe()-od?hs(n,0):sd|=a),Jt(n,s)}function xg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Xr,Xr<<=1,(Xr&130023424)===0&&(Xr=4194304)));var a=$t();n=br(n,s),n!==null&&(Ji(n,s,a),Jt(n,a))}function AE(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),xg(n,a)}function SE(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),xg(n,a)}var Ig;Ig=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Gt.current)Qt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Qt=!1,fE(n,s,a);Qt=(n.flags&131072)!==0}else Qt=!1,Ze&&(s.flags&1048576)!==0&&rp(s,eu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;pu(n,s),n=s.pendingProps;var d=oo(s,Mt.current);fo(s,a),d=Vh(null,s,c,n,d,a);var m=Lh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Kt(c)?(m=!0,Jl(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,bh(s),d.updater=fu,s.stateNode=d,d._reactInternals=s,qh(s,c,n,a),s=Kh(null,s,c,!0,m,a)):(s.tag=0,Ze&&m&&wh(s),qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(pu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=NE(c),n=Pn(c,n),d){case 0:s=Gh(null,s,c,n,a);break e;case 1:s=Yp(null,s,c,n,a);break e;case 11:s=$p(null,s,c,n,a);break e;case 14:s=Wp(null,s,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),Gh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),Yp(n,s,c,d,a);case 3:e:{if(Jp(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,dp(n,s),ou(s,c,null,a);var w=s.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=po(Error(t(423)),s),s=Xp(n,s,c,a,d);break e}else if(c!==d){d=po(Error(t(424)),s),s=Xp(n,s,c,a,d);break e}else for(cn=si(s.stateNode.containerInfo.firstChild),un=s,Ze=!0,Cn=null,a=cp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),c===d){s=Pr(n,s,a);break e}qt(n,s,c,a)}s=s.child}return s;case 5:return pp(s),n===null&&xh(s),c=s.type,d=s.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,mh(c,d)?w=null:m!==null&&mh(c,m)&&(s.flags|=32),Qp(n,s),qt(n,s,w,a),s.child;case 6:return n===null&&xh(s),null;case 13:return Zp(n,s,a);case 4:return Ch(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=co(s,null,c,a):qt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),$p(n,s,c,d,a);case 7:return qt(n,s,s.pendingProps,a),s.child;case 8:return qt(n,s,s.pendingProps.children,a),s.child;case 12:return qt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,w=d.value,Ge(ru,c._currentValue),c._currentValue=w,m!==null)if(bn(m.value,w)){if(m.children===d.children&&!Gt.current){s=Pr(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var R=I.firstContext;R!==null;){if(R.context===c){if(m.tag===1){R=Cr(-1,a&-a),R.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?R.next=R:(R.next=K.next,K.next=R),F.pending=R}}m.lanes|=a,R=m.alternate,R!==null&&(R.lanes|=a),Nh(m.return,a,s),I.lanes|=a;break}R=R.next}}else if(m.tag===10)w=m.type===s.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),Nh(w,a,s),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===s){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}qt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,fo(s,a),d=vn(d),c=c(d),s.flags|=1,qt(n,s,c,a),s.child;case 14:return c=s.type,d=Pn(c,s.pendingProps),d=Pn(c.type,d),Wp(n,s,c,d,a);case 15:return Gp(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Pn(c,d),pu(n,s),s.tag=1,Kt(c)?(n=!0,Jl(s)):n=!1,fo(s,a),Lp(s,c,d),qh(s,c,d,a),Kh(null,s,c,!0,n,a);case 19:return tg(n,s,a);case 22:return Kp(n,s,a)}throw Error(t(156,s.tag))};function Ag(n,s){return ea(n,s)}function kE(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,s,a,c){return new kE(n,s,a,c)}function md(n){return n=n.prototype,!(!n||!n.isReactComponent)}function NE(n){if(typeof n=="function")return md(n)?1:0;if(n!=null){if(n=n.$$typeof,n===M)return 11;if(n===Et)return 14}return 2}function gi(n,s){var a=n.alternate;return a===null?(a=Tn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Su(n,s,a,c,d,m){var w=2;if(c=n,typeof n=="function")md(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case b:return fs(a.children,d,m,s);case A:w=8,d|=8;break;case N:return n=Tn(12,a,s,d|2),n.elementType=N,n.lanes=m,n;case S:return n=Tn(13,a,s,d),n.elementType=S,n.lanes=m,n;case We:return n=Tn(19,a,s,d),n.elementType=We,n.lanes=m,n;case Xe:return ku(a,d,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:w=10;break e;case C:w=9;break e;case M:w=11;break e;case Et:w=14;break e;case Dt:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=Tn(w,a,s,d),s.elementType=n,s.type=c,s.lanes=m,s}function fs(n,s,a,c){return n=Tn(7,n,c,s),n.lanes=a,n}function ku(n,s,a,c){return n=Tn(22,n,c,s),n.elementType=Xe,n.lanes=a,n.stateNode={isHidden:!1},n}function pd(n,s,a){return n=Tn(6,n,null,s),n.lanes=a,n}function gd(n,s,a){return s=Tn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function RE(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function yd(n,s,a,c,d,m,w,I,R){return n=new RE(n,s,a,I,R),s===1?(s=1,m===!0&&(s|=8)):s=0,m=Tn(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(m),n}function bE(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function Sg(n){if(!n)return ai;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Kt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return ep(n,a,s)}return s}function kg(n,s,a,c,d,m,w,I,R){return n=yd(a,c,!0,n,d,m,w,I,R),n.context=Sg(null),a=n.current,c=$t(),d=mi(a),m=Cr(c,d),m.callback=s??null,ci(a,m,d),n.current.lanes=d,Ji(n,d,c),Jt(n,c),n}function Nu(n,s,a,c){var d=s.current,m=$t(),w=mi(d);return a=Sg(a),s.context===null?s.context=a:s.pendingContext=a,s=Cr(m,w),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ci(d,s,w),n!==null&&(Mn(n,d,w,m),su(n,d,w)),w}function Ru(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ng(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function _d(n,s){Ng(n,s),(n=n.alternate)&&Ng(n,s)}function CE(){return null}var Rg=typeof reportError=="function"?reportError:function(n){console.error(n)};function vd(n){this._internalRoot=n}bu.prototype.render=vd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Nu(n,s,null,null)},bu.prototype.unmount=vd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;cs(function(){Nu(null,n,null,null)}),s[Sr]=null}};function bu(n){this._internalRoot=n}bu.prototype.unstable_scheduleHydration=function(n){if(n){var s=ua();n={blockedOn:null,target:n,priority:s};for(var a=0;a<sn.length&&s!==0&&s<sn[a].priority;a++);sn.splice(a,0,n),a===0&&qs(n)}};function wd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bg(){}function PE(n,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var F=Ru(w);m.call(F)}}var w=kg(s,c,n,0,null,!1,!1,"",bg);return n._reactRootContainer=w,n[Sr]=w.current,Ea(n.nodeType===8?n.parentNode:n),cs(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=Ru(R);I.call(F)}}var R=yd(n,0,!1,null,null,!1,!1,"",bg);return n._reactRootContainer=R,n[Sr]=R.current,Ea(n.nodeType===8?n.parentNode:n),cs(function(){Nu(s,R,a,c)}),R}function Pu(n,s,a,c,d){var m=a._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var I=d;d=function(){var R=Ru(w);I.call(R)}}Nu(s,w,n,d)}else w=PE(a,s,n,d,c);return Ru(w)}aa=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Le(s.pendingLanes);a!==0&&(oa(s,a|1),Jt(s,Qe()),(Oe&6)===0&&(_o=Qe()+500,li()))}break;case 13:cs(function(){var c=br(n,1);if(c!==null){var d=$t();Mn(c,n,1,d)}}),_d(n,1)}},Bs=function(n){if(n.tag===13){var s=br(n,134217728);if(s!==null){var a=$t();Mn(s,n,134217728,a)}_d(n,134217728)}},la=function(n){if(n.tag===13){var s=mi(n),a=br(n,s);if(a!==null){var c=$t();Mn(a,n,s,c)}_d(n,s)}},ua=function(){return Pe},ca=function(n,s){var a=Pe;try{return Pe=n,s()}finally{Pe=a}},gr=function(n,s,a){switch(s){case"input":if(zi(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Ql(c);if(!d)throw Error(t(90));$o(c),zi(c,d)}}}break;case"textarea":wl(n,a);break;case"select":s=a.value,s!=null&&Sn(n,!!a.multiple,s,!1)}},xl=hd,Il=cs;var DE={usingClientEntryPoint:!1,Events:[Ia,io,Ql,Kr,Qr,hd]},La={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jE={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cl(n),n===null?null:n.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||CE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Du.isDisabled&&Du.supportsFiber)try{Gi=Du.inject(jE),nn=Du}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DE,Xt.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(s))throw Error(t(200));return bE(n,s,null,a)},Xt.createRoot=function(n,s){if(!wd(n))throw Error(t(299));var a=!1,c="",d=Rg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=yd(n,1,!1,null,null,a,!1,c,d),n[Sr]=s.current,Ea(n.nodeType===8?n.parentNode:n),new vd(s)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Cl(s),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return cs(n)},Xt.hydrate=function(n,s,a){if(!Cu(s))throw Error(t(200));return Pu(null,n,s,!0,a)},Xt.hydrateRoot=function(n,s,a){if(!wd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",w=Rg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=kg(s,null,n,1,a??null,d,!1,m,w),n[Sr]=s.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new bu(s)},Xt.render=function(n,s,a){if(!Cu(s))throw Error(t(200));return Pu(null,n,s,!1,a)},Xt.unmountComponentAtNode=function(n){if(!Cu(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){Pu(null,null,n,!1,function(){n._reactRootContainer=null,n[Sr]=null})}),!0):!1},Xt.unstable_batchedUpdates=hd,Xt.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Cu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pu(n,s,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var Lg;function BE(){if(Lg)return xd.exports;Lg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xd.exports=zE(),xd.exports}var Fg;function HE(){if(Fg)return ju;Fg=1;var r=BE();return ju.createRoot=r.createRoot,ju.hydrateRoot=r.hydrateRoot,ju}var qE=HE(),Be=wf();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),WE=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),Ug=r=>{const e=WE(r);return e.charAt(0).toUpperCase()+e.slice(1)},C0=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var GE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=Be.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...f},y)=>Be.createElement("svg",{ref:y,...GE,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:C0("lucide",o),...f},[...h.map(([v,T])=>Be.createElement(v,T)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(r,e)=>{const t=Be.forwardRef(({className:i,...o},l)=>Be.createElement(KE,{ref:l,iconNode:e,className:C0(`lucide-${$E(Ug(r))}`,`lucide-${r}`,i),...o}));return t.displayName=Ug(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ac=Se("arrow-right",QE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],JE=Se("award",YE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ti=Se("book-open",XE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Mu=Se("building-2",ZE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],t1=Se("calendar",e1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],r1=Se("clock",n1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Ou=Se("droplet",i1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],o1=Se("eye-off",s1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],l1=Se("eye",a1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],c1=Se("facebook",u1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],d1=Se("graduation-cap",h1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Ef=Se("heart",f1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],p1=Se("instagram",m1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],y1=Se("languages",g1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],Vu=Se("laptop",_1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],Bd=Se("loader",v1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],E1=Se("lock",w1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],x1=Se("log-in",T1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],A1=Se("log-out",I1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],P0=Se("mail",S1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],N1=Se("map-pin",k1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],b1=Se("menu",R1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],P1=Se("message-circle",C1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Hd=Se("phone",D1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],M1=Se("plus",j1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],V1=Se("quote",O1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],F1=Se("save",L1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],qd=Se("send",U1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],B1=Se("shield-check",z1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],q1=Se("shield",H1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],W1=Se("square-pen",$1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],K1=Se("trash-2",G1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Y1=Se("trending-up",Q1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],X1=Se("twitter",J1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],zg=Se("user",Z1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Po=Se("users",eT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],D0=Se("x",tT);function nT({currentLanguage:r,onLanguageChange:e}){const[t,i]=Be.useState(!1),[o,l]=Be.useState(!1),h=[{code:"en",name:"English",flag:"🇬🇧"},{code:"am",name:"አማርኛ",flag:"🇪🇹"},{code:"om",name:"Afaan Oromoo",flag:"🇪🇹"},{code:"ar",name:"العربية",flag:"🇸🇦"}],f={en:{nav:{home:"Home",about:"About",sectors:"Sectors",leadership:"Leadership",volunteer:"Volunteer"},donate:"Donate Now",selectLang:"Select Language"},am:{nav:{home:"መነሻ",about:"ስለ እኛ",sectors:"ዘርፎች",leadership:"አመራር",volunteer:"በጎ ፈቃደኝነት"},donate:"አሁን ይለግሱ",selectLang:"ቋንቋ ይምረጡ"},om:{nav:{home:"Fuula Dura",about:"Waa'ee Keenya",sectors:"Dameewwan",leadership:"Hogganinsa",volunteer:"Arjooma"},donate:"Amma Arjoomi",selectLang:"Afaan Filadhu"},ar:{nav:{home:"الرئيسية",about:"عننا",sectors:"القطاعات",leadership:"القيادة",volunteer:"تطوع"},donate:"تبرع الآن",selectLang:"اختر اللغة"}},y=f[r]||f.en,v=h.find(x=>x.code===r)||h[0],T=[{label:y.nav.home,href:"#hero"},{label:y.nav.about,href:"#about"},{label:y.nav.sectors,href:"#sectors"},{label:y.nav.leadership,href:"#leadership"},{label:y.nav.volunteer,href:"#volunteer"}];return g.jsx("nav",{className:"sticky top-0 z-50 glass shadow-md",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"flex justify-between items-center h-20",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-[#004d40] to-[#00695c] rounded-lg flex items-center justify-center",children:g.jsx("span",{className:"text-white text-xl font-bold",children:"ح"})}),g.jsx("span",{className:"text-2xl font-bold text-[#004d40]",children:"Humsj"})]}),g.jsx("div",{className:"hidden md:flex items-center gap-8",children:T.map(x=>g.jsx("a",{href:x.href,className:"text-gray-700 hover:text-[#004d40] transition-colors font-medium px-1",children:x.label},x.href))}),g.jsxs("div",{className:"hidden md:flex items-center gap-4",children:[g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>l(!o),className:"flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:border-[#004d40] transition-colors",title:y.selectLang,children:[g.jsx("span",{children:v.flag}),g.jsx("span",{className:"text-sm font-medium",children:v.name})]}),o&&g.jsx("div",{className:"absolute right-0 mt-2 w-48 glass-card rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2",children:h.map(x=>g.jsxs("button",{onClick:()=>{e(x.code),l(!1)},className:`w-full flex items-center gap-3 px-4 py-2 hover:bg-[#004d40]/5 transition-colors ${r===x.code?"bg-[#004d40]/10 text-[#004d40] font-semibold":"text-gray-700"}`,children:[g.jsx("span",{children:x.flag}),g.jsx("span",{className:"text-sm",children:x.name})]},x.code))})]}),g.jsx("a",{href:"#charity",children:g.jsx("button",{className:"btn-primary px-6 py-2.5 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all",children:y.donate})})]}),g.jsx("button",{className:"md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors",onClick:()=>i(!t),"aria-label":"Toggle menu",children:t?g.jsx(D0,{size:24}):g.jsx(b1,{size:24})})]}),g.jsx("div",{className:`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${t?"max-h-[600px] opacity-100":"max-h-0 opacity-0"}`,children:g.jsxs("div",{className:"py-6 border-t border-[#004d40]/10 flex flex-col gap-6",children:[g.jsx("div",{className:"flex flex-col gap-4",children:T.map(x=>g.jsx("a",{href:x.href,onClick:()=>i(!1),className:"text-lg font-medium text-gray-700 hover:text-[#004d40] px-2 py-1 transition-colors",children:x.label},x.href))}),g.jsxs("div",{className:"pt-6 border-t border-[#004d40]/10",children:[g.jsx("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 px-2",children:y.selectLang}),g.jsx("div",{className:"grid grid-cols-2 gap-3",children:h.map(x=>g.jsxs("button",{onClick:()=>{e(x.code),i(!1)},className:`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${r===x.code?"border-[#004d40] bg-[#004d40]/5 text-[#004d40] font-semibold shadow-sm":"border-gray-200 text-gray-600 hover:border-gray-300"}`,children:[g.jsx("span",{className:"text-xl",children:x.flag}),g.jsx("span",{className:"text-sm",children:x.name})]},x.code))})]}),g.jsx("a",{href:"#charity",className:"block w-full",children:g.jsx("button",{className:"w-full py-4 bg-[#FFD700] text-[#002B24] rounded-xl font-bold shadow-lg mt-2 active:scale-[0.98] transition-all",children:y.donate})})]})})]})})}function rT({language:r}){const e={en:{title:"HUMSJ External Affairs",subtitle:"Empowering the Ethiopian Ummah Through Organized Service",description:"The External Affairs sector of HUMSJ (Haramaya Muslim Student Jema'a) coordinates three vital initiatives: Qirat, Charity, and Dawa. We leverage technology and modern organizational methods while staying true to Islamic values.",stats:{sectors:"Active Sectors",families:"Families Helped",students:"Students Enrolled",transparency:"Transparency"},learnMore:"Learn More",contactUs:"Contact Us"},am:{title:"የሁምስጅ የውጭ ጉዳይ",subtitle:"የኢትዮጵያ ኡማህን በተደራጀ አገልግሎት ማብቃት",description:"የሁምስጅ (የሐረማያ የሙስሊም ተማሪዎች ጀማዓ) የውጭ ጉዳይ ዘርፍ ሦስት ወሳኝ ተነሳሽነቶችን ያስተባብራል፡ ቂራት፣ በጎ አድራጎት እና ዳዋ። ለእስላማዊ እሴቶች ታማኝ እያለን ቴክኖሎጂን እና ዘመናዊ የአደረጃጀት ዘዴዎችን እንጠቀማለን።",stats:{sectors:"ንቁ ዘርፎች",families:"የተረዱ ቤተሰቦች",students:"የተመዘገቡ ተማሪዎች",transparency:"ግልጽነት"},learnMore:"ተጨማሪ ይወቁ",contactUs:"ያግኙን"},om:{title:"Dhimma Alaa HUMSJ",subtitle:"Ummaata Itoophiyaa Tajaajila Qindaa'aadhaan Humneessuu",description:"Dameen Dhimma Alaa HUMSJ (Haramaya Muslim Student Jema'a) tajaajiloota sadii qindeessa: Qiraataa, Tola Ooltummaa fi Da'awaa. Nutinis gatiiwwan Islaamaatti osoo amanamnuu teekinooloojii fi mallawwan hogganinsa ammayyaa ni fayyadamna.",stats:{sectors:"Dameewwan Akatiivii",families:"Maatiiwwan Gargaaraman",students:"Barattoota Galmaa'an",transparency:"Iftoomina"},learnMore:"Bal'inaan Baradhu",contactUs:"Nu Quunnamaa"},ar:{title:"الشؤون الخارجية لـ HUMSJ",subtitle:"تمكين الأمة الإثيوبية من خلال خدمة منظمة",description:"ينسق قطاع الشؤون الخارجية في HUMSJ ثلاثة مبادرات حيوية: القراءات، والأعمال الخيرية، والدعوة. نحن نستفيد من التكنولوجيا وأساليب التنظيم الحديثة مع الالتزام بالقيم الإسلامية.",stats:{sectors:"القطاعات النشطة",families:"الأسر المساعدة",students:"الطلاب المسجلون",transparency:"الشفافية"},learnMore:"تعلم المزيد",contactUs:"اتصل بنا"}},t=e[r]||e.en;return g.jsxs("section",{id:"hero",className:"relative py-28 bg-[#002B24] text-white overflow-hidden islamic-pattern scroll-mt-20",children:[g.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden",children:[g.jsx("div",{className:"absolute -top-24 -left-24 w-96 h-96 bg-[#004d40] rounded-full blur-[120px] opacity-30"}),g.jsx("div",{className:"absolute -bottom-24 -right-24 w-96 h-96 bg-[#C5A021] rounded-full blur-[120px] opacity-10"})]}),g.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center mb-20 max-w-4xl mx-auto",children:[g.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white drop-shadow-sm",children:t.title}),g.jsx("p",{className:"text-2xl md:text-3xl font-semibold mb-8 text-[#FFD700] tracking-wide uppercase",children:t.subtitle}),g.jsx("p",{className:"text-lg md:text-xl text-gray-300 leading-relaxed font-light",children:t.description})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20",children:[{icon:B1,value:"3",label:t.stats.sectors},{icon:Ef,value:"500+",label:t.stats.families},{icon:d1,value:"200+",label:t.stats.students},{icon:Po,value:"100%",label:t.stats.transparency}].map((i,o)=>g.jsxs("div",{className:"glass-card hover:bg-white/20 transition-all duration-300 rounded-3xl p-8 group flex flex-col items-center text-center",children:[g.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 group-hover:bg-[#FFD700]/20 transition-all duration-300",children:g.jsx(i.icon,{className:"text-[#FFD700] w-7 h-7"})}),g.jsx("div",{className:"text-5xl font-bold text-white mb-2 tracking-tighter",children:i.value}),g.jsx("div",{className:"text-gray-400 font-medium uppercase tracking-widest text-xs",children:i.label})]},o))}),g.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 justify-center items-center",children:[g.jsx("a",{href:"#sectors",className:"w-full sm:w-auto",children:g.jsxs("button",{className:"w-full sm:min-w-[240px] px-10 py-5 bg-[#FFD700] text-[#002B24] rounded-2xl font-bold hover:bg-[#E6C300] transition-all hover:scale-[1.02] shadow-xl shadow-[#FFD700]/10 flex items-center justify-center gap-3",children:[t.learnMore,g.jsx(Ac,{size:20})]})}),g.jsx("a",{href:"#leadership",className:"w-full sm:w-auto",children:g.jsx("button",{className:"w-full sm:min-w-[240px] px-10 py-5 bg-white/5 backdrop-blur-md text-white rounded-2xl font-bold hover:bg-white/10 transition-all hover:scale-[1.02] border border-white/20",children:t.contactUs})})]})]})]})}const mt={generalAmir:{name:"Musab Abdurahman",nameAm:"ሙሳብ አብዱራህማን",nameOm:"Musaab Abdurahmaan",nameAr:"مصعب عبد الرحمن",position:"General Amir - HUMSJ",positionAm:"ጠቅላይ አሚር - ሁምስጅ",positionOm:"Amira Waliigalaa - HUMSJ",positionAr:"الأمير العام - HUMSJ",phone:"+251 925 237 453",telegram:"@musab_humsj",email:"musab@humsjcharity.org",photo:"/assets/leadership/musab.jpg"},externalAffairsAmir:{name:"Mehadi Jemal",nameAm:"መሃዲ ጀማል",nameOm:"Mahaadii Jimaal",nameAr:"مهدي جمال",position:"External Affairs Amir",positionAm:"የውጭ ጉዳይ አሚር",positionOm:"Amira Dhimma Alaa",positionAr:"أمير الشؤون الخارجية",phone:"+251 938 979 492",telegram:"@mehadi_humsj",email:"mehadi@humsjcharity.org",photo:"/assets/leadership/mehadi.jpg"},sectors:{qirat:{name:"Qirat Sector",nameAm:"የቂራት ዘርፍ",nameOm:"Damee Qiraataa",nameAr:"قطاع القراءات",amir:{name:"Mohammed Ahmadu",nameAm:"መሀመድ አህማዱ",nameOm:"Mohammad Ahmaduu",nameAr:"محمد أحمدو",position:"Qirat Sector Amir",positionAm:"የቂራት ዘርፍ አሚር",positionOm:"Amira Damee Qiraataa",positionAr:"أمير قطاع القراءات",phone:"+251 929 230 120",telegram:"@mohammed_qirat",email:"qirat@humsjcharity.org",photo:"/assets/leadership/mohammed.jpg"},description:{en:"The Qirat Sector focuses on Quranic education, memorization programs, and tajweed training. We organize competitions, provide resources for students, and support Quranic learning initiatives across Ethiopian Muslim communities.",am:"የቂራት ዘርፍ በቁርአን ትምህርት፣ በማስታወስ ፕሮግራሞች እና በታጅዊድ ስልጠና ላይ ያተኩራል። ውድድሮችን እናዘጋጃለን፣ ለተማሪዎች ግብዓቶችን እናቀርባለን እና በኢትዮጵያ የሙስሊም ማህበረሰቦች ውስጥ የቁርአን ትምህርት ተነሳሽነቶችን እንደግፋለን።",om:"Dameen Qiraataa barnoota Qur'aanaa, sagantaawwan qomatti qabachuu fi leenjii tajwiidii irratti xiyyeeffata. Nutinis dorgommiiwwan ni qindeessina, barattootaaf madda ni kennina, akkasumas hawaasa Muslimaa Itoophiyaa keessatti dhimma barumsa Qur'aanaa ni deggarra.",ar:"يركز قطاع القراءات على تعليم القرآن الكريم، وبرامج الحفظ، والتدريب على التجويد. ننظم المسابقات، ونوفر الموارد للطلاب، وندعم مبادرات تعلم القرآن عبر المجتمعات الإسلامية الإثيوبية."},activities:{en:["Quran Memorization Programs","Tajweed Training Sessions","Annual Qirat Competitions","Student Registration & Support","Resource Distribution"],am:["የቁርአን ማስታወስ ፕሮግራሞች","የታጅዊድ ስልጠና ክፍለ ጊዜዎች","ዓመታዊ የቂራት ውድድሮች","የተማሪ ምዝገባ እና ድጋፍ","የግብዓት ስርጭት"],om:["Sagantaa Qur'aana Qomatti Qabachuu","Leenjii Tajwiidii","Dorgommii Qiraataa Waggaa","Galmee fi Deggarsa Barattootaa","Raabsa Madda Barnootaa"],ar:["برامج حفظ القرآن","دورات تدريب التجويد","مسابقات القراءات السنوية","تسجيل ودعم الطلاب","توزيع الموارد"]}},charity:{name:"Charity Sector",nameAm:"የበጎ አድራጎት ዘርፍ",nameOm:"Damee Tola Ooltummaa",nameAr:"قطاع الأعمال الخيرية",amir:{name:"Muhajir Mohammed",nameAm:"ሙሃጂር መሀመድ",nameOm:"Muhaajir Mohammad",nameAr:"مهاجر محمد",position:"Charity Sector Amir",positionAm:"የበጎ አድራጎት ዘርፍ አሚር",positionOm:"Amira Damee Tola Ooltummaa",positionAr:"أمير قطاع الأعمال الخيرية",phone:"+251 964 544 620",telegram:"@muhajir_charity",email:"charity@humsjcharity.org",photo:"/assets/leadership/muhajir.jpg"},description:{en:"The Charity Sector manages donation collection, distribution of aid to families in need, and humanitarian projects. We ensure transparency in all financial transactions and provide support to vulnerable communities.",am:"የበጎ አድራጎት ዘርፍ የልገሳ አሰባሰብን፣ ለተቸገሩ ቤተሰቦች እርዳታ ማከፋፈልን እና የሰብአዊ ፕሮጀክቶችን ያስተዳድራል። በሁሉም የገንዘብ ግብይቶች ውስጥ ግልጽነትን እናረጋግጣለን እና ለተጋላጭ ማህበረሰቦች ድጋፍ እንሰጣለን።",om:"Dameen Tola Ooltummaa walitti qaba maallaqaa, raabsa deggarsa maatii harka qalleeyyiif fi pirojektoota namoomaa ni hoggana. Nutinis bifa iftoomina qabuun raawwii maallaqaa ni mirkaneessina, hawaasa deggarsa barbaadaniifis tajaajila ni kennina.",ar:"يدير قطاع الأعمال الخيرية جمع التبرعات، وتوزيع المساعدات على الأسر المحتاجة، والمشاريع الإنسانية. نحن نضمن الشفافية في جميع المعاملات المالية ونقدم الدعم للمجتمعات الضعيفة."},activities:{en:["Donation Management","Aid Distribution Tracking","Water Well Projects","Food Distribution Programs","Emergency Relief Support"],am:["የልገሳ አስተዳደር","የእርዳታ ስርጭት ክትትል","የውሃ ጉድጓድ ፕሮጀክቶች","የምግብ ስርጭት ፕሮግራሞች","የአደጋ ጊዜ እርዳታ ድጋፍ"],om:["Hogganinsa Arjoomaa","Hordoffii Raabsa Deggarsaa","Pirojektoota Eela Bishaanii","Sagantaa Raabsa Nyaataa","Deggarsa Ariifachisaa"],ar:["إدارة التبرعات","تتبع توزيع المساعدات","مشاريع حفر الآبار","برامج توزيع الغذاء","دعم الإغاثة العاجلة"]}},dawa:{name:"Dawa Sector",nameAm:"የዳዋ ዘርፍ",nameOm:"Damee Da'awaa",nameAr:"قطاع الدعوة",amir:{name:"Ramadan Aliyii",nameAm:"ረመዳን አሊዪ",nameOm:"Ramadaaan Aliyyii",nameAr:"رمضان علي",position:"Dawa Sector Amir",positionAm:"የዳዋ ዘርፍ አሚር",positionOm:"Amira Damee Da'awaa",positionAr:"أمير قطاع الدعوة",phone:"+251 975 309 779",telegram:"@ramadan_dawa",email:"dawa@humsjcharity.org",photo:"/assets/leadership/ramadan.jpg"},description:{en:"The Dawa Sector focuses on Islamic education, community outreach, and spreading the message of Islam. We organize educational programs, lectures, and community events to strengthen faith and knowledge.",am:"የዳዋ ዘርፍ በእስላማዊ ትምህርት፣ በማህበረሰብ ተደራሽነት እና የእስልምና መልእክት በማሰራጨት ላይ ያተኩራል። እምነትን እና እውቀትን ለማጠናከር ትምህርታዊ ፕሮግራሞችን፣ ንግግሮችን እና የማህበረሰብ ዝግጅቶችን እናዘጋጃለን።",om:"Dameen Da'awaa barnoota Islaamaa, xiyyeeffannoo hawaasaa fi ergaa Islaamaa babal'isuu irratti xiyyeeffata. Nutinis sagantaawwan barnootaa, gorsa adda addaa fi qophiiwwan hawaasaa iimaana fi beekumsa cimsuudhaaf ni qindeessina.",ar:"يركز قطاع الدعوة على التعليم الإسلامي، والتواصل المجتمعي، ونشر رسالة الإسلام. ننظم البرامج التعليمية والمحاضرات والفعاليات المجتمعية لتعزيز الإيمان والمعرفة."},activities:{en:["Islamic Education Programs","Community Lectures & Seminars","Youth Mentorship","Interfaith Dialogue","Educational Resource Distribution"],am:["የእስላማዊ ትምህርት ፕሮግራሞች","የማህበረሰብ ንግግሮች እና ሴሚናሮች","የወጣቶች መሪነት","የሃይማኖቶች ውይይት","የትምህርት ግብዓቶች ስርጭት"],om:["Sagantaa Barnoota Islaamaa","Gorsa fi Gumii Hawaasaa","Qajeelfama Dargaggootaa","Marii Amantiiwwan Gidduu","Raabsa Madda Barnootaa"],ar:["برامج التعليم الإسلامي","المحاضرات والندوات المجتمعية","توجيه الشباب","الحوار بين الأديان","توزيع الموارد التعليمية"]}}}};function iT({language:r}){const e={en:{title:"Our Three Sectors",subtitle:"Organized service through specialized initiatives",amirLabel:"Amir",cta:{learnMore:"Learn More",donateNow:"Donate Now",getInvolved:"Get Involved"}},am:{title:"የእኛ ሦስት ዘርፎች",subtitle:"በልዩ ተነሳሽነቶች የተደራጀ አገልግሎት",amirLabel:"አሚር",cta:{learnMore:"ተጨማሪ ይወቁ",donateNow:"አሁን ይለግሱ",getInvolved:"ይሳተፉ"}},om:{title:"Dameewwan Keenya Sadan",subtitle:"Hojii qindaa'aa kutaalee dhimma addaa irratti xiyyeeffataniin",amirLabel:"Amira",cta:{learnMore:"Bal'inaan Baradhu",donateNow:"Amma Arjoomi",getInvolved:"Hirmaadhu"}},ar:{title:"قطاعاتنا الثلاثة",subtitle:"خدمة منظمة من خلال مبادرات متخصصة",amirLabel:"الأمير",cta:{learnMore:"تعلم المزيد",donateNow:"تبرع الآن",getInvolved:"شارك معنا"}}},t=e[r]||e.en,i=(l,h)=>{const f=l[r];if(f)return f;const y=r==="en"?h:r==="am"?`${h}Am`:r==="om"?`${h}Om`:r==="ar"?`${h}Ar`:h;return l[y]||l[h]},o=[{name:i(mt.sectors.qirat,"name"),description:i(mt.sectors.qirat.description,r),amir:`${t.amirLabel}: ${i(mt.sectors.qirat.amir,"name")}`,activities:mt.sectors.qirat.activities[r]||mt.sectors.qirat.activities.en,cta:t.cta.learnMore,icon:Ti,color:"from-[#004d40] to-[#00695c]",textColor:"text-white",iconBg:"bg-[#004d40]",link:"#qirat"},{name:i(mt.sectors.charity,"name"),description:i(mt.sectors.charity.description,r),amir:`${t.amirLabel}: ${i(mt.sectors.charity.amir,"name")}`,activities:mt.sectors.charity.activities[r]||mt.sectors.charity.activities.en,cta:t.cta.donateNow,icon:Ef,color:"from-[#FFD700] to-[#E6C300]",textColor:"text-[#002B24]",iconBg:"bg-[#FFD700]",link:"#charity"},{name:i(mt.sectors.dawa,"name"),description:i(mt.sectors.dawa.description,r),amir:`${t.amirLabel}: ${i(mt.sectors.dawa.amir,"name")}`,activities:mt.sectors.dawa.activities[r]||mt.sectors.dawa.activities.en,cta:t.cta.getInvolved,icon:Po,color:"from-[#004d40] to-[#00695c]",textColor:"text-white",iconBg:"bg-[#004d40]",link:"#dawa"}];return g.jsx("section",{id:"sectors",className:"py-20 bg-gray-50 islamic-pattern scroll-mt-20",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center mb-16",children:[g.jsx("h2",{className:"text-[#004d40] mb-4",children:t.title}),g.jsx("p",{className:"text-xl text-gray-600",children:t.subtitle})]}),g.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:o.map((l,h)=>g.jsxs("div",{className:"glass-card rounded-2xl p-8 hover:shadow-2xl transition-all hover:scale-105 group",children:[g.jsx("div",{className:`w-16 h-16 ${l.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`,children:g.jsx(l.icon,{size:32,className:l.iconBg==="bg-[#FFD700]"?"text-gray-900":"text-white"})}),g.jsx("h3",{className:"text-2xl font-bold text-[#004d40] mb-3",children:l.name}),g.jsx("p",{className:"text-sm text-gray-500 mb-4 font-semibold",children:l.amir}),g.jsx("p",{className:"text-gray-700 mb-6 leading-relaxed",children:l.description}),g.jsx("div",{className:"mb-6",children:g.jsx("ul",{className:"space-y-2",children:l.activities.map((f,y)=>g.jsxs("li",{className:"flex items-center gap-2 text-sm text-gray-600",children:[g.jsx("div",{className:"w-1.5 h-1.5 bg-[#004d40] rounded-full"}),f]},y))})}),g.jsx("a",{href:l.link,children:g.jsxs("button",{className:`w-full px-6 py-4 bg-gradient-to-r ${l.color} ${l.textColor} rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 group-hover:gap-4 active:scale-95`,children:[l.cta,g.jsx(Ac,{size:20})]})})]},h))})]})})}function sT({language:r}){const e={en:{title:"Our Leadership",subtitle:"Meet the dedicated leaders serving the HUMSJ External Affairs",contact:"Contact",telegram:"Telegram",phone:"Phone",email:"Email"},am:{title:"የእኛ አመራር",subtitle:"የሁምስጅ የውጭ ጉዳይ ዘርፍን የሚያገለግሉ ቁርጠኛ መሪዎችን ያግኙ",contact:"ያግኙ",telegram:"ቴሌግራም",phone:"ስልክ",email:"ኢሜይል"},om:{title:"Hogganinsa Keenya",subtitle:"Hoggantoota kutaalee Dhimma Alaa HUMSJ tajaajilan wal baraa",contact:"Quunnamtii",telegram:"Telegram",phone:"Bilbila",email:"Email"},ar:{title:"قيادتنا",subtitle:"تعرف على القادة المخلصين الذين يخدمون الشؤون الخارجية لـ HUMSJ",contact:"اتصل بنا",telegram:"تيليجرام",phone:"هاتف",email:"البريد الإلكتروني"}},t=e[r]||e.en,i=(h,f)=>{const y=r==="en"?f:r==="am"?`${f}Am`:r==="om"?`${f}Om`:r==="ar"?`${f}Ar`:f;return h[y]||h[f]},o=[{...mt.generalAmir,color:"from-[#004d40] to-[#00695c]",isGeneral:!0},{...mt.externalAffairsAmir,color:"from-[#ffd700] to-[#daa520]",isGeneral:!0}],l=[{...mt.sectors.qirat.amir,color:"from-[#004d40] to-[#00695c]"},{...mt.sectors.charity.amir,color:"from-[#004d40] to-[#00695c]"},{...mt.sectors.dawa.amir,color:"from-[#004d40] to-[#00695c]"}];return g.jsx("section",{id:"leadership",className:"py-20 bg-white islamic-pattern scroll-mt-20",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center mb-16",children:[g.jsx("h2",{className:"text-[#004d40] mb-4",children:t.title}),g.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:t.subtitle})]}),g.jsx("div",{className:"grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto",children:o.map((h,f)=>g.jsxs("div",{className:"glass-card rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-105",children:[g.jsx("div",{className:`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${h.color} rounded-full flex items-center justify-center`,children:g.jsx(zg,{size:48,className:"text-white"})}),g.jsx("h3",{className:"text-2xl font-bold text-[#004d40] text-center mb-2",children:i(h,"name")}),g.jsx("p",{className:"text-gray-600 text-center mb-6 font-semibold",children:i(h,"position")}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("a",{href:`tel:${h.phone}`,className:"flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors",children:[g.jsx(Hd,{size:20,className:"text-[#004d40]"}),g.jsx("span",{className:"text-gray-700",children:h.phone})]}),g.jsxs("a",{href:`https://t.me/${h.telegram.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors",children:[g.jsx(qd,{size:20,className:"text-[#004d40]"}),g.jsx("span",{className:"text-gray-700",children:h.telegram})]}),g.jsxs("a",{href:`mailto:${h.email}`,className:"flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors",children:[g.jsx(P0,{size:20,className:"text-[#004d40]"}),g.jsx("span",{className:"text-gray-700",children:h.email})]})]})]},f))}),g.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:l.map((h,f)=>g.jsxs("div",{className:"glass-card rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105",children:[g.jsx("div",{className:`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${h.color} rounded-full flex items-center justify-center`,children:g.jsx(zg,{size:40,className:"text-white"})}),g.jsx("h3",{className:"text-xl font-bold text-[#004d40] text-center mb-2",children:i(h,"name")}),g.jsx("p",{className:"text-gray-600 text-center mb-4 text-sm font-semibold",children:i(h,"position")}),g.jsxs("div",{className:"space-y-2",children:[g.jsxs("a",{href:`tel:${h.phone}`,className:"flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors text-sm",children:[g.jsx(Hd,{size:16,className:"text-[#004d40]"}),g.jsx("span",{className:"text-gray-700",children:h.phone})]}),g.jsxs("a",{href:`https://t.me/${h.telegram.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-[#004d40]/10 transition-colors text-sm",children:[g.jsx(qd,{size:16,className:"text-[#004d40]"}),g.jsx("span",{className:"text-gray-700",children:h.telegram})]})]})]},f))})]})})}function oT({language:r}){const[e,t]=Be.useState(!1),i={en:{title:"Qirat Sector",subtitle:"Nurturing Quranic Excellence",description:"The Qirat Sector is dedicated to promoting Quranic education, memorization, and proper recitation (tajweed) among Ethiopian Muslim students. We provide structured programs, competitions, and resources to support learners at all levels.",amir:"Sector Amir: Mohammed Ahmadu",phone:"+251 929 230 120",programs:{title:"Our Programs",items:[{title:"Quran Memorization (Hifz)",description:"Structured memorization program with qualified teachers and regular assessments"},{title:"Tajweed Training",description:"Learn proper Quranic recitation rules and pronunciation techniques"},{title:"Annual Competitions",description:"Participate in local and national Qirat competitions with prizes and recognition"},{title:"Student Support",description:"Mentorship, resources, and guidance for all Quranic students"}]},stats:{students:"Active Students",competitions:"Annual Competitions",teachers:"Qualified Teachers",completion:"Completion Rate"},register:"Register Now",contact:"Contact Amir"},am:{title:"የቂራት ዘርፍ",subtitle:"የቁርአን ብቃትን ማሳደግ",description:"የቂራት ዘርፍ በኢትዮጵያ የሙስሊም ተማሪዎች መካከል የቁርአን ትምህርትን፣ ማስታወስን እና ትክክለኛ ንባብን (ታጅዊድ) ለማስተዋወቅ ቁርጠኛ ነው። በሁሉም ደረጃዎች ላሉ ተማሪዎች የተዋቀሩ ፕሮግራሞችን፣ ውድድሮችን እና ግብዓቶችን እናቀርባለን።",amir:"የዘርፍ አሚር፡ መሀመድ አህማዱ",phone:"+251 929 230 120",programs:{title:"የእኛ ፕሮግራሞች",items:[{title:"የቁርአን ማስታወስ (ሂፍዝ)",description:"ከብቁ መምህራን እና መደበኛ ግምገማዎች ጋር የተዋቀረ የማስታወስ ፕሮግራም"},{title:"የታጅዊድ ስልጠና",description:"ትክክለኛ የቁርአን ንባብ ደንቦችን እና የአጠራር ቴክኒኮችን ይማሩ"},{title:"ዓመታዊ ውድድሮች",description:"በሽልማቶች እና እውቅና በአገር ውስጥ እና በአገር አቀፍ የቂራት ውድድሮች ይሳተፉ"},{title:"የተማሪ ድጋፍ",description:"ለሁሉም የቁርአን ተማሪዎች መመሪያ፣ ግብዓቶች እና መመሪያ"}]},stats:{students:"ንቁ ተማሪዎች",competitions:"ዓመታዊ ውድድሮች",teachers:"ብቁ መምህራን",completion:"የማጠናቀቂያ መጠን"},register:"አሁን ይመዝገቡ",contact:"አሚርን ያግኙ"}},o=i[r]||i.en;return g.jsx("section",{id:"qirat",className:"py-20 bg-white islamic-pattern",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center mb-16",children:[g.jsx("div",{className:"inline-block p-4 bg-[#004d40] rounded-2xl mb-6",children:g.jsx(Ti,{size:48,className:"text-white"})}),g.jsx("h2",{className:"text-[#004d40] mb-4",children:o.title}),g.jsx("p",{className:"text-2xl text-[#ffd700] font-semibold mb-4",children:o.subtitle}),g.jsx("p",{className:"text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6",children:o.description}),g.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 justify-center items-center text-gray-600",children:[g.jsx("p",{className:"font-semibold",children:o.amir}),g.jsx("span",{className:"hidden sm:inline",children:"•"}),g.jsx("a",{href:`tel:${o.phone}`,className:"text-[#004d40] hover:underline",children:o.phone})]})]}),g.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-16",children:[g.jsxs("div",{className:"glass-card rounded-xl p-6 text-center",children:[g.jsx("div",{className:"text-4xl font-bold text-[#004d40] mb-2",children:"200+"}),g.jsx("div",{className:"text-gray-600",children:o.stats.students})]}),g.jsxs("div",{className:"glass-card rounded-xl p-6 text-center",children:[g.jsx("div",{className:"text-4xl font-bold text-[#004d40] mb-2",children:"5"}),g.jsx("div",{className:"text-gray-600",children:o.stats.competitions})]}),g.jsxs("div",{className:"glass-card rounded-xl p-6 text-center",children:[g.jsx("div",{className:"text-4xl font-bold text-[#004d40] mb-2",children:"15+"}),g.jsx("div",{className:"text-gray-600",children:o.stats.teachers})]}),g.jsxs("div",{className:"glass-card rounded-xl p-6 text-center",children:[g.jsx("div",{className:"text-4xl font-bold text-[#004d40] mb-2",children:"85%"}),g.jsx("div",{className:"text-gray-600",children:o.stats.completion})]})]}),g.jsxs("div",{className:"mb-16",children:[g.jsx("h3",{className:"text-3xl font-bold text-[#004d40] text-center mb-12",children:o.programs.title}),g.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:o.programs.items.map((l,h)=>g.jsx("div",{className:"glass-card rounded-xl p-6 hover:shadow-lg transition-all",children:g.jsxs("div",{className:"flex items-start gap-4",children:[g.jsxs("div",{className:"w-12 h-12 bg-[#004d40] rounded-lg flex items-center justify-center flex-shrink-0",children:[h===0&&g.jsx(Ti,{size:24,className:"text-white"}),h===1&&g.jsx(JE,{size:24,className:"text-white"}),h===2&&g.jsx(t1,{size:24,className:"text-white"}),h===3&&g.jsx(Po,{size:24,className:"text-white"})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-xl font-bold text-[#004d40] mb-2",children:l.title}),g.jsx("p",{className:"text-gray-700",children:l.description})]})]})},h))})]}),g.jsx("div",{className:"text-center",children:g.jsx("button",{onClick:()=>t(!0),className:"px-8 py-4 bg-gradient-to-r from-[#004d40] to-[#00695c] text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 text-lg",children:o.register})}),e&&g.jsx(aT,{language:r,onClose:()=>t(!1)})]})})}function aT({language:r,onClose:e}){const t={en:{title:"Qirat Program Registration",fullName:"Full Name",age:"Age",phone:"Phone Number",email:"Email (Optional)",level:"Current Memorization Level",tajweed:"Tajweed Proficiency",program:"Program Interest",message:"Additional Information",submit:"Submit Registration",cancel:"Cancel",levels:["Beginner","Juz 1-10","Juz 11-20","Juz 21-30","Completed Hifz"],tajweedLevels:["Beginner","Intermediate","Advanced"],programs:["Hifz Program","Tajweed Training","Competition Prep","General Support"]},am:{title:"የቂራት ፕሮግራም ምዝገባ",fullName:"ሙሉ ስም",age:"ዕድሜ",phone:"ስልክ ቁጥር",email:"ኢሜይል (አማራጭ)",level:"የአሁኑ የማስታወስ ደረጃ",tajweed:"የታጅዊድ ብቃት",program:"የፕሮግራም ፍላጎት",message:"ተጨማሪ መረጃ",submit:"ምዝገባ ያስገቡ",cancel:"ይቅር",levels:["ጀማሪ","ጁዝ 1-10","ጁዝ 11-20","ጁዝ 21-30","ሂፍዝ ተጠናቋል"],tajweedLevels:["ጀማሪ","መካከለኛ","ከፍተኛ"],programs:["የሂፍዝ ፕሮግራም","የታጅዊድ ስልጠና","የውድድር ዝግጅት","አጠቃላይ ድጋፍ"]}},i=t[r]||t.en;return g.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8",children:[g.jsx("h3",{className:"text-2xl font-bold text-[#004d40] mb-6",children:i.title}),g.jsxs("form",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.fullName}),g.jsx("input",{type:"text",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0})]}),g.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.age}),g.jsx("input",{type:"number",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.phone}),g.jsx("input",{type:"tel",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.email}),g.jsx("input",{type:"email",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.level}),g.jsx("select",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0,children:i.levels.map((o,l)=>g.jsx("option",{value:o,children:o},l))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.tajweed}),g.jsx("select",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0,children:i.tajweedLevels.map((o,l)=>g.jsx("option",{value:o,children:o},l))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.program}),g.jsx("select",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0,children:i.programs.map((o,l)=>g.jsx("option",{value:o,children:o},l))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.message}),g.jsx("textarea",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",rows:4})]}),g.jsxs("div",{className:"flex gap-4 pt-4",children:[g.jsx("button",{type:"submit",className:"flex-1 px-6 py-3 bg-gradient-to-r from-[#004d40] to-[#00695c] text-white rounded-lg font-semibold hover:shadow-lg transition-all",children:i.submit}),g.jsx("button",{type:"button",onClick:e,className:"px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all",children:i.cancel})]})]})]})})}function lT({language:r}){const[e,t]=Be.useState(!1),i={en:{title:"Dawa Sector",subtitle:"Spreading Knowledge and Faith",description:"The Dawa Sector focuses on Islamic education, community outreach, and spreading the message of Islam. We organize educational programs, lectures, and community events to strengthen faith and knowledge among the Ethiopian Muslim community.",amir:"Sector Amir: Ramadan Aliyii",phone:"+251 975 309 779",programs:{title:"Our Programs",items:[{title:"Islamic Education",description:"Comprehensive Islamic studies programs covering Aqeedah, Fiqh, and Seerah"},{title:"Community Lectures",description:"Regular lectures and seminars by qualified scholars on various Islamic topics"},{title:"Youth Mentorship",description:"Guidance and mentorship programs for Muslim youth to strengthen their faith"},{title:"Interfaith Dialogue",description:"Building bridges through respectful dialogue and community engagement"}]},stats:{participants:"Active Participants",events:"Monthly Events",volunteers:"Volunteers",reach:"Community Reach"},register:"Join Us",contact:"Contact Amir"},am:{title:"የዳዋ ዘርፍ",subtitle:"እውቀትን እና እምነትን ማሰራጨት",description:"የዳዋ ዘርፍ በእስላማዊ ትምህርት፣ በማህበረሰብ ተደራሽነት እና የእስልምና መልእክት በማሰራጨት ላይ ያተኩራል። በኢትዮጵያ የሙስሊም ማህበረሰብ መካከል እምነትን እና እውቀትን ለማጠናከር ትምህርታዊ ፕሮግራሞችን፣ ንግግሮችን እና የማህበረሰብ ዝግጅቶችን እናዘጋጃለን።",amir:"የዘርፍ አሚር፡ ረመዳን አሊዪ",phone:"+251 975 309 779",programs:{title:"የእኛ ፕሮግራሞች",items:[{title:"እስላማዊ ትምህርት",description:"አቂዳ፣ ፊቅህ እና ሲራን የሚሸፍኑ አጠቃላይ የእስልምና ጥናት ፕሮግራሞች"},{title:"የማህበረሰብ ንግግሮች",description:"በተለያዩ የእስልምና ርዕሶች ላይ በብቁ ምሁራን መደበኛ ንግግሮች እና ሴሚናሮች"},{title:"የወጣቶች መምህርነት",description:"ለሙስሊም ወጣቶች እምነታቸውን ለማጠናከር መመሪያ እና የመምህርነት ፕሮግራሞች"},{title:"የሃይማኖት ውይይት",description:"በአክብሮት ውይይት እና በማህበረሰብ ተሳትፎ ድልድይ መገንባት"}]},stats:{participants:"ንቁ ተሳታፊዎች",events:"ወርሃዊ ዝግጅቶች",volunteers:"በጎ ፈቃደኞች",reach:"የማህበረሰብ ተደራሽነት"},register:"ይቀላቀሉን",contact:"አሚርን ያግኙ"}},o=i[r]||i.en;return g.jsx("section",{id:"dawa",className:"py-20 bg-gray-50 islamic-pattern",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center mb-16",children:[g.jsx("div",{className:"inline-block p-4 bg-[#004d40] rounded-2xl mb-6",children:g.jsx(Po,{size:48,className:"text-white"})}),g.jsx("h2",{className:"text-[#004d40] mb-4",children:o.title}),g.jsx("p",{className:"text-2xl text-[#ffd700] font-semibold mb-4",children:o.subtitle}),g.jsx("p",{className:"text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6",children:o.description}),g.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 justify-center items-center text-gray-600",children:[g.jsx("p",{className:"font-semibold",children:o.amir}),g.jsx("span",{className:"hidden sm:inline",children:"•"}),g.jsx("a",{href:`tel:${o.phone}`,className:"text-[#004d40] hover:underline",children:o.phone})]})]}),g.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-16",children:[g.jsxs("div",{className:"glass-card rounded-xl p-6 text-center bg-white",children:[g.jsx("div",{className:"text-4xl font-bold text-[#004d40] mb-2",children:"150+"}),g.jsx("div",{className:"text-gray-600",children:o.stats.participants})]}),g.jsxs("div",{className:"glass-card rounded-xl p-6 text-center bg-white",children:[g.jsx("div",{className:"text-4xl font-bold text-[#004d40] mb-2",children:"8+"}),g.jsx("div",{className:"text-gray-600",children:o.stats.events})]}),g.jsxs("div",{className:"glass-card rounded-xl p-6 text-center bg-white",children:[g.jsx("div",{className:"text-4xl font-bold text-[#004d40] mb-2",children:"30+"}),g.jsx("div",{className:"text-gray-600",children:o.stats.volunteers})]}),g.jsxs("div",{className:"glass-card rounded-xl p-6 text-center bg-white",children:[g.jsx("div",{className:"text-4xl font-bold text-[#004d40] mb-2",children:"1000+"}),g.jsx("div",{className:"text-gray-600",children:o.stats.reach})]})]}),g.jsxs("div",{className:"mb-16",children:[g.jsx("h3",{className:"text-3xl font-bold text-[#004d40] text-center mb-12",children:o.programs.title}),g.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:o.programs.items.map((l,h)=>g.jsx("div",{className:"glass-card rounded-xl p-6 hover:shadow-lg transition-all bg-white",children:g.jsxs("div",{className:"flex items-start gap-4",children:[g.jsxs("div",{className:"w-12 h-12 bg-[#004d40] rounded-lg flex items-center justify-center flex-shrink-0",children:[h===0&&g.jsx(Ti,{size:24,className:"text-white"}),h===1&&g.jsx(P1,{size:24,className:"text-white"}),h===2&&g.jsx(Ef,{size:24,className:"text-white"}),h===3&&g.jsx(Po,{size:24,className:"text-white"})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-xl font-bold text-[#004d40] mb-2",children:l.title}),g.jsx("p",{className:"text-gray-700",children:l.description})]})]})},h))})]}),g.jsx("div",{className:"text-center",children:g.jsx("button",{onClick:()=>t(!0),className:"px-8 py-4 bg-gradient-to-r from-[#004d40] to-[#00695c] text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 text-lg",children:o.register})}),e&&g.jsx(uT,{language:r,onClose:()=>t(!1)})]})})}function uT({language:r,onClose:e}){const t={en:{title:"Dawa Program Registration",fullName:"Full Name",age:"Age",phone:"Phone Number",email:"Email (Optional)",interest:"Area of Interest",volunteer:"Volunteer Preference",skills:"Skills & Experience",message:"Why do you want to join?",submit:"Submit Registration",cancel:"Cancel",interests:["Islamic Education","Community Outreach","Youth Programs","Interfaith Dialogue","General Support"],volunteerOptions:["Event Organization","Teaching","Mentorship","Social Media","Other"]},am:{title:"የዳዋ ፕሮግራም ምዝገባ",fullName:"ሙሉ ስም",age:"ዕድሜ",phone:"ስልክ ቁጥር",email:"ኢሜይል (አማራጭ)",interest:"የፍላጎት አካባቢ",volunteer:"የበጎ ፈቃደኝነት ምርጫ",skills:"ክህሎቶች እና ልምድ",message:"ለምን መቀላቀል ይፈልጋሉ?",submit:"ምዝገባ ያስገቡ",cancel:"ይቅር",interests:["እስላማዊ ትምህርት","የማህበረሰብ ተደራሽነት","የወጣቶች ፕሮግራሞች","የሃይማኖት ውይይት","አጠቃላይ ድጋፍ"],volunteerOptions:["የዝግጅት ማደራጀት","ማስተማር","መምህርነት","ማህበራዊ ሚዲያ","ሌላ"]}},i=t[r]||t.en;return g.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8",children:[g.jsx("h3",{className:"text-2xl font-bold text-[#004d40] mb-6",children:i.title}),g.jsxs("form",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.fullName}),g.jsx("input",{type:"text",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0})]}),g.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.age}),g.jsx("input",{type:"number",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.phone}),g.jsx("input",{type:"tel",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.email}),g.jsx("input",{type:"email",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.interest}),g.jsx("select",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0,children:i.interests.map((o,l)=>g.jsx("option",{value:o,children:o},l))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.volunteer}),g.jsx("select",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",required:!0,children:i.volunteerOptions.map((o,l)=>g.jsx("option",{value:o,children:o},l))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.skills}),g.jsx("textarea",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",rows:3})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:i.message}),g.jsx("textarea",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",rows:4})]}),g.jsxs("div",{className:"flex gap-4 pt-4",children:[g.jsx("button",{type:"submit",className:"flex-1 px-6 py-3 bg-gradient-to-r from-[#004d40] to-[#00695c] text-white rounded-lg font-semibold hover:shadow-lg transition-all",children:i.submit}),g.jsx("button",{type:"button",onClick:e,className:"px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all",children:i.cancel})]})]})]})})}function cT({language:r}){const e={en:{title:"Our Impact Sectors",subtitle:"Serving the community through diverse initiatives",sectors:[{icon:Ti,title:"Education",description:"Providing quality Islamic and secular education to Ethiopian youth",image:"https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",stats:"200+ Students"},{icon:Ou,title:"Water Aid",description:"Building wells and providing clean water access to rural communities",image:"https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",stats:"25+ Wells Built"},{icon:Mu,title:"Mosques",description:"Supporting mosque construction and maintenance across Ethiopia",image:"https://images.unsplash.com/photo-1685736383398-7f82cea3e919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBtaW5hcmV0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTY5NjU3OXww&ixlib=rb-4.1.0&q=80&w=1080",stats:"10+ Mosques"},{icon:Vu,title:"Tech Education",description:"Empowering youth with digital skills and technology training",image:"https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",stats:"150+ Trained"}],learnMore:"Learn More"},am:{title:"የእኛ ተፅእኖ ዘርፎች",subtitle:"ማህበረሰቡን በተለያዩ ተነሳሽነቶች ማገልገል",sectors:[{icon:Ti,title:"ትምህርት",description:"ለኢትዮጵያ ወጣቶች ጥራት ያለው እስላማዊ እና ዓለማዊ ትምህርት መስጠት",image:"https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",stats:"200+ ተማሪዎች"},{icon:Ou,title:"የውሃ እርዳታ",description:"ጉድጓዶችን መገንባት እና ለገጠር ማህበረሰቦች ንጹህ ውሃ መድረስ",image:"https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",stats:"25+ ጉድጓዶች"},{icon:Mu,title:"መስጂዶች",description:"በመላ ኢትዮጵያ መስጊድ ግንባታ እና ጥገና መደገፍ",image:"https://images.unsplash.com/photo-1685736383398-7f82cea3e919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBtaW5hcmV0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTY5NjU3OXww&ixlib=rb-4.1.0&q=80&w=1080",stats:"10+ መስጂዶች"},{icon:Vu,title:"የቴክኖሎጂ ትምህርት",description:"ወጣቶችን በዲጂታል ክህሎቶች እና በቴክኖሎጂ ስልጠና ማብቃት",image:"https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",stats:"150+ ሰልጥነዋል"}],learnMore:"ተጨማሪ እወቁ"},om:{title:"Dameewwan Dhiibbaa Keenyaa",subtitle:"Hawaasa kana karoora adda addaatiin tajaajiluu",sectors:[{icon:Ti,title:"Barnoota",description:"Dargaggootaa Itoophiyaatiif barnoota Islaamaa fi addunyaa qulqullina qabu kennuu",image:"https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",stats:"200+ Barattootaa"},{icon:Ou,title:"Gargaarsa Bishaanii",description:"Boolla bishaanii ijaaruu fi hawaasa baadiyyaa bishaan qulqulluu argamsiisuu",image:"https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",stats:"25+ Boolla"},{icon:Mu,title:"Masaajida",description:"Itoophiyaa guutuutti ijaarsa fi suphaa masaajida deeggaruu",image:"https://images.unsplash.com/photo-1685736383398-7f82cea3e919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBtaW5hcmV0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTY5NjU3OXww&ixlib=rb-4.1.0&q=80&w=1080",stats:"10+ Masaajida"},{icon:Vu,title:"Barnoota Teekinooloojii",description:"Dargaggootaa ogummaa dijitaalaa fi leenjii teekinooloojiitin humneessuu",image:"https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",stats:"150+ Leenji'an"}],learnMore:"Dabalataan Baraa"},ar:{title:"قطاعات تأثيرنا",subtitle:"خدمة المجتمع من خلال مبادرات متنوعة",sectors:[{icon:Ti,title:"التعليم",description:"توفير تعليم إسلامي وعلماني عالي الجودة للشباب الإثيوبي",image:"https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",stats:"200+ طالب"},{icon:Ou,title:"مساعدات المياه",description:"بناء الآبار وتوفير الوصول إلى المياه النظيفة للمجتمعات الريفية",image:"https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",stats:"25+ بئر"},{icon:Mu,title:"المساجد",description:"دعم بناء وصيانة المساجد في جميع أنحاء إثيوبيا",image:"https://images.unsplash.com/photo-1685736383398-7f82cea3e919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBtaW5hcmV0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTY5NjU3OXww&ixlib=rb-4.1.0&q=80&w=1080",stats:"10+ مساجد"},{icon:Vu,title:"التعليم التقني",description:"تمكين الشباب بمهارات رقمية وتدريب تقني",image:"https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",stats:"150+ متدرب"}],learnMore:"اعرف المزيد"}},t=e[r]||e.en;return g.jsx("section",{id:"projects",className:"py-20 bg-white islamic-pattern",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center mb-16",children:[g.jsx("h2",{className:"text-[#004d40] mb-4",children:t.title}),g.jsx("p",{className:"text-xl text-gray-600",children:t.subtitle})]}),g.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:t.sectors.map((i,o)=>{const l=i.icon;return g.jsxs("div",{className:"group relative glass-card rounded-2xl overflow-hidden hover:border-[#004d40] transition-all duration-300 hover:shadow-xl hover:-translate-y-2",children:[g.jsxs("div",{className:"relative h-48 overflow-hidden",children:[g.jsx("img",{src:i.image,alt:i.title,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#004d40]/90 to-transparent"}),g.jsx("div",{className:"absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center",children:g.jsx(l,{className:"text-white",size:24})}),g.jsx("div",{className:"absolute bottom-4 left-4 px-3 py-1 bg-[#ffd700] rounded-full",children:g.jsx("span",{className:"text-sm font-bold text-gray-900",children:i.stats})})]}),g.jsxs("div",{className:"p-6",children:[g.jsx("h3",{className:"text-[#004d40] mb-3",children:i.title}),g.jsx("p",{className:"text-gray-600 mb-4",children:i.description}),g.jsxs("button",{className:"flex items-center gap-2 text-[#004d40] font-semibold group-hover:gap-3 transition-all",children:[t.learnMore,g.jsx(Ac,{size:18})]})]})]},o)})})]})})}function hT({language:r,posts:e}){const[t,i]=Be.useState({}),o={en:{title:"Latest from Humsj Official",subtitle:"Stay updated with our community news and stories",readMore:"Read More",categories:{charity:"Charity",tech:"Tech",education:"Education",community:"Community"}},am:{title:"ከሁምስጅ ኦፊሴላል የቅርብ ጊዜ",subtitle:"የማህበረሰብ ዜናዎቻችንን እና ታሪኮቻችንን እንከታተሉ",readMore:"ተጨማሪ አንብብ",categories:{charity:"በጎ አድራጎት",tech:"ቴክኖሎጂ",education:"ትምህርት",community:"ማህበረሰብ"}},om:{title:"Kan Humsj Ofiishaala Dhiyeenya",subtitle:"Oduu fi seenaa hawaasa keenyaa hordofaa",readMore:"Dabalataan Dubbisaa",categories:{charity:"Araaraa",tech:"Teekinooloojii",education:"Barnoota",community:"Hawaasa"}},ar:{title:"أحدث من Humsj الرسمي",subtitle:"ابق على اطلاع بأخبار وقصص مجتمعنا",readMore:"اقرأ المزيد",categories:{charity:"خيرية",tech:"تقنية",education:"تعليم",community:"مجتمع"}}},l=o[r]||o.en,h=f=>{i(y=>({...y,[f]:!y[f]}))};return g.jsx("section",{id:"blog",className:"py-20 bg-gradient-to-br from-[#faf8f5] to-white islamic-pattern",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center mb-16",children:[g.jsx("h2",{className:"text-[#004d40] mb-4",children:l.title}),g.jsx("p",{className:"text-xl text-gray-600",children:l.subtitle})]}),g.jsx("div",{className:"overflow-x-auto pb-6 -mx-4 px-4",children:g.jsx("div",{className:"flex gap-6 min-w-max lg:grid lg:grid-cols-3 lg:min-w-0",children:e.map(f=>{const y=t[f.id];return g.jsxs("div",{className:"w-80 lg:w-auto bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col",children:[g.jsxs("div",{className:"relative h-48 overflow-hidden",children:[g.jsx("img",{src:f.image,alt:f.title,className:"w-full h-full object-cover transition-transform duration-300 hover:scale-110"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"}),g.jsx("div",{className:"absolute top-4 left-4 px-3 py-1 bg-[#004d40] rounded-full",children:g.jsx("span",{className:"text-sm text-white",children:l.categories[f.category.toLowerCase()]||f.category})}),g.jsx("button",{onClick:()=>h(f.id),className:"absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors",title:"Toggle Language",children:g.jsx(y1,{size:18,className:"text-[#004d40]"})})]}),g.jsxs("div",{className:"p-6 flex-1 flex flex-col",children:[g.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-3",children:[g.jsx(r1,{size:16}),g.jsx("span",{children:f.readTime}),g.jsx("span",{className:"mx-2",children:"•"}),g.jsx("span",{children:f.date})]}),g.jsx("h3",{className:"text-[#004d40] mb-3 line-clamp-2",children:y?f.titleAm:f.title}),g.jsx("p",{className:"text-gray-600 mb-4 line-clamp-3 flex-1",children:y?f.excerptAm:f.excerpt}),g.jsxs("button",{className:"flex items-center gap-2 text-[#004d40] font-semibold hover:gap-3 transition-all",children:[l.readMore,g.jsx(Ac,{size:18})]})]})]},f.id)})})})]})})}function dT({language:r}){const e={en:{title:"Trust & Transparency",subtitle:"Every donation is tracked and reported with complete transparency",donationTracker:"Monthly Donation Goal",raised:"Raised",goal:"Goal",paymentMethods:"We Accept",testimonialsTitle:"Community Voices",testimonials:[{name:"Ahmed Hassan",nameAm:"አህመድ ሀሰን",role:"Community Elder",quote:"Humsj has transformed our community. Their transparency and dedication to serving the Ummah is unmatched.",quoteAm:"ሁምስጅ ማህበረሰባችንን ቀይሯል። ግልጽነታቸው እና ኡማህን ለማገልገል ያላቸው ቁርጠኝነት ተወዳዳሪ የሌለው ነው።"},{name:"Fatima Mohammed",nameAm:"ፋጢማ መሀመድ",role:"Volunteer",quote:"Being part of Humsj's mission has been a blessing. We're making real impact in people's lives.",quoteAm:"የሁምስጅ ተልእኮ አካል መሆን በረከት ነበር። በሰዎች ህይወት ላይ እውነተኛ ተጽእኖ እያደረግን ነው።"},{name:"Ibrahim Yusuf",nameAm:"ኢብራሂም ዩሱፍ",role:"Beneficiary",quote:"The water well project brought clean water to our village. May Allah bless Humsj's work.",quoteAm:"የውሃ ጉድጓድ ፕሮጀክቱ ለመንደራችን ንጹህ ውሃ አመጣ። አላህ የሁምስጅን ስራ ይባርክ።"}]},am:{title:"እምነት እና ግልጽነት",subtitle:"እያንዳንዱ ልገሳ በሙሉ ግልጽነት ይከታተላል እና ይዘገባል",donationTracker:"ወርሃዊ የልገሳ ግብ",raised:"ተሰብስቧል",goal:"ግብ",paymentMethods:"እንቀበላለን",testimonialsTitle:"የማህበረሰብ ድምጾች",testimonials:[{name:"Ahmed Hassan",nameAm:"አህመድ ሀሰን",role:"የማህበረሰብ ሽማግሌ",quote:"Humsj has transformed our community. Their transparency and dedication to serving the Ummah is unmatched.",quoteAm:"ሁምስጅ ማህበረሰባችንን ቀይሯል። ግልጽነታቸው እና ኡማህን ለማገልገል ያላቸው ቁርጠኝነት ተወዳዳሪ የሌለው ነው።"},{name:"Fatima Mohammed",nameAm:"ፋጢማ መሀመድ",role:"በጎ ፈቃደኛ",quote:"Being part of Humsj's mission has been a blessing. We're making real impact in people's lives.",quoteAm:"የሁምስጅ ተልእኮ አካል መሆን በረከት ነበር። በሰዎች ህይወት ላይ እውነተኛ ተጽእኖ እያደረግን ነው።"},{name:"Ibrahim Yusuf",nameAm:"ኢብራሂም ዩሱፍ",role:"ተጠቃሚ",quote:"The water well project brought clean water to our village. May Allah bless Humsj's work.",quoteAm:"የውሃ ጉድጓድ ፕሮጀክቱ ለመንደራችን ንጹህ ውሃ አመጣ። አላህ የሁምስጅን ስራ ይባርክ።"}]},om:{title:"Amanamummaa fi Ifa Ta'uu",subtitle:"Arjoomi hundi ifaa ta'een hordofamee gabaafama",donationTracker:"Galma Arjoomii Ji'aa",raised:"Walitti Qabame",goal:"Galma",paymentMethods:"Ni Fudhanna",testimonialsTitle:"Sagalee Hawaasaa",testimonials:[{name:"Ahmed Hassan",nameAm:"አህመድ ሀሰን",role:"Jaarsa Hawaasaa",quote:"Humsj has transformed our community. Their transparency and dedication to serving the Ummah is unmatched.",quoteAm:"ሁምስጅ ማህበረሰባችንን ቀይሯል። ግልጽነታቸው እና ኡማህን ለማገልገል ያላቸው ቁርጠኝነት ተወዳዳሪ የሌለው ነው።"},{name:"Fatima Mohammed",nameAm:"ፋጢማ መሀመድ",role:"Arjooma",quote:"Being part of Humsj's mission has been a blessing. We're making real impact in people's lives.",quoteAm:"የሁምስጅ ተልእኮ አካል መሆን በረከት ነበር። በሰዎች ህይወት ላይ እውነተኛ ተጽእኖ እያደረግን ነው።"},{name:"Ibrahim Yusuf",nameAm:"ኢብራሂም ዩሱፍ",role:"Fayyadamaa",quote:"The water well project brought clean water to our village. May Allah bless Humsj's work.",quoteAm:"የውሃ ጉድጓድ ፕሮጀክቱ ለመንደራችን ንጹህ ውሃ አመጣ። አላህ የሁምስጅን ስራ ይባርክ።"}]},ar:{title:"الثقة والشفافية",subtitle:"يتم تتبع كل تبرع والإبلاغ عنه بشفافية كاملة",donationTracker:"هدف التبرع الشهري",raised:"تم جمع",goal:"الهدف",paymentMethods:"نقبل",testimonialsTitle:"أصوات المجتمع",testimonials:[{name:"Ahmed Hassan",nameAm:"أحمد حسن",role:"شيخ المجتمع",quote:"Humsj has transformed our community. Their transparency and dedication to serving the Ummah is unmatched.",quoteAm:"لقد غيرت Humsj مجتمعنا. شفافيتهم وتفانيهم في خدمة الأمة لا مثيل لها."},{name:"Fatima Mohammed",nameAm:"فاطمة محمد",role:"متطوعة",quote:"Being part of Humsj's mission has been a blessing. We're making real impact in people's lives.",quoteAm:"كان كوني جزءًا من مهمة Humsj نعمة. نحن نحدث تأثيرًا حقيقيًا في حياة الناس."},{name:"Ibrahim Yusuf",nameAm:"إبراهيم يوسف",role:"مستفيد",quote:"The water well project brought clean water to our village. May Allah bless Humsj's work.",quoteAm:"جلب مشروع بئر الماء المياه النظيفة لقريتنا. بارك الله في عمل Humsj."}]}},t=e[r]||e.en,i=75e3,o=1e5,l=i/o*100;return g.jsx("section",{id:"donate",className:"py-20 bg-white islamic-pattern",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center mb-16",children:[g.jsx("h2",{className:"text-[#004d40] mb-4",children:t.title}),g.jsx("p",{className:"text-xl text-gray-600",children:t.subtitle})]}),g.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-16",children:[g.jsxs("div",{className:"bg-gradient-to-br from-[#004d40] to-[#00695c] rounded-2xl p-8 text-white text-center",children:[g.jsx(q1,{size:48,className:"mx-auto mb-4"}),g.jsx("div",{className:"text-4xl font-bold mb-2",children:"100%"}),g.jsx("div",{children:"Verified & Transparent"})]}),g.jsxs("div",{className:"bg-gradient-to-br from-[#ffd700] to-[#daa520] rounded-2xl p-8 text-gray-900 text-center",children:[g.jsx(Y1,{size:48,className:"mx-auto mb-4"}),g.jsx("div",{className:"text-4xl font-bold mb-2",children:"500+"}),g.jsx("div",{children:"Families Impacted"})]}),g.jsxs("div",{className:"bg-gradient-to-br from-[#004d40] to-[#00695c] rounded-2xl p-8 text-white text-center",children:[g.jsx(Po,{size:48,className:"mx-auto mb-4"}),g.jsx("div",{className:"text-4xl font-bold mb-2",children:"50+"}),g.jsx("div",{children:"Active Volunteers"})]})]}),g.jsxs("div",{className:"glass-card rounded-2xl p-8 mb-16",children:[g.jsx("h3",{className:"text-[#004d40] mb-6 text-center",children:t.donationTracker}),g.jsxs("div",{className:"mb-4",children:[g.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[g.jsxs("span",{className:"text-gray-600",children:[t.raised,": ",i.toLocaleString()," ETB"]}),g.jsxs("span",{className:"text-gray-600",children:[t.goal,": ",o.toLocaleString()," ETB"]})]}),g.jsx("div",{className:"w-full h-4 bg-gray-200 rounded-full overflow-hidden",children:g.jsx("div",{className:"h-full bg-gradient-to-r from-[#004d40] to-[#00695c] transition-all duration-500 relative overflow-hidden",style:{width:`${l}%`},children:g.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})}),g.jsxs("div",{className:"text-center mt-4",children:[g.jsxs("span",{className:"text-2xl font-bold text-[#004d40]",children:[l.toFixed(0),"%"]}),g.jsx("span",{className:"text-gray-600 ml-2",children:"Complete"})]})]}),g.jsxs("div",{className:"mt-8",children:[g.jsx("h4",{className:"text-center mb-4 text-gray-700",children:t.paymentMethods}),g.jsxs("div",{className:"flex justify-center items-center gap-6 flex-wrap",children:[g.jsx("div",{className:"px-6 py-3 bg-white rounded-lg border-2 border-[#004d40] font-semibold text-[#004d40]",children:"Telebirr"}),g.jsx("div",{className:"px-6 py-3 bg-white rounded-lg border-2 border-[#004d40] font-semibold text-[#004d40]",children:"CBE Birr"}),g.jsx("div",{className:"px-6 py-3 bg-white rounded-lg border-2 border-[#004d40] font-semibold text-[#004d40]",children:"PayPal"})]})]})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-[#004d40] mb-8 text-center",children:t.testimonialsTitle}),g.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:t.testimonials.map((h,f)=>g.jsxs("div",{className:"glass-card rounded-2xl p-6 hover:border-[#004d40] transition-all hover:shadow-lg",children:[g.jsx(V1,{className:"text-[#ffd700] mb-4",size:32}),g.jsxs("p",{className:"text-gray-700 mb-6 italic",children:['"',r==="am"?h.quoteAm:h.quote,'"']}),g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-[#004d40] to-[#00695c] rounded-full flex items-center justify-center text-white",children:(r==="am"?h.nameAm:h.name).charAt(0)}),g.jsxs("div",{children:[g.jsx("div",{className:"font-semibold text-[#004d40]",children:r==="am"?h.nameAm:h.name}),g.jsx("div",{className:"text-sm text-gray-600",children:h.role})]})]})]},f))})]})]})})}function fT({language:r}){const e={en:{mission:"Humsj Charity is a tech-enabled Islamic non-profit organization committed to serving the Ethiopian Ummah through education, humanitarian aid, and community development. We are a project under Haramaya Muslim Student Jema'a.",quickLinks:"Quick Links",contact:"Contact Us",social:"Connect With Us",newsletter:"Newsletter",newsletterText:"Subscribe to receive updates and news",subscribe:"Subscribe",address:"Addis Ababa, Ethiopia",phone:"+251 912 345 678",email:"info@humsjcharity.org",copyright:"© 2025 Humsj Charity. All rights reserved.",links:{about:"About Us",projects:"Our Projects",volunteer:"Volunteer",donate:"Donate",blog:"Blog",contact:"Contact"}},am:{mission:"የሁምስጅ በጎ አድራጎት በቴክኖሎጂ የተደገፈ እስላማዊ ለትርፍ ያልተቋቋመ ድርጅት ሲሆን የኢትዮጵያ ኡማህን በትምህርት፣ በሰብአዊ እርዳታ እና በማህበረሰብ ልማት ለማገልገል ቁርጠኛ ነው። እኛ በሐረማያ የሙስሊም ተማሪዎች ጀማዓ ስር ያለ ፕሮጀክት ነን።",quickLinks:"ፈጣን አገናኞች",contact:"ያግኙን",social:"ያግኙን",newsletter:"የዜና መልዕክት",newsletterText:"ዝመናዎችን እና ዜናዎችን ለመቀበል ይመዝገቡ",subscribe:"ይመዝገቡ",address:"አዲስ አበባ፣ ኢትዮጵያ",phone:"+251 912 345 678",email:"info@humsjcharity.org",copyright:"© 2025 የሁምስጅ በጎ አድራጎት። ሁሉም መብቶች የተጠበቁ ናቸው።",links:{about:"ስለእኛ",projects:"የእኛ ፕሮጀክቶች",volunteer:"በጎ ፈቃደኛ",donate:"ይለግሱ",blog:"ብሎግ",contact:"ያግኙን"}},om:{mission:"Humsj Charity dhaabbata teekinooloojiin deeggarame kan Islaamaa bu'aa hin barbaachiisne Ummaata Itoophiyaa barnoota, gargaarsa namoomaa fi misoomaa hawaasaan tajaajiluuf kutannoo qabuudha. Nuyi pirojektii Haramaya Muslim Student Jema'a jalatti argamnudha.",quickLinks:"Geessituu Saffisaa",contact:"Nu Quunnamaa",social:"Nu Waliin Wal Qunnami",newsletter:"Xalayaa Oduu",newsletterText:"Fooyya'iinsaa fi oduu fudhachuuf galmaa'aa",subscribe:"Galmaa'aa",address:"Finfinnee, Itoophiyaa",phone:"+251 912 345 678",email:"info@humsjcharity.org",copyright:"© 2025 Humsj Charity. Mirgi hundi kan eegamedha.",links:{about:"Waa'ee Keenyaa",projects:"Pirojektoota Keenyaa",volunteer:"Arjooma",donate:"Arjoomi",blog:"Biloogii",contact:"Quunnamtii"}},ar:{mission:"Humsj Charity هي منظمة إسلامية غير ربحية تعتمد على التكنولوجيا وملتزمة بخدمة الأمة الإثيوبية من خلال التعليم والمساعدات الإنسانية وتنمية المجتمع. نحن مشروع تحت جمعة طلاب هرر المسلمين.",quickLinks:"روابط سريعة",contact:"اتصل بنا",social:"تواصل معنا",newsletter:"النشرة الإخبارية",newsletterText:"اشترك لتلقي التحديثات والأخبار",subscribe:"اشترك",address:"أديس أبابا، إثيوبيا",phone:"+251 912 345 678",email:"info@humsjcharity.org",copyright:"© 2025 Humsj Charity. جميع الحقوق محفوظة.",links:{about:"معلومات عنا",projects:"مشاريعنا",volunteer:"تطوع",donate:"تبرع",blog:"مدونة",contact:"اتصل"}}},t=e[r]||e.en;return g.jsx("footer",{className:"bg-gradient-to-br from-[#004d40] to-[#00332a] text-white",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[g.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[g.jsx("div",{className:"w-10 h-10 bg-[#ffd700] rounded-lg flex items-center justify-center",children:g.jsx("span",{className:"text-[#004d40] text-lg font-bold",children:"ح"})}),g.jsx("span",{className:"text-xl font-bold",children:"Humsj"})]}),g.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:t.mission})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"mb-4",children:t.quickLinks}),g.jsxs("ul",{className:"space-y-3",children:[g.jsx("li",{children:g.jsx("a",{href:"#about",className:"text-gray-300 hover:text-[#ffd700] transition-colors text-sm",children:t.links.about})}),g.jsx("li",{children:g.jsx("a",{href:"#projects",className:"text-gray-300 hover:text-[#ffd700] transition-colors text-sm",children:t.links.projects})}),g.jsx("li",{children:g.jsx("a",{href:"#volunteer",className:"text-gray-300 hover:text-[#ffd700] transition-colors text-sm",children:t.links.volunteer})}),g.jsx("li",{children:g.jsx("a",{href:"#donate",className:"text-gray-300 hover:text-[#ffd700] transition-colors text-sm",children:t.links.donate})}),g.jsx("li",{children:g.jsx("a",{href:"#blog",className:"text-gray-300 hover:text-[#ffd700] transition-colors text-sm",children:t.links.blog})}),g.jsx("li",{children:g.jsx("a",{href:"#contact",className:"text-gray-300 hover:text-[#ffd700] transition-colors text-sm",children:t.links.contact})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"mb-4",children:t.contact}),g.jsxs("ul",{className:"space-y-4",children:[g.jsxs("li",{className:"flex items-start gap-3",children:[g.jsx(N1,{size:18,className:"text-[#ffd700] mt-1 flex-shrink-0"}),g.jsx("span",{className:"text-gray-300 text-sm",children:t.address})]}),g.jsxs("li",{className:"flex items-start gap-3",children:[g.jsx(Hd,{size:18,className:"text-[#ffd700] mt-1 flex-shrink-0"}),g.jsx("span",{className:"text-gray-300 text-sm",children:t.phone})]}),g.jsxs("li",{className:"flex items-start gap-3",children:[g.jsx(P0,{size:18,className:"text-[#ffd700] mt-1 flex-shrink-0"}),g.jsx("span",{className:"text-gray-300 text-sm",children:t.email})]})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"mb-4",children:t.social}),g.jsxs("div",{className:"flex gap-3 mb-6",children:[g.jsx("a",{href:"https://t.me/humsj_charity",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ffd700] hover:text-[#004d40] transition-all",children:g.jsx(qd,{size:18})}),g.jsx("a",{href:"#",className:"w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ffd700] hover:text-[#004d40] transition-all",children:g.jsx(c1,{size:18})}),g.jsx("a",{href:"#",className:"w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ffd700] hover:text-[#004d40] transition-all",children:g.jsx(X1,{size:18})}),g.jsx("a",{href:"#",className:"w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ffd700] hover:text-[#004d40] transition-all",children:g.jsx(p1,{size:18})})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"mb-2 text-sm",children:t.newsletter}),g.jsx("p",{className:"text-gray-300 text-xs mb-3",children:t.newsletterText}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("input",{type:"email",placeholder:t.email,className:"flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:border-[#ffd700] text-white placeholder-gray-400"}),g.jsx("button",{className:"px-4 py-2 bg-[#ffd700] text-[#004d40] rounded-lg hover:bg-[#daa520] transition-colors text-sm font-semibold",children:t.subscribe})]})]})]})]}),g.jsxs("div",{className:"pt-8 border-t border-white/10 text-center",children:[g.jsx("p",{className:"text-gray-400 text-sm",children:t.copyright}),g.jsx("p",{className:"text-gray-500 text-xs mt-2",children:"A Project of Haramaya Muslim Student Jema'a"})]})]})})}const mT=()=>{};var Bg={};/**
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
 */const j0=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},pT=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],y=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(y>>10)),e[i++]=String.fromCharCode(56320+(y&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},M0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,y=o+2<r.length,v=y?r[o+2]:0,T=l>>2,x=(l&3)<<4|f>>4;let k=(f&15)<<2|v>>6,z=v&63;y||(z=64,h||(k=64)),i.push(t[T],t[x],t[k],t[z])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(j0(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):pT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const x=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||v==null||x==null)throw new gT;const k=l<<2|f>>4;if(i.push(k),v!==64){const z=f<<4&240|v>>2;if(i.push(z),x!==64){const $=v<<6&192|x;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class gT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yT=function(r){const e=j0(r);return M0.encodeByteArray(e,!0)},nc=function(r){return yT(r).replace(/\./g,"")},O0=function(r){try{return M0.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _T(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vT=()=>_T().__FIREBASE_DEFAULTS__,wT=()=>{if(typeof process>"u"||typeof Bg>"u")return;const r=Bg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ET=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&O0(r[1]);return e&&JSON.parse(e)},Sc=()=>{try{return mT()||vT()||wT()||ET()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},V0=r=>Sc()?.emulatorHosts?.[r],L0=r=>{const e=V0(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},F0=()=>Sc()?.config,U0=r=>Sc()?.[`_${r}`];/**
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
 */class TT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Is(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tf(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function z0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[nc(JSON.stringify(t)),nc(JSON.stringify(h)),""].join(".")}const $a={};function xT(){const r={prod:[],emulator:[]};for(const e of Object.keys($a))$a[e]?r.emulator.push(e):r.prod.push(e);return r}function IT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Hg=!1;function xf(r,e){if(typeof window>"u"||typeof document>"u"||!Is(window.location.host)||$a[r]===e||$a[r]||Hg)return;$a[r]=e;function t(k){return`__firebase__banner__${k}`}const i="__firebase__banner",l=xT().prod.length>0;function h(){const k=document.getElementById(i);k&&k.remove()}function f(k){k.style.display="flex",k.style.background="#7faaf0",k.style.position="fixed",k.style.bottom="5px",k.style.left="5px",k.style.padding=".5em",k.style.borderRadius="5px",k.style.alignItems="center"}function y(k,z){k.setAttribute("width","24"),k.setAttribute("id",z),k.setAttribute("height","24"),k.setAttribute("viewBox","0 0 24 24"),k.setAttribute("fill","none"),k.style.marginLeft="-6px"}function v(){const k=document.createElement("span");return k.style.cursor="pointer",k.style.marginLeft="16px",k.style.fontSize="24px",k.innerHTML=" &times;",k.onclick=()=>{Hg=!0,h()},k}function T(k,z){k.setAttribute("id",z),k.innerText="Learn more",k.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",k.setAttribute("target","__blank"),k.style.paddingLeft="5px",k.style.textDecoration="underline"}function x(){const k=IT(i),z=t("text"),$=document.getElementById(z)||document.createElement("span"),Q=t("learnmore"),B=document.getElementById(Q)||document.createElement("a"),he=t("preprendIcon"),ye=document.getElementById(he)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(k.created){const de=k.element;f(de),T(B,Q);const J=v();y(ye,he),de.append(ye,$,B,J),document.body.appendChild(de)}l?($.innerText="Preview backend disconnected.",ye.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ye.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function ST(){const r=Sc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function B0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function NT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RT(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function bT(){return!ST()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function H0(){try{return typeof indexedDB=="object"}catch{return!1}}function q0(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}function CT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const PT="FirebaseError";class An extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=PT,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?DT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new An(o,f,i)}}function DT(r,e){return r.replace(jT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const jT=/\{\$([^}]+)}/g;function MT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ri(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(qg(l)&&qg(h)){if(!Ri(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function qg(r){return r!==null&&typeof r=="object"}/**
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
 */function al(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ua(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function za(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function OT(r,e){const t=new VT(r,e);return t.subscribe.bind(t)}class VT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");LT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Sd),o.error===void 0&&(o.error=Sd),o.complete===void 0&&(o.complete=Sd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Sd(){}/**
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
 */const FT=1e3,UT=2,zT=14400*1e3,BT=.5;function $g(r,e=FT,t=UT){const i=e*Math.pow(t,r),o=Math.round(BT*i*(Math.random()-.5)*2);return Math.min(zT,i+o)}/**
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
 */function ut(r){return r&&r._delegate?r._delegate:r}class In{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class HT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new TT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($T(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qT(r){return r===ms?void 0:r}function $T(r){return r.instantiationMode==="EAGER"}/**
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
 */class WT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Re||(Re={}));const GT={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},KT=Re.INFO,QT={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},YT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=QT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=KT,this._logHandler=YT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const JT=(r,e)=>e.some(t=>r instanceof t);let Wg,Gg;function XT(){return Wg||(Wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZT(){return Gg||(Gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $0=new WeakMap,$d=new WeakMap,W0=new WeakMap,kd=new WeakMap,If=new WeakMap;function ex(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ii(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&$0.set(t,r)}).catch(()=>{}),If.set(e,r),e}function tx(r){if($d.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});$d.set(r,e)}let Wd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return $d.get(r);if(e==="objectStoreNames")return r.objectStoreNames||W0.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ii(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function nx(r){Wd=r(Wd)}function rx(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Nd(this),e,...t);return W0.set(i,e.sort?e.sort():[e]),Ii(i)}:ZT().includes(r)?function(...e){return r.apply(Nd(this),e),Ii($0.get(this))}:function(...e){return Ii(r.apply(Nd(this),e))}}function ix(r){return typeof r=="function"?rx(r):(r instanceof IDBTransaction&&tx(r),JT(r,XT())?new Proxy(r,Wd):r)}function Ii(r){if(r instanceof IDBRequest)return ex(r);if(kd.has(r))return kd.get(r);const e=ix(r);return e!==r&&(kd.set(r,e),If.set(e,r)),e}const Nd=r=>If.get(r);function G0(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ii(h);return i&&h.addEventListener("upgradeneeded",y=>{i(Ii(h.result),y.oldVersion,y.newVersion,Ii(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),f.then(y=>{l&&y.addEventListener("close",()=>l()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const sx=["get","getKey","getAll","getAllKeys","count"],ox=["put","add","delete","clear"],Rd=new Map;function Kg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=ox.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||sx.includes(t)))return;const l=async function(h,...f){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return i&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&y.done]))[0]};return Rd.set(e,l),l}nx(r=>({...r,get:(e,t,i)=>Kg(e,t)||r.get(e,t,i),has:(e,t)=>!!Kg(e,t)||r.has(e,t)}));/**
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
 */class ax{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lx(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function lx(r){return r.getComponent()?.type==="VERSION"}const Gd="@firebase/app",Qg="0.14.6";/**
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
 */const Lr=new kc("@firebase/app"),ux="@firebase/app-compat",cx="@firebase/analytics-compat",hx="@firebase/analytics",dx="@firebase/app-check-compat",fx="@firebase/app-check",mx="@firebase/auth",px="@firebase/auth-compat",gx="@firebase/database",yx="@firebase/data-connect",_x="@firebase/database-compat",vx="@firebase/functions",wx="@firebase/functions-compat",Ex="@firebase/installations",Tx="@firebase/installations-compat",xx="@firebase/messaging",Ix="@firebase/messaging-compat",Ax="@firebase/performance",Sx="@firebase/performance-compat",kx="@firebase/remote-config",Nx="@firebase/remote-config-compat",Rx="@firebase/storage",bx="@firebase/storage-compat",Cx="@firebase/firestore",Px="@firebase/ai",Dx="@firebase/firestore-compat",jx="firebase",Mx="12.6.0";/**
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
 */const Kd="[DEFAULT]",Ox={[Gd]:"fire-core",[ux]:"fire-core-compat",[hx]:"fire-analytics",[cx]:"fire-analytics-compat",[fx]:"fire-app-check",[dx]:"fire-app-check-compat",[mx]:"fire-auth",[px]:"fire-auth-compat",[gx]:"fire-rtdb",[yx]:"fire-data-connect",[_x]:"fire-rtdb-compat",[vx]:"fire-fn",[wx]:"fire-fn-compat",[Ex]:"fire-iid",[Tx]:"fire-iid-compat",[xx]:"fire-fcm",[Ix]:"fire-fcm-compat",[Ax]:"fire-perf",[Sx]:"fire-perf-compat",[kx]:"fire-rc",[Nx]:"fire-rc-compat",[Rx]:"fire-gcs",[bx]:"fire-gcs-compat",[Cx]:"fire-fst",[Dx]:"fire-fst-compat",[Px]:"fire-vertex","fire-js":"fire-js",[jx]:"fire-js-all"};/**
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
 */const rc=new Map,Vx=new Map,Qd=new Map;function Yg(r,e){try{r.container.addComponent(e)}catch(t){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Fn(r){const e=r.name;if(Qd.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;Qd.set(e,r);for(const t of rc.values())Yg(t,r);for(const t of Vx.values())Yg(t,r);return!0}function Oi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function dn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Lx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new As("app","Firebase",Lx);/**
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
 */class Fx{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
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
 */const Ss=Mx;function K0(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Kd,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ai.create("bad-app-name",{appName:String(o)});if(t||(t=F0()),!t)throw Ai.create("no-options");const l=rc.get(o);if(l){if(Ri(t,l.options)&&Ri(i,l.config))return l;throw Ai.create("duplicate-app",{appName:o})}const h=new WT(o);for(const y of Qd.values())h.addComponent(y);const f=new Fx(t,i,h);return rc.set(o,f),f}function Nc(r=Kd){const e=rc.get(r);if(!e&&r===Kd&&F0())return K0();if(!e)throw Ai.create("no-app",{appName:r});return e}function tn(r,e,t){let i=Ox[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(h.join(" "));return}Fn(new In(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ux="firebase-heartbeat-database",zx=1,Ja="firebase-heartbeat-store";let bd=null;function Q0(){return bd||(bd=G0(Ux,zx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ja)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ai.create("idb-open",{originalErrorMessage:r.message})})),bd}async function Bx(r){try{const t=(await Q0()).transaction(Ja),i=await t.objectStore(Ja).get(Y0(r));return await t.done,i}catch(e){if(e instanceof An)Lr.warn(e.message);else{const t=Ai.create("idb-get",{originalErrorMessage:e?.message});Lr.warn(t.message)}}}async function Jg(r,e){try{const i=(await Q0()).transaction(Ja,"readwrite");await i.objectStore(Ja).put(e,Y0(r)),await i.done}catch(t){if(t instanceof An)Lr.warn(t.message);else{const i=Ai.create("idb-set",{originalErrorMessage:t?.message});Lr.warn(i.message)}}}function Y0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Hx=1024,qx=30;class $x{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gx(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>qx){const o=Kx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Lr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xg(),{heartbeatsToSend:t,unsentEntries:i}=Wx(this._heartbeatsCache.heartbeats),o=nc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Lr.warn(e),""}}}function Xg(){return new Date().toISOString().substring(0,10)}function Wx(r,e=Hx){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Zg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Zg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Gx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H0()?q0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Bx(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zg(r){return nc(JSON.stringify({version:2,heartbeats:r})).length}function Kx(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function Qx(r){Fn(new In("platform-logger",e=>new ax(e),"PRIVATE")),Fn(new In("heartbeat",e=>new $x(e),"PRIVATE")),tn(Gd,Qg,r),tn(Gd,Qg,"esm2020"),tn("fire-js","")}Qx("");function J0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yx=J0,X0=new As("auth","Firebase",J0());/**
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
 */const ic=new kc("@firebase/auth");function Jx(r,...e){ic.logLevel<=Re.WARN&&ic.warn(`Auth (${Ss}): ${r}`,...e)}function Wu(r,...e){ic.logLevel<=Re.ERROR&&ic.error(`Auth (${Ss}): ${r}`,...e)}/**
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
 */function Un(r,...e){throw Af(r,...e)}function ar(r,...e){return Af(r,...e)}function Z0(r,e,t){const i={...Yx(),[e]:t};return new As("auth","Firebase",i).create(e,{appName:r.name})}function Vr(r){return Z0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Af(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return X0.create(r,...e)}function pe(r,e,...t){if(!r)throw Af(e,...t)}function Mr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Wu(e),new Error(e)}function Fr(r,e){r||Mr(e)}/**
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
 */function Yd(){return typeof self<"u"&&self.location?.href||""}function Xx(){return ey()==="http:"||ey()==="https:"}function ey(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Zx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xx()||B0()||"connection"in navigator)?navigator.onLine:!0}function eI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ll{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fr(t>e,"Short delay should be less than long delay!"),this.isMobile=AT()||NT()}get(){return Zx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sf(r,e){Fr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class e_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rI=new ll(3e4,6e4);function Vi(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Li(r,e,t,i,o={}){return t_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=al({key:r.config.apiKey,...h}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const v={method:e,headers:y,...l};return kT()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Is(r.emulatorConfig.host)&&(v.credentials="include"),e_.fetch()(await n_(r,r.config.apiHost,t,f),v)})}async function t_(r,e,t){r._canInitEmulator=!1;const i={...tI,...e};try{const o=new sI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Lu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[y,v]=f.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(r,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Lu(r,"email-already-in-use",h);if(y==="USER_DISABLED")throw Lu(r,"user-disabled",h);const T=i[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Z0(r,T,v);Un(r,T)}}catch(o){if(o instanceof An)throw o;Un(r,"network-request-failed",{message:String(o)})}}async function ul(r,e,t,i,o={}){const l=await Li(r,e,t,i,o);return"mfaPendingCredential"in l&&Un(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function n_(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?Sf(r.config,o):`${r.config.apiScheme}://${o}`;return nI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function iI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ar(this.auth,"network-request-failed")),rI.get())})}}function Lu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ar(r,e,i);return o.customData._tokenResponse=t,o}function ty(r){return r!==void 0&&r.enterprise!==void 0}class oI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return iI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aI(r,e){return Li(r,"GET","/v2/recaptchaConfig",Vi(r,e))}/**
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
 */async function lI(r,e){return Li(r,"POST","/v1/accounts:delete",e)}async function sc(r,e){return Li(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uI(r,e=!1){const t=ut(r),i=await t.getIdToken(e),o=kf(i);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:Wa(Cd(o.auth_time)),issuedAtTime:Wa(Cd(o.iat)),expirationTime:Wa(Cd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Cd(r){return Number(r)*1e3}function kf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const o=O0(t);return o?JSON.parse(o):(Wu("Failed to decode base64 JWT payload"),null)}catch(o){return Wu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function ny(r){const e=kf(r);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xa(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof An&&cI(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function cI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class hI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(r){const e=r.auth,t=await r.getIdToken(),i=await Xa(r,sc(e,{idToken:t}));pe(i?.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const l=o.providerUserInfo?.length?r_(o.providerUserInfo):[],h=fI(r.providerData,l),f=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!h?.length,v=f?y:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Jd(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(r,T)}async function dI(r){const e=ut(r);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fI(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function r_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function mI(r,e){const t=await t_(r,{},async()=>{const i=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await n_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:f,body:i};return r.emulatorConfig&&Is(r.emulatorConfig.host)&&(y.credentials="include"),e_.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pI(r,e){return Li(r,"POST","/v2/accounts:revokeToken",Vi(r,e))}/**
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
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=ny(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await mI(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Ao;return i&&(pe(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(pe(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
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
 */function _i(r,e){pe(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class On{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new hI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Jd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Xa(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uI(this,e)}reload(){return dI(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await oc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await Xa(this,lI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:x,emailVerified:k,isAnonymous:z,providerData:$,stsTokenManager:Q}=t;pe(x&&Q,e,"internal-error");const B=Ao.fromJSON(this.name,Q);pe(typeof x=="string",e,"internal-error"),_i(i,e.name),_i(o,e.name),pe(typeof k=="boolean",e,"internal-error"),pe(typeof z=="boolean",e,"internal-error"),_i(l,e.name),_i(h,e.name),_i(f,e.name),_i(y,e.name),_i(v,e.name),_i(T,e.name);const he=new On({uid:x,auth:e,email:o,emailVerified:k,displayName:i,isAnonymous:z,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:B,createdAt:v,lastLoginAt:T});return $&&Array.isArray($)&&(he.providerData=$.map(ye=>({...ye}))),y&&(he._redirectEventId=y),he}static async _fromIdTokenResponse(e,t,i=!1){const o=new Ao;o.updateFromServerResponse(t);const l=new On({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await oc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?r_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new Ao;f.updateFromIdToken(i);const y=new On({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Jd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(y,v),y}}/**
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
 */const ry=new Map;function Or(r){Fr(r instanceof Function,"Expected a class definition");let e=ry.get(r);return e?(Fr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ry.set(r,e),e)}/**
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
 */class i_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}i_.type="NONE";const iy=i_;/**
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
 */function Gu(r,e,t){return`firebase:${r}:${e}:${t}`}class So{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Gu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Gu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sc(this.auth,{idToken:e}).catch(()=>{});return t?On._fromGetAccountInfoResponse(this.auth,t,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new So(Or(iy),e,i);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Or(iy);const h=Gu(i,e.config.apiKey,e.name);let f=null;for(const v of t)try{const T=await v._get(h);if(T){let x;if(typeof T=="string"){const k=await sc(e,{idToken:T}).catch(()=>{});if(!k)break;x=await On._fromGetAccountInfoResponse(e,k,T)}else x=On._fromJSON(e,T);v!==l&&(f=x),l=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!y.length?new So(l,e,i):(l=y[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new So(l,e,i))}}/**
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
 */function sy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c_(e))return"Blackberry";if(h_(e))return"Webos";if(o_(e))return"Safari";if((e.includes("chrome/")||a_(e))&&!e.includes("edge/"))return"Chrome";if(u_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function s_(r=Bt()){return/firefox\//i.test(r)}function o_(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a_(r=Bt()){return/crios\//i.test(r)}function l_(r=Bt()){return/iemobile/i.test(r)}function u_(r=Bt()){return/android/i.test(r)}function c_(r=Bt()){return/blackberry/i.test(r)}function h_(r=Bt()){return/webos/i.test(r)}function Nf(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function gI(r=Bt()){return Nf(r)&&!!window.navigator?.standalone}function yI(){return RT()&&document.documentMode===10}function d_(r=Bt()){return Nf(r)||u_(r)||h_(r)||c_(r)||/windows phone/i.test(r)||l_(r)}/**
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
 */function f_(r,e=[]){let t;switch(r){case"Browser":t=sy(Bt());break;case"Worker":t=`${sy(Bt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ss}/${i}`}/**
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
 */class _I{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const y=e(l);h(y)}catch(y){f(y)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function vI(r,e={}){return Li(r,"GET","/v2/passwordPolicy",Vi(r,e))}/**
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
 */const wI=6;class EI{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class TI{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new _I(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await So.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sc(this,{idToken:e}),i=await On._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(dn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=i?._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(Vr(this));const t=e?ut(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vI(this),t=new EI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await pI(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,i,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Jx(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ks(r){return ut(r)}class oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=OT(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xI(r){Rc=r}function m_(r){return Rc.loadJS(r)}function II(){return Rc.recaptchaEnterpriseScript}function AI(){return Rc.gapiScript}function SI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class kI{constructor(){this.enterprise=new NI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class NI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const RI="recaptcha-enterprise",p_="NO_RECAPTCHA";class bI{constructor(e){this.type=RI,this.auth=ks(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{aI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new oI(y);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(y=>{f(y)})})}function o(l,h,f){const y=window.grecaptcha;ty(y)?y.enterprise.ready(()=>{y.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(p_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&ty(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=II();y.length!==0&&(y+=f),m_(y).then(()=>{o(f,l,h)}).catch(v=>{h(v)})}}).catch(f=>{h(f)})})}}async function ay(r,e,t,i=!1,o=!1){const l=new bI(r);let h;if(o)h=p_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const y=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const y=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Xd(r,e,t,i,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await ay(r,e,t,t==="getOobCode");return i(r,l)}else return i(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ay(r,e,t,t==="getOobCode");return i(r,h)}else return Promise.reject(l)})}/**
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
 */function CI(r,e){const t=Oi(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ri(l,e??{}))return o;Un(o,"already-initialized")}return t.initialize({options:e})}function PI(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Or);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function DI(r,e,t){const i=ks(r);pe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=g_(e),{host:h,port:f}=jI(e),y=f===null?"":`:${f}`,v={url:`${l}//${h}${y}/`},T=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){pe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),pe(Ri(v,i.config.emulator)&&Ri(T,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=v,i.emulatorConfig=T,i.settings.appVerificationDisabledForTesting=!0,Is(h)?(Tf(`${l}//${h}${y}`),xf("Auth",!0)):MI()}function g_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function jI(r){const e=g_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:ly(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:ly(h)}}}function ly(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function MI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Rf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}async function OI(r,e){return Li(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function VI(r,e){return ul(r,"POST","/v1/accounts:signInWithPassword",Vi(r,e))}/**
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
 */async function LI(r,e){return ul(r,"POST","/v1/accounts:signInWithEmailLink",Vi(r,e))}async function FI(r,e){return ul(r,"POST","/v1/accounts:signInWithEmailLink",Vi(r,e))}/**
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
 */class Za extends Rf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Za(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Za(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xd(e,t,"signInWithPassword",VI);case"emailLink":return LI(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xd(e,i,"signUpPassword",OI);case"emailLink":return FI(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ko(r,e){return ul(r,"POST","/v1/accounts:signInWithIdp",Vi(r,e))}/**
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
 */const UI="http://localhost";class ys extends Rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new ys(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ko(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ko(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ko(e,t)}buildRequest(){const e={requestUri:UI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=al(t)}return e}}/**
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
 */function zI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BI(r){const e=Ua(za(r)).link,t=e?Ua(za(e)).deep_link_id:null,i=Ua(za(r)).deep_link_id;return(i?Ua(za(i)).link:null)||i||t||e||r}class bf{constructor(e){const t=Ua(za(e)),i=t.apiKey??null,o=t.oobCode??null,l=zI(t.mode??null);pe(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=BI(e);try{return new bf(t)}catch{return null}}}/**
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
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,t){return Za._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=bf.parseLink(t);return pe(i,"argument-error"),Za._fromEmailAndCode(e,i.code,i.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cl extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vi extends cl{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.FACEBOOK_SIGN_IN_METHOD="facebook.com";vi.PROVIDER_ID="facebook.com";/**
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
 */class jr extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ys._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return jr.credential(t,i)}catch{return null}}}jr.GOOGLE_SIGN_IN_METHOD="google.com";jr.PROVIDER_ID="google.com";/**
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
 */class wi extends cl{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.GITHUB_SIGN_IN_METHOD="github.com";wi.PROVIDER_ID="github.com";/**
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
 */class Ei extends cl{constructor(){super("twitter.com")}static credential(e,t){return ys._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ei.credential(t,i)}catch{return null}}}Ei.TWITTER_SIGN_IN_METHOD="twitter.com";Ei.PROVIDER_ID="twitter.com";/**
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
 */async function HI(r,e){return ul(r,"POST","/v1/accounts:signUp",Vi(r,e))}/**
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
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await On._fromIdTokenResponse(e,i,o),h=uy(i);return new _s({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=uy(i);return new _s({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function uy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ac extends An{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new ac(e,t,i,o)}}function __(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(r,l,e,i):l})}async function qI(r,e,t=!1){const i=await Xa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return _s._forOperation(r,"link",i)}/**
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
 */async function $I(r,e,t=!1){const{auth:i}=r;if(dn(i.app))return Promise.reject(Vr(i));const o="reauthenticate";try{const l=await Xa(r,__(i,o,e,r),t);pe(l.idToken,i,"internal-error");const h=kf(l.idToken);pe(h,i,"internal-error");const{sub:f}=h;return pe(r.uid===f,i,"user-mismatch"),_s._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Un(i,"user-mismatch"),l}}/**
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
 */async function v_(r,e,t=!1){if(dn(r.app))return Promise.reject(Vr(r));const i="signIn",o=await __(r,i,e),l=await _s._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function WI(r,e){return v_(ks(r),e)}/**
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
 */async function w_(r){const e=ks(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GI(r,e,t){if(dn(r.app))return Promise.reject(Vr(r));const i=ks(r),h=await Xd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HI).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&w_(r),y}),f=await _s._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function KI(r,e,t){return dn(r.app)?Promise.reject(Vr(r)):WI(ut(r),Fo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&w_(r),i})}function QI(r,e,t,i){return ut(r).onIdTokenChanged(e,t,i)}function YI(r,e,t){return ut(r).beforeAuthStateChanged(e,t)}function JI(r){return ut(r).signOut()}const lc="__sak";/**
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
 */class E_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XI=1e3,ZI=10;class T_ extends E_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=d_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,y)=>{this.notifyListeners(h,y)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);yI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ZI):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},XI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}T_.type="LOCAL";const eA=T_;/**
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
 */class x_ extends E_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}x_.type="SESSION";const I_=x_;/**
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
 */function tA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new bc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,l)),y=await tA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
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
 */function Cf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class nA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,y)=>{const v=Cf("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(x){const k=x;if(k.data.eventId===v)switch(k.data.status){case"ack":clearTimeout(T),l=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(k.data.response);break;default:clearTimeout(T),clearTimeout(l),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function lr(){return window}function rA(r){lr().location.href=r}/**
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
 */function A_(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function iA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sA(){return navigator?.serviceWorker?.controller||null}function oA(){return A_()?self:null}/**
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
 */const S_="firebaseLocalStorageDb",aA=1,uc="firebaseLocalStorage",k_="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Cc(r,e){return r.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function lA(){const r=indexedDB.deleteDatabase(S_);return new hl(r).toPromise()}function Zd(){const r=indexedDB.open(S_,aA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(uc,{keyPath:k_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(uc)?e(i):(i.close(),await lA(),e(await Zd()))})})}async function cy(r,e,t){const i=Cc(r,!0).put({[k_]:e,value:t});return new hl(i).toPromise()}async function uA(r,e){const t=Cc(r,!1).get(e),i=await new hl(t).toPromise();return i===void 0?null:i.value}function hy(r,e){const t=Cc(r,!0).delete(e);return new hl(t).toPromise()}const cA=800,hA=3;class N_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>hA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return A_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(oA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await iA(),!this.activeServiceWorker)return;this.sender=new nA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zd();return await cy(e,lc,"1"),await hy(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>cy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>uA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Cc(o,!1).getAll();return new hl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N_.type="LOCAL";const dA=N_;new ll(3e4,6e4);/**
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
 */function fA(r,e){return e?Or(e):(pe(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Pf extends Rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mA(r){return v_(r.auth,new Pf(r),r.bypassAuthState)}function pA(r){const{auth:e,user:t}=r;return pe(t,e,"internal-error"),$I(t,new Pf(r),r.bypassAuthState)}async function gA(r){const{auth:e,user:t}=r;return pe(t,e,"internal-error"),qI(t,new Pf(r),r.bypassAuthState)}/**
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
 */class R_{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mA;case"linkViaPopup":case"linkViaRedirect":return gA;case"reauthViaPopup":case"reauthViaRedirect":return pA;default:Un(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yA=new ll(2e3,1e4);class Io extends R_{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yA.get())};e()}}Io.currentPopupAction=null;/**
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
 */const _A="pendingRedirect",Ku=new Map;class vA extends R_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const i=await wA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wA(r,e){const t=xA(e),i=TA(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function EA(r,e){Ku.set(r._key(),e)}function TA(r){return Or(r._redirectPersistence)}function xA(r){return Gu(_A,r.config.apiKey,r.name)}async function IA(r,e,t=!1){if(dn(r.app))return Promise.reject(Vr(r));const i=ks(r),o=fA(i,e),h=await new vA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const AA=600*1e3;class SA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!b_(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ar(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AA&&this.cachedEventUids.clear(),this.cachedEventUids.has(dy(e))}saveEventToCache(e){this.cachedEventUids.add(dy(e)),this.lastProcessedEventTime=Date.now()}}function dy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function b_({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function kA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(r);default:return!1}}/**
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
 */async function NA(r,e={}){return Li(r,"GET","/v1/projects",e)}/**
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
 */const RA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bA=/^https?/;async function CA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await NA(r);for(const t of e)try{if(PA(t))return}catch{}Un(r,"unauthorized-domain")}function PA(r){const e=Yd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!bA.test(t))return!1;if(RA.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const DA=new ll(3e4,6e4);function fy(){const r=lr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function jA(r){return new Promise((e,t)=>{function i(){fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fy(),t(ar(r,"network-request-failed"))},timeout:DA.get()})}if(lr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(lr().gapi?.load)i();else{const o=SI("iframefcb");return lr()[o]=()=>{gapi.load?i():t(ar(r,"network-request-failed"))},m_(`${AI()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw Qu=null,e})}let Qu=null;function MA(r){return Qu=Qu||jA(r),Qu}/**
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
 */const OA=new ll(5e3,15e3),VA="__/auth/iframe",LA="emulator/auth/iframe",FA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zA(r){const e=r.config;pe(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Sf(e,LA):`https://${r.config.authDomain}/${VA}`,i={apiKey:e.apiKey,appName:r.name,v:Ss},o=UA.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${al(i).slice(1)}`}async function BA(r){const e=await MA(r),t=lr().gapi;return pe(t,r,"internal-error"),e.open({where:document.body,url:zA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=ar(r,"network-request-failed"),f=lr().setTimeout(()=>{l(h)},OA.get());function y(){lr().clearTimeout(f),o(i)}i.ping(y).then(y,()=>{l(h)})}))}/**
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
 */const HA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qA=500,$A=600,WA="_blank",GA="http://localhost";class my{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KA(r,e,t,i=qA,o=$A){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const y={...HA,width:i.toString(),height:o.toString(),top:l,left:h},v=Bt().toLowerCase();t&&(f=a_(v)?WA:t),s_(v)&&(e=e||GA,y.scrollbars="yes");const T=Object.entries(y).reduce((k,[z,$])=>`${k}${z}=${$},`,"");if(gI(v)&&f!=="_self")return QA(e||"",f),new my(null);const x=window.open(e||"",f,T);pe(x,r,"popup-blocked");try{x.focus()}catch{}return new my(x)}function QA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const YA="__/auth/handler",JA="emulator/auth/handler",XA=encodeURIComponent("fac");async function py(r,e,t,i,o,l){pe(r.config.authDomain,r,"auth-domain-config-required"),pe(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Ss,eventId:o};if(e instanceof y_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",MT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,x]of Object.entries({}))h[T]=x}if(e instanceof cl){const T=e.getScopes().filter(x=>x!=="");T.length>0&&(h.scopes=T.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const T of Object.keys(f))f[T]===void 0&&delete f[T];const y=await r._getAppCheckToken(),v=y?`#${XA}=${encodeURIComponent(y)}`:"";return`${ZA(r)}?${al(f).slice(1)}${v}`}function ZA({config:r}){return r.emulator?Sf(r,JA):`https://${r.authDomain}/${YA}`}/**
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
 */const Pd="webStorageSupport";class eS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I_,this._completeRedirectFn=IA,this._overrideRedirectResult=EA}async _openPopup(e,t,i,o){Fr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await py(e,t,i,Yd(),o);return KA(e,l,Cf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await py(e,t,i,Yd(),o);return rA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Fr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await BA(e),i=new SA(e);return t.register("authEvent",o=>(pe(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pd,{type:Pd},o=>{const l=o?.[0]?.[Pd];l!==void 0&&t(!!l),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return d_()||o_()||Nf()}}const tS=eS;var gy="@firebase/auth",yy="1.11.1";/**
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
 */class nS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iS(r){Fn(new In("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const y={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f_(r)},v=new TI(i,o,l,y);return PI(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Fn(new In("auth-internal",e=>{const t=ks(e.getProvider("auth").getImmediate());return(i=>new nS(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(gy,yy,rS(r)),tn(gy,yy,"esm2020")}/**
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
 */const sS=300,oS=U0("authIdTokenMaxAge")||sS;let _y=null;const aS=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>oS)return;const o=t?.token;_y!==o&&(_y=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function lS(r=Nc()){const e=Oi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=CI(r,{popupRedirectResolver:tS,persistence:[dA,eA,I_]}),i=U0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=aS(l.toString());YI(t,h,()=>h(t.currentUser)),QI(t,f=>h(f))}}const o=V0("auth");return o&&DI(t,`http://${o}`),t}function uS(){return document.getElementsByTagName("head")?.[0]??document}xI({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=ar("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",uS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iS("Browser");var cS="firebase",hS="12.6.0";/**
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
 */tn(cS,hS,"app");var vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,C_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,A){function N(){}N.prototype=A.prototype,b.F=A.prototype,b.prototype=new N,b.prototype.constructor=b,b.D=function(D,C,M){for(var S=Array(arguments.length-2),We=2;We<arguments.length;We++)S[We-2]=arguments[We];return A.prototype[C].apply(D,S)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(b,A,N){N||(N=0);const D=Array(16);if(typeof A=="string")for(var C=0;C<16;++C)D[C]=A.charCodeAt(N++)|A.charCodeAt(N++)<<8|A.charCodeAt(N++)<<16|A.charCodeAt(N++)<<24;else for(C=0;C<16;++C)D[C]=A[N++]|A[N++]<<8|A[N++]<<16|A[N++]<<24;A=b.g[0],N=b.g[1],C=b.g[2];let M=b.g[3],S;S=A+(M^N&(C^M))+D[0]+3614090360&4294967295,A=N+(S<<7&4294967295|S>>>25),S=M+(C^A&(N^C))+D[1]+3905402710&4294967295,M=A+(S<<12&4294967295|S>>>20),S=C+(N^M&(A^N))+D[2]+606105819&4294967295,C=M+(S<<17&4294967295|S>>>15),S=N+(A^C&(M^A))+D[3]+3250441966&4294967295,N=C+(S<<22&4294967295|S>>>10),S=A+(M^N&(C^M))+D[4]+4118548399&4294967295,A=N+(S<<7&4294967295|S>>>25),S=M+(C^A&(N^C))+D[5]+1200080426&4294967295,M=A+(S<<12&4294967295|S>>>20),S=C+(N^M&(A^N))+D[6]+2821735955&4294967295,C=M+(S<<17&4294967295|S>>>15),S=N+(A^C&(M^A))+D[7]+4249261313&4294967295,N=C+(S<<22&4294967295|S>>>10),S=A+(M^N&(C^M))+D[8]+1770035416&4294967295,A=N+(S<<7&4294967295|S>>>25),S=M+(C^A&(N^C))+D[9]+2336552879&4294967295,M=A+(S<<12&4294967295|S>>>20),S=C+(N^M&(A^N))+D[10]+4294925233&4294967295,C=M+(S<<17&4294967295|S>>>15),S=N+(A^C&(M^A))+D[11]+2304563134&4294967295,N=C+(S<<22&4294967295|S>>>10),S=A+(M^N&(C^M))+D[12]+1804603682&4294967295,A=N+(S<<7&4294967295|S>>>25),S=M+(C^A&(N^C))+D[13]+4254626195&4294967295,M=A+(S<<12&4294967295|S>>>20),S=C+(N^M&(A^N))+D[14]+2792965006&4294967295,C=M+(S<<17&4294967295|S>>>15),S=N+(A^C&(M^A))+D[15]+1236535329&4294967295,N=C+(S<<22&4294967295|S>>>10),S=A+(C^M&(N^C))+D[1]+4129170786&4294967295,A=N+(S<<5&4294967295|S>>>27),S=M+(N^C&(A^N))+D[6]+3225465664&4294967295,M=A+(S<<9&4294967295|S>>>23),S=C+(A^N&(M^A))+D[11]+643717713&4294967295,C=M+(S<<14&4294967295|S>>>18),S=N+(M^A&(C^M))+D[0]+3921069994&4294967295,N=C+(S<<20&4294967295|S>>>12),S=A+(C^M&(N^C))+D[5]+3593408605&4294967295,A=N+(S<<5&4294967295|S>>>27),S=M+(N^C&(A^N))+D[10]+38016083&4294967295,M=A+(S<<9&4294967295|S>>>23),S=C+(A^N&(M^A))+D[15]+3634488961&4294967295,C=M+(S<<14&4294967295|S>>>18),S=N+(M^A&(C^M))+D[4]+3889429448&4294967295,N=C+(S<<20&4294967295|S>>>12),S=A+(C^M&(N^C))+D[9]+568446438&4294967295,A=N+(S<<5&4294967295|S>>>27),S=M+(N^C&(A^N))+D[14]+3275163606&4294967295,M=A+(S<<9&4294967295|S>>>23),S=C+(A^N&(M^A))+D[3]+4107603335&4294967295,C=M+(S<<14&4294967295|S>>>18),S=N+(M^A&(C^M))+D[8]+1163531501&4294967295,N=C+(S<<20&4294967295|S>>>12),S=A+(C^M&(N^C))+D[13]+2850285829&4294967295,A=N+(S<<5&4294967295|S>>>27),S=M+(N^C&(A^N))+D[2]+4243563512&4294967295,M=A+(S<<9&4294967295|S>>>23),S=C+(A^N&(M^A))+D[7]+1735328473&4294967295,C=M+(S<<14&4294967295|S>>>18),S=N+(M^A&(C^M))+D[12]+2368359562&4294967295,N=C+(S<<20&4294967295|S>>>12),S=A+(N^C^M)+D[5]+4294588738&4294967295,A=N+(S<<4&4294967295|S>>>28),S=M+(A^N^C)+D[8]+2272392833&4294967295,M=A+(S<<11&4294967295|S>>>21),S=C+(M^A^N)+D[11]+1839030562&4294967295,C=M+(S<<16&4294967295|S>>>16),S=N+(C^M^A)+D[14]+4259657740&4294967295,N=C+(S<<23&4294967295|S>>>9),S=A+(N^C^M)+D[1]+2763975236&4294967295,A=N+(S<<4&4294967295|S>>>28),S=M+(A^N^C)+D[4]+1272893353&4294967295,M=A+(S<<11&4294967295|S>>>21),S=C+(M^A^N)+D[7]+4139469664&4294967295,C=M+(S<<16&4294967295|S>>>16),S=N+(C^M^A)+D[10]+3200236656&4294967295,N=C+(S<<23&4294967295|S>>>9),S=A+(N^C^M)+D[13]+681279174&4294967295,A=N+(S<<4&4294967295|S>>>28),S=M+(A^N^C)+D[0]+3936430074&4294967295,M=A+(S<<11&4294967295|S>>>21),S=C+(M^A^N)+D[3]+3572445317&4294967295,C=M+(S<<16&4294967295|S>>>16),S=N+(C^M^A)+D[6]+76029189&4294967295,N=C+(S<<23&4294967295|S>>>9),S=A+(N^C^M)+D[9]+3654602809&4294967295,A=N+(S<<4&4294967295|S>>>28),S=M+(A^N^C)+D[12]+3873151461&4294967295,M=A+(S<<11&4294967295|S>>>21),S=C+(M^A^N)+D[15]+530742520&4294967295,C=M+(S<<16&4294967295|S>>>16),S=N+(C^M^A)+D[2]+3299628645&4294967295,N=C+(S<<23&4294967295|S>>>9),S=A+(C^(N|~M))+D[0]+4096336452&4294967295,A=N+(S<<6&4294967295|S>>>26),S=M+(N^(A|~C))+D[7]+1126891415&4294967295,M=A+(S<<10&4294967295|S>>>22),S=C+(A^(M|~N))+D[14]+2878612391&4294967295,C=M+(S<<15&4294967295|S>>>17),S=N+(M^(C|~A))+D[5]+4237533241&4294967295,N=C+(S<<21&4294967295|S>>>11),S=A+(C^(N|~M))+D[12]+1700485571&4294967295,A=N+(S<<6&4294967295|S>>>26),S=M+(N^(A|~C))+D[3]+2399980690&4294967295,M=A+(S<<10&4294967295|S>>>22),S=C+(A^(M|~N))+D[10]+4293915773&4294967295,C=M+(S<<15&4294967295|S>>>17),S=N+(M^(C|~A))+D[1]+2240044497&4294967295,N=C+(S<<21&4294967295|S>>>11),S=A+(C^(N|~M))+D[8]+1873313359&4294967295,A=N+(S<<6&4294967295|S>>>26),S=M+(N^(A|~C))+D[15]+4264355552&4294967295,M=A+(S<<10&4294967295|S>>>22),S=C+(A^(M|~N))+D[6]+2734768916&4294967295,C=M+(S<<15&4294967295|S>>>17),S=N+(M^(C|~A))+D[13]+1309151649&4294967295,N=C+(S<<21&4294967295|S>>>11),S=A+(C^(N|~M))+D[4]+4149444226&4294967295,A=N+(S<<6&4294967295|S>>>26),S=M+(N^(A|~C))+D[11]+3174756917&4294967295,M=A+(S<<10&4294967295|S>>>22),S=C+(A^(M|~N))+D[2]+718787259&4294967295,C=M+(S<<15&4294967295|S>>>17),S=N+(M^(C|~A))+D[9]+3951481745&4294967295,b.g[0]=b.g[0]+A&4294967295,b.g[1]=b.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+M&4294967295}i.prototype.v=function(b,A){A===void 0&&(A=b.length);const N=A-this.blockSize,D=this.C;let C=this.h,M=0;for(;M<A;){if(C==0)for(;M<=N;)o(this,b,M),M+=this.blockSize;if(typeof b=="string"){for(;M<A;)if(D[C++]=b.charCodeAt(M++),C==this.blockSize){o(this,D),C=0;break}}else for(;M<A;)if(D[C++]=b[M++],C==this.blockSize){o(this,D),C=0;break}}this.h=C,this.o+=A},i.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var A=1;A<b.length-8;++A)b[A]=0;A=this.o*8;for(var N=b.length-8;N<b.length;++N)b[N]=A&255,A/=256;for(this.v(b),b=Array(16),A=0,N=0;N<4;++N)for(let D=0;D<32;D+=8)b[A++]=this.g[N]>>>D&255;return b};function l(b,A){var N=f;return Object.prototype.hasOwnProperty.call(N,b)?N[b]:N[b]=A(b)}function h(b,A){this.h=A;const N=[];let D=!0;for(let C=b.length-1;C>=0;C--){const M=b[C]|0;D&&M==A||(N[C]=M,D=!1)}this.g=N}var f={};function y(b){return-128<=b&&b<128?l(b,function(A){return new h([A|0],A<0?-1:0)}):new h([b|0],b<0?-1:0)}function v(b){if(isNaN(b)||!isFinite(b))return x;if(b<0)return B(v(-b));const A=[];let N=1;for(let D=0;b>=N;D++)A[D]=b/N|0,N*=4294967296;return new h(A,0)}function T(b,A){if(b.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(b.charAt(0)=="-")return B(T(b.substring(1),A));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const N=v(Math.pow(A,8));let D=x;for(let M=0;M<b.length;M+=8){var C=Math.min(8,b.length-M);const S=parseInt(b.substring(M,M+C),A);C<8?(C=v(Math.pow(A,C)),D=D.j(C).add(v(S))):(D=D.j(N),D=D.add(v(S)))}return D}var x=y(0),k=y(1),z=y(16777216);r=h.prototype,r.m=function(){if(Q(this))return-B(this).m();let b=0,A=1;for(let N=0;N<this.g.length;N++){const D=this.i(N);b+=(D>=0?D:4294967296+D)*A,A*=4294967296}return b},r.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if($(this))return"0";if(Q(this))return"-"+B(this).toString(b);const A=v(Math.pow(b,6));var N=this;let D="";for(;;){const C=J(N,A).g;N=he(N,C.j(A));let M=((N.g.length>0?N.g[0]:N.h)>>>0).toString(b);if(N=C,$(N))return M+D;for(;M.length<6;)M="0"+M;D=M+D}},r.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function $(b){if(b.h!=0)return!1;for(let A=0;A<b.g.length;A++)if(b.g[A]!=0)return!1;return!0}function Q(b){return b.h==-1}r.l=function(b){return b=he(this,b),Q(b)?-1:$(b)?0:1};function B(b){const A=b.g.length,N=[];for(let D=0;D<A;D++)N[D]=~b.g[D];return new h(N,~b.h).add(k)}r.abs=function(){return Q(this)?B(this):this},r.add=function(b){const A=Math.max(this.g.length,b.g.length),N=[];let D=0;for(let C=0;C<=A;C++){let M=D+(this.i(C)&65535)+(b.i(C)&65535),S=(M>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);D=S>>>16,M&=65535,S&=65535,N[C]=S<<16|M}return new h(N,N[N.length-1]&-2147483648?-1:0)};function he(b,A){return b.add(B(A))}r.j=function(b){if($(this)||$(b))return x;if(Q(this))return Q(b)?B(this).j(B(b)):B(B(this).j(b));if(Q(b))return B(this.j(B(b)));if(this.l(z)<0&&b.l(z)<0)return v(this.m()*b.m());const A=this.g.length+b.g.length,N=[];for(var D=0;D<2*A;D++)N[D]=0;for(D=0;D<this.g.length;D++)for(let C=0;C<b.g.length;C++){const M=this.i(D)>>>16,S=this.i(D)&65535,We=b.i(C)>>>16,Et=b.i(C)&65535;N[2*D+2*C]+=S*Et,ye(N,2*D+2*C),N[2*D+2*C+1]+=M*Et,ye(N,2*D+2*C+1),N[2*D+2*C+1]+=S*We,ye(N,2*D+2*C+1),N[2*D+2*C+2]+=M*We,ye(N,2*D+2*C+2)}for(b=0;b<A;b++)N[b]=N[2*b+1]<<16|N[2*b];for(b=A;b<2*A;b++)N[b]=0;return new h(N,0)};function ye(b,A){for(;(b[A]&65535)!=b[A];)b[A+1]+=b[A]>>>16,b[A]&=65535,A++}function de(b,A){this.g=b,this.h=A}function J(b,A){if($(A))throw Error("division by zero");if($(b))return new de(x,x);if(Q(b))return A=J(B(b),A),new de(B(A.g),B(A.h));if(Q(A))return A=J(b,B(A)),new de(B(A.g),A.h);if(b.g.length>30){if(Q(b)||Q(A))throw Error("slowDivide_ only works with positive integers.");for(var N=k,D=A;D.l(b)<=0;)N=De(N),D=De(D);var C=Ie(N,1),M=Ie(D,1);for(D=Ie(D,2),N=Ie(N,2);!$(D);){var S=M.add(D);S.l(b)<=0&&(C=C.add(N),M=S),D=Ie(D,1),N=Ie(N,1)}return A=he(b,C.j(A)),new de(C,A)}for(C=x;b.l(A)>=0;){for(N=Math.max(1,Math.floor(b.m()/A.m())),D=Math.ceil(Math.log(N)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),M=v(N),S=M.j(A);Q(S)||S.l(b)>0;)N-=D,M=v(N),S=M.j(A);$(M)&&(M=k),C=C.add(M),b=he(b,S)}return new de(C,b)}r.B=function(b){return J(this,b).h},r.and=function(b){const A=Math.max(this.g.length,b.g.length),N=[];for(let D=0;D<A;D++)N[D]=this.i(D)&b.i(D);return new h(N,this.h&b.h)},r.or=function(b){const A=Math.max(this.g.length,b.g.length),N=[];for(let D=0;D<A;D++)N[D]=this.i(D)|b.i(D);return new h(N,this.h|b.h)},r.xor=function(b){const A=Math.max(this.g.length,b.g.length),N=[];for(let D=0;D<A;D++)N[D]=this.i(D)^b.i(D);return new h(N,this.h^b.h)};function De(b){const A=b.g.length+1,N=[];for(let D=0;D<A;D++)N[D]=b.i(D)<<1|b.i(D-1)>>>31;return new h(N,b.h)}function Ie(b,A){const N=A>>5;A%=32;const D=b.g.length-N,C=[];for(let M=0;M<D;M++)C[M]=A>0?b.i(M+N)>>>A|b.i(M+N+1)<<32-A:b.i(M+N);return new h(C,b.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,C_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=T,Si=h}).apply(typeof vy<"u"?vy:typeof self<"u"?self:typeof window<"u"?window:{});var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var P_,Ba,D_,Yu,ef,j_,M_,O_;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fu=="object"&&Fu];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var V=u[E];if(!(V in _))break e;_=_[V]}u=u[u.length-1],E=_[u],p=p(E),p!=E&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(p){var _=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&_.push([E,p[E]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function y(u,p,_){return u.call.apply(u.bind,arguments)}function v(u,p,_){return v=y,v.apply(null,arguments)}function T(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function x(u,p){function _(){}_.prototype=p.prototype,u.Z=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(E,V,U){for(var Z=Array(arguments.length-2),we=2;we<arguments.length;we++)Z[we-2]=arguments[we];return p.prototype[V].apply(E,Z)}}var k=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function z(u){const p=u.length;if(p>0){const _=Array(p);for(let E=0;E<p;E++)_[E]=u[E];return _}return[]}function $(u,p){for(let E=1;E<arguments.length;E++){const V=arguments[E];var _=typeof V;if(_=_!="object"?_:V?Array.isArray(V)?"array":_:"null",_=="array"||_=="object"&&typeof V.length=="number"){_=u.length||0;const U=V.length||0;u.length=_+U;for(let Z=0;Z<U;Z++)u[_+Z]=V[Z]}else u.push(V)}}class Q{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function B(u){h.setTimeout(()=>{throw u},0)}function he(){var u=b;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ye{constructor(){this.h=this.g=null}add(p,_){const E=de.get();E.set(p,_),this.h?this.h.next=E:this.g=E,this.h=E}}var de=new Q(()=>new J,u=>u.reset());class J{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let De,Ie=!1,b=new ye,A=()=>{const u=Promise.resolve(void 0);De=()=>{u.then(N)}};function N(){for(var u;u=he();){try{u.h.call(u.g)}catch(_){B(_)}var p=de;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}Ie=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var M=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,p),h.removeEventListener("test",_,p)}catch{}return u})();function S(u){return/^[\s\xa0]*$/.test(u)}function We(u,p){C.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}x(We,C),We.prototype.init=function(u,p){const _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(_=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&We.Z.h.call(this)},We.prototype.h=function(){We.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Et="closure_listenable_"+(Math.random()*1e6|0),Dt=0;function Xe(u,p,_,E,V){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!E,this.ha=V,this.key=++Dt,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ce(u,p,_){for(const E in u)p.call(_,u[E],E,u)}function ie(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function j(u){const p={};for(const _ in u)p[_]=u[_];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(u,p){let _,E;for(let V=1;V<arguments.length;V++){E=arguments[V];for(_ in E)u[_]=E[_];for(let U=0;U<W.length;U++)_=W[U],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function xe(u){this.src=u,this.g={},this.h=0}xe.prototype.add=function(u,p,_,E,V){const U=u.toString();u=this.g[U],u||(u=this.g[U]=[],this.h++);const Z=Ne(u,p,E,V);return Z>-1?(p=u[Z],_||(p.fa=!1)):(p=new Xe(p,this.src,U,!!E,V),p.fa=_,u.push(p)),p};function ke(u,p){const _=p.type;if(_ in u.g){var E=u.g[_],V=Array.prototype.indexOf.call(E,p,void 0),U;(U=V>=0)&&Array.prototype.splice.call(E,V,1),U&&(ee(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Ne(u,p,_,E){for(let V=0;V<u.length;++V){const U=u[V];if(!U.da&&U.listener==p&&U.capture==!!_&&U.ha==E)return V}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Me={};function qe(u,p,_,E,V){if(Array.isArray(p)){for(let U=0;U<p.length;U++)qe(u,p[U],_,E,V);return null}return _=Wo(_),u&&u[Et]?u.J(p,_,f(E)?!!E.capture:!1,V):Ht(u,p,_,!1,E,V)}function Ht(u,p,_,E,V,U){if(!p)throw Error("Invalid event type");const Z=f(V)?!!V.capture:!!V;let we=Ds(u);if(we||(u[Fe]=we=new xe(u)),_=we.add(p,_,E,Z,U),_.proxy)return _;if(E=Cs(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)M||(V=Z),V===void 0&&(V=!1),u.addEventListener(p.toString(),E,V);else if(u.attachEvent)u.attachEvent(Ps(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Cs(){function u(_){return p.call(u.src,u.listener,_)}const p=vl;return u}function $o(u,p,_,E,V){if(Array.isArray(p))for(var U=0;U<p.length;U++)$o(u,p[U],_,E,V);else E=f(E)?!!E.capture:!!E,_=Wo(_),u&&u[Et]?(u=u.i,U=String(p).toString(),U in u.g&&(p=u.g[U],_=Ne(p,_,E,V),_>-1&&(ee(p[_]),Array.prototype.splice.call(p,_,1),p.length==0&&(delete u.g[U],u.h--)))):u&&(u=Ds(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Ne(p,_,E,V)),(_=u>-1?p[u]:null)&&Br(_))}function Br(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Et])ke(p.i,u);else{var _=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(_,E,u.capture):p.detachEvent?p.detachEvent(Ps(_),E):p.addListener&&p.removeListener&&p.removeListener(E),(_=Ds(p))?(ke(_,u),_.h==0&&(_.src=null,p[Fe]=null)):ee(u)}}}function Ps(u){return u in Me?Me[u]:Me[u]="on"+u}function vl(u,p){if(u.da)u=!0;else{p=new We(p,this);const _=u.listener,E=u.ha||u.src;u.fa&&Br(u),u=_.call(E,p)}return u}function Ds(u){return u=u[Fe],u instanceof xe?u:null}var zi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wo(u){return typeof u=="function"?u:(u[zi]||(u[zi]=function(p){return u.handleEvent(p)}),u[zi])}function ct(){D.call(this),this.i=new xe(this),this.M=this,this.G=null}x(ct,D),ct.prototype[Et]=!0,ct.prototype.removeEventListener=function(u,p,_,E){$o(this,u,p,_,E)};function st(u,p){var _,E=u.G;if(E)for(_=[];E;E=E.G)_.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new C(p,u);else if(p instanceof C)p.target=p.target||u;else{var V=p;p=new C(E,u),Te(p,V)}V=!0;let U,Z;if(_)for(Z=_.length-1;Z>=0;Z--)U=p.g=_[Z],V=Sn(U,E,!0,p)&&V;if(U=p.g=u,V=Sn(U,E,!0,p)&&V,V=Sn(U,E,!1,p)&&V,_)for(Z=0;Z<_.length;Z++)U=p.g=_[Z],V=Sn(U,E,!1,p)&&V}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const _=u.g[p];for(let E=0;E<_.length;E++)ee(_[E]);delete u.g[p],u.h--}}this.G=null},ct.prototype.J=function(u,p,_,E){return this.i.add(String(u),p,!1,_,E)},ct.prototype.K=function(u,p,_,E){return this.i.add(String(u),p,!0,_,E)};function Sn(u,p,_,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let V=!0;for(let U=0;U<p.length;++U){const Z=p[U];if(Z&&!Z.da&&Z.capture==_){const we=Z.listener,ot=Z.ha||Z.src;Z.fa&&ke(u.i,Z),V=we.call(ot,E)!==!1&&V}}return V&&!E.defaultPrevented}function Go(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=v(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(u,p||0)}function Ko(u){u.g=Go(()=>{u.g=null,u.i&&(u.i=!1,Ko(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class wl extends D{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Ko(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(u){D.call(this),this.h=u,this.g={}}x(Hr,D);var Qo=[];function js(u){ce(u.g,function(p,_){this.g.hasOwnProperty(_)&&Br(p)},u),u.g={}}Hr.prototype.N=function(){Hr.Z.N.call(this),js(this)},Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=h.JSON.stringify,El=h.JSON.parse,Bi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function $r(){}function Tl(){}var Wr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ms(){C.call(this,"d")}x(Ms,C);function Yo(){C.call(this,"c")}x(Yo,C);var kn={},Os=null;function Gr(){return Os=Os||new ct}kn.Ia="serverreachability";function Vs(u){C.call(this,kn.Ia,u)}x(Vs,C);function gr(u){const p=Gr();st(p,new Vs(p))}kn.STAT_EVENT="statevent";function yr(u,p){C.call(this,kn.STAT_EVENT,u),this.stat=p}x(yr,C);function rt(u){const p=Gr();st(p,new yr(p,u))}kn.Ja="timingevent";function Jo(u,p){C.call(this,kn.Ja,u),this.size=p}x(Jo,C);function Kr(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},p)}function Qr(){this.g=!0}Qr.prototype.ua=function(){this.g=!1};function xl(u,p,_,E,V,U){u.info(function(){if(u.g)if(U){var Z="",we=U.split("&");for(let ze=0;ze<we.length;ze++){var ot=we[ze].split("=");if(ot.length>1){const ht=ot[0];ot=ot[1];const ln=ht.split("_");Z=ln.length>=2&&ln[1]=="type"?Z+(ht+"="+ot+"&"):Z+(ht+"=redacted&")}}}else Z=null;else Z=U;return"XMLHTTP REQ ("+E+") [attempt "+V+"]: "+p+`
`+_+`
`+Z})}function Il(u,p,_,E,V,U,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+V+"]: "+p+`
`+_+`
`+U+" "+Z})}function Bn(u,p,_,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Hi(u,_)+(E?" "+E:"")})}function Al(u,p){u.info(function(){return"TIMEOUT: "+p})}Qr.prototype.info=function(){};function Hi(u,p){if(!u.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(u=0;u<U.length;u++)if(Array.isArray(U[u])){var _=U[u];if(!(_.length<2)){var E=_[1];if(Array.isArray(E)&&!(E.length<1)){var V=E[0];if(V!="noop"&&V!="stop"&&V!="close")for(let Z=1;Z<E.length;Z++)E[Z]=""}}}}return qr(U)}catch{return p}}var Yr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Jr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Sl;function _r(){}x(_r,$r),_r.prototype.g=function(){return new XMLHttpRequest},Sl=new _r;function Hn(u){return encodeURIComponent(String(u))}function Ls(u){var p=1;u=u.split(":");const _=[];for(;p>0&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function pn(u,p,_,E){this.j=u,this.i=p,this.l=_,this.S=E||1,this.V=new Hr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var Nl={},Xo={};function Nn(u,p,_){u.M=1,u.A=wr(gn(p)),u.u=_,u.R=!0,Zo(u,null)}function Zo(u,p){u.F=Date.now(),qi(u),u.B=gn(u.A);var _=u.B,E=u.S;Array.isArray(E)||(E=[String(E)]),ua(_.i,"t",E),u.C=0,_=u.j.L,u.h=new kl,u.g=Ll(u.j,_?p:null,!u.u),u.P>0&&(u.O=new wl(v(u.Y,u,u.g),u.P)),p=u.V,_=u.g,E=u.ba;var V="readystatechange";Array.isArray(V)||(V&&(Qo[0]=V.toString()),V=Qo);for(let U=0;U<V.length;U++){const Z=qe(_,V[U],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.J?j(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),gr(),xl(u.i,u.v,u.B,u.l,u.S,u.u)}pn.prototype.ba=function(u){u=u.target;const p=this.O;p&&Yn(u)==3?p.j():this.Y(u)},pn.prototype.Y=function(u){try{if(u==this.g)e:{const we=Yn(this.g),ot=this.g.ya(),ze=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||Ol(this.g)))){this.K||we!=4||ot==7||(ot==8||ze<=0?gr(3):gr(2)),Fs(this);var p=this.g.ca();this.X=p;var _=Rl(this);if(this.o=p==200,Il(this.i,this.v,this.B,this.l,this.S,we,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,V=this.g;if((E=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(E)){var U=E;break t}}U=null}if(u=U)Bn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qe(this,u);else{this.o=!1,this.m=3,rt(12),vr(this),$i(this);break e}}if(this.R){u=!0;let ht;for(;!this.K&&this.C<_.length;)if(ht=Cl(this,_),ht==Xo){we==4&&(this.m=4,rt(14),u=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Nl){this.m=4,rt(15),Bn(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Bn(this.i,this.l,ht,null),Qe(this,ht);if(bl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||_.length!=0||this.h.h||(this.m=1,rt(16),u=!1),this.o=this.o&&u,!u)Bn(this.i,this.l,_,"[Invalid Chunked Response]"),vr(this),$i(this);else if(_.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),es(Z),Z.P=!0,rt(11))}}else Bn(this.i,this.l,_,null),Qe(this,_);we==4&&vr(this),this.o&&!this.K&&(we==4?Qs(this.j,this):(this.o=!1,qi(this)))}else ha(this.g),p==400&&_.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),vr(this),$i(this)}}}catch{}finally{}};function Rl(u){if(!bl(u))return u.g.la();const p=Ol(u.g);if(p==="")return"";let _="";const E=p.length,V=Yn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return vr(u),$i(u),"";u.h.i=new h.TextDecoder}for(let U=0;U<E;U++)u.h.h=!0,_+=u.h.i.decode(p[U],{stream:!(V&&U==E-1)});return p.length=0,u.h.g+=_,u.C=0,u.h.g}function bl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Cl(u,p){var _=u.C,E=p.indexOf(`
`,_);return E==-1?Xo:(_=Number(p.substring(_,E)),isNaN(_)?Nl:(E+=1,E+_>p.length?Xo:(p=p.slice(E,E+_),u.C=E+_,p)))}pn.prototype.cancel=function(){this.K=!0,vr(this)};function qi(u){u.T=Date.now()+u.H,ea(u,u.H)}function ea(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Kr(v(u.aa,u),p)}function Fs(u){u.D&&(h.clearTimeout(u.D),u.D=null)}pn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Al(this.i,this.B),this.M!=2&&(gr(),rt(17)),vr(this),this.m=2,$i(this)):ea(this,this.T-u)};function $i(u){u.j.I==0||u.K||Qs(u.j,u)}function vr(u){Fs(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,js(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function Qe(u,p){try{var _=u.j;if(_.I!=0&&(_.g==u||na(_.h,u))){if(!u.L&&na(_.h,u)&&_.I==3){try{var E=_.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var V=E;if(V[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)Ks(_),on(_);else break e;Zn(_),rt(18)}}else _.xa=V[1],0<_.xa-_.K&&V[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Kr(v(_.Va,_),6e3));Wi(_.h)<=1&&_.ta&&(_.ta=void 0)}else an(_,11)}else if((u.L||_.g==u)&&Ks(_),!S(p))for(V=_.Ba.g.parse(p),p=0;p<V.length;p++){let ze=V[p];const ht=ze[0];if(!(ht<=_.K))if(_.K=ht,ze=ze[1],_.I==2)if(ze[0]=="c"){_.M=ze[1],_.ba=ze[2];const ln=ze[3];ln!=null&&(_.ka=ln,_.j.info("VER="+_.ka));const Ar=ze[4];Ar!=null&&(_.za=Ar,_.j.info("SVER="+_.za));const er=ze[5];er!=null&&typeof er=="number"&&er>0&&(E=1.5*er,_.O=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const tr=u.g;if(tr){const Xs=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xs){var U=E.h;U.g||Xs.indexOf("spdy")==-1&&Xs.indexOf("quic")==-1&&Xs.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(zs(U,U.h),U.h=null))}if(E.G){const ma=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;ma&&(E.wa=ma,Le(E.J,E.G,ma))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),E=_;var Z=u;if(E.na=fa(E,E.L?E.ba:null,E.W),Z.L){Gi(E.h,Z);var we=Z,ot=E.O;ot&&(we.H=ot),we.D&&(Fs(we),qi(we)),E.g=Z}else jt(E);_.i.length>0&&Ir(_)}else ze[0]!="stop"&&ze[0]!="close"||an(_,7);else _.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?an(_,7):Ws(_):ze[0]!="noop"&&_.l&&_.l.qa(ze),_.A=0)}}gr(4)}catch{}}var Xc=class{constructor(u,p){this.g=u,this.map=p}};function Us(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ta(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Wi(u){return u.h?1:u.g?u.g.size:0}function na(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function zs(u,p){u.g?u.g.add(p):u.h=p}function Gi(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Us.prototype.cancel=function(){if(this.i=nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function nn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.G);return p}return z(u.i)}var Pl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rn(u,p){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const E=u[_].indexOf("=");let V,U=null;E>=0?(V=u[_].substring(0,E),U=u[_].substring(E+1)):V=u[_],p(V,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function qn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof qn?(this.l=u.l,Ki(this,u.j),this.o=u.o,this.g=u.g,$n(this,u.u),this.h=u.h,Xr(this,ca(u.i)),this.m=u.m):u&&(p=String(u).match(Pl))?(this.l=!1,Ki(this,p[1]||"",!0),this.o=Qi(p[2]||""),this.g=Qi(p[3]||"",!0),$n(this,p[4]),this.h=Qi(p[5]||"",!0),Xr(this,p[6]||"",!0),this.m=Qi(p[7]||"")):(this.l=!1,this.i=new Pe(null,this.l))}qn.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(Yi(p,ia,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Yi(p,ia,!0),"@"),u.push(Hn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Yi(_,_.charAt(0)=="/"?Ji:sa,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Yi(_,oa)),u.join("")},qn.prototype.resolve=function(u){const p=gn(this);let _=!!u.j;_?Ki(p,u.j):_=!!u.o,_?p.o=u.o:_=!!u.g,_?p.g=u.g:_=u.u!=null;var E=u.h;if(_)$n(p,u.u);else if(_=!!u.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var V=p.h.lastIndexOf("/");V!=-1&&(E=p.h.slice(0,V+1)+E)}if(V=E,V==".."||V==".")E="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){E=V.lastIndexOf("/",0)==0,V=V.split("/");const U=[];for(let Z=0;Z<V.length;){const we=V[Z++];we=="."?E&&Z==V.length&&U.push(""):we==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),E&&Z==V.length&&U.push("")):(U.push(we),E=!0)}E=U.join("/")}else E=V}return _?p.h=E:_=u.i.toString()!=="",_?Xr(p,ca(u.i)):_=!!u.m,_&&(p.m=u.m),p};function gn(u){return new qn(u)}function Ki(u,p,_){u.j=_?Qi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function $n(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function Xr(u,p,_){p instanceof Pe?(u.i=p,Hs(u.i,u.l)):(_||(p=Yi(p,Zc)),u.i=new Pe(p,u.l))}function Le(u,p,_){u.i.set(p,_)}function wr(u){return Le(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Qi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yi(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,ra),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ra(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ia=/[#\/\?@]/g,sa=/[#\?:]/g,Ji=/[#\?]/g,Zc=/[#\?@]/g,oa=/#/g;function Pe(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Wn(u){u.g||(u.g=new Map,u.h=0,u.i&&rn(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}r=Pe.prototype,r.add=function(u,p){Wn(this),this.i=null,u=Gn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function aa(u,p){Wn(u),p=Gn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Bs(u,p){return Wn(u),p=Gn(u,p),u.g.has(p)}r.forEach=function(u,p){Wn(this),this.g.forEach(function(_,E){_.forEach(function(V){u.call(p,V,E,this)},this)},this)};function la(u,p){Wn(u);let _=[];if(typeof p=="string")Bs(u,p)&&(_=_.concat(u.g.get(Gn(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)_=_.concat(u[p]);return _}r.set=function(u,p){return Wn(this),this.i=null,u=Gn(this,u),Bs(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=la(this,u),u.length>0?String(u[0]):p):p};function ua(u,p,_){aa(u,p),_.length>0&&(u.i=null,u.g.set(Gn(u,p),z(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var _=p[E];const V=Hn(_);_=la(this,_);for(let U=0;U<_.length;U++){let Z=V;_[U]!==""&&(Z+="="+Hn(_[U])),u.push(Z)}}return this.i=u.join("&")};function ca(u){const p=new Pe;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function Gn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Hs(u,p){p&&!u.j&&(Wn(u),u.i=null,u.g.forEach(function(_,E){const V=E.toLowerCase();E!=V&&(aa(this,E),ua(this,V,_))},u)),u.j=p}function Kn(u,p){const _=new Qr;if(h.Image){const E=new Image;E.onload=T(St,_,"TestLoadImage: loaded",!0,p,E),E.onerror=T(St,_,"TestLoadImage: error",!1,p,E),E.onabort=T(St,_,"TestLoadImage: abort",!1,p,E),E.ontimeout=T(St,_,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Qn(u,p){const _=new Qr,E=new AbortController,V=setTimeout(()=>{E.abort(),St(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(U=>{clearTimeout(V),U.ok?St(_,"TestPingServer: ok",!0,p):St(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),St(_,"TestPingServer: error",!1,p)})}function St(u,p,_,E,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),E(_)}catch{}}function Xi(){this.g=new Bi}function Er(u){this.i=u.Sb||null,this.h=u.ab||!1}x(Er,$r),Er.prototype.g=function(){return new sn(this.i,this.h)};function sn(u,p){ct.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}x(sn,ct),r=sn.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,Rn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Dl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Dl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Zr(this):Rn(this),this.readyState==3&&Dl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,Zr(this))},r.Na=function(u){this.g&&(this.response=u,Zr(this))},r.ga=function(){this.g&&Zr(this)};function Zr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Rn(u)}r.setRequestHeader=function(u,p){this.A.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Rn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function jl(u){let p="";return ce(u,function(_,E){p+=E,p+=":",p+=_,p+=`\r
`}),p}function qs(u,p,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=jl(_),typeof u=="string"?_!=null&&Hn(_):Le(u,p,_))}function $e(u){ct.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}x($e,ct);var Ml=/^https?$/i,eh=["POST","PUT"];r=$e.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,p,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Sl.g(),this.g.onreadystatechange=k(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(U){ei(this,U);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var V in E)_.set(V,E[V]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())_.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(U=>U.toLowerCase()=="content-type"),V=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(eh,p,void 0)>=0)||E||V||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Z]of _)this.g.setRequestHeader(U,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(U){ei(this,U)}};function ei(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,ti(u),xr(u)}function ti(u){u.A||(u.A=!0,st(u,"complete"),st(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,st(this,"complete"),st(this,"abort"),xr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xr(this,!0)),$e.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Tr(this):this.Xa())},r.Xa=function(){Tr(this)};function Tr(u){if(u.h&&typeof l<"u"){if(u.v&&Yn(u)==4)setTimeout(u.Ca.bind(u),0);else if(st(u,"readystatechange"),Yn(u)==4){u.h=!1;try{const U=u.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var E;if(E=U===0){let Z=String(u.D).match(Pl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),E=!Ml.test(Z?Z.toLowerCase():"")}_=E}if(_)st(u,"complete"),st(u,"success");else{u.o=6;try{var V=Yn(u)>2?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.ca()+"]",ti(u)}}finally{xr(u)}}}}function xr(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,p||st(u,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Yn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),El(p)}};function Ol(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ha(u){const p={};u=(u.g&&Yn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(S(u[E]))continue;var _=Ls(u[E]);const V=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const U=p[V]||[];p[V]=U,U.push(_)}ie(p,function(E){return E.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function $s(u){this.za=0,this.i=[],this.j=new Qr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jn("baseRetryDelayMs",5e3,u),this.Za=Jn("retryDelaySeedMs",1e4,u),this.Ta=Jn("forwardChannelMaxRetries",2,u),this.va=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Us(u&&u.concurrentRequestLimit),this.Ba=new Xi,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=$s.prototype,r.ka=8,r.I=1,r.connect=function(u,p,_,E){rt(0),this.W=u,this.H=p||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.J=fa(this,null,this.W),Ir(this)};function Ws(u){if(Gs(u),u.I==3){var p=u.V++,_=gn(u.J);if(Le(_,"SID",u.M),Le(_,"RID",p),Le(_,"TYPE","terminate"),Xn(u,_),p=new pn(u,u.j,p),p.M=2,p.A=wr(gn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!_&&h.Image&&(new Image().src=p.A,_=!0),_||(p.g=Ll(p.j,null),p.g.ea(p.A)),p.F=Date.now(),qi(p)}ts(u)}function on(u){u.g&&(es(u),u.g.cancel(),u.g=null)}function Gs(u){on(u),u.v&&(h.clearTimeout(u.v),u.v=null),Ks(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Ir(u){if(!ta(u.h)&&!u.m){u.m=!0;var p=u.Ea;De||A(),Ie||(De(),Ie=!0),b.add(p,u),u.D=0}}function Vl(u,p){return Wi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Kr(v(u.Ea,u,p),Ys(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const V=new pn(this,this.j,u);let U=this.o;if(this.U&&(U?(U=j(U),Te(U,this.U)):U=this.U),this.u!==null||this.R||(V.J=U,U=null),this.S)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=da(this,V,p),_=gn(this.J),Le(_,"RID",u),Le(_,"CVER",22),this.G&&Le(_,"X-HTTP-Session-Id",this.G),Xn(this,_),U&&(this.R?p="headers="+Hn(jl(U))+"&"+p:this.u&&qs(_,this.u,U)),zs(this.h,V),this.Ra&&Le(_,"TYPE","init"),this.S?(Le(_,"$req",p),Le(_,"SID","null"),V.U=!0,Nn(V,_,null)):Nn(V,_,p),this.I=2}}else this.I==3&&(u?Zi(this,u):this.i.length==0||ta(this.h)||Zi(this))};function Zi(u,p){var _;p?_=p.l:_=u.V++;const E=gn(u.J);Le(E,"SID",u.M),Le(E,"RID",_),Le(E,"AID",u.K),Xn(u,E),u.u&&u.o&&qs(E,u.u,u.o),_=new pn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),p&&(u.i=p.G.concat(u.i)),p=da(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),zs(u.h,_),Nn(_,E,p)}function Xn(u,p){u.H&&ce(u.H,function(_,E){Le(p,E,_)}),u.l&&ce({},function(_,E){Le(p,E,_)})}function da(u,p,_){_=Math.min(u.i.length,_);const E=u.l?v(u.l.Ka,u.l,u):null;e:{var V=u.i;let we=-1;for(;;){const ot=["count="+_];we==-1?_>0?(we=V[0].g,ot.push("ofs="+we)):we=0:ot.push("ofs="+we);let ze=!0;for(let ht=0;ht<_;ht++){var U=V[ht].g;const ln=V[ht].map;if(U-=we,U<0)we=Math.max(0,V[ht].g-100),ze=!1;else try{U="req"+U+"_"||"";try{var Z=ln instanceof Map?ln:Object.entries(ln);for(const[Ar,er]of Z){let tr=er;f(er)&&(tr=qr(er)),ot.push(U+Ar+"="+encodeURIComponent(tr))}}catch(Ar){throw ot.push(U+"type="+encodeURIComponent("_badmap")),Ar}}catch{E&&E(ln)}}if(ze){Z=ot.join("&");break e}}Z=void 0}return u=u.i.splice(0,_),p.G=u,Z}function jt(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;De||A(),Ie||(De(),Ie=!0),b.add(p,u),u.A=0}}function Zn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Kr(v(u.Da,u),Ys(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,ni(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Kr(v(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),on(this),ni(this))};function es(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function ni(u){u.g=new pn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=gn(u.na);Le(p,"RID","rpc"),Le(p,"SID",u.M),Le(p,"AID",u.K),Le(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&Le(p,"TO",u.ia),Le(p,"TYPE","xmlhttp"),Xn(u,p),u.u&&u.o&&qs(p,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=wr(gn(p)),_.u=null,_.R=!0,Zo(_,u)}r.Va=function(){this.C!=null&&(this.C=null,on(this),Zn(this),rt(19))};function Ks(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Qs(u,p){var _=null;if(u.g==p){Ks(u),es(u),u.g=null;var E=2}else if(na(u.h,p))_=p.G,Gi(u.h,p),E=1;else return;if(u.I!=0){if(p.o)if(E==1){_=p.u?p.u.length:0,p=Date.now()-p.F;var V=u.D;E=Gr(),st(E,new Jo(E,_)),Ir(u)}else jt(u);else if(V=p.m,V==3||V==0&&p.X>0||!(E==1&&Vl(u,p)||E==2&&Zn(u)))switch(_&&_.length>0&&(p=u.h,p.i=p.i.concat(_)),V){case 1:an(u,5);break;case 4:an(u,10);break;case 3:an(u,6);break;default:an(u,2)}}}function Ys(u,p){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*p}function an(u,p){if(u.j.info("Error code "+p),p==2){var _=v(u.bb,u),E=u.Ua;const V=!E;E=new qn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Ki(E,"https"),wr(E),V?Kn(E.toString(),_):Qn(E.toString(),_)}else rt(2);u.I=0,u.l&&u.l.pa(p),ts(u),Gs(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function ts(u){if(u.I=0,u.ja=[],u.l){const p=nn(u.h);(p.length!=0||u.i.length!=0)&&($(u.ja,p),$(u.ja,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.oa()}}function fa(u,p,_){var E=_ instanceof qn?gn(_):new qn(_);if(E.g!="")p&&(E.g=p+"."+E.g),$n(E,E.u);else{var V=h.location;E=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;const U=new qn(null);E&&Ki(U,E),p&&(U.g=p),V&&$n(U,V),_&&(U.h=_),E=U}return _=u.G,p=u.wa,_&&p&&Le(E,_,p),Le(E,"VER",u.ka),Xn(u,E),E}function Ll(u,p,_){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new $e(new Er({ab:_})):new $e(u.ma),p.Fa(u.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fl(){}r=Fl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Js(){}Js.prototype.g=function(u,p){return new kt(u,p)};function kt(u,p){ct.call(this),this.g=new $s(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!S(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ri(this)}x(kt,ct),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Ws(this.g)},kt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=qr(u),u=_);p.i.push(new Xc(p.Ya++,u)),p.I==3&&Ir(p)},kt.prototype.N=function(){this.g.l=null,delete this.j,Ws(this.g),delete this.g,kt.Z.N.call(this)};function Ul(u){Ms.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}x(Ul,Ms);function zl(){Yo.call(this),this.status=1}x(zl,Yo);function ri(u){this.g=u}x(ri,Fl),ri.prototype.ra=function(){st(this.g,"a")},ri.prototype.qa=function(u){st(this.g,new Ul(u))},ri.prototype.pa=function(u){st(this.g,new zl)},ri.prototype.oa=function(){st(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,O_=function(){return new Js},M_=function(){return Gr()},j_=kn,ef={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,Yu=Yr,Jr.COMPLETE="complete",D_=Jr,Tl.EventType=Wr,Wr.OPEN="a",Wr.CLOSE="b",Wr.ERROR="c",Wr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Ba=Tl,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,P_=$e}).apply(typeof Fu<"u"?Fu:typeof self<"u"?self:typeof window<"u"?window:{});const wy="@firebase/firestore",Ey="4.9.2";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Uo="12.3.0";/**
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
 */const vs=new kc("@firebase/firestore");function wo(){return vs.logLevel}function re(r,...e){if(vs.logLevel<=Re.DEBUG){const t=e.map(Df);vs.debug(`Firestore (${Uo}): ${r}`,...t)}}function Ur(r,...e){if(vs.logLevel<=Re.ERROR){const t=e.map(Df);vs.error(`Firestore (${Uo}): ${r}`,...t)}}function Do(r,...e){if(vs.logLevel<=Re.WARN){const t=e.map(Df);vs.warn(`Firestore (${Uo}): ${r}`,...t)}}function Df(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function ge(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,V_(r,i,t)}function V_(r,e,t){let i=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Ur(i),new Error(i)}function Ue(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||V_(e,o,i)}function Ee(r,e){return r}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends An{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ki{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class L_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class fS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class mS{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let i=this.i;const o=y=>this.i!==i?(i=this.i,t(y)):Promise.resolve();let l=new ki;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ki,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=l;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},f=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>f(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?f(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ki)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string",31837,{l:i}),new L_(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class pS{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gS{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new pS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ty{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const i=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ty(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ty(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _S(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class jf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=_S(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function be(r,e){return r<e?-1:r>e?1:0}function tf(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),l=e.charAt(i);if(o!==l)return Dd(o)===Dd(l)?be(o,l):Dd(o)?1:-1}return be(r.length,e.length)}const vS=55296,wS=57343;function Dd(r){const e=r.charCodeAt(0);return e>=vS&&e<=wS}function jo(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const xy="__name__";class or{constructor(e,t,i){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ge(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return be(e.length,t.length)}static compareSegments(e,t){const i=or.isNumericId(e),o=or.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):tf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class Ke extends or{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const ES=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends or{construct(e,t,i){return new Ct(e,t,i)}static isValidIdentifier(e){return ES.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xy}static keyField(){return new Ct([xy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new te(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new te(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=y,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new te(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ke.fromString(e))}static fromName(e){return new ue(Ke.fromString(e).popFirst(5))}static empty(){return new ue(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ke(e.slice()))}}/**
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
 */function F_(r,e,t){if(!t)throw new te(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function TS(r,e,t,i){if(e===!0&&i===!0)throw new te(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Iy(r){if(!ue.isDocumentKey(r))throw new te(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ay(r){if(ue.isDocumentKey(r))throw new te(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function U_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Pc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ge(12329,{type:typeof r})}function ws(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pc(r);throw new te(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function gt(r,e){const t={typeString:r};return e&&(t.value=e),t}function dl(r,e){if(!U_(r))throw new te(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new te(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const Sy=-62135596800,ky=1e6;class He{static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*ky);return new He(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sy)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ky}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:He._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(dl(e,He._jsonSchema))return new He(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}He._jsonSchemaVersion="firestore/timestamp/1.0",He._jsonSchema={type:gt("string",He._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new He(0,0))}static max(){return new ve(new He(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const el=-1;function xS(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(i===1e9?new He(t+1,0):new He(t,i));return new bi(o,ue.empty(),e)}function IS(r){return new bi(r.readTime,r.key,el)}class bi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new bi(ve.min(),ue.empty(),el)}static max(){return new bi(ve.max(),ue.empty(),el)}}function AS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(r.documentKey,e.documentKey),t!==0?t:be(r.largestBatchId,e.largestBatchId))}/**
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
 */const SS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function zo(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==SS)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,i)=>{t(e)}))}static reject(e){return new q(((t,i)=>{i(e)}))}static waitFor(e){return new q(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(y=>i(y)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const i of e)t=t.next((o=>o?q.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new q(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let y=0;y<l;y++){const v=y;t(e[v]).next((T=>{h[v]=T,++f,f===l&&i(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new q(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function NS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Dc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Dc.ce=-1;/**
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
 */const Mf=-1;function jc(r){return r==null}function cc(r){return r===0&&1/r==-1/0}function RS(r){return typeof r=="number"&&Number.isInteger(r)&&!cc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const z_="";function bS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ny(e)),e=CS(r.get(t),e);return Ny(e)}function CS(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case z_:t+="";break;default:t+=l}}return t}function Ny(r){return r+z_+""}/**
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
 */function Ry(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Fi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function B_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uu(this.root,e,this.comparator,!0)}}class Uu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??bt.RED,this.left=o??bt.EMPTY,this.right=l??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new bt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return bt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new by(this.data.getIterator())}getIteratorFrom(e){return new by(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class by{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new fn([])}unionWith(e){let t=new wt(Ct.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class H_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new H_("Invalid base64 string: "+l):l}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const PS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=PS.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Pi(r){return typeof r=="string"?Pt.fromBase64String(r):Pt.fromUint8Array(r)}/**
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
 */const q_="server_timestamp",$_="__type__",W_="__previous_value__",G_="__local_write_time__";function Of(r){return(r?.mapValue?.fields||{})[$_]?.stringValue===q_}function Mc(r){const e=r.mapValue.fields[W_];return Of(e)?Mc(e):e}function tl(r){const e=Ci(r.mapValue.fields[G_].timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class DS{constructor(e,t,i,o,l,h,f,y,v,T){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=T}}const hc="(default)";class nl{constructor(e,t){this.projectId=e,this.database=t||hc}static empty(){return new nl("","")}get isDefaultDatabase(){return this.database===hc}isEqual(e){return e instanceof nl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const K_="__type__",jS="__max__",zu={mapValue:{}},Q_="__vector__",dc="value";function Di(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Of(r)?4:OS(r)?9007199254740991:MS(r)?10:11:ge(28295,{value:r})}function fr(r,e){if(r===e)return!0;const t=Di(r);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return tl(r).isEqual(tl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ci(o.timestampValue),f=Ci(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Pi(o.bytesValue).isEqual(Pi(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=lt(o.doubleValue),f=lt(l.doubleValue);return h===f?cc(h)===cc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return jo(r.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Ry(h)!==Ry(f))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(f[y]===void 0||!fr(h[y],f[y])))return!1;return!0})(r,e);default:return ge(52216,{left:r})}}function rl(r,e){return(r.values||[]).find((t=>fr(t,e)))!==void 0}function Mo(r,e){if(r===e)return 0;const t=Di(r),i=Di(e);if(t!==i)return be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=lt(l.integerValue||l.doubleValue),y=lt(h.integerValue||h.doubleValue);return f<y?-1:f>y?1:f===y?0:isNaN(f)?isNaN(y)?0:-1:1})(r,e);case 3:return Cy(r.timestampValue,e.timestampValue);case 4:return Cy(tl(r),tl(e));case 5:return tf(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Pi(l),y=Pi(h);return f.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),y=h.split("/");for(let v=0;v<f.length&&v<y.length;v++){const T=be(f[v],y[v]);if(T!==0)return T}return be(f.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=be(lt(l.latitude),lt(h.latitude));return f!==0?f:be(lt(l.longitude),lt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Py(r.arrayValue,e.arrayValue);case 10:return(function(l,h){const f=l.fields||{},y=h.fields||{},v=f[dc]?.arrayValue,T=y[dc]?.arrayValue,x=be(v?.values?.length||0,T?.values?.length||0);return x!==0?x:Py(v,T)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===zu.mapValue&&h===zu.mapValue)return 0;if(l===zu.mapValue)return 1;if(h===zu.mapValue)return-1;const f=l.fields||{},y=Object.keys(f),v=h.fields||{},T=Object.keys(v);y.sort(),T.sort();for(let x=0;x<y.length&&x<T.length;++x){const k=tf(y[x],T[x]);if(k!==0)return k;const z=Mo(f[y[x]],v[T[x]]);if(z!==0)return z}return be(y.length,T.length)})(r.mapValue,e.mapValue);default:throw ge(23264,{he:t})}}function Cy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return be(r,e);const t=Ci(r),i=Ci(e),o=be(t.seconds,i.seconds);return o!==0?o:be(t.nanos,i.nanos)}function Py(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Mo(t[o],i[o]);if(l)return l}return be(t.length,i.length)}function Oo(r){return nf(r)}function nf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Ci(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Pi(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ue.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=nf(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${nf(t.fields[h])}`;return o+"}"})(r.mapValue):ge(61005,{value:r})}function Ju(r){switch(Di(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mc(r);return e?16+Ju(e):16;case 5:return 2*r.stringValue.length;case 6:return Pi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Ju(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return Fi(i.fields,((l,h)=>{o+=l.length+Ju(h)})),o})(r.mapValue);default:throw ge(13486,{value:r})}}function Dy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function rf(r){return!!r&&"integerValue"in r}function Vf(r){return!!r&&"arrayValue"in r}function jy(r){return!!r&&"nullValue"in r}function My(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Xu(r){return!!r&&"mapValue"in r}function MS(r){return(r?.mapValue?.fields||{})[K_]?.stringValue===Q_}function Ga(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Fi(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ga(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ga(r.arrayValue.values[t]);return e}return{...r}}function OS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===jS}/**
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
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Xu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ga(t)}setAll(e){let t=Ct.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const y=this.getFieldsMap(t);this.applyChanges(y,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ga(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Xu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Xu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Fi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new en(Ga(this.value))}}function Y_(r){const e=[];return Fi(r.fields,((t,i)=>{const o=new Ct([t]);if(Xu(i)){const l=Y_(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new fn(e)}/**
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
 */class zt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,ve.min(),ve.min(),ve.min(),en.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,ve.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,ve.min(),ve.min(),en.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,ve.min(),ve.min(),en.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fc{constructor(e,t){this.position=e,this.inclusive=t}}function Oy(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=ue.comparator(ue.fromName(h.referenceValue),t.key):i=Mo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Vy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!fr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class il{constructor(e,t="asc"){this.field=e,this.dir=t}}function VS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class J_{}class pt extends J_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new FS(e,t,i):t==="array-contains"?new BS(e,i):t==="in"?new HS(e,i):t==="not-in"?new qS(e,i):t==="array-contains-any"?new $S(e,i):new pt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new US(e,i):new zS(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mo(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(Mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends J_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new zn(e,t)}matches(e){return X_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function X_(r){return r.op==="and"}function Z_(r){return LS(r)&&X_(r)}function LS(r){for(const e of r.filters)if(e instanceof zn)return!1;return!0}function sf(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+Oo(r.value);if(Z_(r))return r.filters.map((e=>sf(e))).join(",");{const e=r.filters.map((t=>sf(t))).join(",");return`${r.op}(${e})`}}function ev(r,e){return r instanceof pt?(function(i,o){return o instanceof pt&&i.op===o.op&&i.field.isEqual(o.field)&&fr(i.value,o.value)})(r,e):r instanceof zn?(function(i,o){return o instanceof zn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&ev(h,o.filters[f])),!0):!1})(r,e):void ge(19439)}function tv(r){return r instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Oo(t.value)}`})(r):r instanceof zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(tv).join(" ,")+"}"})(r):"Filter"}class FS extends pt{constructor(e,t,i){super(e,t,i),this.key=ue.fromName(i.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class US extends pt{constructor(e,t){super(e,"in",t),this.keys=nv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class zS extends pt{constructor(e,t){super(e,"not-in",t),this.keys=nv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function nv(r,e){return(e.arrayValue?.values||[]).map((t=>ue.fromName(t.referenceValue)))}class BS extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vf(t)&&rl(t.arrayValue,this.value)}}class HS extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&rl(this.value.arrayValue,t)}}class qS extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!rl(this.value.arrayValue,t)}}class $S extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>rl(this.value.arrayValue,i)))}}/**
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
 */class WS{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function Ly(r,e=null,t=[],i=[],o=null,l=null,h=null){return new WS(r,e,t,i,o,l,h)}function Lf(r){const e=Ee(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>sf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),jc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Oo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Oo(i))).join(",")),e.Te=t}return e.Te}function Ff(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!VS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!ev(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Vy(r.startAt,e.startAt)&&Vy(r.endAt,e.endAt)}function of(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ho{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function GS(r,e,t,i,o,l,h,f){return new Ho(r,e,t,i,o,l,h,f)}function rv(r){return new Ho(r)}function Fy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function iv(r){return r.collectionGroup!==null}function Ka(r){const e=Ee(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new wt(Ct.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(f=f.add(v.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new il(l,i))})),t.has(Ct.keyField().canonicalString())||e.Ie.push(new il(Ct.keyField(),i))}return e.Ie}function ur(r){const e=Ee(r);return e.Ee||(e.Ee=KS(e,Ka(r))),e.Ee}function KS(r,e){if(r.limitType==="F")return Ly(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new il(o.field,l)}));const t=r.endAt?new fc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new fc(r.startAt.position,r.startAt.inclusive):null;return Ly(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function af(r,e){const t=r.filters.concat([e]);return new Ho(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function lf(r,e,t){return new Ho(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Oc(r,e){return Ff(ur(r),ur(e))&&r.limitType===e.limitType}function sv(r){return`${Lf(ur(r))}|lt:${r.limitType}`}function Eo(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>tv(o))).join(", ")}]`),jc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Oo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Oo(o))).join(",")),`Target(${i})`})(ur(r))}; limitType=${r.limitType})`}function Vc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ue.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Ka(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,y){const v=Oy(h,f,y);return h.inclusive?v<=0:v<0})(i.startAt,Ka(i),o)||i.endAt&&!(function(h,f,y){const v=Oy(h,f,y);return h.inclusive?v>=0:v>0})(i.endAt,Ka(i),o))})(r,e)}function QS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ov(r){return(e,t)=>{let i=!1;for(const o of Ka(r)){const l=YS(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function YS(r,e,t){const i=r.field.isKeyField()?ue.comparator(e.key,t.key):(function(l,h,f){const y=h.data.field(l),v=f.data.field(l);return y!==null&&v!==null?Mo(y,v):ge(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return ge(19790,{direction:r.dir})}}/**
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
 */class Ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
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
 */const JS=new nt(ue.comparator);function zr(){return JS}const av=new nt(ue.comparator);function Ha(...r){let e=av;for(const t of r)e=e.insert(t.key,t);return e}function lv(r){let e=av;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ps(){return Qa()}function uv(){return Qa()}function Qa(){return new Ns((r=>r.toString()),((r,e)=>r.isEqual(e)))}const XS=new nt(ue.comparator),ZS=new wt(ue.comparator);function Ce(...r){let e=ZS;for(const t of r)e=e.add(t);return e}const e2=new wt(be);function t2(){return e2}/**
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
 */function Uf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function cv(r){return{integerValue:""+r}}function n2(r,e){return RS(e)?cv(e):Uf(r,e)}/**
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
 */class Lc{constructor(){this._=void 0}}function r2(r,e,t){return r instanceof mc?(function(o,l){const h={fields:{[$_]:{stringValue:q_},[G_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Of(l)&&(l=Mc(l)),l&&(h.fields[W_]=l),{mapValue:h}})(t,e):r instanceof sl?dv(r,e):r instanceof ol?fv(r,e):(function(o,l){const h=hv(o,l),f=Uy(h)+Uy(o.Ae);return rf(h)&&rf(o.Ae)?cv(f):Uf(o.serializer,f)})(r,e)}function i2(r,e,t){return r instanceof sl?dv(r,e):r instanceof ol?fv(r,e):t}function hv(r,e){return r instanceof pc?(function(i){return rf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class mc extends Lc{}class sl extends Lc{constructor(e){super(),this.elements=e}}function dv(r,e){const t=mv(e);for(const i of r.elements)t.some((o=>fr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class ol extends Lc{constructor(e){super(),this.elements=e}}function fv(r,e){let t=mv(e);for(const i of r.elements)t=t.filter((o=>!fr(o,i)));return{arrayValue:{values:t}}}class pc extends Lc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Uy(r){return lt(r.integerValue||r.doubleValue)}function mv(r){return Vf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function s2(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof sl&&o instanceof sl||i instanceof ol&&o instanceof ol?jo(i.elements,o.elements,fr):i instanceof pc&&o instanceof pc?fr(i.Ae,o.Ae):i instanceof mc&&o instanceof mc})(r.transform,e.transform)}class o2{constructor(e,t){this.version=e,this.transformResults=t}}class Ln{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Fc{}function pv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new zf(r.key,Ln.none()):new fl(r.key,r.data,Ln.none());{const t=r.data,i=en.empty();let o=new wt(Ct.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Ui(r.key,i,new fn(o.toArray()),Ln.none())}}function a2(r,e,t){r instanceof fl?(function(o,l,h){const f=o.value.clone(),y=By(o.fieldTransforms,l,h.transformResults);f.setAll(y),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Ui?(function(o,l,h){if(!Zu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=By(o.fieldTransforms,l,h.transformResults),y=l.data;y.setAll(gv(o)),y.setAll(f),l.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ya(r,e,t,i){return r instanceof fl?(function(l,h,f,y){if(!Zu(l.precondition,h))return f;const v=l.value.clone(),T=Hy(l.fieldTransforms,y,h);return v.setAll(T),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,i):r instanceof Ui?(function(l,h,f,y){if(!Zu(l.precondition,h))return f;const v=Hy(l.fieldTransforms,y,h),T=h.data;return T.setAll(gv(l)),T.setAll(v),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((x=>x.field)))})(r,e,t,i):(function(l,h,f){return Zu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function l2(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=hv(i.transform,o||null);l!=null&&(t===null&&(t=en.empty()),t.set(i.field,l))}return t||null}function zy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&jo(i,o,((l,h)=>s2(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class fl extends Fc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ui extends Fc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function gv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function By(r,e,t){const i=new Map;Ue(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,i2(h,f,t[o]))}return i}function Hy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,r2(l,h,e))}return i}class zf extends Fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u2 extends Fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class c2{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&a2(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=uv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const y=pv(h,f);y!==null&&i.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(ve.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,((t,i)=>zy(t,i)))&&jo(this.baseMutations,e.baseMutations,((t,i)=>zy(t,i)))}}class Bf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return XS})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Bf(e,t,i,o)}}/**
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
 */class h2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class d2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,je;function f2(r){switch(r){case H.OK:return ge(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ge(15467,{code:r})}}function yv(r){if(r===void 0)return Ur("GRPC error has no .code"),H.UNKNOWN;switch(r){case ft.OK:return H.OK;case ft.CANCELLED:return H.CANCELLED;case ft.UNKNOWN:return H.UNKNOWN;case ft.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ft.INTERNAL:return H.INTERNAL;case ft.UNAVAILABLE:return H.UNAVAILABLE;case ft.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ft.NOT_FOUND:return H.NOT_FOUND;case ft.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ft.ABORTED:return H.ABORTED;case ft.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ft.DATA_LOSS:return H.DATA_LOSS;default:return ge(39323,{code:r})}}(je=ft||(ft={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function m2(){return new TextEncoder}/**
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
 */const p2=new Si([4294967295,4294967295],0);function qy(r){const e=m2().encode(r),t=new C_;return t.update(e),new Uint8Array(t.digest())}function $y(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Si([t,i],0),new Si([o,l],0)]}class Hf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new qa(`Invalid padding: ${t}`);if(i<0)throw new qa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new qa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new qa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Si.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Si.fromNumber(i)));return o.compare(p2)===1&&(o=new Si([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=qy(e),[i,o]=$y(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Hf(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=qy(e),[i,o]=$y(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Uc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,ml.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Uc(ve.min(),o,new nt(be),zr(),Ce())}}class ml{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ml(i,t,Ce(),Ce(),Ce())}}/**
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
 */class ec{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class _v{constructor(e,t){this.targetId=e,this.Ce=t}}class vv{constructor(e,t,i=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Wy{constructor(){this.ve=0,this.Fe=Gy(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),i=Ce();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ge(38017,{changeType:l})}})),new ml(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=Gy()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class g2{constructor(e){this.Ge=e,this.ze=new Map,this.je=zr(),this.Je=Bu(),this.He=Bu(),this.Ye=new nt(be)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(of(l))if(i===0){const h=new ue(l.path);this.et(t,h,zt.newNoDocument(h,ve.min()))}else Ue(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),y=f?this.ct(f,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Pi(i).toUint8Array()}catch(y){if(y instanceof H_)return Do("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{f=new Hf(h,o,l)}catch(y){return Do(y instanceof qa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&of(f.target)){const y=new ue(f.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,zt.newNoDocument(y,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=Ce();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new Uc(e,t,this.Ye,this.je,i);return this.je=zr(),this.Je=Bu(),this.He=Bu(),this.Ye=new nt(be),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Wy,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new wt(be),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new wt(be),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Bu(){return new nt(ue.comparator)}function Gy(){return new nt(ue.comparator)}const y2={asc:"ASCENDING",desc:"DESCENDING"},_2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},v2={and:"AND",or:"OR"};class w2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uf(r,e){return r.useProto3Json||jc(e)?e:{value:e}}function gc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function E2(r,e){return gc(r,e.toTimestamp())}function cr(r){return Ue(!!r,49232),ve.fromTimestamp((function(t){const i=Ci(t);return new He(i.seconds,i.nanos)})(r))}function qf(r,e){return cf(r,e).canonicalString()}function cf(r,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Ev(r){const e=Ke.fromString(r);return Ue(Sv(e),10190,{key:e.toString()}),e}function hf(r,e){return qf(r.databaseId,e.path)}function jd(r,e){const t=Ev(e);if(t.get(1)!==r.databaseId.projectId)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ue(xv(t))}function Tv(r,e){return qf(r.databaseId,e)}function T2(r){const e=Ev(r);return e.length===4?Ke.emptyPath():xv(e)}function df(r){return new Ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function xv(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ky(r,e,t){return{name:hf(r,e),fields:t.value.mapValue.fields}}function x2(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ge(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,T){return v.useProto3Json?(Ue(T===void 0||typeof T=="string",58123),Pt.fromBase64String(T||"")):(Ue(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Pt.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(v){const T=v.code===void 0?H.UNKNOWN:yv(v.code);return new te(T,v.message||"")})(h);t=new vv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=jd(r,i.document.name),l=cr(i.document.updateTime),h=i.document.createTime?cr(i.document.createTime):ve.min(),f=new en({mapValue:{fields:i.document.fields}}),y=zt.newFoundDocument(o,l,h,f),v=i.targetIds||[],T=i.removedTargetIds||[];t=new ec(v,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=jd(r,i.document),l=i.readTime?cr(i.readTime):ve.min(),h=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new ec([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=jd(r,i.document),l=i.removedTargetIds||[];t=new ec([],l,o,null)}else{if(!("filter"in e))return ge(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new d2(o,l),f=i.targetId;t=new _v(f,h)}}return t}function I2(r,e){let t;if(e instanceof fl)t={update:Ky(r,e.key,e.value)};else if(e instanceof zf)t={delete:hf(r,e.key)};else if(e instanceof Ui)t={update:Ky(r,e.key,e.data),updateMask:D2(e.fieldMask)};else{if(!(e instanceof u2))return ge(16599,{Vt:e.type});t={verify:hf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof mc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof sl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ol)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof pc)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw ge(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:E2(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ge(27497)})(r,e.precondition)),t}function A2(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(ve.min())&&(h=cr(l)),new o2(h,o.transformResults||[])})(t,e)))):[]}function S2(r,e){return{documents:[Tv(r,e.path)]}}function k2(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Tv(r,o);const l=(function(v){if(v.length!==0)return Av(zn.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(v){if(v.length!==0)return v.map((T=>(function(k){return{field:To(k.field),direction:b2(k.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=uf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function N2(r){let e=T2(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let l=[];t.where&&(l=(function(x){const k=Iv(x);return k instanceof zn&&Z_(k)?k.getFilters():[k]})(t.where));let h=[];t.orderBy&&(h=(function(x){return x.map((k=>(function($){return new il(xo($.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(k)))})(t.orderBy));let f=null;t.limit&&(f=(function(x){let k;return k=typeof x=="object"?x.value:x,jc(k)?null:k})(t.limit));let y=null;t.startAt&&(y=(function(x){const k=!!x.before,z=x.values||[];return new fc(z,k)})(t.startAt));let v=null;return t.endAt&&(v=(function(x){const k=!x.before,z=x.values||[];return new fc(z,k)})(t.endAt)),GS(e,o,h,l,f,"F",y,v)}function R2(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Iv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=xo(t.unaryFilter.field);return pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=xo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=xo(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=xo(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(r):r.fieldFilter!==void 0?(function(t){return pt.create(xo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return zn.create(t.compositeFilter.filters.map((i=>Iv(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(r):ge(30097,{filter:r})}function b2(r){return y2[r]}function C2(r){return _2[r]}function P2(r){return v2[r]}function To(r){return{fieldPath:r.canonicalString()}}function xo(r){return Ct.fromServerFormat(r.fieldPath)}function Av(r){return r instanceof pt?(function(t){if(t.op==="=="){if(My(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NAN"}};if(jy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(My(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NAN"}};if(jy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:To(t.field),op:C2(t.op),value:t.value}}})(r):r instanceof zn?(function(t){const i=t.getFilters().map((o=>Av(o)));return i.length===1?i[0]:{compositeFilter:{op:P2(t.op),filters:i}}})(r):ge(54877,{filter:r})}function D2(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Sv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class xi{constructor(e,t,i,o,l=ve.min(),h=ve.min(),f=Pt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=y}withSequenceNumber(e){return new xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class j2{constructor(e){this.yt=e}}function M2(r){const e=N2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?lf(e,e.limit,"L"):e}/**
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
 */class O2{constructor(){this.Cn=new V2}addToCollectionParentIndex(e,t){return this.Cn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(bi.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(bi.min())}updateCollectionGroup(e,t,i){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class V2{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(Ke.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(Ke.comparator)).toArray()}}/**
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
 */const Qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kv=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(kv,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
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
 */class Vo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Vo(0)}static cr(){return new Vo(-1)}}/**
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
 */const Yy="LruGarbageCollector",L2=1048576;function Jy([r,e],[t,i]){const o=be(r,t);return o===0?be(e,i):o}class F2{constructor(e){this.Ir=e,this.buffer=new wt(Jy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Jy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class U2{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(Yy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bo(t)?re(Yy,"Ignoring IndexedDB error during garbage collection: ",t):await zo(t)}await this.Vr(3e5)}))}}class z2{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Dc.ce);const i=new F2(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Qy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qy):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,l,h,f,y,v;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,h=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(i=x,f=Date.now(),this.removeTargets(e,i,t)))).next((x=>(l=x,y=Date.now(),this.removeOrphanedDocuments(e,i)))).next((x=>(v=Date.now(),wo()<=Re.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(y-f)+`ms
	Removed ${x} documents in `+(v-y)+`ms
Total Duration: ${v-T}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:x}))))}}function B2(r,e){return new z2(r,e)}/**
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
 */class H2{constructor(){this.changes=new Ns((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class q2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $2{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Ya(i.mutation,o,fn.empty(),He.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ce()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ce()){const o=ps();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Ha();return l.forEach(((f,y)=>{h=h.insert(f,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=ps();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ce())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=zr();const h=Qa(),f=(function(){return Qa()})();return t.forEach(((y,v)=>{const T=i.get(v.key);o.has(v.key)&&(T===void 0||T.mutation instanceof Ui)?l=l.insert(v.key,v):T!==void 0?(h.set(v.key,T.mutation.getFieldMask()),Ya(T.mutation,v,T.mutation.getFieldMask(),He.now())):h.set(v.key,fn.empty())})),this.recalculateAndSaveOverlays(e,l).next((y=>(y.forEach(((v,T)=>h.set(v,T))),t.forEach(((v,T)=>f.set(v,new q2(T,h.get(v)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=Qa();let o=new nt(((h,f)=>h-f)),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let T=i.get(y)||fn.empty();T=f.applyToLocalView(v,T),i.set(y,T);const x=(o.get(f.batchId)||Ce()).add(y);o=o.insert(f.batchId,x)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const y=f.getNext(),v=y.key,T=y.value,x=uv();T.forEach((k=>{if(!l.has(k)){const z=pv(t.get(k),i.get(k));z!==null&&x.set(k,z),l=l.add(k)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,x))}return q.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):iv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):q.resolve(ps());let f=el,y=l;return h.next((v=>q.forEach(v,((T,x)=>(f<x.largestBatchId&&(f=x.largestBatchId),l.get(T)?q.resolve():this.remoteDocumentCache.getEntry(e,T).next((k=>{y=y.insert(T,k)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,y,v,Ce()))).next((T=>({batchId:f,changes:lv(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((i=>{let o=Ha();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ha();return this.indexManager.getCollectionParents(e,l).next((f=>q.forEach(f,(y=>{const v=(function(x,k){return new Ho(k,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,y.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next((T=>{T.forEach(((x,k)=>{h=h.insert(x,k)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((y,v)=>{const T=v.getKey();h.get(T)===null&&(h=h.insert(T,zt.newInvalidDocument(T)))}));let f=Ha();return h.forEach(((y,v)=>{const T=l.get(y);T!==void 0&&Ya(T.mutation,v,fn.empty(),He.now()),Vc(t,v)&&(f=f.insert(y,v))})),f}))}}/**
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
 */class W2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return q.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:M2(o.bundledQuery),readTime:cr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class G2{constructor(){this.overlays=new nt(ue.comparator),this.qr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ps();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),q.resolve()}getOverlaysForCollection(e,t,i){const o=ps(),l=t.length+1,h=new ue(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const y=f.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&y.largestBatchId>i&&o.set(y.getKey(),y)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((v,T)=>v-T));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>i){let T=l.get(v.largestBatchId);T===null&&(T=ps(),l=l.insert(v.largestBatchId,T)),T.set(v.getKey(),v)}}const f=ps(),y=l.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,T)=>f.set(v,T))),!(f.size()>=o)););return q.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new h2(t,i));let l=this.qr.get(t);l===void 0&&(l=Ce(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class K2{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class $f{constructor(){this.Qr=new wt(At.$r),this.Ur=new wt(At.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new At(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new At(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new ue(new Ke([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.Ur.forEachInRange([i,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ue(new Ke([])),i=new At(t,e),o=new At(t,e+1);let l=Ce();return this.Ur.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new At(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ue.comparator(e.key,t.key)||be(e.Yr,t.Yr)}static Kr(e,t){return be(e.Yr,t.Yr)||ue.comparator(e.key,t.key)}}/**
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
 */class Q2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new wt(At.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new c2(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Zr=this.Zr.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Mf:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,o],(h=>{const f=this.Xr(h.Yr);l.push(f)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(be);return t.forEach((o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(f=>{i=i.add(f.Yr)}))})),q.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ue.isDocumentKey(l)||(l=l.child(""));const h=new At(new ue(l),0);let f=new wt(be);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(f=f.add(y.Yr)),!0)}),h),q.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return q.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new At(t,0),o=this.Zr.firstAfterOrEqual(i);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Y2{constructor(e){this.ri=e,this.docs=(function(){return new nt(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return q.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=zr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=zr();const h=t.path,f=new ue(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(f);for(;y.hasNext();){const{key:v,value:{document:T}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||AS(IS(T),i)<=0||(o.has(T.key)||Vc(t,T))&&(l=l.insert(T.key,T.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ge(9500)}ii(e,t){return q.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new J2(this)}getSize(e){return q.resolve(this.size)}}class J2 extends H2{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),q.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class X2{constructor(e){this.persistence=e,this.si=new Ns((t=>Lf(t)),Ff),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new $f,this.targetCount=0,this.ai=Vo.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),q.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Vo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Pr(t),q.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.si.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return q.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),q.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return q.resolve(i)}containsKey(e,t){return q.resolve(this._i.containsKey(t))}}/**
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
 */class Nv{constructor(e,t){this.ui={},this.overlays={},this.ci=new Dc(0),this.li=!1,this.li=!0,this.hi=new K2,this.referenceDelegate=e(this),this.Pi=new X2(this),this.indexManager=new O2,this.remoteDocumentCache=(function(o){return new Y2(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new j2(t),this.Ii=new W2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new G2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new Q2(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){re("MemoryPersistence","Starting transaction:",e);const o=new Z2(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return q.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class Z2 extends kS{constructor(e){super(),this.currentSequenceNumber=e}}class Wf{constructor(e){this.persistence=e,this.Ri=new $f,this.Vi=null}static mi(e){return new Wf(e)}get fi(){if(this.Vi)return this.Vi;throw ge(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),q.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(i=>{const o=ue.fromPath(i);return this.gi(e,o).next((l=>{l||t.removeEntry(o,ve.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class yc{constructor(e,t){this.persistence=e,this.pi=new Ns((i=>bS(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=B2(this,t)}static mi(e,t){return new yc(e,t)}Ei(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return q.forEach(this.pi,((i,o)=>this.br(e,i,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((f=>{f||(i++,l.removeEntry(h,ve.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),q.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ju(e.data.value)),t}br(e,t,i){return q.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Gf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=Ce(),o=Ce();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Gf(e,t.fromCache,i,o)}}/**
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
 */class ek{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return bT()?8:NS(Bt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new ek;return this.Ss(e,t,h).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,h,f.size)}))})).next((()=>l.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(wo()<=Re.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(wo()<=Re.DEBUG&&re("QueryEngine","Query:",Eo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(wo()<=Re.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):q.resolve())}ys(e,t){if(Fy(t))return q.resolve(null);let i=ur(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=lf(t,null,"F"),i=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Ce(...l);return this.ps.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((y=>{const v=this.Ds(t,f);return this.Cs(t,v,h,y.readTime)?this.ys(e,lf(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,i,o){return Fy(t)||o.isEqual(ve.min())?q.resolve(null):this.ps.getDocuments(e,i).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,i,o)?q.resolve(null):(wo()<=Re.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Eo(t)),this.vs(e,h,t,xS(o,el)).next((f=>f)))}))}Ds(e,t){let i=new wt(ov(e));return t.forEach(((o,l)=>{Vc(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,i){return wo()<=Re.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Eo(t)),this.ps.getDocumentsMatchingQuery(e,t,bi.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Kf="LocalStore",nk=3e8;class rk{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(be),this.xs=new Ns((l=>Lf(l)),Ff),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function ik(r,e,t,i){return new rk(r,e,t,i)}async function Rv(r,e){const t=Ee(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let y=Ce();for(const v of o){h.push(v.batchId);for(const T of v.mutations)y=y.add(T.key)}for(const v of l){f.push(v.batchId);for(const T of v.mutations)y=y.add(T.key)}return t.localDocuments.getDocuments(i,y).next((v=>({Ls:v,removedBatchIds:h,addedBatchIds:f})))}))}))}function sk(r,e){const t=Ee(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,y,v,T){const x=v.batch,k=x.keys();let z=q.resolve();return k.forEach(($=>{z=z.next((()=>T.getEntry(y,$))).next((Q=>{const B=v.docVersions.get($);Ue(B!==null,48541),Q.version.compareTo(B)<0&&(x.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),T.addEntry(Q)))}))})),z.next((()=>f.mutationQueue.removeMutationBatch(y,x)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let y=Ce();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(y=y.add(f.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function bv(r){const e=Ee(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function ok(r,e){const t=Ee(r),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const f=[];e.targetChanges.forEach(((T,x)=>{const k=o.get(x);if(!k)return;f.push(t.Pi.removeMatchingKeys(l,T.removedDocuments,x).next((()=>t.Pi.addMatchingKeys(l,T.addedDocuments,x))));let z=k.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(x)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):T.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(T.resumeToken,i)),o=o.insert(x,z),(function(Q,B,he){return Q.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=nk?!0:he.addedDocuments.size+he.modifiedDocuments.size+he.removedDocuments.size>0})(k,z,T)&&f.push(t.Pi.updateTargetData(l,z))}));let y=zr(),v=Ce();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,T))})),f.push(ak(l,h,e.documentUpdates).next((T=>{y=T.ks,v=T.qs}))),!i.isEqual(ve.min())){const T=t.Pi.getLastRemoteSnapshotVersion(l).next((x=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(T)}return q.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,y,v))).next((()=>y))})).then((l=>(t.Ms=o,l)))}function ak(r,e,t){let i=Ce(),o=Ce();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=zr();return t.forEach(((f,y)=>{const v=l.get(f);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),y.isNoDocument()&&y.version.isEqual(ve.min())?(e.removeEntry(f,y.readTime),h=h.insert(f,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(f,y)):re(Kf,"Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function lk(r,e){const t=Ee(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Mf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function uk(r,e){const t=Ee(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((l=>l?(o=l,q.resolve(o)):t.Pi.allocateTargetId(i).next((h=>(o=new xi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function ff(r,e,t){const i=Ee(r),o=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Bo(h))throw h;re(Kf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function Xy(r,e,t){const i=Ee(r);let o=ve.min(),l=Ce();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,T){const x=Ee(y),k=x.xs.get(T);return k!==void 0?q.resolve(x.Ms.get(k)):x.Pi.getTargetData(v,T)})(i,h,ur(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(h,f.targetId).next((y=>{l=y}))})).next((()=>i.Fs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?l:Ce()))).next((f=>(ck(i,QS(e),f),{documents:f,Qs:l})))))}function ck(r,e,t){let i=r.Os.get(e)||ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.Os.set(e,i)}class Zy{constructor(){this.activeTargetIds=t2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hk{constructor(){this.Mo=new Zy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Zy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dk{Oo(e){}shutdown(){}}/**
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
 */const e0="ConnectivityMonitor";class t0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(e0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(e0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hu=null;function mf(){return Hu===null?Hu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hu++,"0x"+Hu.toString(16)}/**
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
 */const Md="RestConnection",fk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===hc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,l){const h=mf(),f=this.zo(e,t.toUriEncodedString());re(Md,`Sending RPC '${e}' ${h}:`,f,i);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,l);const{host:v}=new URL(f),T=Is(v);return this.Jo(e,f,y,i,T).then((x=>(re(Md,`Received RPC '${e}' ${h}: `,x),x)),(x=>{throw Do(Md,`RPC '${e}' ${h} failed with error: `,x,"url: ",f,"request:",i),x}))}Ho(e,t,i,o,l,h){return this.Go(e,t,i,o,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Uo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const i=fk[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
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
 */class pk{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ft="WebChannelConnection";class gk extends mk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,l){const h=mf();return new Promise(((f,y)=>{const v=new P_;v.setWithCredentials(!0),v.listenOnce(D_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Yu.NO_ERROR:const x=v.getResponseJson();re(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(x)),f(x);break;case Yu.TIMEOUT:re(Ft,`RPC '${e}' ${h} timed out`),y(new te(H.DEADLINE_EXCEEDED,"Request time out"));break;case Yu.HTTP_ERROR:const k=v.getStatus();if(re(Ft,`RPC '${e}' ${h} failed with status:`,k,"response text:",v.getResponseText()),k>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const $=z?.error;if($&&$.status&&$.message){const Q=(function(he){const ye=he.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(ye)>=0?ye:H.UNKNOWN})($.status);y(new te(Q,$.message))}else y(new te(H.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new te(H.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{re(Ft,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);re(Ft,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",T,i,15)}))}T_(e,t,i){const o=mf(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=O_(),f=M_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,i),y.encodeInitMessageHeaders=!0;const T=l.join("");re(Ft,`Creating RPC '${e}' stream ${o}: ${T}`,y);const x=h.createWebChannel(T,y);this.I_(x);let k=!1,z=!1;const $=new pk({Yo:B=>{z?re(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(k||(re(Ft,`Opening RPC '${e}' stream ${o} transport.`),x.open(),k=!0),re(Ft,`RPC '${e}' stream ${o} sending:`,B),x.send(B))},Zo:()=>x.close()}),Q=(B,he,ye)=>{B.listen(he,(de=>{try{ye(de)}catch(J){setTimeout((()=>{throw J}),0)}}))};return Q(x,Ba.EventType.OPEN,(()=>{z||(re(Ft,`RPC '${e}' stream ${o} transport opened.`),$.o_())})),Q(x,Ba.EventType.CLOSE,(()=>{z||(z=!0,re(Ft,`RPC '${e}' stream ${o} transport closed`),$.a_(),this.E_(x))})),Q(x,Ba.EventType.ERROR,(B=>{z||(z=!0,Do(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),$.a_(new te(H.UNAVAILABLE,"The operation could not be completed")))})),Q(x,Ba.EventType.MESSAGE,(B=>{if(!z){const he=B.data[0];Ue(!!he,16349);const ye=he,de=ye?.error||ye[0]?.error;if(de){re(Ft,`RPC '${e}' stream ${o} received error:`,de);const J=de.status;let De=(function(A){const N=ft[A];if(N!==void 0)return yv(N)})(J),Ie=de.message;De===void 0&&(De=H.INTERNAL,Ie="Unknown error status: "+J+" with message "+de.message),z=!0,$.a_(new te(De,Ie)),x.close()}else re(Ft,`RPC '${e}' stream ${o} received:`,he),$.u_(he)}})),Q(f,j_.STAT_EVENT,(B=>{B.stat===ef.PROXY?re(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===ef.NOPROXY&&re(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Od(){return typeof document<"u"?document:null}/**
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
 */function zc(r){return new w2(r,!0)}/**
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
 */class Cv{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const n0="PersistentStream";class Pv{constructor(e,t,i,o,l,h,f,y){this.Mi=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Cv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new te(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(n0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(n0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yk extends Pv{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=x2(this.serializer,e),i=(function(l){if(!("targetChange"in l))return ve.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?cr(h.readTime):ve.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=df(this.serializer),t.addTarget=(function(l,h){let f;const y=h.target;if(f=of(y)?{documents:S2(l,y)}:{query:k2(l,y).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=wv(l,h.resumeToken);const v=uf(l,h.expectedCount);v!==null&&(f.expectedCount=v)}else if(h.snapshotVersion.compareTo(ve.min())>0){f.readTime=gc(l,h.snapshotVersion.toTimestamp());const v=uf(l,h.expectedCount);v!==null&&(f.expectedCount=v)}return f})(this.serializer,e);const i=R2(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=df(this.serializer),t.removeTarget=e,this.q_(t)}}class _k extends Pv{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=A2(e.writeResults,e.commitTime),i=cr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=df(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>I2(this.serializer,i)))};this.q_(t)}}/**
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
 */class vk{}class wk extends vk{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,cf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(H.UNKNOWN,l.toString())}))}Ho(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Ho(e,cf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(H.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Ek{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ur(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Es="RemoteStore";class Tk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{i.enqueueAndForget((async()=>{Rs(this)&&(re(Es,"Restarting streams for network reachability change."),await(async function(y){const v=Ee(y);v.Ea.add(4),await pl(v),v.Ra.set("Unknown"),v.Ea.delete(4),await Bc(v)})(this))}))})),this.Ra=new Ek(i,o)}}async function Bc(r){if(Rs(r))for(const e of r.da)await e(!0)}async function pl(r){for(const e of r.da)await e(!1)}function Dv(r,e){const t=Ee(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Xf(t)?Jf(t):qo(t).O_()&&Yf(t,e))}function Qf(r,e){const t=Ee(r),i=qo(t);t.Ia.delete(e),i.O_()&&jv(t,e),t.Ia.size===0&&(i.O_()?i.L_():Rs(t)&&t.Ra.set("Unknown"))}function Yf(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qo(r).Y_(e)}function jv(r,e){r.Va.Ue(e),qo(r).Z_(e)}function Jf(r){r.Va=new g2({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),qo(r).start(),r.Ra.ua()}function Xf(r){return Rs(r)&&!qo(r).x_()&&r.Ia.size>0}function Rs(r){return Ee(r).Ea.size===0}function Mv(r){r.Va=void 0}async function xk(r){r.Ra.set("Online")}async function Ik(r){r.Ia.forEach(((e,t)=>{Yf(r,e)}))}async function Ak(r,e){Mv(r),Xf(r)?(r.Ra.ha(e),Jf(r)):r.Ra.set("Unknown")}async function Sk(r,e,t){if(r.Ra.set("Online"),e instanceof vv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ia.delete(f),o.Va.removeTarget(f))})(r,e)}catch(i){re(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await _c(r,i)}else if(e instanceof ec?r.Va.Ze(e):e instanceof _v?r.Va.st(e):r.Va.tt(e),!t.isEqual(ve.min()))try{const i=await bv(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Va.Tt(h);return f.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const T=l.Ia.get(v);T&&l.Ia.set(v,T.withResumeToken(y.resumeToken,h))}})),f.targetMismatches.forEach(((y,v)=>{const T=l.Ia.get(y);if(!T)return;l.Ia.set(y,T.withResumeToken(Pt.EMPTY_BYTE_STRING,T.snapshotVersion)),jv(l,y);const x=new xi(T.target,y,v,T.sequenceNumber);Yf(l,x)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){re(Es,"Failed to raise snapshot:",i),await _c(r,i)}}async function _c(r,e,t){if(!Bo(e))throw e;r.Ea.add(1),await pl(r),r.Ra.set("Offline"),t||(t=()=>bv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(Es,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Bc(r)}))}function Ov(r,e){return e().catch((t=>_c(r,t,e)))}async function Hc(r){const e=Ee(r),t=ji(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Mf;for(;kk(e);)try{const o=await lk(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,Nk(e,o)}catch(o){await _c(e,o)}Vv(e)&&Lv(e)}function kk(r){return Rs(r)&&r.Ta.length<10}function Nk(r,e){r.Ta.push(e);const t=ji(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Vv(r){return Rs(r)&&!ji(r).x_()&&r.Ta.length>0}function Lv(r){ji(r).start()}async function Rk(r){ji(r).ra()}async function bk(r){const e=ji(r);for(const t of r.Ta)e.ea(t.mutations)}async function Ck(r,e,t){const i=r.Ta.shift(),o=Bf.from(i,e,t);await Ov(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Hc(r)}async function Pk(r,e){e&&ji(r).X_&&await(async function(i,o){if((function(h){return f2(h)&&h!==H.ABORTED})(o.code)){const l=i.Ta.shift();ji(i).B_(),await Ov(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Hc(i)}})(r,e),Vv(r)&&Lv(r)}async function r0(r,e){const t=Ee(r);t.asyncQueue.verifyOperationInProgress(),re(Es,"RemoteStore received new credentials");const i=Rs(t);t.Ea.add(3),await pl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Bc(t)}async function Dk(r,e){const t=Ee(r);e?(t.Ea.delete(2),await Bc(t)):e||(t.Ea.add(2),await pl(t),t.Ra.set("Unknown"))}function qo(r){return r.ma||(r.ma=(function(t,i,o){const l=Ee(t);return l.sa(),new yk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:xk.bind(null,r),t_:Ik.bind(null,r),r_:Ak.bind(null,r),H_:Sk.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Xf(r)?Jf(r):r.Ra.set("Unknown")):(await r.ma.stop(),Mv(r))}))),r.ma}function ji(r){return r.fa||(r.fa=(function(t,i,o){const l=Ee(t);return l.sa(),new _k(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Rk.bind(null,r),r_:Pk.bind(null,r),ta:bk.bind(null,r),na:Ck.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Hc(r)):(await r.fa.stop(),r.Ta.length>0&&(re(Es,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Zf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Zf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function em(r,e){if(Ur("AsyncQueue",`${e}: ${r}`),Bo(r))return new te(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class No{static emptySet(e){return new No(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ue.comparator(t.key,i.key):(t,i)=>ue.comparator(t.key,i.key),this.keyedMap=Ha(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof No)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new No;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class i0{constructor(){this.ga=new nt(ue.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ge(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Lo{constructor(e,t,i,o,l,h,f,y,v){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Lo(e,t,No.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class jk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Mk{constructor(){this.queries=s0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Ee(t),l=o.queries;o.queries=s0(),l.forEach(((h,f)=>{for(const y of f.Sa)y.onError(i)}))})(this,new te(H.ABORTED,"Firestore shutting down"))}}function s0(){return new Ns((r=>sv(r)),Oc)}async function Ok(r,e){const t=Ee(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new jk,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=em(h,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&tm(t)}async function Vk(r,e){const t=Ee(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Lk(r,e){const t=Ee(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&tm(t)}function Fk(r,e,t){const i=Ee(r),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function tm(r){r.Ca.forEach((e=>{e.next()}))}var pf,o0;(o0=pf||(pf={})).Ma="default",o0.Cache="cache";class Uk{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Lo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==pf.Cache}}/**
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
 */class Fv{constructor(e){this.key=e}}class Uv{constructor(e){this.key=e}}class zk{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=ov(e),this.tu=new No(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new i0,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,x)=>{const k=o.get(T),z=Vc(this.query,x)?x:null,$=!!k&&this.mutatedKeys.has(k.key),Q=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let B=!1;k&&z?k.data.isEqual(z.data)?$!==Q&&(i.track({type:3,doc:z}),B=!0):this.su(k,z)||(i.track({type:2,doc:z}),B=!0,(y&&this.eu(z,y)>0||v&&this.eu(z,v)<0)&&(f=!0)):!k&&z?(i.track({type:0,doc:z}),B=!0):k&&!z&&(i.track({type:1,doc:k}),B=!0,(y||v)&&(f=!0)),B&&(z?(h=h.add(z),l=Q?l.add(T):l.delete(T)):(h=h.delete(T),l=l.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),l=l.delete(T.key),i.track({type:1,doc:T})}return{tu:h,iu:i,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((T,x)=>(function(z,$){const Q=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Rt:B})}};return Q(z)-Q($)})(T.type,x.type)||this.eu(T.doc,x.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,v=y!==this.Za;return this.Za=y,h.length!==0||v?{snapshot:new Lo(this.query,e.tu,l,h,e.mutatedKeys,y===0,v,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new i0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new Uv(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new Fv(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Lo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const nm="SyncEngine";class Bk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Hk{constructor(e){this.key=e,this.hu=!1}}class qk{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ns((f=>sv(f)),Oc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(ue.comparator),this.Au=new Map,this.Ru=new $f,this.Vu={},this.mu=new Map,this.fu=Vo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $k(r,e,t=!0){const i=Wv(r);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await zv(i,e,t,!0),o}async function Wk(r,e){const t=Wv(r);await zv(t,e,!0,!1)}async function zv(r,e,t,i){const o=await uk(r.localStore,ur(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await Gk(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Dv(r.remoteStore,o),f}async function Gk(r,e,t,i,o){r.pu=(x,k,z)=>(async function(Q,B,he,ye){let de=B.view.ru(he);de.Cs&&(de=await Xy(Q.localStore,B.query,!1).then((({documents:b})=>B.view.ru(b,de))));const J=ye&&ye.targetChanges.get(B.targetId),De=ye&&ye.targetMismatches.get(B.targetId)!=null,Ie=B.view.applyChanges(de,Q.isPrimaryClient,J,De);return l0(Q,B.targetId,Ie.au),Ie.snapshot})(r,x,k,z);const l=await Xy(r.localStore,e,!0),h=new zk(e,l.Qs),f=h.ru(l.documents),y=ml.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),v=h.applyChanges(f,r.isPrimaryClient,y);l0(r,t,v.au);const T=new Bk(e,t,h);return r.Tu.set(e,T),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),v.snapshot}async function Kk(r,e,t){const i=Ee(r),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((h=>!Oc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await ff(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Qf(i.remoteStore,o.targetId),gf(i,o.targetId)})).catch(zo)):(gf(i,o.targetId),await ff(i.localStore,o.targetId,!0))}async function Qk(r,e){const t=Ee(r),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Qf(t.remoteStore,i.targetId))}async function Yk(r,e,t){const i=rN(r);try{const o=await(function(h,f){const y=Ee(h),v=He.now(),T=f.reduce(((z,$)=>z.add($.key)),Ce());let x,k;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let $=zr(),Q=Ce();return y.Ns.getEntries(z,T).next((B=>{$=B,$.forEach(((he,ye)=>{ye.isValidDocument()||(Q=Q.add(he))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,$))).next((B=>{x=B;const he=[];for(const ye of f){const de=l2(ye,x.get(ye.key).overlayedDocument);de!=null&&he.push(new Ui(ye.key,de,Y_(de.value.mapValue),Ln.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,he,f)})).next((B=>{k=B;const he=B.applyToLocalDocumentSet(x,Q);return y.documentOverlayCache.saveOverlays(z,B.batchId,he)}))})).then((()=>({batchId:k.batchId,changes:lv(x)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,y){let v=h.Vu[h.currentUser.toKey()];v||(v=new nt(be)),v=v.insert(f,y),h.Vu[h.currentUser.toKey()]=v})(i,o.batchId,t),await gl(i,o.changes),await Hc(i.remoteStore)}catch(o){const l=em(o,"Failed to persist write");t.reject(l)}}async function Bv(r,e){const t=Ee(r);try{const i=await ok(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ue(h.hu,14607):o.removedDocuments.size>0&&(Ue(h.hu,42227),h.hu=!1))})),await gl(t,i,e)}catch(i){await zo(i)}}function a0(r,e,t){const i=Ee(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const y=Ee(h);y.onlineState=f;let v=!1;y.queries.forEach(((T,x)=>{for(const k of x.Sa)k.va(f)&&(v=!0)})),v&&tm(y)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Jk(r,e,t){const i=Ee(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new nt(ue.comparator);h=h.insert(l,zt.newNoDocument(l,ve.min()));const f=Ce().add(l),y=new Uc(ve.min(),new Map,new nt(be),h,f);await Bv(i,y),i.du=i.du.remove(l),i.Au.delete(e),rm(i)}else await ff(i.localStore,e,!1).then((()=>gf(i,e,t))).catch(zo)}async function Xk(r,e){const t=Ee(r),i=e.batch.batchId;try{const o=await sk(t.localStore,e);qv(t,i,null),Hv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await gl(t,o)}catch(o){await zo(o)}}async function Zk(r,e,t){const i=Ee(r);try{const o=await(function(h,f){const y=Ee(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let T;return y.mutationQueue.lookupMutationBatch(v,f).next((x=>(Ue(x!==null,37113),T=x.keys(),y.mutationQueue.removeMutationBatch(v,x)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,T,f))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,T))).next((()=>y.localDocuments.getDocuments(v,T)))}))})(i.localStore,e);qv(i,e,t),Hv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await gl(i,o)}catch(o){await zo(o)}}function Hv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function qv(r,e,t){const i=Ee(r);let o=i.Vu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function gf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||$v(r,i)}))}function $v(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Qf(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),rm(r))}function l0(r,e,t){for(const i of t)i instanceof Fv?(r.Ru.addReference(i.key,e),eN(r,i)):i instanceof Uv?(re(nm,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||$v(r,i.key)):ge(19791,{wu:i})}function eN(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(re(nm,"New document in limbo: "+t),r.Eu.add(i),rm(r))}function rm(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new ue(Ke.fromString(e)),i=r.fu.next();r.Au.set(i,new Hk(t)),r.du=r.du.insert(t,i),Dv(r.remoteStore,new xi(ur(rv(t.path)),i,"TargetPurposeLimboResolution",Dc.ce))}}async function gl(r,e,t){const i=Ee(r),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,y)=>{h.push(i.pu(y,e,t).then((v=>{if((v||t)&&i.isPrimaryClient){const T=v?!v.fromCache:t?.targetChanges.get(y.targetId)?.current;i.sharedClientState.updateQueryState(y.targetId,T?"current":"not-current")}if(v){o.push(v);const T=Gf.As(y.targetId,v);l.push(T)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(y,v){const T=Ee(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>q.forEach(v,(k=>q.forEach(k.Es,(z=>T.persistence.referenceDelegate.addReference(x,k.targetId,z))).next((()=>q.forEach(k.ds,(z=>T.persistence.referenceDelegate.removeReference(x,k.targetId,z)))))))))}catch(x){if(!Bo(x))throw x;re(Kf,"Failed to update sequence numbers: "+x)}for(const x of v){const k=x.targetId;if(!x.fromCache){const z=T.Ms.get(k),$=z.snapshotVersion,Q=z.withLastLimboFreeSnapshotVersion($);T.Ms=T.Ms.insert(k,Q)}}})(i.localStore,l))}async function tN(r,e){const t=Ee(r);if(!t.currentUser.isEqual(e)){re(nm,"User change. New user:",e.toKey());const i=await Rv(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((y=>{y.reject(new te(H.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await gl(t,i.Ls)}}function nN(r,e){const t=Ee(r),i=t.Au.get(e);if(i&&i.hu)return Ce().add(i.key);{let o=Ce();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function Wv(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jk.bind(null,e),e.Pu.H_=Lk.bind(null,e.eventManager),e.Pu.yu=Fk.bind(null,e.eventManager),e}function rN(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Zk.bind(null,e),e}class vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ik(this.persistence,new tk,e.initialUser,this.serializer)}Cu(e){return new Nv(Wf.mi,this.serializer)}Du(e){return new hk}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vc.provider={build:()=>new vc};class iN extends vc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof yc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new U2(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new Nv((i=>yc.mi(i,t)),this.serializer)}}class yf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>a0(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=tN.bind(null,this.syncEngine),await Dk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Mk})()}createDatastore(e){const t=zc(e.databaseInfo.databaseId),i=(function(l){return new gk(l)})(e.databaseInfo);return(function(l,h,f,y){return new wk(l,h,f,y)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new Tk(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>a0(this.syncEngine,t,0)),(function(){return t0.v()?new t0:new dk})())}createSyncEngine(e,t){return(function(o,l,h,f,y,v,T){const x=new qk(o,l,h,f,y,v);return T&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Ee(t);re(Es,"RemoteStore shutting down."),i.Ea.add(5),await pl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}yf.provider={build:()=>new yf};/**
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
 */class sN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Mi="FirestoreClient";class oN{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=jf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{re(Mi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(re(Mi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=em(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Vd(r,e){r.asyncQueue.verifyOperationInProgress(),re(Mi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Rv(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function u0(r,e){r.asyncQueue.verifyOperationInProgress();const t=await aN(r);re(Mi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>r0(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>r0(e.remoteStore,o))),r._onlineComponents=e}async function aN(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Mi,"Using user provided OfflineComponentProvider");try{await Vd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Do("Error using user provided cache. Falling back to memory cache: "+t),await Vd(r,new vc)}}else re(Mi,"Using default OfflineComponentProvider"),await Vd(r,new iN(void 0));return r._offlineComponents}async function Gv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Mi,"Using user provided OnlineComponentProvider"),await u0(r,r._uninitializedComponentsProvider._online)):(re(Mi,"Using default OnlineComponentProvider"),await u0(r,new yf))),r._onlineComponents}function lN(r){return Gv(r).then((e=>e.syncEngine))}async function uN(r){const e=await Gv(r),t=e.eventManager;return t.onListen=$k.bind(null,e.syncEngine),t.onUnlisten=Kk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Wk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Qk.bind(null,e.syncEngine),t}function cN(r,e,t={}){const i=new ki;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,y,v){const T=new sN({next:k=>{T.Nu(),h.enqueueAndForget((()=>Vk(l,x))),k.fromCache&&y.source==="server"?v.reject(new te(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(k)},error:k=>v.reject(k)}),x=new Uk(f,T,{includeMetadataChanges:!0,qa:!0});return Ok(l,x)})(await uN(r),r.asyncQueue,e,t,i))),i.promise}/**
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
 */function Kv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const c0=new Map;/**
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
 */const Qv="firestore.googleapis.com",h0=!0;class d0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qv,this.ssl=h0}else this.host=e.host,this.ssl=e.ssl??h0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<L2)throw new te(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kv(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new dS;switch(i.type){case"firstParty":return new gS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=c0.get(t);i&&(re("ComponentProvider","Removing Datastore"),c0.delete(t),i.terminate())})(this),Promise.resolve()}}function hN(r,e,t,i={}){r=ws(r,qc);const o=Is(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;o&&(Tf(`https://${f}`),xf("Firestore",!0)),l.host!==Qv&&l.host!==f&&Do("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...l,host:f,ssl:o,emulatorOptions:i};if(!Ri(y,h)&&(r._setSettings(y),i.mockUserToken)){let v,T;if(typeof i.mockUserToken=="string")v=i.mockUserToken,T=Ut.MOCK_USER;else{v=z0(i.mockUserToken,r._app?.options.projectId);const x=i.mockUserToken.sub||i.mockUserToken.user_id;if(!x)throw new te(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ut(x)}r._authCredentials=new fS(new L_(v,T))}}/**
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
 */class bs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new bs(this.firestore,e,this._query)}}class vt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(dl(t,vt._jsonSchema))return new vt(e,i||null,new ue(Ke.fromString(t.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:gt("string",vt._jsonSchemaVersion),referencePath:gt("string")};class Ni extends bs{constructor(e,t,i){super(e,t,rv(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new ue(e))}withConverter(e){return new Ni(this.firestore,e,this._path)}}function Yv(r,e,...t){if(r=ut(r),F_("collection","path",e),r instanceof qc){const i=Ke.fromString(e,...t);return Ay(i),new Ni(r,null,i)}{if(!(r instanceof vt||r instanceof Ni))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ke.fromString(e,...t));return Ay(i),new Ni(r.firestore,null,i)}}function im(r,e,...t){if(r=ut(r),arguments.length===1&&(e=jf.newId()),F_("doc","path",e),r instanceof qc){const i=Ke.fromString(e,...t);return Iy(i),new vt(r,null,new ue(i))}{if(!(r instanceof vt||r instanceof Ni))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ke.fromString(e,...t));return Iy(i),new vt(r.firestore,r instanceof Ni?r.converter:null,new ue(i))}}/**
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
 */const f0="AsyncQueue";class m0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Cv(this,"async_queue_retry"),this._c=()=>{const i=Od();i&&re(f0,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Od();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Od();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ki;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Bo(e))throw e;re(f0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Ur("INTERNAL UNHANDLED ERROR: ",p0(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Zf.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&ge(47125,{Pc:p0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function p0(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class yl extends qc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new m0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new m0(e),this._firestoreClient=void 0,await e}}}function dN(r,e){const t=typeof r=="object"?r:Nc(),i=typeof r=="string"?r:hc,o=Oi(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=L0("firestore");l&&hN(o,...l)}return o}function Jv(r){if(r._terminated)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||fN(r),r._firestoreClient}function fN(r){const e=r._freezeSettings(),t=(function(o,l,h,f){return new DS(o,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Kv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new oN(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(r._componentsProvider))}/**
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
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Pt.fromBase64String(e))}catch(t){throw new te(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(dl(e,xn._jsonSchema))return xn.fromBase64String(e.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:gt("string",xn._jsonSchemaVersion),bytes:gt("string")};/**
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
 */class $c{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sm{constructor(e){this._methodName=e}}/**
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
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(dl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:gt("string",hr._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class dr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(dl(e,dr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dr(e.vectorValues);throw new te(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dr._jsonSchemaVersion="firestore/vectorValue/1.0",dr._jsonSchema={type:gt("string",dr._jsonSchemaVersion),vectorValues:gt("object")};/**
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
 */const mN=/^__.*__$/;class pN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms):new fl(e,this.data,t,this.fieldTransforms)}}class Xv{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ac:r})}}class om{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new om({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Zv(this.Ac)&&mN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class gN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||zc(e)}Cc(e,t,i,o=!1){return new om({Ac:e,methodName:t,Dc:i,path:Ct.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function am(r){const e=r._freezeSettings(),t=zc(r._databaseId);return new gN(r._databaseId,!!e.ignoreUndefinedProperties,t)}function yN(r,e,t,i,o,l={}){const h=r.Cc(l.merge||l.mergeFields?2:0,e,t,o);lm("Data must be an object, but it was:",h,i);const f=ew(i,h);let y,v;if(l.merge)y=new fn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const T=[];for(const x of l.mergeFields){const k=_f(e,x,t);if(!h.contains(k))throw new te(H.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);nw(T,k)||T.push(k)}y=new fn(T),v=h.fieldTransforms.filter((x=>y.covers(x.field)))}else y=null,v=h.fieldTransforms;return new pN(new en(f),y,v)}class Wc extends sm{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wc}}function _N(r,e,t,i){const o=r.Cc(1,e,t);lm("Data must be an object, but it was:",o,i);const l=[],h=en.empty();Fi(i,((y,v)=>{const T=um(e,y,t);v=ut(v);const x=o.yc(T);if(v instanceof Wc)l.push(T);else{const k=_l(v,x);k!=null&&(l.push(T),h.set(T,k))}}));const f=new fn(l);return new Xv(h,f,o.fieldTransforms)}function vN(r,e,t,i,o,l){const h=r.Cc(1,e,t),f=[_f(e,i,t)],y=[o];if(l.length%2!=0)throw new te(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<l.length;k+=2)f.push(_f(e,l[k])),y.push(l[k+1]);const v=[],T=en.empty();for(let k=f.length-1;k>=0;--k)if(!nw(v,f[k])){const z=f[k];let $=y[k];$=ut($);const Q=h.yc(z);if($ instanceof Wc)v.push(z);else{const B=_l($,Q);B!=null&&(v.push(z),T.set(z,B))}}const x=new fn(v);return new Xv(T,x,h.fieldTransforms)}function wN(r,e,t,i=!1){return _l(t,r.Cc(i?4:3,e))}function _l(r,e){if(tw(r=ut(r)))return lm("Unsupported field value:",e,r),ew(r,e);if(r instanceof sm)return(function(i,o){if(!Zv(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let y=_l(f,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),l.push(y),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=ut(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return n2(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=He.fromDate(i);return{timestampValue:gc(o.serializer,l)}}if(i instanceof He){const l=new He(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:gc(o.serializer,l)}}if(i instanceof hr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof xn)return{bytesValue:wv(o.serializer,i._byteString)};if(i instanceof vt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:qf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof dr)return(function(h,f){return{mapValue:{fields:{[K_]:{stringValue:Q_},[dc]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw f.Sc("VectorValues must only contain numeric values.");return Uf(f.serializer,v)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${Pc(i)}`)})(r,e)}function ew(r,e){const t={};return B_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(r,((i,o)=>{const l=_l(o,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function tw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof He||r instanceof hr||r instanceof xn||r instanceof vt||r instanceof sm||r instanceof dr)}function lm(r,e,t){if(!tw(t)||!U_(t)){const i=Pc(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function _f(r,e,t){if((e=ut(e))instanceof $c)return e._internalPath;if(typeof e=="string")return um(r,e);throw wc("Field path arguments must be of type string or ",r,!1,void 0,t)}const EN=new RegExp("[~\\*/\\[\\]]");function um(r,e,t){if(e.search(EN)>=0)throw wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new $c(...e.split("."))._internalPath}catch{throw wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function wc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let y="";return(l||h)&&(y+=" (found",l&&(y+=` in field ${i}`),h&&(y+=` in document ${o}`),y+=")"),new te(H.INVALID_ARGUMENT,f+r+y)}function nw(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class rw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TN extends rw{data(){return super.data()}}function cm(r,e){return typeof e=="string"?um(r,e):e instanceof $c?e._internalPath:e._delegate._internalPath}/**
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
 */function xN(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hm{}class iw extends hm{}function IN(r,e,...t){let i=[];e instanceof hm&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((y=>y instanceof fm)).length,f=l.filter((y=>y instanceof dm)).length;if(h>1||h>0&&f>0)throw new te(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class dm extends iw{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new dm(e,t,i)}_apply(e){const t=this._parse(e);return sw(e._query,t),new bs(e.firestore,e.converter,af(e._query,t))}_parse(e){const t=am(e.firestore);return(function(l,h,f,y,v,T,x){let k;if(v.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new te(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){y0(x,T);const $=[];for(const Q of x)$.push(g0(y,l,Q));k={arrayValue:{values:$}}}else k=g0(y,l,x)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||y0(x,T),k=wN(f,h,x,T==="in"||T==="not-in");return pt.create(v,T,k)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class fm extends hm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fm(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const y of f)sw(h,y),h=af(h,y)})(e._query,t),new bs(e.firestore,e.converter,af(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mm extends iw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new mm(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new te(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new il(l,h)})(e._query,this._field,this._direction);return new bs(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Ho(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function AN(r,e="asc"){const t=e,i=cm("orderBy",r);return mm._create(i,t)}function g0(r,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new te(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iv(e)&&t.indexOf("/")!==-1)throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!ue.isDocumentKey(i))throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Dy(r,new ue(i))}if(t instanceof vt)return Dy(r,t._key);throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pc(t)}.`)}function y0(r,e){if(!Array.isArray(r)||r.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sw(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class SN{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Fi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){const t=e.fields?.[dc].arrayValue?.values?.map((i=>lt(i.doubleValue)));return new dr(t)}convertGeoPoint(e){return new hr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Mc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(tl(e));default:return null}}convertTimestamp(e){const t=Ci(e);return new He(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);Ue(Sv(i),9688,{name:e});const o=new nl(i.get(1),i.get(3)),l=new ue(i.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function kN(r,e,t){let i;return i=r?r.toFirestore(e):e,i}class qu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ro extends rw{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(cm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ro._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ro._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ro._jsonSchema={type:gt("string",Ro._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class tc extends Ro{data(e={}){return super.data(e)}}class bo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new qu(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new tc(this._firestore,this._userDataWriter,i.key,i,new qu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const y=new tc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const y=new tc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,T=-1;return f.type!==0&&(v=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),T=h.indexOf(f.doc.key)),{type:NN(f.type),doc:y,oldIndex:v,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function NN(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:r})}}bo._jsonSchemaVersion="firestore/querySnapshot/1.0",bo._jsonSchema={type:gt("string",bo._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};class RN extends SN{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function bN(r){r=ws(r,bs);const e=ws(r.firestore,yl),t=Jv(e),i=new RN(e);return xN(r._query),cN(t,r._query).then((o=>new bo(e,i,r,o)))}function CN(r,e,t,...i){r=ws(r,vt);const o=ws(r.firestore,yl),l=am(o);let h;return h=typeof(e=ut(e))=="string"||e instanceof $c?vN(l,"updateDoc",r._key,e,t,i):_N(l,"updateDoc",r._key,e),pm(o,[h.toMutation(r._key,Ln.exists(!0))])}function PN(r){return pm(ws(r.firestore,yl),[new zf(r._key,Ln.none())])}function DN(r,e){const t=ws(r.firestore,yl),i=im(r),o=kN(r.converter,e);return pm(t,[yN(am(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,Ln.exists(!1))]).then((()=>i))}function pm(r,e){return(function(i,o){const l=new ki;return i.asyncQueue.enqueueAndForget((async()=>Yk(await lN(i),o,l))),l.promise})(Jv(r),e)}(function(e,t=!0){(function(o){Uo=o})(Ss),Fn(new In("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new yl(new mS(i.getProvider("auth-internal")),new yS(h,i.getProvider("app-check-internal")),(function(v,T){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new te(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nl(v.options.projectId,T)})(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),tn(wy,Ey,e),tn(wy,Ey,"esm2020")})();/**
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
 */const ow="firebasestorage.googleapis.com",jN="storageBucket",MN=120*1e3,ON=600*1e3;/**
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
 */class pr extends An{constructor(e,t,i=0){super(Ld(e),`Firebase Storage: ${t} (${Ld(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mr;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mr||(mr={}));function Ld(r){return"storage/"+r}function VN(){const r="An unknown error occurred, please check the error payload for server response.";return new pr(mr.UNKNOWN,r)}function LN(){return new pr(mr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FN(){return new pr(mr.CANCELED,"User canceled the upload/download.")}function UN(r){return new pr(mr.INVALID_URL,"Invalid URL '"+r+"'.")}function zN(r){return new pr(mr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function _0(r){return new pr(mr.INVALID_ARGUMENT,r)}function aw(){return new pr(mr.APP_DELETED,"The Firebase app was deleted.")}function BN(r){return new pr(mr.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Vn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Vn.makeFromUrl(e,t)}catch{return new Vn(e,"")}if(i.path==="")return i;throw zN(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(J){J.path.charAt(J.path.length-1)==="/"&&(J.path_=J.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),y={bucket:1,path:3};function v(J){J.path_=decodeURIComponent(J.path)}const T="v[A-Za-z0-9_]+",x=t.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",z=new RegExp(`^https?://${x}/${T}/b/${o}/o${k}`,"i"),$={bucket:1,path:3},Q=t===ow?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",he=new RegExp(`^https?://${Q}/${o}/${B}`,"i"),de=[{regex:f,indices:y,postModify:l},{regex:z,indices:$,postModify:v},{regex:he,indices:{bucket:1,path:2},postModify:v}];for(let J=0;J<de.length;J++){const De=de[J],Ie=De.regex.exec(e);if(Ie){const b=Ie[De.indices.bucket];let A=Ie[De.indices.path];A||(A=""),i=new Vn(b,A),De.postModify(i);break}}if(i==null)throw UN(e);return i}}class HN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function qN(r,e,t){let i=1,o=null,l=null,h=!1,f=0;function y(){return f===2}let v=!1;function T(...B){v||(v=!0,e.apply(null,B))}function x(B){o=setTimeout(()=>{o=null,r(z,y())},B)}function k(){l&&clearTimeout(l)}function z(B,...he){if(v){k();return}if(B){k(),T.call(null,B,...he);return}if(y()||h){k(),T.call(null,B,...he);return}i<64&&(i*=2);let de;f===1?(f=2,de=0):de=(i+Math.random())*1e3,x(de)}let $=!1;function Q(B){$||($=!0,k(),!v&&(o!==null?(B||(f=2),clearTimeout(o),x(0)):B||(f=1)))}return x(0),l=setTimeout(()=>{h=!0,Q(!0)},t),Q}function $N(r){r(!1)}/**
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
 */function WN(r){return r!==void 0}function v0(r,e,t,i){if(i<e)throw _0(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw _0(`Invalid value for '${r}'. Expected ${t} or less.`)}function GN(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ec;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ec||(Ec={}));/**
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
 */function KN(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class QN{constructor(e,t,i,o,l,h,f,y,v,T,x,k=!0,z=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=y,this.timeout_=v,this.progressCallback_=T,this.connectionFactory_=x,this.retry=k,this.isUsingEmulator=z,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,Q)=>{this.resolve_=$,this.reject_=Q,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new $u(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const y=f.loaded,v=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(y,v)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Ec.NO_ERROR,y=l.getStatus();if(!f||KN(y,this.additionalRetryCodes_)&&this.retry){const T=l.getErrorCode()===Ec.ABORT;i(!1,new $u(!1,null,T));return}const v=this.successCodes_.indexOf(y)!==-1;i(!0,new $u(v,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const y=this.callback_(f,f.getResponse());WN(y)?l(y):l()}catch(y){h(y)}else if(f!==null){const y=VN();y.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,y)):h(y)}else if(o.canceled){const y=this.appDelete_?aw():FN();h(y)}else{const y=LN();h(y)}};this.canceled_?t(!1,new $u(!1,null,!0)):this.backoffId_=qN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$N(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $u{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function YN(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function JN(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XN(r,e){e&&(r["X-Firebase-GMPID"]=e)}function ZN(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function eR(r,e,t,i,o,l,h=!0,f=!1){const y=GN(r.urlParams),v=r.url+y,T=Object.assign({},r.headers);return XN(T,e),YN(T,t),JN(T,l),ZN(T,i),new QN(v,r.method,T,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
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
 */function tR(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function nR(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class Tc{constructor(e,t){this._service=e,t instanceof Vn?this._location=t:this._location=Vn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Tc(e,t)}get root(){const e=new Vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nR(this._location.path)}get storage(){return this._service}get parent(){const e=tR(this._location.path);if(e===null)return null;const t=new Vn(this._location.bucket,e);return new Tc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw BN(e)}}function w0(r,e){const t=e?.[jN];return t==null?null:Vn.makeFromBucketSpec(t,r)}function rR(r,e,t,i={}){r.host=`${e}:${t}`;const o=Is(e);o&&(Tf(`https://${r.host}/b`),xf("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(r._overrideAuthToken=typeof l=="string"?l:z0(l,r.app.options.projectId))}class iR{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=ow,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MN,this._maxUploadRetryTime=ON,this._requests=new Set,o!=null?this._bucket=Vn.makeFromBucketSpec(o,this._host):this._bucket=w0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vn.makeFromBucketSpec(this._url,e):this._bucket=w0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tc(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new HN(aw());{const h=eR(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const E0="@firebase/storage",T0="0.14.0";/**
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
 */const lw="storage";function sR(r=Nc(),e){r=ut(r);const i=Oi(r,lw).getImmediate({identifier:e}),o=L0("storage");return o&&oR(i,...o),i}function oR(r,e,t,i={}){rR(r,e,t,i)}function aR(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new iR(t,i,o,e,Ss)}function lR(){Fn(new In(lw,aR,"PUBLIC").setMultipleInstances(!0)),tn(E0,T0,""),tn(E0,T0,"esm2020")}lR();const uw="@firebase/installations",gm="0.6.19";/**
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
 */const cw=1e4,hw=`w:${gm}`,dw="FIS_v2",uR="https://firebaseinstallations.googleapis.com/v1",cR=3600*1e3,hR="installations",dR="Installations";/**
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
 */const fR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ts=new As(hR,dR,fR);function fw(r){return r instanceof An&&r.code.includes("request-failed")}/**
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
 */function mw({projectId:r}){return`${uR}/projects/${r}/installations`}function pw(r){return{token:r.token,requestStatus:2,expiresIn:pR(r.expiresIn),creationTime:Date.now()}}async function gw(r,e){const i=(await e.json()).error;return Ts.create("request-failed",{requestName:r,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function yw({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function mR(r,{refreshToken:e}){const t=yw(r);return t.append("Authorization",gR(e)),t}async function _w(r){const e=await r();return e.status>=500&&e.status<600?r():e}function pR(r){return Number(r.replace("s","000"))}function gR(r){return`${dw} ${r}`}/**
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
 */async function yR({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const i=mw(r),o=yw(r),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const h={fid:t,authVersion:dw,appId:r.appId,sdkVersion:hw},f={method:"POST",headers:o,body:JSON.stringify(h)},y=await _w(()=>fetch(i,f));if(y.ok){const v=await y.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:pw(v.authToken)}}else throw await gw("Create Installation",y)}/**
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
 */function vw(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function _R(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const vR=/^[cdef][\w-]{21}$/,vf="";function wR(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=ER(r);return vR.test(t)?t:vf}catch{return vf}}function ER(r){return _R(r).substr(0,22)}/**
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
 */function Gc(r){return`${r.appName}!${r.appId}`}/**
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
 */const ww=new Map;function Ew(r,e){const t=Gc(r);Tw(t,e),TR(t,e)}function Tw(r,e){const t=ww.get(r);if(t)for(const i of t)i(e)}function TR(r,e){const t=xR();t&&t.postMessage({key:r,fid:e}),IR()}let gs=null;function xR(){return!gs&&"BroadcastChannel"in self&&(gs=new BroadcastChannel("[Firebase] FID Change"),gs.onmessage=r=>{Tw(r.data.key,r.data.fid)}),gs}function IR(){ww.size===0&&gs&&(gs.close(),gs=null)}/**
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
 */const AR="firebase-installations-database",SR=1,xs="firebase-installations-store";let Fd=null;function ym(){return Fd||(Fd=G0(AR,SR,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(xs)}}})),Fd}async function xc(r,e){const t=Gc(r),o=(await ym()).transaction(xs,"readwrite"),l=o.objectStore(xs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&Ew(r,e.fid),e}async function xw(r){const e=Gc(r),i=(await ym()).transaction(xs,"readwrite");await i.objectStore(xs).delete(e),await i.done}async function Kc(r,e){const t=Gc(r),o=(await ym()).transaction(xs,"readwrite"),l=o.objectStore(xs),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&Ew(r,f.fid),f}/**
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
 */async function _m(r){let e;const t=await Kc(r.appConfig,i=>{const o=kR(i),l=NR(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===vf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function kR(r){const e=r||{fid:wR(),registrationStatus:0};return Iw(e)}function NR(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ts.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=RR(r,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bR(r)}:{installationEntry:e}}async function RR(r,e){try{const t=await yR(r,e);return xc(r.appConfig,t)}catch(t){throw fw(t)&&t.customData.serverCode===409?await xw(r.appConfig):await xc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bR(r){let e=await x0(r.appConfig);for(;e.registrationStatus===1;)await vw(100),e=await x0(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await _m(r);return i||t}return e}function x0(r){return Kc(r,e=>{if(!e)throw Ts.create("installation-not-found");return Iw(e)})}function Iw(r){return CR(r)?{fid:r.fid,registrationStatus:0}:r}function CR(r){return r.registrationStatus===1&&r.registrationTime+cw<Date.now()}/**
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
 */async function PR({appConfig:r,heartbeatServiceProvider:e},t){const i=DR(r,t),o=mR(r,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const h={installation:{sdkVersion:hw,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},y=await _w(()=>fetch(i,f));if(y.ok){const v=await y.json();return pw(v)}else throw await gw("Generate Auth Token",y)}function DR(r,{fid:e}){return`${mw(r)}/${e}/authTokens:generate`}/**
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
 */async function vm(r,e=!1){let t;const i=await Kc(r.appConfig,l=>{if(!Aw(l))throw Ts.create("not-registered");const h=l.authToken;if(!e&&OR(h))return l;if(h.requestStatus===1)return t=jR(r,e),l;{if(!navigator.onLine)throw Ts.create("app-offline");const f=LR(l);return t=MR(r,f),f}});return t?await t:i.authToken}async function jR(r,e){let t=await I0(r.appConfig);for(;t.authToken.requestStatus===1;)await vw(100),t=await I0(r.appConfig);const i=t.authToken;return i.requestStatus===0?vm(r,e):i}function I0(r){return Kc(r,e=>{if(!Aw(e))throw Ts.create("not-registered");const t=e.authToken;return FR(t)?{...e,authToken:{requestStatus:0}}:e})}async function MR(r,e){try{const t=await PR(r,e),i={...e,authToken:t};return await xc(r.appConfig,i),t}catch(t){if(fw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await xw(r.appConfig);else{const i={...e,authToken:{requestStatus:0}};await xc(r.appConfig,i)}throw t}}function Aw(r){return r!==void 0&&r.registrationStatus===2}function OR(r){return r.requestStatus===2&&!VR(r)}function VR(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+cR}function LR(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function FR(r){return r.requestStatus===1&&r.requestTime+cw<Date.now()}/**
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
 */async function UR(r){const e=r,{installationEntry:t,registrationPromise:i}=await _m(e);return i?i.catch(console.error):vm(e).catch(console.error),t.fid}/**
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
 */async function zR(r,e=!1){const t=r;return await BR(t),(await vm(t,e)).token}async function BR(r){const{registrationPromise:e}=await _m(r);e&&await e}/**
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
 */function HR(r){if(!r||!r.options)throw Ud("App Configuration");if(!r.name)throw Ud("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Ud(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Ud(r){return Ts.create("missing-app-config-values",{valueName:r})}/**
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
 */const Sw="installations",qR="installations-internal",$R=r=>{const e=r.getProvider("app").getImmediate(),t=HR(e),i=Oi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},WR=r=>{const e=r.getProvider("app").getImmediate(),t=Oi(e,Sw).getImmediate();return{getId:()=>UR(t),getToken:o=>zR(t,o)}};function GR(){Fn(new In(Sw,$R,"PUBLIC")),Fn(new In(qR,WR,"PRIVATE"))}GR();tn(uw,gm);tn(uw,gm,"esm2020");/**
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
 */const Ic="analytics",KR="firebase_id",QR="origin",YR=60*1e3,JR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wm="https://www.googletagmanager.com/gtag/js";/**
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
 */const Wt=new kc("@firebase/analytics");/**
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
 */const XR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mn=new As("analytics","Analytics",XR);/**
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
 */function ZR(r){if(!r.startsWith(wm)){const e=mn.create("invalid-gtag-resource",{gtagURL:r});return Wt.warn(e.message),""}return r}function kw(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function eb(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function tb(r,e){const t=eb("firebase-js-sdk-policy",{createScriptURL:ZR}),i=document.createElement("script"),o=`${wm}?l=${r}&id=${e}`;i.src=t?t?.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function nb(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function rb(r,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const y=(await kw(t)).find(v=>v.measurementId===o);y&&await e[y.appId]}}catch(f){Wt.error(f)}r("config",o,l)}async function ib(r,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await kw(t);for(const y of h){const v=f.find(x=>x.measurementId===y),T=v&&e[v.appId];if(T)l.push(T);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",i,o||{})}catch(l){Wt.error(l)}}function sb(r,e,t,i){async function o(l,...h){try{if(l==="event"){const[f,y]=h;await ib(r,e,t,f,y)}else if(l==="config"){const[f,y]=h;await rb(r,e,t,i,f,y)}else if(l==="consent"){const[f,y]=h;r("consent",f,y)}else if(l==="get"){const[f,y,v]=h;r("get",f,y,v)}else if(l==="set"){const[f]=h;r("set",f)}else r(l,...h)}catch(f){Wt.error(f)}}return o}function ob(r,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=sb(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function ab(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(wm)&&t.src.includes(r))return t;return null}/**
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
 */const lb=30,ub=1e3;class cb{constructor(e={},t=ub){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Nw=new cb;function hb(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function db(r){const{appId:e,apiKey:t}=r,i={method:"GET",headers:hb(t)},o=JR.replace("{app-id}",e),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let h="";try{const f=await l.json();f.error?.message&&(h=f.error.message)}catch{}throw mn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function fb(r,e=Nw,t){const{appId:i,apiKey:o,measurementId:l}=r.options;if(!i)throw mn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw mn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new gb;return setTimeout(async()=>{f.abort()},YR),Rw({appId:i,apiKey:o,measurementId:l},h,f,e)}async function Rw(r,{throttleEndTimeMillis:e,backoffCount:t},i,o=Nw){const{appId:l,measurementId:h}=r;try{await mb(i,e)}catch(f){if(h)return Wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:l,measurementId:h};throw f}try{const f=await db(r);return o.deleteThrottleMetadata(l),f}catch(f){const y=f;if(!pb(y)){if(o.deleteThrottleMetadata(l),h)return Wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:l,measurementId:h};throw f}const v=Number(y?.customData?.httpStatus)===503?$g(t,o.intervalMillis,lb):$g(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return o.setThrottleMetadata(l,T),Wt.debug(`Calling attemptFetch again in ${v} millis`),Rw(r,T,i,o)}}function mb(r,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),i(mn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pb(r){if(!(r instanceof An)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class gb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yb(r,e,t,i,o){if(o&&o.global){r("event",t,i);return}else{const l=await e,h={...i,send_to:l};r("event",t,h)}}async function _b(r,e,t,i){if(i&&i.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return r("set",o),Promise.resolve()}else{const o=await e;r("config",o,{update:!0,user_properties:t})}}/**
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
 */async function vb(){if(H0())try{await q0()}catch(r){return Wt.warn(mn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return Wt.warn(mn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wb(r,e,t,i,o,l,h){const f=fb(r);f.then(k=>{t[k.measurementId]=k.appId,r.options.measurementId&&k.measurementId!==r.options.measurementId&&Wt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>Wt.error(k)),e.push(f);const y=vb().then(k=>{if(k)return i.getId()}),[v,T]=await Promise.all([f,y]);ab(l)||tb(l,v.measurementId),o("js",new Date);const x=h?.config??{};return x[QR]="firebase",x.update=!0,T!=null&&(x[KR]=T),o("config",v.measurementId,x),v.measurementId}/**
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
 */class Eb{constructor(e){this.app=e}_delete(){return delete Co[this.app.options.appId],Promise.resolve()}}let Co={},A0=[];const S0={};let zd="dataLayer",Tb="gtag",k0,Em,N0=!1;function xb(){const r=[];if(B0()&&r.push("This is a browser extension environment."),CT()||r.push("Cookies are not available."),r.length>0){const e=r.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=mn.create("invalid-analytics-context",{errorInfo:e});Wt.warn(t.message)}}function Ib(r,e,t){xb();const i=r.options.appId;if(!i)throw mn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mn.create("no-api-key");if(Co[i]!=null)throw mn.create("already-exists",{id:i});if(!N0){nb(zd);const{wrappedGtag:l,gtagCore:h}=ob(Co,A0,S0,zd,Tb);Em=l,k0=h,N0=!0}return Co[i]=wb(r,A0,S0,e,k0,zd,t),new Eb(r)}function Ab(r=Nc()){r=ut(r);const e=Oi(r,Ic);return e.isInitialized()?e.getImmediate():Sb(r)}function Sb(r,e={}){const t=Oi(r,Ic);if(t.isInitialized()){const o=t.getImmediate();if(Ri(e,t.getOptions()))return o;throw mn.create("already-initialized")}return t.initialize({options:e})}function kb(r,e,t){r=ut(r),_b(Em,Co[r.app.options.appId],e,t).catch(i=>Wt.error(i))}function Nb(r,e,t,i){r=ut(r),yb(Em,Co[r.app.options.appId],e,t,i).catch(o=>Wt.error(o))}const R0="@firebase/analytics",b0="0.10.19";function Rb(){Fn(new In(Ic,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Ib(i,o,t)},"PUBLIC")),Fn(new In("analytics-internal",r,"PRIVATE")),tn(R0,b0),tn(R0,b0,"esm2020");function r(e){try{const t=e.getProvider(Ic).getImmediate();return{logEvent:(i,o,l)=>Nb(t,i,o,l),setUserProperties:(i,o)=>kb(t,i,o)}}catch(t){throw mn.create("interop-component-reg-failed",{reason:t})}}}Rb();const bb={apiKey:"AIzaSyCNDG3z3EHIy9lNYuu_5c8MUo61__0KHc4",authDomain:"humsj-charity-sector.firebaseapp.com",projectId:"humsj-charity-sector",storageBucket:"humsj-charity-sector.firebasestorage.app",messagingSenderId:"400609252606",appId:"1:400609252606:web:7e958f80b8f4b3824341af",measurementId:"G-KFZ73GPRJR"},Qc=K0(bb),Tm=lS(Qc),Yc=dN(Qc);sR(Qc);Ab(Qc);const Cb=new jr;Cb.setCustomParameters({prompt:"select_account"});const Pb=async(r,e)=>{try{return(await KI(Tm,r,e)).user}catch(t){throw console.error("Error signing in:",t),new Error(t.message||"Failed to sign in")}},Db=async(r,e)=>{try{return(await GI(Tm,r,e)).user}catch(t){throw console.error("Error signing up:",t),new Error(t.message||"Failed to create account")}},jb=async()=>{try{await JI(Tm)}catch(r){throw console.error("Error signing out:",r),r}},Jc="blog_posts",Mb=async r=>{try{return(await DN(Yv(Yc,Jc),{...r,createdAt:He.now(),updatedAt:He.now()})).id}catch(e){throw console.error("Error adding blog post:",e),e}},Ob=async(r,e)=>{try{const t=im(Yc,Jc,r);await CN(t,{...e,updatedAt:He.now()})}catch(t){throw console.error("Error updating blog post:",t),t}},Vb=async r=>{try{await PN(im(Yc,Jc,r))}catch(e){throw console.error("Error deleting blog post:",e),e}},Lb=async()=>{try{const r=IN(Yv(Yc,Jc),AN("createdAt","desc"));return(await bN(r)).docs.map(t=>({id:t.id,...t.data()}))}catch(r){throw console.error("Error getting blog posts:",r),r}};function Fb({user:r,onLogout:e}){const[t,i]=Be.useState([]),[o,l]=Be.useState(null),[h,f]=Be.useState(!1),[y,v]=Be.useState(!1),[T,x]=Be.useState(null),[k,z]=Be.useState({title:"",titleAm:"",excerpt:"",excerptAm:"",category:"Charity",image:"",date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),readTime:"5 min read"});Be.useEffect(()=>{$()},[]);const $=async()=>{try{v(!0);const J=await Lb();i(J)}catch(J){x("Failed to load posts"),console.error(J)}finally{v(!1)}},Q=async J=>{if(J.preventDefault(),!r||!r.uid){x("You must be logged in to create posts");return}v(!0),x(null);try{o?await Ob(o,k):await Mb(k),await $(),de()}catch(De){x(De.message||"Failed to save post")}finally{v(!1)}},B=J=>{l(J.id),z({title:J.title,titleAm:J.titleAm,excerpt:J.excerpt,excerptAm:J.excerptAm,category:J.category,image:J.image,date:J.date,readTime:J.readTime}),f(!0)},he=async J=>{if(confirm("Are you sure you want to delete this post?")){v(!0),x(null);try{await Vb(J),await $()}catch{x("Failed to delete post")}finally{v(!1)}}},ye=async()=>{try{await jb(),e()}catch{x("Failed to logout")}},de=()=>{f(!1),l(null),z({title:"",titleAm:"",excerpt:"",excerptAm:"",category:"Charity",image:"",date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),readTime:"5 min read"})};return g.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col",children:[g.jsxs("div",{className:"bg-gradient-to-r from-[#004d40] to-[#00695c] text-white p-6 flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-bold mb-1",children:"Blog Admin Panel"}),g.jsxs("p",{className:"text-sm text-gray-200",children:["Signed in as: ",r?.email]})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("button",{onClick:ye,className:"p-2 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2",title:"Logout",children:[g.jsx(A1,{size:20}),g.jsx("span",{className:"text-sm",children:"Logout"})]}),g.jsx("button",{onClick:e,className:"p-2 hover:bg-white/20 rounded-lg transition-colors",children:g.jsx(D0,{size:24})})]})]}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[T&&g.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4",children:T}),!h&&g.jsxs("button",{onClick:()=>f(!0),disabled:y,className:"mb-6 flex items-center gap-2 px-6 py-3 bg-[#ffd700] text-gray-900 rounded-lg hover:bg-[#daa520] disabled:bg-gray-400 transition-colors font-semibold",children:[g.jsx(M1,{size:20}),"Add New Post"]}),h&&g.jsxs("form",{onSubmit:Q,className:"mb-8 bg-gray-50 rounded-xl p-6 border-2 border-[#004d40]",children:[g.jsx("h3",{className:"text-xl font-bold text-[#004d40] mb-4",children:o?"Edit Post":"Create New Post"}),g.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Title (English) *"}),g.jsx("input",{type:"text",required:!0,value:k.title,onChange:J=>z({...k,title:J.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",placeholder:"Enter English title"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Title (አማርኛ) *"}),g.jsx("input",{type:"text",required:!0,value:k.titleAm,onChange:J=>z({...k,titleAm:J.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",placeholder:"የአማርኛ ርዕስ ያስገቡ"})]}),g.jsxs("div",{className:"md:col-span-2",children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Excerpt (English) *"}),g.jsx("textarea",{required:!0,value:k.excerpt,onChange:J=>z({...k,excerpt:J.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-24",placeholder:"Enter English excerpt"})]}),g.jsxs("div",{className:"md:col-span-2",children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Excerpt (አማርኛ) *"}),g.jsx("textarea",{required:!0,value:k.excerptAm,onChange:J=>z({...k,excerptAm:J.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40] h-24",placeholder:"የአማርኛ ማጠቃለያ ያስገቡ"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Category *"}),g.jsxs("select",{value:k.category,onChange:J=>z({...k,category:J.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",children:[g.jsx("option",{value:"Charity",children:"Charity"}),g.jsx("option",{value:"Tech",children:"Tech"}),g.jsx("option",{value:"Education",children:"Education"}),g.jsx("option",{value:"Community",children:"Community"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Read Time *"}),g.jsx("input",{type:"text",required:!0,value:k.readTime,onChange:J=>z({...k,readTime:J.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",placeholder:"e.g., 5 min read"})]}),g.jsxs("div",{className:"md:col-span-2",children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Image URL *"}),g.jsx("input",{type:"url",required:!0,value:k.image,onChange:J=>z({...k,image:J.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004d40]",placeholder:"https://example.com/image.jpg"})]})]}),g.jsxs("div",{className:"flex gap-3 mt-6",children:[g.jsx("button",{type:"submit",disabled:y,className:"flex items-center gap-2 px-6 py-3 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] disabled:bg-gray-400 transition-colors font-semibold",children:y?g.jsxs(g.Fragment,{children:[g.jsx(Bd,{className:"w-5 h-5 animate-spin"}),"Saving..."]}):g.jsxs(g.Fragment,{children:[g.jsx(F1,{size:20}),o?"Update Post":"Create Post"]})}),g.jsx("button",{type:"button",onClick:de,disabled:y,className:"px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:bg-gray-300 transition-colors font-semibold",children:"Cancel"})]})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("h3",{className:"text-xl font-bold text-[#004d40] mb-4",children:["All Posts (",t.length,")",y&&g.jsx(Bd,{className:"inline w-5 h-5 ml-2 animate-spin"})]}),t.length===0?g.jsx("p",{className:"text-gray-500 text-center py-8",children:"No posts yet. Create your first post!"}):t.map(J=>g.jsx("div",{className:"bg-white border border-gray-200 rounded-xl p-4 hover:border-[#004d40] transition-colors",children:g.jsxs("div",{className:"flex gap-4",children:[g.jsx("img",{src:J.image,alt:J.title,className:"w-32 h-32 object-cover rounded-lg flex-shrink-0"}),g.jsxs("div",{className:"flex-1",children:[g.jsxs("div",{className:"flex items-start justify-between mb-2",children:[g.jsxs("div",{children:[g.jsx("div",{className:"inline-block px-3 py-1 bg-[#004d40]/10 text-[#004d40] rounded-full text-sm mb-2",children:J.category}),g.jsx("h4",{className:"font-bold text-gray-900",children:J.title}),g.jsxs("p",{className:"text-sm text-gray-600",children:["አማርኛ: ",J.titleAm]})]}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{onClick:()=>B(J),disabled:y,className:"p-2 text-blue-600 hover:bg-blue-50 disabled:text-gray-400 rounded-lg transition-colors",title:"Edit",children:g.jsx(W1,{size:18})}),g.jsx("button",{onClick:()=>he(J.id),disabled:y,className:"p-2 text-red-600 hover:bg-red-50 disabled:text-gray-400 rounded-lg transition-colors",title:"Delete",children:g.jsx(K1,{size:18})})]})]}),g.jsx("p",{className:"text-sm text-gray-600 line-clamp-2 mb-2",children:J.excerpt}),g.jsxs("div",{className:"flex items-center gap-4 text-xs text-gray-500",children:[g.jsx("span",{children:J.date}),g.jsx("span",{children:"•"}),g.jsx("span",{children:J.readTime})]})]})]})},J.id))]})]})]})})}function Ub({onLoginSuccess:r}){const[e,t]=Be.useState(""),[i,o]=Be.useState(""),[l,h]=Be.useState(!1),[f,y]=Be.useState(null),[v,T]=Be.useState(!1),[x,k]=Be.useState(!1),z=async $=>{$.preventDefault(),h(!0),y(null);try{if(!e||!i)throw new Error("Please fill in all fields");if(i.length<6)throw new Error("Password must be at least 6 characters");let Q;v?Q=await Db(e,i):Q=await Pb(e,i),r(Q)}catch(Q){y(Q.message||"Authentication failed"),h(!1)}};return g.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:g.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:v?"Create Account":"Admin Login"}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:v?"Create an account to access the admin panel":"Sign in with your email and password"}),f&&g.jsx("div",{className:"bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-4 text-sm",children:f}),g.jsxs("form",{onSubmit:z,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Email"}),g.jsx("input",{type:"email",value:e,onChange:$=>t($.target.value),className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#004d40] dark:bg-gray-700 dark:text-white",placeholder:"your@email.com",disabled:l})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Password"}),g.jsxs("div",{className:"relative",children:[g.jsx("input",{type:x?"text":"password",value:i,onChange:$=>o($.target.value),className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#004d40] dark:bg-gray-700 dark:text-white",placeholder:"••••••",disabled:l}),g.jsx("button",{type:"button",onClick:()=>k(!x),className:"absolute right-3 top-2.5 text-gray-500 dark:text-gray-400",children:x?g.jsx(o1,{size:20}):g.jsx(l1,{size:20})})]})]}),g.jsx("button",{type:"submit",disabled:l,className:"w-full bg-[#004d40] hover:bg-[#00695c] disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition",children:l?g.jsxs(g.Fragment,{children:[g.jsx(Bd,{className:"w-5 h-5 animate-spin"}),v?"Creating...":"Signing in..."]}):g.jsxs(g.Fragment,{children:[g.jsx(x1,{className:"w-5 h-5"}),v?"Create Account":"Sign In"]})})]}),g.jsx("div",{className:"mt-4 text-center",children:g.jsx("button",{onClick:()=>{T(!v),y(null),t(""),o("")},className:"text-sm text-[#004d40] dark:text-[#4db8a8] hover:underline",children:v?"Already have an account? Sign in":"Don't have an account? Create one"})})]})})}function zb(){const[r,e]=Be.useState("en"),[t,i]=Be.useState(!1),[o,l]=Be.useState(!1),[h,f]=Be.useState(null),[y,v]=Be.useState([{id:1,title:"New Water Well Project Launched in Haramaya",titleAm:"በሐረማያ አዲስ የውሃ ጉድጓድ ፕሮጀክት ተጀመረ",excerpt:"We're excited to announce the launch of our latest water well project, bringing clean water to over 200 families in rural Haramaya.",excerptAm:"ለ200 በላይ ቤተሰቦች ንጹህ ውሃ የሚያመጣ የቅርብ ጊዜ የውሃ ጉድጓድ ፕሮጀክታችንን ማስጀመራችንን በደስታ እናሳውቃለን።",category:"Charity",image:"https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBBZnJpY2ElMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1Njk2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",date:"Jan 15, 2025",readTime:"4 min read"},{id:2,title:"Tech Training Program Empowers 50+ Youth",titleAm:"የቴክኖሎጂ ስልጠና ፕሮግራም ከ50 በላይ ወጣቶችን አብቃል",excerpt:"Our technology education initiative has successfully trained over 50 young people in digital skills, opening doors to new opportunities.",excerptAm:"የቴክኖሎጂ ትምህርት ተነሳሽነታችን ከ50 በላይ ወጣቶችን በዲጂታል ክህሎቶች በተሳካ ሁኔታ በማሰልጠን ለአዳዲስ እድሎች በር ከፍቷል።",category:"Tech",image:"https://images.unsplash.com/photo-1569098644581-b97f9c091fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY1Njk2NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",date:"Jan 10, 2025",readTime:"5 min read"},{id:3,title:"Community Iftar Brings Together 500+ Families",titleAm:"የማህበረሰብ እፍጠር ከ500 በላይ ቤተሰቦችን አሰባስቧል",excerpt:"Our annual community Iftar event was a tremendous success, fostering unity and compassion among the Ummah.",excerptAm:"ዓመታዊ የማህበረሰብ እፍጠር ዝግጅታችን በኡማህ መካከል አንድነትን እና ርህራሄን በማጎልበት ከፍተኛ ስኬት ነበር።",category:"Community",image:"https://images.unsplash.com/photo-1623458696277-a6f4bcd06c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHMlMjBib29rc3xlbnwxfHx8fDE3NjU2OTY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",date:"Jan 5, 2025",readTime:"3 min read"}]),T=$=>{e($)},x=()=>{l(!0)},k=$=>{f($),l(!1),i(!0)},z=()=>{f(null),i(!1)};return g.jsxs("div",{className:"min-h-screen islamic-pattern",children:[g.jsx("button",{onClick:x,className:"fixed bottom-6 right-6 z-40 p-4 bg-[#004d40] text-white rounded-full shadow-lg hover:bg-[#00695c] transition-all hover:scale-110 dark:shadow-lg dark:shadow-black/50",title:"Admin Panel",style:{opacity:.3},onMouseEnter:$=>$.currentTarget.style.opacity="1",onMouseLeave:$=>$.currentTarget.style.opacity="0.3",children:g.jsx(E1,{size:24})}),o&&g.jsx(Ub,{onLoginSuccess:k}),t&&h&&g.jsx(Fb,{user:h,onLogout:z}),g.jsx(nT,{currentLanguage:r,onLanguageChange:T}),g.jsxs("main",{children:[g.jsx(rT,{language:r}),g.jsx(iT,{language:r}),g.jsx(sT,{language:r}),g.jsx(oT,{language:r}),g.jsxs("section",{id:"charity",className:"scroll-mt-20",children:[g.jsx(cT,{language:r}),g.jsx(dT,{language:r})]}),g.jsx(lT,{language:r}),g.jsx(hT,{language:r,posts:y}),g.jsx("section",{id:"about",className:"py-20 bg-white islamic-pattern-overlay scroll-mt-20",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[g.jsxs("h2",{className:"text-[#004d40] mb-6",children:[r==="en"&&"About Humsj Charity",r==="am"&&"ስለ ሁምስጅ በጎ አድራጎት",r==="om"&&"Waa'ee Humsj Charity",r==="ar"&&"عن Humsj Charity"]}),g.jsxs("p",{className:"text-lg text-gray-700 mb-6",children:[r==="en"&&"Humsj Charity is a subsector of the Haramaya Muslim Student Jema'a, dedicated to leveraging technology for the betterment of the Ethiopian Ummah. We combine modern innovation with Islamic values to create sustainable impact in education, humanitarian aid, and community development.",r==="am"&&"የሁምስጅ በጎ አድራጎት የሐረማያ የሙስሊም ተማሪዎች ጀማዓ ንዑስ ዘርፍ ሲሆን ቴክኖሎጂን ለኢትዮጵያ ኡማህ መሻሻል ለማዋል ቁርጠኛ ነው። ዘላቂ ተጽእኖ ለመፍጠር ዘመናዊ ፈጠራን ከእስላማዊ እሴቶች ጋር እናጣምራለን።",r==="om"&&"Humsj Charity damee xiqqaa Haramaya Muslim Student Jema'a ti, teekinooloojii fayyadamuudhaan Ummaata Itoophiyaa fooyessuu irratti xiyyeeffateera. Dhiibbaa itti fufiinsa qabu uumuuf kalaqaa ammayyaa gatiiwwan Islaamaa waliin walitti fiduun hojjenna.",r==="ar"&&"Humsj Charity هي قطاع فرعي من جمعة طلاب هرر المسلمين، مكرسة للاستفادة من التكنولوجيا لتحسين الأمة الإثيوبية. نجمع بين الابتكار الحديث والقيم الإسلامية لخلق تأثير مستدام في التعليم والمساعدات الإنسانية وتنمية المجتمع."]}),g.jsx("div",{className:"inline-block px-6 py-3 bg-[#004d40]/10 rounded-lg",children:g.jsxs("p",{className:"text-[#004d40]",children:[g.jsx("span",{className:"font-semibold",children:"Telegram:"})," ",g.jsx("a",{href:"https://t.me/humsj_charity",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#00695c] underline",children:"@humsj_charity"})]})})]})})}),g.jsx("section",{id:"volunteer",className:"py-20 bg-gradient-to-br from-[#004d40] to-[#00332a] text-white",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[g.jsxs("h2",{className:"mb-6",children:[r==="en"&&"Join Our Mission",r==="am"&&"ተልእኳችንን ይቀላቀሉ",r==="om"&&"Ergama Keenyaatti Makamaa",r==="ar"&&"انضم إلى مهمتنا"]}),g.jsxs("p",{className:"text-xl text-gray-200 mb-8 max-w-2xl mx-auto",children:[r==="en"&&"Be part of the change. Volunteer with Humsj and make a real difference in your community.",r==="am"&&"የለውጡ አካል ይሁኑ። ከሁምስጅ ጋር በጎ ፈቃደኛ ይሁኑ እና በማህበረሰብዎ ላይ እውነተኛ ለውጥ ያድርጉ።",r==="om"&&"Jijjiirama keessa qooda fuudhaa. Humsj waliin arjooma ta'aatii hawaasa keessan keessatti jijjiirama dhugaa fiduun.",r==="ar"&&"كن جزءًا من التغيير. تطوع مع Humsj وأحدث فرقًا حقيقيًا في مجتمعك."]}),g.jsxs("button",{className:"px-8 py-4 bg-[#ffd700] text-gray-900 rounded-full font-semibold hover:bg-[#daa520] transition-all hover:scale-105",children:[r==="en"&&"Become a Volunteer",r==="am"&&"በጎ ፈቃደኛ ይሁኑ",r==="om"&&"Arjooma Ta'aa",r==="ar"&&"كن متطوعاً"]})]})})]}),g.jsx(fT,{language:r})]})}qE.createRoot(document.getElementById("root")).render(g.jsx(zb,{}));
