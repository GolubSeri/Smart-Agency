function ibg(){$.each($(".ibg"),(function(e,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}function amh(){$(".amh").each((function(){var e=0,t=this.classList.item(0),o=this.classList.item(2);$(window).width()>=Number(o)?($("."+t).each((function(){$("."+t).css("min-height","auto");var o=$(this).height();o>e&&(e=o)})),$("."+t).css("min-height",e+"px")):$("."+t).each((function(){$("."+t).css("min-height","auto")}))}))}ibg(),amh(),jQuery(window).resize((function(){amh()})),new Swiper(".clients-midle",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},loop:!0,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!0},speed:500});const iconMenu=document.querySelector(".burger__icon"),menuBody=document.querySelector(".burger__body"),mainLogo=document.querySelector(".main-header__logo");iconMenu&&iconMenu.addEventListener("click",(function(e){document.body.classList.toggle("_lock"),iconMenu.classList.toggle("_active"),menuBody.classList.toggle("_active"),mainLogo.classList.contains("_disable")?(mainLogo.classList.remove("_display"),setTimeout((()=>{mainLogo.classList.remove("_disable")}),1)):(mainLogo.classList.add("_disable"),setTimeout((()=>{mainLogo.classList.add("_display")}),200))}));const menuLinks=document.querySelectorAll(".menu__link[data-goto]");if(menuLinks.length>0){function onMenuLinkClick(e){const t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const o=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector(".main-header").offsetHeight;window.scrollTo({top:o,behavior:"smooth"}),e.preventDefault(),iconMenu.classList.contains("_active")&&(document.body.classList.remove("_lock"),iconMenu.classList.toggle("_active"),menuBody.classList.toggle("_active"),mainLogo.classList.remove("_display"),setTimeout((()=>{mainLogo.classList.remove("_disable")}),1))}}menuLinks.forEach((e=>{e.addEventListener("click",onMenuLinkClick)}))}const logoLink=document.querySelector(".logo__link");logoLink&&logoLink.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"}),e.preventDefault()}));