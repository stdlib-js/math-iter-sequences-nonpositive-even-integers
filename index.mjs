// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function d(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(o("0aT2t,G9","iter",t.iter)):null:new TypeError(o("0aT2V,FD",t))}var m=(r+1)/2+1;function l(r){var n,s,i,o,p,j;if(n={iter:m},arguments.length&&(o=d(n,r)))throw o;return p=0,j=2,e(s={},"next",a),e(s,"return",v),t&&e(s,t,f),s;function a(){return p+=1,i||p>n.iter?{done:!0}:{value:j-=2,done:!1}}function v(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return l(n)}}export{l as default};
//# sourceMappingURL=index.mjs.map
