function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,f=setTimeout(j,t),l?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(h(e))return S(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?d(n,i-(e-c)):n}(e))}function S(e){return f=void 0,p&&r?y(e):(r=o=void 0,a)}function w(){var e=v(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:S(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")};y.form.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:y.email.value,message:y.textarea.value}),y.form.reset(),localStorage.removeItem("feedback-form-state")})),y.form.addEventListener("input",e(t)((function(){const e={email:y.email.value,message:y.textarea.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));const x=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");x&&(y.email.value=x.email,y.textarea.value=x.message);
//# sourceMappingURL=03-feedback.7275de40.js.map