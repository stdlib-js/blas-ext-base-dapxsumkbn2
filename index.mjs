// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function s(e,r,s,n,i){var d,a,m,o,f,l,p,j,u;if(e<=0)return 0;if(1===e||0===n)return r+s[0];for(m=i,d=0,a=0,o=0,u=0;u<e;u++)p=d+(l=r+s[m]),j=t(d)>=t(l)?d-p+l:l-p+d,d=p,p=o+j,f=t(o)>=t(j)?o-p+j:j-p+o,o=p,a+=f,m+=n;return d+o+a}function n(e,t,n,i){return s(e,t,n,i,r(e,i))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
