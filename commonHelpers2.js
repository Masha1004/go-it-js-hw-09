import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".feedback-form"),l="feedback-form-state",t=()=>{let a={};const e=localStorage.getItem(l);return e&&(a=JSON.parse(e)),{formData:a}};o.addEventListener("input",a=>{const e=t().formData;e[a.target.name]=a.target.value.trim();const r=JSON.stringify(e);localStorage.setItem(l,r)});o.addEventListener("submit",a=>{var e,r,m,s;a.preventDefault(),!((e=t().formData)!=null&&e.email)||!((r=t().formData)!=null&&r.message)?alert("Please fill in all fields of the form!"):(console.log({email:(m=t().formData)==null?void 0:m.email,message:(s=t().formData)==null?void 0:s.message}),localStorage.removeItem(l),o.reset())});var i;o.elements.message.value=((i=t().formData)==null?void 0:i.message)||"";var n;o.elements.email.value=((n=t().formData)==null?void 0:n.email)||"";
//# sourceMappingURL=commonHelpers2.js.map