"use strict";var b=function(s,u){return function(){return u||s((u={exports:{}}).exports,u),u.exports}};var k=b(function(H,d){
var m=require('@stdlib/math-base-special-abs/dist');function g(s,u,q,o){var t,a,f,i,v,c,e,r,n;if(s<=0)return 0;if(s===1||o===0)return u+q[0];for(o<0?f=(1-s)*o:f=0,t=0,a=0,i=0,n=0;n<s;n++)c=u+q[f],e=t+c,m(t)>=m(c)?r=t-e+c:r=c-e+t,t=e,e=i+r,m(i)>=m(r)?v=i-e+r:v=r-e+i,i=e,a+=v,f+=o;return t+i+a}d.exports=g
});var j=b(function(I,y){
var x=require('@stdlib/math-base-special-abs/dist');function w(s,u,q,o,t){var a,f,i,v,c,e,r,n,p;if(s<=0)return 0;if(s===1||o===0)return u+q[0];for(i=t,a=0,f=0,v=0,p=0;p<s;p++)e=u+q[i],r=a+e,x(a)>=x(e)?n=a-r+e:n=e-r+a,a=r,r=v+n,x(v)>=x(n)?c=v-r+n:c=n-r+v,v=r,f+=c,i+=o;return a+v+f}y.exports=w
});var E=b(function(J,_){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=k(),A=j();z(R,"ndarray",A);_.exports=R
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=E(),l,O=C(B(__dirname,"./native.js"));D(O)?l=F:l=O;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
