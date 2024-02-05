"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{7693:function(e,t,i){i.d(t,{Bi:function(){return N},JA:function(){return nL}});var r,n,a,o,s=i(5745),l=i(2265),c=i(7437),d=i(6375),u=i(8886),h=Object.create,f=Object.defineProperty,m=Object.defineProperties,p=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,y=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,E=(e,t,i)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,T=(e,t)=>{for(var i in t||={})x.call(t,i)&&E(e,i,t[i]);if(_)for(var i of _(t))b.call(t,i)&&E(e,i,t[i]);return e},P=(e,t)=>m(e,g(t)),z=(e,t)=>{var i={};for(var r in e)x.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&_)for(var r of _(e))0>t.indexOf(r)&&b.call(e,r)&&(i[r]=e[r]);return i},w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),S=(e,t)=>{for(var i in t)f(e,i,{get:t[i],enumerable:!0})},C=(e,t,i)=>new Promise((r,n)=>{var a=e=>{try{s(i.next(e))}catch(e){n(e)}},o=e=>{try{s(i.throw(e))}catch(e){n(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((i=i.apply(e,t)).next())}),A=w((e,t)=>{t.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}),O=w((e,t)=>{var i="%[a-f0-9]{2}",r=RegExp("("+i+")|([^%]+?)","gi"),n=RegExp("("+i+")+","gi");t.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},i=n.exec(e);i;){try{t[i[0]]=decodeURIComponent(i[0])}catch{var a=function(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(r)||[],i=1;i<t.length;i++)t=(e=(function e(t,i){try{return[decodeURIComponent(t.join(""))]}catch{}if(1===t.length)return t;i=i||1;var r=t.slice(0,i),n=t.slice(i);return Array.prototype.concat.call([],e(r),e(n))})(t,i).join("")).match(r)||[];return e}}(i[0]);a!==i[0]&&(t[i[0]]=a)}i=n.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),s=0;s<o.length;s++){var l=o[s];e=e.replace(RegExp(l,"g"),t[l])}return e}(e)}}}),R=w((e,t)=>{t.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let i=e.indexOf(t);return -1===i?[e]:[e.slice(0,i),e.slice(i+t.length)]}}),D=w((e,t)=>{t.exports=function(e,t){for(var i={},r=Object.keys(e),n=Array.isArray(t),a=0;a<r.length;a++){var o=r[a],s=e[o];(n?-1!==t.indexOf(o):t(o,s,e))&&(i[o]=s)}return i}}),L=w(e=>{var t=A(),i=O(),r=R(),n=D(),a=e=>null==e,o=Symbol("encodeFragmentIdentifier");function s(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function l(e,i){return i.encode?i.strict?t(e):encodeURIComponent(e):e}function c(e,t){return t.decode?i(e):e}function d(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function u(e){let t=(e=d(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function h(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function f(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let i=function(e){let t;switch(e.arrayFormat){case"index":return(e,i,r)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){r[e]=i;return}void 0===r[e]&&(r[e]={}),r[e][t[1]]=i};case"bracket":return(e,i,r)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){r[e]=i;return}if(void 0===r[e]){r[e]=[i];return}r[e]=[].concat(r[e],i)};case"colon-list-separator":return(e,i,r)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){r[e]=i;return}if(void 0===r[e]){r[e]=[i];return}r[e]=[].concat(r[e],i)};case"comma":case"separator":return(t,i,r)=>{let n="string"==typeof i&&i.includes(e.arrayFormatSeparator),a="string"==typeof i&&!n&&c(i,e).includes(e.arrayFormatSeparator);i=a?c(i,e):i;let o=n||a?i.split(e.arrayFormatSeparator).map(t=>c(t,e)):null===i?i:c(i,e);r[t]=o};case"bracket-separator":return(t,i,r)=>{let n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n){r[t]=i&&c(i,e);return}let a=null===i?[]:i.split(e.arrayFormatSeparator).map(t=>c(t,e));if(void 0===r[t]){r[t]=a;return}r[t]=[].concat(r[t],a)};default:return(e,t,i)=>{if(void 0===i[e]){i[e]=t;return}i[e]=[].concat(i[e],t)}}}(t),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let a of e.split("&")){if(""===a)continue;let[e,o]=r(t.decode?a.replace(/\+/g," "):a,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:c(o,t),i(c(e,t),o,n)}for(let e of Object.keys(n)){let i=n[e];if("object"==typeof i&&null!==i)for(let e of Object.keys(i))i[e]=h(i[e],t);else n[e]=h(i,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{let i=n[t];return i&&"object"==typeof i&&!Array.isArray(i)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(i):e[t]=i,e},Object.create(null))}e.extract=u,e.parse=f,e.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let i=i=>t.skipNull&&a(e[i])||t.skipEmptyString&&""===e[i],r=function(e){switch(e.arrayFormat){case"index":return t=>(i,r)=>{let n=i.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?i:null===r?[...i,[l(t,e),"[",n,"]"].join("")]:[...i,[l(t,e),"[",l(n,e),"]=",l(r,e)].join("")]};case"bracket":return t=>(i,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?i:null===r?[...i,[l(t,e),"[]"].join("")]:[...i,[l(t,e),"[]=",l(r,e)].join("")];case"colon-list-separator":return t=>(i,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?i:null===r?[...i,[l(t,e),":list="].join("")]:[...i,[l(t,e),":list=",l(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return i=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:(n=null===n?"":n,0===r.length?[[l(i,e),t,l(n,e)].join("")]:[[r,l(n,e)].join(e.arrayFormatSeparator)])}default:return t=>(i,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?i:null===r?[...i,l(t,e)]:[...i,[l(t,e),"=",l(r,e)].join("")]}}(t),n={};for(let t of Object.keys(e))i(t)||(n[t]=e[t]);let o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map(i=>{let n=e[i];return void 0===n?"":null===n?l(i,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?l(i,t)+"[]":n.reduce(r(i),[]).join("&"):l(i,t)+"="+l(n,t)}).filter(e=>e.length>0).join("&")},e.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[i,n]=r(e,"#");return Object.assign({url:i.split("?")[0]||"",query:f(u(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:c(n,t)}:{})},e.stringifyUrl=(t,i)=>{var r;let n,a;i=Object.assign({encode:!0,strict:!0,[o]:!0},i);let s=d(t.url).split("?")[0]||"",c=e.extract(t.url),u=Object.assign(e.parse(c,{sort:!1}),t.query),h=e.stringify(u,i);h&&(h=`?${h}`);let f=(r=t.url,n="",-1!==(a=r.indexOf("#"))&&(n=r.slice(a)),n);return t.fragmentIdentifier&&(f=`#${i[o]?l(t.fragmentIdentifier,i):t.fragmentIdentifier}`),`${s}${h}${f}`},e.pick=(t,i,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[o]:!1},r);let{url:a,query:s,fragmentIdentifier:l}=e.parseUrl(t,r);return e.stringifyUrl({url:a,query:n(s,i),fragmentIdentifier:l},r)},e.exclude=(t,i,r)=>{let n=Array.isArray(i)?e=>!i.includes(e):(e,t)=>!i(e,t);return e.pick(t,n,r)}}),F=(e,t)=>({dpr:e,camera:{fov:t},linear:!0,flat:!0,gl:{preserveDrawingBuffer:!0}});function N(e){var{children:t,pointerEvents:i="none",pixelDensity:r=1,fov:n=45}=e,a=z(e,["children","pointerEvents","pixelDensity","fov"]);let[o,d]=function(){let[e,t]=(0,l.useState)(-1);return[e,e=>{let i=e.gl.domElement,r=e=>{e.preventDefault(),t(1),console.log("[Context Lost]")},n=e=>{t(0),console.log("[Context Restored]")},a=e=>{t(2),console.log("[Context Error]")};return i.addEventListener("webglcontextlost",r),i.addEventListener("webglcontextrestored",n),i.addEventListener("webglcontextcreationerror",a),()=>{i.removeEventListener("webglcontextlost",r),i.removeEventListener("webglcontextrestored",n),i.removeEventListener("webglcontextcreationerror",a)}}]}();return 1===o?(0,c.jsx)(I,{title:"The graphics context has been lost. Please wait while we try to restore it..."}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.Xz,P(T(P(T({id:"gradientCanvas",resize:{offsetSize:!0}},F(r,n)),{style:{pointerEvents:i},onCreated:d}),a),{children:t}),r+n)})}function I({title:e="",color1:t="#ff7e5f",color2:i="#feb47b"}){return(0,c.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:`linear-gradient(to right, ${t}, ${i})`,color:"white",fontSize:"20px",textAlign:"center",padding:"20px",fontFamily:"Inter",fontWeight:"500"},children:(0,c.jsx)("p",{children:e})})}var M=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},U=new d.OrthographicCamera(-1,1,1,-1,0,1),k=new d.BufferGeometry;k.setAttribute("position",new d.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),k.setAttribute("uv",new d.Float32BufferAttribute([0,2,0,0,2,0],2));var j=class{constructor(e){this._mesh=new d.Mesh(k,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},V=class extends M{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r,n,a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(r=0,n=1):(r=1,n=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,r,4294967295),o.buffers.stencil.setClear(n),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}},H=class extends M{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},B=class extends M{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof d.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=d.UniformsUtils.clone(e.uniforms),this.material=new d.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new j(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this.fsQuad.render(e)}},Y={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`},q=class{constructor(e,t){if(this.renderer=e,void 0===t){let i={minFilter:d.LinearFilter,magFilter:d.LinearFilter,format:d.RGBAFormat},r=e.getSize(new d.Vector2);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,(t=new d.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,i)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===Y&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===B&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new B(Y),this.clock=new d.Clock}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(!1!==r.enabled){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let t=this.renderer.getContext(),i=this.renderer.state.buffers.stencil;i.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),i.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==V&&(r instanceof V?i=!0:r instanceof H&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new d.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};new d.OrthographicCamera(-1,1,1,-1,0,1);var G=new d.BufferGeometry;G.setAttribute("position",new d.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),G.setAttribute("uv",new d.Float32BufferAttribute([0,2,0,0,2,0],2));var Z=class extends M{constructor(e,t,i,r,n){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=void 0!==n?n:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new d.Color}render(e,t,i){let r,n,a=e.autoClear;e.autoClear=!1,void 0!==this.overrideMaterial&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=n),e.autoClear=a}},X={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18},Q=new Map([[X.SKIP,null],[X.ADD,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}"],[X.ALPHA,"vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}"],[X.AVERAGE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}"],[X.COLOR_BURN,"float blend(const in float x,const in float y){return(y==0.0)?y:max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[X.COLOR_DODGE,"float blend(const in float x,const in float y){return(y==1.0)?y:min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[X.DARKEN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}"],[X.DIFFERENCE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}"],[X.EXCLUSION,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}"],[X.LIGHTEN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}"],[X.MULTIPLY,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}"],[X.DIVIDE,"float blend(const in float x,const in float y){return(y>0.0)?min(x/y,1.0):1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[X.NEGATION,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}"],[X.NORMAL,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}"],[X.OVERLAY,"float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[X.REFLECT,"float blend(const in float x,const in float y){return(y==1.0)?y:min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[X.SCREEN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}"],[X.SOFT_LIGHT,"float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[X.SUBTRACT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}"]]),$=class extends d.EventDispatcher{constructor(e,t=1){super(),this.blendFunction=e,this.opacity=new d.Uniform(t)}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e,this.dispatchEvent({type:"change"})}getShaderCode(){return Q.get(this.blendFunction)}},K={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:2},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:1},width:{value:20},height:{value:20},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;
		varying vec3 vPosition;

		void main() {

			vUV = uv;
			vPosition = position;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		varying vec3 vPosition;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			// float dist = radius * 0.66;
			float dist = radius * 0.0;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			// res = 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;
			// return 2

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height ) - vec2(vPosition.x, vPosition.y) * 3.0; // - position values to remove black borders.
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;
				// float aa = 0.0;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				
				// add masking before blendColour
				if (colour.r == 0.0) {
					r = 0.0;
				} else {
					r = blendColour( r, colour.r, blending );
				}

				if (colour.g == 0.0) {
					g = 0.0;
				} else {
					g = blendColour( g, colour.g, blending );
				}

				if (colour.b == 0.0) {
					b = 0.0;
				} else {
					b = blendColour( b, colour.b, blending );
				}
				
				
				

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				// add alpha channel to each r, g, b colors
				vec4 vR;
				vec4 vG;
				vec4 vB;
	
				// apply transparent to outside of mesh
				if (r == 0.0 && colour.r == 0.0) {
					vR = vec4( 0, 0, 0, 0 );
				} else {
					vR = vec4( r, 0, 0, 1 );
				}
	
				if (g == 0.0 && colour.g == 0.0) {
					vG = vec4( 0, 0, 0, 0 );
				} else {
					vG = vec4( 0, g, 0, 1 );
				}
	
				if (b == 0.0 && colour.b == 0.0) {
					vB = vec4( 0, 0, 0, 0 );
				} else {
					vB = vec4( 0, 0, b, 1 );
				}

				// gl_FragColor = vec4( r, g, b, 1.0 );
				gl_FragColor = vR + vG + vB;

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`},W=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},J=new d.OrthographicCamera(-1,1,1,-1,0,1),ee=new d.BufferGeometry;ee.setAttribute("position",new d.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),ee.setAttribute("uv",new d.Float32BufferAttribute([0,2,0,0,2,0],2));var et=class{constructor(e){this._mesh=new d.Mesh(ee,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,J)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},ei=class extends W{constructor(e,t,i){super(),void 0===K&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=d.UniformsUtils.clone(K.uniforms),this.material=new d.ShaderMaterial({uniforms:this.uniforms,fragmentShader:K.fragmentShader,vertexShader:K.vertexShader}),this.uniforms.width.value=e,this.uniforms.height.value=t,this.uniforms.disable.value=i.disable,this.fsQuad=new et(this.material),this.blendMode=new $(X.SCREEN),this.extensions=null}render(e,t,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this.fsQuad.render(e)}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}initialize(e,t,i){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return K.fragmentShader}getVertexShader(){return K.vertexShader}update(e,t,i){}},er=e=>"function"==typeof e,en=l.forwardRef((e,t)=>{var i,{envMap:r,resolution:n=256,frames:a=1/0,children:o,makeDefault:s}=e,h=z(e,["envMap","resolution","frames","children","makeDefault"]);let f=(0,u.z)(({set:e})=>e),m=(0,u.z)(({camera:e})=>e),p=(0,u.z)(({size:e})=>e),g=l.useRef(null),v=l.useRef(null),_=function(e,t,i){let{gl:r,size:n,viewport:a}=(0,u.z)(),o="number"==typeof e?e:n.width*a.dpr,s="number"==typeof t?t:n.height*a.dpr,c=("number"==typeof e?void 0:e)||{},{samples:h}=c,f=z(c,["samples"]),m=l.useMemo(()=>{let e;return(e=new d.WebGLRenderTarget(o,s,T({minFilter:d.LinearFilter,magFilter:d.LinearFilter,encoding:r.outputEncoding,type:d.HalfFloatType},f))).samples=h,e},[]);return l.useLayoutEffect(()=>{m.setSize(o,s),h&&(m.samples=h)},[h,m,o,s]),l.useEffect(()=>()=>m.dispose(),[]),m}(n);l.useLayoutEffect(()=>{h.manual||g.current.updateProjectionMatrix()},[p,h]),l.useLayoutEffect(()=>{g.current.updateProjectionMatrix()}),l.useLayoutEffect(()=>{if(s)return f(()=>({camera:g.current})),()=>f(()=>({camera:m}))},[g,s,f]);let y=0,x=null,b=er(o);return(0,u.A)(e=>{b&&(a===1/0||y<a)&&(v.current.visible=!1,e.gl.setRenderTarget(_),x=e.scene.background,r&&(e.scene.background=r),e.gl.render(e.scene,g.current),e.scene.background=x,e.gl.setRenderTarget(null),v.current.visible=!0,y++)}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("orthographicCamera",P(T({left:-(p.width/2),right:p.width/2,top:p.height/2,bottom:-(p.height/2),ref:(i=[g,t],function(e){i.forEach(function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)})})},h),{children:!b&&o})),(0,c.jsx)("group",{ref:v,children:b&&o(_.texture)})]})}),ea=l.createContext({}),eo=()=>l.useContext(ea),es=2*Math.PI,el=new d.Object3D,ec=new d.Matrix4,[ed,eu]=[new d.Quaternion,new d.Quaternion],eh=new d.Vector3,ef=new d.Vector3,em=e=>"minPolarAngle"in e,ep=({alignment:e="bottom-right",margin:t=[80,80],renderPriority:i=0,autoClear:r=!0,onUpdate:n,onTarget:a,children:o})=>{let s=(0,u.z)(({size:e})=>e),h=(0,u.z)(({camera:e})=>e),f=(0,u.z)(({controls:e})=>e),m=(0,u.z)(({gl:e})=>e),p=(0,u.z)(({scene:e})=>e),g=(0,u.z)(({invalidate:e})=>e),v=l.useRef(),_=l.useRef(),y=l.useRef(null),[x]=l.useState(()=>new d.Scene),b=l.useRef(!1),E=l.useRef(0),T=l.useRef(new d.Vector3(0,0,0)),P=l.useRef(new d.Vector3(0,0,0));l.useEffect(()=>{P.current.copy(h.up)},[h]);let z=l.useCallback(e=>{b.current=!0,(f||a)&&(T.current=(null==f?void 0:f.target)||(null==a?void 0:a())),E.current=h.position.distanceTo(eh),ed.copy(h.quaternion),ef.copy(e).multiplyScalar(E.current).add(eh),el.lookAt(ef),eu.copy(el.quaternion),g()},[f,h,a,g]);l.useEffect(()=>(p.background&&(v.current=p.background,p.background=null,x.background=v.current),()=>{v.current&&(p.background=v.current)}),[]),(0,u.A)((e,t)=>{var i;y.current&&_.current&&(b.current&&(.01>ed.angleTo(eu)?(b.current=!1,em(f)&&h.up.copy(P.current)):(ed.rotateTowards(eu,t*es),h.position.set(0,0,1).applyQuaternion(ed).multiplyScalar(E.current).add(T.current),h.up.set(0,1,0).applyQuaternion(ed).normalize(),h.quaternion.copy(ed),n?n():f&&f.update(),g())),ec.copy(h.matrix).invert(),null==(i=_.current)||i.quaternion.setFromRotationMatrix(ec),r&&(m.autoClear=!1),m.clearDepth(),m.render(x,y.current))},i);let w=function(e,t){let i=(0,u.z)(e=>e.pointer),[r]=l.useState(()=>{let r=new d.Raycaster;return t&&(0,u.j)(r,t,{}),function(t,n){r.setFromCamera(i,e instanceof d.Camera?e:e.current);let a=this.constructor.prototype.raycast.bind(this);a&&a(r,n)}});return r}(y),S=l.useMemo(()=>({tweenCamera:z,raycast:w}),[z]),[C,A]=t,O=e.endsWith("-center")?0:e.endsWith("-left")?-s.width/2+C:s.width/2-C,R=e.startsWith("center-")?0:e.startsWith("top-")?s.height/2-A:-s.height/2+A;return(0,u.g)((0,c.jsxs)(ea.Provider,{value:S,children:[(0,c.jsx)(en,{ref:y,position:[0,0,200]}),(0,c.jsx)("group",{ref:_,position:[O,R,0],children:o})]}),x)};function eg({scale:e=[.8,.05,.05],color:t,rotation:i}){return(0,c.jsx)("group",{rotation:i,children:(0,c.jsxs)("mesh",{position:[.4,0,0],children:[(0,c.jsx)("boxGeometry",{args:e}),(0,c.jsx)("meshBasicMaterial",{color:t,toneMapped:!1})]})})}function ev(e){var{onClick:t,font:i,disabled:r,arcStyle:n,label:a,labelColor:o,axisHeadScale:s=1}=e,h=z(e,["onClick","font","disabled","arcStyle","label","labelColor","axisHeadScale"]);let f=(0,u.z)(e=>e.gl),m=l.useMemo(()=>{let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d");return t.beginPath(),t.arc(32,32,16,0,2*Math.PI),t.closePath(),t.fillStyle=n,t.fill(),a&&(t.font=i,t.textAlign="center",t.fillStyle=o,t.fillText(a,32,41)),new d.CanvasTexture(e)},[n,a,o,i]),[p,g]=l.useState(!1),v=(a?1:.75)*(p?1.2:1)*s;return(0,c.jsx)("sprite",P(T({scale:v,onPointerOver:r?void 0:e=>{e.stopPropagation(),g(!0)},onPointerOut:r?void 0:t||(e=>{e.stopPropagation(),g(!1)})},h),{children:(0,c.jsx)("spriteMaterial",{map:m,"map-encoding":f.outputEncoding,"map-anisotropy":f.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:a?1:.75,toneMapped:!1})}))}var e_=e=>{var{hideNegativeAxes:t,hideAxisHeads:i,disabled:r,font:n="18px Inter var, Arial, sans-serif",axisColors:a=["#ff2060","#20df80","#2080ff"],axisHeadScale:o=1,axisScale:s,labels:l=["X","Y","Z"],labelColor:d="#000",onClick:u}=e,h=z(e,["hideNegativeAxes","hideAxisHeads","disabled","font","axisColors","axisHeadScale","axisScale","labels","labelColor","onClick"]);let[f,m,p]=a,{tweenCamera:g,raycast:v}=eo(),_={font:n,disabled:r,labelColor:d,raycast:v,onClick:u,axisHeadScale:o,onPointerDown:r?void 0:e=>{g(e.object.position),e.stopPropagation()}};return(0,c.jsxs)("group",P(T({scale:40},h),{children:[(0,c.jsx)(eg,{color:f,rotation:[0,0,0],scale:s}),(0,c.jsx)(eg,{color:m,rotation:[0,0,Math.PI/2],scale:s}),(0,c.jsx)(eg,{color:p,rotation:[0,-Math.PI/2,0],scale:s}),!i&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ev,T({arcStyle:f,position:[1,0,0],label:l[0]},_)),(0,c.jsx)(ev,T({arcStyle:m,position:[0,1,0],label:l[1]},_)),(0,c.jsx)(ev,T({arcStyle:p,position:[0,0,1],label:l[2]},_)),!t&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ev,T({arcStyle:f,position:[-1,0,0]},_)),(0,c.jsx)(ev,T({arcStyle:m,position:[0,-1,0]},_)),(0,c.jsx)(ev,T({arcStyle:p,position:[0,0,-1]},_))]})]}),(0,c.jsx)("ambientLight",{intensity:.5}),(0,c.jsx)("pointLight",{position:[10,10,10],intensity:.5})]}))};function ey({isFigmaPlugin:e}){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(ep,{alignment:"bottom-right",margin:e?[25,25]:[65,110],renderPriority:2,children:(0,c.jsx)(e_,{axisColors:["#FF430A","#FF430A","#FF430A"],labelColor:"white",hideNegativeAxes:!0,axisHeadScale:.8})})})}var ex={LEFT:1,RIGHT:2,MIDDLE:4},eb=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,OFFSET:4,DOLLY:8,ZOOM:16,TOUCH_ROTATE:32,TOUCH_TRUCK:64,TOUCH_OFFSET:128,TOUCH_DOLLY:256,TOUCH_ZOOM:512,TOUCH_DOLLY_TRUCK:1024,TOUCH_DOLLY_OFFSET:2048,TOUCH_DOLLY_ROTATE:4096,TOUCH_ZOOM_TRUCK:8192,TOUCH_ZOOM_OFFSET:16384,TOUCH_ZOOM_ROTATE:32768});function eE(e){return e.isPerspectiveCamera}function eT(e){return e.isOrthographicCamera}var eP=2*Math.PI,ez=Math.PI/2;function ew(e,t=1e-5){return Math.abs(e)<t}function eS(e,t,i=1e-5){return ew(e-t,i)}function eC(e,t){return Math.round(e/t)*t}function eA(e){return isFinite(e)?e:e<0?-Number.MAX_VALUE:Number.MAX_VALUE}function eO(e){return Math.abs(e)<Number.MAX_VALUE?e:1/0*e}function eR(e,t){t.set(0,0),e.forEach(e=>{t.x+=e.clientX,t.y+=e.clientY}),t.x/=e.length,t.y/=e.length}function eD(e,t){return!!eT(e)&&(console.warn(`${t} is not supported in OrthographicCamera`),!0)}function eL(e){return e.invert?e.invert():e.inverse(),e}var eF,eN,eI,eM,eU,ek,ej,eV,eH,eB,eY,eq,eG,eZ,eX,eQ,e$,eK,eW,eJ,e0,e1,e3=class{constructor(){this._listeners={}}addEventListener(e,t){let i=this._listeners;void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(t)&&i[e].push(t)}removeEventListener(e,t){let i=this._listeners[e];if(void 0!==i){let e=i.indexOf(t);-1!==e&&i.splice(e,1)}}removeAllEventListeners(e){if(!e){this._listeners={};return}Array.isArray(this._listeners[e])&&(this._listeners[e].length=0)}dispatchEvent(e){let t=this._listeners[e.type];if(void 0!==t){e.target=this;let i=t.slice(0);for(let t=0,r=i.length;t<r;t++)i[t].call(this,e)}}},e2="u">typeof window,e4=e2&&/Mac/.test(navigator.platform),e5=!(e2&&"PointerEvent"in window),e9=1/8,e8=class extends e3{constructor(e,t){if(super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=0,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.dampingFactor=.05,this.draggingDampingFactor=.25,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.verticalDragToForward=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=eb.NONE,this._viewport=null,this._dollyControlAmount=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._activePointers=[],this._truckInternal=(e,t,i)=>{if(eE(this._camera)){let r=ek.copy(this._camera.position).sub(this._target),n=this._camera.getEffectiveFOV()*eF.MathUtils.DEG2RAD,a=r.length()*Math.tan(.5*n),o=this.truckSpeed*e*a/this._elementRect.height,s=this.truckSpeed*t*a/this._elementRect.height;this.verticalDragToForward?(i?this.setFocalOffset(this._focalOffsetEnd.x+o,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(o,0,!0),this.forward(-s,!0)):i?this.setFocalOffset(this._focalOffsetEnd.x+o,this._focalOffsetEnd.y+s,this._focalOffsetEnd.z,!0):this.truck(o,s,!0)}else if(eT(this._camera)){let r=this._camera,n=e*(r.right-r.left)/r.zoom/this._elementRect.width,a=t*(r.top-r.bottom)/r.zoom/this._elementRect.height;i?this.setFocalOffset(this._focalOffsetEnd.x+n,this._focalOffsetEnd.y+a,this._focalOffsetEnd.z,!0):this.truck(n,a,!0)}},this._rotateInternal=(e,t)=>{let i=eP*this.azimuthRotateSpeed*e/this._elementRect.height,r=eP*this.polarRotateSpeed*t/this._elementRect.height;this.rotate(i,r,!0)},this._dollyInternal=(e,t,i)=>{let r=Math.pow(.95,-e*this.dollySpeed),n=this._sphericalEnd.radius*r,a=this._sphericalEnd.radius,o=a*(e>=0?-1:1);this.dollyTo(n),this.infinityDolly&&(n<this.minDistance||this.maxDistance===this.minDistance)&&(this._camera.getWorldDirection(ek),this._targetEnd.add(ek.normalize().multiplyScalar(o)),this._target.add(ek.normalize().multiplyScalar(o))),this.dollyToCursor&&(this._dollyControlAmount+=this._sphericalEnd.radius-a,this.infinityDolly&&(n<this.minDistance||this.maxDistance===this.minDistance)&&(this._dollyControlAmount-=o),this._dollyControlCoord.set(t,i))},this._zoomInternal=(e,t,i)=>{let r=Math.pow(.95,e*this.dollySpeed),n=this._zoomEnd;this.zoomTo(this._zoom*r),this.dollyToCursor&&(this._dollyControlAmount+=this._zoomEnd-n,this._dollyControlCoord.set(t,i))},typeof eF>"u"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new eF.Quaternion().setFromUnitVectors(this._camera.up,eI),this._yAxisUpSpaceInverse=eL(this._yAxisUpSpace.clone()),this._state=eb.NONE,this._domElement=t,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._target=new eF.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new eF.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new eF.Spherical().setFromVector3(ek.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._nearPlaneCorners=[new eF.Vector3,new eF.Vector3,new eF.Vector3,new eF.Vector3],this._updateNearPlaneCorners(),this._boundary=new eF.Box3(new eF.Vector3(-1/0,-1/0,-1/0),new eF.Vector3(1/0,1/0,1/0)),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlAmount=0,this._dollyControlCoord=new eF.Vector2,this.mouseButtons={left:eb.ROTATE,middle:eb.DOLLY,right:eb.TRUCK,wheel:eE(this._camera)?eb.DOLLY:eT(this._camera)?eb.ZOOM:eb.NONE},this.touches={one:eb.TOUCH_ROTATE,two:eE(this._camera)?eb.TOUCH_DOLLY_TRUCK:eT(this._camera)?eb.TOUCH_ZOOM_TRUCK:eb.NONE,three:eb.TOUCH_TRUCK},this._domElement){let e=new eF.Vector2,t=new eF.Vector2,i=new eF.Vector2,r=e=>{if(!this._enabled)return;let t={pointerId:e.pointerId,clientX:e.clientX,clientY:e.clientY,deltaX:0,deltaY:0};this._activePointers.push(t),this._domElement.ownerDocument.removeEventListener("pointermove",o,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this._domElement.ownerDocument.addEventListener("pointermove",o,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",c),p(e)},n=e=>{if(!this._enabled)return;let t={pointerId:0,clientX:e.clientX,clientY:e.clientY,deltaX:0,deltaY:0};this._activePointers.push(t),this._domElement.ownerDocument.removeEventListener("mousemove",s),this._domElement.ownerDocument.removeEventListener("mouseup",d),this._domElement.ownerDocument.addEventListener("mousemove",s),this._domElement.ownerDocument.addEventListener("mouseup",d),p(e)},a=e=>{this._enabled&&(e.preventDefault(),Array.prototype.forEach.call(e.changedTouches,e=>{let t={pointerId:e.identifier,clientX:e.clientX,clientY:e.clientY,deltaX:0,deltaY:0};this._activePointers.push(t)}),this._domElement.ownerDocument.removeEventListener("touchmove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("touchend",u),this._domElement.ownerDocument.addEventListener("touchmove",l,{passive:!1}),this._domElement.ownerDocument.addEventListener("touchend",u),p(e))},o=e=>{e.cancelable&&e.preventDefault();let t=e.pointerId,i=this._findPointerById(t);if(i){if(i.clientX=e.clientX,i.clientY=e.clientY,i.deltaX=e.movementX,i.deltaY=e.movementY,"touch"===e.pointerType)switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three}else this._state=0,(e.buttons&ex.LEFT)===ex.LEFT&&(this._state=this._state|this.mouseButtons.left),(e.buttons&ex.MIDDLE)===ex.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(e.buttons&ex.RIGHT)===ex.RIGHT&&(this._state=this._state|this.mouseButtons.right);g()}},s=e=>{let t=this._findPointerById(0);t&&(t.clientX=e.clientX,t.clientY=e.clientY,t.deltaX=e.movementX,t.deltaY=e.movementY,this._state=0,(e.buttons&ex.LEFT)===ex.LEFT&&(this._state=this._state|this.mouseButtons.left),(e.buttons&ex.MIDDLE)===ex.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(e.buttons&ex.RIGHT)===ex.RIGHT&&(this._state=this._state|this.mouseButtons.right),g())},l=e=>{e.cancelable&&e.preventDefault(),Array.prototype.forEach.call(e.changedTouches,e=>{let t=e.identifier,i=this._findPointerById(t);i&&(i.clientX=e.clientX,i.clientY=e.clientY)}),g()},c=e=>{let t=e.pointerId,i=this._findPointerById(t);if(i&&this._activePointers.splice(this._activePointers.indexOf(i),1),"touch"===e.pointerType)switch(this._activePointers.length){case 0:this._state=eb.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three}else this._state=eb.NONE;v()},d=()=>{let e=this._findPointerById(0);e&&this._activePointers.splice(this._activePointers.indexOf(e),1),this._state=eb.NONE,v()},u=e=>{switch(Array.prototype.forEach.call(e.changedTouches,e=>{let t=e.identifier,i=this._findPointerById(t);i&&this._activePointers.splice(this._activePointers.indexOf(i),1)}),this._activePointers.length){case 0:this._state=eb.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three}v()},h=-1,f=e=>{if(!this._enabled||this.mouseButtons.wheel===eb.NONE)return;if(e.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===eb.ROTATE||this.mouseButtons.wheel===eb.TRUCK){let e=performance.now();h-e<1e3&&this._getClientRect(this._elementRect),h=e}let t=e4?-1:-3,i=1===e.deltaMode?e.deltaY/t:e.deltaY/(10*t),r=this.dollyToCursor?(e.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,n=this.dollyToCursor?-((e.clientY-this._elementRect.y)/this._elementRect.height*2)+1:0;switch(this.mouseButtons.wheel){case eb.ROTATE:this._rotateInternal(e.deltaX,e.deltaY);break;case eb.TRUCK:this._truckInternal(e.deltaX,e.deltaY,!1);break;case eb.OFFSET:this._truckInternal(e.deltaX,e.deltaY,!0);break;case eb.DOLLY:this._dollyInternal(-i,r,n);break;case eb.ZOOM:this._zoomInternal(-i,r,n)}this.dispatchEvent({type:"control"})},m=e=>{this._enabled&&e.preventDefault()},p=r=>{if(this._enabled){if(eR(this._activePointers,eU),this._getClientRect(this._elementRect),e.copy(eU),t.copy(eU),this._activePointers.length>=2){let e=eU.x-this._activePointers[1].clientX,r=eU.y-this._activePointers[1].clientY;i.set(0,Math.sqrt(e*e+r*r));let n=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,a=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;t.set(n,a)}if("touches"in r||"pointerType"in r&&"touch"===r.pointerType)switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three}else this._state=0,(r.buttons&ex.LEFT)===ex.LEFT&&(this._state=this._state|this.mouseButtons.left),(r.buttons&ex.MIDDLE)===ex.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(r.buttons&ex.RIGHT)===ex.RIGHT&&(this._state=this._state|this.mouseButtons.right);this.dispatchEvent({type:"controlstart"})}},g=()=>{if(!this._enabled)return;eR(this._activePointers,eU);let r=this._domElement&&document.pointerLockElement===this._domElement,n=r?-this._activePointers[0].deltaX:t.x-eU.x,a=r?-this._activePointers[0].deltaY:t.y-eU.y;if(t.copy(eU),((this._state&eb.ROTATE)===eb.ROTATE||(this._state&eb.TOUCH_ROTATE)===eb.TOUCH_ROTATE||(this._state&eb.TOUCH_DOLLY_ROTATE)===eb.TOUCH_DOLLY_ROTATE||(this._state&eb.TOUCH_ZOOM_ROTATE)===eb.TOUCH_ZOOM_ROTATE)&&this._rotateInternal(n,a),(this._state&eb.DOLLY)===eb.DOLLY||(this._state&eb.ZOOM)===eb.ZOOM){let t=this.dollyToCursor?(e.x-this._elementRect.x)/this._elementRect.width*2-1:0,i=this.dollyToCursor?-((e.y-this._elementRect.y)/this._elementRect.height*2)+1:0;this._state===eb.DOLLY?this._dollyInternal(a*e9,t,i):this._zoomInternal(a*e9,t,i)}if((this._state&eb.TOUCH_DOLLY)===eb.TOUCH_DOLLY||(this._state&eb.TOUCH_ZOOM)===eb.TOUCH_ZOOM||(this._state&eb.TOUCH_DOLLY_TRUCK)===eb.TOUCH_DOLLY_TRUCK||(this._state&eb.TOUCH_ZOOM_TRUCK)===eb.TOUCH_ZOOM_TRUCK||(this._state&eb.TOUCH_DOLLY_OFFSET)===eb.TOUCH_DOLLY_OFFSET||(this._state&eb.TOUCH_ZOOM_OFFSET)===eb.TOUCH_ZOOM_OFFSET||(this._state&eb.TOUCH_DOLLY_ROTATE)===eb.TOUCH_DOLLY_ROTATE||(this._state&eb.TOUCH_ZOOM_ROTATE)===eb.TOUCH_ZOOM_ROTATE){let e=eU.x-this._activePointers[1].clientX,r=eU.y-this._activePointers[1].clientY,n=Math.sqrt(e*e+r*r),a=i.y-n;i.set(0,n);let o=this.dollyToCursor?(t.x-this._elementRect.x)/this._elementRect.width*2-1:0,s=this.dollyToCursor?-((t.y-this._elementRect.y)/this._elementRect.height*2)+1:0;this._state===eb.TOUCH_DOLLY||this._state===eb.TOUCH_DOLLY_ROTATE||this._state===eb.TOUCH_DOLLY_TRUCK||this._state===eb.TOUCH_DOLLY_OFFSET?this._dollyInternal(a*e9,o,s):this._zoomInternal(a*e9,o,s)}((this._state&eb.TRUCK)===eb.TRUCK||(this._state&eb.TOUCH_TRUCK)===eb.TOUCH_TRUCK||(this._state&eb.TOUCH_DOLLY_TRUCK)===eb.TOUCH_DOLLY_TRUCK||(this._state&eb.TOUCH_ZOOM_TRUCK)===eb.TOUCH_ZOOM_TRUCK)&&this._truckInternal(n,a,!1),((this._state&eb.OFFSET)===eb.OFFSET||(this._state&eb.TOUCH_OFFSET)===eb.TOUCH_OFFSET||(this._state&eb.TOUCH_DOLLY_OFFSET)===eb.TOUCH_DOLLY_OFFSET||(this._state&eb.TOUCH_ZOOM_OFFSET)===eb.TOUCH_ZOOM_OFFSET)&&this._truckInternal(n,a,!0),this.dispatchEvent({type:"control"})},v=()=>{eR(this._activePointers,eU),t.copy(eU),0===this._activePointers.length&&(this._domElement.ownerDocument.removeEventListener("pointermove",o,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this._domElement.ownerDocument.removeEventListener("touchmove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("touchend",u),this.dispatchEvent({type:"controlend"}))};this._domElement.addEventListener("pointerdown",r),e5&&this._domElement.addEventListener("mousedown",n),e5&&this._domElement.addEventListener("touchstart",a),this._domElement.addEventListener("pointercancel",c),this._domElement.addEventListener("wheel",f,{passive:!1}),this._domElement.addEventListener("contextmenu",m),this._removeAllEventListeners=()=>{this._domElement.removeEventListener("pointerdown",r),this._domElement.removeEventListener("mousedown",n),this._domElement.removeEventListener("touchstart",a),this._domElement.removeEventListener("pointercancel",c),this._domElement.removeEventListener("wheel",f,{passive:!1}),this._domElement.removeEventListener("contextmenu",m),this._domElement.ownerDocument.removeEventListener("pointermove",o,{passive:!1}),this._domElement.ownerDocument.removeEventListener("mousemove",s),this._domElement.ownerDocument.removeEventListener("touchmove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this._domElement.ownerDocument.removeEventListener("mouseup",d),this._domElement.ownerDocument.removeEventListener("touchend",u)},this.cancel=()=>{this._state!==eb.NONE&&(this._state=eb.NONE,this._activePointers.length=0,v())}}this.update(0)}static install(e){eN=Object.freeze(new(eF=e.THREE).Vector3(0,0,0)),eI=Object.freeze(new eF.Vector3(0,1,0)),eM=Object.freeze(new eF.Vector3(0,0,1)),eU=new eF.Vector2,ek=new eF.Vector3,ej=new eF.Vector3,eV=new eF.Vector3,eH=new eF.Vector3,eB=new eF.Vector3,eY=new eF.Vector3,eq=new eF.Vector3,eG=new eF.Vector3,eZ=new eF.Spherical,eX=new eF.Spherical,eQ=new eF.Box3,e$=new eF.Box3,eK=new eF.Sphere,eW=new eF.Quaternion,eJ=new eF.Quaternion,e0=new eF.Matrix4,e1=new eF.Raycaster}static get ACTION(){return eb}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="")}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}addEventListener(e,t){super.addEventListener(e,t)}removeEventListener(e,t){super.removeEventListener(e,t)}rotate(e,t,i=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+t,i)}rotateAzimuthTo(e,t=!1){return this.rotateTo(e,this._sphericalEnd.phi,t)}rotatePolarTo(e,t=!1){return this.rotateTo(this._sphericalEnd.theta,e,t)}rotateTo(e,t,i=!1){let r=eF.MathUtils.clamp(e,this.minAzimuthAngle,this.maxAzimuthAngle),n=eF.MathUtils.clamp(t,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=r,this._sphericalEnd.phi=n,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,i||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);let a=!i||eS(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&eS(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(a)}dolly(e,t=!1){return this.dollyTo(this._sphericalEnd.radius-e,t)}dollyTo(e,t=!1){let i=this._sphericalEnd.radius,r=eF.MathUtils.clamp(e,this.minDistance,this.maxDistance);if(this.colliderMeshes.length>=1){let e=this._collisionTest(),t=eS(e,this._spherical.radius);if(!(i>r)&&t)return Promise.resolve();this._sphericalEnd.radius=Math.min(r,e)}else this._sphericalEnd.radius=r;this._needsUpdate=!0,t||(this._spherical.radius=this._sphericalEnd.radius);let n=!t||eS(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(n)}zoom(e,t=!1){return this.zoomTo(this._zoomEnd+e,t)}zoomTo(e,t=!1){this._zoomEnd=eF.MathUtils.clamp(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,t||(this._zoom=this._zoomEnd);let i=!t||eS(this._zoom,this._zoomEnd,this.restThreshold);return this._createOnRestPromise(i)}pan(e,t,i=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,t,i)}truck(e,t,i=!1){this._camera.updateMatrix(),eH.setFromMatrixColumn(this._camera.matrix,0),eB.setFromMatrixColumn(this._camera.matrix,1),eH.multiplyScalar(e),eB.multiplyScalar(-t);let r=ek.copy(eH).add(eB),n=ej.copy(this._targetEnd).add(r);return this.moveTo(n.x,n.y,n.z,i)}forward(e,t=!1){ek.setFromMatrixColumn(this._camera.matrix,0),ek.crossVectors(this._camera.up,ek),ek.multiplyScalar(e);let i=ej.copy(this._targetEnd).add(ek);return this.moveTo(i.x,i.y,i.z,t)}moveTo(e,t,i,r=!1){let n=ek.set(e,t,i).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,n,this.boundaryFriction),this._needsUpdate=!0,r||this._target.copy(this._targetEnd);let a=!r||eS(this._target.x,this._targetEnd.x,this.restThreshold)&&eS(this._target.y,this._targetEnd.y,this.restThreshold)&&eS(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(a)}fitToBox(e,t,{cover:i=!1,paddingLeft:r=0,paddingRight:n=0,paddingBottom:a=0,paddingTop:o=0}={}){let s=[],l=e.isBox3?eQ.copy(e):eQ.setFromObject(e);l.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());let c=eC(this._sphericalEnd.theta,ez),d=eC(this._sphericalEnd.phi,ez);s.push(this.rotateTo(c,d,t));let u=ek.setFromSpherical(this._sphericalEnd).normalize(),h=eW.setFromUnitVectors(u,eM),f=eS(Math.abs(u.y),1);f&&h.multiply(eJ.setFromAxisAngle(eI,c)),h.multiply(this._yAxisUpSpaceInverse);let m=e$.makeEmpty();ej.copy(l.min).applyQuaternion(h),m.expandByPoint(ej),ej.copy(l.min).setX(l.max.x).applyQuaternion(h),m.expandByPoint(ej),ej.copy(l.min).setY(l.max.y).applyQuaternion(h),m.expandByPoint(ej),ej.copy(l.max).setZ(l.min.z).applyQuaternion(h),m.expandByPoint(ej),ej.copy(l.min).setZ(l.max.z).applyQuaternion(h),m.expandByPoint(ej),ej.copy(l.max).setY(l.min.y).applyQuaternion(h),m.expandByPoint(ej),ej.copy(l.max).setX(l.min.x).applyQuaternion(h),m.expandByPoint(ej),ej.copy(l.max).applyQuaternion(h),m.expandByPoint(ej),m.min.x-=r,m.min.y-=a,m.max.x+=n,m.max.y+=o,h.setFromUnitVectors(eM,u),f&&h.premultiply(eJ.invert()),h.premultiply(this._yAxisUpSpace);let p=m.getSize(ek),g=m.getCenter(ej).applyQuaternion(h);if(eE(this._camera)){let e=this.getDistanceToFitBox(p.x,p.y,p.z,i);s.push(this.moveTo(g.x,g.y,g.z,t)),s.push(this.dollyTo(e,t)),s.push(this.setFocalOffset(0,0,0,t))}else if(eT(this._camera)){let e=this._camera,r=e.right-e.left,n=e.top-e.bottom,a=i?Math.max(r/p.x,n/p.y):Math.min(r/p.x,n/p.y);s.push(this.moveTo(g.x,g.y,g.z,t)),s.push(this.zoomTo(a,t)),s.push(this.setFocalOffset(0,0,0,t))}return Promise.all(s)}fitToSphere(e,t){var i;let r,n;let a=[],o=e instanceof eF.Sphere?eK.copy(e):(r=(i=eK).center,eQ.makeEmpty(),e.traverseVisible(e=>{e.isMesh&&eQ.expandByObject(e)}),eQ.getCenter(r),n=0,e.traverseVisible(e=>{if(!e.isMesh)return;let t=e.geometry.clone();if(t.applyMatrix4(e.matrixWorld),t.isBufferGeometry){let e=t.attributes.position;for(let t=0,i=e.count;t<i;t++)ek.fromBufferAttribute(e,t),n=Math.max(n,r.distanceToSquared(ek))}else{let e=t.attributes.position,i=new eF.Vector3;for(let t=0,a=e.count;t<a;t++)i.fromBufferAttribute(e,t),n=Math.max(n,r.distanceToSquared(i))}}),i.radius=Math.sqrt(n),i);if(a.push(this.moveTo(o.center.x,o.center.y,o.center.z,t)),eE(this._camera)){let e=this.getDistanceToFitSphere(o.radius);a.push(this.dollyTo(e,t))}else if(eT(this._camera)){let e=this._camera.right-this._camera.left,i=this._camera.top-this._camera.bottom,r=2*o.radius;a.push(this.zoomTo(Math.min(e/r,i/r),t))}return a.push(this.setFocalOffset(0,0,0,t)),Promise.all(a)}setLookAt(e,t,i,r,n,a,o=!1){let s=ej.set(r,n,a),l=ek.set(e,t,i);this._targetEnd.copy(s),this._sphericalEnd.setFromVector3(l.sub(s).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,o||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let c=!o||eS(this._target.x,this._targetEnd.x,this.restThreshold)&&eS(this._target.y,this._targetEnd.y,this.restThreshold)&&eS(this._target.z,this._targetEnd.z,this.restThreshold)&&eS(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&eS(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&eS(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(c)}lerpLookAt(e,t,i,r,n,a,o,s,l,c,d,u,h,f=!1){let m=ek.set(r,n,a),p=ej.set(e,t,i);eZ.setFromVector3(p.sub(m).applyQuaternion(this._yAxisUpSpace));let g=eV.set(c,d,u),v=ej.set(o,s,l);eX.setFromVector3(v.sub(g).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(m.lerp(g,h));let _=eX.theta-eZ.theta,y=eX.phi-eZ.phi,x=eX.radius-eZ.radius;this._sphericalEnd.set(eZ.radius+x*h,eZ.phi+y*h,eZ.theta+_*h),this.normalizeRotations(),this._needsUpdate=!0,f||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let b=!f||eS(this._target.x,this._targetEnd.x,this.restThreshold)&&eS(this._target.y,this._targetEnd.y,this.restThreshold)&&eS(this._target.z,this._targetEnd.z,this.restThreshold)&&eS(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&eS(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&eS(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(b)}setPosition(e,t,i,r=!1){return this.setLookAt(e,t,i,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,r)}setTarget(e,t,i,r=!1){let n=this.getPosition(ek);return this.setLookAt(n.x,n.y,n.z,e,t,i,r)}setFocalOffset(e,t,i,r=!1){this._focalOffsetEnd.set(e,t,i),this._needsUpdate=!0,r||this._focalOffset.copy(this._focalOffsetEnd);let n=!r||eS(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&eS(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&eS(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(n)}setOrbitPoint(e,t,i){this._camera.updateMatrixWorld(),eH.setFromMatrixColumn(this._camera.matrixWorldInverse,0),eB.setFromMatrixColumn(this._camera.matrixWorldInverse,1),eY.setFromMatrixColumn(this._camera.matrixWorldInverse,2);let r=ek.set(e,t,i),n=r.distanceTo(this._camera.position),a=r.sub(this._camera.position);eH.multiplyScalar(a.x),eB.multiplyScalar(a.y),eY.multiplyScalar(a.z),ek.copy(eH).add(eB).add(eY),ek.z=ek.z+n,this.dollyTo(n,!1),this.setFocalOffset(-ek.x,ek.y,-ek.z,!1),this.moveTo(e,t,i,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,t,i,r){if(null===e){this._viewport=null;return}this._viewport=this._viewport||new eF.Vector4,"number"==typeof e?this._viewport.set(e,t,i,r):this._viewport.copy(e)}getDistanceToFitBox(e,t,i,r=!1){if(eD(this._camera,"getDistanceToFitBox"))return this._spherical.radius;let n=e/t,a=this._camera.getEffectiveFOV()*eF.MathUtils.DEG2RAD,o=this._camera.aspect;return((r?n>o:n<o)?t:e/o)*.5/Math.tan(.5*a)+.5*i}getDistanceToFitSphere(e){if(eD(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;let t=this._camera.getEffectiveFOV()*eF.MathUtils.DEG2RAD,i=2*Math.atan(Math.tan(.5*t)*this._camera.aspect);return e/Math.sin(.5*(1<this._camera.aspect?t:i))}getTarget(e){return(e&&e.isVector3?e:new eF.Vector3).copy(this._targetEnd)}getPosition(e){return(e&&e.isVector3?e:new eF.Vector3).setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).add(this._targetEnd)}getFocalOffset(e){return(e&&e.isVector3?e:new eF.Vector3).copy(this._focalOffsetEnd)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%eP,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=eP),this._spherical.theta+=eP*Math.round((this._sphericalEnd.theta-this._spherical.theta)/eP)}reset(e=!1){return Promise.all([this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)])}saveState(){this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,eI),eL(this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace))}update(e){let t=Math.min((this._state===eb.NONE?this.dampingFactor:this.draggingDampingFactor)*e*60,1),i=this._sphericalEnd.theta-this._spherical.theta,r=this._sphericalEnd.phi-this._spherical.phi,n=this._sphericalEnd.radius-this._spherical.radius,a=eq.subVectors(this._targetEnd,this._target),o=eG.subVectors(this._focalOffsetEnd,this._focalOffset);if(ew(i)&&ew(r)&&ew(n)&&ew(a.x)&&ew(a.y)&&ew(a.z)&&ew(o.x)&&ew(o.y)&&ew(o.z)?(this._spherical.copy(this._sphericalEnd),this._target.copy(this._targetEnd),this._focalOffset.copy(this._focalOffsetEnd)):(this._spherical.set(this._spherical.radius+n*t,this._spherical.phi+r*t,this._spherical.theta+i*t),this._target.add(a.multiplyScalar(t)),this._focalOffset.add(o.multiplyScalar(t)),this._needsUpdate=!0),0!==this._dollyControlAmount){if(eE(this._camera)){let e=this._camera,t=ek.setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).normalize().negate(),i=ej.copy(t).cross(e.up).normalize();0===i.lengthSq()&&(i.x=1);let r=eV.crossVectors(i,t),n=this._sphericalEnd.radius*Math.tan(e.getEffectiveFOV()*eF.MathUtils.DEG2RAD*.5),a=(this._sphericalEnd.radius-this._dollyControlAmount-this._sphericalEnd.radius)/this._sphericalEnd.radius,o=ek.copy(this._targetEnd).add(i.multiplyScalar(this._dollyControlCoord.x*n*e.aspect)).add(r.multiplyScalar(this._dollyControlCoord.y*n));this._targetEnd.lerp(o,a)}else if(eT(this._camera)){let e=this._camera,t=e.getWorldDirection(ek.clone()),i=this._targetEnd.x*t.x+this._targetEnd.y*t.y+this._targetEnd.z*t.z,r=ek.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(e.near+e.far)/(e.near-e.far)).unproject(e),n=ej.set(0,0,-1).applyQuaternion(e.quaternion),a=eV.copy(r).add(n.multiplyScalar(-r.dot(e.up))),o=-(this._zoom-this._dollyControlAmount-this._zoomEnd)/this._zoom;this._targetEnd.lerp(a,o);let s=this._targetEnd.x*t.x+this._targetEnd.y*t.y+this._targetEnd.z*t.z,l=t.multiplyScalar(s-i);this._targetEnd.sub(l)}this._target.copy(this._targetEnd),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._dollyControlAmount=0}let s=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,s),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),ew(this._focalOffset.x)&&ew(this._focalOffset.y)&&ew(this._focalOffset.z)||(this._camera.updateMatrix(),eH.setFromMatrixColumn(this._camera.matrix,0),eB.setFromMatrixColumn(this._camera.matrix,1),eY.setFromMatrixColumn(this._camera.matrix,2),eH.multiplyScalar(this._focalOffset.x),eB.multiplyScalar(-this._focalOffset.y),eY.multiplyScalar(this._focalOffset.z),ek.copy(eH).add(eB).add(eY),this._camera.position.add(ek)),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),ek.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);let l=this._zoomEnd-this._zoom;this._zoom+=l*t,this._camera.zoom!==this._zoom&&(ew(l)&&(this._zoom=this._zoomEnd),this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0);let c=this._needsUpdate;return c&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):c?(this.dispatchEvent({type:"update"}),ew(i,this.restThreshold)&&ew(r,this.restThreshold)&&ew(n,this.restThreshold)&&ew(a.x,this.restThreshold)&&ew(a.y,this.restThreshold)&&ew(a.z,this.restThreshold)&&ew(o.x,this.restThreshold)&&ew(o.y,this.restThreshold)&&ew(o.z,this.restThreshold)&&ew(l,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!c&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._updatedLastTime=c,this._needsUpdate=!1,c}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:eA(this.maxDistance),minZoom:this.minZoom,maxZoom:eA(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:eA(this.maxPolarAngle),minAzimuthAngle:eA(this.minAzimuthAngle),maxAzimuthAngle:eA(this.maxAzimuthAngle),dampingFactor:this.dampingFactor,draggingDampingFactor:this.draggingDampingFactor,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,verticalDragToForward:this.verticalDragToForward,target:this._targetEnd.toArray(),position:ek.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,t=!1){let i=JSON.parse(e),r=ek.fromArray(i.position);this.enabled=i.enabled,this.minDistance=i.minDistance,this.maxDistance=eO(i.maxDistance),this.minZoom=i.minZoom,this.maxZoom=eO(i.maxZoom),this.minPolarAngle=i.minPolarAngle,this.maxPolarAngle=eO(i.maxPolarAngle),this.minAzimuthAngle=eO(i.minAzimuthAngle),this.maxAzimuthAngle=eO(i.maxAzimuthAngle),this.dampingFactor=i.dampingFactor,this.draggingDampingFactor=i.draggingDampingFactor,this.dollySpeed=i.dollySpeed,this.truckSpeed=i.truckSpeed,this.dollyToCursor=i.dollyToCursor,this.verticalDragToForward=i.verticalDragToForward,this._target0.fromArray(i.target0),this._position0.fromArray(i.position0),this._zoom0=i.zoom0,this._focalOffset0.fromArray(i.focalOffset0),this.moveTo(i.target[0],i.target[1],i.target[2],t),eZ.setFromVector3(r.sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(eZ.theta,eZ.phi,t),this.zoomTo(i.zoom,t),this.setFocalOffset(i.focalOffset[0],i.focalOffset[1],i.focalOffset[2],t),this._needsUpdate=!0}dispose(){this._removeAllEventListeners()}_findPointerById(e){let t=null;return this._activePointers.some(i=>i.pointerId===e&&(t=i,!0)),t}_encloseToBoundary(e,t,i){let r=t.lengthSq();if(0===r)return e;let n=ej.copy(t).add(e),a=this._boundary.clampPoint(n,eV).sub(n),o=a.lengthSq();if(0===o)return e.add(t);if(o===r)return e;if(0===i)return e.add(t).add(a);{let r=1+i*o/t.dot(a);return e.add(ej.copy(t).multiplyScalar(r)).add(a.multiplyScalar(1-i))}}_updateNearPlaneCorners(){if(eE(this._camera)){let e=this._camera,t=e.near,i=Math.tan(e.getEffectiveFOV()*eF.MathUtils.DEG2RAD*.5)*t,r=i*e.aspect;this._nearPlaneCorners[0].set(-r,-i,0),this._nearPlaneCorners[1].set(r,-i,0),this._nearPlaneCorners[2].set(r,i,0),this._nearPlaneCorners[3].set(-r,i,0)}else if(eT(this._camera)){let e=this._camera,t=1/e.zoom,i=e.left*t,r=e.right*t,n=e.top*t,a=e.bottom*t;this._nearPlaneCorners[0].set(i,n,0),this._nearPlaneCorners[1].set(r,n,0),this._nearPlaneCorners[2].set(r,a,0),this._nearPlaneCorners[3].set(i,a,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||eD(this._camera,"_collisionTest"))return e;let t=ek.setFromSpherical(this._spherical).divideScalar(this._spherical.radius);e0.lookAt(eN,t,this._camera.up);for(let i=0;i<4;i++){let r=ej.copy(this._nearPlaneCorners[i]);r.applyMatrix4(e0);let n=eV.addVectors(this._target,r);e1.set(n,t),e1.far=this._spherical.radius+1;let a=e1.intersectObjects(this.colliderMeshes);0!==a.length&&a[0].distance<e&&(e=a[0].distance)}return e}_getClientRect(e){let t=this._domElement.getBoundingClientRect();return e.x=t.left,e.y=t.top,this._viewport?(e.x+=this._viewport.x,e.y+=t.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=t.width,e.height=t.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(e=>{let t=()=>{this.removeEventListener("rest",t),e()};this.addEventListener("rest",t)}))}_removeAllEventListeners(){}},e7={zoom:1,distance:14},e6={zoom:5,distance:14},te="https://ruucm.github.io/shadergradient/shadergradient@1.0.0/hdr/";function tt(e){return e/180*Math.PI}function ti(e){return e.map(e=>tt(e))}function tr(e){return e.replace("http://localhost:3001/customize","").replace("https://shadergradient.co/customize","").replace("https://www.shadergradient.co/customize","")}function tn(e){var{dampingFactor:t=.05}=e,i=z(e,["dampingFactor"]);e8.install({THREE:d}),(0,u.e)({CameraControls:e8});let r=(0,u.z)(e=>e.camera),n=(0,u.z)(e=>e.gl),a=function({type:e,cAzimuthAngle:t,cPolarAngle:i,cDistance:r,cameraZoom:n,zoomOut:a}){let o=(0,l.useRef)(),s=o.current;return(0,u.A)((e,t)=>o.current.update(t)),(0,l.useEffect)(()=>{null==s||s.rotateTo(tt(t),tt(i),!0)},[s,t,i]),(0,l.useEffect)(()=>{a?"sphere"===e?(null==s||s.dollyTo(e6.distance,!0),null==s||s.zoomTo(e6.zoom,!0)):(null==s||s.dollyTo(e7.distance,!0),null==s||s.zoomTo(e7.zoom,!0)):"sphere"===e?(null==s||s.zoomTo(n,!0),null==s||s.dollyTo(14,!0)):(null==s||s.dollyTo(r,!0),null==s||s.zoomTo(1,!0))},[s,a,e,n,r]),o}(i);return(0,c.jsx)("cameraControls",{ref:a,args:[r,n.domElement],enableDamping:!0,dampingFactor:t,zoomSpeed:10,dollySpeed:10,restThreshold:0})}var ta=class extends d.DataTextureLoader{constructor(e){super(e),this.type=d.HalfFloatType}parse(e){let t=function(e,t){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(t||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(t||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(t||""));break;default:console.error("THREE.RGBELoader: Error: "+(t||""))}return -1},i=`
`,r=function(e,t,r){t=t||1024;let n=e.pos,a=-1,o=0,s="",l=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));for(;0>(a=l.indexOf(i))&&o<t&&n<e.byteLength;)s+=l,o+=l.length,n+=128,l+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));return -1<a&&(!1!==r&&(e.pos+=o+a+1),s+l.slice(0,a))},n=new Uint8Array(e);n.pos=0;let a=function(e){let i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,n=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*FORMAT=(\S+)\s*$/,o=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,s={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},l,c;if(e.pos>=e.byteLength||!(l=r(e)))return t(1,"no header found");if(!(c=l.match(/^#\?(\S+)/)))return t(3,"bad initial token");for(s.valid|=1,s.programtype=c[1],s.string+=l+`
`;!1!==(l=r(e));){if(s.string+=l+`
`,"#"===l.charAt(0)){s.comments+=l+`
`;continue}if((c=l.match(i))&&(s.gamma=parseFloat(c[1])),(c=l.match(n))&&(s.exposure=parseFloat(c[1])),(c=l.match(a))&&(s.valid|=2,s.format=c[1]),(c=l.match(o))&&(s.valid|=4,s.height=parseInt(c[1],10),s.width=parseInt(c[2],10)),2&s.valid&&4&s.valid)break}return 2&s.valid?4&s.valid?s:t(3,"missing image size specifier"):t(3,"missing format specifier")}(n);if(-1!==a){let e=a.width,i=a.height,r=function(e,i,r){if(i<8||i>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(i!==(e[2]<<8|e[3]))return t(3,"wrong scanline width");let n=new Uint8Array(4*i*r);if(!n.length)return t(4,"unable to allocate buffer space");let a=0,o=0,s=4*i,l=new Uint8Array(4),c=new Uint8Array(s),d=r;for(;d>0&&o<e.byteLength;){if(o+4>e.byteLength)return t(1);if(l[0]=e[o++],l[1]=e[o++],l[2]=e[o++],l[3]=e[o++],2!=l[0]||2!=l[1]||(l[2]<<8|l[3])!=i)return t(3,"bad rgbe scanline format");let r=0,u;for(;r<s&&o<e.byteLength;){let i=(u=e[o++])>128;if(i&&(u-=128),0===u||r+u>s)return t(3,"bad scanline data");if(i){let t=e[o++];for(let e=0;e<u;e++)c[r++]=t}else c.set(e.subarray(o,o+u),r),r+=u,o+=u}for(let e=0;e<i;e++){let t=0;n[a]=c[e+t],t+=i,n[a+1]=c[e+t],t+=i,n[a+2]=c[e+t],t+=i,n[a+3]=c[e+t],a+=4}d--}return n}(n.subarray(n.pos),e,i);if(-1!==r){let t,n,o;switch(this.type){case d.FloatType:o=r.length/4;let s=new Float32Array(4*o);for(let e=0;e<o;e++)!function(e,t,i,r){let n=Math.pow(2,e[t+3]-128)/255;i[r+0]=e[t+0]*n,i[r+1]=e[t+1]*n,i[r+2]=e[t+2]*n,i[r+3]=1}(r,4*e,s,4*e);t=s,n=d.FloatType;break;case d.HalfFloatType:o=r.length/4;let l=new Uint16Array(4*o);for(let e=0;e<o;e++)!function(e,t,i,r){let n=Math.pow(2,e[t+3]-128)/255;i[r+0]=d.DataUtils.toHalfFloat(Math.min(e[t+0]*n,65504)),i[r+1]=d.DataUtils.toHalfFloat(Math.min(e[t+1]*n,65504)),i[r+2]=d.DataUtils.toHalfFloat(Math.min(e[t+2]*n,65504)),i[r+3]=d.DataUtils.toHalfFloat(1)}(r,4*e,l,4*e);t=l,n=d.HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:e,height:i,data:t,header:a.string,gamma:a.gamma,exposure:a.exposure,type:n}}}return null}setDataType(e){return this.type=e,this}load(e,t,i,r){return super.load(e,function(e,i){switch(e.type){case d.FloatType:case d.HalfFloatType:e.encoding=d.LinearEncoding,e.minFilter=d.LinearFilter,e.magFilter=d.LinearFilter,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,i)},i,r)}};function to(e,{path:t}){return(0,u.D)(ta,e,e=>e.setPath(t))}var ts=e=>e.current&&e.current.isScene,tl=e=>ts(e)?e.current:e;function tc({background:e=!1,envPreset:t}){let i={city:to("city.hdr",{path:te}),dawn:to("dawn.hdr",{path:te}),lobby:to("lobby.hdr",{path:te})}[t],r=(0,u.z)(e=>e.scene);return l.useLayoutEffect(()=>{if(i){let t=tl(r),n=(t.background,t.environment);return"only"!==e&&(t.environment=i),e&&(t.background=i),()=>{"only"!==e&&(t.environment=n),e&&(t.background="black")}}},[r,i,e]),i.mapping=d.EquirectangularReflectionMapping,null}var td=0;function tu({lightType:e,brightness:t,envPreset:i}){return(0,c.jsxs)(c.Fragment,{children:["3d"===e&&(0,c.jsx)("ambientLight",{intensity:t||1}),"env"===e&&(0,c.jsx)(l.Suspense,{fallback:(0,c.jsx)(th,{}),children:(0,c.jsx)(tc,{envPreset:i,background:!1,loadingCallback:()=>{}})})]})}function th(){let{progress:e}=function(){let[e,t]=(0,l.useState)({});return d.DefaultLoadingManager.onLoad=()=>{t(e=>P(T({},e),{active:!1}))},d.DefaultLoadingManager.onProgress=(e,i,r)=>{i===r&&(td=r);let n=(i-td)/(r-td)*100||100;t(t=>P(T({},t),{active:!0,item:e,loaded:i,total:r,progress:n}))},e}();return(0,l.useEffect)(()=>{let t=document.getElementById("LoaderRoot");t&&e&&(100===e?(t.innerHTML="Ligths are loaded",setTimeout(()=>{t.innerHTML=""},1e3)):t.innerHTML="Loading lights...")},[e]),(0,c.jsx)("ambientLight",{intensity:.4})}var tf=tA(),tm=e=>tz(e,tf),tp=tA();tm.write=e=>tz(e,tp);var tg=tA();tm.onStart=e=>tz(e,tg);var tv=tA();tm.onFrame=e=>tz(e,tv);var t_=tA();tm.onFinish=e=>tz(e,t_);var ty=[];tm.setTimeout=(e,t)=>{let i=tm.now()+t,r=()=>{let e=ty.findIndex(e=>e.cancel==r);~e&&ty.splice(e,1),tT-=~e?1:0},n={time:i,handler:e,cancel:r};return ty.splice(tx(i),0,n),tT+=1,tw(),n};var tx=e=>~(~ty.findIndex(t=>t.time>e)||~ty.length);tm.cancel=e=>{tg.delete(e),tv.delete(e),t_.delete(e),tf.delete(e),tp.delete(e)},tm.sync=e=>{tP=!0,tm.batchedUpdates(e),tP=!1},tm.throttle=e=>{let t;function i(){try{e(...t)}finally{t=null}}function r(...e){t=e,tm.onStart(i)}return r.handler=e,r.cancel=()=>{tg.delete(i),t=null},r};var tb="u">typeof window?window.requestAnimationFrame:()=>{};tm.use=e=>tb=e,tm.now="u">typeof performance?()=>performance.now():Date.now,tm.batchedUpdates=e=>e(),tm.catch=console.error,tm.frameLoop="always",tm.advance=()=>{"demand"!==tm.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):tC()};var tE=-1,tT=0,tP=!1;function tz(e,t){tP?(t.delete(e),e(0)):(t.add(e),tw())}function tw(){tE<0&&(tE=0,"demand"!==tm.frameLoop&&tb(tS))}function tS(){~tE&&(tb(tS),tm.batchedUpdates(tC))}function tC(){let e=tE,t=tx(tE=tm.now());if(t&&(tO(ty.splice(0,t),e=>e.handler()),tT-=t),!tT){tE=-1;return}tg.flush(),tf.flush(e?Math.min(64,tE-e):16.667),tv.flush(),tp.flush(),t_.flush()}function tA(){let e=new Set,t=e;return{add(i){tT+=t!=e||e.has(i)?0:1,e.add(i)},delete:i=>(tT-=t==e&&e.has(i)?1:0,e.delete(i)),flush(i){t.size&&(e=new Set,tT-=t.size,tO(t,t=>t(i)&&e.add(t)),tT+=e.size,t=e)}}}function tO(e,t){e.forEach(e=>{try{t(e)}catch(e){tm.catch(e)}})}function tR(){}var tD=(e,t,i)=>Object.defineProperty(e,t,{value:i,writable:!0,configurable:!0}),tL={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function tF(e,t){if(tL.arr(e)){if(!tL.arr(t)||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}return e===t}var tN=(e,t)=>e.forEach(t);function tI(e,t,i){if(tL.arr(e)){for(let r=0;r<e.length;r++)t.call(i,e[r],`${r}`);return}for(let r in e)e.hasOwnProperty(r)&&t.call(i,e[r],r)}var tM=e=>tL.und(e)?[]:tL.arr(e)?e:[e];function tU(e,t){if(e.size){let i=Array.from(e);e.clear(),tN(i,t)}}var tk,tj,tV=(e,...t)=>tU(e,e=>e(...t)),tH=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),tB=null,tY=!1,tq=tR,tG=Object.freeze({__proto__:null,get createStringInterpolator(){return tk},get to(){return tj},get colors(){return tB},get skipAnimation(){return tY},get willAdvance(){return tq},assign:e=>{e.to&&(tj=e.to),e.now&&(tm.now=e.now),void 0!==e.colors&&(tB=e.colors),null!=e.skipAnimation&&(tY=e.skipAnimation),e.createStringInterpolator&&(tk=e.createStringInterpolator),e.requestAnimationFrame&&tm.use(e.requestAnimationFrame),e.batchedUpdates&&(tm.batchedUpdates=e.batchedUpdates),e.willAdvance&&(tq=e.willAdvance),e.frameLoop&&(tm.frameLoop=e.frameLoop)}}),tZ=new Set,tX=[],tQ=[],t$=0,tK={get idle(){return!tZ.size&&!tX.length},start(e){t$>e.priority?(tZ.add(e),tm.onStart(tW)):(tJ(e),tm(t1))},advance:t1,sort(e){if(t$)tm.onFrame(()=>tK.sort(e));else{let t=tX.indexOf(e);~t&&(tX.splice(t,1),t0(e))}},clear(){tX=[],tZ.clear()}};function tW(){tZ.forEach(tJ),tZ.clear(),tm(t1)}function tJ(e){tX.includes(e)||t0(e)}function t0(e){var t;let i;tX.splice((i=(t=tX).findIndex(t=>t.priority>e.priority))<0?t.length:i,0,e)}function t1(e){let t=tQ;for(let i=0;i<tX.length;i++){let r=tX[i];t$=r.priority,r.idle||(tq(r),r.advance(e),r.idle||t.push(r))}return t$=0,(tQ=tX).length=0,(tX=t).length>0}var t3="[-+]?\\d*\\.?\\d+",t2=t3+"%";function t4(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var t5=RegExp("rgb"+t4(t3,t3,t3)),t9=RegExp("rgba"+t4(t3,t3,t3,t3)),t8=RegExp("hsl"+t4(t3,t2,t2)),t7=RegExp("hsla"+t4(t3,t2,t2,t3)),t6=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ie=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,it=/^#([0-9a-fA-F]{6})$/,ii=/^#([0-9a-fA-F]{8})$/;function ir(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function ia(e,t,i){let r=i<.5?i*(1+t):i+t-i*t,n=2*i-r;return Math.round(255*ir(n,r,e+1/3))<<24|Math.round(255*ir(n,r,e))<<16|Math.round(255*ir(n,r,e-1/3))<<8}function io(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function is(e){return(parseFloat(e)%360+360)%360/360}function il(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ic(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}function id(e){let t;let i="number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=it.exec(e))?parseInt(t[1]+"ff",16)>>>0:tB&&void 0!==tB[e]?tB[e]:(t=t5.exec(e))?(io(t[1])<<24|io(t[2])<<16|io(t[3])<<8|255)>>>0:(t=t9.exec(e))?(io(t[1])<<24|io(t[2])<<16|io(t[3])<<8|il(t[4]))>>>0:(t=t6.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ii.exec(e))?parseInt(t[1],16)>>>0:(t=ie.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=t8.exec(e))?(255|ia(is(t[1]),ic(t[2]),ic(t[3])))>>>0:(t=t7.exec(e))?(ia(is(t[1]),ic(t[2]),ic(t[3]))|il(t[4]))>>>0:null;if(null===i)return e;let r=(4278190080&(i=i||0))>>>24,n=(16711680&i)>>>16,a=(65280&i)>>>8,o=(255&i)/255;return`rgba(${r}, ${n}, ${a}, ${o})`}var iu=(e,t,i)=>{if(tL.fun(e))return e;if(tL.arr(e))return iu({range:e,output:t,extrapolate:i});if(tL.str(e.output[0]))return tk(e);let r=e.output,n=e.range||[0,1],a=e.extrapolateLeft||e.extrapolate||"extend",o=e.extrapolateRight||e.extrapolate||"extend",s=e.easing||(e=>e);return t=>{let i=function(e,t){for(var i=1;i<t.length-1&&!(t[i]>=e);++i);return i-1}(t,n);return function(e,t,i,r,n,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>i){if("identity"===s)return c;"clamp"===s&&(c=i)}return r===n?r:t===i?e<=t?r:n:(t===-1/0?c=-c:i===1/0?c-=t:c=(c-t)/(i-t),c=a(c),r===-1/0?c=-c:n===1/0?c+=r:c=c*(n-r)+r,c)}(t,n[i],n[i+1],r[i],r[i+1],s,a,o,e.map)}};function ih(){return(ih=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}var im=Symbol.for("FluidValue.get"),ip=Symbol.for("FluidValue.observers"),ig=e=>!!(e&&e[im]),iv=e=>e&&e[im]?e[im]():e,i_=e=>e[ip]||null;function iy(e,t){let i=e[ip];i&&i.forEach(e=>{e.eventObserved?e.eventObserved(t):e(t)})}var ix=class{constructor(e){if(this[im]=void 0,this[ip]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");ib(this,e)}},ib=(e,t)=>iz(e,im,t);function iE(e,t){if(e[im]){let i=e[ip];i||iz(e,ip,i=new Set),i.has(t)||(i.add(t),e.observerAdded&&e.observerAdded(i.size,t))}return t}function iT(e,t){let i=e[ip];if(i&&i.has(t)){let r=i.size-1;r?i.delete(t):e[ip]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var iP,iz=(e,t,i)=>Object.defineProperty(e,t,{value:i,writable:!0,configurable:!0}),iw=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,iS=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,iC=RegExp(`(${iw.source})(%|[a-z]+)`,"i"),iA=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,iO=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,iR=e=>{let[t,i]=iD(e);if(!t||tH())return e;let r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r?r.trim():i&&i.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(i)||e:i&&iO.test(i)?iR(i):i||e},iD=e=>{let t=iO.exec(e);if(!t)return[,];let[,i,r]=t;return[i,r]},iL=(e,t,i,r,n)=>`rgba(${Math.round(t)}, ${Math.round(i)}, ${Math.round(r)}, ${n})`,iF=e=>{iP||(iP=tB?RegExp(`(${Object.keys(tB).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(e=>iv(e).replace(iO,iR).replace(iS,id).replace(iP,id)),i=t.map(e=>e.match(iw).map(Number)),r=i[0].map((e,t)=>i.map(e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})).map(t=>iu(ih({},e,{output:t})));return e=>{var i;let n=!iC.test(t[0])&&(null==(i=t.find(e=>iC.test(e)))?void 0:i.replace(iw,"")),a=0;return t[0].replace(iw,()=>`${r[a++](e)}${n||""}`).replace(iA,iL)}},iN="react-spring: ",iI=e=>{let t=!1;if("function"!=typeof e)throw TypeError(`${iN}once requires a function parameter`);return(...i)=>{t||(e(...i),t=!0)}},iM=iI(console.warn),iU=iI(console.warn);function ik(e){return tL.str(e)&&("#"==e[0]||/\d/.test(e)||!tH()&&iO.test(e)||e in(tB||{}))}var ij=tH()?l.useEffect:l.useLayoutEffect,iV=()=>{let e=(0,l.useRef)(!1);return ij(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function iH(){let e=(0,l.useState)()[1],t=iV();return()=>{t.current&&e(Math.random())}}var iB=e=>(0,l.useEffect)(e,iY),iY=[];function iq(e){let t=(0,l.useRef)();return(0,l.useEffect)(()=>{t.current=e}),t.current}var iG=Symbol.for("Animated:node"),iZ=e=>!!e&&e[iG]===e,iX=e=>e&&e[iG],iQ=(e,t)=>tD(e,iG,t),i$=e=>e&&e[iG]&&e[iG].getPayload(),iK=class{constructor(){this.payload=void 0,iQ(this,this)}getPayload(){return this.payload||[]}},iW=class extends iK{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,tL.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new iW(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return tL.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,tL.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},iJ=class extends iW{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=iu({output:[e,e]})}static create(e){return new iJ(e)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(e){if(tL.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=iu({output:[this.getValue(),e]})),this._value=0,super.reset()}},i0={dependencies:null},i1=class extends iK{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let t={};return tI(this.source,(i,r)=>{iZ(i)?t[r]=i.getValue(e):ig(i)?t[r]=iv(i):e||(t[r]=i)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&tN(this.payload,e=>e.reset())}_makePayload(e){if(e){let t=new Set;return tI(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){i0.dependencies&&ig(e)&&i0.dependencies.add(e);let t=i$(e);t&&tN(t,e=>this.add(e))}},i3=class extends i1{constructor(e){super(e)}static create(e){return new i3(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let t=this.getPayload();return e.length==t.length?t.map((t,i)=>t.setValue(e[i])).some(Boolean):(super.setValue(e.map(i2)),!0)}};function i2(e){return(ik(e)?iJ:iW).create(e)}function i4(e){let t=iX(e);return t?t.constructor:tL.arr(e)?i3:ik(e)?iJ:iW}function i5(){return(i5=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}var i9=(e,t)=>{let i=!tL.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,l.forwardRef)((r,n)=>{var a;let o;let s=(0,l.useRef)(null),c=i&&(0,l.useCallback)(e=>{s.current=(n&&(tL.fun(n)?n(e):n.current=e),e)},[n]),[d,u]=(a=r,o=new Set,i0.dependencies=o,a.style&&(a=i5({},a,{style:t.createAnimatedStyle(a.style)})),a=new i1(a),i0.dependencies=null,[a,o]),h=iH(),f=()=>{let e=s.current;(!i||e)&&(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))===!1&&h()},m=new i8(f,u),p=(0,l.useRef)();ij(()=>(p.current=m,tN(u,e=>iE(e,m)),()=>{p.current&&(tN(p.current.deps,e=>iT(e,p.current)),tm.cancel(p.current.update))})),(0,l.useEffect)(f,[]),iB(()=>()=>{let e=p.current;tN(e.deps,t=>iT(t,e))});let g=t.getComponentProps(d.getValue());return l.createElement(e,i5({},g,{ref:c}))})},i8=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&tm.write(this.update)}},i7=Symbol.for("AnimatedComponent"),i6=e=>tL.str(e)?e:e&&tL.str(e.displayName)?e.displayName:tL.fun(e)&&e.name||null;function re(){return(re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function rt(e,...t){return tL.fun(e)?e(...t):e}var ri=(e,t)=>!0===e||!!(t&&e&&(tL.fun(e)?e(t):tM(e).includes(t))),rr=(e,t)=>tL.obj(e)?t&&e[t]:e,rn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ra=e=>e,ro=(e,t=ra)=>{let i=rs;e.default&&!0!==e.default&&(i=Object.keys(e=e.default));let r={};for(let n of i){let i=t(e[n],n);tL.und(i)||(r[n]=i)}return r},rs=["config","onProps","onStart","onChange","onPause","onResume","onRest"],rl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function rc(e){let t=function(e){let t={},i=0;if(tI(e,(e,r)=>{rl[r]||(t[r]=e,i++)}),i)return t}(e);if(t){let i={to:t};return tI(e,(e,r)=>r in t||(i[r]=e)),i}return re({},e)}function rd(e){return e=iv(e),tL.arr(e)?e.map(rd):ik(e)?tG.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ru(e){return tL.fun(e)||tL.arr(e)&&tL.obj(e[0])}var rh=re({},{tension:170,friction:26},{mass:1,damping:1,easing:e=>e,clamp:!1}),rf=class{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,rh)}};function rm(e,t){if(tL.und(t.decay)){let i=!tL.und(t.tension)||!tL.und(t.friction);!i&&tL.und(t.frequency)&&tL.und(t.damping)&&tL.und(t.mass)||(e.duration=void 0,e.decay=void 0),i&&(e.frequency=void 0)}else e.duration=void 0}var rp=[],rg=class{constructor(){this.changed=!1,this.values=rp,this.toValues=null,this.fromValues=rp,this.to=void 0,this.from=void 0,this.config=new rf,this.immediate=!1}};function rv(e,{key:t,props:i,defaultProps:r,state:n,actions:a}){return new Promise((o,s)=>{var l;let c,d,u=ri(null!=(l=i.cancel)?l:r?.cancel,t);if(u)m();else{tL.und(i.pause)||(n.paused=ri(i.pause,t));let e=r?.pause;!0!==e&&(e=n.paused||ri(e,t)),c=rt(i.delay||0,t),e?(n.resumeQueue.add(f),a.pause()):(a.resume(),f())}function h(){n.resumeQueue.add(f),n.timeouts.delete(d),d.cancel(),c=d.time-tm.now()}function f(){c>0&&!tG.skipAnimation?(n.delayed=!0,d=tm.setTimeout(m,c),n.pauseQueue.add(h),n.timeouts.add(d)):m()}function m(){n.delayed&&(n.delayed=!1),n.pauseQueue.delete(h),n.timeouts.delete(d),e<=(n.cancelId||0)&&(u=!0);try{a.start(re({},i,{callId:e,cancel:u}),o)}catch(e){s(e)}}})}var r_=(e,t)=>1==t.length?t[0]:t.some(e=>e.cancelled)?rb(e.get()):t.every(e=>e.noop)?ry(e.get()):rx(e.get(),t.every(e=>e.finished)),ry=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),rx=(e,t,i=!1)=>({value:e,finished:t,cancelled:i}),rb=e=>({value:e,cancelled:!0,finished:!1});function rE(e,t,i,r){let{callId:n,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=i;return a||e!==s||t.reset?i.promise=(async()=>{i.asyncId=n,i.asyncTo=e;let c=ro(t,(e,t)=>"onRest"===t?void 0:e),d,u,h=new Promise((e,t)=>(d=e,u=t)),f=e=>{let t=n<=(i.cancelId||0)&&rb(r)||n!==i.asyncId&&rx(r,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{let a=new rP,o=new rz;return(async()=>{if(tG.skipAnimation)throw rT(i),o.result=rx(r,!1),u(o),o;f(a);let s=tL.obj(e)?re({},e):re({},t,{to:e});s.parentId=n,tI(c,(e,t)=>{tL.und(s[t])&&(s[t]=e)});let l=await r.start(s);return f(a),i.paused&&await new Promise(e=>{i.resumeQueue.add(e)}),l})()},p;if(tG.skipAnimation)return rT(i),rx(r,!1);try{let t;t=tL.arr(e)?(async e=>{for(let t of e)await m(t)})(e):Promise.resolve(e(m,r.stop.bind(r))),await Promise.all([t.then(d),h]),p=rx(r.get(),!0,!1)}catch(e){if(e instanceof rP)p=e.result;else if(e instanceof rz)p=e.result;else throw e}finally{n==i.asyncId&&(i.asyncId=a,i.asyncTo=a?s:void 0,i.promise=a?l:void 0)}return tL.fun(o)&&tm.batchedUpdates(()=>{o(p,r,r.item)}),p})():l}function rT(e,t){tU(e.timeouts,e=>e.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var rP=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}},rz=class extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}},rw=e=>e instanceof rC,rS=1,rC=class extends ix{constructor(...e){super(...e),this.id=rS++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){let e=iX(this);return e&&e.getValue()}to(...e){return tG.to(this,e)}interpolate(...e){return iM(`${iN}The "interpolate" function is deprecated in v9 (use "to" instead)`),tG.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){iy(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||tK.sort(this),iy(this,{type:"priority",parent:this,priority:e})}},rA=Symbol.for("SpringPhase"),rO=e=>(1&e[rA])>0,rR=e=>(2&e[rA])>0,rD=e=>(4&e[rA])>0,rL=(e,t)=>t?e[rA]|=3:e[rA]&=-3,rF=(e,t)=>t?e[rA]|=4:e[rA]&=-5,rN=class extends rC{constructor(e,t){if(super(),this.key=void 0,this.animation=new rg,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!tL.und(e)||!tL.und(t)){let i=tL.obj(e)?re({},e):re({},t,{from:e});tL.und(i.default)&&(i.default=!0),this.start(i)}}get idle(){return!(rR(this)||this._state.asyncTo)||rD(this)}get goal(){return iv(this.animation.to)}get velocity(){let e=iX(this);return e instanceof iW?e.lastVelocity||0:e.getPayload().map(e=>e.lastVelocity||0)}get hasAnimated(){return rO(this)}get isAnimating(){return rR(this)}get isPaused(){return rD(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,i=!1,r=this.animation,{config:n,toValues:a}=r,o=i$(r.to);!o&&ig(r.to)&&(a=tM(iv(r.to))),r.values.forEach((s,l)=>{if(s.done)return;let c=s.constructor==iJ?1:o?o[l].lastPosition:a[l],d=r.immediate,u=c;if(!d){if(u=s.lastPosition,n.tension<=0){s.done=!0;return}let t=s.elapsedTime+=e,i=r.fromValues[l],a=null!=s.v0?s.v0:s.v0=tL.arr(n.velocity)?n.velocity[l]:n.velocity,o,h=n.precision||(i==c?.005:Math.min(1,.001*Math.abs(c-i)));if(tL.und(n.duration)){if(n.decay){let e=!0===n.decay?.998:n.decay,r=Math.exp(-(1-e)*t);u=i+a/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=h,o=a*r}else{o=null==s.lastVelocity?a:s.lastVelocity;let t=n.restVelocity||h/10,r=n.clamp?0:n.bounce,l=!tL.und(r),f=i==c?s.v0>0:i<c,m=Math.ceil(e/1);for(let e=0;e<m&&!(!(Math.abs(o)>t)&&(d=Math.abs(c-u)<=h));++e){l&&(u==c||u>c==f)&&(o=-o*r,u=c);let e=(-(1e-6*n.tension)*(u-c)+-(.001*n.friction)*o)/n.mass;o+=1*e,u+=1*o}}}else{let r=1;n.duration>0&&(this._memoizedDuration!==n.duration&&(this._memoizedDuration=n.duration,s.durationProgress>0&&(s.elapsedTime=n.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(r=(n.progress||0)+t/this._memoizedDuration)>1?1:r<0?0:r,s.durationProgress=r),o=((u=i+n.easing(r)*(c-i))-s.lastPosition)/e,d=1==r}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,n.round)&&(i=!0)});let s=iX(this),l=s.getValue();if(t){let e=iv(r.to);(l!==e||i)&&!n.decay?(s.setValue(e),this._onChange(e)):i&&n.decay&&this._onChange(l),this._stop()}else i&&this._onChange(l)}set(e){return tm.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(rR(this)){let{to:e,config:t}=this.animation;tm.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let i;return tL.und(e)?(i=this.queue||[],this.queue=[]):i=[tL.obj(e)?e:re({},t,{to:e})],Promise.all(i.map(e=>this._update(e))).then(e=>r_(this,e))}stop(e){let{to:t}=this.animation;return this._focus(this.get()),rT(this._state,e&&this._lastCallId),tm.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){let t=this.key||"",{to:i,from:r}=e;(null==(i=tL.obj(i)?i[t]:i)||ru(i))&&(i=void 0),null==(r=tL.obj(r)?r[t]:r)&&(r=void 0);let n={to:i,from:r};return rO(this)||(e.reverse&&([i,r]=[r,i]),r=iv(r),tL.und(r)?iX(this)||this._set(i):this._set(r)),n}_update(e,t){let i=re({},e),{key:r,defaultProps:n}=this;i.default&&Object.assign(n,ro(i,(e,t)=>/^on/.test(t)?rr(e,r):e)),rV(this,i,"onProps"),rH(this,"onProps",i,this);let a=this._prepareNode(i);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let o=this._state;return rv(++this._lastCallId,{key:r,props:i,defaultProps:n,state:o,actions:{pause:()=>{rD(this)||(rF(this,!0),tV(o.pauseQueue),rH(this,"onPause",rx(this,rI(this,this.animation.to)),this))},resume:()=>{rD(this)&&(rF(this,!1),rR(this)&&this._resume(),tV(o.resumeQueue),rH(this,"onResume",rx(this,rI(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then(e=>{if(i.loop&&e.finished&&!(t&&e.noop)){let e=rM(i);if(e)return this._update(e,!0)}return e})}_merge(e,t,i){if(t.cancel)return this.stop(!0),i(rb(this));let r=!tL.und(e.to),n=!tL.und(e.from);if(r||n){if(!(t.callId>this._lastToId))return i(rb(this));this._lastToId=t.callId}let{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s,{to:d=l,from:u=c}=e;n&&!r&&(!t.default||tL.und(d))&&(d=u),t.reverse&&([d,u]=[u,d]);let h=!tF(u,c);h&&(s.from=u),u=iv(u);let f=!tF(d,l);f&&this._focus(d);let m=ru(t.to),{config:p}=s,{decay:g,velocity:v}=p;(r||n)&&(p.velocity=0),t.config&&!m&&function(e,t,i){for(let r in i&&(rm(i=re({},i),t),t=re({},i,t)),rm(e,t),Object.assign(e,t),rh)null==e[r]&&(e[r]=rh[r]);let{mass:r,frequency:n,damping:a}=e;tL.und(n)||(n<.01&&(n=.01),a<0&&(a=0),e.tension=Math.pow(2*Math.PI/n,2)*r,e.friction=4*Math.PI*a*r/n)}(p,rt(t.config,a),t.config!==o.config?rt(o.config,a):void 0);let _=iX(this);if(!_||tL.und(d))return i(rx(this,!0));let y=tL.und(t.reset)?n&&!t.default:!tL.und(u)&&ri(t.reset,a),x=y?u:this.get(),b=rd(d),E=tL.num(b)||tL.arr(b)||ik(b),T=!m&&(!E||ri(o.immediate||t.immediate,a));if(f){let e=i4(d);if(e!==_.constructor){if(T)_=this._set(b);else throw Error(`Cannot animate between ${_.constructor.name} and ${e.name}, as the "to" prop suggests`)}}let P=_.constructor,z=ig(d),w=!1;if(!z){let e=y||!rO(this)&&h;(f||e)&&(z=!(w=tF(rd(x),b))),(tF(s.immediate,T)||T)&&tF(p.decay,g)&&tF(p.velocity,v)||(z=!0)}if(w&&rR(this)&&(s.changed&&!y?z=!0:z||this._stop(l)),!m&&((z||ig(l))&&(s.values=_.getPayload(),s.toValues=ig(d)?null:P==iJ?[1]:tM(b)),s.immediate==T||(s.immediate=T,T||y||this._set(l)),z)){let{onRest:e}=s;tN(rj,e=>rV(this,t,e));let r=rx(this,rI(this,l));tV(this._pendingCalls,r),this._pendingCalls.add(i),s.changed&&tm.batchedUpdates(()=>{s.changed=!y,e?.(r,this),y?rt(o.onRest,r):null==s.onStart||s.onStart(r,this)})}y&&this._set(x),m?i(rE(t.to,t,this._state,this)):z?this._start():rR(this)&&!f?this._pendingCalls.add(i):i(ry(x))}_focus(e){let t=this.animation;e!==t.to&&(i_(this)&&this._detach(),t.to=e,i_(this)&&this._attach())}_attach(){let e=0,{to:t}=this.animation;ig(t)&&(iE(t,this),rw(t)&&(e=t.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;ig(e)&&iT(e,this)}_set(e,t=!0){let i=iv(e);if(!tL.und(i)){let e=iX(this);if(!e||!tF(i,e.getValue())){let r=i4(i);e&&e.constructor==r?e.setValue(i):iQ(this,r.create(i)),e&&tm.batchedUpdates(()=>{this._onChange(i,t)})}}return iX(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,rH(this,"onStart",rx(this,rI(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),rt(this.animation.onChange,e,this)),rt(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){let e=this.animation;iX(this).reset(iv(e.to)),e.immediate||(e.fromValues=e.values.map(e=>e.lastPosition)),rR(this)||(rL(this,!0),rD(this)||this._resume())}_resume(){tG.skipAnimation?this.finish():tK.start(this)}_stop(e,t){if(rR(this)){rL(this,!1);let i=this.animation;tN(i.values,e=>{e.done=!0}),i.toValues&&(i.onChange=i.onPause=i.onResume=void 0),iy(this,{type:"idle",parent:this});let r=t?rb(this.get()):rx(this.get(),rI(this,e??i.to));tV(this._pendingCalls,r),i.changed&&(i.changed=!1,rH(this,"onRest",r,this))}}};function rI(e,t){let i=rd(t);return tF(rd(e.get()),i)}function rM(e,t=e.loop,i=e.to){let r=rt(t);if(r){let n=!0!==r&&rc(r),a=(n||e).reverse,o=!n||n.reset;return rU(re({},e,{loop:t,default:!1,pause:void 0,to:!a||ru(i)?i:void 0,from:o?e.from:void 0,reset:o},n))}}function rU(e){let{to:t,from:i}=e=rc(e),r=new Set;return tL.obj(t)&&rk(t,r),tL.obj(i)&&rk(i,r),e.keys=r.size?Array.from(r):null,e}function rk(e,t){tI(e,(e,i)=>null!=e&&t.add(i))}var rj=["onStart","onRest","onChange","onPause","onResume"];function rV(e,t,i){e.animation[i]=t[i]!==rn(t,i)?rr(t[i],e.key):void 0}function rH(e,t,...i){var r,n,a,o;null==(r=(n=e.animation)[t])||r.call(n,...i),null==(a=(o=e.defaultProps)[t])||a.call(o,...i)}var rB=["onStart","onChange","onRest"],rY=1,rq=class{constructor(e,t){this.id=rY++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(re({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){let e={};return this.each((t,i)=>e[i]=t.get()),e}set(e){for(let t in e){let i=e[t];tL.und(i)||this.springs[t].set(i)}}update(e){return e&&this.queue.push(rU(e)),this}start(e){let{queue:t}=this;return e?t=tM(e).map(rU):this.queue=[],this._flush?this._flush(this,t):(rW(this,t),rG(this,t))}stop(e,t){if(!!e!==e&&(t=e),t){let i=this.springs;tN(tM(t),t=>i[t].stop(!!e))}else rT(this._state,this._lastAsyncId),this.each(t=>t.stop(!!e));return this}pause(e){if(tL.und(e))this.start({pause:!0});else{let t=this.springs;tN(tM(e),e=>t[e].pause())}return this}resume(e){if(tL.und(e))this.start({pause:!1});else{let t=this.springs;tN(tM(e),e=>t[e].resume())}return this}each(e){tI(this.springs,e)}_onFrame(){let{onStart:e,onChange:t,onRest:i}=this._events,r=this._active.size>0,n=this._changed.size>0;(r&&!this._started||n&&!this._started)&&(this._started=!0,tU(e,([e,t])=>{t.value=this.get(),e(t,this,this._item)}));let a=!r&&this._started,o=n||a&&i.size?this.get():null;n&&t.size&&tU(t,([e,t])=>{t.value=o,e(t,this,this._item)}),a&&(this._started=!1,tU(i,([e,t])=>{t.value=o,e(t,this,this._item)}))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}tm.onFrame(this._onFrame)}};function rG(e,t){return Promise.all(t.map(t=>rZ(e,t))).then(t=>r_(e,t))}async function rZ(e,t,i){let{keys:r,to:n,from:a,loop:o,onRest:s,onResolve:l}=t,c=tL.obj(t.default)&&t.default;o&&(t.loop=!1),!1===n&&(t.to=null),!1===a&&(t.from=null);let d=tL.arr(n)||tL.fun(n)?n:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):tN(rB,i=>{let r=t[i];if(tL.fun(r)){let n=e._events[i];t[i]=({finished:e,cancelled:t})=>{let i=n.get(r);i?(e||(i.finished=!1),t&&(i.cancelled=!0)):n.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[i]=t[i])}});let u=e._state;!u.paused===t.pause?(u.paused=t.pause,tV(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);let h=(r||Object.keys(e.springs)).map(i=>e.springs[i].start(t)),f=!0===t.cancel||!0===rn(t,"cancel");(d||f&&u.asyncId)&&h.push(rv(++e._lastAsyncId,{props:t,state:u,actions:{pause:tR,resume:tR,start(t,i){f?(rT(u,e._lastAsyncId),i(rb(e))):(t.onRest=s,i(rE(d,t,u,e)))}}})),u.paused&&await new Promise(e=>{u.resumeQueue.add(e)});let m=r_(e,await Promise.all(h));if(o&&m.finished&&!(i&&m.noop)){let i=rM(t,o,n);if(i)return rW(e,[i]),rZ(e,i,!0)}return l&&tm.batchedUpdates(()=>l(m,e,e.item)),m}function rX(e,t){let i=re({},e.springs);return t&&tN(tM(t),e=>{tL.und(e.keys)&&(e=rU(e)),tL.obj(e.to)||(e=re({},e,{to:void 0})),rK(i,e,e=>r$(e))}),rQ(e,i),i}function rQ(e,t){tI(t,(t,i)=>{e.springs[i]||(e.springs[i]=t,iE(t,e))})}function r$(e,t){let i=new rN;return i.key=e,t&&iE(i,t),i}function rK(e,t,i){t.keys&&tN(t.keys,r=>{(e[r]||(e[r]=i(r)))._prepareNode(t)})}function rW(e,t){tN(t,t=>{rK(e.springs,t,t=>r$(t,e))})}var rJ=["children"],r0=e=>{let{children:t}=e,i=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,rJ),r=(0,l.useContext)(r1),n=i.pause||!!r.pause,a=i.immediate||!!r.immediate;i=function(e,t){let[i]=(0,l.useState)(()=>({inputs:t,result:e()})),r=(0,l.useRef)(),n=r.current,a=n;return a?t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(t,a.inputs)||(a={inputs:t,result:e()}):a=i,(0,l.useEffect)(()=>{r.current=a,n==i&&(i.inputs=i.result=void 0)},[a]),a.result}(()=>({pause:n,immediate:a}),[n,a]);let{Provider:o}=r1;return l.createElement(o,{value:i},t)},r1=(Object.assign(r0,l.createContext({})),r0.Provider._context=r0,r0.Consumer._context=r0,r0);r0.Provider=r1.Provider,r0.Consumer=r1.Consumer;var r3=()=>{let e=[],t=function(t){iU(`${iN}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);let r=[];return tN(e,(e,n)=>{if(tL.und(t))r.push(e.start());else{let a=i(t,e,n);a&&r.push(e.start(a))}}),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){let i=e.indexOf(t);~i&&e.splice(i,1)},t.pause=function(){return tN(e,e=>e.pause(...arguments)),this},t.resume=function(){return tN(e,e=>e.resume(...arguments)),this},t.set=function(t){tN(e,e=>e.set(t))},t.start=function(t){let i=[];return tN(e,(e,r)=>{if(tL.und(t))i.push(e.start());else{let n=this._getProps(t,e,r);n&&i.push(e.start(n))}}),i},t.stop=function(){return tN(e,e=>e.stop(...arguments)),this},t.update=function(t){return tN(e,(e,i)=>e.update(this._getProps(t,e,i))),this};let i=function(e,t,i){return tL.fun(e)?e(i,t):e};return t._getProps=i,t};function r2(e,t){let i=tL.fun(e),[[r],n]=function(e,t,i){let r=tL.fun(t)&&t;r&&!i&&(i=[]);let n=(0,l.useMemo)(()=>r||3==arguments.length?r3():void 0,[]),a=(0,l.useRef)(0),o=iH(),s=(0,l.useMemo)(()=>({ctrls:[],queue:[],flush(e,t){let i=rX(e,t);return!(a.current>0)||s.queue.length||Object.keys(i).some(t=>!e.springs[t])?new Promise(r=>{rQ(e,i),s.queue.push(()=>{r(rG(e,t))}),o()}):rG(e,t)}}),[]),c=(0,l.useRef)([...s.ctrls]),d=[],u=iq(e)||0;function h(e,i){for(let n=e;n<i;n++){let e=c.current[n]||(c.current[n]=new rq(null,s.flush)),i=r?r(n,e):t[n];i&&(d[n]=function(e){let t=rU(e);return tL.und(t.default)&&(t.default=ro(t)),t}(i))}}(0,l.useMemo)(()=>{tN(c.current.slice(e,u),e=>{var t;null==(t=e.ref)||t.delete(e),n?.delete(e),e.stop(!0)}),c.current.length=e,h(u,e)},[e]),(0,l.useMemo)(()=>{h(0,Math.min(u,e))},i);let f=c.current.map((e,t)=>rX(e,d[t])),m=(0,l.useContext)(r0),p=iq(m),g=m!==p&&function(e){for(let t in e)return!0;return!1}(m);ij(()=>{a.current++,s.ctrls=c.current;let{queue:e}=s;e.length&&(s.queue=[],tN(e,e=>e())),tN(c.current,(e,t)=>{n?.add(e),g&&e.start({default:m});let i=d[t];i&&(function(e,t){if(t&&e.ref!==t){var i;null==(i=e.ref)||i.delete(e),t.add(e),e.ref=t}}(e,i.ref),e.ref?e.queue.push(i):e.start(i))})}),iB(()=>()=>{tN(s.ctrls,e=>e.stop(!0))});let v=f.map(e=>re({},e));return n?[v,n]:v}(1,i?e:[e],i?t||[]:t);return i||2==arguments.length?[r,n]:r}(r=o||(o={})).MOUNT="mount",r.ENTER="enter",r.UPDATE="update",r.LEAVE="leave";var r4=class extends rC{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=iu(...t);let i=this._get();iQ(this,i4(i).create(i))}advance(e){let t=this._get();tF(t,this.get())||(iX(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&r9(this._active)&&r8(this)}_get(){let e=tL.arr(this.source)?this.source.map(iv):tM(iv(this.source));return this.calc(...e)}_start(){this.idle&&!r9(this._active)&&(this.idle=!1,tN(i$(this),e=>{e.done=!1}),tG.skipAnimation?(tm.batchedUpdates(()=>this.advance()),r8(this)):tK.start(this))}_attach(){let e=1;tN(tM(this.source),t=>{ig(t)&&iE(t,this),rw(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){tN(tM(this.source),e=>{ig(e)&&iT(e,this)}),this._active.clear(),r8(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=tM(this.source).reduce((e,t)=>Math.max(e,(rw(t)?t.priority:0)+1),0))}};function r5(e){return!1!==e.idle}function r9(e){return!e.size||Array.from(e).every(r5)}function r8(e){e.idle||(e.idle=!0,tN(i$(e),e=>{e.done=!0}),iy(e,{type:"idle",parent:e}))}tG.assign({createStringInterpolator:iF,to:(e,t)=>new r4(e,t)}),tK.advance;var r7=["primitive"].concat(Object.keys(d).filter(e=>/^[A-Z]/.test(e)).map(e=>e[0].toLowerCase()+e.slice(1)));tG.assign({createStringInterpolator:iF,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},frameLoop:"demand"}),(0,u.n)(()=>{tm.advance()});var r6=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:i=e=>new i1(e),getComponentProps:r=e=>e}={})=>{let n={applyAnimatedValues:t,createAnimatedStyle:i,getComponentProps:r},a=e=>{let t=i6(e)||"Anonymous";return(e=tL.str(e)?a[e]||(a[e]=i9(e,n)):e[i7]||(e[i7]=i9(e,n))).displayName=`Animated(${t})`,e};return tI(e,(t,i)=>{tL.arr(e)&&(i=i6(t)),a[i]=a(t)}),{animated:a}})(r7,{applyAnimatedValues:u.j}).animated;function ne(e){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function nt(e=0){return e/255}var ni={};S(ni,{defaults:()=>nr,positionMix:()=>nf});var nr={};S(nr,{plane:()=>nn,sphere:()=>ns,waterPlane:()=>nd});var nn={};S(nn,{fragment:()=>na,vertex:()=>no});var na=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;float linearToRelativeLuminance2(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(mix(mix(color1,color2,smoothstep(-3.0,3.0,vPos.x)),color3,vPos.z),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#ifdef TRANSMISSION
float totalTransmission=transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#ifdef TRANSMISSION
diffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance2(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);
#endif
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
gl_FragColor=vec4(outgoingLight,diffuseColor.a);}`,no=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>
void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`,ns={};S(ns,{fragment:()=>nl,vertex:()=>nc});var nl=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;varying float distanceToCenter;float linearToRelativeLuminance2(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;
#include <clipping_planes_fragment>
float distanceToCenter=distance(vPos,vec3(0,0,0));vec4 diffuseColor=vec4(mix(color3,mix(color2,color1,smoothstep(-1.0,1.0,vPos.y)),distanceToCenter),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#ifdef TRANSMISSION
float totalTransmission=transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#ifdef TRANSMISSION
diffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance2(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);
#endif
gl_FragColor=vec4(outgoingLight,diffuseColor.a);
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,nc=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}varying vec3 vNormal;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vPos;varying float vDistort;varying vec2 vUv;varying vec3 vViewPosition;
#define STANDARD
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>
mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
float t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`,nd={};S(nd,{fragment:()=>nu,vertex:()=>nh});var nu=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;float linearToRelativeLuminance2(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(mix(mix(color1,color2,smoothstep(-3.0,3.0,vPos.x)),color3,vPos.z),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#ifdef TRANSMISSION
float totalTransmission=transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#ifdef TRANSMISSION
diffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance2(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);
#endif
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
gl_FragColor=vec4(outgoingLight,diffuseColor.a);}`,nh=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>
void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`,nf={};S(nf,{plane:()=>nm,sphere:()=>nv,waterPlane:()=>nx});var nm={};S(nm,{fragment:()=>np,vertex:()=>ng});var np="uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}",ng=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>
void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`,nv={};S(nv,{fragment:()=>n_,vertex:()=>ny});var n_=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;varying float distanceToCenter;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;
#include <clipping_planes_fragment>
float distanceToCenter=distance(vPos,vec3(0,0,0));vec4 diffuseColor=vec4(mix(color3,mix(color2,color1,smoothstep(-1.0,1.0,vPos.y)),distanceToCenter),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#ifdef TRANSMISSION
float totalTransmission=transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#ifdef TRANSMISSION
diffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);
#endif
gl_FragColor=vec4(outgoingLight,diffuseColor.a);
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,ny=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}varying vec3 vNormal;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vPos;varying float vDistort;varying vec2 vUv;varying vec3 vViewPosition;
#define STANDARD
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>
mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
float t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`,nx={};S(nx,{fragment:()=>nb,vertex:()=>nE});var nb="uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}",nE=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>
void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`,{to:nT,rotDur:nP,meshDur:nz,rotDelay:nw,meshDelay:nS}={meshDelay:0,meshDur:0,rotDelay:1.7,rotDur:1,posDelay:1.3,posDur:2.2,logoTransition:3.1,text:2.5,to:1},nC=new d.Clock;Math.easeInOutCubic=function(e,t,i,r){return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t};var nA=({type:e,animate:t,range:i,rangeStart:r,rangeEnd:n,uTime:a,uSpeed:o,uStrength:s,uDensity:h,uFrequency:f,uAmplitude:m,positionX:p,positionY:g,positionZ:v,rotationX:_,rotationY:y,rotationZ:x,color1:b,color2:E,color3:P,reflection:z,wireframe:w,shader:S,rotSpringOption:A=({rotation:e})=>({to:(t,i)=>C(void 0,null,function*(){yield t({animatedRotation:e})}),from:{rotation:ti([0,0,0])},config:{duration:300}}),posSpringOption:O=({position:e})=>({to:(t,i)=>C(void 0,null,function*(){yield t({animatedPosition:e})}),from:{position:[0,0,0]},config:{duration:300}})})=>{let R=function({type:e,shader:t,color1:i,color2:r,color3:n,uTime:a,uSpeed:o,uDensity:s,uStrength:c,uFrequency:h,uAmplitude:f}){var m,p,g,v,_,y,x;let[b,E]=(0,l.useState)(!1),P=null!=e?e:"plane",z=nr[P];t&&"defaults"!==t&&(z=ni[t][P]);let w=(m={colors:[i,r,n],uTime:a,uSpeed:o,uLoadingTime:0,uNoiseDensity:s,uNoiseStrength:c,uFrequency:h,uAmplitude:f,uIntensity:.5},p=z.vertex,g=z.fragment,class extends d.MeshPhysicalMaterial{constructor(){let e=Object.entries(m),t=m.colors,i=ne(t[0]),r=ne(t[1]),n=ne(t[2]),a={uC1r:{value:nt(null==i?void 0:i.r)},uC1g:{value:nt(null==i?void 0:i.g)},uC1b:{value:nt(null==i?void 0:i.b)},uC2r:{value:nt(null==r?void 0:r.r)},uC2g:{value:nt(null==r?void 0:r.g)},uC2b:{value:nt(null==r?void 0:r.b)},uC3r:{value:nt(null==n?void 0:n.r)},uC3g:{value:nt(null==n?void 0:n.g)},uC3b:{value:nt(null==n?void 0:n.b)}},o=e.reduce((e,[t,i])=>{let r=d.UniformsUtils.clone({[t]:{value:i}});return T(T({},e),r)},{});super({metalness:.2,userData:o,side:d.DoubleSide,onBeforeCompile:e=>{e.uniforms=T(T(T({},e.uniforms),o),a),e.vertexShader=p,e.fragmentShader=g}}),e.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),v&&v(this)}}),S=(_={uTime:a,uSpeed:o,uNoiseDensity:s,uNoiseStrength:c,uFrequency:h,uAmplitude:f,uIntensity:.5},y=z.vertex,class extends d.LineBasicMaterial{constructor(){let e=Object.entries(_),t=e.reduce((e,[t,i])=>{let r=d.UniformsUtils.clone({[t]:{value:i}});return T(T({},e),r)},{});super({color:"#ffffff",linewidth:5,userData:t,onBeforeCompile:e=>{e.uniforms=T(T({},e.uniforms),t),e.vertexShader=y}}),e.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),x&&x(this)}});return(0,u.e)({ColorShiftMaterial:w}),(0,u.e)({HoveredLineMaterial:S}),(0,l.useEffect)(()=>{E(!0)},[]),b}({type:e,shader:S,color1:b,color2:E,color3:P,uTime:a,uSpeed:o,uDensity:h,uStrength:s,uFrequency:f,uAmplitude:m}),{material:D,linemat:L}=function({animate:e,range:t,rangeStart:i,rangeEnd:r}){let n=(0,l.useRef)(),a=(0,l.useRef)(),o=0;return(0,u.A)((s,l)=>{if(n.current){let s=nC.getElapsedTime();if("enabled"===t&&(s=i+nC.getElapsedTime())>=r&&(s=i,nC.start()),s>nS){let e=n.current.userData.uLoadingTime.value,t=s<nz+nS?Math.easeInOutCubic(o,e,nT-e,1e3*nz):nT;n.current.userData.uLoadingTime.value=t,s<nz+nS&&(o+=20)}"on"===e&&(n.current.userData.uTime.value=s,void 0!==a.current&&(a.current.userData.uTime.value=s))}}),{material:n,linemat:a}}({animate:t,range:i,rangeStart:r,rangeEnd:n}),F=[p,g,v],N=ti([_,y,x]),{animatedPosition:I}=r2(O({position:F})),{animatedRotation:M}=r2(A({rotation:N}));return(0,c.jsxs)("group",{children:[(0,c.jsxs)(r6.mesh,{position:I,rotation:M,name:"shadergradient-mesh",children:["plane"===e&&(0,c.jsx)("planeGeometry",{args:[10,10,1,192]}),"sphere"===e&&(0,c.jsx)("icosahedronGeometry",{args:[1,64]}),"waterPlane"===e&&(0,c.jsx)("planeGeometry",{args:[10,10,192,192]}),R&&(0,c.jsx)("colorShiftMaterial",{ref:D,roughness:1-z})]}),(0,c.jsx)("mesh",{children:(0,c.jsxs)("lineSegments",{renderOrder:1,position:F,rotation:N,visible:!1,children:["plane"===e&&(0,c.jsx)("planeGeometry",{args:[10,10,1,36]}),"sphere"===e&&(0,c.jsx)("icosahedronGeometry",{args:[1,12]}),"waterPlane"===e&&(0,c.jsx)("planeGeometry",{args:[10,10,36,36]}),R&&(0,c.jsx)("hoveredLineMaterial",{ref:L})]})})]})},nO=(a=null!=(n=L())?h(y(n)):{},((e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of v(t))x.call(e,i)||void 0===i||f(e,i,{get:()=>t[i],enumerable:!(r=p(t,i))||r.enumerable});return e})(n&&n.__esModule?a:f(a,"default",{value:n,enumerable:!0}),n)),nR=[{title:"Halo",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uSpeed=0.4&uStrength=4&uTime=0&uFrequency=5.5&wireframe=false"},{title:"Pensive",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false"},{title:"Mint",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%2394ffd1&color2=%236bf5ff&color3=%23ffffff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0.9&positionZ=-0.3&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false&shader=defaults"},{title:"Interstella",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&fov=45&positionX=-0.1&positionY=0&positionZ=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false"},{title:"Nighty night",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false"},{title:"Viola orientalis",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=0&cDistance=7.1&cPolarAngle=140&cameraZoom=17.3&color1=%23ffffff&color2=%23ffbb00&color3=%230700ff&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=1&uTime=0&wireframe=false&uFrequency=5.5&shader=defaults"},{title:"Universe",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23FE8989&color3=%23000000&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=-0.5&positionY=0.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&type=waterPlane&uAmplitude=0&uDensity=1.1&uSpeed=0.1&uStrength=2.4&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"},{title:"Sunset",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=60&cDistance=7.1&cPolarAngle=90&cameraZoom=15.3&color1=%23ff7a33&color2=%2333a0ff&color3=%23ffc53d&embedMode=off&envPreset=dawn&grain=off&http%3A%2F%2Flocalhost%3A3002%2Fcustomize%3Fanimate=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-0.15&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=0.4&uTime=0&uFrequency=5.5&wireframe=false"},{title:"Mandarin",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23ff6a1a&color2=%23c73c00&color3=%23FD4912&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-2.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uFrequency=5.5&uDensity=1.8&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false"},{title:"Cotton Candy",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%23f3f2f8&color3=%23dbf8ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=1.8&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&type=waterPlane&uDensity=1&uSpeed=0.3&uStrength=3&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"}];nR[0].url;var nD=nO.parse(tr(nR[0].url),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"});function nL(e){var{control:t="props",dampingFactor:i,rotSpringOption:r,posSpringOption:n,isFigmaPlugin:a=!1}=e,o=z(e,["control","dampingFactor","rotSpringOption","posSpringOption","isFigmaPlugin"]);let s=T(T({},nD),o);"query"===t&&(s=nO.parse(tr(o.urlString),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let d=s,{lightType:h,envPreset:f,brightness:m,grain:p,toggleAxis:g}=d,v=z(d,["lightType","envPreset","brightness","grain","toggleAxis"]);return function(e){let{gl:t,scene:i,camera:r,size:n}=(0,u.z)(),a=(0,l.useMemo)(()=>{let a=new q(t);a.addPass(new Z(i,r));let o=new ei(n.width,n.height,{shape:1,radius:2,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:1,blending:1,blendingMode:1,greyscale:!1,disable:e});return a.addPass(o),a},[t,i,r,n,e]);(0,l.useEffect)(()=>null==a?void 0:a.setSize(n.width,n.height),[a,n]),(0,u.A)((e,i)=>(t.autoClear=!0,void a.render(i)),1)}("off"===p),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(tu,{lightType:h,brightness:m,envPreset:f}),(0,c.jsx)(nA,P(T({},v),{rotSpringOption:r,posSpringOption:n}),JSON.stringify(v)),g&&(0,c.jsx)(ey,{isFigmaPlugin:a}),(0,c.jsx)(tn,T({dampingFactor:i},v))]})}}}]);