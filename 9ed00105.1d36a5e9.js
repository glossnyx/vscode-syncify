(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(1),r=n(9),o=(n(0),n(158)),a={title:"Configuration"},c={id:"configuration",title:"Configuration",description:"## Opening the Settings Page",source:"@site/docs/configuration.md",permalink:"/vscode-syncify/docs/configuration",editUrl:"https://github.com/arnohovhannisyan/syncify-docs/edit/master/docs/configuration.md",lastUpdatedBy:"Arno Hovhannisyan",lastUpdatedAt:1586301067,sidebar:"docs",previous:{title:"Sync Pragmas",permalink:"/vscode-syncify/docs/features/sync-pragmas"},next:{title:"Common Terms",permalink:"/vscode-syncify/docs/common-terms"}},l=[{value:"Opening the Settings Page",id:"opening-the-settings-page",children:[]},{value:"Default Settings",id:"default-settings",children:[]},{value:"<code>syncer</code>",id:"syncer",children:[]},{value:"<code>repo</code>",id:"repo",children:[{value:"<code>url</code>",id:"url",children:[]},{value:"<code>profiles</code>",id:"profiles",children:[]},{value:"<code>currentProfile</code>",id:"currentprofile",children:[]}]},{value:"<code>file</code>",id:"file",children:[{value:"<code>path</code>",id:"path",children:[]}]},{value:"<code>ignoredItems</code>",id:"ignoreditems",children:[]},{value:"<code>autoUploadDelay</code>",id:"autouploaddelay",children:[]},{value:"<code>watchSettings</code>",id:"watchsettings",children:[]},{value:"<code>syncOnStartup</code>",id:"synconstartup",children:[]},{value:"<code>hostname</code>",id:"hostname",children:[]},{value:"<code>forceDownload</code>",id:"forcedownload",children:[]},{value:"<code>forceUpload</code>",id:"forceupload",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"opening-the-settings-page"},"Opening the Settings Page"),Object(o.b)("p",null,"To open the settings page, run ",Object(o.b)("inlineCode",{parentName:"p"},"Syncify: Open Settings")," in the command palette. This will open a page where you can change most settings using a pretty interface. To open the raw settings file, click on the ",Object(o.b)("inlineCode",{parentName:"p"},"Open File in Editor")," button at the top."),Object(o.b)("h2",{id:"default-settings"},"Default Settings"),Object(o.b)("p",null,"The most up-to-date version of the default settings can be found ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/arnohovhannisyan/vscode-syncify/blob/master/src/models/settings.ts"}),"here"),"."),Object(o.b)("h2",{id:"syncer"},Object(o.b)("inlineCode",{parentName:"h2"},"syncer")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},'"repo" | "file"')),Object(o.b)("p",null,"This is the method that is used by Syncify to sync your settings."),Object(o.b)("h2",{id:"repo"},Object(o.b)("inlineCode",{parentName:"h2"},"repo")),Object(o.b)("p",null,"These are settings specific to the ",Object(o.b)("inlineCode",{parentName:"p"},"Repo")," method."),Object(o.b)("h3",{id:"url"},Object(o.b)("inlineCode",{parentName:"h3"},"url")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"This is the URL to your ",Object(o.b)("inlineCode",{parentName:"p"},"Git")," repository."),Object(o.b)("h3",{id:"profiles"},Object(o.b)("inlineCode",{parentName:"h3"},"profiles")),Object(o.b)("p",null,"Type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"Array<{\n    branch: string,\n    name: string\n}>\n")),Object(o.b)("p",null,"This is the list of profiles used to sync multiple configurations."),Object(o.b)("h3",{id:"currentprofile"},Object(o.b)("inlineCode",{parentName:"h3"},"currentProfile")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"This is the profile currently being used by Syncify."),Object(o.b)("h2",{id:"file"},Object(o.b)("inlineCode",{parentName:"h2"},"file")),Object(o.b)("p",null,"These are settings specific to the ",Object(o.b)("inlineCode",{parentName:"p"},"File")," method."),Object(o.b)("h3",{id:"path"},Object(o.b)("inlineCode",{parentName:"h3"},"path")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"This is the folder that your settings are exported to when using the ",Object(o.b)("inlineCode",{parentName:"p"},"File")," method."),Object(o.b)("h2",{id:"ignoreditems"},Object(o.b)("inlineCode",{parentName:"h2"},"ignoredItems")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string[]")),Object(o.b)("p",null,"These are ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Glob_%28programming%29"}),"globs")," used to exclude certain files/folders from being uploaded."),Object(o.b)("h2",{id:"autouploaddelay"},Object(o.b)("inlineCode",{parentName:"h2"},"autoUploadDelay")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number")),Object(o.b)("p",null,"This is the amount of time (in seconds) the extension waits before auto-uploading your settings. It is only used if ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#watch-settings"}),Object(o.b)("inlineCode",{parentName:"a"},"watchSettings"))," is turned on."),Object(o.b)("h2",{id:"watchsettings"},Object(o.b)("inlineCode",{parentName:"h2"},"watchSettings")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"This determines whether the extension automatically uploads your settings when you change them."),Object(o.b)("h2",{id:"synconstartup"},Object(o.b)("inlineCode",{parentName:"h2"},"syncOnStartup")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"This determines whether ",Object(o.b)("inlineCode",{parentName:"p"},"Syncify: Sync")," should be run on VSCode startup."),Object(o.b)("h2",{id:"hostname"},Object(o.b)("inlineCode",{parentName:"h2"},"hostname")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"This is the value used by the ",Object(o.b)("inlineCode",{parentName:"p"},"host")," attribute for Sync Pragmas"),Object(o.b)("h2",{id:"forcedownload"},Object(o.b)("inlineCode",{parentName:"h2"},"forceDownload")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"This determines whether settings should be downloaded even if they are already up to date."),Object(o.b)("h2",{id:"forceupload"},Object(o.b)("inlineCode",{parentName:"h2"},"forceUpload")),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"This determines whether settings should be uploaded even if they are already up to date or newer."))}b.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=i,h=d["".concat(a,".").concat(u)]||d[u]||s[u]||o;return n?r.a.createElement(h,c({ref:t},p,{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);