// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,l=o.__lookupGetter__,f=o.__lookupSetter__;function c(e){return Math.abs(e)}function p(e,t,r,n){var o,a,i,u,l,f,p,_,d;if(e<=0)return 0;if(1===e||0===n)return t+r[0];for(i=n<0?(1-e)*n:0,o=0,a=0,u=0,d=0;d<e;d++)p=o+(f=t+r[i]),_=c(o)>=c(f)?o-p+f:f-p+o,o=p,p=u+_,l=c(u)>=c(_)?u-p+_:_-p+u,u=p,a+=l,i+=n;return o+u+a}function _(e,t,r,n,o){var a,i,u,l,f,p,_,d,b;if(e<=0)return 0;if(1===e||0===n)return t+r[0];for(u=o,a=0,i=0,l=0,b=0;b<e;b++)_=a+(p=t+r[u]),d=c(a)>=c(p)?a-_+p:p-_+a,a=_,_=l+d,f=c(l)>=c(d)?l-_+d:d-_+l,l=_,i+=f,u+=n;return a+l+i}t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||f.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,_="set"in r,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),_&&u&&u.call(e,t,r.set),e},t(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_}),e.default=p,e.ndarray=_,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).dapxsumkbn2={});
//# sourceMappingURL=index.js.map
