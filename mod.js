// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,_=function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},f=r()?c:_;var p=function(e){return Math.abs(e)};function b(e,r,t,n){var o,a,u,i,l,c,_,f,b;if(e<=0)return 0;if(1===e||0===n)return r+t[0];for(u=n<0?(1-e)*n:0,o=0,a=0,i=0,b=0;b<e;b++)_=o+(c=r+t[u]),f=p(o)>=p(c)?o-_+c:c-_+o,o=_,_=i+f,l=p(i)>=p(f)?i-_+f:f-_+i,i=_,a+=l,u+=n;return o+i+a}function y(e,r,t,n,o){var a,u,i,l,c,_,f,b,y;if(e<=0)return 0;if(1===e||0===n)return r+t[0];for(i=o,a=0,u=0,l=0,y=0;y<e;y++)f=a+(_=r+t[i]),b=p(a)>=p(_)?a-f+_:_-f+a,a=f,f=l+b,c=p(l)>=p(b)?l-f+b:b-f+l,l=f,u+=c,i+=n;return a+l+u}(function(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(b,"ndarray",y);export{b as default,y as ndarray};
//# sourceMappingURL=mod.js.map
