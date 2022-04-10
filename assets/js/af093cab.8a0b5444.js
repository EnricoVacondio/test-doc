"use strict";(self.webpackChunkguidelines=self.webpackChunkguidelines||[]).push([[8797],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={slug:"eslint-post",title:"Eslint Configuration",authors:[],tags:["prettier","typescript"]},s=void 0,c={permalink:"/test-doc/blog/eslint-post",source:"@site/blog/eslint.mdx",title:"Eslint Configuration",description:"Eslint configuration for react native project",date:"2022-04-10T16:59:28.000Z",formattedDate:"April 10, 2022",tags:[{label:"prettier",permalink:"/test-doc/blog/tags/prettier"},{label:"typescript",permalink:"/test-doc/blog/tags/typescript"}],truncated:!1,authors:[],frontMatter:{slug:"eslint-post",title:"Eslint Configuration",authors:[],tags:["prettier","typescript"]},nextItem:{title:"Prettier Configuration",permalink:"/test-doc/blog/prettier-post"}},p={authorsImageUrls:[]},u=[{value:"Install required dependencies",id:"install-required-dependencies",level:2},{value:"Add a the plugins",id:"add-a-the-plugins",level:2},{value:"Override the rules",id:"override-the-rules",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Eslint configuration for react native project"),(0,o.kt)("h2",{id:"install-required-dependencies"},"Install required dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @typescript-eslint/parser\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @typescript-eslint/eslint-plugin\n")),(0,o.kt)("h2",{id:"add-a-the-plugins"},"Add a the plugins"),(0,o.kt)("p",null,"First of all create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," in the root directory if it doesn't exists.\nAfter that to use eslint configuration"),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," file and add the following lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  root: true,\n  extends: ['@react-native-community'],\n  // highlight-start\n  parser: '@typescript-eslint/parser',\n  plugins: ['@typescript-eslint'],\n  // highlight-end\n  ignorePatterns: ['node_modules']\n};\n")),(0,o.kt)("h2",{id:"override-the-rules"},"Override the rules"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  root: true,\n  extends: ['@react-native-community'],\n  parser: '@typescript-eslint/parser',\n  plugins: ['@typescript-eslint'],\n  // highlight-start\n  overrides: [\n    {\n      files: ['*.ts', '*.tsx'],\n      rules: {\n        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks\n        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies\n        '@typescript-eslint/no-shadow': ['error'],\n        'no-shadow': 'off',\n        'no-undef': 'off',\n        'no-console': 'error',\n      },\n    },\n  ],\n  // highlight-end\n  ignorePatterns: ['node_modules', 'coverage'],\n};\n")))}f.isMDXComponent=!0}}]);