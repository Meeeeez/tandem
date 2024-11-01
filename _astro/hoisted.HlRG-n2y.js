import"./hoisted.2daoxv0f.js";let n=0;const l=["/vid/plose_compressed.mp4","/vid/plose_compressed.mp4","/vid/plose_compressed.mp4"],a=document.getElementById("carousel"),o=document.getElementById("video"),s=document.getElementById("videoSource"),g=document.getElementById("carouselOverlay"),i=document.getElementById("backButton"),r=document.getElementById("nextButton");if(!a||!o||!s||!g||!i||!r)throw new Error("One or more elements not found");i.addEventListener("click",()=>{n===0?n=l.length-1:n--,d(n)});r.addEventListener("click",()=>{n===l.length-1?n=0:n++,d(n)});function d(e){!s||!o||(o.pause(),s.setAttribute("src",l[e]),o.load(),o.play())}for(let e=1;e<=5;e++){const t=document.getElementById(`accordion-button-${e}`);t&&t.addEventListener("click",()=>v(e))}function v(e){const t=document.getElementById(`content-${e}`),c=document.getElementById(`icon-${e}`);if(!t||!c)return;const m=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `,u=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;t.style.maxHeight&&t.style.maxHeight!=="0px"?(t.style.maxHeight="0",c.innerHTML=u):(t.style.maxHeight=t.scrollHeight+"px",c.innerHTML=m)}
