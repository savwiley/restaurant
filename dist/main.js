(()=>{"use strict";const e=document.querySelector("body"),t=((()=>{const t=document.createElement("header");t.setAttribute("class","header"),e.appendChild(t);const n=document.createElement("img");n.setAttribute("src","../images/ice-cream.svg"),n.setAttribute("id","logo"),t.appendChild(n);const c=document.createElement("h1");c.textContent="The Ice Cream Shoppe",t.appendChild(c)})(),(()=>{const t=document.createElement("div");t.setAttribute("class","nav");const n=document.createElement("div");n.setAttribute("class","navBtn"),n.setAttribute("id","homeBtn"),n.textContent="Home",t.appendChild(n);const c=document.createElement("div");c.setAttribute("class","navBtn"),c.setAttribute("id","menuBtn"),c.textContent="Menu",t.appendChild(c);const i=document.createElement("div");i.setAttribute("class","navBtn"),i.setAttribute("id","contactBtn"),i.textContent="Contact",t.appendChild(i),e.appendChild(t)})(),(()=>{const t=document.createElement("footer");t.setAttribute("class","footer"),t.innerHTML='<a href="https://github.com/savwiley/restaurant">by savwiley</a>',t.innerHTML+=" | ",t.innerHTML+="made with webpack \r\n",t.innerHTML+="images from pexels",t.innerHTML+=" | ",t.innerHTML+="logo from freepik \r\n",e.appendChild(t)})(),initialPageLoad),n=document.querySelector("div#content"),c=((()=>{const e=document.createElement("div");e.style.width="400px",e.style.height="400px",e.style.background="hotpink",n.appendChild(e),n.style.background="green"})(),homePage);t(),c(),document.querySelector("#homeBtn").addEventListener("click",c)})();