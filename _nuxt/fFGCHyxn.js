import{A as h,bG as _,I as x,d as s,e as o,h as v,F as u,X as c,br as d,E as z,_ as g}from"./-ou12Yc7.js";const M={class:"absolute pointer-events-none z-[-1] inset-y-0 inset-x-5 sm:inset-x-7 lg:inset-x-9 overflow-hidden"},b={class:"stars size-full absolute inset-x-0 top-0"},w=h({__name:"StarsBg",props:{starCount:{default:300},color:{default:"var(--ui-primary)"},speed:{default:"normal"},size:{default:()=>({min:1,max:2})}},setup(p){const t=p,e=l=>Array.from({length:l},()=>({x:Math.floor(Math.random()*2e3),y:Math.floor(Math.random()*2e3),size:typeof t.size=="number"?t.size:Math.random()*(t.size.max-t.size.min)+t.size.min})),a={slow:{duration:200,opacity:.5,ratio:.3},normal:{duration:150,opacity:.75,ratio:.3},fast:{duration:100,opacity:1,ratio:.4}},n=_("stars",()=>({slow:e(Math.floor(t.starCount*a.slow.ratio)),normal:e(Math.floor(t.starCount*a.normal.ratio)),fast:e(Math.floor(t.starCount*a.fast.ratio))})),m=x(()=>[{stars:n.value.fast,...a.fast},{stars:n.value.normal,...a.normal},{stars:n.value.slow,...a.slow}]);return(l,B)=>(o(),s("div",M,[v("div",b,[(o(!0),s(u,null,c(z(m),(i,f)=>(o(),s("div",{key:f,class:"star-layer",style:d({"--star-duration":`${i.duration}s`,"--star-opacity":i.opacity,"--star-color":l.color})},[(o(!0),s(u,null,c(i.stars,(r,y)=>(o(),s("div",{key:y,class:"star absolute rounded-full",style:d({left:`${r.x}px`,top:`${r.y}px`,width:`${r.size}px`,height:`${r.size}px`,backgroundColor:"var(--star-color)",opacity:"var(--star-opacity)"})},null,4))),128))],4))),128))])]))}}),S=Object.assign(g(w,[["__scopeId","data-v-9337506d"]]),{__name:"StarsBg"});export{S as default};
