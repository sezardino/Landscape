!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);new class extends class{constructor(t,e,r){this.container=document.querySelector(t),this.tabs=this.container.querySelectorAll(e),this.content=this.container.querySelectorAll(r)}deactivate(){this.tabs.forEach(t=>{t.classList.remove(this.tabActiveClass)}),this.content.forEach(t=>{t.classList.remove(this.contentActiveClass)})}activate(t){this.tabs.forEach((e,r)=>{r===t&&e.classList.add(this.tabActiveClass)}),this.content.forEach((e,r)=>{r===t&&e.classList.add(this.contentActiveClass)})}}{constructor(t,e,r,i,n){super(t,e,r),this.tabActiveClass=i,this.contentActiveClass=n}bindTrigers(){this.tabs.forEach((t,e)=>{t.addEventListener("click",()=>{this.deactivate(),this.activate(e)})}),this.content.forEach((t,e)=>{t.addEventListener("click",()=>{this.deactivate(),this.activate(e)})})}init(){this.deactivate(),this.activate(0),this.bindTrigers()}}(".works",".works__counter-item",".works__content-wrapper","works__counter-item--active","works__content-wrapper--active").init(),new DatatTabs(".projects",".tabs",".gallery","tab--active","works__content-wrapper--active").init()}]);