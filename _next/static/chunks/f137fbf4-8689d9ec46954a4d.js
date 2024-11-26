"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{54339:(e,t,n)=>{n.d(t,{$x:()=>M,It:()=>z,Mk:()=>C,T3:()=>T,bv:()=>F,ck:()=>P,iQ:()=>K,s9:()=>Y,we:()=>A});var r,o=n(25316),u=n(98070),l=n(65373);n(28965);var i=n(22928);let c={...r||(r=n.t(o,2))},s=c.useInsertionEffect||(e=>e());function a(e){let t=o.useRef(()=>{});return s(()=>{t.current=e}),o.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}var f="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;let d=!1,v=0,m=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+v++,p=c.useId||function(){let[e,t]=o.useState(()=>d?m():void 0);return f(()=>{null==e&&t(m())},[]),o.useEffect(()=>{d=!0},[]),e},E=o.createContext(null),g=o.createContext(null),R=()=>{var e;return(null==(e=o.useContext(E))?void 0:e.id)||null},b=()=>o.useContext(g);function y(e){return"data-floating-ui-"+e}function h(e){let t=(0,o.useRef)(e);return f(()=>{t.current=e}),t}let w=y("safe-polygon");function x(e,t,n){return n&&!(0,u.Go)(n)?0:"number"==typeof e?e:null==e?void 0:e[t]}function C(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,dataRef:i,events:c,elements:s}=e,{enabled:d=!0,delay:v=0,handleClose:m=null,mouseOnly:p=!1,restMs:E=0,move:g=!0}=t,y=b(),C=R(),L=h(m),k=h(v),M=h(n),T=o.useRef(),P=o.useRef(-1),I=o.useRef(),q=o.useRef(-1),_=o.useRef(!0),D=o.useRef(!1),S=o.useRef(()=>{}),W=o.useRef(!1),Y=o.useCallback(()=>{var e;let t=null==(e=i.current.openEvent)?void 0:e.type;return(null==t?void 0:t.includes("mouse"))&&"mousedown"!==t},[i]);o.useEffect(()=>{if(d)return c.on("openchange",e),()=>{c.off("openchange",e)};function e(e){let{open:t}=e;t||(clearTimeout(P.current),clearTimeout(q.current),_.current=!0,W.current=!1)}},[d,c]),o.useEffect(()=>{if(!d||!L.current||!n)return;function e(e){Y()&&r(!1,e,"hover")}let t=(0,u.YE)(s.floating).documentElement;return t.addEventListener("mouseleave",e),()=>{t.removeEventListener("mouseleave",e)}},[s.floating,n,r,d,L,Y]);let A=o.useCallback(function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n="hover");let o=x(k.current,"close",T.current);o&&!I.current?(clearTimeout(P.current),P.current=window.setTimeout(()=>r(!1,e,n),o)):t&&(clearTimeout(P.current),r(!1,e,n))},[k,r]),K=a(()=>{S.current(),I.current=void 0}),B=a(()=>{if(D.current){let e=(0,u.YE)(s.floating).body;e.style.pointerEvents="",e.removeAttribute(w),D.current=!1}}),O=a(()=>!!i.current.openEvent&&["click","mousedown"].includes(i.current.openEvent.type));o.useEffect(()=>{if(d&&(0,l.vq)(s.domReference)){var e;let r=s.domReference;return n&&r.addEventListener("mouseleave",c),null==(e=s.floating)||e.addEventListener("mouseleave",c),g&&r.addEventListener("mousemove",t,{once:!0}),r.addEventListener("mouseenter",t),r.addEventListener("mouseleave",o),()=>{var e;n&&r.removeEventListener("mouseleave",c),null==(e=s.floating)||e.removeEventListener("mouseleave",c),g&&r.removeEventListener("mousemove",t),r.removeEventListener("mouseenter",t),r.removeEventListener("mouseleave",o)}}function t(e){if(clearTimeout(P.current),_.current=!1,p&&!(0,u.Go)(T.current)||E>0&&!x(k.current,"open"))return;let t=x(k.current,"open",T.current);t?P.current=window.setTimeout(()=>{M.current||r(!0,e,"hover")},t):n||r(!0,e,"hover")}function o(e){if(O())return;S.current();let t=(0,u.YE)(s.floating);if(clearTimeout(q.current),W.current=!1,L.current&&i.current.floatingContext){n||clearTimeout(P.current),I.current=L.current({...i.current.floatingContext,tree:y,x:e.clientX,y:e.clientY,onClose(){B(),K(),O()||A(e,!0,"safe-polygon")}});let r=I.current;t.addEventListener("mousemove",r),S.current=()=>{t.removeEventListener("mousemove",r)};return}"touch"===T.current&&(0,u.gR)(s.floating,e.relatedTarget)||A(e)}function c(e){!O()&&i.current.floatingContext&&(null==L.current||L.current({...i.current.floatingContext,tree:y,x:e.clientX,y:e.clientY,onClose(){B(),K(),O()||A(e)}})(e))}},[s,d,e,p,E,g,A,K,B,r,n,M,y,k,L,i,O]),f(()=>{var e,t;if(d&&n&&null!=(e=L.current)&&e.__options.blockPointerEvents&&Y()){D.current=!0;let e=s.floating;if((0,l.vq)(s.domReference)&&e){let n=(0,u.YE)(s.floating).body;n.setAttribute(w,"");let r=s.domReference,o=null==y||null==(t=y.nodesRef.current.find(e=>e.id===C))||null==(t=t.context)?void 0:t.elements.floating;return o&&(o.style.pointerEvents=""),n.style.pointerEvents="none",r.style.pointerEvents="auto",e.style.pointerEvents="auto",()=>{n.style.pointerEvents="",r.style.pointerEvents="",e.style.pointerEvents=""}}}},[d,n,C,s,y,L,Y]),f(()=>{n||(T.current=void 0,W.current=!1,K(),B())},[n,K,B]),o.useEffect(()=>()=>{K(),clearTimeout(P.current),clearTimeout(q.current),B()},[d,s.domReference,K,B]);let X=o.useMemo(()=>{function e(e){T.current=e.pointerType}return{onPointerDown:e,onPointerEnter:e,onMouseMove(e){let{nativeEvent:t}=e;function o(){_.current||M.current||r(!0,t,"hover")}!(!p||(0,u.Go)(T.current))||n||0===E||W.current&&e.movementX**2+e.movementY**2<2||(clearTimeout(q.current),"touch"===T.current?o():(W.current=!0,q.current=window.setTimeout(o,E)))}}},[p,r,n,M,E]),F=o.useMemo(()=>({onMouseEnter(){clearTimeout(P.current)},onMouseLeave(e){O()||A(e.nativeEvent,!1)}}),[A,O]);return o.useMemo(()=>d?{reference:X,floating:F}:{},[d,X,F])}let L=()=>{},k=o.createContext({delay:0,initialDelay:0,timeoutMs:0,currentId:null,setCurrentId:L,setState:L,isInstantPhase:!1}),M=()=>o.useContext(k);function T(e){let{children:t,delay:n,timeoutMs:r=0}=e,[u,l]=o.useReducer((e,t)=>({...e,...t}),{delay:n,timeoutMs:r,initialDelay:n,currentId:null,isInstantPhase:!1}),i=o.useRef(null),c=o.useCallback(e=>{l({currentId:e})},[]);return f(()=>{u.currentId?null===i.current?i.current=u.currentId:u.isInstantPhase||l({isInstantPhase:!0}):(u.isInstantPhase&&l({isInstantPhase:!1}),i.current=null)},[u.currentId,u.isInstantPhase]),o.createElement(k.Provider,{value:o.useMemo(()=>({...u,setState:l,setCurrentId:c}),[u,c])},t)}function P(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,floatingId:o}=e,{id:u,enabled:l=!0}=t,i=null!=u?u:o,c=M(),{currentId:s,setCurrentId:a,initialDelay:d,setState:v,timeoutMs:m}=c;return f(()=>{l&&s&&(v({delay:{open:1,close:x(d,"close")}}),s!==i&&r(!1))},[l,i,r,v,s,d]),f(()=>{function e(){r(!1),v({delay:d,currentId:null})}if(l&&s&&!n&&s===i){if(m){let t=window.setTimeout(e,m);return()=>{clearTimeout(t)}}e()}},[l,n,v,s,i,r,d,m]),f(()=>{l&&a!==L&&n&&a(i)},[l,n,a,i]),c}function I(e,t){let n=e.filter(e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)}),r=n;for(;r.length;)r=e.filter(e=>{var t;return null==(t=r)?void 0:t.some(t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)})}),n=n.concat(r);return n}let q=e=>e&&(e.host||q(e.parentNode)),_=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"}),D={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},S={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},W=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function Y(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,elements:i,dataRef:c}=e,{enabled:s=!0,escapeKey:f=!0,outsidePress:d=!0,outsidePressEvent:v="pointerdown",referencePress:m=!1,referencePressEvent:p="pointerdown",ancestorScroll:E=!1,bubbles:g,capture:R}=t,h=b(),w=a("function"==typeof d?d:()=>!1),x="function"==typeof d?w:d,C=o.useRef(!1),L=o.useRef(!1),{escapeKey:k,outsidePress:M}=W(g),{escapeKey:T,outsidePress:P}=W(R),q=o.useRef(!1),_=a(e=>{var t;if(!n||!s||!f||"Escape"!==e.key||q.current)return;let o=null==(t=c.current.floatingContext)?void 0:t.nodeId,l=h?I(h.nodesRef.current,o):[];if(!k&&(e.stopPropagation(),l.length>0)){let e=!0;if(l.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__escapeKeyBubbles){e=!1;return}}),!e)return}r(!1,(0,u.O_)(e)?e.nativeEvent:e,"escape-key")}),Y=a(e=>{var t;let n=()=>{var t;_(e),null==(t=(0,u.EW)(e))||t.removeEventListener("keydown",n)};null==(t=(0,u.EW)(e))||t.addEventListener("keydown",n)}),A=a(e=>{var t;let n=C.current;C.current=!1;let o=L.current;if(L.current=!1,"click"===v&&o||n||"function"==typeof x&&!x(e))return;let s=(0,u.EW)(e),a="["+y("inert")+"]",f=(0,u.YE)(i.floating).querySelectorAll(a),d=(0,l.vq)(s)?s:null;for(;d&&!(0,l.eu)(d);){let e=(0,l.$4)(d);if((0,l.eu)(e)||!(0,l.vq)(e))break;d=e}if(f.length&&(0,l.vq)(s)&&!(0,u.tZ)(s)&&!(0,u.gR)(s,i.floating)&&Array.from(f).every(e=>!(0,u.gR)(d,e)))return;if((0,l.sb)(s)&&O){let t=s.clientWidth>0&&s.scrollWidth>s.clientWidth,n=s.clientHeight>0&&s.scrollHeight>s.clientHeight,r=n&&e.offsetX>s.clientWidth;if(n&&"rtl"===(0,l.L9)(s).direction&&(r=e.offsetX<=s.offsetWidth-s.clientWidth),r||t&&e.offsetY>s.clientHeight)return}let m=null==(t=c.current.floatingContext)?void 0:t.nodeId,p=h&&I(h.nodesRef.current,m).some(t=>{var n;return(0,u.F2)(e,null==(n=t.context)?void 0:n.elements.floating)});if((0,u.F2)(e,i.floating)||(0,u.F2)(e,i.domReference)||p)return;let E=h?I(h.nodesRef.current,m):[];if(E.length>0){let e=!0;if(E.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__outsidePressBubbles){e=!1;return}}),!e)return}r(!1,e,"outside-press")}),K=a(e=>{var t;let n=()=>{var t;A(e),null==(t=(0,u.EW)(e))||t.removeEventListener(v,n)};null==(t=(0,u.EW)(e))||t.addEventListener(v,n)});o.useEffect(()=>{if(!n||!s)return;c.current.__escapeKeyBubbles=k,c.current.__outsidePressBubbles=M;let e=-1;function t(e){r(!1,e,"ancestor-scroll")}function o(){window.clearTimeout(e),q.current=!0}function a(){e=window.setTimeout(()=>{q.current=!1},(0,l.Tc)()?5:0)}let d=(0,u.YE)(i.floating);f&&(d.addEventListener("keydown",T?Y:_,T),d.addEventListener("compositionstart",o),d.addEventListener("compositionend",a)),x&&d.addEventListener(v,P?K:A,P);let m=[];return E&&((0,l.vq)(i.domReference)&&(m=(0,l.v9)(i.domReference)),(0,l.vq)(i.floating)&&(m=m.concat((0,l.v9)(i.floating))),!(0,l.vq)(i.reference)&&i.reference&&i.reference.contextElement&&(m=m.concat((0,l.v9)(i.reference.contextElement)))),(m=m.filter(e=>{var t;return e!==(null==(t=d.defaultView)?void 0:t.visualViewport)})).forEach(e=>{e.addEventListener("scroll",t,{passive:!0})}),()=>{f&&(d.removeEventListener("keydown",T?Y:_,T),d.removeEventListener("compositionstart",o),d.removeEventListener("compositionend",a)),x&&d.removeEventListener(v,P?K:A,P),m.forEach(e=>{e.removeEventListener("scroll",t)}),window.clearTimeout(e)}},[c,i,f,x,v,n,r,E,s,k,M,_,T,Y,A,P,K]),o.useEffect(()=>{C.current=!1},[x,v]);let B=o.useMemo(()=>({onKeyDown:_,[D[p]]:e=>{m&&r(!1,e.nativeEvent,"reference-press")}}),[_,r,m,p]),O=o.useMemo(()=>({onKeyDown:_,onMouseDown(){L.current=!0},onMouseUp(){L.current=!0},[S[v]]:()=>{C.current=!0}}),[_,v]);return o.useMemo(()=>s?{reference:B,floating:O}:{},[s,B,O])}function A(e){void 0===e&&(e={});let{nodeId:t}=e,n=function(e){let{open:t=!1,onOpenChange:n,elements:r}=e,u=p(),l=o.useRef({}),[i]=o.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}})()),c=null!=R(),[s,f]=o.useState(r.reference),d=a((e,t,r)=>{l.current.openEvent=e?t:void 0,i.emit("openchange",{open:e,event:t,reason:r,nested:c}),null==n||n(e,t,r)}),v=o.useMemo(()=>({setPositionReference:f}),[]),m=o.useMemo(()=>({reference:s||r.reference||null,floating:r.floating||null,domReference:r.reference}),[s,r.reference,r.floating]);return o.useMemo(()=>({dataRef:l,open:t,onOpenChange:d,elements:m,events:i,floatingId:u,refs:v}),[t,d,m,i,u,v])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,u=r.elements,[c,s]=o.useState(null),[d,v]=o.useState(null),m=(null==u?void 0:u.domReference)||c,E=o.useRef(null),g=b();f(()=>{m&&(E.current=m)},[m]);let y=(0,i.we)({...e,elements:{...u,...d&&{reference:d}}}),h=o.useCallback(e=>{let t=(0,l.vq)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;v(t),y.refs.setReference(t)},[y.refs]),w=o.useCallback(e=>{((0,l.vq)(e)||null===e)&&(E.current=e,s(e)),((0,l.vq)(y.refs.reference.current)||null===y.refs.reference.current||null!==e&&!(0,l.vq)(e))&&y.refs.setReference(e)},[y.refs]),x=o.useMemo(()=>({...y.refs,setReference:w,setPositionReference:h,domReference:E}),[y.refs,w,h]),C=o.useMemo(()=>({...y.elements,domReference:m}),[y.elements,m]),L=o.useMemo(()=>({...y,...r,refs:x,elements:C,nodeId:t}),[y,x,C,t,r]);return f(()=>{r.dataRef.current.floatingContext=L;let e=null==g?void 0:g.nodesRef.current.find(e=>e.id===t);e&&(e.context=L)}),o.useMemo(()=>({...y,context:L,refs:x,elements:C}),[y,x,C,L])}function K(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,events:i,dataRef:c,elements:s}=e,{enabled:a=!0,visibleOnly:f=!0}=t,d=o.useRef(!1),v=o.useRef(),m=o.useRef(!0);o.useEffect(()=>{if(!a)return;let e=(0,l.zk)(s.domReference);function t(){!n&&(0,l.sb)(s.domReference)&&s.domReference===(0,u.RS)((0,u.YE)(s.domReference))&&(d.current=!0)}function r(){m.current=!0}return e.addEventListener("blur",t),e.addEventListener("keydown",r,!0),()=>{e.removeEventListener("blur",t),e.removeEventListener("keydown",r,!0)}},[s.domReference,n,a]),o.useEffect(()=>{if(a)return i.on("openchange",e),()=>{i.off("openchange",e)};function e(e){let{reason:t}=e;("reference-press"===t||"escape-key"===t)&&(d.current=!0)}},[i,a]),o.useEffect(()=>()=>{clearTimeout(v.current)},[]);let p=o.useMemo(()=>({onPointerDown(e){(0,u.Pg)(e.nativeEvent)||(m.current=!1)},onMouseLeave(){d.current=!1},onFocus(e){if(d.current)return;let t=(0,u.EW)(e.nativeEvent);if(f&&(0,l.vq)(t))try{if((0,u.nr)()&&(0,u.cX)())throw Error();if(!t.matches(":focus-visible"))return}catch(e){if(!m.current&&!(0,u.$u)(t))return}r(!0,e.nativeEvent,"focus")},onBlur(e){d.current=!1;let t=e.relatedTarget,n=e.nativeEvent,o=(0,l.vq)(t)&&t.hasAttribute(y("focus-guard"))&&"outside"===t.getAttribute("data-type");v.current=window.setTimeout(()=>{var e;let l=(0,u.RS)(s.domReference?s.domReference.ownerDocument:document);if(t||l!==s.domReference){if((0,u.gR)(null==(e=c.current.floatingContext)?void 0:e.refs.floating.current,l)||(0,u.gR)(s.domReference,l)||o)return;r(!1,n,"focus")}})}}),[c,s.domReference,r,f]);return o.useMemo(()=>a?{reference:p}:{},[a,p])}let B="active",O="selected";function X(e,t,n){let r=new Map,o="item"===n,u=e;if(o&&e){let{[B]:t,[O]:n,...r}=e;u=r}return{..."floating"===n&&{tabIndex:-1,"data-floating-ui-focusable":""},...u,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,u]=t;if(!(o&&[B,O].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof u){var l;null==(l=r.get(n))||l.push(u),e[n]=function(){for(var e,t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];return null==(e=r.get(n))?void 0:e.map(e=>e(...o)).find(e=>void 0!==e)}}}else e[n]=u}}),e),{})}}function F(e){void 0===e&&(e=[]);let t=e.map(e=>null==e?void 0:e.reference),n=e.map(e=>null==e?void 0:e.floating),r=e.map(e=>null==e?void 0:e.item),u=o.useCallback(t=>X(t,e,"reference"),t),l=o.useCallback(t=>X(t,e,"floating"),n),i=o.useCallback(t=>X(t,e,"item"),r);return o.useMemo(()=>({getReferenceProps:u,getFloatingProps:l,getItemProps:i}),[u,l,i])}let H=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function z(e,t){var n;void 0===t&&(t={});let{open:r,floatingId:u}=e,{enabled:l=!0,role:i="dialog"}=t,c=null!=(n=H.get(i))?n:i,s=p(),a=null!=R(),f=o.useMemo(()=>"tooltip"===c||"label"===i?{["aria-"+("label"===i?"labelledby":"describedby")]:r?u:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":"alertdialog"===c?"dialog":c,"aria-controls":r?u:void 0,..."listbox"===c&&{role:"combobox"},..."menu"===c&&{id:s},..."menu"===c&&a&&{role:"menuitem"},..."select"===i&&{"aria-autocomplete":"none"},..."combobox"===i&&{"aria-autocomplete":"list"}},[c,u,a,r,s,i]),d=o.useMemo(()=>{let e={id:u,...c&&{role:c}};return"tooltip"===c||"label"===i?e:{...e,..."menu"===c&&{"aria-labelledby":s}}},[c,u,s,i]),v=o.useCallback(e=>{let{active:t,selected:n}=e,r={role:"option",...t&&{id:u+"-option"}};switch(i){case"select":return{...r,"aria-selected":t&&n};case"combobox":return{...r,...t&&{"aria-selected":!0}}}return{}},[u,i]);return o.useMemo(()=>l?{reference:f,floating:d,item:v}:{},[l,f,d,v])}}}]);