/*! For license information please see aa27088f.9e45be56.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(9),i=(n(0),n(148)),o=n(150),c=n(156),l={title:"File Syncer"},u={id:"syncers/file",title:"File Syncer",description:'import Tabs from "@theme/Tabs";',source:"@site/docs/syncers/file.md",permalink:"/vscode-syncify/docs/syncers/file",editUrl:"https://github.com/arnohovhannisyan/syncify-docs/edit/master/docs/syncers/file.md",lastUpdatedBy:"Arno Hovhannisyan",lastUpdatedAt:1579053511,sidebar:"docs",previous:{title:"Repo Syncer",permalink:"/vscode-syncify/docs/syncers/repo"},next:{title:"Prerequisites",permalink:"/vscode-syncify/docs/contributing/prerequisites"}},s=[{value:"Description",id:"description",children:[]},{value:"Advantages",id:"advantages",children:[]},{value:"Disadvantages",id:"disadvantages",children:[]},{value:"Setup",id:"setup",children:[{value:"Configuring the Export Path",id:"configuring-the-export-path",children:[]}]}],p={rightToc:s};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"file")," syncer syncs your VSCode configuration by exporting it to a specific directory."),Object(i.b)("h2",{id:"advantages"},"Advantages"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Settings are stored locally, so you can keep your confidential data safe")),Object(i.b)("h2",{id:"disadvantages"},"Disadvantages"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No conflict resolution"),Object(i.b)("li",{parentName:"ul"},"Cannot use ",Object(i.b)("inlineCode",{parentName:"li"},"Syncify: Sync")," command"),Object(i.b)("li",{parentName:"ul"},"Not used as much as the ",Object(i.b)("inlineCode",{parentName:"li"},"repo")," syncer, so it may be less stable")),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("h3",{id:"configuring-the-export-path"},"Configuring the Export Path"),Object(i.b)(o.a,{mdxType:"Tabs"},Object(i.b)(c.a,{value:"Using the GUI",default:!0,mdxType:"TabItem"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"Syncify: Open Settings")," in the command palette"),Object(i.b)("li",{parentName:"ol"},"Enter the absolute path to your desired directory into the ",Object(i.b)("inlineCode",{parentName:"li"},"File Syncer -> File Export Path")," field"))),Object(i.b)(c.a,{value:"Manually",mdxType:"TabItem"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"Syncify: Open Settings")," in the command palette"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Open file in editor")),Object(i.b)("li",{parentName:"ol"},"Set the value of the ",Object(i.b)("inlineCode",{parentName:"li"},"file.path")," property to the absolute path to your desired directory")),Object(i.b)("p",null,"Example snippet from settings file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"{3}","{3}":!0}),'{\n  "file": {\n    "path": "/some/absolute/path"\n  }\n}\n')))))}f.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||f[b]||i;return n?a.a.createElement(d,c({ref:t},u,{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},149:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},150:function(e,t,n){"use strict";n(151);var r=n(0),a=n.n(r),i=n(149),o=n.n(i),c=n(118),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,i=n.map((function(e){return{label:e.props.value,value:e.props.value}})),c=n.find((function(e){return e.props.default})),p=Object(r.useState)(c.props.value),f=p[0],b=p[1],d=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:o()("tab-item",l.a.tabItem,{"tab-item--active":f===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return b(t)},onClick:function(){return b(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},151:function(e,t,n){"use strict";var r=n(17),a=n(152)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(66)("find")},152:function(e,t,n){var r=n(23),a=n(68),i=n(48),o=n(34),c=n(153);e.exports=function(e,t){var n=1==e,l=2==e,u=3==e,s=4==e,p=6==e,f=5==e||p,b=t||c;return function(t,c,d){for(var y,m,v=i(t),h=a(v),O=r(c,d,3),j=o(h.length),g=0,x=n?b(t,j):l?b(t,0):void 0;j>g;g++)if((f||g in h)&&(m=O(y=h[g],g,v),e))if(n)x[g]=m;else if(m)switch(e){case 3:return!0;case 5:return y;case 6:return g;case 2:x.push(y)}else if(s)return!1;return p?-1:u||s?s:x}}},153:function(e,t,n){var r=n(154);e.exports=function(e,t){return new(r(e))(t)}},154:function(e,t,n){var r=n(11),a=n(155),i=n(2)("species");e.exports=function(e){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},155:function(e,t,n){var r=n(18);e.exports=Array.isArray||function(e){return"Array"==r(e)}},156:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);