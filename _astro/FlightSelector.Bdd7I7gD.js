import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as o}from"./index.DhYZZe0J.js";var n=(t=>(t.GLIDE="glide",t.THERMAL="thermal",t.SUNSET="sunset",t))(n||{});const c=()=>{const t=new Map([["glide",100],["thermal",120],["sunset",150]]),[a,l]=o.useState(null);return o.useEffect(()=>{const r=new URLSearchParams(window.location.search).get("flight");if(!Object.values(n).includes(r)){window.history.replaceState({},"",`${window.location.pathname}`);return}l({type:r,price:t.get(r)})},[]),o.useEffect(()=>{if(a===null)return;const s=new URLSearchParams(window.location.search);s.set("flight",a.type),window.history.replaceState({},"",`${window.location.pathname}?${s}`)},[a]),e.jsxs("section",{children:[e.jsx("p",{className:"text-gray-400 mb-3",children:"Please choose the type of your flight"}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("button",{onClick:()=>l({type:"glide",price:t.get("glide")}),className:`relative h-20 flex-1 rounded-lg border-2 ${a?.type==="glide"?"border-orange-500":"border-slate-400"} overflow-hidden hover:shadow-lg transition-shadow`,children:e.jsx("p",{className:"absolute font-display font-medium top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:"GLIDE"})}),e.jsxs("button",{onClick:()=>l({type:"thermal",price:t.get("thermal")}),className:`relative h-20 flex-1 rounded-lg border-2 ${a?.type==="thermal"?"border-orange-500":"border-slate-400"} overflow-hidden transition-shadow hover:shadow-lg hover:bg-slate-100 tracking-wide`,children:[e.jsx("p",{className:"absolute font-display font-medium top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wide",children:"THERMAL"}),e.jsx("img",{draggable:!1,className:"relative top-3 right-20",src:"illustrations/mountain.svg",alt:"Mountain"})]}),e.jsxs("button",{onClick:()=>l({type:"sunset",price:t.get("sunset")}),className:`bg-amber-100 relative h-20 flex-1 rounded-lg border-2 ${a?.type==="sunset"?"border-orange-500":"border-slate-400"} overflow-hidden transition-shadow hover:shadow-lg hover:bg-[#fdeeb4] tracking-wide`,children:[e.jsx("p",{className:"absolute font-display font-medium top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:"SUNSET"}),e.jsx("img",{draggable:!1,className:"relative scale-[30%] left-28 xl:left-[140px] bottom-6 -rotate-12",src:"illustrations/glider.png",alt:"Glider"}),e.jsx("div",{className:"relative bg-orange-500 left-3 bottom-5 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"})]})]}),a?e.jsxs("p",{className:"text-slate-800 mt-4 leading-none text-5xl font-bold",children:["€ ",a?.price]}):e.jsx("p",{className:"text-gray-400 mt-4 leading-none text-5xl font-bold",children:"€ 0"})]})};export{c as default};
