import{d as u,aj as d,c as _,N as f,w as o,h as i,k as e,az as h}from"./BvoxZY6n.js";import{_ as g}from"./h5aLic-x.js";import{_ as w}from"./DAQBy9Cm.js";import"./8UVdJEx_.js";import"./Co3o3wKV.js";import"./CrRSmz-a.js";const E=u({__name:"login",setup(b){d({title:"Login"});const r=[{name:"email",type:"text",label:"Email",placeholder:"Enter your email"},{name:"password",label:"Password",type:"password",placeholder:"Enter your password"}],n=t=>{const s=[];return t.email||s.push({path:"email",message:"Email is required"}),t.password||s.push({path:"password",message:"Password is required"}),s},c=[{label:"Continue with GitHub",icon:"i-simple-icons-github",color:"white",click:()=>{console.log("Redirect to GitHub")}}];function l(t){console.log("Submitted",t)}return(t,s)=>{const a=h,m=g,p=w;return _(),f(p,{class:"max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur"},{default:o(()=>[i(m,{fields:r,validate:n,providers:c,title:"Welcome back",align:"top",icon:"i-heroicons-lock-closed",ui:{base:"text-center",footer:"text-center"},"submit-button":{trailingIcon:"i-heroicons-arrow-right-20-solid"},onSubmit:l},{description:o(()=>[e(" Don't have an account? "),i(a,{to:"/signup",class:"text-primary font-medium"},{default:o(()=>[e("Sign up")]),_:1}),e(". ")]),"password-hint":o(()=>[i(a,{to:"/",class:"text-primary font-medium"},{default:o(()=>[e("Forgot password?")]),_:1})]),footer:o(()=>[e(" By signing in, you agree to our "),i(a,{to:"/",class:"text-primary font-medium"},{default:o(()=>[e("Terms of Service")]),_:1}),e(". ")]),_:1})]),_:1})}}});export{E as default};