"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=m(function(I,b){
var c=require('@stdlib/math-base-special-abs/dist');function O(e,r,n,t,E){var i,o,q,s,f,v,a,u,d;if(e<=0)return 0;if(e===1||t===0)return r+n[0];for(q=E,i=0,o=0,s=0,d=0;d<e;d++)v=r+n[q],a=i+v,c(i)>=c(v)?u=i-a+v:u=v-a+i,i=a,a=s+u,c(s)>=c(u)?f=s-a+u:f=u-a+s,s=a,o+=f,q+=t;return i+s+o}b.exports=O
});var k=m(function(J,y){
var g=require('@stdlib/strided-base-stride2offset/dist'),w=p();function z(e,r,n,t){return w(e,r,n,t,g(e,t))}y.exports=z
});var R=m(function(K,l){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=k(),B=p();A(j,"ndarray",B);l.exports=j
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=R(),x,_=D(C(__dirname,"./native.js"));F(_)?x=G:x=_;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
