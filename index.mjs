// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function n(r,n,t,s){var i,a,d,f,o,u,m,l,p;if(r<=0)return 0;if(1===r||0===s)return n+t[0];for(d=s<0?(1-r)*s:0,i=0,a=0,f=0,p=0;p<r;p++)m=i+(u=n+t[d]),l=e(i)>=e(u)?i-m+u:u-m+i,i=m,m=f+l,o=e(f)>=e(l)?f-m+l:l-m+f,f=m,a+=o,d+=s;return i+f+a}function t(r,n,t,s,i){var a,d,f,o,u,m,l,p,j;if(r<=0)return 0;if(1===r||0===s)return n+t[0];for(f=i,a=0,d=0,o=0,j=0;j<r;j++)l=a+(m=n+t[f]),p=e(a)>=e(m)?a-l+m:m-l+a,a=l,l=o+p,u=e(o)>=e(p)?o-l+p:p-l+o,o=l,d+=u,f+=s;return a+o+d}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
