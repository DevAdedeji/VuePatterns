import{a7 as p,Q as s,a8 as u,a9 as c,aa as l,ab as d,ac as f,ad as m,ae as h,af as A,ag as g,ah as y,M as P,d as v,u as w,p as C,k as R,ai as _,aj as b,ak as D}from"./chunks/framework.9e10ac21.js";import{t as r}from"./chunks/theme.3a6f1fad.js";const E={...r,Layout:()=>p(r.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=i(E),L=v({name:"VitePressApp",setup(){const{site:e}=w();return C(()=>{R(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),_(),b(),D(),n.setup&&n.setup(),()=>p(n.Layout)}});async function T(){const e=O(),a=j();a.provide(c,e);const t=l(e.route);return a.provide(d,t),a.component("Content",f),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function j(){return A(L)}function O(){let e=s,a;return g(t=>{let o=y(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),P(()=>import(o),[])},n.NotFound)}s&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{T as createApp};
