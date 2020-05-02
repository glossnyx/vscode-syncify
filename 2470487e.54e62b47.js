/*! For license information please see 2470487e.54e62b47.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(9),i=(n(0),n(158)),o=n(161),c=n(167),l={title:"Profiles"},u={id:"features/profiles",title:"Profiles",description:'import Tabs from "@theme/Tabs";',source:"@site/docs/features/profiles.md",permalink:"/vscode-syncify/docs/features/profiles",editUrl:"https://github.com/arnohovhannisyan/syncify-docs/edit/master/docs/features/profiles.md",lastUpdatedBy:"Arno Hovhannisyan",lastUpdatedAt:1588388769,sidebar:"docs",previous:{title:"Add or Improve Language Support",permalink:"/vscode-syncify/docs/contributing/language-support"},next:{title:"Custom Files",permalink:"/vscode-syncify/docs/features/custom-files"}},p=[{value:"Creating a New Profile",id:"creating-a-new-profile",children:[]},{value:"Switching the Current Profile",id:"switching-the-current-profile",children:[]},{value:"Example Configuration",id:"example-configuration",children:[]}],s={rightToc:p};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Syncify supports using profiles to have different settings for different occasions."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that profiles are currently only supported using the default ",Object(i.b)("inlineCode",{parentName:"p"},"repo")," syncer")),Object(i.b)("h2",{id:"creating-a-new-profile"},"Creating a New Profile"),Object(i.b)(o.a,{mdxType:"Tabs"},Object(i.b)(c.a,{value:"Using the GUI",default:!0,mdxType:"TabItem"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"Syncify: Open Settings")," in the command palette"),Object(i.b)("li",{parentName:"ol"},"Scroll down to the ",Object(i.b)("inlineCode",{parentName:"li"},"Repo Syncer -> Profiles")," section"),Object(i.b)("li",{parentName:"ol"},"Click the ",Object(i.b)("inlineCode",{parentName:"li"},"+")," button to create a new profile"),Object(i.b)("li",{parentName:"ol"},"Fill in the ",Object(i.b)("inlineCode",{parentName:"li"},"branch")," and ",Object(i.b)("inlineCode",{parentName:"li"},"name")," fields"))),Object(i.b)(c.a,{value:"Manually",mdxType:"TabItem"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"Syncify: Open Settings")," in the command palette"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Open file in editor")),Object(i.b)("li",{parentName:"ol"},"Add a new object to the ",Object(i.b)("inlineCode",{parentName:"li"},"repo.profiles")," array with the following format")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "branch": "[BRANCH]",\n    "name": "[NAME]"\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[BRANCH]")," is the Git branch that will be used to store your settings, while ",Object(i.b)("inlineCode",{parentName:"p"},"[NAME]")," is the name of the profile."))),Object(i.b)("h2",{id:"switching-the-current-profile"},"Switching the Current Profile"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"Syncify: Switch profile")," in the command palette"),Object(i.b)("li",{parentName:"ol"},"Select the profile you want to switch to")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"After switching the current profile using the command, Syncify will prompt you to download the new settings.")),Object(i.b)("h2",{id:"example-configuration"},"Example Configuration"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "syncer": "repo",\n    "repo": {\n        "url": "...",\n        "profiles": [\n            {\n                "branch": "master",\n                "name": "main"\n            },\n            {\n                "branch": "react",\n                "name": "react-tools"\n            }\n        ],\n        "currentProfile": "react-tools"\n    }\n}\n')))}f.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,d=s["".concat(o,".").concat(b)]||s[b]||f[b]||i;return n?a.a.createElement(d,c({ref:t},u,{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},159:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},161:function(e,t,n){"use strict";n(162);var r=n(0),a=n.n(r),i=n(159),o=n.n(i),c=n(118),l=n.n(c),u=37,p=39;t.a=function(e){var t=e.block,n=e.children,i=n.map((function(e){return{label:e.props.value,value:e.props.value}})),c=n.find((function(e){return e.props.default})),s=Object(r.useState)(c.props.value),f=s[0],b=s[1],d=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:o()("tab-item",l.a.tabItem,{"tab-item--active":f===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return b(t)},onClick:function(){return b(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},162:function(e,t,n){"use strict";var r=n(17),a=n(163)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(66)("find")},163:function(e,t,n){var r=n(23),a=n(68),i=n(48),o=n(34),c=n(164);e.exports=function(e,t){var n=1==e,l=2==e,u=3==e,p=4==e,s=6==e,f=5==e||s,b=t||c;return function(t,c,d){for(var m,y,h=i(t),O=a(h),v=r(c,d,3),j=o(O.length),g=0,w=n?b(t,j):l?b(t,0):void 0;j>g;g++)if((f||g in O)&&(y=v(m=O[g],g,h),e))if(n)w[g]=y;else if(y)switch(e){case 3:return!0;case 5:return m;case 6:return g;case 2:w.push(m)}else if(p)return!1;return s?-1:u||p?p:w}}},164:function(e,t,n){var r=n(165);e.exports=function(e,t){return new(r(e))(t)}},165:function(e,t,n){var r=n(11),a=n(166),i=n(2)("species");e.exports=function(e){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},166:function(e,t,n){var r=n(18);e.exports=Array.isArray||function(e){return"Array"==r(e)}},167:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);