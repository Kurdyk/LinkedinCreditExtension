(()=>{"use strict";const t=["Thomas"],e=new Map([["Thomas","http://localhost:3000/author/thomas"]]),s=document.getElementsByClassName("post-content");for(let a=0;a<s.length;a++){const n=s[a].getElementsByTagName("p")[0];n.innerText.split(" ").filter((e=>t.includes(e))).forEach((t=>{const s=document.createElement("iframe");s.src=e.get(t),s.width="100%",s.sandbox.add("allow-scripts"),s.height="100%",n.appendChild(s)}))}})();