(()=>{"use strict";var e,t={141:()=>{const e=window.wp.blocks,t=window.React,o=window.wp.blockEditor,r=window.wp.components,n=window.wp.i18n,a=JSON.parse('{"UU":"test-jcommaret/button-with-arrow"}');(0,e.registerBlockType)(a.UU,{edit:function(e){const{attributes:a,setAttributes:l}=e,{arrowPosition:s}=a,i=(0,o.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Arrow Settings","button-arrow")},(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Arrow Position","button-arrow"),value:s,options:[{label:(0,n.__)("None","button-arrow"),value:"none"},{label:(0,n.__)("Left","button-arrow"),value:"left"},{label:(0,n.__)("Right","button-arrow"),value:"right"}],onChange:e=>l({arrowPosition:e})}))),(0,t.createElement)("div",{...i,className:`button-arrow button-arrow-${s}`},(0,t.createElement)(o.InnerBlocks,{allowedBlocks:["core/button"],template:[["core/button",{content:`${"left"===s?"← ":""}[TEXT]${"right"===s?" →":""}`}]]})))},save:function(e){const{attributes:r}=e,{arrowPosition:n}=r,a=o.useBlockProps.save();return(0,t.createElement)("div",{...a,className:`button-arrow button-arrow-${n}`},(0,t.createElement)(o.InnerBlocks.Content,{renderAppender:!1}))}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],a=e[u][2];for(var s=!0,i=0;i<o.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(s=!1,a<l&&(l=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={97:0,173:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,l=o[0],s=o[1],i=o[2],c=0;if(l.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(i)var u=i(r)}for(t&&t(o);c<l.length;c++)a=l[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=self.webpackChunkciteo_blocks=self.webpackChunkciteo_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[173],(()=>r(141)));n=r.O(n)})();