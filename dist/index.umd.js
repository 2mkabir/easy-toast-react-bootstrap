!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("react-bootstrap"),require("react/jsx-runtime")):"function"==typeof define&&define.amd?define(["exports","react","react-bootstrap","react/jsx-runtime"],e):e((t||self).easyToastReactBootstrap={},t.React,t.reactBootstrap,t.jsxRuntime)}(this,function(t,e,n,r){function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}var o=["children"],i=/*#__PURE__*/e.createContext([]),u=function(t,e){if("addTop"===e.type){var n=[].concat(t);return n.unshift(e.data),n}if("addBottom"===e.type){var r=[].concat(t);return r.push(e.data),r}return"remove"===e.type?t.filter(function(t){return t.id!==e.data.id}):t};t.EasyToastContainer=function(t){var s=t.children,c=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e.indexOf(n=o[r])>=0||(a[n]=t[n]);return a}(t,o),d=e.useReducer(u,[]),f=d[0],l=d[1],p=function(t,e){if(t&&!e){for(var n=t.target;n&&!n.hasAttribute("data-toast-id");)n=n.parentElement;e=n.getAttribute("data-toast-id")}e&&l({type:"remove",data:{id:e}})},y=function t(n,r){/*#__PURE__*/return e.isValidElement(n)&&"function"==typeof n.type?t(n.type(n.props),r):/*#__PURE__*/e.cloneElement(n,{key:r,"data-toast-id":r,onClose:function(){return p(null,r)}})};/*#__PURE__*/return r.jsx(r.Fragment,{children:/*#__PURE__*/r.jsxs(i.Provider,{value:[function(t,e){var n=Math.random().toString(16).slice(2);l({type:"bottom"===e?"addBottom":"addTop",data:{id:n,element:y(t,n)}})},p],children:[/*#__PURE__*/r.jsx(n.ToastContainer,a({},c,{children:null==f?void 0:f.map(function(t){return t.element})})),s]})})},t.useEasyToast=function(){var t=e.useContext(i);return[t[0],t[1]]}});
//# sourceMappingURL=index.umd.js.map
