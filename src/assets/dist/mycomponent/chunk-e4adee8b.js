function t(t,o={isRight:!1,isTop:!1},i=document.documentElement){if(!t)return;let e={},l=t.getBoundingClientRect(),n=i.scrollLeft,r=i.scrollTop;return o.isRight?e.right=i.scrollWidth-l.left-l.width:e.left=l.left+n,o.isTop?e.bottom=r+l.top:e.top=r+l.top+l.height,e}function o(t,o){const i=t.style;o.left?(i.left=o.left+"px",i.right="initial"):o.right&&(i.right=o.right+"px",i.left="initial"),o.top?(i.top=o.top+"px",i.bottom="initial",i.transform=""):o.bottom&&(i.top=o.bottom+"px",i.bottom="initial",i.transform="translateY(-100%)")}export{t as a,o as b};