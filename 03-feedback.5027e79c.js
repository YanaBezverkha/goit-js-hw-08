!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var r,i,a,f,u,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,u=setTimeout(S,t),s?p(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=g();if(O(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-c);return d?b(n,a-(e-l)):n}(e))}function w(e){return u=void 0,v&&r?p(e):(r=i=void 0,f)}function T(){var e=g(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return j(c);if(d)return u=setTimeout(S,t),p(c)}return void 0===u&&(u=setTimeout(S,t)),f}return t=h(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},T.flush=function(){return void 0===u?f:w(g())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},O=document.querySelector(".feedback-form"),S=O.email,w=O.message;if(O.addEventListener("input",e(t)((function(){var e={email:S.value,message:w.value};!function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}("feedback-form-state",e)}),500)),O.addEventListener("submit",(function(e){if(""!==S.value&&""!==w.value){e.preventDefault();var t=j("feedback-form-state");localStorage.removeItem("feedback-form-state"),console.log(t),O.reset()}})),j("feedback-form-state")){var T=j("feedback-form-state");S.value=T.email,w.value=T.message}}();
//# sourceMappingURL=03-feedback.5027e79c.js.map