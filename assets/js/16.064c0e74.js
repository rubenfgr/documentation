(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{133:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(87),c=n(16),i=n(27),l=n(111),s=n(3),u=n(7),d=n(88),p=n(86),m=n(101),b=n(105),h=n(106),f=n(104),y=n(91),g=n(96),v=n(107),j=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},O=n(109),k=n(89),E=n(70),C=n.n(E);var T=function e(t,n){return"link"===t.type?Object(p.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},N=Object(a.memo)((function(e){var t=e.items,n=Object(u.a)(e,["items"]);return t.map((function(e,t){return r.a.createElement(S,Object(s.a)({key:t,item:e},n))}))}));function S(e){switch(e.item.type){case"category":return r.a.createElement(x,e);case"link":default:return r.a.createElement(P,e)}}function x(e){var t,n,o,c=e.item,i=e.onItemClick,l=e.collapsible,p=e.activePath,m=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=c.items,h=c.label,f=T(c,p),y=(n=f,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!l&&(!f&&c.collapsed)})),v=g[0],j=g[1],O=Object(a.useRef)(null),k=Object(a.useState)(void 0),E=k[0],S=k[1],x=function(e){var t;void 0===e&&(e=!0),S(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){f&&!y&&v&&j(!1)}),[f,y,v]);var P=Object(a.useCallback)((function(e){e.preventDefault(),E||x(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[E]);return 0===b.length?null:r.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":v})},r.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&f},t[C.a.menuLinkText]=!l,t)),onClick:l?P:void 0,href:l?"#!":void 0},m),h),r.a.createElement("ul",{className:"menu__list",ref:O,style:{height:E},onTransitionEnd:function(){v||x(!1)}},r.a.createElement(N,{items:b,tabIndex:v?"-1":"0",onItemClick:i,collapsible:l,activePath:p})))}function P(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,c=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=n.href,l=n.label,p=T(n,o);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(y.a,Object(s.a)({className:Object(d.a)("menu__link",(t={"menu__link--active":p},t[C.a.menuLinkExternal]=!Object(g.a)(i),t)),to:i},Object(g.a)(i)&&{isNavLink:!0,exact:!0,onClick:a},c),l))}function w(e){var t=e.onClick;return r.a.createElement("button",{type:"button",title:Object(k.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(d.a)("button button--secondary button--outline",C.a.collapseSidebarButton),onClick:t},r.a.createElement(j,{className:C.a.collapseSidebarButtonIcon}))}function B(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.a.createElement("button",{"aria-label":t?Object(k.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(k.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.a.createElement("span",{className:Object(d.a)(C.a.sidebarMenuIcon,C.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(O.a,{className:C.a.sidebarMenuIcon,height:24,width:24}))}var I=function(e){var t,n,o=e.path,c=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,s=e.onCollapse,u=e.isHidden,y=function(){var e=Object(m.a)().isAnnouncementBarClosed,t=Object(a.useState)(!e),n=t[0],r=t[1];return Object(f.a)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),g=Object(p.useThemeConfig)(),j=g.navbar.hideOnScroll,O=g.hideableSidebar,k=Object(m.a)().isAnnouncementBarClosed,E=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];Object(b.a)(t);var r=Object(h.a)();return Object(a.useEffect)((function(){r===h.b.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:Object(a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:Object(a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),T=E.showResponsiveSidebar,S=E.closeResponsiveSidebar,x=E.toggleResponsiveSidebar;return r.a.createElement("div",{className:Object(d.a)(C.a.sidebar,(t={},t[C.a.sidebarWithHideableNavbar]=j,t[C.a.sidebarHidden]=u,t))},j&&r.a.createElement(v.a,{tabIndex:-1,className:C.a.sidebarLogo}),r.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",C.a.menu,(n={"menu--show":T},n[C.a.menuWithAnnouncementBar]=!k&&y,n))},r.a.createElement(B,{responsiveSidebarOpened:T,onClick:x}),r.a.createElement("ul",{className:"menu__list"},r.a.createElement(N,{items:c,onItemClick:S,collapsible:l,activePath:o}))),O&&r.a.createElement(w,{onClick:s}))},_={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},A={Prism:n(24).a,theme:_};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var R=/\r\n|\r|\n/,M=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},H=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=D({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=D({},n,{backgroundColor:null}),r};function W(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var $=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),L(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?H(e.theme,e.language):void 0;return t.themeDict=n})),L(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=D({},W(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?D({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),L(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(i))}})),L(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=D({},W(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?D({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),L(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,i=[],l=[i];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],d=n[c][o];if("string"==typeof d?(u=c>0?u:["plain"],s=d):(u=z(u,d.type),d.alias&&(u=z(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(R),m=p.length;i.push({types:u,content:p[0]});for(var b=1;b<m;b++)M(i),l.push(i=[]),i.push({types:u,content:p[b]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return M(i),l}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var F=n(133),V=n.n(F),J={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},K=n(95),X=function(){var e=Object(p.useThemeConfig)().prism,t=Object(K.a)().isDarkTheme,n=e.theme||J,a=e.darkTheme||n;return t?a:n},Y=n(71),q=n.n(Y),G=/{([\d,-]+)}/,Q=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function U(e){var t=e.children,n=e.className,o=e.metastring,c=e.title,i=Object(p.useThemeConfig)().prism,l=Object(a.useState)(!1),u=l[0],m=l[1],b=Object(a.useState)(!1),h=b[0],f=b[1];Object(a.useEffect)((function(){f(!0)}),[]);var y=Object(p.parseCodeBlockTitle)(o)||c,g=Object(a.useRef)(null),v=[],j=X(),O=Array.isArray(t)?t.join(""):t;if(o&&G.test(o)){var E=o.match(G)[1];v=V()(E).filter((function(e){return e>0}))}var C=n&&n.replace(/language-/,"");!C&&i.defaultLanguage&&(C=i.defaultLanguage);var T=O.replace(/\n$/,"");if(0===v.length&&void 0!==C){for(var N,S="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return Q(["js","jsBlock"]);case"jsx":case"tsx":return Q(["js","jsBlock","jsx"]);case"html":return Q(["js","jsBlock","html"]);case"python":case"py":return Q(["python"]);default:return Q()}}(C),P=O.replace(/\n$/,"").split("\n"),w=0;w<P.length;){var B=w+1,I=P[w].match(x);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=B+",";break;case"highlight-start":N=B;break;case"highlight-end":S+=N+"-"+(B-1)+","}P.splice(w,1)}else w+=1}v=V()(S),T=P.join("\n")}var _=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(T),m(!0),setTimeout((function(){return m(!1)}),2e3)};return r.a.createElement($,Object(s.a)({},A,{key:String(h),theme:j,code:T,language:C}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.a.createElement("div",{className:q.a.codeBlockContainer},y&&r.a.createElement("div",{style:a,className:q.a.codeBlockTitle},y),r.a.createElement("div",{className:Object(d.a)(q.a.codeBlockContent,C)},r.a.createElement("div",{tabIndex:0,className:Object(d.a)(n,q.a.codeBlock,"thin-scrollbar",(t={},t[q.a.codeBlockWithTitle]=y,t))},r.a.createElement("div",{className:q.a.codeBlockLines,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},i({token:e,key:t})))})))})))),r.a.createElement("button",{ref:g,type:"button","aria-label":Object(k.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(d.a)(q.a.copyButton),onClick:_},u?r.a.createElement(k.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(k.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}n(72);var Z=n(73),ee=n.n(Z),te=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),c=Object(p.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(d.a)("anchor",(n={},n[ee.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:Object(k.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,o)}},ne={code:function(e){var t=e.children;return Object(a.isValidElement)(t)?t:t.includes("\n")?r.a.createElement(U,e):r.a.createElement("code",e)},a:function(e){return r.a.createElement(y.a,e)},pre:function(e){var t,n=e.children;return Object(a.isValidElement)(null==n||null===(t=n.props)||void 0===t?void 0:t.children)?null==n?void 0:n.props.children:r.a.createElement(U,Object(a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:te("h1"),h2:te("h2"),h3:te("h3"),h4:te("h4"),h5:te("h5"),h6:te("h6")},ae=n(112),re=n(23),oe=n(74),ce=n.n(oe);function ie(e){var t,n,i,s,u,m=e.currentDocRoute,b=e.versionMetadata,h=e.children,f=Object(c.default)(),y=f.siteConfig,g=f.isClient,v=b.pluginId,O=b.permalinkToSidebar,E=b.docsSidebars,C=b.version,T=O[m.path],N=E[T],S=Object(a.useState)(!1),x=S[0],P=S[1],w=Object(a.useState)(!1),B=w[0],_=w[1],A=Object(a.useCallback)((function(){B&&_(!1),P(!x)}),[B]);return r.a.createElement(l.a,{key:g,wrapperClassName:p.ThemeClassNames.wrapper.docPages,pageClassName:p.ThemeClassNames.page.docPage,searchMetadatas:{version:C,tag:Object(p.docVersionSearchTag)(v,C)}},r.a.createElement("div",{className:ce.a.docPage},N&&r.a.createElement("div",{className:Object(d.a)(ce.a.docSidebarContainer,(t={},t[ce.a.docSidebarContainerHidden]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ce.a.docSidebarContainer)&&x&&_(!0)},role:"complementary"},r.a.createElement(I,{key:T,sidebar:N,path:m.path,sidebarCollapsible:null===(n=null===(i=y.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===n||n,onCollapse:A,isHidden:B}),B&&r.a.createElement("div",{className:ce.a.collapsedDocSidebar,title:Object(k.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},r.a.createElement(j,{className:ce.a.expandSidebarButtonIcon}))),r.a.createElement("main",{className:Object(d.a)(ce.a.docMainContainer,(s={},s[ce.a.docMainContainerEnhanced]=x||!N,s))},r.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",ce.a.docItemWrapper,(u={},u[ce.a.docItemWrapperEnhanced]=x,u))},r.a.createElement(o.a,{components:ne},h)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(re.matchPath)(a.pathname,e)}));return o?r.a.createElement(ie,{currentDocRoute:o,versionMetadata:n},Object(i.a)(t)):r.a.createElement(ae.default,e)}},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);