"use strict";(self.webpackChunkguidelines=self.webpackChunkguidelines||[]).push([[9146],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1668:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],s={slug:"web",title:"Web",authors:[],tags:["resources","font","web"],sidebar_position:1},i=void 0,c={unversionedId:"web",id:"web",title:"Web",description:"Install",source:"@site/icons/web.md",sourceDirName:".",slug:"/web",permalink:"/test-doc/icons/web",tags:[{label:"resources",permalink:"/test-doc/icons/tags/resources"},{label:"font",permalink:"/test-doc/icons/tags/font"},{label:"web",permalink:"/test-doc/icons/tags/web"}],version:"current",sidebarPosition:1,frontMatter:{slug:"web",title:"Web",authors:[],tags:["resources","font","web"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/test-doc/icons/intro"},next:{title:"Icons names",permalink:"/test-doc/icons/icons"}},u={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Styling",id:"styling",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Please download all the resources."),(0,a.kt)("p",null,"Create a new folder names ",(0,a.kt)("inlineCode",{parentName:"p"},"icon-font")," and put all the downloaded elements inside."),(0,a.kt)("p",null,"In your global configuration css file please import ",(0,a.kt)("inlineCode",{parentName:"p"},"font-style.css")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"In order to use the icons, you need to create a span and use the icon name as class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    <span class="icon-home">\n')),(0,a.kt)("h2",{id:"styling"},"Styling"),(0,a.kt)("p",null,"As custom font icon set to style the icons you need to create a new class and use text style properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"    .custom-color {\n        color: red !important;\n    }\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    <span class="icon-home custom-color">\n')))}d.isMDXComponent=!0}}]);